import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cookie from "js-cookie";

import { Box, Flex, Text, Heading, List, ListItem } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaUser, FaCalendar, FaCheck, FaInfo } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

function Navbar({ page }) {
  const router = useRouter();
  const handleLogOut = (e) => {
    e.preventDefault();

    cookie.remove("User");
    cookie.remove("Id");

    router.push("/");
  };
  return (
    <nav id="navBar">
      <Box
        bg="blue.600"
        pt="10%"
        width="100%"
        height="100vh"
        borderRight="2px solid black"
      >
        <Heading marginTop="15px" marginLeft="10px" marginBottom="50px">
          VrijwilligersApp
        </Heading>

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
              <Icon as={FaInfo} w={5} h={5} marginTop="8px" marginX="10px" />
              <Text fontSize="2xl">Info</Text>
            </Flex>
          </ListItem>
        </List>
        <Box marginTop="330px">
          <Flex>
            <Icon as={FiLogOut} w={5} h={5} marginTop="9px" marginX="10px" />
            <Text fontSize="2xl" cursor="pointer" onClick={handleLogOut}>
              Log uit
            </Text>
          </Flex>
        </Box>
      </Box>
    </nav>
  );
}

export default Navbar;
