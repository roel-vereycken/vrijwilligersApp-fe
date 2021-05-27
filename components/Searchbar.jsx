import React from 'react'
import {
    Box,

    Button,

    Flex,
    Heading,
    Input,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

  } from "@chakra-ui/react";
function Searchbar( {data} ) {
    return (
        <div>
            <Box marginTop="20px" borderBottom="1px solid black" paddingBottom="20px">
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
        </div>
    )
}

export default Searchbar
