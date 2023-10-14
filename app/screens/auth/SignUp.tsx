import React, { useState } from 'react'
import {Box, Button, Center, Divider, FormControl, HStack, Heading, Input, Link, Text, VStack} from "native-base"
import { Screens } from '../../components/Screens'

interface SignUpProps {
    navigation:any
}

const SignUp = ({navigation}:SignUpProps) => {
    const [activeTab, setActiveTab] = useState(1)
    const [formHeight, setFormHeight] = useState(0)
  return (
    <Screens>

<Center  w="100%">
<VStack h="100%" width="100%" alignItems={"center"} justifyContent={"center"}>
    <Box safeArea p="2" width="95%"  px={5}>
      <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
      color: "warmGray.50"
    }}>
        REGISTRATION
      </Heading>
      <HStack my="4">
        <Text underline={activeTab === 1}  mr="5" color={activeTab === 1 ? "primary.600" : "coolGray.600"} fontWeight={"normal"} fontSize="lg">Step 1</Text> 
        <Text underline={activeTab !== 1}  mr="5" color={activeTab !== 1 ? "primary.600" : "coolGray.600"}  fontWeight={"normal"} fontSize="lg">STEP 2</Text> 
    
        </HStack>
   {activeTab === 1 ?   <VStack space={3} >
       
        <VStack onLayout={(e)=>setFormHeight(e.nativeEvent.layout.height)
        } space={3}>
                     <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          PERSONAL INFORMATION
        </Heading>
      <FormControl>
            <FormControl.Label>Full Name*</FormControl.Label>
            <Input h={12} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email Address*</FormControl.Label>
            <Input h={12} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password*</FormControl.Label>
            <Input h={12} type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password*</FormControl.Label>
          <Input h={12} type="password" />
        </FormControl>
          <FormControl>
            <FormControl.Label>Mobile*</FormControl.Label>
          <Input h={12} type="password" />
        </FormControl>
        </VStack>
        <Button onPress={()=>setActiveTab(2)} h={12} mt="2" colorScheme="indigo">
          NEXT
        </Button>
      </VStack> :
      <VStack space={3} >
     

        <VStack  h={formHeight}>
        <Heading my={2} _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          REFERRAL BY
                  </Heading>
        <FormControl>
            <FormControl.Label>Referral User Id*</FormControl.Label>
            <Input h={12} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Referral User Name*</FormControl.Label>
            <Input h={12} />
          </FormControl>
          </VStack>
        <Button onPress={()=>navigation.replace("Home")} h={12} mt="2" colorScheme="indigo">
          REGISTER AN ACCOUNT
        </Button>
      </VStack>}
      <HStack mt="6" justifyContent="center">
          <Text fontSize="sm" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }}>
            Already have an account?.{" "}
          </Text>
          <Link onPress={()=>navigation.navigate("SignIn")} _text={{
          color: "indigo.500",
          fontWeight: "medium",
          fontSize: "sm"
        }} >
            Sign In
          </Link>
        </HStack>
    </Box>
    </VStack>
  </Center>


  </Screens>
  )
}

export default SignUp