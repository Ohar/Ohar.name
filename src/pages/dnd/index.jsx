import React from 'react'
import { Link } from "gatsby"

import { faAngry, faDice, faMagic, faSkull, faUserTag, faBookOpen } from '@fortawesome/free-solid-svg-icons'

import Layout from '@/components/Layout'
import Icon from '@/components/Icon'
import PageTitle from '@/components/PageTitle'
import Seo from '@/components/Seo'

const dndSubpageList = [
  {
    icon: 'icon-shop',
    title: 'Каталог товаров',
    url: '/dnd/item-catalog',
  },
  {
    icon: faUserTag,
    title: 'Генератор имён персонажей',
    url: '/dnd/generator-names',
  },
  {
    icon: faSkull,
    title: 'Гробница аннигиляции: инструменты для ведущего (спойлеры)',
    url: '/dnd/toa',
  },
  {
    icon: faAngry,
    title: 'Генератор эффектов безумия',
    url: '/dnd/generator-madness',
  },
  {
    icon: faDice,
    title: 'Броски кубиков',
    url: '/dnd/roll',
  },
  {
    icon: faMagic,
    title: 'Генератор разумных магических предметов',
    url: '/dnd/generator-sentient-items',
  },
  {
    icon: faBookOpen,
    title: 'Каталог существ (в разработке)',
    url: '/dnd/creature-catalog',
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
          ({title, url, icon}) => (
            <li key={url}>
              <Link to={url}>
                <Icon icon={icon}/>
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
