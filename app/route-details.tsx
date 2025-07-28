import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, MapPin, Play, Pause, Volume2 } from 'lucide-react-native';
import { Audio } from 'expo-av';
import { busRoutes } from '../data/busRoutes';
import { BusStop } from '../types/routes';
import { audioAssets } from './audioAssets';
import { isEmoji } from './(tabs)';

export default function RouteDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [currentPlayingStop, setCurrentPlayingStop] = useState<string | null>(null);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const routeNumber = params.routeNumber as string;
  const routeName = params.routeName as string;

  // Find the route from the data instead of using params
  const route = busRoutes.find(r => r.routeNumber === routeNumber && r.routeName === routeName);
  const stops: BusStop[] = route?.stops || [];

  useEffect(() => {
    // Set up audio mode when component mounts
    const setupAudio = async () => {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: true,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: false,
        });
      } catch (error) {
        console.error('Error setting up audio mode:', error);
      }
    };

    setupAudio();

    // Cleanup function
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const playStopAudio = async (stop: BusStop, index: number) => {
    try {
      // Stop current audio if playing
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(null);
      }

      if (currentPlayingStop === stop.id) {
        setCurrentPlayingStop(null);
        return;
      }

      setIsLoading(true);
      setCurrentPlayingStop(stop.id);

      // Extract just the filename from stop.audioFile (handles both full path and filename)
      const audioFileName = stop.audioFile.split('/').pop();
      if (!audioFileName) {
        throw new Error(`Invalid audio file name for stop: ${stop.name}`);
      }
      const audioSource = audioAssets[audioFileName];
      if (!audioSource) {
        throw new Error(`Audio file not found in assets: ${audioFileName}`);
      }

      // Load the audio file from assets
      const { sound: newSound } = await Audio.Sound.createAsync(
        audioSource,
        { shouldPlay: true }
      );

      setSound(newSound);

      // Set up event listeners
      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          setCurrentPlayingStop(null);
          setSound(null);
        }
      });

      setIsLoading(false);

    } catch (error) {
      console.error('Error playing audio:', error);
      setIsLoading(false);
      setCurrentPlayingStop(null);
      Alert.alert('Error', `Failed to play audio for ${stop.name}. Please try again.`);
    }
  };

  const handleBack = () => {
    if (sound) {
      sound.stopAsync();
      sound.unloadAsync();
    }
    router.back();
  };

  if (!route) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <ArrowLeft size={24} color="#ffffff" />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Text style={styles.routeNumber}>Route {routeNumber}</Text>
            <Text style={styles.routeName}>{routeName}</Text>
          </View>
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Route not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <ArrowLeft size={24} color="#ffffff" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.routeNumber}>{routeName}</Text>
          {!isEmoji(routeNumber) && <Text style={styles.routeName}>{routeNumber}</Text>}
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.stopsContainer}>
          <Text style={styles.stopsTitle}>{routeName === "Quick Actions" ? 'Actions' : 'Bus stops'}</Text>
          <Text style={styles.stopsSubtitle}>Tap any {routeName === "Quick Actions" ? 'action' : 'stop'} to hear the announcement</Text>

          <View style={styles.stopsList}>
            {stops.map((stop: BusStop, index: number) => (
              <TouchableOpacity
                key={stop.id}
                style={[
                  styles.stopCard,
                  currentPlayingStop === stop.id && styles.stopCardActive
                ]}
                onPress={() => playStopAudio(stop, index)}
                activeOpacity={0.8}
                disabled={isLoading}
              >
                <View style={styles.stopHeader}>
                  <View style={styles.stopNumberContainer}>
                    <Text style={styles.stopNumber}>{index + 1}</Text>
                  </View>
                  <View style={styles.stopInfo}>
                    <Text style={styles.stopName}>{stop.name}</Text>
                    {/* <Text style={styles.stopCode}>Stop Code: {stop.code}</Text> */}
                  </View>
                  <View style={styles.playButton}>
                    {currentPlayingStop === stop.id ? (
                      <Pause size={20} color="#d95639" />
                    ) : (
                      <Play size={20} color="#d95639" />
                    )}
                  </View>
                </View>

                {currentPlayingStop === stop.id && (
                  <View style={styles.playingIndicator}>
                    <Volume2 size={16} color="#d95639" />
                    <Text style={styles.playingText}>
                      {isLoading ? 'Loading audio...' : 'Playing announcement...'}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#d95639',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 16,
    padding: 8,
  },
  headerContent: {
    flex: 1,
  },
  routeNumber: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 2,
    // paddingTop: 40,
  },
  routeName: {
    fontFamily: 'Fredoka-Regular',
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.9,
  },
  scrollView: {
    flex: 1,
  },
  stopsContainer: {
    padding: 16,
  },
  stopsTitle: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 24,
    color: '#070707',
    marginBottom: 4,
    textAlign: 'center',
  },
  stopsSubtitle: {
    fontFamily: 'Fredoka-Regular',
    fontSize: 16,
    color: '#070707',
    opacity: 0.7,
    textAlign: 'center',
    marginBottom: 24,
  },
  stopsList: {
    gap: 12,
  },
  stopCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  stopCardActive: {
    backgroundColor: '#fcd36a',
  },
  stopHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stopNumberContainer: {
    backgroundColor: '#d95639',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  stopNumber: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 16,
    color: '#ffffff',
  },
  stopInfo: {
    flex: 1,
  },
  stopName: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    color: '#070707',
    marginBottom: 2,
  },
  stopCode: {
    fontFamily: 'Fredoka-Regular',
    fontSize: 14,
    color: '#070707',
    opacity: 0.7,
  },
  playButton: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playingIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#d95639',
    opacity: 0.7,
  },
  playingText: {
    fontFamily: 'Fredoka-Regular',
    fontSize: 14,
    color: '#d95639',
    marginLeft: 8,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 18,
    color: '#d95639',
    marginBottom: 24,
  },
});