import React, { useState, useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Box, Text } from "@chakra-ui/react";
import { parseCookies } from "nookies";

import Taak from "./Taak";
import TaakBevestiging from "./TaakBevestiging";
import Moment from "react-moment";
import moment from "moment";

const cookies = parseCookies();

const fetcher = (url, token) =>
  axios
    .get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => res.data);

function TakenBox() {
  const router = useRouter();
  const { id } = router.query;
  const deelnemers = [];
  const [gekozenTaak, setGekozenTaak] = useState({});
  const deadline = moment().subtract(2, "days");

  const { data } = useSWR(
    [
      `https://wdev2.be/roel21/eindwerk/api/event_taaks.jsonld?eventId.id=${id}`,
      cookies.User,
    ],

    fetcher,
    { refreshInterval: 10000 }
  );
  useEffect(() => {
    /**
     * de setGekozentaak neemt de gefetchte data op de index waarop de gefilterde
     * taak een user heeft gevonden met het id van de ingelogde user
     *
     * [data["hydra:member"].map(((taak)=> (taak.users.filter(x=> x.id == 4)).length)).indexOf(1)]
     * geeft een de index van de taak waar de user op aangemeld staat
     *
     * de map en de filter zorgen ervoor dat ik een array krijg met het aantal getallen gelijk
     * aan het aantal taken, dit getal is 0 of 1. de index van het getal een is ook de juiste index
     * van de taak die doorgegeven moet worden naar de detail
     */
    data &&
      setGekozenTaak(
        data["hydra:member"][
          data["hydra:member"]
            .map((taak) => taak.users.filter((x) => x.id == cookies.Id).length)
            .indexOf(1)
        ]
      );
    // console.log(gekozenTaak)
  });

  /**
   * alle users die een taak uitvoeren in een array steken zodat deze gefilterd
   * kan worden om te zoeken of de user al een activiteit uitvoerd
   */
  data &&
    data["hydra:member"].map((taak) =>
      taak.users.map((user) => deelnemers.push(user))
    );

  return (
    <div>
      <Box
        border="1px solid black"
        borderRadius="7"
        overflowY="auto"
        maxHeight="370px"
        padding="10px"
        marginRight="10px"
        width="100%"
      >
        {/* Geeft loading als de fetch gebeurt */}
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
        {/* Geeft een boodschap als er geen taken zijn */}
        {data && data["hydra:member"].length === 0 && (
          <Text
            margin="10px"
            border="1px solid black"
            borderRadius="7"
            padding="5px"
          >
            Er zijn nog geen taken.
          </Text>
        )}
        {/* Geeft de taken waarvoor je ja kan aanmelden of een kaart met de taak die je gekozen hebt */}
        {gekozenTaak &&
        deelnemers.filter((x) => x.id == cookies.Id).length > 0 ? (
          <TaakBevestiging eventId={id} taak={gekozenTaak} />
        ) : (
          data &&
          data["hydra:member"].map((taak) => (
            <Taak key={taak.id} eventId={id} taak={taak} />
          ))
        )}
      </Box>
    </div>
  );
}

export default TakenBox;
