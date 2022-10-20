import { Paragraph } from 'components/DisplayText/DsiplayText'
import React from 'react'

const Gallery = ({
  children,
  heading
}: {
  children: React.ReactNode
  heading: string
}) => {
  return (
    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <Paragraph classNames='lg:text-2xl text-black font-bold mb-8'>
        {heading}
      </Paragraph>
      <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        {children}
      </div>
    </div>
  )
}

export default Gallery
