import React, {useState} from 'react'
import axios from "axios";
import {Box} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Taak from "./Taak"
function TakenBox({serverData}) {
  console.log(serverData)
    
    return (
        <div>
            <Box
                border="1px solid black"
                borderRadius="7"
                overflowY="auto"
                maxHeight="370px"
                padding="10px"
                marginRight="10px"
                width="100%"
              >
              {serverData.eventTaken
                    .filter((taak) => taak.users.length == 0)
                    .map((taak) => (
                      <>
                        <Taak taak={taak}/>
                      </>))}
                
              
                {/* <SimpleGrid columns={2} spacingX="50px" spacingY="20px">
                  {serverData.eventTaken
                    .filter((taak) => taak.users.length == 0)
                    .map((taak) => (
                      <TaakKnop text={taak.taakId.naam} />
                    ))}
                </SimpleGrid> */}
              </Box>
        </div>
    )
}

export default TakenBox
