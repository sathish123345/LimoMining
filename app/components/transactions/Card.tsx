import React from 'react'
import { ScrollView, View } from 'native-base'
import HeaderText from '../HeaderText'

const Card = ({item,index}:any) => {

  return (
    <ScrollView p="2" borderColor={"trueGray.300"} borderTopWidth={1} horizontal>
     <View  borderColor={"trueGray.600"}  key={item.index} style={{ flexDirection: 'row' }}>
                    <HeaderText  numberOfLines={1}color="gray.600" style={{ minWidth: 50 }} title={index+1}/>
                    </View>
                   <View borderColor={"trueGray.600"}   key={item.Type} style={{ flexDirection: 'row' }}>
                    <HeaderText  numberOfLines={1}color="gray.600" style={{ minWidth: 100 }} title={item.Type}/>
                    </View>
                  <View borderColor={"trueGray.600"}  key={item.Amount} style={{ flexDirection: 'row' }}>
                    <HeaderText  numberOfLines={1}color="gray.600" style={{ minWidth: 100 }} title={`$${item.Amount}`}/>
                    </View>
                      <View borderColor={"trueGray.600"}  key={item.Status} style={{ flexDirection: 'row' }}>
                    <HeaderText  numberOfLines={1}color="gray.600" style={{ minWidth: 100 }} title={`$${item.Status}`}/>
                    </View>
                    <View borderColor={"trueGray.600"}  key={item.Date} style={{ flexDirection: 'row' }}>
                    <HeaderText  numberOfLines={1}color="gray.600" style={{ minWidth: 120 }} title={item.Date}/>
                    </View>
    </ScrollView>
  )
}

export default React.memo(Card)