import React, { useState } from 'react'
import {Box, Button, Center, Divider, FormControl, HStack, Heading, Input, Link, Radio, Stack, Text, VStack} from "native-base"
import { Screens } from '../../components/Screens'

interface SignUpProps {
    navigation:any
}

const SignUp = ({navigation}:SignUpProps) => {
    const [activeTab, setActiveTab] = useState(1)
    const [formHeight, setFormHeight] = useState(0)
    const [position, setPosition] = useState('a')
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
        <Text onPress={()=>setActiveTab(1)} underline={activeTab === 1}  mr="5" color={activeTab === 1 ? "primary.600" : "coolGray.600"} fontWeight={"normal"} fontSize="lg">Step 1</Text> 
        <Text onPress={()=>setActiveTab(2)} underline={activeTab !== 1}  mr="5" color={activeTab !== 1 ? "primary.600" : "coolGray.600"}  fontWeight={"normal"} fontSize="lg">STEP 2</Text> 
    
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
        <Button onPress={()=>setActiveTab(2)} h={12} mt="2" colorScheme="primary">
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
            <FormControl.Label>Referral User Name</FormControl.Label>
            <Input h={12} />
          </FormControl>
          <Radio.Group
      name="TeamPosition"
      value={position}
      onChange={(nextValue) => {
        setPosition(nextValue);
      }}
    >
      <HStack py="4" space={3}>  
          <Radio value="a" my="1">
        Team A
      </Radio>
      <Radio value="b" my="1">
        Team B
      </Radio>
      </HStack>
  
    </Radio.Group>
          </VStack>
          <HStack w="100%">
            <Stack  mx="2" w="30%">
        <Button variant={"ghost"} borderWidth={1} borderColor={"primary.600"}  onPress={()=>setActiveTab(1)} h={12} mt="2" colorScheme="primary">
          Back
        </Button>
        </Stack>
        <Stack w="70%">
        <Button mx="2" onPress={()=>navigation.replace("Root")} h={12} mt="2" colorScheme="primary">
          REGISTER AN ACCOUNT
        </Button>
        </Stack>
        </HStack>
      </VStack>}
      <HStack mt="6" justifyContent="center">
          <Text fontSize="sm" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }}>
            Already have an account?.{" "}
          </Text>
          <Link onPress={()=>navigation.navigate("SignIn")} _text={{
          color: "primary.500",
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