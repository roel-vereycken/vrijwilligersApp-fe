import React from 'react'
import Link from 'next/link'

import {
    Box,
    Button,
    Text,
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
            <Box paddingTop="20px" borderBottom="1px solid black" paddingBottom="20px" bgColor="blue.300">
            <Flex>
              <Heading fontSize="20px" marginTop="5px" marginLeft="50px" marginRight="auto">
                  Resultaten: {data["hydra:totalItems"]}
              </Heading>
              <Text fontSize="20px"  mr="10px">Sorteer op:</Text>
              <div className="dropdown">
                Datum
                <ul className="dropdown-content">
                  <Link href="/evenementen/1/asc"><a className="dropdownItems">
                    <li>Nieuwste - oud</li>
                  </a></Link>
                  <Link href="/evenementen/1/desc"><a className="dropdownItems">
                    <li>Oudste - nieuw</li>
                  </a></Link>
                </ul>  
              </div>
              <div className="dropdown">
                Categorieën
                <ul className="dropdown-content">
                  <li>Theater</li>
                  <li>Kermis</li>
                </ul>  
              </div>
              {/* <Input
                placeholder="Zoeken"
                width="20%"
                marginRight="50px"
                bgColor="gray.50"
                border="1px solid black"
              /> */}
            </Flex>
          </Box>
        </div>
    )
}

export default Searchbar
