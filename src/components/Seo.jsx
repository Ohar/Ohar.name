import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import { useLanguage } from "@/components/LanguageProvider"

function Seo({ description, lang, meta, keywords, title }) {
  const { language } = useLanguage()
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          version
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const resolvedTitle = title || site.siteMetadata.title
  const titleTemplate = title
    ? `%s | ${site.siteMetadata.title}`
    : site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang: lang || language,
      }}
      title={title || site.siteMetadata.title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: resolvedTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `version`,
          content: site.siteMetadata.version,
        },
        {
          name: `twitter:title`,
          content: resolvedTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `yandex-verification`,
          content: "ba53de7ab5a80fcc",
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

Seo.defaultProps = {
  description: ``,
  keywords: [],
  lang: ``,
  meta: [],
  title: "",
}

Seo.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default Seo
