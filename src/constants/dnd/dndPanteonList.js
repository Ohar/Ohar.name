import listToCollectionById from '@/utils/listToCollectionById'

const dndPanteonList = [
  {
    id: 'forgotten-realms',
    name: 'Пантеон Забытых Королевств',
  },
  {
    id: 'eberron',
    name: 'Пантеон Эберрона',
  },
  {
    id: 'grey-hawk',
    name: 'Пантеон Серого Ястреба',
  },
  {
    id: 'spear-saga',
    name: 'Пантеон Саги о Копье',
  },
  {
    id: 'non-human',
    name: 'Нечеловеческие божества',
  },
  {
    id: 'celtic',
    name: 'Кельтские боги',
  },
  {
    id: 'greek',
    name: 'Греческие боги',
  },
  {
    id: 'scandinavian',
    name: 'Скандинавские боги',
  },
  {
    id: 'egypt',
    name: 'Египетские боги',
  },
]

export const dndPanteonCollection = listToCollectionById(dndPanteonList)
