import React, { ReactNode } from 'react'
import Slider from 'react-slick'

type Props = {
  children: ReactNode
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

function Carousel({ children }: Props) {
  return <Slider {...settings}>{children}</Slider>
}

export default Carousel
