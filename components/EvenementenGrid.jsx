import {
  Box,
  Center,
  Divider,
  SimpleGrid,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Moment from "react-moment";

function EvenementenGrid({ data }) {
  //console.log(data);
  return (
    <>
      <Box width="100%">
        <Center>
          <SimpleGrid
            height="75%"
            marginTop="25px"
            columns={[0, 0, 2, 2, 3]}
            spacingX="50px"
            spacingY="50px"
          >
            {data.map((evenement) => {
              return (
                <Link href={`/evenement/${evenement.id}`}>
                  <a className="eventLink">
                    <Box
                      bg="gray.50"
                      height={["195px", "250px"]}
                      width={["250px", "340px", "340px", "340px"]}
                      borderRadius="7"
                      border="2px solid grey"
                      boxShadow="xl"
                    >
                      <Image
                        borderTopRadius="7"
                        width="100%"
                        height={["120px", "175px"]}
                        //src={`https://localhost/vrijwilligersApp/public/images/image.php/${evenement.afbeelding}?width=425&height=170&cropratio=425:170&image=/vrijwilligersApp/public/images/afbeeldingen/${evenement.afbeelding}`}
                        src={`https://wdev2.be/roel21/eindwerk/images/image.php/${evenement.afbeelding}?image=/roel21/eindwerk/images/afbeeldingen/${evenement.afbeelding}`}
                        fallbackSrc="https://wdev2.be/roel21/eindwerk/images/image.php/theater.jpg?image=/roel21/eindwerk/images/afbeeldingen/theater.jpg"
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
                      <Text pl="15px" pt="5px">
                        Datum:{" "}
                        <Moment format="DD/MM/YYYY">
                          {evenement.startDatum}
                        </Moment>
                      </Text>
                    </Box>
                  </a>
                </Link>
              );
            })}
          </SimpleGrid>
        </Center>
      </Box>
    </>
  );
}

export default EvenementenGrid;
