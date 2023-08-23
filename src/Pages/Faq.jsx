import {
  Box,
  Divider,
  AbsoluteCenter,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
} from "@chakra-ui/react";
import React from "react";

export default function Faq() {
  return (
    <Box as="article" maxWidth={"1400px"} mx={"auto"} px={4} pt={4} pb={10}>
      <Box position="relative" padding={{base: 4, md: 10}}>
        <Divider />
        <AbsoluteCenter
          as="h3"
          bg="white"
          px={{ base: "4", md: "8" }}
          fontSize={{ base: "l", md: "2xl" }}
        >
          Foire aux questions
        </AbsoluteCenter>
      </Box>
      <Accordion defaultIndex={[0]} allowMultiple borderColor={"blue.100"} pt={4} px={{md: 12}}>
        <AccordionItem>
          <Heading as={"h2"}>
            <AccordionButton _hover={{ backgroundColor: "blue.50" }}>
              <Box as="span" flex="1" textAlign="left">
                Question 1
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading as={"h2"}>
            <AccordionButton _hover={{ backgroundColor: "blue.50" }}>
              <Box as="span" flex="1" textAlign="left">
              Question 2
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading as={"h2"}>
            <AccordionButton _hover={{ backgroundColor: "blue.50" }}>
              <Box as="span" flex="1" textAlign="left">
              Question 3
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading as={"h2"}>
            <AccordionButton _hover={{ backgroundColor: "blue.50" }}>
              <Box as="span" flex="1" textAlign="left">
              Question 4
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      
    </Box>
  );
}
