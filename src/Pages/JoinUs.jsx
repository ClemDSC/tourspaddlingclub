import {
  Box,
  Divider,
  AbsoluteCenter,
  Text,
  Flex,
  Image,
  Center,
} from "@chakra-ui/react";

import Pdf1 from "../Assets/formulaires/Adhesion_TPC_2023.pdf";
import Pdf2 from "../Assets/formulaires/Pret_materiel_TPC.pdf";

import Club from "../Assets/join-club.jpeg";
import FFS from "../Assets/logos/ffs-OFFICIEL.png";
import { Link } from "react-router-dom";

export default function JoinUs() {
  const handleDownload = () => {
    window.open(Pdf1, "_blank");
  };

  const handleDownload2 = () => {
    window.open(Pdf2, "_blank");
  };

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
          Rejoignez-nous
        </AbsoluteCenter>
      </Box>
      <Text align={"center"} p={{ md: 4 }} maxWidth={'1100px'} mx={'auto'}>
        Pour rejoindre l’association Tours Paddling Club, vous pouvez
        télécharger notre{" "}
        <Text
          as="span"
          fontWeight={"bold"}
          onClick={handleDownload}
          cursor={"pointer"}
          color={"blue.300"}
        >
          formulaire d’inscription 2023
        </Text>
        , ainsi que le{" "}
        <Text
          as="span"
          fontWeight={"bold"}
          onClick={handleDownload2}
          cursor={"pointer"}
          color={"blue.300"}
        >
          formulaire de prêt de matériel
        </Text>{" "}
        si besoin.
      </Text>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        py={4}
        px={{ base: "4", md: "8" }}
        gap={6}
      >
        <Box w={{ md: "50%" }}>
          <Image src={Club} alt="Tours Paddling Club" />
        </Box>
        <Flex
          flexDirection={"column"}
          gap={4}
          pt={{ base: 0, md: 6 }}
          w={{ md: "50%" }}
          justifyContent={{ md: "center" }}
          pl={{ md: 10 }}
        >
          <Box>
            <Text as="b">Horaires</Text>
            <Text>Dimanche 14h-18h (lieu selon le planning)</Text>
          </Box>
          <Box>
            <Text as="b">
              Tarifs saison 2023 : Du 1er janvier au 31 décembre 2023
            </Text>
            <Text>Cotisation à l’association Tours Paddling Club : 50€</Text>
            <Text>Licence FFS « Surf Club » Loisir : 35€</Text>
            <Text>Licence FFS « Surf Club » Compétition : 40€</Text>
            <Text>Forfait prêt de matériel : 60€</Text>
          </Box>
          <Box>
            <Text as="b">
              Tarifs saison 2023 / 2024 : Du 1er septembre 2023 au 31 décembre
              2024
            </Text>
            <Text>Cotisation à l’association Tours Paddling Club : 75€</Text>
            <Text>Licence FFS « Surf Club » primo licencié : 45€</Text>
            <Text>Forfait prêt de matériel : 90€</Text>
          </Box>
        </Flex>
      </Flex>
      <Center>
        <Link to={"https://www.surfingfrance.com/"} target="_blank" rel="noopener noreferrer">
          <Image
            src={FFS}
            alt="logo officiel federation francaise de surf"
            width={"80px"}
            alignSelf={"center"}
            py={4}
          />
        </Link>
      </Center>
    </Box>
  );
}
