import React, { ReactNode } from 'react'

type ChildrenProps = {
  header: string
  value: string | boolean | number
}

type Props = {
  children: ReactNode
}

const CarInfo = ({ children }: Props) => {
  return (
    <dl className='mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-y-2 lg:gap-x-24'>
      {children}
    </dl>
  )
}

const CarInfoChildren = ({ header, value }: ChildrenProps) => {
  return (
    <div className='border-t border-gray-200 pt-4'>
      <dt className='font-medium text-gray-900 capitalize font-AvenirBlack'>
        {header}
      </dt>
      <dd className='mt-2 text-sm text-gray-500 font-AvenirBlack capitalize'>
        {value}
      </dd>
    </div>
  )
}

export { CarInfo, CarInfoChildren }
