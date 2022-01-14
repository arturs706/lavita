import '../styles/globals.css'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"
import Layout from '../components/Layout'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import PreloaderPage from '../components/PreloaderPage'
import {useState, useEffect} from 'react'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setTimeout(() => setLoading(true), 4000);
  },[])
  return (
   <>
   {loading 
   ? <SessionProvider session={session} refetchInterval={5 * 60}>
   <Provider store={store}>
   
   <Layout>
   
        <Head>
            <meta name="description" content="Lavita veikals Ventspils"/>
            <meta name="keywords" content="Aizkari preces Latvija Latvia Kurzeme"/>
            <meta name="author" content="Lavita"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <Component {...pageProps} />
      </Layout>
    
      </Provider>
    </SessionProvider>
    : <PreloaderPage/>
  }
   
    </>
    
  )
}
