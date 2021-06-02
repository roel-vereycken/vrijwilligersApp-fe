import {
    Box,
    IconButton,
    Button,
    Center,
    Divider,
    SimpleGrid,
    Image,
    Text,
  } from "@chakra-ui/react";
import Link from 'next/link'


function EvenementenGrid({data}) {
    console.log(data)
    return (
        <>
        <Box width="100%">
          <SimpleGrid
            height="75%"
            marginTop="25px"
            marginX="50px"
            columns={3}
            spacingX="50px"
            spacingY="50px"
          >
            {data.map((evenement) => {
              return (
                <Link href={`/evenement/${evenement.id}`}>
                <a id="eventLink">
                <Box
                  bg="gray.50"
                  maxHeight="245px"
                  maxWidth="340px"
                  borderRadius="7"
                  border="2px solid grey"
                  boxShadow="xl"
                >
                  <Image
                    borderTopRadius="7"
                    width="100%"
                    height="175px"
                    src={`http://localhost/vrijwilligersApp/public/images/afbeeldingen/${evenement.afbeelding}`}
                    fallbackSrc="https://dummyimage.com/320x150/000/fff"
                  />
                  <Text
                    pl="15px"
                    pt="5px"
                    height="30px"
                    overflow="hidden"
                    marginBottom="5px"
                    borderTop="1px solid gray"
                  >
                    {evenement.naam}
                  </Text>
                  <Center>
                    <Divider
                      orientation="horizontal"
                      width="90%"
                      outline="center"
                    />
                  </Center>
                  <Text pl="15px" pt="5px" >
                    Gezocht:
                  </Text>
                </Box>
                </a>
                </Link>
              );
            })}
          </SimpleGrid>
          
        </Box>
        </>
    )
}

export default EvenementenGrid
