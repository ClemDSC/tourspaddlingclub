import { Box, Divider, AbsoluteCenter } from "@chakra-ui/react";

import SessionDetail from "./SessionDetail";
import data from "../../Data/data.json";

function Sessions() {
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
          Nos sorties
        </AbsoluteCenter>
      </Box>

      <Box>
        {data.map((session) => (
          <SessionDetail key={session.id} session={session} />
        ))}
      </Box>
    </Box>
  );
}

export default Sessions;
