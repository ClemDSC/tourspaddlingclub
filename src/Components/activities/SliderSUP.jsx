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

export default function SliderSUP() {
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
      title: "Stand up paddle",
      text: "Sortie sur le Cher - barrage de Larçay",
      image:
        "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/312115672_523489326451049_1094380217339389270_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8fuapTjIypcAX-5wQy-&_nc_ht=scontent-cdg4-2.xx&oh=00_AfDFIr3ZrCq8h1yKVK_SF9vXnn02_2qlZ4H2xHXIDIeVyA&oe=64B6BF48",
    },
    {
      title: "Stand up paddle",
      text: "Sortie sur le Cher",
      image:
        "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/311990507_523490233117625_9007529452982041540_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tisvkUddkq4AX9I6Q1z&_nc_ht=scontent-cdg4-2.xx&oh=00_AfDf1E2LXHRmvNx6MbH3OlhAcF9wxxnRK8_h_oVUmSs3wQ&oe=64B6E190",
    },
    {
      title: "Stand up paddle",
      text: "Sortie sur le Cher",
      image:
        "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/312109793_523491273117521_5972877111194529427_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=gfUkkJRjU6EAX-zukrF&_nc_ht=scontent-cdg4-2.xx&oh=00_AfB06KFIkKSyK70c80ZcB2rMUobQqFsCb6iH3l0nRCO2Sg&oe=64B73846",
    },
    {
      title: "Stand up paddle",
      text: "Sortie sur le lac des Peupleraies",
      image:
        "https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/315310575_549225097210805_448007552651354923_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=aN5MHiLWD7IAX9hZ8cN&_nc_ht=scontent-cdg4-1.xx&oh=00_AfCGXymAoY2EP5MNwl258H90f-sp7KHspUsREeYz2Set0Q&oe=64B76508",
    },
    {
      title: "Stand up paddle",
      text: "Sortie sur le Cher",
      image:
        "https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/315294335_549224907210824_3798630782124445583_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Kr0aD4prwPsAX9po-lW&_nc_ht=scontent-cdg4-3.xx&oh=00_AfANLlsm-YS4LB3FQTKG_wu8NXJxcq3LB9IAOI5xyTidTQ&oe=64B660BB",
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
        colorScheme='linkedin'
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
        colorScheme='linkedin'
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
