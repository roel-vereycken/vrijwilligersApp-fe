import React, { useState } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import useSWR, { trigger } from "swr";
import { Box, Button, Text, Textarea } from "@chakra-ui/react";
import Bericht from "./Bericht";
import axios from "axios";

const cookies = parseCookies();

const fetcher = (url, token) =>
  axios
    .get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => res.data);

function BerichtBox() {
  const router = useRouter();

  const { id } = router.query;

  const [message, setMessage] = useState("");

  /* Swr om data te fetchen */
  const { data } = useSWR(
    [
      `https://wdev2.be/roel21/eindwerk/api/berichts.json?eventBericht.id=${id}`,
      cookies.User,
    ],
    fetcher
  );
  /* Handler om een bericht te versturen */
  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.post(
      "https://wdev2.be/roel21/eindwerk/api/berichts",
      {
        body: message,
        userBericht: `/roel21/eindwerk/api/users/${cookies.Id}`,
        eventBericht: `/roel21/eindwerk/api/events/${id}`,
      },
      {
        headers: {
          Authorization: "Bearer " + cookies.User,
        },
      }
    );
    setMessage("");

    trigger([
      `https://wdev2.be/roel21/eindwerk/api/berichts.json?eventBericht.id=${id}`,
      cookies.User,
    ]);
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
              createdAt={bericht.createdAt}
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
