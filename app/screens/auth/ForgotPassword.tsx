import React, { useState } from 'react'
import {Box, Button, Center, FormControl, HStack, Heading, Input, Link, Text, VStack} from "native-base"
import { Screens } from '../../components/Screens'

interface ScreensProps{
  navigation:any
}


const ForgotPassword = ({navigation}:ScreensProps) => {
    const [Password, setPassword] = useState("")
    return (
      <Screens>
  <Center  w="100%">
    <VStack h="100%" width="100%" alignItems={"center"} justifyContent={"center"}>
        <Box safeArea p="2" width="95%"  px={5}>
          <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }}>
            FORGOT PASSWORD
          </Heading>
  
          <VStack space={3} mt="5"> 
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input h={12} type="password" />
            </FormControl>
            <Button onPress={()=>navigation.replace("Root")} h={12} mt="2" colorScheme="primary">
              RESET
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
                Try to login.{" "}
              </Text>
              <Link onPress={()=>navigation.replace("SignUp")} _text={{
              color: "primary.500",
              fontWeight: "medium",
              fontSize: "sm"
            }} >
                Sign In
              </Link>
            </HStack>
          </VStack>
        </Box>
        </VStack>
      </Center>
  
  
      </Screens>
    )
}

export default ForgotPassword