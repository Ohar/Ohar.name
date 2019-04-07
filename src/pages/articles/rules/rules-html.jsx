import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'

import rulesRawText from './rules-raw-text'

import './styles/print.css'
import './styles/print_color.css'

export default () => (
  <Layout>
    <Seo title='Правила оформления текстов на русском языке' />
    <section>
      <h1>Правила оформления текстов на русском языке</h1>
      <article dangerouslySetInnerHTML={{ __html: rulesRawText}}/>
    </section>
  </Layout>
)
