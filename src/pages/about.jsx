import React from "react"

import { useLanguage } from "@/components/LanguageProvider"
import PageTitle from "@/components/PageTitle"
import Layout from "@/components/Layout"
import Seo from "@/components/Seo"
import Contacts from "@/components/Contacts"
import siteCopy from "@/constants/siteCopy"

import CvEn from "@/cv/Frontend-Developer-Lysenko-Pavel-en.pdf"
import CvRu from "@/cv/Frontend-Developer-Lysenko-Pavel.pdf"

const AboutPage = () => {
  const { language } = useLanguage()
  const copy = siteCopy[language].contacts
  const cv = language === "ru" ? CvRu : CvEn

  return (
    <Layout>
      <Seo
        title={copy.title}
        description={copy.description}
        keywords={copy.keywords}
      />
      <PageTitle>{copy.title}</PageTitle>
      <p>{copy.intro}</p>
      <p>
        <a href={cv} download>
          {copy.cvLink}
        </a>
        .
      </p>

      <h2>{copy.profilesTitle}</h2>
      <Contacts />
    </Layout>
  )
}

export default AboutPage
