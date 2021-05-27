import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

export default function mijnTaken() {
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
                <th>Berichten</th>
              </tr>
              <tr>
                <td>Jaarmarkt</td>
                <td>Afwassen</td>
                <td>Markt</td>
                <td>18/05/2021</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Jaarmarkt</td>
                <td>Afwassen</td>
                <td>Markt</td>
                <td>18/05/2021</td>
                <td>2</td>
              </tr>
            </table>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}
