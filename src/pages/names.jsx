import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import NameGeneratorCommon from '@/components/NameGeneratorCommon'

const NameGeneratorPage = () => (
  <Layout>
    <Seo
      title='Генератор имён'
      description='Генератор славянских и советских имён'
    />
    <NameGeneratorCommon/>
  </Layout>
)

export default NameGeneratorPage
