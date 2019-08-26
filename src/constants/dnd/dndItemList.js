import SEARCH_PROP_NAME from '@/constants/SEARCH_PROP_NAME'
import dndItemRawList from '@/constants/dnd/dndItemRawList'
import {dndItemCategoryCollection} from '@/constants/dnd/dndItemCategoryList'

import listToCollectionById from '@/utils/listToCollectionById'
import prepareForSearch from "@/utils/prepareForSearch"

const getCatName = catId => catId
  ? dndItemCategoryCollection[catId].name
  : ''

const dndItemList = dndItemRawList
  .map(
    item => ({
      ...item,
      weaponPropList: item.weaponPropList || [],
      [SEARCH_PROP_NAME]: prepareForSearch(
        [
          item.name,
          item.nameEn,
          item.description,
          getCatName(item.category),
          getCatName(item.subcategory),
        ]
          .filter(
            e => e,
          )
          .map(
            e => String(e).toLowerCase(),
          )
          .join(' ')
      ),
    }),
  )
  .sort(
    ({name: A}, {name: B}) => A > B ? 1 : -1
  )

export default dndItemList

export const dndItemCollection = listToCollectionById(dndItemRawList)

