import {
  Box,
  chakra,
  Container,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";

import LogoTPC from "../Assets/logo-tpc.png"

const Logo = (props) => {
  return (
    <img src={LogoTPC} alt="Logo Tours Paddling Club" width={"100px"} />
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("white", "whiteAlpha.100")}
      border={'1px'}
      borderColor={"#0689DE"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("blue.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        py={8}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Flex>
            <Text>© 2023 Tours Paddling Club - Tous droits réservés</Text>
            <Link href="/mentions-legales" pl={4}>Mentions légales</Link>
          </Flex>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Facebook"} href={"http://www.facebook.com/tourspaddlingclub"}>
              <FaFacebookF color="#0689DE" />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"http://www.youtube.com/channel/UC2Cp8ELELRfNu6vHdAtcNhQ"}>
              <FaYoutube color="#0689DE" />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"http://www.instagram.com/tourspaddlingclub/"}>
              <FaInstagram color="#0689DE" />
            </SocialButton>
            <SocialButton label={"Pinterest"} href={"https://www.pinterest.fr/tourspaddling/"}>
              <BsPinterest color="#0689DE" />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
