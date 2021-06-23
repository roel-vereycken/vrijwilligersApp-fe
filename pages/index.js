import React, { useState } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { useRouter } from "next/router";

import axios from "axios";
import {
  Box,
  Text,
  Input,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Button,
  Center,
} from "@chakra-ui/react";
export default function login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [wachtwoord, setWachtwoord] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError(false);
      const resp = await axios.post(
        "https://wdev2.be/roel21/eindwerk/api/login_check",
        {
          username: email,
          password: wachtwoord,
        }
      );
      setCookie(null, "User", resp.data.token);
      setCookie(null, "Id", resp.data.data.id);
      router.push("/evenementen/1/asc");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <Box bgColor="gray.200" minHeight="100vh">
      <form onSubmit={handleLogin}>
        <Heading marginLeft="23%" paddingTop="10%" paddingBottom="10px">
          Log in
        </Heading>
        <Center>
          <Flex direction="column" bgColor="gray.200" width="60%">
            <FormControl className="profileTextField">
              <FormLabel>Email</FormLabel>
              <input
                className="profileInput"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl className="profileTextField">
              <FormLabel>Wachtwoord</FormLabel>
              <input
                className="profileInput"
                type="password"
                value={wachtwoord}
                onChange={(e) => setWachtwoord(e.target.value)}
              />
            </FormControl>

            {error && (
              <Text marginLeft="50px" color="red">
                Uw inloggevens zijn incorrect
              </Text>
            )}

            <Button
              width="140px"
              marginLeft="50px"
              colorScheme="teal"
              marginTop="20px"
              type="submit"
            >
              Meld je aan
            </Button>
          </Flex>
        </Center>
      </form>
    </Box>
  );
}
