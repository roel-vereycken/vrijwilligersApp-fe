import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import cookie from "js-cookie";

import {
  Box,
  Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Flex,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { FaUser, FaCalendar, FaCheck, FaInfo } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

function ResponsiveNavbar({ page }) {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleLogOut = (e) => {
    e.preventDefault();

    cookie.remove("User");
    cookie.remove("Id");

    router.push("/");
  };
  return (
    <>
      <Box
        bg="blue.600"
        height="80px"
        mb="20px"
        alignContent="center"
        borderBottom="1px solid black"
      >
        <Flex>
          <Heading ml="20px" marginY="15px">
            VrijwilligersApp
          </Heading>
          <IconButton
            marginLeft="auto"
            marginRight="20px"
            marginY="18px"
            ref={btnRef}
            onClick={onOpen}
            icon={<HamburgerIcon />}
          />
        </Flex>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="blue.600">
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading
              marginTop="15px"
              marginLeft="10px"
              marginBottom="50px"
              fontSize="30px"
            >
              VrijwilligersApp
            </Heading>
          </DrawerHeader>

          <DrawerBody>
            <List spacing="5">
              <ListItem>
                <Link href="/profiel" color="blue">
                  <a>
                    <Flex>
                      <Icon
                        as={FaUser}
                        w={5}
                        h={5}
                        marginTop="8px"
                        marginX="10px"
                      />
                      <Text
                        fontSize="2xl"
                        textDecoration={page === "profiel" ? "underline" : ""}
                      >
                        Profiel
                      </Text>
                    </Flex>
                  </a>
                </Link>
              </ListItem>

              <ListItem>
                <Link href="/evenementen/1/asc">
                  <a>
                    <Flex>
                      <Icon
                        as={FaCalendar}
                        w={5}
                        h={5}
                        marginTop="8px"
                        marginX="10px"
                      />
                      <Text
                        fontSize="2xl"
                        textDecoration={page === undefined ? "underline" : ""}
                      >
                        Evenementen
                      </Text>
                    </Flex>
                  </a>
                </Link>
              </ListItem>

              <ListItem>
                <Link href="/mijn-taken">
                  <a>
                    <Flex>
                      <Icon
                        as={FaCheck}
                        w={5}
                        h={5}
                        marginTop="8px"
                        marginX="10px"
                      />
                      <Text
                        fontSize="2xl"
                        textDecoration={page === "taken" ? "underline" : ""}
                      >
                        Mijn taken
                      </Text>
                    </Flex>
                  </a>
                </Link>
              </ListItem>
              <ListItem>
                <Flex>
                  <Icon
                    as={FaInfo}
                    w={5}
                    h={5}
                    marginTop="8px"
                    marginX="10px"
                  />
                  <Text fontSize="2xl">Info</Text>
                </Flex>
              </ListItem>
            </List>
          </DrawerBody>

          <DrawerFooter justifyContent="start">
            <Box>
              <Flex>
                <Icon
                  as={FiLogOut}
                  w={5}
                  h={5}
                  marginTop="9px"
                  marginX="10px"
                />
                <Text fontSize="2xl" cursor="pointer" onClick={handleLogOut}>
                  Log uit
                </Text>
              </Flex>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ResponsiveNavbar;
