import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import DndItemCatalog from '@/components/DndItemCatalog'

const DndItemCatalogPage = () => (
  <Layout>
    <Seo
      title='Каталог товаров для D&D'
      description='Каталог всех товаров в магазинах для Dungeons & Dragons'
      keywords={[
        'Подземелья и драконы', 'Dungeons & Dragons', 'D&D', 'DnD', 'dnd',
        'Dungeons & Dragons tools', 'D&D tools', 'DnD tools', 'dnd tools',
        'Каталог товаров'
      ]}
    />
    <DndItemCatalog/>
  </Layout>
)

export default DndItemCatalogPage
