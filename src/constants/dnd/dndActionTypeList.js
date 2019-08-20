const listToCollectionById = require('./../../utils/listToCollectionById')

const ACTION_MELEE_WEAPON_ATTACK = 'melee_weapon_attack'
const ACTION_MELEE_OR_RANGE_WEAPON_ATTACK = 'melee_or_range_weapon_attack'
const ACTION_RANGE_WEAPON_ATTACK = 'range_weapon_attack'
const ACTION_MELEE_SPELL_ATTACK = 'melee_spell_attack'
const ACTION_RANGE_SPELL_ATTACK = 'range_spell_attack'
const ACTION_REACTION = 'reaction'
const ACTION_LEGENDARY = 'legendary_action'
const ACTION_LAIR = 'lair_action'

const dndActionTypeList = [
  {
    id: ACTION_MELEE_WEAPON_ATTACK,
    name: 'Рукопашная атака оружием',
  },
  {
    id: ACTION_RANGE_WEAPON_ATTACK,
    name: 'Дальнобойная атака оружием',
  },
  {
    id: ACTION_MELEE_OR_RANGE_WEAPON_ATTACK,
    name: 'Рукопашная или дальнобойная атака оружием',
  },
  {
    id: ACTION_MELEE_SPELL_ATTACK,
    name: 'Рукопашная атака заклинанием',
  },
  {
    id: ACTION_RANGE_SPELL_ATTACK,
    name: 'Дальнобойная атака заклинанием',
  },
  {
    id: ACTION_REACTION,
    name: 'Реакция',
  },
  {
    id: ACTION_LEGENDARY,
    name: 'Легендарное действие',
  },
  {
    id: ACTION_LAIR,
    name: 'Действие логова',
  },
]

module.exports = dndActionTypeList

module.exports.dndActionTypeCollection = listToCollectionById(dndActionTypeList)

module.exports.ACTION_MELEE_WEAPON_ATTACK = ACTION_MELEE_WEAPON_ATTACK
module.exports.ACTION_MELEE_OR_RANGE_WEAPON_ATTACK = ACTION_MELEE_OR_RANGE_WEAPON_ATTACK
module.exports.ACTION_RANGE_WEAPON_ATTACK = ACTION_RANGE_WEAPON_ATTACK
module.exports.ACTION_MELEE_SPELL_ATTACK = ACTION_MELEE_SPELL_ATTACK
module.exports.ACTION_RANGE_SPELL_ATTACK = ACTION_RANGE_SPELL_ATTACK
module.exports.ACTION_REACTION = ACTION_REACTION
module.exports.ACTION_LEGENDARY = ACTION_LEGENDARY
module.exports.ACTION_LAIR = ACTION_LAIR
