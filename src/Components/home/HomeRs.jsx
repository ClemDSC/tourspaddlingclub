import {
  Flex,
  Center,
  Button,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";

export default function HomeRs() {
  const SocialButton = ({ children, label, href }) => {
    return (
      <Button
        bg={useColorModeValue("white", "whiteAlpha.100")}
        border={"1px"}
        borderColor={"#0689DE"}
        rounded={"full"}
        w={16}
        h={16}
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
      </Button>
    );
  };

  return (
    <Center py={{ base: 4}} pt={{ md: 14}} pb={{ md: 8}} maxWidth={"1400px"} mx={'auto'}>
      <Flex gap={{ base: "24px" }}>
        <SocialButton
          label={"Facebook"}
          href={"http://www.facebook.com/tourspaddlingclub"}
        >
          <FaFacebookF color="#0689DE" size="24px" />
        </SocialButton>
        <SocialButton
          label={"YouTube"}
          href={"http://www.youtube.com/channel/UC2Cp8ELELRfNu6vHdAtcNhQ"}
        >
          <FaYoutube color="#0689DE" size="24px" />
        </SocialButton>
        <SocialButton
          label={"Instagram"}
          href={"http://www.instagram.com/tourspaddlingclub/"}
        >
          <FaInstagram color="#0689DE" size="24px" />
        </SocialButton>
        <SocialButton
          label={"Pinterest"}
          href={"https://www.pinterest.fr/tourspaddling/"}
        >
          <BsPinterest color="#0689DE" size="24px" />
        </SocialButton>
      </Flex>
    </Center>
  );
}
