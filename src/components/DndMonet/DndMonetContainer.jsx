import React from 'react'
import declint from 'declint-ru'

import {
  dndMonetCollection,
  MONET_PLATINUM,
  MONET_SILVER,
  MONET_ELECTRUM,
  MONET_GOLD,
  MONET_COPPER,
} from '@/constants/dnd/dndMonetTypeList'

import goldImg from "@/images/dnd/monets/gold.png"
import copperImg from "@/images/dnd/monets/copper.png"
import silverImg from "@/images/dnd/monets/silver.png"
import electrumImg from "@/images/dnd/monets/electrum.png"
import platinumImg from "@/images/dnd/monets/platinum.png"

import DndMonetComponent from './DndMonetComponent'

const imageCollection = {
  [MONET_GOLD]: goldImg,
  [MONET_COPPER]: copperImg,
  [MONET_SILVER]: silverImg,
  [MONET_ELECTRUM]: electrumImg,
  [MONET_PLATINUM]: platinumImg,
}

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

  const monetWord = declint(count, [singular, dual, plural])
  const title = `${count} ${monetWord}`

  return (
    <DndMonetComponent
      title={title}
      type={monetId}
      text={count}
      src={imageCollection[monetId]}
      alt={dndMonetCollection[monetId].name}
    />
  )
}

export default DndMonetContainer
