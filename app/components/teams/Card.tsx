import React from 'react'
import { ScrollView, Text, View } from 'native-base'
import HeaderText from '../HeaderText'

const Card = ({item,index}:any) => {

  return (
    <ScrollView p="2" borderColor={"trueGray.300"} borderTopWidth={1} horizontal>
     <View w={42} borderColor={"trueGray.600"}  key={item.index}>
                    <HeaderText  numberOfLines={1}color="gray.600" style={{ minWidth: 42 }} title={index+1}/>
                    </View>
                   <View px="2" w={120}  borderColor={"trueGray.600"}   key={item.name}>
                    <Text   numberOfLines={1} color="gray.600" style={{ minWidth: 120 }} textAlign={"left"} fontSize={"sm"} fontWeight={'medium'}>{item.name}</Text>
                    <Text fontSize={"xs"}>(1008)</Text>
                    </View>
                  <View px="2" w={120} borderColor={"trueGray.600"}  key={item.referralUser}>
                    <Text  numberOfLines={1} color="gray.600" style={{ minWidth: 120 }} textAlign={"left"} fontSize={"sm"} fontWeight={'medium'}>{item.referralUser}</Text>
                    <Text fontSize={"xs"}>(1008)</Text>
                    </View>
                      <View borderColor={"trueGray.600"}  key={item.joinedOn}>
                    <HeaderText  numberOfLines={1}color="gray.600" style={{ minWidth: 120 }} title={item.joinedOn}/>
                    </View>
    </ScrollView>
  )
}

export default React.memo(Card)