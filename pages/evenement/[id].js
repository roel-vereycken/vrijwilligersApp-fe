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
            <Text marginBottom="20px" marginLeft="50px">
              Terug naar overzicht
            </Text>
          </Box>
          <Box marginX="50px" paddingBottom="15px">
            <Flex direction={["column", "column", "column", "row"]}>
              <Image
                borderRadius="7"
                width={["100%", "366px", "100%", "550px"]}
                height={["140px", "173px", "320px", "260px"]}
                //src={`https://localhost/vrijwilligersApp/public/images/afbeeldingen/${serverData.afbeelding}`}
                src={`https://wdev2.be/roel21/eindwerk/images/image.php/${serverData.afbeelding}?image=/roel21/eindwerk/images/afbeeldingen/${serverData.afbeelding}`}
                fallbackSrc="https://wdev2.be/roel21/eindwerk/images/image.php/theater.jpg?image=/roel21/eindwerk/images/afbeeldingen/theater.jpg"
              />

              <Box
                marginTop={["20px"]}
                marginLeft={["-40px", "-33px", "5px", "40px"]}
                width={["120%", "110%", "100%", "40%"]}
              >
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
                      <Box
                        marginLeft="7px"
                        pt="4px"
                        fontSize="16px"
                        dangerouslySetInnerHTML={{
                          __html: serverData.beschrijving,
                        }}
                      ></Box>
                    </Flex>
                  </ListItem>
                </List>
              </Box>
            </Flex>
          </Box>
          <Flex direction={["column", "column", "column", "row"]}>
            <Box
              marginLeft={[0, 0, 0, "50px"]}
              paddingX={["10px", "10px", "40px", 0]}
              width={["100%", "100%", "100%", "47%"]}
            >
              <Heading>Taken: </Heading>
              <TakenBox serverData={serverData} />
            </Box>
            <Box
              paddingLeft={[0, 0, 0, "50px"]}
              paddingX={["10px", "10px", "40px", 0]}
              width={["100%", "100%", "100%", "53%"]}
              marginTop={["15px", "15px", "15px", 0]}
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
  try {
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
  } catch (error) {
    console.log(error);
  }
}
