import axios from "axios";
import { Box, Flex, Center } from "@chakra-ui/react";
import nookies from "nookies";

import ResponsiveNavbar from "../../../components/ResponsiveNavbar";
import Navbar from "../../../components/Navbar";
import EvenementenGrid from "../../../components/EvenementenGrid";
import Searchbar from "../../../components/Searchbar";
import Pagination from "../../../components/Pagination";

export default function Evenementen({ data, page, categories }) {
  //console.log("data?", data["hydra:member"]);
  const pageNumber = Math.ceil(data["hydra:totalItems"] / 6);
  const pageNumberArray = [...Array(pageNumber).keys()].map((page) => page + 1);
  // console.log(pageNumber, pageNumberArray);

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

          <Center marginTop="30px">
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

  const { page, filter } = context.query;
  const categorieFilter = filter[1] ? `&eventCategorie.naam=${filter[1]}` : "";

  try {
    const resp = await axios.get(
      `https://wdev2.be/roel21/eindwerk/api/events.jsonld?page=${page}&order[startDatum]=${filter[0]}${categorieFilter}`,
      {
        headers: {
          Authorization: "Bearer " + cookies.User,
        },
      }
    );

    const data = resp.data;

    const resp2 = await axios.get(
      "https://wdev2.be/roel21/eindwerk/api/categories.json",
      {
        headers: {
          Authorization: "Bearer " + cookies.User,
        },
        withCredentials: true,
      }
    );

    const categories = resp2.data;

    return {
      props: {
        page,
        data,
        categories,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
