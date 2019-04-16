import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import NameGenerator from '@/components/NameGenerator'

const NameGeneratorPage = () => (
  <Layout>
    <Seo
      title='Генератор имён'
      description='Генератор славянских и советских имён'
    />
    <NameGenerator/>
  </Layout>
)

export default NameGeneratorPage
