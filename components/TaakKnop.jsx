import React from 'react'
import {
    Box,
    Flex,
    IconButton,
    Text,
  } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

function TaakKnop( {text} ) {
    return (
        <div>
            <Box>
                  <Flex>
                    <Text
                      paddingTop="5px"
                      border="1px solid black"
                      borderLeftRadius="7"
                      borderRight="none"
                      paddingX="10px"
                      width="200px"
                    >
                      {text}
                    </Text>
                    <IconButton
                      borderLeftRadius="none"
                      border="1px solid black"
                      colorScheme="teal"
                      icon={<CheckIcon />}
                    ></IconButton>
                  </Flex>
                </Box>
        </div>
    )
}

export default TaakKnop
