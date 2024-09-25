import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase-config";
import { Flex, Divider, AbsoluteCenter, Box, Text } from "@chakra-ui/react";

export default function HomeJoin() {
  const [horaireTarifs, setHoraireTarifs] = useState(null);

  useEffect(() => {
    const contentRef = ref(db, "horaires-tarifs");
    onValue(contentRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Prendre le dernier contenu posté
        const latestEntry = Object.values(data).pop();
        setHoraireTarifs(latestEntry);
      }
    });
  }, []);

  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={{ md: "space-evenly" }}
      maxWidth={"1400px"}
      mx={"auto"}
    >
      <Flex flexDirection={"column"} p="4">
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter
            as="h3"
            bg="gray.50"
            px={{ base: "4", md: "4" }}
            fontSize={{ base: "xl", md: "3xl" }}
          >
            Rejoignez-nous
          </AbsoluteCenter>
        </Box>
        <Flex flexDirection={"column"} gap={4} pt={{ base: 0, md: 6 }}>
          {horaireTarifs ? (
            <Box dangerouslySetInnerHTML={{ __html: horaireTarifs.content }} />
          ) : (
            <Text>Chargement...</Text>
          )}
        </Flex>
      </Flex>
      <Flex flexDirection={"column"} p="4">
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter
            as="h3"
            bg="gray.50"
            px={{ base: "4", md: "4" }}
            fontSize={{ base: "xl", md: "3xl" }}
          >
            Localisation
          </AbsoluteCenter>
        </Box>
        <Box
          w={{ base: "300", md: "500px" }}
          h="500px"
          borderWidth="0"
          pt={{ md: 4 }}
        >
          <iframe
            title="carte tours paddling club"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10808.326570456527!2d0.73857!3d47.371325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fcd3fee2a38e89%3A0x9d40ee98a80b2d22!2sTours%20Paddling%20Club!5e0!3m2!1sfr!2sfr!4v1689328351733!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Flex>
    </Flex>
  );
}
