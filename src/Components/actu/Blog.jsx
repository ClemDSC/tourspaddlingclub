import {
  Box,
  Divider,
  AbsoluteCenter,
  SimpleGrid,
  Card,
  Heading,
  CardBody,
  CardHeader,
  Image,
  Link,
  Icon,
} from "@chakra-ui/react";
import {
  AiOutlineInfoCircle,
  AiOutlineBulb,
  AiOutlineTeam,
} from "react-icons/ai";

import Conseil from "../../Assets/chenonceau.jpeg";
import Actu from "../../Assets/nature.jpeg";
import Sortie from "../../Assets/sortie-automne.jpg";

export default function Blog() {
  return (
    <Box position="relative" padding="10" my={10}>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter
          as="h3"
          bg="white"
          px={{ base: "4", md: "8" }}
          fontSize={{ base: "xl", md: "2xl" }}
        >
          Le Blog
        </AbsoluteCenter>
      </Box>
      <SimpleGrid
        spacing={4}
        templateColumns={{ md: "repeat(3, 1fr)" }}
        width={"100%"}
      >
        <Card>
          <Link href="/blog/tips">
            <CardHeader>
              <Heading size="md" textAlign={"center"} mb={2}>
                <Icon as={AiOutlineBulb} w={6} h={6} />
              </Heading>
              <Heading size="md" textAlign={"center"}>
                Conseils
              </Heading>
            </CardHeader>
            <CardBody pt={2} mb={4}>
              <Image
                mx="auto"
                boxSize="200px"
                objectFit="cover"
                borderRadius="full"
                src={Conseil}
                alt=""
              />
            </CardBody>
          </Link>
        </Card>
        <Card>
          <Link href="/blog/actu">
            <CardHeader>
              <Heading size="md" textAlign={"center"} mb={2}>
                <Icon as={AiOutlineInfoCircle} w={6} h={6} />
              </Heading>
              <Heading size="md" textAlign={"center"}>
                Actualités
              </Heading>
            </CardHeader>
            <CardBody pt={2} mb={4}>
              <Image
                mx="auto"
                boxSize="200px"
                objectFit="cover"
                borderRadius="full"
                src={Actu}
                alt=""
              />
            </CardBody>
          </Link>
        </Card>
        <Card>
          <Link href="/blog/sessions">
            <CardHeader>
              <Heading size="md" textAlign={"center"} mb={2}>
                <Icon as={AiOutlineTeam} w={6} h={6} />
              </Heading>
              <Heading size="md" textAlign={"center"}>
                Nos sorties
              </Heading>
            </CardHeader>
            <CardBody pt={2} mb={4}>
              <Image
                mx="auto"
                boxSize="200px"
                objectFit="cover"
                borderRadius="full"
                src={Sortie}
                alt=""
              />
            </CardBody>
          </Link>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
