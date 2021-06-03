import React from 'react'
import axios from "axios";
import {Box, IconButton, SimpleGrid, Text } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import TaakKnop from "./TaakKnop";

function TakenBox({serverData}) {
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
              <table>
                <tr>
                  <th><Text fontSize="16px">Taken</Text></th>
                  <th><Text fontSize="16px">Vrijwilligers</Text></th>
                  <th><Text fontSize="16px">Gezocht</Text></th>
                  <th><Text fontSize="16px">Aanmelden</Text></th>
                </tr>
                
                {serverData.eventTaken
                    .filter((taak) => taak.users.length == 0)
                    .map((taak) => (
                      <>
                      <tr>
                        <td><Text fontSize="16px">{taak.taakId.naam}</Text></td>
                        <td><Text fontSize="16px">2</Text></td>
                        <td><Text fontSize="16px">2</Text></td>
                        <td>
                          <IconButton
                            border="1px solid black"
                            colorScheme="teal"
                            icon={<CheckIcon />}
                          >
                          </IconButton></td>
                        
                      </tr>
                      </>
                    ))}
                
              </table>
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
