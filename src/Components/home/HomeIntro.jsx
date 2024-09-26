import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase-config";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";

export default function HomeIntro() {
  const [intro, setIntro] = useState(null);

  useEffect(() => {
    const contentRef = ref(db, "intro");
    onValue(contentRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Prendre le dernier contenu posté
        const latestEntry = Object.values(data).pop();
        setIntro(latestEntry);
      }
    });
  }, []);

  return (
    <Flex
      flexDirection="column"
      as="article"
      px={{ base: "4", md: "24" }}
      pt="8"
      gap={"4"}
      maxWidth={"1400px"}
      mx={"auto"}
    >
      <Heading as="h2" align="center" pb="2" fontFamily="Raleway">
        Bienvenue !
      </Heading>
      <Flex>
        {intro ? (
          <Box dangerouslySetInnerHTML={{ __html: intro.content }} />
        ) : (
          <Text>Chargement...</Text>
        )}
      </Flex>
    </Flex>
  );
}
