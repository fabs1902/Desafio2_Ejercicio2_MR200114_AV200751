import React from "react";
import{View,Text, SafeAreaView, StyleSheet} from 'react-native';
import Navegacion from "./src/navegacion/navegacion";
import {NavigationContainer} from '@react-navigation/native';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function App() {
  return (
    <NavigationContainer>
      <Navegacion></Navegacion>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
