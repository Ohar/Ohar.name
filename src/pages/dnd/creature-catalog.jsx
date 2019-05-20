import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import DndCreatureCatalog from '@/components/DndCreatureCatalog'

const DndItemCatalogPage = () => (
  <Layout>
    <Seo
      title='Каталог существ для D&D'
      description='Каталог всех существ в Dungeons & Dragons'
      keywords={[
        'Подземелья и драконы', 'Dungeons & Dragons', 'D&D', 'DnD', 'dnd',
        'Dungeons & Dragons tools', 'D&D tools', 'DnD tools', 'dnd tools',
        'Каталог существ', 'Creature catalog'
      ]}
    />
    <DndCreatureCatalog/>
  </Layout>
)

export default DndItemCatalogPage
