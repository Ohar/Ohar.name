import listToCollectionById from '@/utils/listToCollectionById'

const dndSpeedList = [
  {
    id: 'walk',
    name: '',
  },
  {
    id: 'fly',
    name: 'летая',
  },
  {
    id: 'swim',
    name: 'плавая',
  },
  {
    id: 'dig',
    name: 'копая',
  },
  {
    id: 'crawl',
    name: 'лазая',
  },
]

export const dndSpeedCollection = listToCollectionById(dndSpeedList)
