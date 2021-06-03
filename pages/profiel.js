process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

import axios from "axios";
import { Box, Flex, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ProfileForm from "../components/ProfileForm";

export default function profiel({ data }) {
  return (
    <>
      <Flex>
        <Box width="20%">
          <Navbar page="profiel" />
        </Box>
        <Box bgColor="gray.200" width="80%" minHeight="100vh">
          <Flex>
            <Box width="50%">
              <ProfileForm data={data} />
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

export async function getServerSideProps() {
  const resp = await axios.get("https://127.0.0.1:8000/api/users/3.json");
  const data = resp.data;
  return {
    props: {
      data,
    },
  };
}
