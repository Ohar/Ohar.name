import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import DndLootGenerator from '@/components/DndLootGenerator'

export default () => (
  <Layout>
    <Seo
      title='Генератор лута для D&D'
      keywords={[
        'Подземелья и драконы', 'Dungeons & Dragons', 'D&D', 'DnD', 'dnd',
        'Dungeons & Dragons tools', 'D&D tools', 'DnD tools', 'dnd tools',
      ]}
    />
    <DndLootGenerator/>
  </Layout>
)
