import React from 'react'
import {
    Flex,
    FormControl,
    FormLabel,
    Button,
  } from "@chakra-ui/react";
function ProfileForm() {
    return (
        <Flex direction="column">
                <FormControl className="profileTextField" paddingTop="90px">
                  <FormLabel>Voornaam</FormLabel>
                  <input className="profileInput" type="text" />
                </FormControl>
                <FormControl className="profileTextField">
                  <FormLabel>Naam</FormLabel>
                  <input className="profileInput" type="text" />
                </FormControl>
                <FormControl className="profileTextField">
                  <FormLabel>Emailadres</FormLabel>
                  <input className="profileInput" type="text" />
                </FormControl>
                <FormControl className="profileTextField">
                  <FormLabel>Telefoonnummer</FormLabel>
                  <input className="profileInput" type="text" />
                </FormControl>
                <a id="wachtwoordLink">Nieuw wachtwoord aanmaken</a>
                <Button
                  width="140px"
                  marginLeft="50px"
                  bgColor="green.400"
                  marginTop="20px"
                >
                  Sla wijzigingen op
                </Button>
              </Flex>
    )
}

export default ProfileForm
