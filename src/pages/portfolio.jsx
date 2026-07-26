import React, { useEffect } from "react"
import { Helmet } from "react-helmet"

const PORTFOLIO_URL = "https://ohar-studio.ru/"

const PortfolioPage = () => {
  useEffect(() => {
    window.location.replace(PORTFOLIO_URL)
  }, [])

  return (
    <Helmet>
      <title>Portfolio | Ohar</title>
      <link rel="canonical" href={PORTFOLIO_URL} />
      <meta httpEquiv="refresh" content={`0; url=${PORTFOLIO_URL}`} />
      <meta name="robots" content="noindex, follow" />
    </Helmet>
  )
}

export default PortfolioPage
