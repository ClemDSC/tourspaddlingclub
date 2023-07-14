import {
  Flex,
  Text,
  Image,
  Box,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";

import Picto1 from "../../Assets/picto-nous-rejoindre.png";
import Picto2 from "../../Assets/picto-e.png";

export default function HomeClub() {
  return (
    <Flex flexDirection="column" as="article" p={4} gap={"4"}>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter
          as="h3"
          bg="gray.50"
          px="8"
          fontSize={{ base: "2xl", md: "4xl" }}
        >
          Le club
        </AbsoluteCenter>
      </Box>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 8, md: "none" }}
        justifyContent={{ md: "space-evenly" }}
      >
        <Flex
          boxShadow="base"
          rounded={"lg"}
          p={6}
          as={"a"}
          cursor={"pointer"}
          href="/club/join-us"
          display={"flex"}
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{
            boxShadow: "lg",
          }}
        >
          <Image src={Picto1} alt="pictogramme surf" width={"80px"} mb={4} />
          <Text as="b" href="/club/join-us">
            Nous rejoindre
          </Text>
          <Text as="cite">Tarifs et bulletin d'adhésion au club</Text>
        </Flex>
        <Flex
          boxShadow="base"
          rounded={"lg"}
          p={6}
          as={"a"}
          target="_blank"
          cursor={"pointer"}
          href="https://www.vestiaire-officiel.com/shop/tours-paddling-club"
          display={"flex"}
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{
            boxShadow: "lg",
          }}
        >
          <Image src={Picto2} alt="pictogramme surf" width={"80px"} mb={4} />
          <Text as="b">Boutique</Text>
          <Text as="cite">Accédez à la boutique du club</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
