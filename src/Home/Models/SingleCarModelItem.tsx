import { Paragraph } from 'components/DisplayText/DsiplayText'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CarProps } from '../types'

function SingleCarModelItem({ name, id, imageUrl }: CarProps) {
  return (
    <Link href={`car/model/${id}`} key={id}>
      <a>
        <article className='flex justify-center items-center h-32 overflow-hidden'>
          <Image
            className='max-w-full flex'
            height={'100%'}
            width='100%'
            src={imageUrl}
            alt={name}
          />
        </article>
        <article className='mt-4 text-sm text-gray-700'>
          <Paragraph classNames='my-2 font-medium text-base capitalize text-center'>
            {name}
          </Paragraph>
        </article>
      </a>
    </Link>
  )
}

export default SingleCarModelItem
