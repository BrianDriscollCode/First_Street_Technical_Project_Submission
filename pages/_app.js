import '../styles/globals.css'
import Head from "next/head";
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {

  return (
  
    <Layout> 

      <Head>
        <title> test </title>
      </Head>

      <Component {...pageProps} />

    </Layout>
    
    
  )

}

export default MyApp
