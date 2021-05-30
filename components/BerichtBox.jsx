import React from 'react'
import {
    Box,
    Button,
    Textarea,
  } from "@chakra-ui/react";
import Bericht from "./Bericht";
import Opmerking from "./Opmerking";

function BerichtBox() {
    return (
        <div>
            <Box
                border="1px solid black"
                borderRadius="7"
                width="87%"
                height="370px"
                overflowY="auto"
                marginLeft="30px"
              >
                <Bericht />
                <Opmerking />
                
                <Box>
                  <Textarea
                    id="berichtInput"
                    placeholder="Schrijf zelf een bericht"
                  />
                  <Button
                    marginLeft="auto"
                    marginRight="10px"
                    colorScheme="teal"
                    marginBottom="10px"
                    width="90px"
                    display="block"
                  >
                    Verzend
                  </Button>
                </Box>
              </Box>
        </div>
    )
}

export default BerichtBox
