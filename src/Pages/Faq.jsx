import {
  Box,
  Divider,
  AbsoluteCenter,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";

import Pdf1 from "../Assets/formulaires/formulaire_adhesion_TPC_2024.pdf";
import Pdf2 from "../Assets/formulaires/Pret_materiel_TPC.pdf";

export default function Faq() {
  const handleDownload = () => {
    window.open(Pdf1, "_blank");
  };

  const handleDownload2 = () => {
    window.open(Pdf2, "_blank");
  };

  return (
    <Box as="article" maxWidth={"1400px"} mx={"auto"} px={4} pt={4} pb={10}>
      <Box position="relative" padding={{ base: 4, md: 10 }}>
        <Divider />
        <AbsoluteCenter
          as="h3"
          bg="white"
          px={{ base: "4", md: "8" }}
          fontSize={{ base: "l", md: "2xl" }}
        >
          Foire aux questions
        </AbsoluteCenter>
      </Box>
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        borderColor={"blue.100"}
        pt={4}
        px={{ md: 12 }}
      >
        <AccordionItem>
          <Heading as={"h2"}>
            <AccordionButton _hover={{ backgroundColor: "blue.50" }}>
              <Box as="span" flex="1" textAlign="left">
                Qu'est-ce que le stand up paddle (SUP) ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Le stand up paddle (SUP) est une activité nautique où vous vous
            tenez debout sur une planche et utilisez une pagaie pour avancer sur
            l'eau. Il existe plusieurs disciplines, telles que la balade (aussi
            appelée randonnée), le surf, la course ou encore l'eau vive. <br/>Au
            club, nous faisons principalement des balades.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading as={"h2"}>
            <AccordionButton _hover={{ backgroundColor: "blue.50" }}>
              <Box as="span" flex="1" textAlign="left">
                De quel équipement ai-je besoin pour commencer le SUP ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Il faut bien entendu une planche de SUP et une pagaie. Il faut aussi
            un leash pour attacher la planche à la cheville. Enfin, il est
            conseillé de porter un gilet de sauvetage. <br/>Concernant la tenue, elle
            sera à adapter en fonction des conditions climatiques. En hiver, une
            combinaison et des chaussons seront indispensables, en été on
            n'oubliera pas la casquette, les lunettes de soleil et la crème
            solaire.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading as={"h2"}>
            <AccordionButton _hover={{ backgroundColor: "blue.50" }}>
              <Box as="span" flex="1" textAlign="left">
                Dois-je apporter mon équipement ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Si vous possédez le votre, vous pouvez bien entendu venir avec. <br/>Dans
            le cas contraire, le Tours Paddling Club propose un forfait annuel
            de prêt. Vous pourrez alors emprunter le matériel du club (planche,
            pagaie, gilet, leash et pompe). Ça peut être l'occasion de tester
            différentes planches avant d'investir dans son propre matériel. <br/>Le
            club ne fournit pas de textile. Vous trouverez une partie des
            indispensables sur{" "}
            <Link
              href="https://www.vestiaire-officiel.com/shop/tours-paddling-club"
              isExternal
              color={"blue.400"}
            >
              notre boutique
            </Link>
            .
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading as={"h2"}>
            <AccordionButton _hover={{ backgroundColor: "blue.50" }}>
              <Box as="span" flex="1" textAlign="left">
                Quelles sont les meilleures conditions météorologiques pour
                faire du SUP ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Tout dépend de votre niveau ! De manière générale, un vitesse de
            vent en dessous de 10 noeuds (environ 20km/h) permettra une sortie
            agréable. Ensuite, qu'il pleuve ou non, ce sera à l'appréciation de
            chacun, il suffira d'adapter sa tenue.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading as={"h2"}>
            <AccordionButton _hover={{ backgroundColor: "blue.50" }}>
              <Box as="span" flex="1" textAlign="left">
                Comment assurer ma sécurité pendant la pratique du SUP ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            En respectant les règles de sécurité de base : savoir nager et ne
            jamais sortir quand il y a des alertes météorologiques (vent,
            orage... ). Vous pouvez retrouver les recommandations officielles
            sur le{" "}
            <Link
              href="https://www.sports.gouv.fr/campagnes-de-prevention-101"
              isExternal
              color={"blue.400"}
            >
              site du Ministère des Sports
            </Link>
            .
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading as={"h2"}>
            <AccordionButton _hover={{ backgroundColor: "blue.50" }}>
              <Box as="span" flex="1" textAlign="left">
                Comment puis-je adhérer au club de stand up paddle ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            En 2 étapes : <Link href="/contact">contactez-nous</Link> pour nous
            faire part de votre souhait d'adhésion, et remplissez le{" "}
            <Text
              as="span"
              fontWeight={"bold"}
              onClick={handleDownload}
              cursor={"pointer"}
              color={"blue.300"}
            >
              formulaire d’inscription 2024
            </Text>
            . Si nécessaire, remplissez également le{" "}
            <Text
              as="span"
              fontWeight={"bold"}
              onClick={handleDownload2}
              cursor={"pointer"}
              color={"blue.300"}
            >
              formulaire de prêt de matériel
            </Text>
            .
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading as={"h2"}>
            <AccordionButton _hover={{ backgroundColor: "blue.50" }}>
              <Box as="span" flex="1" textAlign="left">
                Quels types d'événements et d'activités sont réservés aux
                membres du club ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Le club organise des sorties hebdomadaires, pour varier les lieux de
            balade. L'organisateur de la sortie est en charge du choix du lieu,
            bien sûr chaque adhérent peut proposer une sortie. <br/>Chaque année un
            week-end surf est organisé en Vendée, c'est alors l'occasion de
            s'essayer à d'autres pratiques (surf, surf paddle...). <br/>Le Tours
            Paddling Club participe également à différents évènements organisés
            localement, notamment lors du "Pôle Nautique en fête" ou encore
            "Tours en fête".
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
