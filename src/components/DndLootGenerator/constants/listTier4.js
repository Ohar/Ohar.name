import React from 'react'

import {
  dndMonetCollection,
  MONET_COPPER,
  MONET_ELECTRUM,
  MONET_GOLD,
  MONET_PLATINUM,
  MONET_SILVER,
} from '@/constants/dnd/dndMonetTypeList'

import addGenerateDescription from './../utils/addGenerateDescription'

export default [
  {
    id: '2d6x1000em_8d6x100gm',
    probabilityWeight: 15,
    list: [
      {
        monetId: MONET_ELECTRUM,
        multiplier: 1000,
        dice: {
          count: 2,
          type: 6,
        },
      },
      {
        monetId: MONET_GOLD,
        multiplier: 100,
        dice: {
          count: 8,
          type: 6,
        },
      },
    ],
  },
  {
    id: '1d6x1000gm_1d6x100pm',
    probabilityWeight: 40,
    list: [
      {
        monetId: MONET_GOLD,
        multiplier: 1000,
        dice: {
          count: 1,
          type: 6,
        },
      },
      {
        monetId: MONET_PLATINUM,
        multiplier: 100,
        dice: {
          count: 1,
          type: 6,
        },
      },
    ],
  },
  {
    id: '1d6x1000gm_2d6x100pm',
    probabilityWeight: 45,
    list: [
      {
        monetId: MONET_GOLD,
        multiplier: 1000,
        dice: {
          count: 1,
          type: 6,
        },
      },
      {
        monetId: MONET_PLATINUM,
        multiplier: 100,
        dice: {
          count: 2,
          type: 6,
        },
      },
    ],
  },
]
  .map(addGenerateDescription)
