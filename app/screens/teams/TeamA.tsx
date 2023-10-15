import React, { useEffect, useState } from 'react'
import { Box, Button, ScrollView, VStack,View } from 'native-base'
import { FlatList } from 'react-native'
import HeaderText from '../../components/HeaderText'
import Card from '../../components/teams/Card'

const TeamA = () => {
  
    const [loading, setLoading] = useState(true)
      useEffect(() => {
     setTimeout(() => {
      setLoading(false)
     }, 200);
      }, [])

      const [list, setList] = useState([
        {name:'sathish kumar', referralUser:'Isanth kumar', joinedOn:"22-06-08 10:00:04"},
        {name:'mark', referralUser:'Isanth', joinedOn:"22-08-08 10:00:04"},
        {name:'Dell', referralUser:'Isanth kumar ', joinedOn:"23-06-08 10:00:04"},
      
      ]);

      const headerList = ["#","Name","Referral User","Joined on"]
      const columnWidths = [42,120, 120, 120]; // Initial column widths
    
  return (
    loading ? null : <Box  flex={1}>
        <VStack w="full"  bgColor={"warmGray.50"}>
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

</Box>
  )
}

export default TeamA