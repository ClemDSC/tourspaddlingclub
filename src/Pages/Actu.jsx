import { Box, Divider, AbsoluteCenter, Flex } from "@chakra-ui/react";

import { db } from "../firebase-config";
import { onValue, ref } from "firebase/database";
import { useState, useEffect } from "react";

import Article from "../Components/actu/Article";

export default function Actu() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    onValue(ref(db, "articles/"), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        console.log("data : ", data);
        const articlesArray = Object.values(data).map((article) => {
          const [day, month, year] = article.date.split("/");
          const date = new Date(year, month - 1, day);
          return {
            ...article,
            date: date,
          };
        });
        console.log(articlesArray);

        articlesArray.sort((a, b) => b.date - a.date);

        setArticles(articlesArray);
      }
    });
  }, []);

  console.log("articles", articles);
  return (
    <Box p={4}>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter
          as="h3"
          bg="white"
          px={{ base: "4", md: "8" }}
          fontSize={{ base: "xl", md: "2xl" }}
        >
          Actualités
        </AbsoluteCenter>
      </Box>
      <Flex
        width={"100%"}
        maxW={"1200px"}
        gap={8}
        mx={"auto"}
        flexDirection={{ base: "column", md: "row" }}
        flexWrap={{ md: "wrap" }}
      >
        {articles &&
          articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
      </Flex>
    </Box>
  );
}
