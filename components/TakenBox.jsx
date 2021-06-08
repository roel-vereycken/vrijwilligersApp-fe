import React, {useState, useEffect} from 'react'
import axios from "axios";
import useSWR from "swr";
import { useRouter } from 'next/router'
import {Box} from "@chakra-ui/react";
import Taak from "./Taak"
import TaakBevestiging from "./TaakBevestiging"

const fetcher = (url) => axios.get(url).then((res) => res.data);

function TakenBox() {
  const router = useRouter()
  const { id } = router.query
  const deelnemers = []
  const [gekozenTaak, setGekozenTaak] = useState({})
  
  const { data, error, isValidating } = useSWR(
    `https://127.0.0.1:8000/api/event_taaks.jsonld?eventId.id=${id}`,
    fetcher,
    { refreshInterval: 1000 }
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
    setGekozenTaak(data["hydra:member"][data["hydra:member"].map(((taak)=> (taak.users.filter(x=> x.id == 4)).length)).indexOf(1)])
  })

  /**
   * alle users die een taak uitvoeren in een array steken zodat deze gefilterd 
   * kan worden om te zoeken of de user al een activiteit uitvoerd
   */
  data && data["hydra:member"].map((taak)=> (taak.users.map(user => deelnemers.push(user)))) 
  
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

              {
                    gekozenTaak && deelnemers.filter(x => x.id == 4).length > 0 ? <TaakBevestiging taak={gekozenTaak} /> : 
                    data && data["hydra:member"].map((taak) => <Taak key={taak.id} taak={taak}/>)
              }
              </Box>
        </div>
    )
}

export default TakenBox
