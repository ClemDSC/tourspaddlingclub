import React from 'react'
import Slider from "react-slick";
import { Box, Image } from '@chakra-ui/react'


import Club from "../../Assets/club.jpg"
import Chenonceau from "../../Assets/chenonceau.jpg"
import Nature from "../../Assets/nature.jpg"

export default function SliderHome() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Box>
      <Slider {...settings}>
          <div className='container'>
            <Image objectFit='cover' src={Club} alt='Tours Paddling Club - club' />
          </div>
          <div className='container'>
            <Image objectFit='cover' src={Chenonceau} alt='Tours Paddling Club - Chateau de Chenonceau' />
          </div>
          <div className='container'>
            <Image objectFit='cover' src={Nature} alt='Tours Paddling Club - sortie nature' />
          </div>
        </Slider>
    </Box>
  )
}
