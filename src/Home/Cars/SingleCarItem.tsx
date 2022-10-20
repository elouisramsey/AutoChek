import { Paragraph } from 'components/DisplayText/DsiplayText'
import Image from 'next/image'
import { CardetailsProps } from 'Home/types'
import Link from 'next/link'
import React from 'react'

function SingleCarItem({
  id,
  imageUrl,
  title,
  marketplacePrice
}: CardetailsProps) {
  return (
    <div className='relative'>
      <div className='min-h-200 overflow-hidden rounded shadow-5xl'>
        <Link href={`car/model/${id}`} key={id}>
          <a>
            <article className='w-full h-2/3 overflow-hidden'>
              <Image
                className='max-w-full flex'
                layout='fill'
                objectFit='cover'
                src={imageUrl}
                alt={title}
              />
            </article>
            <article className='mx-4 lg:mx-0 mb-4 lg:mb-0 flex flex-col'>
              <Paragraph classNames='my-2 font-medium text-base capitalize text-center'>
                {title} {marketplacePrice}
              </Paragraph>
            </article>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SingleCarItem

// border-radius: 4px;
// min-height: 270px;
// overflow: hidden;
// box-shadow: 0 6px 22px hsl(230deg 5% 51% / 10%);
// cursor: pointer;
