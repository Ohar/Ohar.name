import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'

import RulesRawText from './RulesRawText'

import './styles/print.css'
import './styles/print_color.css'

export default () => (
  <Layout>
    <Seo title='Правила оформления текстов на русском языке' />
    <section>
      <h1>Правила оформления текстов на русском языке</h1>
      <article>
        <RulesRawText/>
      </article>
    </section>
  </Layout>
)
