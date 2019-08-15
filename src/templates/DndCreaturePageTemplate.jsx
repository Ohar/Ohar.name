import React from 'react'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import DndCreature from '@/components/DndCreature'

import {dndCreatureCollection} from "@/constants/dnd/dndCreatureList"

const DndCreaturePageTemplate = ({pageContext: {slug}}) => {
  const creatureId = slug || 'goblin'
  const {description, name} = dndCreatureCollection[creatureId]

  return (
    <Layout>
      <Seo
        title={name}
        description={description}
      />
      <DndCreature
        id={creatureId}
      />
    </Layout>
  )
}

DndCreaturePageTemplate.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string,
  }).isRequired,
}

export default DndCreaturePageTemplate
