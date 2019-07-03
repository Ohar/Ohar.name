import React from 'react'
import { Link } from "gatsby"

import Layout from '@/components/Layout'
import MenuIcon from '@/components/MenuIcon'
import PageTitle from '@/components/PageTitle'
import Seo from '@/components/Seo'

const toaSubpageList = [
  {
    title: 'Гробница аннигиляции: генератор случайных столкновений',
    url: '/dnd/toa/generator-random-encounter',
  },
  {
    title: 'Гробница аннигиляции: генератор выпавших сокровищ',
    url: '/dnd/toa/generator-treasures',
  },
]

const DndPage = () => (
  <Layout>
    <Seo
      title='Гробница аннигиляции'
      description='Инструменты для кампании «Гробница аннигиляции»'
      keywords={[
        'Подземелья и драконы', 'Гробница аннигиляции', 'Tomb of Annihilation',
        'Dungeons & Dragons', 'D&D', 'DnD', 'dnd', 'Dungeons & Dragons tools',
        'D&D tools', 'DnD tools', 'dnd tools'
      ]}
    />
    <PageTitle>Инструменты для ведущего кампании «Гробница аннигиляции»</PageTitle>
    <ul>
      {
        toaSubpageList.map(
          ({title, url, icon}) => (
            <li key={url}>
              <Link to={url}>
                <MenuIcon icon={icon}/>
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
