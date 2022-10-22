import '../styles/tailwind.css'
import type { AppProps } from 'next/app'
import '@nextcss/reset'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Index from 'shared/nav'
import Footer from 'shared/footer/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Index />
      <Component {...pageProps} />

    </>
  )
}

export default MyApp
