import { Box, Divider, AbsoluteCenter, Center, Image } from "@chakra-ui/react";

import Tours from "../../Assets/logos/tours-logo.png";
import DecathPro from "../../Assets/logos/Logo-Decathlon-Pro.png";
import FFS from "../../Assets/logos/federation-logo.png";
import CreditMutuel from "../../Assets/logos/creditmutuel-logo.png";
import LaureatSport from "../../Assets/logos/logo-ls1.png";
import SurfRider from "../../Assets/logos/logo-sfe.png";
import SupPassion from "../../Assets/logos/sup_passion.png";
import Savagers from "../../Assets/logos/savagerslogo.jpg";
import DecathToursNord from "../../Assets/logos/logo-decathlon-Tours-nord.bmp";

export default function HomePartenaire() {
  return (
    <Box>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter
          as="h3"
          bg="gray.50"
          px={{ base: "4", md: "4" }}
          fontSize={{ base: "xl", md: "3xl" }}
        >
          Nos partenaires
        </AbsoluteCenter>
      </Box>
        <Center justifyContent={"space-evenly"} flexWrap={'wrap'} gap={{base:'2', md:'none'}} p={4}>
          <Image
            width={{base:'30%',md:"8%"}}
            objectFit={"contain"}
            aspectRatio={"3/2"}
            src={Tours}
            alt="logo - ville de Tours"
          />
          <Image
            width={{base:'30%',md:"8%"}}
            objectFit={"contain"}
            aspectRatio={"3/2"}
            src={DecathPro}
            alt="logo - decathlon pro"
          />
          <Image
            width={{base:'30%',md:"8%"}}
            objectFit={"contain"}
            aspectRatio={"3/2"}
            src={FFS}
            alt="logo - federation francaise de surf"
          />
          <Image
            width={{base:'30%',md:"8%"}}
            objectFit={"contain"}
            aspectRatio={"3/2"}
            src={CreditMutuel}
            alt="logo - credit mutuel"
          />
          <Image
            width={{base:'30%',md:"8%"}}
            objectFit={"contain"}
            aspectRatio={"3/2"}
            src={LaureatSport}
            alt="logo - laureat sport"
          />
          <Image
            width={{base:'30%',md:"8%"}}
            objectFit={"contain"}
            aspectRatio={"3/2"}
            src={SurfRider}
            alt="logo -  surf rider"
          />
          <Image
            width={{base:'30%',md:"8%"}}
            objectFit={"contain"}
            aspectRatio={"3/2"}
            src={SupPassion}
            alt="logo - sup passion"
          />
          <Image
            width={{base:'30%',md:"8%"}}
            objectFit={"contain"}
            aspectRatio={"3/2"}
            src={Savagers}
            alt="logo - savagers"
          />
          <Image
            width={{base:'30%',md:"8%"}}
            objectFit={"contain"}
            aspectRatio={"3/2"}
            src={DecathToursNord}
            alt="logo - decathlon tours nord"
          />
        </Center>
    </Box>
  );
}
