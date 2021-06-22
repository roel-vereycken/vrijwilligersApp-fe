import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Text,
  List,
  ListItem,
  Flex,
  Button,
  OrderedList,
} from "@chakra-ui/react";
import { trigger } from "swr";
import { parseCookies } from "nookies";

const cookies = parseCookies();

function TaakBevestiging({ taak, eventId }) {
  // const [taak, setTaak] = useState({})
  // console.log("taak", taak.users);

  const handleAnnulerenClick = async (e) => {
    e.preventDefault();
    const restoreUsers = taak.users.filter(
      (user) => user["@id"] !== `/roel21/eindwerk/api/users/${cookies.Id}`
    );

    // console.log("restore", restoreUsers);

    const putRequestIRI = [];
    restoreUsers.map((user) => putRequestIRI.push(user["@id"]));

    const resp = await axios.put(
      `https://wdev2.be/roel21/eindwerk/api/event_taaks/${taak.id}`,
      {
        users: putRequestIRI,
      },
      {
        headers: {
          Authorization: "Bearer " + cookies.User,
        },
      }
    );
    trigger([
      `https://wdev2.be/roel21/eindwerk/api/event_taaks.jsonld?eventId.id=${eventId}`,
      cookies.User,
    ]);
    console.log("klik");
    console.log(resp);
  };
  return (
    <div>
      <Box
        border="1px solid black"
        borderRadius="7"
        marginBottom="10px"
        paddingX="5px"
      >
        <Text>Je koos voor: {taak.taakId && taak.taakId.naam}</Text>
        <List borderBottom="1px solid black" paddingBottom="10px">
          <ListItem>Uur star: {taak.startUur}</ListItem>
          <ListItem>Uur stop: {taak.eindUur}</ListItem>
        </List>
        <Flex borderBottom="1px solid black" paddingBottom="10px">
          <Text>Hebben zich aangemeld:</Text>
          <Box marginLeft="10px">
            <OrderedList>
              {taak.users &&
                taak.users.map((user) => (
                  <ListItem key="user.id">
                    {user.voornaam} {user.naam}
                  </ListItem>
                ))}
            </OrderedList>
          </Box>
        </Flex>
        <Flex>
          <Text>Omschrijving:</Text>
          {/* warning dangerouslySetInnerHTML: Alleen de admin kan 
                    omschrijving toevoegen in easyadmin */}
          <Box
            marginLeft="5px"
            dangerouslySetInnerHTML={
              taak.taakId && { __html: taak.taakId.omschrijving }
            }
          ></Box>
        </Flex>
        <Button
          marginY="10px"
          width="100%"
          colorScheme="orange"
          onClick={handleAnnulerenClick}
        >
          Annuleren
        </Button>
      </Box>
    </div>
  );
}

export default TaakBevestiging;
