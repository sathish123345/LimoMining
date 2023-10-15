import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { COLORS } from '../../constant/theme';
import Personal from './Personal';
import Bank from './Bank';
import Address from './Address';
import Documents from './Documents';

const PersonalSettings = () => {
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
    <Tab.Screen name="Personal" component={Personal} />
    <Tab.Screen name="Address" component={Address} />
    <Tab.Screen name="Documents" component={Documents} />
    <Tab.Screen name="Bank" component={Bank} />
  </Tab.Navigator>
  )
}

export default PersonalSettings