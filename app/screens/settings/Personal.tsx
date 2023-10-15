import React from 'react'
import { Box,Text, Center, HStack, Heading, VStack, FormControl, Input, Button } from 'native-base'

const Personal = () => {
  return (
<Center  w="100%">
<VStack  width="100%" alignItems={"center"} justifyContent={"center"}>
    <Box mt={5} p="2" width="95%"  px={5}>

     <VStack space={3} >
        <VStack  space={3}>
      <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input h={12} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input h={12} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Registration Date</FormControl.Label>
          <Input h={12} type="password" />
        </FormControl>
          <FormControl>
            <FormControl.Label>New Password</FormControl.Label>
            <Input h={12} type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Retype Password</FormControl.Label>
          <Input h={12} type="password" />
        </FormControl>

        </VStack>
        <Button  h={12} mt="2" colorScheme="primary">
          NEXT
        </Button>
      </VStack> 
    </Box>
    </VStack>
  </Center>
  )
}

export default Personal