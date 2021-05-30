import React from 'react'
import {
    Box,
    Text,
  } from "@chakra-ui/react";

function Bericht() {
    return (
        <div>
            <Box
                  margin="10px"
                  border="1px solid black"
                  borderRadius="7"
                  padding="5px"
                >
                  <Text fontSize="12px">
                    Geplaatst door: Hupeldepup Dirksen
                  </Text>
                  <Text>
                    TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT
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

export default Bericht
