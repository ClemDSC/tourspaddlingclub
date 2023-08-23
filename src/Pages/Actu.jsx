import { Box, Divider, AbsoluteCenter } from '@chakra-ui/react'

export default function Actu() {
  return (
    <Box maxWidth={"1400px"} mx={'auto'} p={4}>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter
          as="h3"
          bg="white"
          px={{ base: "4", md: "8" }}
          fontSize={{ base: "xl", md: "2xl" }}
        >
          Actualités
        </AbsoluteCenter>
      </Box>
      <iframe
        title="weather"
        src="https://api.wo-cloud.com/content/widget/?geoObjectKey=8859536&language=fr&region=FR&timeFormat=HH:mm&windUnit=kmh&systemOfMeasurement=metric&temperatureUnit=celsius"
        name="CW2"
        scrolling="no"
        width="290"
        height="318"
        frameborder="0"
        className="iframe-weather"
      ></iframe>
    </Box>
  );
}
