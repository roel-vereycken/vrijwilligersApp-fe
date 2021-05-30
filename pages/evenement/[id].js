import React from "react";
import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import TaakKnop from "../../components/TaakKnop";
import BerichtBox from "../../components/BerichtBox";

export default function evenementDetail() {
  return (
    <div>
      <Flex>
        <Box width="20%">
          <Navbar />
        </Box>
        <Box width="80%" bgColor="gray.200" paddingTop="50px" minHeight="100vh">
          <Box
            marginX="50px"
            borderBottom="1px solid black"
            paddingBottom="15px"
          >
            <Flex>
              <Image
                borderRadius="7"
                width="550px"
                height="260px"
                fallbackSrc="https://dummyimage.com/320x150/000/fff"
              />
              <Box marginLeft="40px" width="40%">
                <Text
                  border="1px solid black"
                  borderRadius="7"
                  height="40px"
                  marginBottom="10px"
                  paddingX="10px"
                  fontSize="25px"
                >
                  Titel
                </Text>
                <Text
                  border="1px solid black"
                  borderRadius="7"
                  height="40px"
                  fontSize="25px"
                  paddingX="10px"
                  marginBottom="10px"
                >
                  Datum
                </Text>
                <Text
                  border="1px solid black"
                  borderRadius="7"
                  height="40px"
                  fontSize="25px"
                  paddingX="10px"
                  marginBottom="10px"
                >
                  Locatie
                </Text>
                <Text
                  border="1px solid black"
                  borderRadius="7"
                  height="80px"
                  marginBottom="10px"
                  paddingX="10px"
                >
                  Beschrijving{" "}
                </Text>
              </Box>
            </Flex>
          </Box>
          <Flex>
            <Box paddingLeft="50px" width="50%">
              <Heading>Taken: </Heading>
              <Box
                border="1px solid black"
                borderRadius="7"
                overflowY="auto"
                height="370px"
                padding="10px"
                marginRight="10px"
              >
                <SimpleGrid columns={2} spacingX="50px" spacingY="20px">
                  <TaakKnop text="gras afrijden" />
                  <TaakKnop text="vestiaire openhouden" />
                  <TaakKnop text="artiest ontvangen" />
                  <TaakKnop text="tappen" />
                  <TaakKnop text="zaal opkuisen" />
                  <TaakKnop text="Langere teks om eens te zien wat er gebeurt als deze te lang wordt" />
                  <TaakKnop text="Taak 7" />
                  <TaakKnop text="Taak 8" />
                  <TaakKnop text="Taak 9" />
                </SimpleGrid>
              </Box>
            </Box>
            <Box borderLeft="1px solid black" width="50%">
              <Heading pl="30px">Berichten</Heading>
              <BerichtBox />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}
