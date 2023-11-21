import React from 'react'

import DwQuote from '@/components/DwQuote'

import './DwMoveStyles.less'

const DwMoveComponent = ({id, name, text, quote = null}) => (
  <section
    className={`DwMove DwMove-${id}`}
    id={id}
  >
    <header className='DwMove__title'>{name}</header>
    <div className='DwMove__text'>{text}</div>

    {quote ? (
      <DwQuote author={quote.author}>
        {quote.text}
      </DwQuote>
    ) : null}
  </section>
)

export default DwMoveComponent
