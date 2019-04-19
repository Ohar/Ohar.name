import React from 'react'

import Layout from '@/components/Layout'
import PageTitle from '@/components/PageTitle'
import Seo from '@/components/Seo'
import DndShopGenerator from '@/components/DndShopGenerator'

const DndPage = () => (
  <Layout>
    <Seo
      title='Dungeons & Dragons'
      description='Инструменты для игры в Dungeons & Dragons'
      keywords={[
        'Подземелья и драконы', 'Dungeons & Dragons', 'D&D', 'DnD', 'dnd',
        'Dungeons & Dragons tools', 'D&D tools', 'DnD tools', 'dnd tools'
      ]}
    />
    <PageTitle>Генераторы для Dungeons & Dragons</PageTitle>
    <DndShopGenerator/>
  </Layout>
)

export default DndPage
