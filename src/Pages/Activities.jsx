import { Box, Divider, AbsoluteCenter } from "@chakra-ui/react";

import SliderSUP from "../Components/activities/SliderSUP";
import SliderWing from "../Components/activities/SliderWing";

export default function Activities() {
  return (
    <Box p={4}>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter
          as="h3"
          bg="white"
          px="8"
          fontSize={{ base: "2xl", md: "2xl" }}
        >
          Nos activités
        </AbsoluteCenter>
      </Box>
      <SliderSUP />
      <SliderWing />
    </Box>
  );
}
