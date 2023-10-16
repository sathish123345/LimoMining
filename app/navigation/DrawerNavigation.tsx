import { View, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import { Screens } from '../components/Screens';
import { COLORS } from '../constant/theme';
import Home from '../screens/Home';
import { Avatar, Box, HStack, VStack,Text } from 'native-base';
import Purchases from '../screens/Purchases';
import Transactions from '../screens/Transactions';
import Teams from '../screens/teams/Teams';
import Withdraw from '../screens/Withdraw';
import PersonalSettings from '../screens/settings/PersonalSettings';


export default function App({navigation}:any) {
  const [currentTab, setCurrentTab] = useState("MY ACCOUNT");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;


  const drawerAnimation = ()=>{
    Animated.timing(scaleValue, {
      toValue: showMenu ? 1 : 0.98,
      duration: 300,
      useNativeDriver: true
    })
      .start()

    Animated.timing(offsetValue, {
      // YOur Random Value...
      toValue: showMenu ? 0 : 200,
      duration: 300,
      useNativeDriver: true
    })
      .start()

    Animated.timing(closeButtonOffset, {
      // YOur Random Value...
      toValue: !showMenu ? 0 : 0,
      duration: 300,
      useNativeDriver: true
    })
      .start()
      setShowMenu(!showMenu);
  }

  return (
    <Screens>
    <SafeAreaView style={styles.container}>

      <View style={{ justifyContent: 'flex-start', padding: 15 }}>
      <VStack alignItems={"center"}  w="50%">
    <AntDesign  style={{paddingHorizontal:15}} name={"idcard"} size={55} color={COLORS.secondary} />
    <VStack space={2} mx="3">
    <Text mt="2"  textAlign={"center"} fontSize={"sm"} fontWeight={"semibold"} color={"white"}  numberOfLines={1} textTransform={"uppercase"}>sathish kumar</Text>
    </VStack>
    </VStack>
        <View style={{ flexGrow: 1, marginTop: 10 }}>
          {TabButton(currentTab, setCurrentTab, "MY ACCOUNT",drawerAnimation, navigation)}
          {TabButton(currentTab, setCurrentTab, "PURCHASES",drawerAnimation, navigation)}
          {TabButton(currentTab, setCurrentTab, "TEAMS",drawerAnimation, navigation)}
          {TabButton(currentTab, setCurrentTab, "TRANSACTIONS",drawerAnimation, navigation)}
          {TabButton(currentTab, setCurrentTab, "WITHDRAW",drawerAnimation, navigation)}
          {TabButton(currentTab, setCurrentTab, "PERSONAL SETTINGS",drawerAnimation, navigation)}
        </View>
        <View>
          {TabButton(currentTab, setCurrentTab, "LogOut",drawerAnimation, navigation)}
        </View>
      </View>

      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: COLORS.light,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: showMenu ?3:0,
        paddingVertical: showMenu ? 3:0,
        borderRadius: showMenu ? 4: 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        {
          // Menu Button...
        }

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          <Box h="100%">
          <HStack bgColor={"primary.600"} h={55} alignItems={"center"} justifyContent={"flex-start"}>
          <TouchableOpacity onPress={() => drawerAnimation()}>

            <Ionicons style={{paddingHorizontal:15}} name={showMenu ? "close":"menu"} size={24} color="white" />

          </TouchableOpacity>
          <Text style={{
            fontSize:16,
            fontWeight: 'bold',
            color: 'white',
            
          }}>{currentTab}</Text>
          </HStack>
             {currentTab === "MY ACCOUNT" ? <Home/> :null} 
             {currentTab === "PURCHASES" ? <Purchases/> :null} 
             {currentTab === "TEAMS" ? <Teams/> :null} 
             {currentTab === "TRANSACTIONS" ? <Transactions/> :null} 
             {currentTab === "WITHDRAW" ? <Withdraw/> :null} 
             {currentTab === "PERSONAL SETTINGS" ? <PersonalSettings/> :null} 
           </Box>     
        </Animated.View>

      </Animated.View>

    </SafeAreaView>
    </Screens>
  );
}

const TabButton = (currentTab:string, setCurrentTab:any, title:string, drawerAnimation:any,navigation:any) => {
  return (

    <TouchableOpacity activeOpacity={0.7} onPress={() => {
      if (title == "LogOut") {
       navigation.replace("SignIn")
      } else {
        setCurrentTab(title)
        drawerAnimation();
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: currentTab == title ? 'white' : 'transparent',
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? COLORS.secondary : "white"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});