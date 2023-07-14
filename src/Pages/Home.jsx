import { Box } from "@chakra-ui/react";

import SliderHome from "../Components/home/SliderHome";
import HomeIntro from "../Components/home/HomeIntro";
import HomeClub from "../Components/home/HomeClub";
import HomeRs from "../Components/home/HomeRs";
import HomeJoin from "../Components/home/HomeJoin";
import HomePartenaire from "../Components/home/HomePartenaire";

function Home() {
  return (
    <Box as="section" bg="gray.50">
      <SliderHome />
      <HomeIntro />
      <HomeClub />
      <HomeRs />
      <HomeJoin />
      <HomePartenaire />
    </Box>
  );
}

export default Home;
