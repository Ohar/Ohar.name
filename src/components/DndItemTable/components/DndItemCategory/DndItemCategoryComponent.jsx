import React from "react"

import {dndItemCategoryCollection} from '@/constants/dnd/dndItemCategoryList'

const DndItemCategoryComponent = ({catId}) => {
  if (catId) {
    const category = dndItemCategoryCollection[catId]

    if (category) {
      const {name, description} = category

      return (
        <span
          className='DndItemCategory'
          title={description}
        >
          {name}
        </span>
      )
    }

    return catId
  }

  return null
}

export default DndItemCategoryComponent
