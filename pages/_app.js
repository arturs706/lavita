import '../styles/globals.css'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"
import Layout from '../components/Layout'


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
   <>
   <SessionProvider session={session} refetchInterval={5 * 60}>
     
   <Layout>

        <Head>
            <link
            href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@500&family=Raleway:wght@300&display=swap"
            rel="stylesheet"
            />
            <meta name="description" content="Free Web tutorials"/>
            <meta name="keywords" content="massage barnet, massage in london, spa, day off "/>
            <meta name="author" content="Arthur"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        
        <Component {...pageProps} />
      </Layout>

    </SessionProvider>
    </>
    
  )
}
