import React, { useEffect, useState } from 'react'
import { Box, Button, ScrollView, VStack,View } from 'native-base'
import { FlatList } from 'react-native'
import HeaderText from '../components/HeaderText'
import Card from '../components/withdraw/Card'
import { COLORS } from '../constant/theme'
import ModalCard from '../components/withdraw/ModalCard'
import { TransparentLoader } from '../components/TransparentLoader'

const Withdraw = () => {
    const [loading, setLoading] = useState(true)
    const [withdrawModalStatus, setWithdrawModalStatus] = useState(false)
      useEffect(() => {
     setTimeout(() => {
      setLoading(false)
     }, 200);
      }, [])

      const [list, setList] = useState([
        {name:'sathish kumar',date:"22-06-08 10:00:04", amount:'100.00', description:"Sathish kumar Axis Bank 878877079797 AX34EGDDQ sathish006006@okaxis",status:"Pending" },
      ]);

      const headerList = ["#","Name","Date","Amount","Description","Status"]
      const columnWidths = [42,120, 120, 82,120, 82]; // Initial column widths
    
  return (
    loading ? <TransparentLoader loading={loading}/> : <Box  flex={1}>
      <Button onPress={()=>setWithdrawModalStatus(true)} borderWidth={1} borderColor={COLORS.light}  _text={{color:COLORS.light}} variant="ghost" w="32" zIndex={100} position={"absolute"} mt={-12} right={2} top={0}>Withdraw</Button>
   <VStack>

    <ModalCard withdrawModalStatus={withdrawModalStatus} setWithdrawModalStatus={setWithdrawModalStatus} />
  
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

export default Withdraw