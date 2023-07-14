import {
  Box,
  Divider,
  AbsoluteCenter,
  Flex,
  Text,
  Link,
  Button,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiMail, CiLocationOn } from "react-icons/ci";

export default function Contact() {
  const adresseEmail = "tourspaddlingclub@gmail.com";
  return (
    <Box>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter
          as="h3"
          bg="white"
          px={{ base: "4", md: "8" }}
          fontSize={{ base: "xl", md: "2xl" }}
        >
          Contactez-nous
        </AbsoluteCenter>
      </Box>

      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"center"}
      >
        <Flex
          width={{ md: "40%" }}
          flexDirection={"column"}
          alignItems={"center"}
          boxShadow="base"
          rounded={"lg"}
          p={6}
          m={6}
        >
          <Button
            border={"1px"}
            borderColor={"#0689DE"}
            rounded={"full"}
            w={16}
            h={16}
            my={4}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            colorScheme="linkedin"
          >
            <CiMail color="white" size="24px" />
          </Button>
          <Text as="b">Par mail</Text>
          <Link href={`mailto:${adresseEmail}`}>{adresseEmail}</Link>
        </Flex>
        <Flex
          width={{ md: "40%" }}
          flexDirection={"column"}
          alignItems={"center"}
          boxShadow="base"
          rounded={"lg"}
          p={6}
          m={6}
        >
          <Button
            border={"1px"}
            borderColor={"#0689DE"}
            rounded={"full"}
            w={16}
            h={16}
            my={4}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            colorScheme="linkedin"
          >
            <CiLocationOn color="white" size="24px" />
          </Button>
          <Text as="b">Sur place</Text>
          <Text>Lac des Peupleraies 37000 Tours</Text>
        </Flex>
      </Flex>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"center"}
        pb={4}
      >
        <Flex
          width={{ md: "40%" }}
          flexDirection={"column"}
          alignItems={"center"}
          boxShadow="base"
          rounded={"lg"}
          p={6}
          m={6}
        >
          <Button
            border={"1px"}
            borderColor={"#0689DE"}
            rounded={"full"}
            w={16}
            h={16}
            my={4}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            colorScheme="linkedin"
          >
            <FaFacebookF color="white" size="24px" />
          </Button>
          <Text as="b">Sur notre page Facebook</Text>
          <Link
            href={"https://www.facebook.com/tourspaddlingclub"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tours Paddling Club
          </Link>
        </Flex>
        <Flex
          width={{ md: "40%" }}
          flexDirection={"column"}
          alignItems={"center"}
          boxShadow="base"
          rounded={"lg"}
          p={6}
          m={6}
        >
          <Button
            border={"1px"}
            borderColor={"#0689DE"}
            rounded={"full"}
            w={16}
            h={16}
            my={4}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            colorScheme="linkedin"
          >
            <FaInstagram color="white" size="24px" />
          </Button>
          <Text as="b">Sur notre compte Intagram</Text>
          <Link
            href={"http://www.instagram.com/tourspaddlingclub"}
            target="_blank"
            rel="noopener noreferrer"
          >
            @tourspaddlingclub
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
