process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

import axios from "axios";
import { Box, Flex, Center } from "@chakra-ui/react";
import nookies from "nookies";
import jwt_decode from "jwt-decode";

import ResponsiveNavbar from "../../../components/ResponsiveNavbar";
import Navbar from "../../../components/Navbar";
import EvenementenGrid from "../../../components/EvenementenGrid";
import Searchbar from "../../../components/Searchbar";
import Pagination from "../../../components/Pagination";

export default function Evenementen({ data, page, categories }) {
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
            <Searchbar data={data} categories={categories} />
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
  const cookies = nookies.get(context);

  const decoded = jwt_decode(cookies.User);

  console.log("hallo", decoded);
  const { page, filter } = context.query;
  const categorieFilter = filter[1] ? `&eventCategorie.naam=${filter[1]}` : "";

  const resp = await axios.get(
    `https://127.0.0.1:8000/api/events.jsonld?page=${page}&order[startDatum]=${filter[0]}${categorieFilter}`,
    {
      headers: {
        Authorization: "Bearer " + cookies.User,
      },
      withCredentials: true,
    }
  );

  const data = resp.data;

  const resp2 = await axios.get("https://127.0.0.1:8000/api/categories.json", {
    headers: {
      Authorization: "Bearer " + cookies.User,
    },
    withCredentials: true,
  });

  const categories = resp2.data;

  return {
    props: {
      page,
      data,
      categories,
    },
  };
}
