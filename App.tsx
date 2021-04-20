import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Jost_400Regular, Jost_600SemiBold, Jost_500Medium } from '@expo-google-fonts/jost';
import { UserIdentification } from './src/pages/UserIdentification';
// import { Welcome } from './src/pages/welcome';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
  });

  if(!fontsLoaded)
    return <AppLoading />
  return (
    // <Welcome />
    <UserIdentification />
  )
}
