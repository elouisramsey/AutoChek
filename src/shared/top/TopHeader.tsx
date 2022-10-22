import { Header, Paragraph } from 'components/DisplayText/DsiplayText'
import Link from 'next/link'
import { BsFillCartFill } from 'react-icons/bs'
import { navData } from './data'

type Props = {}

function TopHeader({}: Props) {
  const lastIndex = navData.length - 1
  return (
    <nav className='bg-secondary lg:flex lg:flex-row items-center lg:justify-between w-full lg:h-20 px-6 lg:px-8 mb-4 lg:mb-8 overflow-hidden py-4'>
      <section className='lg:w-1/8 flex flex-row lg:justify-between'>
        <Paragraph classNames='text-white mr-4'>
          Offer Zone Top Deals & Discounts
        </Paragraph>
        <BsFillCartFill color='white' />
      </section>
      <section className='flex flex-wrap flex-row items-center lg:justify-between lg:w-8/12'>
        {navData.map((item, i) => {
          return (
            <section
              className='lg:w-2/7 flex flex-row items-center justify-evenly mr-4 lg:mr-0'
              key={item.id}
            >
              <Link href='#'>
                <a
                  className={`lg:text-base text-small font-medium text-white flex flex-row block mr-4 lg:mr-8`}
                >
                  {item.icon} <span className='px-2' /> {item.name}
                </a>
              </Link>
              {i !== lastIndex && <span className='text-white text-lg'>|</span>}
            </section>
          )
        })}
      </section>
    </nav>
  )
}

export default TopHeader
