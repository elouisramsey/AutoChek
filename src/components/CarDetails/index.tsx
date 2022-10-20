import React, { ReactNode } from 'react'

type ChildrenProps = {
  header: string
  value: string
}

type Props = {
  children: ReactNode
}

const CarInfo = ({ children }: Props) => {
  return (
    <dl className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-16'>
      {children}
    </dl>
  )
}

const CarInfoChildren = ({ header, value }: ChildrenProps) => {
  return (
    <div className='border-t border-gray-200 pt-4'>
      <dt className='font-medium text-gray-900 font-AvenirBlack'>{header}</dt>
      <dd className='mt-2 text-sm text-gray-500 font-AvenirBlack'>{value}</dd>
    </div>
  )
}

export { CarInfo, CarInfoChildren }
