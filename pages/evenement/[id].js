import React from "react";
import {
  Box,
  Checkbox,
  Flex,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import { CheckIcon } from "@chakra-ui/icons";

export default function evenementDetail() {
  return (
    <div>
      <Flex>
        <Box width="20%">
          <Navbar />
        </Box>
        <Box width="80%" bgColor="gray.200" paddingTop="50px">
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
          <Box paddingLeft="50px" width="50%">
            <Heading>Taken: </Heading>
            <SimpleGrid columns={2}>
              <Box>
                <Flex>
                  <Text
                    border="1px solid black"
                    borderLeftRadius="7"
                    paddingX="10px"
                    width="200px"
                  >
                    Evenement 1{" "}
                  </Text>
                  <IconButton icon={<CheckIcon />}></IconButton>
                </Flex>
              </Box>
              <Box paddingLeft="50px">
                <Flex>
                  <Text
                    border="1px solid black"
                    borderLeftRadius="7"
                    paddingX="10px"
                    width="200px"
                  >
                    Evenement 2{" "}
                  </Text>
                  <IconButton icon={<CheckIcon />}></IconButton>
                </Flex>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}
