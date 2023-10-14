
import React, { useEffect, useState } from 'react'
import { Screens } from '../components/Screens'
import { Badge, Box,Button,Divider,HStack,ScrollView,Stack,Text, VStack } from 'native-base'
import Card from '../components/home/Card'
import { AntDesign  } from '@expo/vector-icons'; 
import { COLORS } from '../constant/theme';

const Home = () => {
  const list = [{title:"Invest wallet",money:600.00},{title:"Daily Profit",money:2.00},{title:"Business Wallet",money:85.00},{title:"A Team Balance",money:0.00},{title:"B Team Balance",money:0.00}]
const [loading, setLoading] = useState(true)
  useEffect(() => {
 setTimeout(() => {
  setLoading(false)
 }, 200);
  }, [])
  
  return (
    loading ? null : <Box flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
<VStack mt={5} alignItems={"center"} w="100%">
<AntDesign w="20%"  style={{paddingHorizontal:15}} name={"idcard"} size={80} color={COLORS.secondary} />
<VStack space={2} mx="6">
<Text  textAlign={"center"} fontSize={"lg"} fontWeight={"semibold"} color={"primary.600"}  numberOfLines={1} textTransform={"uppercase"}>ACCOUNT OWNER: sathish kumar</Text>
<Text borderRadius={2} textAlign={"center"} color={"white"} px="3" bg={"secondary.600"}>
Registration Date: 2022-06-08 02:02:36
</Text>
</VStack>
</VStack>
  <VStack pb={10}>
{list.map((item,index)=>(
  <Card index={index} item={item}/>
))}
  </VStack>
  </ScrollView>

</Box>
     

  )
}

export default Home