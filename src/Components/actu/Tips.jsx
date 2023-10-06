import { Box } from "@chakra-ui/react";

import Weather from "./Weather";

function Tips() {
  return (
    <Box maxWidth={"1400px"} mx={"auto"} p={4}>
      <Weather />
    </Box>
  );
}

export default Tips;
