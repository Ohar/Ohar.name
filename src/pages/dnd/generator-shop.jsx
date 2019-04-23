import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import DndShopGenerator from '@/components/DndShopGenerator'

const DndShopGeneratorPage = () => (
  <Layout>
    <Seo
      title='Генератор ассортимента магазинов D&D'
      description='Генератор ассортимента магазинов для Dungeons & Dragons'
      keywords={[
        'Подземелья и драконы', 'Dungeons & Dragons', 'D&D', 'DnD', 'dnd',
        'Dungeons & Dragons tools', 'D&D tools', 'DnD tools', 'dnd tools',
        'Генератор ассортимента магазинов', 'Генератор магазинов'
      ]}
    />
    <DndShopGenerator/>
  </Layout>
)

export default DndShopGeneratorPage
