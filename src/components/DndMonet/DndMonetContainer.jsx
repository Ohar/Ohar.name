import React from 'react'
import proschet from 'proschet'

import { dndMonetCollection } from '@/constants/dnd/dndMonetTypeList'

import DndMonetComponent from './DndMonetComponent'

const DndMonetContainer = ({ count, type: monetId }) => {
  const {
    fullName: {
      singular: {
        nominative: singular,
      },
      dual: {
        nominative: dual,
      },
      plural: {
        nominative: plural,
      },
    },
  } = dndMonetCollection[monetId]

  const getMonetWord = proschet([singular, dual, plural])
  const monetWord = getMonetWord(count)
  const title = `${count} ${monetWord}`

  return (
    <DndMonetComponent
      title={title}
      type={monetId}
      text={count}
    />
  )
}

export default DndMonetContainer
