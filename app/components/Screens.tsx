
import { Box } from 'native-base'
import React from 'react'


const Screens = (props:any) => {
  return (
   <Box  
   h="full"
   w="full"
   key={1}
   safeAreaTop={true}
  //_dark={{ bg: COLORS.dark }}
   safeAreaBottom={true}
  // _light={{ bg: COLORS.neutral }}
   >
    {props.children}
   </Box>
  )
}

export {Screens}

