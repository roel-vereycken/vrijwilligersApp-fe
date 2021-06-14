import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

function TaakKnop({ text }) {
  // const [clicked, setClicked] = useState(false)
  // console.log("clicked", clicked)
  // const handleClick = () => {
  //   setClicked(!clicked)
  // }
  return (
    <div>
      <Box>
        <Flex maxHeight="200px">
          <Text
            height="100%"
            paddingTop="2px"
            paddingBottom="3px"
            border="1px solid black"
            borderLeftRadius="7"
            borderRight="none"
            paddingX="10px"
            width="60%"
          >
            {text}
          </Text>
          {/* <Popover >
                      <PopoverTrigger>
                        <Button onClick={handleClick}>Trigger</Button>
                      </PopoverTrigger>
                      {clicked && (
                      <PopoverContent >
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Confirmation!</PopoverHeader>
                        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                      </PopoverContent>)
                      }
                    </Popover> */}
          <IconButton
            height="auto"
            borderLeftRadius="none"
            border="1px solid black"
            colorScheme="teal"
            icon={<CheckIcon />}
          ></IconButton>
        </Flex>
      </Box>
    </div>
  );
}

export default TaakKnop;
