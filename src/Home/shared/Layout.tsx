import Arrow from 'components/Arrow/Arrow'
import { Paragraph } from 'components/DisplayText/DsiplayText'
import React from 'react'

type Props = {
  children: React.ReactNode
  subtitle: string
  title: string
to: string
  text: string
}

function Layout({ children, subtitle, title, text, to }: Props) {
  return (
    <section className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <article className='text-center flex flex-col lg:w-2/5 mx-auto items-center'>
        <Paragraph classNames='text-softGrey'>{subtitle}</Paragraph>
        <Paragraph classNames='font-medium text-2xl mt-6 text-black'>
          {title}
        </Paragraph>

        <Arrow link={to} text={text} />
      </article>
      <section className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        {children}
      </section>
    </section>
  )
}

export default Layout
