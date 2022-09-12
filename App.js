import 'react-native-gesture-handler';
import React from 'react';
import './config/firebase';
import RootNavigation from './navigation';
import { LogBox, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from './assets/Colors';
import { NavigationContainer } from '@react-navigation/native';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          translucent
          backgroundColor={Colors.lavenderMist}
          barStyle={'dark-content'}
        />
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
