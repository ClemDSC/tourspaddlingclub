import {
  Box,
  Divider,
  AbsoluteCenter,
  Flex,
} from "@chakra-ui/react";

import { db } from "../firebase-config";
import { onValue, ref } from "firebase/database";
import { useState, useEffect } from "react";

import Article from "../Components/actu/Article";

export default function Actu() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    onValue(ref(db, "articles/"), (snapshot) => {
      setArticles([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((article) => {
          setArticles((articles) => [...articles, article]);
        });
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
        gap={4}
        flexDirection={{ base: "column", md: "row" }}
        flexWrap={{ md: "wrap" }}
      >
        {articles && articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
      </Flex>
    </Box>
  );
}
