import React, {useState} from 'react'
import {Box, Button, Flex, Text, List, ListItem, OrderedList, Icon } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";


function Taak({taak}) {
    const [active, setActive] = useState(false)
    const switchActive = () => setActive(!active)
    return (
        <div>
           <Box 
            border="1px solid black"
            borderRadius="7"
            marginBottom ="10px"
            paddingX="5px">
            <List borderBottom="1px solid black" paddingBottom="10px" >
              <ListItem>Taak: {taak.taakId.naam}</ListItem>
              <ListItem>Uur star: {taak.startUur}</ListItem>
              <ListItem>Uur stop: {taak.eindUur}</ListItem>
              <ListItem>Aantal gezocht: </ListItem>
            </List>
            {!active && 
            <Flex >
              <Text marginTop="15px" 
                    onClick={switchActive} 
                    cursor="pointer"
                    fontWeight="bold" 
                    color="blue.900"
                    textDecoration="underline">Details</Text>
              <Button colorScheme="teal" marginLeft="auto" marginY="10px" width="100px">Aanmelden</Button>
            </Flex>}
            {active && 
            <Box>
                <Flex>
                    <Box>
                        <Flex>
                            <Text>Omschrijving:</Text>
                            <Text>{taak.taakId.omschrijving}</Text>
                        </Flex>
                        <Flex>
                            <Text >Voert uit:</Text>
                            <Box marginLeft="10px">
                            <OrderedList >
                                <ListItem>Jef</ListItem>
                                <ListItem>Jos</ListItem>
                            </OrderedList>
                            </Box>
                        </Flex>
                    </Box>
                    <Box width="100px" marginLeft="auto">
                        <CloseIcon ml="83px" border="1px solid black" color="red" onClick={switchActive} cursor="pointer" />
                        {/* <Button colorScheme="teal" marginLeft="auto" marginY="10px" width="100px">Aanmelden</Button> */}
                    </Box>
                </Flex>
            </Box>}
            </Box>     
        </div>
    )
}

export default Taak
