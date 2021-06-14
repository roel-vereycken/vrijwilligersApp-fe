import React, { useState } from "react";
import { useRouter } from "next/router";
import useSWR, { trigger } from "swr";
import { Box, Button, Text, Textarea } from "@chakra-ui/react";
import Bericht from "./Bericht";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

function BerichtBox({ berichten }) {
  const router = useRouter();
  const { id } = router.query;
  // console.log(berichten)
  const [message, setMessage] = useState("");

  const { data } = useSWR(
    `https://127.0.0.1:8000/api/berichts.json?eventBericht.id=${id}`,
    fetcher
  );

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.post("https://127.0.0.1:8000/api/berichts", {
      body: message,
      userBericht: "/api/users/3",
      eventBericht: `/api/events/${id}`,
    });
    setMessage("");
    trigger(`https://127.0.0.1:8000/api/berichts.json?eventBericht.id=${id}`);
    console.log(resp);
  };

  return (
    <div>
      <Box
        border="1px solid black"
        borderRadius="7"
        width={["100%", "100%", "100%", "87%"]}
        maxHeight="370px"
        overflowY="auto"
        marginLeft={[0, 0, 0, "30px"]}
      >
        {!data && (
          <Text
            margin="10px"
            border="1px solid black"
            borderRadius="7"
            padding="5px"
          >
            Laden...
          </Text>
        )}
        {data && data.length === 0 && (
          <Text
            margin="10px"
            border="1px solid black"
            borderRadius="7"
            padding="5px"
          >
            Er zijn nog geen berichten bij dit evenement.
          </Text>
        )}
        {data &&
          data.map((bericht) => (
            <Bericht
              key={bericht.id}
              eventId={id}
              berichtId={bericht.id}
              text={bericht.body}
              userName={bericht.userBericht.naam}
              userFirstName={bericht.userBericht.voornaam}
              comments={bericht.opmerkingen}
            />
          ))}

        <Box height="150px">
          <form onSubmit={handleMessageSubmit}>
            <Textarea
              id="berichtInput"
              placeholder="Schrijf zelf een bericht"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              marginLeft="auto"
              marginRight="10px"
              colorScheme="teal"
              marginBottom="10px"
              width="90px"
              display="block"
              type="submit"
            >
              Verzend
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default BerichtBox;
