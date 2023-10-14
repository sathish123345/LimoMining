import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import DrawerNavigation from './DrawerNavigation';

const RootNavigator = () => {

    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator  initialRouteName="Root"
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: "white",
      },
    }}>
    <Stack.Screen name="Root" component={DrawerNavigation} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    {/* <Stack.Screen name="Home" component={Home} /> */}
  
  </Stack.Navigator>
  )
}

export default RootNavigator