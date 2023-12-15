import {
    Box,
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

function Article({article}) {
  return (
    <Card width={{ md: "48%" }} key={article.id}>
    <CardHeader>
      <Flex spacing="4">
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Box>
            <Heading size="sm">{article.title}</Heading>
            <Text>{article.date}</Text>
          </Box>
        </Flex>
        <Link
          href={article.link}
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
        src={article.imageUrl}
        alt={article.altUrl}
      />
      <Text mt={8}>
        {article.content}
      </Text>
    </CardBody>
  </Card>
  )
}

export default Article