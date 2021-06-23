import React from "react";
import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import nookies from "nookies";

import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Moment from "react-moment";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
export default function mijnTaken({ data }) {
  console.log(data.taakverdeling);
  return (
    <div>
      <Flex>
        <Box
          width={["0px", "0px", "0px", "20%"]}
          display={["none", "none", "none", "block"]}
        >
          <Navbar page="taken" />
        </Box>
        <Box
          width={["100%", "100%", "100%", "80%"]}
          bgColor="gray.200"
          minHeight="100vh"
        >
          {/* <Box display={["none", "none", "none", "block"]}>
            <Searchbar data={[]} />
          </Box> */}
          <Box display={["block", "block", "block", "none"]}>
            <ResponsiveNavbar page="taken" />
          </Box>
          <Box width="100%" paddingX={["10px", "10px", "45px"]}>
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
                    <td>
                      <Moment format="DD/MM/YYYY">{taak.datum}</Moment>
                    </td>
                  </tr>
                ))}
            </table>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);

  try {
    const resp = await axios.get(
      `https://wdev2.be/roel21/eindwerk/api/users/${cookies.Id}`,
      {
        headers: {
          Authorization: "Bearer " + cookies.User,
        },
        withCredentials: true,
      }
    );
    const data = resp.data;
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
