import React , {useEffect, useState} from 'react'
import axios from "axios"
import {Box, Text, List, ListItem, Flex, Button, OrderedList} from "@chakra-ui/react";

function TaakBevestiging({taak}) {
    // const [taak, setTaak] = useState({})
    console.log("taak",taak.users)
    

    const handleAnnulerenClick = async(e) => {
        e.preventDefault()
        const restoreUsers = taak.users.filter((user) => user["@id"] !== "/api/users/4")
        const putRequestIRI = []
        restoreUsers.map((user) => putRequestIRI.push(user["@id"]))
        const resp = await axios.put(`https://127.0.0.1:8000/api/event_taaks/${taak.id}`, {
            users: putRequestIRI
        })
        console.log(restoreUsers)
        console.log(resp)
    }
    return (
        <div>
            <Box 
            border="1px solid black"
            borderRadius="7"
            marginBottom ="10px"
            paddingX="5px">
                <Text>Je koos voor: {taak.taakId && taak.taakId.naam}</Text>
                <List borderBottom="1px solid black" paddingBottom="10px" >
                    <ListItem>Uur star: {taak.startUur}</ListItem>
                    <ListItem>Uur stop: {taak.eindUur}</ListItem>
                </List>
                <Flex borderBottom="1px solid black" paddingBottom="10px">
                    <Text >Hebben zich aangemeld:</Text>
                    <Box marginLeft="10px">
                        <OrderedList >
                            {taak.users && taak.users.map((user) => <ListItem>{user.voornaam} {user.naam}</ListItem>)}
                        </OrderedList>
                    </Box>
                </Flex>
                <Flex>
                    <Text>Omschrijving:</Text>
                    {/* warning dangerouslySetInnerHTML: Alleen de admin kan 
                    omschrijving toevoegen in easyadmin */}
                    <Box marginLeft="5px" dangerouslySetInnerHTML={taak.taakId&&{__html:taak.taakId.omschrijving}}></Box>
                </Flex>
                <Button marginY="10px" width="100%" colorScheme="orange" onClick={handleAnnulerenClick}>Annuleren</Button>
            </Box>
        </div>
    )
}

export default TaakBevestiging


