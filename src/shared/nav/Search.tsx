import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCartFill } from 'react-icons/bs'
import SearchInput from './SearchInput'

type Props = {}

function Search({}: Props) {
  return (
    <section className='flex flex-row items-center justify-between px-6 lg:px-28 mb-8 lg:h-16 bg-gray-100 overflow-hidden'>
      <Link href='/'>
        <a>
          <Image
            alt='Autochek Logo'
            src='/images/logo.png'
            height={50}
            width={250}
          />
        </a>
      </Link>
      <SearchInput />
      <span className='block flex h-10 w-10 rounded items-center justify-center bg-white'>
        <BsCartFill size={20} />
      </span>
    </section>
  )
}

export default Search