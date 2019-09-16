import React from 'react'

import {
  faAngry,
  faBookOpen,
  faDice,
  faGem,
  faMagic,
  faSkull,
  faUserTag,
} from '@fortawesome/free-solid-svg-icons'

import Layout from '@/components/Layout'
import PageTitle from '@/components/PageTitle'
import Seo from '@/components/Seo'
import DndSubpageList from '@/components/DndSubpageList'

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
  {
    icon: faGem,
    title: 'Генератор лута',
    url: '/dnd/generator-loot',
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
    <DndSubpageList list={dndSubpageList}/>
  </Layout>
)

export default DndPage
