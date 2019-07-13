import React from 'react'
import { Link } from "gatsby"

import Layout from '@/components/Layout'
import Icon from '@/components/Icon'
import PageTitle from '@/components/PageTitle'
import Seo from '@/components/Seo'

import { faGem, faRandom } from '@fortawesome/free-solid-svg-icons'

const toaSubpageList = [
  {
    title: 'Гробница аннигиляции: генератор случайных столкновений',
    url: '/dnd/toa/generator-random-encounter',
    icon: faRandom,
  },
  {
    title: 'Гробница аннигиляции: генератор выпавших сокровищ',
    url: '/dnd/toa/generator-treasures',
    icon: faGem,
  },
]

export default () => (
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
