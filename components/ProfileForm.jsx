import React, { useState } from "react";
import axios from "axios";
import { Flex, FormControl, FormLabel, Button } from "@chakra-ui/react";
import { parseCookies } from "nookies";
import swal from "sweetalert";
import Link from "next/link";

const cookies = parseCookies();

function ProfileForm({ data }) {
  console.log(data);
  const [naam, setNaam] = useState(data.naam);
  const [voornaam, setVoornaam] = useState(data.voornaam);
  const [email, setEmail] = useState(data.email);
  const [telefoon, setTelefoon] = useState(data.telefoonNummer);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.put(
        `https://wdev2.be/roel21/eindwerk/api/users/${cookies.Id}`,
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
      swal("Opgeslagen", "Bedankt voor je wijzigingen", "success");
    } catch (error) {
      swal("Error", "Er ging iets mis", "error");
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Flex direction="column">
          <FormControl
            className="profileTextField"
            paddingTop={["10px", "15px", "60px", "90px"]}
          >
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
          <Link href="/nieuw-wachtwoord">
            <a id="wachtwoordLink">Nieuw wachtwoord aanmaken</a>
          </Link>
          <Button
            width="140px"
            marginLeft="50px"
            colorScheme="teal"
            marginTop="20px"
            type="submit"
            marginBottom={["20px"]}
          >
            Sla wijzigingen op
          </Button>
        </Flex>
      </form>
    </>
  );
}

export default ProfileForm;
