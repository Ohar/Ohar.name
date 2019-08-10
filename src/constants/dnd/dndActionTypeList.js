import listToCollectionById from '@/utils/listToCollectionById'

export const ACTION_MELEE_WEAPON_ATTACK = 'melee_weapon_attack'
export const ACTION_MELEE_OR_RANGE_WEAPON_ATTACK = 'melee_or_range_weapon_attack'
export const ACTION_RANGE_WEAPON_ATTACK = 'range_weapon_attack'
export const ACTION_MELEE_SPELL_ATTACK = 'melee_spell_attack'
export const ACTION_RANGE_SPELL_ATTACK = 'range_spell_attack'
export const ACTION_REACTION = 'reaction'
export const ACTION_LEGENDARY = 'legendary_action'
export const ACTION_LAIR = 'lair_action'

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

export default dndActionTypeList
export const dndActionTypeCollection = listToCollectionById(dndActionTypeList)
