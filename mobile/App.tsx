import { StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes';
import { AuthProvider } from './src/contexts/Auth';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' translucent backgroundColor="#1D1D2E" />
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </NavigationContainer>
  );
}

