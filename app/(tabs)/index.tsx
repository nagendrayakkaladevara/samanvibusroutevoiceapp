import React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Bus, ChevronRight } from 'lucide-react-native';

interface BusRoute {
  id: string;
  routeNumber: string;
  routeName: string;
  stops: string[];
}

import { busRoutes } from '../../data/busRoutes';

// Transform the imported data to match the expected interface
const transformedBusRoutes: BusRoute[] = busRoutes.map(route => ({
  id: route.id,
  routeNumber: route.routeNumber,
  routeName: route.routeName,
  stops: route.stops.map(stop => stop.name) // Extract just the stop names
}));

export const isEmoji = (value: string): boolean => {
  const emojiRegex = /[\u{1F300}-\u{1FAFF}]/u;
  return emojiRegex.test(value);
};

export default function HomeScreen() {
  const router = useRouter();

  const handleRoutePress = (route: BusRoute) => {
    router.push({
      pathname: '/route-details',
      params: {
        routeNumber: route.routeNumber,
        routeName: route.routeName
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/samv_logo.png')}
          style={styles.headerImage}
        />
        {/* <br></br> */}
        <Text style={styles.headerTitle}>Bus Routes</Text>
        <Text style={styles.headerSubtitle}>Choose your route</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.routesList}>
          {transformedBusRoutes.map((route) => (
            <TouchableOpacity
              key={route.id}
              style={styles.routeCard}
              onPress={() => handleRoutePress(route)}
              activeOpacity={0.8}
            >
              <View style={styles.routeHeader}>
                <View style={styles.routeNumberContainer}>
                  <Text
                    style={[
                      styles.routeNumber,
                      isEmoji(route.routeNumber) && styles.emojiRouteNumber
                    ]}
                  >
                    {route.routeNumber}
                  </Text>
                </View>
                <View style={styles.routeInfo}>
                  <Text style={styles.routeName}>{route.routeName}</Text>
                  <Text style={styles.stopsCount}>{route.stops.length} {route.routeName === 'Quick Actions' ? 'actions' : 'stops'}</Text>
                </View>
                <ChevronRight size={24} color="#1D1616" />
              </View>

              <View style={styles.routeIcon}>
                <Bus size={20} color="#1D1616" />
              </View>
            </TouchableOpacity>
          ))}
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
    backgroundColor: '#1D1616',
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 24,
    alignItems: 'center',
  },
  headerImage: {
    width: 180,
    height: 50,
    alignSelf: 'center',
    // marginBottom: 16,
    resizeMode: 'contain',
  },
  headerTitle: {
    // fontFamily: 'Inter_300Light',
    fontFamily: 'sans-serif',
    fontSize: 28,
    color: '#ffffff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontFamily: 'Fredoka-Regular',
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.9,
  },
  scrollView: {
    flex: 1,
  },
  routesList: {
    padding: 16,
    gap: 16,
  },
  routeCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    position: 'relative',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  routeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  routeNumberContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 12,
    width: 120,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  routeNumber: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    color: '#1D1616',
    fontWeight:600
  },
  emojiRouteNumber: {
    fontSize: 32,
    lineHeight: 36,
  },
  routeInfo: {
    flex: 1,
  },
  routeName: {
    fontFamily: 'sans-serif',
    fontSize: 15,
    color: '#070707',
    marginBottom: 2,
  },
  stopsCount: {
    fontFamily: 'Fredoka-Regular',
    fontSize: 14,
    color: '#070707',
    opacity: 0.8,
  },
  routeIcon: {
    position: 'absolute',
    bottom: 12,
    right: 16,
    opacity: 0.3,
  },
});