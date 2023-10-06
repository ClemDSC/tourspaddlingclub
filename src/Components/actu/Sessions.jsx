import { Box, Divider, AbsoluteCenter, Text, Image } from "@chakra-ui/react";

import Sortie from "../../Assets/sortie-automne.jpg"

function Sessions() {
  return (
    <Box p={4}>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter
          as="h3"
          bg="white"
          px={{ base: "4", md: "8" }}
          fontSize={{ base: "xl", md: "2xl" }}
        >
          Nos sorties
        </AbsoluteCenter>
      </Box>
      <Box>
        <Image objectFit="cover" src={Sortie} alt="Tours Paddling Club - sortie nature" />
      </Box>
      <Text align="center" pt={6}>Cette page est en cours de construction.</Text>
      <Text align="center" pb={6}>Retrouvez bientôt les comptes-rendus de nos sorties. </Text>
    </Box>
  );
}

export default Sessions;
