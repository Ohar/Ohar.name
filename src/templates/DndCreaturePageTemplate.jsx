import React from 'react'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import DndCreature from '@/components/DndCreature'
import DndCreatureCatalog from '@/components/DndCreatureCatalog'

import {dndCreatureCollection} from "@/constants/dnd/dndCreatureList"

const DEFAULT_CREATURE_ID = null

const DndCreaturePageTemplate = ({creatureId: creatureIdInput, pageContext: {slug}}) => {
  const creatureId = creatureIdInput || slug || DEFAULT_CREATURE_ID

  if (creatureId) {
    const {description, name} = dndCreatureCollection[creatureId]

    return (
      <Layout>
        <Seo
          title={name}
          description={description}
        />
        <DndCreature id={creatureId}/>
      </Layout>
    )
  }

  return (
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
}

DndCreaturePageTemplate.defaultProps = {
  creatureId: DEFAULT_CREATURE_ID,
  pageContext: {
    slug: DEFAULT_CREATURE_ID,
  },
}

DndCreaturePageTemplate.propTypes = {
  creatureId: PropTypes.string,
  pageContext: PropTypes.shape({
    slug: PropTypes.string,
  }),
}

export default DndCreaturePageTemplate
