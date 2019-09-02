import React from "react"
import PropTypes from "prop-types"

import DndCreatureStats from "@/components/DndCreature/components/DndCreatureStats"
import DndCreatureDescriptionList from "@/components/DndCreature/components/DndCreatureDescriptionList"

import "./DndCreatureStyles.less"

const DndCreatureComponent = ({creature}) => (
  <section className='DndCreature'>
    <DndCreatureStats {...creature} />
    <DndCreatureDescriptionList {...creature} />
  </section>
)

DndCreatureComponent.propTypes = {
  creature: PropTypes.object.isRequired,
}

export default DndCreatureComponent
