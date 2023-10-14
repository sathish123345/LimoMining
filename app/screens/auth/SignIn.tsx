import React, { useState } from 'react'
import {Box, Button, Center, FormControl, HStack, Heading, Input, Link, Text, VStack} from "native-base"
import { Screens } from '../../components/Screens'

interface ScreensProps{
  navigation:any
}

const SignIn = ({navigation}:ScreensProps) => {

  const [email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  return (
    <Screens>
      {/* <Header 
        backPress={() => navigation.goBack()}
        backIcon={false}
        title="Login"/> */}
<Center  w="100%">
  <VStack h="100%" width="100%" alignItems={"center"} justifyContent={"center"}>
      <Box safeArea p="2" width="95%"  px={5}>
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          MEMBER LOGIN
        </Heading>
        {/* <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading> */}

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input h={12} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input h={12} type="password" />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="2">
              Forget your password?
            </Link>
          </FormControl>
          <Button h={12} mt="2" colorScheme="indigo">
            LOGIN TO ACCOUNT
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Link onPress={()=>navigation.replace("SignUp")} _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
      </VStack>
    </Center>


    </Screens>
  )
}

export default SignIn