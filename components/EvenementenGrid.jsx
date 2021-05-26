import React from 'react'
import {
    Box,
    IconButton,
    Button,
    Center,
    Divider,
    Flex,
    Heading,
    Input,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    SimpleGrid,
    Image,
    Text,
  } from "@chakra-ui/react";
  import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function EvenementenGrid({data}) {
    return (
        <>
        <Box bgColor="gray.200" width="80%">
          <Box marginTop="35px" borderBottom="1px solid black" paddingBottom="15px">
            <Flex>
              <Menu>
                <Heading fontSize="20px" paddingTop="7px" marginLeft="50px">
                  Resultaten: {data.length}
                </Heading>
                <MenuButton
                  as={Button}
                  cursor={"pointer"}
                  marginLeft="auto"
                  marginRight="20px"
                  border="1px solid black"
                >
                  Categorie
                </MenuButton>
                <MenuList>
                  <MenuItem>Theater</MenuItem>
                  <MenuItem>Film</MenuItem>
                  <MenuItem>Muziek</MenuItem>
                </MenuList>
              </Menu>
              <Input
                placeholder="Zoeken"
                width="20%"
                marginRight="50px"
                bgColor="gray.50"
                border="1px solid black"
              />
            </Flex>
          </Box>
          <SimpleGrid
            height="75%"
            marginTop="25px"
            marginX="50px"
            columns={3}
            spacingX="50px"
            spacingY="50px"
          >
            {data.map((evenement) => {
              return (
                <Box
                  bg="gray.50"
                  maxHeight="245px"
                  maxWidth="340px"
                  borderRadius="7"
                  border="1px solid grey"
                >
                  <Image
                    borderTopRadius="7"
                    width="100%"
                    height="175px"
                    src={`http://localhost/vrijwilligersApp/public/images/afbeeldingen/${evenement.afbeelding}`}
                    fallbackSrc="https://dummyimage.com/320x150/000/fff"
                  />
                  <Text
                    pl="15px"
                    pt="5px"
                    height="30px"
                    overflow="hidden"
                    marginBottom="5px"
                    borderTop="1px solid gray"
                  >
                    {evenement.naam}
                  </Text>
                  <Center>
                    <Divider
                      orientation="horizontal"
                      width="90%"
                      outline="center"
                    />
                  </Center>
                  <Text pl="15px" pt="5px" >
                    Gezocht:
                  </Text>
                </Box>
              );
            })}
          </SimpleGrid>
          <Center>
            <Box marginTop="20px">
              <IconButton
                height="30px"
                width="30px"
                icon={<ChevronLeftIcon />}
                border="1px solid grey"
              />
              <Button height="30px" width="30px" marginLeft="10px" border="1px solid grey" >
                1
              </Button>
              <IconButton
                marginLeft="10px"
                height="30px"
                width="30px"
                icon={<ChevronRightIcon />}
                border="1px solid grey"
              />
            </Box>
          </Center>
        </Box>
        </>
    )
}

export default EvenementenGrid
