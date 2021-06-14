import React, { useState } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import axios from "axios";
import {
  Box,
  Input,
  Flex,
  FormControl,
  FormLabel,
  Button,
  Center,
} from "@chakra-ui/react";
export default function login() {
  const [email, setEmail] = useState("");
  const [wachtwoord, setWachtwoord] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const resp = await axios.post("https://127.0.0.1:8000/api/login_check", {
      username: email,
      password: wachtwoord,
    });
    console.log(resp.data.token);
    setCookie(null, "User", resp.data.token);
    setEmail("");
    setWachtwoord("");
  };

  return (
    <Box bgColor="gray.200" minHeight="100vh">
      <form onSubmit={handleLogin}>
        <Center>
          <Flex direction="column" bgColor="gray.200" width="60%">
            <FormControl className="profileTextField" paddingTop="90px">
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
