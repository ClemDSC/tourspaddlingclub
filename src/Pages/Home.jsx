import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

import SliderHome from "../Components/home/SliderHome";
import { Link } from "react-router-dom";

import Picto1 from "../Assets/picto-nous-rejoindre.png";
import Picto2 from "../Assets/picto-e.png";

function Home() {
  return (
    <Box as="section" bg="gray.50">
      <SliderHome />
      <Flex flexDirection="column" as="article" p={4} gap={"4"}>
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
          Nous proposons également des initiations pour les débutants et pour
          les adhérents des entraînements loisirs et compétitions tout au long
          de l’année, ainsi que de nombreuses sorties en Touraine.
        </Text>
        <Text as="b">
          Venez nous rejoindre au Lac des Peupleraies à Tours le dimanche
          après-midi à partir de 14h !
        </Text>
      </Flex>
      <Flex flexDirection="column" as="article" p={4} gap={"4"}>
        <Heading as="h3" align="center" pb="2">
          Le club
        </Heading>
        <Flex flexDirection={{base:'column', md:'row'}} gap={{base: 8, md:'none'}} justifyContent={{md:"space-evenly"}}>
          <LinkBox as={'flex'} display={'flex'} flexDirection='column' alignItems={'center'} justifyContent={'center'}>
            <Image src={Picto1} alt="pictogramme surf" width={"80px"} />
            <LinkOverlay href='#'>Nous rejoindre</LinkOverlay>
            <Text>Tarifs et bulletin d'adhésion au club</Text>
          </LinkBox>
          <LinkBox as={'flex'} display={'flex'} flexDirection='column' alignItems={'center'} justifyContent={'center'}>
            <Image src={Picto2} alt="pictogramme surf" width={"80px"} />
            <LinkOverlay href='#'>Boutique</LinkOverlay>
            <Text>Accédez à la boutique du club</Text>
          </LinkBox>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Home;
