import React from 'react'
import {
    Box,
    Text,
  } from "@chakra-ui/react";
  
function Opmerking() {
    return (
        <div>
            <Box
                  margin="10px"
                  marginLeft="auto"
                  border="1px solid black"
                  borderRadius="7"
                  padding="5px"
                  width="80%"
                >
                  <Text fontSize="12px">
                    Geplaatst door: Hupeldepup Dirksen
                  </Text>
                  <Text>
                    TEXTTEXTTEXTTEXTTEXTTEXTTEXTTETTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT
                  </Text>
                  <Text
                    marginLeft="auto"
                    width="90px"
                    fontSize="12px"
                    color="blue.900"
                    textDecoration="underline"
                    fontWeight="bold"
                  >
                    Beantwoorden
                  </Text>
                </Box>
        </div>
    )
}

export default Opmerking
