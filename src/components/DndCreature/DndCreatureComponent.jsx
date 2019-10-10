import React from "react"
import PropTypes from "prop-types"

import DndCreatureStats from "@/components/DndCreature/components/DndCreatureStats"
import DndCreatureDescriptionList from "@/components/DndCreature/components/DndCreatureDescriptionList"
import DndCreatureImageList from "@/components/DndCreature/components/DndCreatureImageList"

import "./DndCreatureStyles.less"

const DndCreatureComponent = ({creature, ...rest}) => (
  <section className='DndCreature'>
    <DndCreatureStats
      creature={creature}
      {...rest}
    />
    <DndCreatureImageList {...creature} />
    <DndCreatureDescriptionList {...creature} />
  </section>
)

DndCreatureComponent.propTypes = {
  creature: PropTypes.object.isRequired,
}

export default DndCreatureComponent
