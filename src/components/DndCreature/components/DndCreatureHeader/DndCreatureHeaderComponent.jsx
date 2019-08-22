import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

import generateCreaturePageUrlById from '@/utils/generateCreaturePageUrlById'

import './DndCreatureHeaderStyles.less'

const DndCreatureHeaderComponent = ({ id, title, header }) => {
  const url = generateCreaturePageUrlById(id)
  const pathname = typeof window === 'undefined'
    ? ''
    : window.location.pathname

  return url === pathname
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

DndCreatureHeaderComponent.propTypes = {
  header: PropTypes.string,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
}

DndCreatureHeaderComponent.defaultProps = {
  header: '',
  title: '',
}

export default DndCreatureHeaderComponent
