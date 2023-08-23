import { Flex, Divider, AbsoluteCenter, Box, Text } from "@chakra-ui/react";
export default function HomeJoin() {
  return (
    <Flex flexDirection={{ base: "column", md: "row" }} justifyContent={{md:'space-evenly'}} maxWidth={"1400px"} mx={'auto'}>
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
        <Flex flexDirection={"column"} gap={4} pt={{base:0, md:6}}>
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
        <Box w={{ base: "300", md: "500px" }} h="500px" borderWidth="0" pt={{ md: 4}}>
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
