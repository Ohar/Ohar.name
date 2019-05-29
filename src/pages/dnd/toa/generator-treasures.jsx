import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import DndToaTreasureGenerator from '@/components/DndToaTreasureGenerator'

const ToaTreasureGeneratorPage = () => (
  <Layout>
    <Seo
      title='Гробница аннигиляции: генератор выпавших сокровищ'
      description='Dungeons & Dragons, Гробница аннигиляции: генератор выпавших сокровищ'
      keywords={[
        'Подземелья и драконы', 'Dungeons & Dragons', 'D&D', 'DnD', 'dnd',
        'Dungeons & Dragons tools', 'D&D tools', 'DnD tools', 'dnd tools',
        'Генератор выпавших сокровищ для кампании Гробницы Аннигиляции', 'выпавшие сокровища',
        'dropped treasure generator', 'loot generator',
        'Гробница аннигиляции', 'Tomb of Annihilation', 'ToA',
      ]}
    />
    <DndToaTreasureGenerator/>
  </Layout>
)

export default ToaTreasureGeneratorPage
