import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import Logo from "./svg/Logo";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("blue.300", "blue.800")}
        color={useColorModeValue("white", "white")}
        px={{ base: 4, md: 10 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("white", "white")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} color={"white"} />
              ) : (
                <HamburgerIcon w={5} h={5} color={"white"} />
              )
            }
            colorScheme="transparent"
            variant="outline"
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "end", md: "start" }}>
          <Link
            textAlign={useBreakpointValue({ base: "right", md: "left" })}
            fontFamily={"heading"}
            href="/"
            display={"flex"}
            alignItems={"center"}
            gap={"16px"}
            _hover={{
              textDecoration: "none",
            }}
          >
            <Logo width={80} />
            {/* <Text as={'h1'} color={"white"} fontSize={36} pl={{ base: 0, md: 6 }} display={{ base: "none", md: "flex" }}>Tours Paddling Club</Text> */}
          </Link>
        </Flex>

        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <DesktopNav />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "white");
  const linkHoverColor = useColorModeValue("white", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const popoverLink = useColorModeValue("#0068AD", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href}
                fontSize={"20px"}
                fontWeight={500}
                color={linkColor}
                fontStyle={"italic"}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                  fontWeight: 600,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                color={popoverLink}
                rounded={"xl"}
                minW={"fit-content"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("gray.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#0068AD" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
      borderBottom="1px"
      borderColor="gray.200"
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack onClick={children && onToggle}>
      <Flex
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("blue.800", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
            color={"blue.800"}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          pl={2}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("blue.800", "blue.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Le Club",
    children: [
      {
        label: "Nos activités",
        subLabel: "",
        href: "/club/activities",
      },
      {
        label: "Rejoignez-nous",
        subLabel: "",
        href: "/club/join-us",
      },
    ],
  },
  {
    label: "La Boutique",
    href: "https://www.vestiaire-officiel.com/shop/tours-paddling-club",
  },
  {
    label: "Le Blog",
    href: "/blog",
    children: [
      {
        label: "Conseils",
        subLabel: "",
        href: "/blog/tips",
      },
      {
        label: "Actualités",
        subLabel: "",
        href: "/blog/actu",
      },
      {
        label: "Nos sorties",
        subLabel: "",
        href: "/blog/sessions",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];
