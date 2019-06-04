import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import DndMadnessGenerator from '@/components/DndMadnessGenerator'

export default () => (
  <Layout>
    <Seo
      title='Генератор эффектов безумия для D&D'
      keywords={[
        'Подземелья и драконы', 'Dungeons & Dragons', 'D&D', 'DnD', 'dnd',
        'Dungeons & Dragons tools', 'D&D tools', 'DnD tools', 'dnd tools',
      ]}
    />
    <DndMadnessGenerator/>
  </Layout>
)
