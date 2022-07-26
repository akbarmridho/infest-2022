import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../components/Footer.css'
import { GoogleAnalytics, usePageViews } from 'nextjs-google-analytics'

function MyApp({ Component, pageProps }: AppProps) {
  usePageViews()
  
  return (
    <Layout>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
