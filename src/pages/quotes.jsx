import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import Quotes from '@/components/Quotes'

const QuotesPage = () => (
  <Layout>
    <Seo
      title='Цитаты'
      description='Цитаты из разных источников'
    />
    <Quotes/>
  </Layout>
)

export default QuotesPage
