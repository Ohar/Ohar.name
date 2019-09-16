import {
  MONET_COPPER,
  MONET_ELECTRUM,
  MONET_GOLD,
  MONET_PLATINUM,
  MONET_SILVER,
} from '@/constants/dnd/dndMonetTypeList'

export default [
  {
    id: '4d6x100cm_1d6x10em',
    probabilityWeight: 30,
    list: [
      {
        monetId: MONET_COPPER,
        multiplier: 100,
        dice: {
          count: 4,
          type: 6,
        },
      },
      {
        monetId: MONET_ELECTRUM,
        multiplier: 10,
        dice: {
          count: 1,
          type: 6,
        },
      },
    ],
  },
  {
    id: '6d6x10sm_2d6x10gm',
    probabilityWeight: 30,
    list: [
      {
        monetId: MONET_SILVER,
        multiplier: 10,
        dice: {
          count: 6,
          type: 6,
        },
      },
      {
        monetId: MONET_GOLD,
        multiplier: 10,
        dice: {
          count: 2,
          type: 6,
        },
      },
    ],
  },
  {
    id: '3d6x10em_2d6x10gm',
    probabilityWeight: 10,
    list: [
      {
        monetId: MONET_ELECTRUM,
        multiplier: 10,
        dice: {
          count: 3,
          type: 6,
        },
      },
      {
        monetId: MONET_GOLD,
        multiplier: 10,
        dice: {
          count: 2,
          type: 6,
        },
      },
    ],
  },
  {
    id: '4d6x10gm',
    probabilityWeight: 25,
    list: [
      {
        monetId: MONET_GOLD,
        multiplier: 10,
        dice: {
          count: 4,
          type: 6,
        },
      },
    ],
  },
  {
    id: '2d6x10gm_3d6pm',
    probabilityWeight: 5,
    list: [
      {
        monetId: MONET_GOLD,
        multiplier: 10,
        dice: {
          count: 2,
          type: 6,
        },
      },
      {
        monetId: MONET_PLATINUM,
        multiplier: 1,
        dice: {
          count: 3,
          type: 6,
        },
      },
    ],
  },
]
