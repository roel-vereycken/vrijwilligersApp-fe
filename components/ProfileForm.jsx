import React, { useState } from "react";
import axios from "axios";
import { Flex, FormControl, FormLabel, Button } from "@chakra-ui/react";
import { parseCookies } from "nookies";

const cookies = parseCookies();

function ProfileForm({ data }) {
  console.log(data);
  const [naam, setNaam] = useState(data.naam);
  const [voornaam, setVoornaam] = useState(data.voornaam);
  const [email, setEmail] = useState(data.email);
  const [telefoon, setTelefoon] = useState(data.telefoonNummer);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.put(
      "https://wdev2.be/roel21/eindwerk/api/users/3",
      {
        naam,
        voornaam,
        email,
        telefoonNummer: telefoon,
      },
      {
        headers: {
          Authorization: "Bearer " + cookies.User,
        },
      }
    );
    console.log(resp);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Flex direction="column">
        <FormControl className="profileTextField" paddingTop="90px">
          <FormLabel>Voornaam</FormLabel>
          <input
            className="profileInput"
            type="text"
            value={voornaam}
            onChange={(e) => setVoornaam(e.target.value)}
          />
        </FormControl>
        <FormControl className="profileTextField">
          <FormLabel>Naam</FormLabel>
          <input
            className="profileInput"
            type="text"
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
          />
        </FormControl>
        <FormControl className="profileTextField">
          <FormLabel>Emailadres</FormLabel>
          <input
            className="profileInput"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl className="profileTextField">
          <FormLabel>Telefoonnummer</FormLabel>
          <input
            className="profileInput"
            type="text"
            value={telefoon}
            onChange={(e) => setTelefoon(e.target.value)}
          />
        </FormControl>
        <a id="wachtwoordLink">Nieuw wachtwoord aanmaken</a>
        <Button
          width="140px"
          marginLeft="50px"
          colorScheme="teal"
          marginTop="20px"
          type="submit"
        >
          Sla wijzigingen op
        </Button>
      </Flex>
    </form>
  );
}

export default ProfileForm;
