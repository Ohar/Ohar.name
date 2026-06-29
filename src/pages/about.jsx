import React from 'react'

import PageTitle from '@/components/PageTitle'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import Contacts from '@/components/Contacts'

import CV from '@/cv/Frontend-Developer-Lysenko-Pavel.pdf'

const AboutPage = () => (
  <Layout>
    <Seo
      title='Контакты'
      description='Как со мной связаться'
      keywords={['Pavel Lysenko\'s contacts', 'Контакты Павла Лысенко']}
    />
    <PageTitle>Контакты</PageTitle>
    <p>Привет! Меня зовут Павел Лысенко. Я — веб-разработчик.</p>
    <p>
      Моё <a
        href={CV}
        download
      >
        резюме
      </a>.
    </p>

    <h2>Другие сайты со мной</h2>
    <Contacts/>
  </Layout>
)

export default AboutPage
