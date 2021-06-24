import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ResponsiveNavbar from "../components/ResponsiveNavbar";

const cookies = parseCookies();

export default function nieuwWachtwoord() {
  const router = useRouter();

  const [wachtwoord, setWachtwoord] = useState("");
  const [herhaling, setHerhaling] = useState("");
  const [error, setError] = useState(false);

  const handleWachtwoordSubmit = async (e) => {
    e.preventDefault();
    if (wachtwoord === herhaling) {
      try {
        setError(false);
        const resp = await axios.put(
          `https://wdev2.be/roel21/eindwerk/api/users/${cookies.Id}`,
          {
            password: wachtwoord,
          },
          {
            headers: {
              Authorization: "Bearer " + cookies.User,
            },
          }
        );
        console.log(resp);
      } catch (error) {
        console.log(error);
      }
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Flex minHeight="100vh">
        <Box
          width={["0px", "0px", "0px", "20%"]}
          display={["none", "none", "none", "block"]}
        >
          <Navbar page="profiel" />
        </Box>

        <Box
          width={["100%", "100%", "100%", "80%"]}
          bgColor="gray.200"
          paddingTop={["0px", "0px", "0px", "50px"]}
          minHeight="100%"
        >
          <Box display={["block", "block", "block", "none"]}>
            <ResponsiveNavbar page="profiel" />
            <Text
              marginBottom="20px"
              marginLeft={["10px", "10px", "50px"]}
              textDecoration="underline"
              cursor="pointer"
              onClick={() => router.back()}
            >
              Terug naar profiel
            </Text>
          </Box>
          <Center>
            <Box width="90%" marginTop="10%">
              <Heading marginBottom="10px">Nieuw wachtwoord</Heading>
              <form onSubmit={handleWachtwoordSubmit}>
                <FormControl>
                  <FormLabel>Uw nieuw wachtwoord</FormLabel>
                  <input
                    className="profileInput"
                    type="password"
                    value={wachtwoord}
                    onChange={(e) => setWachtwoord(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Herhaal wachtwoord</FormLabel>
                  <input
                    className="profileInput"
                    type="password"
                    value={herhaling}
                    onChange={(e) => setHerhaling(e.target.value)}
                  />
                </FormControl>
                {error && (
                  <Text color="red">De wachtwoorden zijn niet gelijk</Text>
                )}

                <Button
                  width="150px"
                  colorScheme="teal"
                  marginTop="20px"
                  type="submit"
                >
                  Wijzig wachtwoord
                </Button>
              </form>
            </Box>
          </Center>
        </Box>
      </Flex>
    </>
  );
}
