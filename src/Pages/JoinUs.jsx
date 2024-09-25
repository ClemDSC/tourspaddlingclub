import { useEffect, useState } from "react";
import {
  Box,
  Divider,
  AbsoluteCenter,
  Text,
  Flex,
  Image,
  Center,
} from "@chakra-ui/react";


import { storage, db } from "../firebase-config";
import { onValue, ref as dbRef } from "firebase/database";
import { getDownloadURL, ref as storageRef } from "firebase/storage";

import Club from "../Assets/join-club.jpeg";
import FFS from "../Assets/logos/ffs-OFFICIEL.png";
import { Link } from "react-router-dom";

export default function JoinUs() {
  const [adhesionUrl, setAdhesionUrl] = useState(null);
  const [pretUrl, setPretUrl] = useState(null);

  useEffect(() => {
    const fetchDocumentUrls = async () => {
      try {
        // Références des fichiers dans Firebase Storage
        const adhesionRef = storageRef(storage, "documents/adhesion/formulaire_adhesion_TPC_2024.pdf");
        const pretRef = storageRef(storage, "documents/pret/Pret_materiel_TPC.pdf");

        // Récupération des URLs de téléchargement
        const adhesionUrl = await getDownloadURL(adhesionRef);
        const pretUrl = await getDownloadURL(pretRef);

        setAdhesionUrl(adhesionUrl);
        setPretUrl(pretUrl);
      } catch (error) {
        console.error("Erreur lors de la récupération des fichiers :", error);
      }
    };

    fetchDocumentUrls();
  }, []);

  const [horaireTarifs, setHoraireTarifs] = useState(null);

  useEffect(() => {
    const contentRef = dbRef(db, "horaires-tarifs");
    onValue(contentRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Prendre le dernier contenu posté
        const latestEntry = Object.values(data).pop();
        setHoraireTarifs(latestEntry);
      }
    });
  }, []);

  const handleDownload = () => {
    if (adhesionUrl) {
      window.open(adhesionUrl, "_blank");
    }
  };

  const handleDownload2 = () => {
    if (pretUrl) {
      window.open(pretUrl, "_blank");
    }
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
          formulaire d’inscription 2024
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
          {horaireTarifs ? (
            <Box dangerouslySetInnerHTML={{ __html: horaireTarifs.content }} />
          ) : (
            <Text>Chargement...</Text>
          )}
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
