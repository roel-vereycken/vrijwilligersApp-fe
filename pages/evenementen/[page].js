process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
import React, { useState, useEffect } from "react";
import Link from "next/link";

import axios from "axios";
import { Box, Flex, IconButton, Button, Center } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import Navbar from "../../components/Navbar";
import EvenementenGrid from "../../components/EvenementenGrid";
import Searchbar from "../../components/Searchbar";

export default function Home({ data, page }) {
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
              {pageNumber - Number(page) === 0 && (
                <Link href={`/evenementen/${Number(page) - 1}`}>
                  <IconButton
                    height="30px"
                    width="30px"
                    icon={<ChevronLeftIcon />}
                    border="1px solid grey"
                  />
                </Link>
              )}
              {console.log("page", page)}
              {pageNumberArray.map((pagenr) => (
                <Link href={`/evenementen/${pagenr}`}>
                  <Button
                    bgColor={Number(page) === pagenr ? "yellow" : ""}
                    key={pagenr}
                    id={pagenr}
                    height="30px"
                    width="30px"
                    marginLeft="10px"
                    border="1px solid grey"
                  >
                    {pagenr}
                  </Button>
                </Link>
              ))}

              {pageNumber - Number(page) > 0 && (
                <Link href={`/evenementen/${Number(page) + 1}`}>
                  <IconButton
                    marginLeft="10px"
                    height="30px"
                    width="30px"
                    icon={<ChevronRightIcon />}
                    border="1px solid grey"
                  />
                </Link>
              )}
            </Box>
          </Center>
        </Box>
      </Flex>
    </>
  );
}

export async function getServerSideProps(context) {
  const { page } = context.query;
  const resp = await axios.get(
    `https://127.0.0.1:8000/api/events.jsonld?page=${page}`
  );
  const data = resp.data;
  return {
    props: {
      page,
      data,
    },
  };
}
