import "../styles/globals.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics"
import { useEffect } from "react"
import { hotjar } from "react-hotjar"

function MyApp({ Component, pageProps }: AppProps) {
  usePageViews()

  useEffect(() => {
    try {
      if (process.env.NEXT_PUBLIC_HJID && process.env.NEXT_PUBLIC_HJSV) {
        const HJID = parseInt(process.env.NEXT_PUBLIC_HJID)
        const HJSV = parseInt(process.env.NEXT_PUBLIC_HJSV)
        hotjar.initialize(HJID, HJSV)
      }
    } catch (e) {
      console.log("Skipping hotjar")
    }
  }, [])

  return (
    <Layout>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
