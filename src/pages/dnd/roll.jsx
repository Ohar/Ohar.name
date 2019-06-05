import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import RollDice from '@/components/RollDice'

export default () => (
  <Layout>
    <Seo
      title='Броски кубиков'
      keywords={[
        'Подземелья и драконы', 'Dungeons & Dragons', 'D&D', 'DnD', 'dnd',
        'Dungeons & Dragons tools', 'D&D tools', 'DnD tools', 'dnd tools',
      ]}
    />
    <RollDice/>
  </Layout>
)
