import React, { useState } from "react";
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
import { parseCookies } from "nookies";
import Moment from "react-moment";

const cookies = parseCookies();

function Taak({ taak, eventId }) {
  const users = [];
  taak.users.map((user) => users.push(user["@id"]));
  // console.log("users",users)
  const [active, setActive] = useState(false);
  const switchActive = () => setActive(!active);

  const handleAanmeldenClick = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.put(
        `https://wdev2.be/roel21/eindwerk/api/event_taaks/${taak.id}`,
        {
          users: [...users, `api/users/${cookies.Id}`],
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
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
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
          <ListItem>
            <Flex>
              <Text fontWeight="bold" marginRight="5px">
                Taak:
              </Text>
              <Text>{taak.taakId.naam}</Text>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex>
              <Text fontWeight="bold" marginRight="5px">
                Uur star:
              </Text>
              <Moment format="HH:mm">{taak.startUur}</Moment>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex>
              <Text fontWeight="bold" marginRight="5px">
                Uur stop:{" "}
              </Text>
              <Moment format="HH:mm">{taak.eindUur}</Moment>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex>
              <Text fontWeight="bold" marginRight="5px">
                Aantal vrijwilligers gezocht:{" "}
              </Text>
              <Text>{taak.aantalVrijwilligers - taak.users.length}</Text>
            </Flex>
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
            {taak.aantalVrijwilligers == taak.users.length ? (
              <Text
                display="flex"
                alignItems="center"
                fontWeight="bold"
                justifyContent="center"
                borderRadius="7px"
                color="white"
                bgColor="red"
                marginLeft="auto"
                marginY="10px"
                width="100px"
                height="40px"
              >
                Volzet
              </Text>
            ) : (
              <Button
                onClick={handleAanmeldenClick}
                colorScheme="teal"
                marginLeft="auto"
                marginY="10px"
                width="100px"
              >
                Aanmelden
              </Button>
            )}
          </Flex>
        )}
        {active && (
          <Box>
            <Flex>
              <Box>
                <Flex>
                  <Text fontWeight="bold" marginRight="5px">
                    Omschrijving:
                  </Text>
                  {/* warning dangerouslySetInnerHTML: Alleen de admin kan 
                            omschrijving toevoegen in easyadmin */}
                  <Box
                    dangerouslySetInnerHTML={{
                      __html: taak.taakId.omschrijving,
                    }}
                  ></Box>
                </Flex>
                <Flex marginTop="7px">
                  <Text fontWeight="bold" marginRight="27px">
                    Voert uit:
                  </Text>
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
