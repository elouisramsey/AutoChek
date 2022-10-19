import React, { Children } from 'react'

type Props = {
  children: React.ReactNode
  classNames?: any
}

function Header({ children, classNames }: Props) {
  return <h1 className={`lg:text-4xl text-xl ${classNames}`}>{children}</h1>
}

function Paragraph({ children, classNames }: Props) {
  return (
    <p className={`lg:text-base text-sm font-medium text-white ${classNames}`}>
      {children}
    </p>
  )
}
export { Header, Paragraph }
