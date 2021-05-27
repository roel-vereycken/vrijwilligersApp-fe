process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import EvenementenGrid from "../components/EvenementenGrid";
import Searchbar from "../components/Searchbar";

export default function Home({ data }) {
  return (
    <>
      <Flex>
        <Box width="20%">
          <Navbar />
        </Box>
        <Box bgColor="gray.200" width="80%" minHeight="100vh">
          <Searchbar data={data} />
          <EvenementenGrid data={data} />
        </Box>
      </Flex>
    </>
  );
}

export async function getServerSideProps() {
  const resp = await axios.get("https://127.0.0.1:8000/api/events.json");
  const data = resp.data;
  return {
    props: {
      data,
    },
  };
}
