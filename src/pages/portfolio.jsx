import React from "react"

import { useLanguage } from "@/components/LanguageProvider"
import PageTitle from "@/components/PageTitle"
import Layout from "@/components/Layout"
import Seo from "@/components/Seo"
import siteCopy from "@/constants/siteCopy"

const PortfolioPage = () => {
  const { language } = useLanguage()
  const copy = siteCopy[language].portfolio

  return (
    <Layout>
      <Seo
        title={copy.title}
        description={copy.description}
        keywords={copy.keywords}
      />
      <PageTitle>{copy.heading}</PageTitle>

      <p>
        {copy.lead}{" "}
        <a
          href="https://ohar-studio.ru/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Ohar Studio
        </a>
        .
      </p>
    </Layout>
  )
}

export default PortfolioPage
