import React from 'react'

import PageTitle from '@/components/PageTitle'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'

const PortfolioPage = () => (
  <Layout>
    <Seo
      title='Портфолио'
      description='Проекты и рабочие материалы Павла Лысенко'
      keywords={['Pavel Lysenko portfolio', 'Портфолио Павла Лысенко', 'Ohar Studio']}
    />
    <PageTitle>Портфолио приложений</PageTitle>

    <p>
      Отдельная витрина пет-проектов живёт на
      <a
        href="https://ohar-studio.ru/"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Ohar Studio
      </a>.
    </p>
  </Layout>
)

export default PortfolioPage
