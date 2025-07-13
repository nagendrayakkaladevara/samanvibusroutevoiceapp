# Bus Route Audio App

A React Native mobile application built with Expo that provides audio announcements for bus routes and stops. This app helps passengers navigate bus routes with audio guidance, making public transportation more accessible.

## 🚌 Features

- **Route Selection**: Browse and select from multiple bus routes
- **Audio Announcements**: Play audio announcements for each bus stop
- **Stop Information**: View detailed information about each stop including stop codes
- **Modern UI**: Clean, accessible interface with custom styling
- **Cross-Platform**: Works on both iOS and Android devices
- **Offline Capable**: Audio files are bundled with the app

## 📱 Screenshots

The app features a modern interface with:
- Home screen displaying all available bus routes
- Route details screen showing all stops with audio controls
- Settings screen for app configuration
- Audio player component for stop announcements

## 🛠️ Technology Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router with tab-based navigation
- **Audio**: Expo AV for audio playback
- **UI Components**: Custom components with Lucide React Native icons
- **Styling**: React Native StyleSheet with custom fonts
- **Language**: TypeScript for type safety

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) app on your mobile device (for testing)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Run on your device**
   - Scan the QR code with Expo Go (Android) or Camera app (iOS)
   - Or press `a` for Android emulator or `i` for iOS simulator

## 📁 Project Structure

```
project/
├── app/                    # Expo Router app directory
│   ├── _layout.tsx        # Root layout
│   ├── (tabs)/            # Tab navigation
│   │   ├── _layout.tsx    # Tab layout
│   │   ├── index.tsx      # Home screen
│   │   └── settings.tsx   # Settings screen
│   ├── +not-found.tsx     # 404 page
│   └── route-details.tsx  # Route details screen
├── assets/                 # Static assets
│   ├── audio/             # Audio files for announcements
│   └── images/            # Images and icons
├── components/            # Reusable components
│   └── AudioPlayer.tsx    # Audio player component
├── data/                  # Data files
│   └── busRoutes.ts       # Bus route data
├── hooks/                 # Custom React hooks
│   └── useFrameworkReady.ts
├── types/                 # TypeScript type definitions
│   └── routes.ts          # Route and stop interfaces
└── package.json           # Dependencies and scripts
```

## 🎵 Audio Files

The app includes audio files for bus stop announcements located in `assets/audio/`:
- `route101_stop1.mp3` - Route 101, Stop 1 announcement
- `route101_stop2.mp3` - Route 101, Stop 2 announcement
- `route205_stop1.mp3` - Route 205, Stop 1 announcement
- `route205_stop2.mp3` - Route 205, Stop 2 announcement
- `route150_stop1.mp3` - Route 150, Stop 1 announcement
- `route150_stop2.mp3` - Route 150, Stop 2 announcement
- `route75_stop1.mp3` - Route 75, Stop 1 announcement
- `route75_stop2.mp3` - Route 75, Stop 2 announcement

## 🚌 Available Routes

The app currently includes the following bus routes:

1. **Route 101 - Downtown Express**
   - Central Station → City Hall → Business District → Shopping Mall → University

2. **Route 205 - Airport Shuttle**
   - Airport Terminal → Hotel Plaza → Convention Center → Metro Station

3. **Route 150 - Suburban Loop**
   - Residential Area A → Park & Ride → Shopping Center → Medical Center → School Zone

4. **Route 75 - Beach Line**
   - Beach Resort → Pier Plaza → Boardwalk → Marina → Lighthouse Point

## 🔧 Configuration

### Adding New Routes

To add a new bus route:

1. Add route data to `data/busRoutes.ts`:
   ```typescript
   {
     id: '6',
     routeNumber: '300',
     routeName: 'New Route',
     stops: [
       { id: '1', name: 'Stop 1', code: 'ST001', audioFile: 'route300_stop1.mp3' },
       // ... more stops
     ]
   }
   ```

2. Add corresponding audio files to `assets/audio/`

3. Update the `BusRoute` interface in `types/routes.ts` if needed

### Customizing Audio

- Place audio files in `assets/audio/` directory
- Use MP3 format for best compatibility
- Reference audio files in the route data using the `audioFile` property

## 🎨 Customization

### Styling

The app uses a custom color scheme and typography:
- Primary Color: `#d95639` (Orange)
- Background: `#f8f8f8` (Light Gray)
- Text: `#070707` (Dark Gray)
- Fonts: Fredoka (Bold and Regular)

### Icons

The app uses Lucide React Native icons for a consistent design language.

## 📱 Building for Production

### Web Build
```bash
npm run build:web
```

### Mobile Build
```bash
# For Android
eas build --platform android

# For iOS
eas build --platform ios
```

## 🧪 Testing

The app includes basic error handling and user feedback:
- Audio playback status indicators
- Error alerts for failed audio playback
- Loading states for audio operations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Expo documentation](https://docs.expo.dev/)
2. Review the [React Native documentation](https://reactnative.dev/)
3. Open an issue in the repository

## 🔮 Future Enhancements

- Real-time bus tracking
- Push notifications for approaching stops
- Offline route maps
- Accessibility improvements (VoiceOver/TalkBack support)
- Multi-language support
- Integration with transit APIs

---

**Built with ❤️ using React Native and Expo By Sai Nagendra Yakkaladevara** 