import listToCollectionById from '@/utils/listToCollectionById'

export const SIZE_TINY = 'tiny'
export const SIZE_SMALL = 'small'
export const SIZE_MEDIUM = 'medium'
export const SIZE_LARGE = 'large'
export const SIZE_HUGE = 'huge'
export const SIZE_GARGANTUA = 'gargantua'

const dndSizeList = [
  {
    id: SIZE_TINY,
    name: 'Крошечный',
  },
  {
    id: SIZE_SMALL,
    name: 'Маленький',
  },
  {
    id: SIZE_MEDIUM,
    name: 'Средний',
  },
  {
    id: SIZE_LARGE,
    name: 'Большой',
  },
  {
    id: SIZE_HUGE,
    name: 'Огромный',
  },
  {
    id: SIZE_GARGANTUA,
    name: 'Громадный',
  },
]

export default dndSizeList

export const dndSizeCollection = listToCollectionById(dndSizeList)
