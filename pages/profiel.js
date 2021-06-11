process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

import axios from "axios";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ProfileForm from "../components/ProfileForm";
import ResponsiveNavbar from "../components/ResponsiveNavbar";

export default function profiel({ data }) {
  return (
    <>
      <Flex>
        <Box
          width={["0px", "0px", "0px", "20%"]}
          display={["none", "none", "none", "block"]}
        >
          <Navbar page="profiel" />
        </Box>
        <Box
          width={["100%", "100%", "100%", "80%"]}
          bgColor="gray.200"
          minHeight="100%"
        >
          <Box display={["block", "block", "block", "none"]}>
            <ResponsiveNavbar page="profiel" />
          </Box>
          <Flex
            flexDirection={["column", "column", "row", "row"]}
            minHeight="100vh"
          >
            <Box width={["100%", "100%", "50%", "50%"]}>
              <ProfileForm data={data} />
            </Box>
            <Box
              width={["100%", "100%", "50%", "50%"]}
              marginTop="80px"
              paddingRight="50px"
              borderLeft={["none", "none", "1px solid black"]}
              borderTop={["1px solid black", "1px solid black", "none"]}
            >
              <Heading
                paddingLeft="50px"
                mb="10px"
                mt={["20px", "20px", "0px"]}
              >
                Info:{" "}
              </Heading>
              <Text paddingLeft="50px" fontSize="20px">
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
  const resp = await axios.get("https://127.0.0.1:8000/api/users/4.json");
  const data = resp.data;
  return {
    props: {
      data,
    },
  };
}
