import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Moment from "react-moment";

function Opmerking({ text, userName, userFirstName, createdAt }) {
  return (
    <div>
      <Box
        margin="10px"
        marginLeft="auto"
        border="1px solid black"
        borderRadius="7"
        padding="5px"
        width="80%"
      >
        <Flex>
          <Text fontSize="12px">
            Geplaatst door: {userFirstName} {userName}
          </Text>
          <Text fontSize="12px" marginLeft="auto">
            <Moment fromNow locale="nl">
              {createdAt}
            </Moment>
          </Text>
        </Flex>
        <Box
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></Box>
        {/* <Text
                    marginLeft="auto"
                    width="90px"
                    fontSize="12px"
                    color="blue.900"
                    textDecoration="underline"
                    fontWeight="bold"
                  >
                    Beantwoorden
                  </Text> */}
      </Box>
    </div>
  );
}

export default Opmerking;
