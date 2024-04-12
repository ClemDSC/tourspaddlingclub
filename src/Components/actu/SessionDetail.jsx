import { Box, Flex, Link, Text, Heading, Image } from "@chakra-ui/react";

function SessionDetail({ session }) {
  return (
    <Flex
      bg="#edf3f8"
      py={8}
      w={{ base : "full", md:"50%"}}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        mx={{
          lg: 8,
        }}
        display={{
          lg: "flex",
        }}
        maxW={{
          lg: "5xl",
        }}
        shadow={{
          lg: "lg",
        }}
        rounded={{
          lg: "lg",
        }}
      >
        <Box
          w={{
            lg: "50%",
          }}
        >
          <Link
            display={"block"}
            href={session.imageUrl}
            isExternal
            h={{
              base: "full",
              lg: "full",
            }}
            rounded={{
              lg: "lg",
            }}
          >
            <Image
              src={session.imageUrl}
              alt="illustration de la sortie"
              objectFit="cover"
            />
          </Link>
        </Box>

        <Box
          py={12}
          px={6}
          maxW={{
            base: "xl",
            lg: "5xl",
          }}
          w={{
            lg: "50%",
          }}
        >
          <Heading
            as="h3"
            size="l"
            fontSize={{
              base: "2xl",
              md: "3xl",
            }}
            fontWeight="bold"
          >
            {session.name}
          </Heading>
          <Box pt={4}>
            <Text mt={4} color="gray.600">
              Cours d'eau : {session.river}
            </Text>
            <Text mt={4} color="gray.600">
              Distance : {session.distance}
            </Text>
            <Text mt={4} color="gray.600">
              Durée : {session.duration}
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default SessionDetail;
