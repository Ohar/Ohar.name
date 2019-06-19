import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import DndSentientItemGenerator from '@/components/DndSentientItemGenerator'

const SentientItemsGeneratorPage = () => (
  <Layout>
    <Seo
      title='Генератор разумных магических предметов для D&D'
      description='Генератор разумных магических предметов для Dungeons & Dragons'
      keywords={[
        'Подземелья и драконы', 'Dungeons & Dragons', 'D&D', 'DnD', 'dnd',
        'Dungeons & Dragons tools', 'D&D tools', 'DnD tools', 'dnd tools',
        'Генератор разумных магических предметов'
      ]}
    />
    <DndSentientItemGenerator/>
  </Layout>
)

export default SentientItemsGeneratorPage
