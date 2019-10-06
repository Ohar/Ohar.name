import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import DndSourceInfo from "@/components/DndSourceInfo"

import generateCreaturePageUrlById from "@/utils/generateCreaturePageUrlById"

const DndCreatureLinkComponent = ({ creature: {name, id, ...rest} }) => {
  const url = generateCreaturePageUrlById(id)

  return (
    <p>
      Статблок: <Link to={url}>
        {name}
      </Link> (
      <i>
        <DndSourceInfo {...rest}/>
      </i>
      )
    </p>
  )
}

DndCreatureLinkComponent.propTypes = {
  creatureId: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
}

export default DndCreatureLinkComponent
