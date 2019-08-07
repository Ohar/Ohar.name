import listToCollectionById from '@/utils/listToCollectionById'

export const SPEED_CRAWL = 'crawl'
export const SPEED_DIG = 'dig'
export const SPEED_FLY = 'fly'
export const SPEED_SWIM = 'swim'
export const SPEED_WALK = 'walk'

const dndSpeedList = [
  {
    id: SPEED_CRAWL,
    name: 'лазая',
  },
  {
    id: SPEED_DIG,
    name: 'копая',
  },
  {
    id: SPEED_FLY,
    name: 'летая',
  },
  {
    id: SPEED_SWIM,
    name: 'плавая',
  },
  {
    id: SPEED_WALK,
    name: '',
  },
]

export default dndSpeedList

export const dndSpeedCollection = listToCollectionById(dndSpeedList)
