process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
import React, { useState, useEffect } from "react";

import axios from "axios";
import { Box, Flex, IconButton, Button, Center } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import Navbar from "../components/Navbar";
import EvenementenGrid from "../components/EvenementenGrid";
import Searchbar from "../components/Searchbar";

export default function Home({ data }) {
  // console.log(data["hydra:view"]);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [pageNumber, setPageNumber] = useState(1);
  // const [pageNumberArray, setPageNumberArray] = useState([]);
  // const [data, setData] = useState([]);

  // useEffect(async () => {
  //   const resp = await axios.get(
  //     `https://127.0.0.1:8000/api/events.jsonld?page=${currentPage}`
  //   );
  //   setData(resp.data);

  // }, []);

  const handlepageNumberClick = (e) => {
    console.log(e.target.id);
    setCurrentPage(e.target.id);
  };

  console.log("data?", data["hydra:member"]);
  const pageNumber = Math.ceil(data["hydra:totalItems"] / 6);
  const pageNumberArray = [...Array(pageNumber).keys()].map((page) => page + 1);

  return (
    <>
      <Flex>
        <Box width="20%">
          <Navbar />
        </Box>
        <Box bgColor="gray.200" width="80%" minHeight="100vh">
          <Searchbar data={data} />
          <EvenementenGrid data={data["hydra:member"]} />

          <Center>
            <Box marginTop="35px">
              <IconButton
                height="30px"
                width="30px"
                icon={<ChevronLeftIcon />}
                border="1px solid grey"
              />
              {pageNumberArray.map((pagenr) => (
                <Button
                  key={pagenr}
                  id={pagenr}
                  height="30px"
                  width="30px"
                  marginLeft="10px"
                  border="1px solid grey"
                  onClick={handlepageNumberClick}
                >
                  {pagenr}
                </Button>
              ))}

              <IconButton
                marginLeft="10px"
                height="30px"
                width="30px"
                icon={<ChevronRightIcon />}
                border="1px solid grey"
              />
            </Box>
          </Center>
        </Box>
      </Flex>
    </>
  );
}

export async function getServerSideProps() {
  const resp = await axios.get("https://127.0.0.1:8000/api/events.jsonld");
  const data = resp.data;
  return {
    props: {
      data,
    },
  };
}
