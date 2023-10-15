import { Text, ScrollView } from 'native-base'
import React from 'react'

const HeaderText = ({title,style,color,numberOfLines}:any) => {
  return (
    <Text px="2" py="2" numberOfLines={numberOfLines} style={style} color={color} textAlign={"left"} fontSize={"sm"} fontWeight={'medium'}>{title}</Text>
  )
}

export default React.memo(HeaderText)