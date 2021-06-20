import React from "react";
import axios from "axios";
import nookies from "nookies";

import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import ResponsiveNavbar from "../../components/ResponsiveNavbar";
import TakenBox from "../../components/TakenBox";
import BerichtBox from "../../components/BerichtBox";
import Moment from "react-moment";

export default function evenementDetail({ serverData }) {
  return (
    <div>
      <Flex>
        <Box
          width={["0px", "0px", "0px", "20%"]}
          display={["none", "none", "none", "block"]}
        >
          <Navbar />
        </Box>

        <Box
          width={["100%", "100%", "100%", "80%"]}
          bgColor="gray.200"
          paddingTop={["0px", "0px", "0px", "50px"]}
          minHeight="100%"
        >
          <Box display={["block", "block", "block", "none"]}>
            <ResponsiveNavbar />
          </Box>
          <Box marginX="50px" paddingBottom="15px">
            <Flex direction={["column", "column", "column", "row"]}>
              <Image
                borderRadius="7"
                width={["100%", "366px", "680px", "550px"]}
                height={[0, "173px", "308px", "260px"]}
                src={`https://localhost/vrijwilligersApp/public/images/afbeeldingen/${serverData.afbeelding}`}
                fallbackSrc="https://dummyimage.com/550x260/000/fff"
              />
              <Box marginLeft="40px" width="40%">
                <List fontSize="1.25rem">
                  <ListItem>
                    <Flex>
                      <Text fontWeight="bold">Titel:</Text>
                      <Text marginLeft="7px">{serverData.naam}</Text>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex>
                      <Text fontWeight="bold">Datum:</Text>
                      <Text marginLeft="7px">
                        <Moment format="DD/MM/YYYY">
                          {serverData.startDatum}
                        </Moment>
                      </Text>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex>
                      <Text fontWeight="bold">Locatie: </Text>
                      <Text marginLeft="7px">
                        {serverData.eventLocatie &&
                          serverData.eventLocatie.naam}
                      </Text>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex>
                      <Text fontWeight="bold">Beschrijving:</Text>
                      <Text marginLeft="7px">{serverData.beschrijving}</Text>
                    </Flex>
                  </ListItem>
                </List>
              </Box>
            </Flex>
          </Box>
          <Flex direction={["column", "column", "column", "row"]}>
            <Box
              marginLeft={[0, 0, 0, "50px"]}
              paddingX={["5px", "10px", "40px", 0]}
              width={["100%", "100%", "100%", "47%"]}
            >
              <Heading>Taken: </Heading>
              <TakenBox serverData={serverData} />
            </Box>
            <Box
              paddingLeft={[0, 0, 0, "50px"]}
              paddingX={["5px", "10px", "40px", 0]}
              width={["100%", "100%", "100%", "53%"]}
            >
              <Heading pl={[0, 0, 0, "30px"]}>Berichten</Heading>
              <BerichtBox />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const { id } = context.query;
  const resp = await axios.get(
    `https://wdev2.be/roel21/eindwerk/api/events/${id}.jsonld`,
    {
      headers: {
        Authorization: "Bearer " + cookies.User,
      },
      withCredentials: true,
    }
  );
  const serverData = resp.data;
  return {
    props: {
      serverData,
    },
  };
}
