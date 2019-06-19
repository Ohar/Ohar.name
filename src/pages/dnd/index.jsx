import React from 'react'
import { Link } from "gatsby"

import Layout from '@/components/Layout'
import MenuIcon from '@/components/MenuIcon'
import PageTitle from '@/components/PageTitle'
import Seo from '@/components/Seo'

const dndSubpageList = [
  {
    iconClass: 'icon-shop',
    title: 'Каталог товаров',
    url: '/dnd/item-catalog',
  },
  {
    iconClass: 'icon-person',
    title: 'Генератор имён персонажей',
    url: '/dnd/generator-names',
  },
  {
    title: 'Гробница аннигиляции: инструменты для ведущего (спойлеры)',
    url: '/dnd/toa',
  },
  {
    title: 'Генератор эффектов безумия',
    url: '/dnd/generator-madness',
  },
  {
    title: 'Броски кубиков',
    url: '/dnd/roll',
  },
  {
    title: 'Генератор разумных магических предметов',
    url: '/dnd/generator-sentient-items',
  },
  // {
  //   title: 'Каталог существ',
  //   url: '/dnd/creature-catalog',
  // },
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
            <li key={url}>
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
