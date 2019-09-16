import {
  MONET_COPPER,
  MONET_ELECTRUM,
  MONET_GOLD,
  MONET_PLATINUM,
  MONET_SILVER,
} from '@/constants/dnd/dndMonetTypeList'

export default [
  {
    id: '5d6cm',
    probabilityWeight: 30,
    list: [
      {
        monetId: MONET_COPPER,
        multiplier: 1,
        dice: {
          count: 5,
          type: 6,
        },
      },
    ],
  },
  {
    id: '4d6sm',
    probabilityWeight: 30,
    list: [
      {
        monetId: MONET_SILVER,
        multiplier: 1,
        dice: {
          count: 4,
          type: 6,
        },
      },
    ],
  },
  {
    id: '3d6em',
    probabilityWeight: 10,
    list: [
      {
        monetId: MONET_ELECTRUM,
        multiplier: 1,
        dice: {
          count: 3,
          type: 6,
        },
      },
    ],
  },
  {
    id: '3d6gm',
    probabilityWeight: 25,
    list: [
      {
        monetId: MONET_GOLD,
        multiplier: 1,
        dice: {
          count: 3,
          type: 6,
        },
      },
    ],
  },
  {
    id: '1d6pm',
    probabilityWeight: 5,
    list: [
      {
        monetId: MONET_PLATINUM,
        multiplier: 1,
        dice: {
          count: 1,
          type: 6,
        },
      },
    ],
  },
]
