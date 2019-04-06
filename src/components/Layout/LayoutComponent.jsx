import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import '@/fonts/oharname/oharname.css'

import './active_elements_default.css'
import './article.css'
import './breadcrumbs.css'
import './button.css'
import './fonts.css'
import './LayoutStyles.css'
import './main.css'
import './radio.css'
import './time.css'

const LayoutComponent = ({ children }) => (
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
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer/>
      </>
    )}
  />
)

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutComponent
