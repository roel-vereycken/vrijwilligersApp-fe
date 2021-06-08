import React from "react";
import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

export default function mijnTaken({ data }) {
  console.log(data.taakverdeling);
  return (
    <div>
      <Flex>
        <Box width="20%">
          <Navbar page="taken" />
        </Box>
        <Box width="80%" bgColor="gray.200" minHeight="100vh">
          <Searchbar data={[]} />
          <Box width="100%" paddingX="45px">
            <table>
              <tr>
                <th>Evenement</th>
                <th>Taak</th>
                <th>Categorie</th>
                <th>Datum</th>
              </tr>
              {data &&
                data.taakverdeling.map((taak) => (
                  <tr key={taak.id}>
                    <td>{taak.eventId.naam}</td>
                    <td>{taak.taakId.naam}</td>
                    <td>{taak.eventId.eventCategorie.naam}</td>
                    <td>{taak.datum}</td>
                  </tr>
                ))}
            </table>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export async function getServerSideProps() {
  const resp = await axios.get(`https://127.0.0.1:8000/api/users/3`);
  const data = resp.data;
  return {
    props: {
      data,
    },
  };
}
