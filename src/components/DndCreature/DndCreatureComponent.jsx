import React from "react"
import PropTypes from "prop-types"

import DndCreatureStats from "@/components/DndCreature/components/DndCreatureStats"
import DndCreatureDescription from "@/components/DndCreature/components/DndCreatureDescription"

import "./DndCreatureStyles.less"

const DndCreatureComponent = ({creature}) => (
  <section className='DndCreature'>
    <DndCreatureStats {...creature} />
    <DndCreatureDescription {...creature} />
  </section>
)

DndCreatureComponent.propTypes = {
  creature: PropTypes.object.isRequired,
}

export default DndCreatureComponent
