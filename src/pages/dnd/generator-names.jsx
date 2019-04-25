import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import NameGeneratorDnd from '@/components/NameGeneratorDnd'

const NameGeneratorChultage = () => (
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
    <NameGeneratorDnd/>
  </Layout>
)

export default NameGeneratorChultage
