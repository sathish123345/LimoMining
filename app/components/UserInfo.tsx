import React from 'react'
import { COLORS } from '../constant/theme'
import { VStack, Text } from 'native-base'
import { AntDesign } from '@expo/vector-icons'

const UserInfo = () => {
  return (
    <VStack mt={5} alignItems={"center"} w="100%">
    <AntDesign  style={{paddingHorizontal:15}} name={"idcard"} size={80} color={COLORS.secondary} />
    <VStack space={2} mx="6">
    <Text  textAlign={"center"} fontSize={"lg"} fontWeight={"semibold"} color={"primary.600"}  numberOfLines={1} textTransform={"uppercase"}>ACCOUNT OWNER: sathish kumar</Text>
    <Text borderRadius={2} textAlign={"center"} color={"white"} px="3" bg={"secondary.600"}>
    Registration Date: 2022-06-08 02:02:36
    </Text>
    </VStack>
    </VStack>
  )
}

export default UserInfo