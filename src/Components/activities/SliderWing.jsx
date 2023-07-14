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
      image: "https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/332902310_903324270994195_1793907926759520879_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=o4LIRGReXAgAX_XI2Uf&_nc_oc=AQnbY55RS2sOXldYP7uWllFqqsBC4p15dtexZcgGewiezB2SEBdGtPHLcHAG-U-nh_krqPLU0v2vKg5m6TioyLzZ&_nc_ht=scontent-cdg4-1.xx&oh=00_AfCY8qLfdzfnZuw9_eS-jWu_KsGkny4q6LdK2aXuVZaI9A&oe=64B639C8",
    },
    {
      title: "Wing",
      text: "Sortie sur le lac des Peupleraies",
      image:
        "https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/284998174_1810456389158290_888301438165834968_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5Ehlb_0RMhIAX_S1kID&_nc_oc=AQl03kZWv1uM8GZtkemhrwt6cWZHeZRwQb_rkR0ua3hUBUG_yJl685giozEffHECPlk4nHSp2mvFQT5c19RnoJ6F&_nc_ht=scontent-cdg4-1.xx&oh=00_AfCq26-iySEV4-LejBheHSTUsE2L2hhTlmZ7lSNzK8T8Vg&oe=64B58949",
    },
    {
      title: "Wing",
      text: "Sortie sur le lac des Peupleraies",
      image: "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/333820667_701220075081062_1849447550452731986_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=T-BuB_t_BvQAX8tBiT8&_nc_ht=scontent-cdg4-2.xx&oh=00_AfDU8E3HfoiZUblGO5lPWr7rW6-aj0JtrTO8mMr8J0cw4Q&oe=64B72DB2",
    },
    {
      title: "Wing",
      text: "Sortie sur le lac des Peupleraies",
      image:
        "https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/284717931_1810456222491640_8138702661896165533_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=znOfNgNfYRUAX95W6tl&_nc_ht=scontent-cdg4-1.xx&oh=00_AfBkaTIfDIot7J747NLSkaLa5dqwwXlDzX91npgxLtJtTw&oe=64B726A6",
    },
    {
      title: "Wing",
      text: "Sortie sur le lac des Peupleraies",
      image: "https://scontent-cdg4-2.xx.fbcdn.net/v/t1.6435-9/108194852_1317036928500241_4926167782045513630_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PhsTnELy_vYAX8RWJcB&_nc_ht=scontent-cdg4-2.xx&oh=00_AfAETW3DazIFevqbLKEJoFqi1ejQcIBTHZXogtT0yi31fQ&oe=64D8F75A",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
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
