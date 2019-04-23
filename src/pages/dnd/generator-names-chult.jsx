import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import NameGeneratorChult from '@/components/NameGeneratorChult'

const NameGeneratorChultage = () => (
  <Layout>
    <Seo
      title='Генератор имён чультов D&D'
      description='Генератор имён чультов для Dungeons & Dragons'
      keywords={[
        'Подземелья и драконы', 'Dungeons & Dragons', 'D&D', 'DnD', 'dnd',
        'Dungeons & Dragons tools', 'D&D tools', 'DnD tools', 'dnd tools',
        'Генератор имён чультов'
      ]}
    />
    <NameGeneratorChult/>
  </Layout>
)

export default NameGeneratorChultage
