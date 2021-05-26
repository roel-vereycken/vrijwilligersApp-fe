import React from 'react'
import Link from 'next/link'
import {
    Box,
    Flex,
    Text,
    Heading,
    List,
    ListItem,
  } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react"
import { FaUser, FaCalendar, FaCheck, FaInfo } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"

function Navbar() {
    return (
        <nav>
           <Box bg="blue.600" pt="10%" width="100%" height="100vh" borderRight="2px solid black">
            <Heading
            marginTop="15px"
            marginLeft="10px"
            marginBottom="50px"
            >VrijwilligersApp</Heading>


            <List spacing="5">
            <ListItem>
            <Link href="/profiel"><a>
                <Flex>
                    <Icon 
                    as={FaUser}
                    w={5} 
                    h={5}
                    marginTop="8px"
                    marginX="10px"
                     />
                    <Text
                    fontSize="2xl"
                    >Profiel</Text>
                </Flex>
            </a></Link>
            </ListItem>

            
            <ListItem>
            <Link href="/"><a>
                <Flex>
                    <Icon 
                    as={FaCalendar}
                    w={5} 
                    h={5}
                    marginTop="8px"
                    marginX="10px"
                    />
                    <Text fontSize="2xl">Evenementen</Text>
                </Flex>
                </a></Link>
            </ListItem>
            
            <ListItem>
            <Flex>
                    <Icon 
                    as={FaCheck}
                    w={5} 
                    h={5}
                    marginTop="8px"
                    marginX="10px"
                     />
                    <Text
                    fontSize="2xl"
                    >Mijn taken</Text>
                </Flex>
            </ListItem>
            <ListItem>
            <Flex>
                    <Icon 
                    as={FaInfo}
                    w={5} 
                    h={5}
                    marginTop="8px"
                    marginX="10px"
                     />
                    <Text
                    fontSize="2xl"
                    >Info</Text>
                </Flex>
            </ListItem>
          </List>
          <Box 
          marginTop="330px"
          >
            <Flex>
                <Icon 
                as={FiLogOut}
                w={5} 
                h={5}
                marginTop="9px"
                marginX="10px"
                />
                <Text fontSize="2xl">Log uit</Text>
            </Flex>
            </Box>
        </Box> 
        </nav>
    )
}

export default Navbar
