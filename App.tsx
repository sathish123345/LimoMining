import React from "react";
import {
  NativeBaseProvider,
} from "native-base";
import {StatusBar} from "react-native"
import 'react-native-gesture-handler';
import { Navigation } from "./app/navigation";
import { COLORS, theme } from "./app/constant/theme";
import InitialLoad from "./app/hooks/InitialLoad";


export default function App() {
  const appIsReady = InitialLoad()
  
  if (!appIsReady) {
    return null;
  }
  return (
    <NativeBaseProvider theme={theme}>
      <Navigation/>
      <StatusBar backgroundColor={COLORS.primary} barStyle={"light-content"}/>
    </NativeBaseProvider>
  );
}
