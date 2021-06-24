import React from "react";
import Link from "next/link";
import { Box, IconButton, Button, Center } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

function Pagination({ page, pageNumber, pageNumberArray }) {
  const router = useRouter();
  const order = router.query.filter[0];
  const categorie = router.query.filter[1] ? router.query.filter[1] : "";
  return (
    <div>
      <Center>
        <Box position="absolute" bottom="20px">
          {pageNumber - Number(page) === 0 && pageNumber !== 1 && (
            <Link
              href={`/evenementen/${Number(page) - 1}/${order}/${categorie}`}
            >
              <IconButton
                height="30px"
                width="30px"
                icon={<ChevronLeftIcon />}
                border="1px solid grey"
              />
            </Link>
          )}

          {pageNumberArray.map((pagenr) => (
            <Link href={`/evenementen/${pagenr}/${order}/${categorie}`}>
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

          {pageNumber - Number(page) >= 1 && (
            <Link
              href={`/evenementen/${Number(page) + 1}/${order}/${categorie}`}
            >
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
    </div>
  );
}

export default Pagination;
