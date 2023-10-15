import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TeamA from './TeamA';
import { COLORS } from '../../constant/theme';


const Teams = () => {
    const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor: COLORS.white,
      tabBarInactiveTintColor: COLORS.light,
      tabBarIndicatorStyle: {
        backgroundColor: COLORS.secondary,
      },
      lazy: true,
      tabBarLabelStyle: { fontWeight: "500" },
      tabBarStyle: {backgroundColor: COLORS.primary},
    }}
    >
    <Tab.Screen name="Team A" component={TeamA} />
    <Tab.Screen name="Team B" component={TeamA} />
    <Tab.Screen name="Direct Referral" component={TeamA} />
  </Tab.Navigator>
  )
}

export default Teams