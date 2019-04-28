import React from 'react'
import { Link } from "gatsby"

import Layout from '@/components/Layout'
import MenuIcon from '@/components/MenuIcon'
import PageTitle from '@/components/PageTitle'
import Seo from '@/components/Seo'

const dndSubpageList = [
  {
    iconClass: 'icon-shop',
    title: 'Генератор ассортимента магазинов',
    url: '/dnd/generator-shop',
  },
  {
    iconClass: 'icon-person',
    title: 'Генератор имён чультов',
    url: '/dnd/generator-names-chult',
  },
  {
    title: 'Гробница аннигиляции: генератор случайных столкновений',
    url: '/dnd/generator-toa-random-encounter',
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
          ({title, url, iconClass}) => (
            <li>
              <Link to={url}>
                <MenuIcon iconClass={iconClass}/>
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
