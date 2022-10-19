import Button, { LinkBtn } from 'components/button/Button'
import { Header, Paragraph } from 'components/DisplayText/DsiplayText'
import React from 'react'

type Props = {}

function Hero({}: Props) {
  return (
    <div className='h-screen bg-cover bg-center bg-no-repeat hero relative w-full items-center flex px-6 lg:px-28'>
      <section className=''>
        <Paragraph classNames='relative lg:text-3xl font-black'>
          WANT TO BUY A
        </Paragraph>
        <Header classNames='relative text-white lg:text-7xl my-2 text-primary font-black'>
          BRAND NEW CAR?
        </Header>
        <Paragraph classNames='relative lg:text-3xl font-medium'>
          We would get you the best deal.
        </Paragraph>
        <LinkBtn classNames='w-1/2 my-6' to='/'>
          Browse all new cars
        </LinkBtn>
      </section>
    </div>
  )
}

export default Hero

// BRAND NEW CAR?
// We would get you the best deal.
