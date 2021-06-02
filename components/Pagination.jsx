import React from 'react'
import Link from "next/link";
import { Box, IconButton, Button} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function Pagination({page, pageNumber, pageNumberArray}) {
    return (
        <div>
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
        </div>
    )
}

export default Pagination
