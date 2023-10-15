import { View, Modal } from 'react-native'
import React from 'react'
import { VStack,Spinner } from 'native-base'

const TransparentLoader = (props:any) => {
  return (
    <Modal transparent={true} visible={props.loading} animationType="fade">
   <VStack h="full" w="full" alignItems="center" justifyContent="center" >
    <Spinner size={40}/>
   </VStack>
    </Modal>

  )
}

export  {TransparentLoader}