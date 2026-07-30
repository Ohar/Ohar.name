import React, { useEffect } from "react"
import Head from "next/head"

const PORTFOLIO_URL = "https://ohar-studio.ru/"

const PortfolioPage = () => {
  useEffect(() => {
    window.location.replace(PORTFOLIO_URL)
  }, [])

  return (
    <Head>
      <title>Portfolio | Ohar</title>
      <link rel="canonical" href={PORTFOLIO_URL} />
      <meta httpEquiv="refresh" content={`0; url=${PORTFOLIO_URL}`} />
      <meta name="robots" content="noindex, follow" />
    </Head>
  )
}

export default PortfolioPage
