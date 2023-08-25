import {
  Box,
  Divider,
  AbsoluteCenter,
  SimpleGrid,
  Card,
  Heading,
  CardBody,
  CardHeader,
  Flex,
  List,
  ListIcon,
  ListItem,
  Icon,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { BsThermometerSnow, BsCloudRain } from "react-icons/bs";

export default function Weather() {
  return (
    <>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter
          as="h3"
          bg="white"
          px={{ base: "4", md: "8" }}
          fontSize={{ base: "xl", md: "2xl" }}
        >
          Conditions climatiques
        </AbsoluteCenter>
      </Box>
      <Flex gap={4} alignItems={"center"}>
        <iframe
          title="weather"
          src="https://api.wo-cloud.com/content/widget/?geoObjectKey=8859536&language=fr&region=FR&timeFormat=HH:mm&windUnit=kmh&systemOfMeasurement=metric&temperatureUnit=celsius"
          name="CW2"
          scrolling="no"
          width="290"
          height="318"
          frameborder="0"
          className="iframe-weather"
        ></iframe>
        <SimpleGrid spacing={4} templateColumns="repeat(3, 1fr)" width={"100%"}>
          <Card>
            <CardHeader>
              <Heading size="md" textAlign={"center"} mb={2}>
                <Icon as={FiSun} w={6} h={6} />
              </Heading>
              <Heading size="md" textAlign={"center"}>
                Temps chaud
              </Heading>
            </CardHeader>
            <CardBody pt={2}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} mb={2} color="green.500" />
                  Tenue légère
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} mb={2} color="green.500" />
                  Casquette
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} mb={2} color="green.500" />
                  Lunettes de soleil polarisantes
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} mb={2} color="green.500" />
                  Protection UV
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} mb={2} color="green.500" />
                  Chaussures aquatiques
                </ListItem>
              </List>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md" textAlign={"center"} mb={2}>
                <Icon as={BsThermometerSnow} w={6} h={6} />
              </Heading>
              <Heading size="md" textAlign={"center"}>
                Temps Froid
              </Heading>
            </CardHeader>
            <CardBody pt={2}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} mb={2} color="green.500" />
                  Combinaison néoprène
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} mb={2} color="green.500" />
                  Bandeau chaud / bonnet
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} mb={2} color="green.500" />
                  Lunettes de soleil polarisantes
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} mb={2} color="green.500" />
                  Gants
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} mb={2} color="green.500" />
                  Chaussons thermiques
                </ListItem>
              </List>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md" textAlign={"center"} mb={2}>
                <Icon as={BsCloudRain} w={6} h={6} />
              </Heading>
              <Heading size="md" textAlign={"center"}>
                Temps Pluvieux
              </Heading>
            </CardHeader>
            <CardBody pt={2}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} mb={2} color="green.500" />
                  Combinaison
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} mb={2} color="green.500" />
                  Casquette
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} mb={2} color="green.500" />
                  Coupe-vent
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} mb={2} color="green.500" />
                  Gants
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} mb={2} color="green.500" />
                  Chaussons thermiques
                </ListItem>
              </List>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Flex>
    </>
  );
}
