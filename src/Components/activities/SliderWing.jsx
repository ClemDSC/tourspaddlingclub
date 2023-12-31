import { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

export default function SliderWing() {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [slider, setSlider] = useState(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      title: "Wing",
      text: "Sortie sur le lac des Peupleraies",
      image: "https://i.ibb.co/8r0P2x5/wing3.jpg",
    },
    {
      title: "Wing",
      text: "Sortie sur le lac des Peupleraies",
      image: "https://i.ibb.co/5hMQxwv/wing2.jpg",
    },
    {
      title: "Wing",
      text: "Sortie sur le lac des Peupleraies",
      image: "https://i.ibb.co/ZJ6GLKs/wing4.jpg",
    },
    {
      title: "Wing",
      text: "Sortie sur le lac des Peupleraies",
      image: "https://i.ibb.co/8dCRc5v/wing.jpg",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
      mb={4}
    >
      <IconButton
        aria-label="left-arrow"
        variant="outline"
        colorScheme="linkedin"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="outline"
        colorScheme="linkedin"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={2}
                w={"fit-content"}
                maxW={"lg"}
                position="absolute"
                top="15%"
                transform="translate(0, -50%)"
                backgroundColor={"whiteAlpha.600"}
                p={4}
                borderRadius={8}
              >
                <Heading fontSize={{ base: "3xl", md: "4xl" }} color="gray.800">
                  {card.title}
                </Heading>
                <Text fontSize={{ base: "md", lg: "lg" }} color="gray.800">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
