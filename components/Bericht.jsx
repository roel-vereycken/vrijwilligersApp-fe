import React, { useState } from "react";
import axios from "axios";
import { trigger } from "swr";
import { Box, Button, Text, Textarea } from "@chakra-ui/react";
import Opmerking from "./Opmerking";

function Bericht({
  eventId,
  berichtId,
  text,
  userName,
  userFirstName,
  comments,
}) {
  const [active, setActive] = useState(false);
  const [reaction, setReaction] = useState("");

  const handleReactionSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.post("https://127.0.0.1:8000/api/opmerkings", {
      body: reaction,
      opmerkingBericht: `/api/berichts/${berichtId}`,
      opmerkingUser: "/api/users/4",
    });
    setReaction("");
    setActive(false);
    trigger(
      `https://127.0.0.1:8000/api/berichts.json?eventBericht.id=${eventId}`
    );
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
        <Text fontSize="12px">
          Geplaatst door: {userFirstName} {userName}
        </Text>
        <Text>{text}</Text>
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
        />
      ))}
    </div>
  );
}

export default Bericht;
