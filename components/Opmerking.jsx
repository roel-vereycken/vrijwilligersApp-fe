import React from "react";
import axios from "axios";
import { Box, Flex, Text } from "@chakra-ui/react";
import Moment from "react-moment";
import jwt_decode from "jwt-decode";
import { parseCookies } from "nookies";
import { trigger } from "swr";

const cookies = parseCookies();

function Opmerking({
  eventId,
  opmerkingId,
  text,
  userName,
  userFirstName,
  userEmail,
  createdAt,
}) {
  console.log(opmerkingId);
  const decodedEmail = jwt_decode(cookies.User);

  const handleReactionDelete = async (e) => {
    e.preventDefault();
    try {
      const resp = axios.delete(
        `https://wdev2.be/roel21/eindwerk/api/opmerkings/${opmerkingId}`,
        {
          headers: {
            Authorization: "Bearer " + cookies.User,
          },
        }
      );
      trigger([
        `https://wdev2.be/roel21/eindwerk/api/berichts.json?eventBericht.id=${eventId}`,
        cookies.User,
      ]);
    } catch (error) {
      console.log(error);
    }
  };

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
        {String(decodedEmail.username) == String(userEmail) && (
          <Text
            marginLeft="auto"
            width="120px"
            fontSize="12px"
            color="red"
            textDecoration="underline"
            fontWeight="bold"
            cursor="pointer"
            onClick={handleReactionDelete}
          >
            Verwijder dit bericht
          </Text>
        )}
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
