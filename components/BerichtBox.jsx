import React, {useState} from 'react'
import { useRouter } from 'next/router'
import {
    Box,
    Button,
    Textarea,
  } from "@chakra-ui/react";
import Bericht from "./Bericht";
import axios from 'axios';


function BerichtBox( {berichten} ) {
  
    const router = useRouter()
    const { id } = router.query
    console.log(berichten)
    const [message, setMessage] = useState("")

    const handleMessageSubmit = async(e) => {
      e.preventDefault()
      const resp = await axios.post("https://127.0.0.1:8000/api/berichts", {
          body: message,
          userBericht: "/api/users/3",
          eventBericht: `/api/events/${id}`  
      })
      .finally(() => setMessage(""))
      console.log(resp)
    }

    return (
        <div>
            <Box
                border="1px solid black"
                borderRadius="7"
                width="87%"
                maxHeight="370px"
                overflowY="auto"
                marginLeft="30px"
              >

                {berichten && berichten.map((bericht)=><Bericht key={bericht.id} berichtId={bericht.id} text={bericht.body} userName={bericht.userBericht.naam} userFirstName={bericht.userBericht.voornaam} comments={bericht.opmerkingen}/>)}

               

                <Box 
                    height="150px" 
                  >
                  <form onSubmit={handleMessageSubmit}>
                    <Textarea
                      id="berichtInput"
                      placeholder="Schrijf zelf een bericht"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
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
    )
}

export default BerichtBox
