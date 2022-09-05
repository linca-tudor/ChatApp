import 'react-native-gesture-handler';
import React from 'react';
import './config/firebase';
import RootNavigation from './navigation';
import { LogBox, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from './assets/Colors';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent
        backgroundColor={Colors.lavenderMist}
        barStyle={'dark-content'}
      />
      <RootNavigation />
    </SafeAreaProvider>
  );
}
