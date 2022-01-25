import '../styles/globals.css'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"
import Layout from '../components/Layout'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {

  return (
   <div>
  <SessionProvider session={session} refetchInterval={5 * 60}>
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
   
    </div>
    
  )
}
