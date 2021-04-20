import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import { Welcome } from './src/pages/welcome';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });
  return (
    <Welcome />
  )
}
