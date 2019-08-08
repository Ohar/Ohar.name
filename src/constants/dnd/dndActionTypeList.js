import listToCollectionById from '@/utils/listToCollectionById'

export const ACTION_M_ATTACK = 'melee_attack'
export const ACTION_R_ATTACK = 'range_attack'
export const ACTION_REACTION = 'reaction'
export const ACTION_LEGENDARY = 'legendary_action'
export const ACTION_LAIR = 'lair_action'

const dndActionTypeList = [
  {
    id: ACTION_M_ATTACK,
    name: 'Рукопашная атака',
  },
  {
    id: ACTION_R_ATTACK,
    name: 'Дальняя атака',
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
