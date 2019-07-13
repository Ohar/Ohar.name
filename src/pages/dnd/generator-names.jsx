import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import DndNameGenerator from '@/components/DndNameGenerator'

export default () => (
  <Layout>
    <Seo
      title='Генератор имён для D&D'
      description='Генератор имён для Dungeons & Dragons'
      keywords={[
        'Подземелья и драконы', 'Dungeons & Dragons', 'D&D', 'DnD', 'dnd',
        'Dungeons & Dragons tools', 'D&D tools', 'DnD tools', 'dnd tools',
        'Генератор имён'
      ]}
    />
    <DndNameGenerator/>
  </Layout>
)
