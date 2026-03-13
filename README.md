# React Native Starter

A production-ready React Native starter template built with Expo, TypeScript, React Navigation, and Redux Toolkit. Designed as a clean foundation for building mobile applications with a professional dark theme.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React Native 0.76 | Core framework |
| Expo SDK 52 | Development tooling & build system |
| TypeScript | Type safety (strict mode) |
| React Navigation 7 | Native stack + bottom tab navigation |
| Redux Toolkit | State management |
| RTK Query | API data fetching & caching |
| AsyncStorage | Local persistence |

## Quick Start

```bash
# Clone the repository
git clone <repo-url>
cd react-native-starter

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm start
# or
yarn start
```

Scan the QR code with Expo Go (Android) or the Camera app (iOS) to run on a device.

## Project Structure

```
react-native-starter/
├── src/
│   ├── app/
│   │   └── App.tsx              # Root app with providers
│   ├── navigation/
│   │   ├── RootNavigator.tsx    # Stack navigator (Auth + Main)
│   │   ├── MainTabs.tsx         # Bottom tab navigator
│   │   └── types.ts             # Navigation type definitions
│   ├── screens/
│   │   ├── HomeScreen.tsx       # Home dashboard
│   │   ├── ProfileScreen.tsx    # User profile
│   │   ├── SettingsScreen.tsx   # App settings
│   │   └── LoginScreen.tsx      # Authentication
│   ├── components/
│   │   ├── Button.tsx           # Button (primary/secondary/outline)
│   │   └── Card.tsx             # Card with glassmorphic style
│   ├── store/
│   │   ├── index.ts             # Redux store configuration
│   │   ├── hooks.ts             # Typed hooks
│   │   └── slices/
│   │       └── authSlice.ts     # Authentication state
│   ├── services/
│   │   └── api.ts               # RTK Query base API
│   ├── theme/
│   │   └── index.ts             # Colors, spacing, typography
│   └── utils/
│       └── storage.ts           # AsyncStorage wrapper
├── App.tsx                      # Entry point
├── app.json                     # Expo configuration
├── babel.config.js
├── tsconfig.json
└── package.json
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Expo development server |
| `npm run ios` | Start on iOS simulator |
| `npm run android` | Start on Android emulator |
| `npm run lint` | Run ESLint |
| `npm test` | Run Jest tests |

## Architecture Decisions

**Navigation** -- React Navigation v7 with a native stack for auth flow and bottom tabs for the main app. Navigation types are fully typed for compile-time safety.

**State Management** -- Redux Toolkit provides a standardized store setup with RTK Query for API calls. The auth slice manages authentication state, and typed hooks (`useAppDispatch`, `useAppSelector`) ensure type safety throughout.

**Theming** -- A centralized theme module exports colors, spacing, typography, and border radius constants. The dark theme is applied consistently across all screens and components.

**Storage** -- AsyncStorage is wrapped in a typed utility for token and user data persistence, providing a clean API for local storage operations.

**API Layer** -- RTK Query is configured with a base query that automatically attaches auth tokens to outgoing requests. Extend the `api` service by injecting endpoints.

## Environment Variables

Copy `.env.example` to `.env` and configure:

```
API_URL=http://localhost:3001
```

## License

MIT
