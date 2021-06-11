process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

import axios from "axios";
import { Box, Flex, Center } from "@chakra-ui/react";

import ResponsiveNavbar from "../../../components/ResponsiveNavbar";
import Navbar from "../../../components/Navbar";
import EvenementenGrid from "../../../components/EvenementenGrid";
import Searchbar from "../../../components/Searchbar";
import Pagination from "../../../components/Pagination";

export default function Evenementen({ data, page }) {
  //console.log("data?", data["hydra:member"]);
  const pageNumber = Math.ceil(data["hydra:totalItems"] / 6);
  const pageNumberArray = [...Array(pageNumber).keys()].map((page) => page + 1);
  return (
    <>
      <Flex>
        <Box
          width={["0px", "0px", "0px", "20%"]}
          display={["none", "none", "none", "block"]}
        >
          <Navbar />
        </Box>
        <Box
          bgColor="gray.200"
          width={["100%", "100%", "100%", "80%"]}
          minHeight="100vh"
        >
          <Box display={["block", "block", "block", "none"]}>
            <ResponsiveNavbar />
          </Box>
          <Box display={["none", "none", "none", "block"]}>
            <Searchbar data={data} />
          </Box>
          <EvenementenGrid data={data["hydra:member"]} />

          <Center>
            <Pagination
              page={page} //paginanummer uit en voor de api
              pageNumber={pageNumber} //paginanummer op de button
              pageNumberArray={pageNumberArray} //gegenereerde array om correct aantal buttons te maken
            />
          </Center>
        </Box>
      </Flex>
    </>
  );
}

export async function getServerSideProps(context) {
  const { page, filter } = context.query;
  const categorieFilter = filter[1] ? `&eventCategorie.naam=${filter[1]}` : "";
  const resp = await axios.get(
    `https://127.0.0.1:8000/api/events.jsonld?page=${page}&order[startDatum]=${filter[0]}${categorieFilter}`
  );
  const data = resp.data;
  return {
    props: {
      page,
      data,
    },
  };
}
