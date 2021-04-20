import React from 'react'
import { View} from 'react-native'
import AppLoading from 'expo-app-loading'

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'

import UserIdentification from './src/pages/UserIdentification'

export default function App(){
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return <UserIdentification/>
}