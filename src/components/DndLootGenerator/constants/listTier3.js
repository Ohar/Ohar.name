import React from 'react'

import {
  MONET_ELECTRUM,
  MONET_GOLD,
  MONET_PLATINUM,
  MONET_SILVER,
} from '@/constants/dnd/dndMonetTypeList'

export default [
  {
    id: '4d6x100sm_1d6x100gm',
    probabilityWeight: 20,
    list: [
      {
        monetId: MONET_SILVER,
        multiplier: 100,
        dice: {
          count: 4,
          type: 6,
        },
      },
      {
        monetId: MONET_GOLD,
        multiplier: 100,
        dice: {
          count: 1,
          type: 6,
        },
      },
    ],
  },
  {
    id: '1d6x100em_1d6x100gm',
    probabilityWeight: 15,
    list: [
      {
        monetId: MONET_ELECTRUM,
        multiplier: 100,
        dice: {
          count: 1,
          type: 6,
        },
      },
      {
        monetId: MONET_GOLD,
        multiplier: 100,
        dice: {
          count: 1,
          type: 6,
        },
      },
    ],
  },
  {
    id: '2d6x100gm_1d6x10pm',
    probabilityWeight: 40,
    list: [
      {
        monetId: MONET_GOLD,
        multiplier: 100,
        dice: {
          count: 2,
          type: 6,
        },
      },
      {
        monetId: MONET_PLATINUM,
        multiplier: 10,
        dice: {
          count: 1,
          type: 6,
        },
      },
    ],
  },
  {
    id: '2d6x100gm_2d6x10pm',
    probabilityWeight: 25,
    list: [
      {
        monetId: MONET_GOLD,
        multiplier: 100,
        dice: {
          count: 2,
          type: 6,
        },
      },
      {
        monetId: MONET_PLATINUM,
        multiplier: 10,
        dice: {
          count: 2,
          type: 6,
        },
      },
    ],
  },
]
