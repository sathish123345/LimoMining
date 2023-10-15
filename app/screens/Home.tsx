
import React, { useEffect, useState } from 'react'
import { Screens } from '../components/Screens'
import { Badge, Box,Button,Divider,HStack,ScrollView,Stack,Text, VStack } from 'native-base'
import Card from '../components/home/Card'
import { AntDesign  } from '@expo/vector-icons'; 
import { COLORS } from '../constant/theme';
import { TransparentLoader } from '../components/TransparentLoader';

const Home = () => {
  const list = [{title:"Invest wallet",money:600.00},{title:"Daily Profit",money:2.00},{title:"Business Wallet",money:85.00},{title:"A Team Balance",money:0.00},{title:"B Team Balance",money:0.00}]
const [loading, setLoading] = useState(true)
  useEffect(() => {
 setTimeout(() => {
  setLoading(false)
 }, 200);
  }, [])
  
  return (
    loading ? <TransparentLoader loading={loading}/> : <Box flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>

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