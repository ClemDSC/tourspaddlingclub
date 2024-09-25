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
  console.log(article.date);
  
  return (
    <Card width={{ md: "48%" }} key={article.id}>
    <CardHeader>
      <Flex spacing="4">
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Box>
            <Heading size="sm">{article.title}</Heading>
            <Text>{article.date.toLocaleDateString()}</Text>
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
        pb="8"
      />
      <div dangerouslySetInnerHTML={{ __html: article.content }} /> 
    </CardBody>
  </Card>
  )
}

export default Article