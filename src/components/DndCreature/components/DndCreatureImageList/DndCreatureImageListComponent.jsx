import React from 'react'
import PropTypes from 'prop-types'

import './DndCreatureImageListStyles.less'

const DndCreatureImageListComponent = ({ list }) => (
  <>
    {
      list.map(
        ({src, text}) => (
          <img
            className='DndCreatureImage'
            src={src}
            key={src}
            alt={text}
            title={text}
          />
        )
      )
    }
  </>
)

DndCreatureImageListComponent.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
}

export default DndCreatureImageListComponent
