import React from 'react'
import { Link } from "gatsby"

import Layout from '@/components/Layout'
import PageTitle from '@/components/PageTitle'
import Seo from '@/components/Seo'

const dndSubpageList = [
  {
    title: 'Генератор ассортимента магазинов',
    url: '/dnd/generator-shop',
  },
  {
    title: 'Генератор имён чультов',
    url: '/dnd/generator-names-chult',
  },
]

const DndPage = () => (
  <Layout>
    <Seo
      title='Dungeons & Dragons'
      description='Инструменты для игры в Dungeons & Dragons'
      keywords={[
        'Подземелья и драконы', 'Dungeons & Dragons', 'D&D', 'DnD', 'dnd',
        'Dungeons & Dragons tools', 'D&D tools', 'DnD tools', 'dnd tools'
      ]}
    />
    <PageTitle>Генераторы для Dungeons & Dragons</PageTitle>
    <ul>
      {
        dndSubpageList.map(
          ({title, url}) => (
            <li>
              <Link to={url}>
                {title}
              </Link>
            </li>
          )
        )
      }
    </ul>
  </Layout>
)

export default DndPage
