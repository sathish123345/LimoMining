import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
    Box,
    Divider,
    HStack,
    Text
  } from "native-base";
  import { Ionicons } from "@expo/vector-icons";
  import { COLORS, width } from "../constant/theme";

const Header = (props:any) => {
  return (
    <>
    <HStack zIndex={100} h="16" key={Math.floor(Math.random()*100)}   justifyContent="space-between">
   <HStack alignItems="center">
   {props.backIcon ? <TouchableOpacity onPress={() => props.backPress()}  activeOpacity={1}>
    <HStack alignItems="center">
    <Ionicons
   style={{marginVertical:3, marginLeft:12}}
      name="chevron-back"
      size={28}
      color={COLORS.iconGray}
      
    />
       <Text
                    fontSize="xl"
                  marginLeft={props.backIcon ? 0 : 5}
                  ml={2}
                  fontFamily="Inter_500Medium"
                >
                  {props.title || ""}
                </Text>
                </HStack>
   </TouchableOpacity>:    <Text
                  fontSize="xl"
                  marginLeft={5}
                  ml={2}
                  fontFamily="Inter_500Medium"
                >
                  {props.title || ""}
                </Text>
    } 
   </HStack>

   {props?.rightIcon}
  </HStack>
 
    <Divider borderWidth={1} borderColor="gray.50"/>
  </>
  )
}

export {Header}
