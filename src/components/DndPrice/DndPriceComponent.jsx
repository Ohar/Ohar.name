import React from 'react'
import PropTypes from 'prop-types'

import DndMonet from '@/components/DndMonet'

const DndPriceComponent = ({ monetList }) => (
  <section className='DndPrice'>
    {
      monetList
        .filter(({ monet }) => monet)
        .map(
          ({ type, monet }, i) => (
            <DndMonet
              key={i}
              count={monet}
              type={type}
            />
          )
        )
    }
  </section>
)

DndPriceComponent.propTypes = {
  monetList: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    monet: PropTypes.number,
  })).isRequired,
}

export default DndPriceComponent
