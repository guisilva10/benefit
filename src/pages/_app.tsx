import { MenuProvider } from '@/components/Context'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }: AppProps) {
  return (
    
    <MenuProvider>
    <Head>
      <title>Benefit</title>

    </Head>
  
    <Component {...pageProps} />
    <ToastContainer />
  </MenuProvider>
    
  )
}