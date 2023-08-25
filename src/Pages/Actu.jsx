import { Box } from "@chakra-ui/react";

import Weather from "../Components/actu/Weather";
import Blog from "../Components/actu/Blog";

export default function Actu() {
  return (
    <Box maxWidth={"1400px"} mx={"auto"} p={4}>
      <Weather />
      <Blog />
    </Box>
  );
}
