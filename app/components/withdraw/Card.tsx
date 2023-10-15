import React from 'react'
import { ScrollView, View } from 'native-base'
import HeaderText from '../HeaderText'

const Card = ({item,index}:any) => {

  return (
    <ScrollView p="2" borderColor={"trueGray.300"} borderTopWidth={1} horizontal>
     <View justifyContent={"center"} w={42} borderColor={"trueGray.600"}  key={item.index}>
                    <HeaderText  numberOfLines={1}color="gray.600" style={{ minWidth: 42 }} title={index+1}/>
                    </View>
                   <View justifyContent={"center"} w={120}  borderColor={"trueGray.600"}   key={item.name}>
                    <HeaderText  numberOfLines={1}color="gray.600" style={{ minWidth: 120 }} title={item.name}/>
                    </View>
                    <View justifyContent={"center"} w={120} borderColor={"trueGray.600"}  key={item.date}>
                    <HeaderText  numberOfLines={1}color="gray.600" style={{ minWidth: 120 }} title={item.date}/>
                    </View>
                  <View justifyContent={"center"} w={82} borderColor={"trueGray.600"}  key={item.amount}>
                    <HeaderText  numberOfLines={1}color="gray.600" style={{ minWidth: 120 }} title={item.amount}/>
                    </View>
                
                      <View justifyContent={"center"} w={120} borderColor={"trueGray.600"}  key={item.description}>
                    <HeaderText  numberOfLines={10}color="gray.600" style={{ minWidth: 120 }} title={item.description}/>
                    </View>
                      <View w={82} justifyContent={"center"} borderColor={"trueGray.600"}  key={item.status}>
                    <HeaderText  numberOfLines={1}color="gray.600" style={{ minWidth: 120 }} title={item.status}/>
                    </View>
    </ScrollView>
  )
}

export default React.memo(Card)