import React from 'react'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'

import './active_elements_default.less'
import './article.less'
import './DwLayoutStyles.less'

const DwLayoutComponent = ({children, ...props}) => (
  <Layout
    {...props}
    className='DwLayout'
    Header={() => null}
  >
    {children}
  </Layout>
)

DwLayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DwLayoutComponent
