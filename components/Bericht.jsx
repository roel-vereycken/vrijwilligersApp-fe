import React, { useState } from "react";
import axios from "axios";
import { trigger } from "swr";
import { Box, Button, Text, Textarea, Flex } from "@chakra-ui/react";
import Opmerking from "./Opmerking";
import { parseCookies } from "nookies";
import Moment from "react-moment";

const cookies = parseCookies();

function Bericht({
  eventId,
  berichtId,
  text,
  userName,
  userFirstName,
  comments,
  createdAt,
}) {
  const [active, setActive] = useState(false);
  const [reaction, setReaction] = useState("");

  /* Handler om een opmerking te versturen */
  const handleReactionSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.post(
      "https://wdev2.be/roel21/eindwerk/api/opmerkings",
      {
        body: reaction,
        opmerkingBericht: `/roel21/eindwerk/api/berichts/${berichtId}`,
        opmerkingUser: `/roel21/eindwerk/api/users/${cookies.Id}`,
      },
      {
        headers: {
          Authorization: "Bearer " + cookies.User,
        },
      }
    );
    setReaction("");
    setActive(false);
    trigger([
      `https://wdev2.be/roel21/eindwerk/api/berichts.json?eventBericht.id=${eventId}`,
      cookies.User,
    ]);
    console.log(resp);
  };
  return (
    <div>
      <Box
        margin="10px"
        border="1px solid black"
        borderRadius="7"
        padding="5px"
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
        {/* Enkel de volgende tags worden behouden in een post/put :
         <h1><em><strong><blockquote><ul><li><del><a><ol><br> */}
        <Box
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></Box>
        <Text
          marginLeft="auto"
          width="90px"
          fontSize="12px"
          color="blue.900"
          textDecoration="underline"
          fontWeight="bold"
          onClick={() => setActive(!active)}
        >
          Beantwoorden
        </Text>
      </Box>
      {active && (
        <Box
          margin="10px"
          marginLeft="auto"
          border="1px solid gray"
          borderRadius="7"
          padding="5px"
          width="80%"
        >
          <form onSubmit={handleReactionSubmit}>
            <Textarea
              id="berichtInput"
              placeholder="Plaats een reactie"
              value={reaction}
              onChange={(e) => setReaction(e.target.value)}
            ></Textarea>
            <Button
              marginLeft="auto"
              marginRight="10px"
              colorScheme="teal"
              marginBottom="10px"
              width="90px"
              display="block"
              type="submit"
            >
              Plaats
            </Button>
          </form>
        </Box>
      )}

      {comments.map((comment) => (
        <Opmerking
          key={comment.id}
          text={comment.body}
          userName={comment.opmerkingUser.naam}
          userFirstName={comment.opmerkingUser.voornaam}
          createdAt={createdAt}
        />
      ))}
    </div>
  );
}

export default Bericht;
