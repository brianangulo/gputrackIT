import React from 'react';
import { View } from 'react-native';
import Main from "./components/MainComponent";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}