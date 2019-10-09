import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import WandOfOrcus from '@/components/WandOfOrcus'

export default () => (
  <Layout>
    <Seo
      title='Жезл Оркуса'
      description='Генератор нежити, вызываемой жезлом Оркуса'
    />
    <WandOfOrcus/>
  </Layout>
)
