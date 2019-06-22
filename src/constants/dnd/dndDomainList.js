import listToCollectionById from '@/utils/listToCollectionById'

const dndDomainList = [
  {
    id: 'none',
    name: 'Нет жрецов',
  },
  {
    id: 'knowledge',
    name: 'Знание',
  },
  {
    id: 'storm',
    name: 'Буря',
  },
  {
    id: 'death',
    name: 'Смерть',
  },
  {
    id: 'trick',
    name: 'Обман',
  },
  {
    id: 'war',
    name: 'Война',
  },
  {
    id: 'life',
    name: 'Жизнь',
  },
  {
    id: 'light',
    name: 'Свет',
  },
  {
    id: 'nature',
    name: 'Природа',
  },
]

export const dndDomainCollection = listToCollectionById(dndDomainList)
