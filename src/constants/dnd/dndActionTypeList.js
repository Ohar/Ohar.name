import listToCollectionById from '@/utils/listToCollectionById'

const dndActionTypeList = [
  {
    id: 'melee_attack',
    name: 'Рукопашная атака',
  },
  {
    id: 'range_attack',
    name: 'Дальняя атака',
  },
  {
    id: 'reaction',
    name: 'Реакция',
  },
  {
    id: 'legendary_action',
    name: 'Легендарное действие',
  },
  {
    id: 'lair_action',
    name: 'Действие логова',
  },
]

export const dndActionTypeCollection = listToCollectionById(dndActionTypeList)
