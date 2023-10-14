import { View, Text, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Screens } from '../components/Screens';
import { COLORS } from '../constant/theme';
import Home from '../screens/Home';
import { Avatar, Box, HStack, VStack } from 'native-base';


export default function App({navigation}:any) {
  const [currentTab, setCurrentTab] = useState("MY ACCOUNT");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <Screens>
    <SafeAreaView style={styles.container}>

      <View style={{ justifyContent: 'flex-start', padding: 15 }}>
      <VStack style={{
        alignItems: 'center',
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15,
        alignContent:'center',
      }}>
              <Avatar bg="white" source={{
      uri: "https://bit.ly/broken-link"
    }}>
        SA
      </Avatar>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginTop:4
        }}>Name</Text>

</VStack>

        <View style={{ flexGrow: 1, marginTop: 10 }}>

          {TabButton(currentTab, setCurrentTab, "MY ACCOUNT")}
          {TabButton(currentTab, setCurrentTab, "PURCHASES")}
          {TabButton(currentTab, setCurrentTab, "TEAMS")}
          {TabButton(currentTab, setCurrentTab, "WITHDRAW")}
          {TabButton(currentTab, setCurrentTab, "PERSONAL SETTINGS")}

        </View>

        <View>
          {TabButton(currentTab, setCurrentTab, "LogOut")}
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
          <TouchableOpacity onPress={() => {
            // Do Actions Here....
            // Scaling the view...
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
          }}>

            <Ionicons style={{paddingHorizontal:15}} name={showMenu ? "close":"menu"} size={24} color="white" />

          </TouchableOpacity>
          <Text style={{
            fontSize:16,
            fontWeight: 'bold',
            color: 'white',
            
          }}>{currentTab}</Text>
          </HStack>
             {currentTab === "MY ACCOUNT" ? <Home/> :null} 
</Box>     
        </Animated.View>

      </Animated.View>

    </SafeAreaView>
    </Screens>
  );
}

// For multiple Buttons...
const TabButton = (currentTab:string, setCurrentTab:any, title:string) => {
  return (

    <TouchableOpacity activeOpacity={0.7} onPress={() => {
      if (title == "LogOut") {
        // Do your Stuff...
      } else {
        setCurrentTab(title)
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

        {/* <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? "#5359D1" : "white"
        }}></Image> */}

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? COLORS.primary : "white"
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