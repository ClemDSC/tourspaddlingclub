import {
  Box,
  Divider,
  AbsoluteCenter,
  Card,
  Heading,
  CardBody,
  CardHeader,
  Flex,
  Text,
  Image,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Actu() {
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
        Actualités
      </AbsoluteCenter>
    </Box>
    <Flex width={"100%"} gap={4} flexDirection={{ base: "column", md: "row"}}>
      <Card width={{md: "50%"}}>
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box>
                <Heading size="sm">Tours en Fête</Heading>
                <Text>10 Septembre 2023</Text>
              </Box>
            </Flex>
            <Link
              href="https://www.tours.fr/actualites/tours-en-fete-sportouvertes-et-forum-des-associations-2023/"
              isExternal
            >
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<BsThreeDotsVertical />}
              />
            </Link>
          </Flex>
        </CardHeader>
        <CardBody pt={0}>
          <Image
            objectFit="cover"
            src="https://i.ibb.co/ZRjXT0v/tours-en-fete.jpg"
            alt="tours en fete 2023"
          />
          <Text mt={8}>
            Cet évènement mettra à l’honneur l’ensemble du secteur associatif
            local, tout particulièrement celui des sports, sous le signe de la
            convivialité, de la découverte et de la rencontre.
            <br />
            L’occasion, pour les associations, de mettre en valeur leurs
            activités et de démontrer ainsi toute la vitalité, la richesse et
            la diversité des initiatives et des personnes qui font vivre au
            quotidien le territoire.
            <br />
            <br />
            De nombreuses activités sportives et de loisirs, pour petits et
            grands, en démonstrations ou initiations ! Natation artistique,
            fit’palmes, tir sur cible, plongée, nage avec palmes, waterpolo …
            retrouvez toutes ces activités dans l’enceinte de la piscine.
            <br />
            <br />
            Cette journée sera ponctuée par des animations, des démonstrations
            et des initiations.
            <br />
            <br />
            « TOURS EN FÊTE » s’adresse aux associations de loisirs sportifs,
            culturels, citoyens… et permet au public de s’informer et
            découvrir les différentes activités qu’elles proposent tout au
            long de l’année.
            <br />
            <br />
            Entrée libre et gratuite. <br />
            Dimanche 10 Septembre de 10h00 à 18h00
          </Text>
        </CardBody>
      </Card>
      <Card width={{md: "50%"}}>
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box>
                <Heading size="sm">Pôle Nautique en Fête</Heading>
                <Text>4 Juin 2023</Text>
              </Box>
            </Flex>
            <Link
              href="https://leprog.com/agenda/pole-nautique-en-fete"
              isExternal
            >
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<BsThreeDotsVertical />}
              />
            </Link>
          </Flex>
        </CardHeader>
        <CardBody pt={0}>
          <Image
            objectFit="cover"
            src="https://i.ibb.co/jRXtDCX/pole-nautique.jpg"
            alt="pole nautique en fete 2023"
          />
          <Text mt={8}>
            La Direction des Sports de la Ville de Tours organise un évènement
            autour de l’eau et du nautique : Pôle Nautique en Fête ! <br />
            Cette manifestation œuvre pour la promotion du sport et des
            associations sportives nautiques tourangelles. Cette nouvelle
            édition mettra en lumière les installations du bassin d’aviron et
            du Pôle Nautique du Cher. <br />
            <br />
            Des démonstrations, des initiations des ateliers et stands
            d’informations seront proposées pour tout public, profitant de
            cette journée pour découvrir l’offre sportive de proximité. <br />
            <br />
            Au programme : aviron, canoë-kayak, voile, dragon-boat, paddle et
            jet ski. <br />
            <br />
            Entrée libre et gratuite. <br />
            Dimanche 22 mai de 13h00 à 18h00
            <br />
            Bonus CitéClub : Un abonnement Aquafit’ness d’1 mois à gagner par
            tirage au sort.
          </Text>
        </CardBody>
      </Card>
    </Flex>
  </Box>
);
}
