import React, { useEffect, useState } from 'react'
import { Box, ScrollView, VStack,View } from 'native-base'
import { FlatList } from 'react-native'
import HeaderText from '../components/HeaderText'
import Card from '../components/purchases/Card'
import { TransparentLoader } from '../components/TransparentLoader'

const Purchases = () => {
   
    const [loading, setLoading] = useState(true)
      useEffect(() => {
     setTimeout(() => {
      setLoading(false)
     }, 200);
      }, [])

      const [list, setList] = useState([
        {Package:'BASIC', Amount:'100.00', DailyIncomes:'0.34',PurchasedOn:"22-06-08 10:00:04",Status:"Confirmed"},
        {Package:'BASIC', Amount:'100.00', DailyIncomes:'0.34',PurchasedOn:"22-06-08 10:00:04",Status:"Confirmed"},
        {Package:'BASIC', Amount:'100.00', DailyIncomes:'0.34',PurchasedOn:"22-06-08 10:00:04",Status:"Confirmed"},
        {Package:'BASIC', Amount:'100.00', DailyIncomes:'0.34',PurchasedOn:"22-06-08 10:00:04",Status:"Confirmed"},
        {Package:'BASIC', Amount:'100.00', DailyIncomes:'0.34',PurchasedOn:"22-06-08 10:00:04",Status:"Confirmed"},
      ]);

      const headerList = ["#","Package","Amount","Daily Incomes","Purchased on","Status"]
      const columnWidths = [50,100, 100, 120, 150, 70]; // Initial column widths
    
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
    <>
<Card item={item} index={index}/>
       </>
)}  data={list}/>
</VStack>
 </ScrollView>
  </VStack>

</Box>
  )
}



export default Purchases