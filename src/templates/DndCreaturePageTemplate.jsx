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

  let seoData = {
    title: 'Каталог существ для D&D',
    description: 'Каталог всех существ в Dungeons & Dragons',
    keywords: [
      'Подземелья и драконы', 'Dungeons & Dragons', 'D&D', 'DnD', 'dnd',
      'Dungeons & Dragons tools', 'D&D tools', 'DnD tools', 'dnd tools',
      'Каталог существ', 'Creature catalog'
    ],
  }

  if (creatureId) {
    const {description: [descriptionText], name} = dndCreatureCollection[creatureId]

    seoData = {
      title: name,
      description: descriptionText.text || descriptionText,
      keywords: [],
    }
  }

  const { title, description, keywords } = seoData

  return (
    <Layout>
      <Seo
        title={title}
        description={description}
        keywords={keywords}
      />
      <DndCreatureCatalog showAll={!creatureId}/>
      {
        creatureId
          ? <DndCreature id={creatureId}/>
          : null
      }
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
