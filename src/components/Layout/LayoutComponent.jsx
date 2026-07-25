import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"

import HeaderDefault from '@/components/Header'
import Footer from '@/components/Footer'

import '@/fonts/oharname/oharname.css'

import './active_elements_default.css'
import './article.css'
import './breadcrumbs.css'
import './fonts.css'
import './LayoutStyles.css'
import './main.css'
import './time.css'

const LayoutComponent = ({
  children,
  className = '',
  Header = HeaderDefault,
  hideHomeLink = false,
  hideLanguageSwitcher = false,
}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <section className={`Layout ${className}`}>
        <Header
          siteTitle={data.site.siteMetadata.title}
          hideHomeLink={hideHomeLink}
          hideLanguageSwitcher={hideLanguageSwitcher}
        />
        <main>{children}</main>
        <Footer/>
      </section>
    )}
  />
)

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
  hideHomeLink: PropTypes.bool,
  hideLanguageSwitcher: PropTypes.bool,
}

export default LayoutComponent
