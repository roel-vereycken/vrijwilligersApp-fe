process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

import axios from "axios";
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
export default function profiel() {
  return (
    <>
      <Flex>
        <Box width="20%">
          <Navbar />
        </Box>
        <Box bgColor="gray.200" width="80%">
          <Flex>
            <Box width="50%">
              <Flex direction="column">
                <FormControl className="profileTextField" paddingTop="90px">
                  <FormLabel>Voornaam</FormLabel>
                  <input className="profileInput" type="text" />
                </FormControl>
                <FormControl className="profileTextField">
                  <FormLabel>Naam</FormLabel>
                  <input className="profileInput" type="text" />
                </FormControl>
                <FormControl className="profileTextField">
                  <FormLabel>Emailadres</FormLabel>
                  <input className="profileInput" type="text" />
                </FormControl>
                <FormControl className="profileTextField">
                  <FormLabel>Telefoonnummer</FormLabel>
                  <input className="profileInput" type="text" />
                </FormControl>
                <a id="wachtwoordLink">Nieuw wachtwoord aanmaken</a>
                <Button
                  width="140px"
                  marginLeft="50px"
                  bgColor="green.400"
                  marginTop="20px"
                >
                  Sla wijzigingen op
                </Button>
              </Flex>
            </Box>
            <Box
              width="50%"
              marginTop="80px"
              paddingRight="50px"
              borderLeft="1px solid black"
            >
              <Text paddingLeft="50px" fontSize="20px" marginTop="50px">
                Hier kan je je persoonlijke gegevens aanpassen.
                <br />
                <br />
                Hoe doe je dit?
                <br />
                <br />
                Klik op het invulveld en pas de gegeven informatie aan.
                <br />
                Klik vervolgens op de groene knop.
                <br />
                <br />
                Je wachtwoord wijzigen kan door op de blauwe link te klikken.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
