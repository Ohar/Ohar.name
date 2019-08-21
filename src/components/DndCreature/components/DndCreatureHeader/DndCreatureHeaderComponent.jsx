import React from 'react'
import { Link } from 'gatsby'

import generateCreaturePageUrlById from '@/utils/generateCreaturePageUrlById'

import './DndCreatureHeaderStyles.less'

const DndCreatureHeaderComponent = ({ id, title, header }) => {
  const url = generateCreaturePageUrlById(id)

  return url === window.location.pathname
    ? (
      <Link
        to={url}
        className='DndCreatureHeader'
        title={title}
      >
        {header}
      </Link>
    )
    : (
      <span
        className='DndCreatureHeader'
        title={title}
      >
        {header}
      </span>
    )
}

export default DndCreatureHeaderComponent
