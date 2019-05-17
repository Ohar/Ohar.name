import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import DndToaEncounterGenerator from '@/components/DndToaEncounterGenerator'

const NameGeneratorChultage = () => (
  <Layout>
    <Seo
      title='Гробница аннигиляции: генератор случайных столкновений'
      description='Dungeons & Dragons, Гробница аннигиляции: генератор случайных столкновений'
      keywords={[
        'Подземелья и драконы', 'Dungeons & Dragons', 'D&D', 'DnD', 'dnd',
        'Dungeons & Dragons tools', 'D&D tools', 'DnD tools', 'dnd tools',
        'генератор случайных столкновений', 'случайные столкновения',
        'random encounter generator', 'random encounter',
        'Гробница аннигиляции', 'Tomb of Annihilation', 'ToA',
      ]}
    />
    <DndToaEncounterGenerator/>
  </Layout>
)

export default NameGeneratorChultage
