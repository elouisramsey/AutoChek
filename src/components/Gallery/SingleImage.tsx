import { Paragraph } from 'components/DisplayText/DsiplayText'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { convertCurrency } from 'shared/functions/functions'

type Props = {
  to: string
  img: string
  title: string
  marketplacePrice: number | any
}

function dynamicClassNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const SingleImage = ({ to, img, title, marketplacePrice }: Props) => {
  const [isLoading, setLoading] = useState<boolean>(true)
  return (
    <Link href={to}>
      <a className='group'>
        <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
          <Image
            alt={to}
            src={img}
            layout='fill'
            objectFit='cover'
            className={dynamicClassNames(
              'group-hover:opacity-75 duration-700 ease-in-out',
              isLoading
                ? 'grayscale blur-2xl scale-110'
                : 'grayscale-0 blur-0 scale-100'
            )}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <Paragraph classNames='mt-4 text-sm text-gray-700'>{title}</Paragraph>
        <Paragraph classNames='mt-1 text-lg font-medium text-gray-900'>
          {'\u20A6'}{convertCurrency(marketplacePrice)}
        </Paragraph>
      </a>
    </Link>
  )
}

export default SingleImage
