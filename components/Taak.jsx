import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  Text,
  List,
  ListItem,
  OrderedList,
  Icon,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { trigger } from "swr";

function Taak({ taak, eventId }) {
  const users = [];
  taak.users.map((user) => users.push(user["@id"]));
  // console.log("users",users)
  const [active, setActive] = useState(false);
  const switchActive = () => setActive(!active);
  const handleAanmeldenClick = async (e) => {
    e.preventDefault();
    const resp = await axios.put(
      `https://127.0.0.1:8000/api/event_taaks/${taak.id}`,
      {
        users: [...users, "api/users/4"],
      }
    );
    trigger(
      `https://127.0.0.1:8000/api/event_taaks.jsonld?eventId.id=${eventId}`
    );
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
        <List borderBottom="1px solid black" paddingBottom="10px">
          <ListItem>Taak: {taak.taakId.naam}</ListItem>
          <ListItem>Uur star: {taak.startUur}</ListItem>
          <ListItem>Uur stop: {taak.eindUur}</ListItem>
          <ListItem>
            Aantal vrijwilligers gezocht:{" "}
            {taak.aantalVrijwilligers - taak.users.length}
          </ListItem>
        </List>
        {!active && (
          <Flex>
            <Text
              marginTop="15px"
              onClick={switchActive}
              cursor="pointer"
              fontWeight="bold"
              color="blue.900"
              textDecoration="underline"
            >
              Details
            </Text>
            <Button
              onClick={handleAanmeldenClick}
              colorScheme="teal"
              marginLeft="auto"
              marginY="10px"
              width="100px"
            >
              Aanmelden
            </Button>
          </Flex>
        )}
        {active && (
          <Box>
            <Flex>
              <Box>
                <Flex>
                  <Text>Omschrijving:</Text>
                  {/* warning dangerouslySetInnerHTML: Alleen de admin kan 
                            omschrijving toevoegen in easyadmin */}
                  <Box
                    dangerouslySetInnerHTML={{
                      __html: taak.taakId.omschrijving,
                    }}
                  ></Box>
                </Flex>
                <Flex>
                  <Text>Voert uit:</Text>
                  <Box marginLeft="10px">
                    <OrderedList>
                      {console.log(taak.users)}
                      {taak.users.map((user) => (
                        <ListItem key={user.id}>
                          {user.voornaam} {user.naam}
                        </ListItem>
                      ))}
                    </OrderedList>
                  </Box>
                </Flex>
              </Box>
              <Box width="100px" marginLeft="auto">
                <CloseIcon
                  ml="83px"
                  border="1px solid black"
                  color="red"
                  onClick={switchActive}
                  cursor="pointer"
                />
                {/* <Button colorScheme="teal" marginLeft="auto" marginY="10px" width="100px">Aanmelden</Button> */}
              </Box>
            </Flex>
          </Box>
        )}
      </Box>
    </div>
  );
}

export default Taak;
