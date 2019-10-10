import React from 'react'
import PropTypes from 'prop-types'

import generateCreatureNameStr from '@/utils/generateCreatureNameStr'

import dndCreatureImageCollection from '@/constants/dnd/dndCreatureImageCollection'

import DndCreatureImageListComponent from './DndCreatureImageListComponent'

const DndCreatureImageListContainer = ({ id, ...rest }) => {
  const imageList = dndCreatureImageCollection[id]
  if (imageList && imageList.length) {

    const list = imageList.map(
      src => ({
        src,
        text: generateCreatureNameStr(rest).title,
      })
    )

    return (
      <DndCreatureImageListComponent list={list}/>
    )
  }
}

DndCreatureImageListContainer.propTypes = {
  id: PropTypes.string.isRequired,
}

export default DndCreatureImageListContainer
