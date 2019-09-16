import listToCollectionById from '@/utils/listToCollectionById'

import listTier1 from './listTier1'
import listTier2 from './listTier2'
import listTier3 from './listTier3'
import listTier4 from './listTier4'

const tierList = [
  {
    id: 'tier_1',
    name: '0–4',
    list: listTier1,
  },
  {
    id: 'tier_2',
    name: '5–10',
    list: listTier2,
  },
  {
    id: 'tier_3',
    name: '11–16',
    list: listTier3,
  },
  {
    id: 'tier_4',
    name: '17+',
    list: listTier4,
  },
]

console.log('tierList', tierList);

export const tierCollection = listToCollectionById(tierList)

export default tierList
