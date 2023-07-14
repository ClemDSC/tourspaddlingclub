import { Flex, Heading, Text } from "@chakra-ui/react";

export default function HomeIntro() {
  return (
    <Flex flexDirection="column" as="article" px={{base:'4', md:"10"}} pt='8'  gap={"4"}>
      <Heading as="h2" align="center" pb="2">
        Bienvenue !
      </Heading>
      <Text>
        L’association <Text as="b">Tours Paddling Club</Text>, créée le 17
        Février 2015, est basée à Tours (Indre-et-Loire - 37), et permet de
        regrouper les pratiquants de <Text as="i">Stand Up Paddle</Text> (Sup
        individuel, Goliath, Dragon), et s'initier à de nouvelles pratiques de
        glisse (Wing, Bungee surf ...).
      </Text>
      <Text>
        Notre but est de développer ses activités en Touraine, en faisant
        notamment découvrir notre passion à travers des animations, photos et
        vidéos .
      </Text>
      <Text>
        Nous proposons également des initiations pour les débutants et pour les
        adhérents des entraînements loisirs et compétitions tout au long de
        l’année, ainsi que de nombreuses sorties en Touraine.
      </Text>
      <Text as="b">
        Venez nous rejoindre au Lac des Peupleraies à Tours le dimanche
        après-midi à partir de 14h !
      </Text>
    </Flex>
  );
}
