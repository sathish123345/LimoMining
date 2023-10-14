
import { VStack, Text, Divider } from 'native-base'
import React from 'react'

const Card = ({item,index}:any) => {
  return (
    <VStack bgColor={"warmGray.50"} borderRadius={5}  alignItems={"center"} mt={index === 0 ? 7 : 4} mx="10" py={6} px="4" >
    <Text py="1" fontSize="lg" fontWeight={"medium"} textTransform={"uppercase"} color="primary.600">{item.title}</Text>
    <Divider w="36%"/>
    <Text color={"secondary.600"} py="1" fontSize={"xl"}>${item.money}</Text>
  </VStack>
  )
}

export default React.memo(Card)