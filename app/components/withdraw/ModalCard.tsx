import {
    TouchableOpacity,
    Platform,
  } from "react-native";
  import React, { useState } from "react";
  import {
    Box,
    Button,
    HStack,
    Modal,
    VStack,
    useColorModeValue,
    Input,
  } from "native-base";


const ModalCard = (props:any) => {
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
  

    const handleCancelNoteModal = () => {
      setAmount("")
    };
  
    return (
      <Modal
        isOpen={props.withdrawModalStatus || false}
        onClose={() => props.setWithdrawModalStatus(false)}
        size="lg"
      >
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Amount to Withdraw</Modal.Header>
          <Modal.Body>
            <VStack>
              <VStack>

                  <Box
                    mt="2"
                    backgroundColor={useColorModeValue(
                      "warmGray.100",
                      "gray.900"
                    )}
                    borderRadius={"md"}
                  >
                    <Input
                      color={"gray.600" }
                      style={{ height: 40, padding: 2 }}
                      value={amount}
                      keyboardType="numeric"
                      onChangeText={setAmount}
                      multiline={false}
                    />
                  </Box>
           
              </VStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
              <HStack w="full" justifyContent={"center"}>
 
                   <Button
            w="60%"
                isLoading={loading}
                onPress={() => props.setWithdrawModalStatus(false)}
                isLoadingText={"Loading..."}
              >
                Submit
              </Button>
            </HStack>
      
        
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    );
}

export default ModalCard