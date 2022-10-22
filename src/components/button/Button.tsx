import Link from 'next/link'
import React from 'react'

type Props = {
  children: React.ReactNode
  onClick: () => void
  variant?: string
  size?: string // sm, md, lg
  disabled?: boolean
  label?: string
  classNames?: string
}

type LinkProps = {
  to: string
  children: React.ReactNode
  variant?: string
  size?: string // sm, md, lg
  classNames?: any

}

export default function Button({
  children,
  onClick,
  variant = 'default',
  size = 'md',
  disabled,
  label,
  classNames,
  ...rest
}: Props) {
  return (
    <button
      aria-label={label}
      className={
        `btn ${size} ${variant} ${classNames} ` + (disabled ? 'disabled' : '')
      }
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

export const LinkBtn = ({
  to,
  children,
  variant = 'default',
  size = 'md',
  classNames
}: LinkProps) => {
  return (
    <Link href={to}>
      <a
        className={`btn relative duration-150 ease-in-out font-extrabold shadow-none text-secondary hover:text-white transition ${size} ${variant} ${classNames}`}
      >
        {children}
      </a>
    </Link>
  )
}
