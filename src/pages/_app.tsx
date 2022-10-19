import '../styles/tailwind.css'
import type { AppProps } from 'next/app'
import '@nextcss/reset'
import TopHeader from 'shared/top/TopHeader'
import Index from 'shared/nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Index />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
