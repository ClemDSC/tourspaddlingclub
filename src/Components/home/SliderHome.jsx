import React from "react";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";

import Club from "../../Assets/club.jpg";
import Chenonceau from "../../Assets/chenonceau.jpg";
import Nature from "../../Assets/nature.jpg";

import Logo from "../svg/Logo";

export default function SliderHome() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box position={"relative"}>
      <Slider {...settings}>
        <Box className="container">
          <Image
            objectFit="cover"
            src={Club}
            alt="Tours Paddling Club - club"
          />
        </Box>
        <div className="container">
          <Image
            objectFit="cover"
            src={Chenonceau}
            alt="Tours Paddling Club - Chateau de Chenonceau"
          />
        </div>
        <div className="container">
          <Image
            objectFit="cover"
            src={Nature}
            alt="Tours Paddling Club - sortie nature"
          />
        </div>
      </Slider>
      <Box className="main-logo"
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        width={{ base: "140px", md: "300px" }}
      >
        <Logo width={{ base: 140, md: 300 }} />
      </Box>
    </Box>
  );
}
