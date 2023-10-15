import { FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box,View, ScrollView, VStack } from 'native-base'
import HeaderText from '../components/HeaderText'
import Card from '../components/transactions/Card'
import { TransparentLoader } from '../components/TransparentLoader'

const Transactions = () => {
    const [loading, setLoading] = useState(true)
      useEffect(() => {
     setTimeout(() => {
      setLoading(false)
     }, 200);
      }, [])

      const [list, setList] = useState([
        {Type:'Withdraw', Amount:'60.00', Status:'0.34',Date:"22-06-08 10:00:04"},
      ]);

      const headerList = ["#","Type","Amount","Status","Date"]
      const columnWidths = [50,100, 100, 100, 120]; // Initial column widths
    
  return (
    loading ? <TransparentLoader loading={loading}/> : <Box flex={1}>
  <VStack>
    <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true}>
        <VStack  bgColor={"warmGray.50"}>
    <ScrollView p="2" bgColor={"coolGray.200"} horizontal={true}>
         {headerList.map((rowData, rowIndex) => (
           <View  borderColor={"trueGray.600"}  key={rowIndex} style={{ flexDirection: 'row' }}>
               <View key={rowData} style={{ width: columnWidths[rowIndex] }}>
                <HeaderText  numberOfLines={1}color={"primary.600"} title={rowData}/>
               </View>
           </View>
         ))}
       </ScrollView> 
<FlatList renderItem={({item,index}:any)=>(
<Card item={item} index={index}/>
)}  data={list}/>
</VStack>
 </ScrollView>
  </VStack>

</Box>
  )
}

export default Transactions