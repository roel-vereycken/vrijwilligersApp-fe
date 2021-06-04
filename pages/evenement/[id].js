import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import TakenBox from "../../components/TakenBox";
import BerichtBox from "../../components/BerichtBox";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function evenementDetail({ serverData }) {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isValidating } = useSWR(
    `https://127.0.0.1:8000/api/berichts.json?eventBericht.id=${id}`,
    fetcher,
    { refreshInterval: 1000 }
  );

  return (
    <div>
      <Flex>
        <Box
          width={["0px", "0px", "0px", "20%"]}
          display={["none", "none", "none", "block"]}
        >
          <Navbar />
        </Box>
        <Box
          width={["100%", "100%", "100%", "80%"]}
          bgColor="gray.200"
          paddingTop="50px"
          minHeight="100%"
        >
          <Box marginX="50px" paddingBottom="15px">
            <Flex direction={["column", "column", "column", "row"]}>
              <Image
                borderRadius="7"
                width={["100%", "366px", "680px", "550px"]}
                height={[0, "173px", "308px", "260px"]}
                src={`http://localhost/vrijwilligersApp/public/images/afbeeldingen/${serverData.afbeelding}`}
                fallbackSrc="https://dummyimage.com/550x260/000/fff"
              />
              <Box marginLeft="40px" width="40%">
                <UnorderedList fontSize="1.25rem">
                  <ListItem>Titel: {serverData.naam}</ListItem>
                  <ListItem>Datum: {serverData.startDatum}</ListItem>
                  <ListItem>Locatie</ListItem>
                  <ListItem>Beschrijving: {serverData.beschrijving}</ListItem>
                </UnorderedList>
              </Box>
            </Flex>
          </Box>
          <Flex direction={["column", "column", "column", "row"]}>
            <Box
              marginLeft={[0, 0, 0, "50px"]}
              paddingX={["5px", "10px", "40px", 0]}
              width={["100%", "100%", "100%", "47%"]}
            >
              <Heading>Taken: </Heading>
              <TakenBox serverData={serverData} />
            </Box>
            <Box
              paddingLeft={[0, 0, 0, "50px"]}
              paddingX={["5px", "10px", "40px", 0]}
              width={["100%", "100%", "100%", "53%"]}
            >
              <Heading pl={[0, 0, 0, "30px"]}>Berichten</Heading>
              <BerichtBox berichten={data} />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const resp = await axios.get(
    `https://127.0.0.1:8000/api/events/${id}.jsonld`
  );
  const serverData = resp.data;
  return {
    props: {
      serverData,
    },
  };
}
