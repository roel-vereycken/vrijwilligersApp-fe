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
import TaakKnop from "../../components/TaakKnop";
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
        <Box width="20%">
          <Navbar />
        </Box>
        <Box width="80%" bgColor="gray.200" paddingTop="50px" minHeight="100%">
          <Box marginX="50px" paddingBottom="15px">
            <Flex>
              <Image
                borderRadius="7"
                width="550px"
                height="260px"
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
          <Flex>
            <Box paddingLeft="50px" width="50%">
              <Heading>Taken: </Heading>
              <Box
                border="1px solid black"
                borderRadius="7"
                overflowY="auto"
                maxHeight="370px"
                padding="10px"
                marginRight="10px"
              >
                <SimpleGrid columns={2} spacingX="50px" spacingY="20px">
                  {serverData.eventTaken.map((taak) => {
                    console.log("check");
                    return <TaakKnop text={taak.taakId.naam} />;
                  })}
                </SimpleGrid>
              </Box>
            </Box>
            <Box width="50%">
              <Heading pl="30px">Berichten</Heading>
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
