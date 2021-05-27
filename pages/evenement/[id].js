import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import TaakKnop from "../../components/TaakKnop";

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
              <SimpleGrid columns={2} spacingX="50px" spacingY="20px">
                <TaakKnop text="Taak 1" />
                <TaakKnop text="Taak 2" />
                <TaakKnop text="Taak 3" />
                <TaakKnop text="Taak 4" />
              </SimpleGrid>
            </Box>
            <Box borderLeft="1px solid black" width="50%">
              <Heading pl="30px">Berichten</Heading>
              <Box
                border="1px solid black"
                borderRadius="7"
                width="87%"
                height="370px"
                overflowY="auto"
                marginLeft="30px"
              >
                <Box
                  margin="10px"
                  border="1px solid black"
                  borderRadius="7"
                  padding="5px"
                >
                  <Text fontSize="12px">
                    Geplaatst door: Hupeldepup Dirksen
                  </Text>
                  <Text>
                    TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT
                  </Text>
                  <Text
                    marginLeft="auto"
                    width="90px"
                    fontSize="12px"
                    color="blue.900"
                    textDecoration="underline"
                    fontWeight="bold"
                  >
                    Beantwoorden
                  </Text>
                </Box>
                <Box
                  margin="10px"
                  marginLeft="auto"
                  border="1px solid black"
                  borderRadius="7"
                  padding="5px"
                  width="80%"
                >
                  <Text fontSize="12px">
                    Geplaatst door: Hupeldepup Dirksen
                  </Text>
                  <Text>
                    TEXTTEXTTEXTTEXTTEXTTEXTTEXTTETTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT
                  </Text>
                  <Text
                    marginLeft="auto"
                    width="90px"
                    fontSize="12px"
                    color="blue.900"
                    textDecoration="underline"
                    fontWeight="bold"
                  >
                    Beantwoorden
                  </Text>
                </Box>
                <Box>
                  <Textarea
                    id="berichtInput"
                    placeholder="Schrijf zelf een bericht"
                  />
                  <Button
                    marginLeft="auto"
                    marginRight="10px"
                    colorScheme="teal"
                    marginBottom="10px"
                    width="90px"
                    display="block"
                  >
                    Verzend
                  </Button>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}
