import listToCollectionById from '@/utils/listToCollectionById'

import dndLootRawList from '@/constants/dnd/dndLootRawList'

const dndLootList = dndLootRawList.map(
  (loot, i) => ({
    ...loot,
    id: `loot_${i + 1}`,
  }),
)

export default dndLootList
export const dndLootCollection = listToCollectionById(dndLootList)
