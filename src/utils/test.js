const { ACTION_MELEE_WEAPON_ATTACK, ACTION_RANGE_WEAPON_ATTACK } = require('./../constants/dnd/dndActionTypeList')
const { DAMAGE_BLUDGEONING, DAMAGE_PIERCING, DAMAGE_POISON, DAMAGE_SLASHING } = require('./../constants/dnd/dndDamageTypeList')
const { TARGET_CREATURE } = require('./../constants/dnd/dndTargetList')

const filterData = require('./filterData')

const filters = {
  actionList: [
    {
      name: 'Мультиатака',
    },
    {
      attack: {
        type: [
          ACTION_MELEE_WEAPON_ATTACK,
        ],
        hit: {
          type: [
            DAMAGE_BLUDGEONING,
            DAMAGE_SLASHING,
            DAMAGE_PIERCING,
          ],
        },
      },
    },
  ],
}

const data = {
  actionList: [
    {
      name: 'Мультиатака',
    },
    {
      name: 'Укус',
      attack: {
        type: ACTION_MELEE_WEAPON_ATTACK,
        bonus: 6,
        range: 5,
        target: {
          count: 1,
          limit: {
            type: TARGET_CREATURE,
          },
        },
        hit: [
          {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 4,
          },
          {
            type: DAMAGE_POISON,
            cubeCount: 2,
            cubeType: 8,
          },
        ],
      },
    },
    {
      name: 'Длинный меч',
      attack: {
        type: ACTION_MELEE_WEAPON_ATTACK,
        bonus: 6,
        range: 5,
        target: 1,
        hit: [
          [
            {
              type: DAMAGE_SLASHING,
              cubeCount: 1,
              cubeType: 8,
              cubeBonus: 3,
            },
            {
              type: DAMAGE_SLASHING,
              cubeCount: 1,
              cubeType: 10,
              cubeBonus: 3,
              comment: ', если используется двумя руками',
            },
          ],
        ],
      },
    },
    {
      name: 'Длинный лук',
      attack: {
        type: ACTION_RANGE_WEAPON_ATTACK,
        bonus: 6,
        range: {
          normal: 150,
          max: 600,
        },
        target: 1,
        hit: [
          {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 8,
            cubeBonus: 3,
          },
          {
            type: DAMAGE_POISON,
            cubeCount: 1,
            cubeType: 8,
          },
        ],
      },
    },
  ],
}

const result = filterData({filters, data})

console.log('result', JSON.stringify(result));
