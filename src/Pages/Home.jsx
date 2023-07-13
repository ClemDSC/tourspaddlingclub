import { Box } from "@chakra-ui/react";

import SliderHome from "../Components/home/SliderHome";
import HomeIntro from "../Components/home/HomeIntro";
import HomeClub from "../Components/home/HomeClub";

function Home() {
  return (
    <Box as="section" bg="gray.50">
      <SliderHome />
      <HomeIntro />
      <HomeClub />
    </Box>
  );
}

export default Home;
