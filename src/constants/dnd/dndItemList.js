import SEARCH_PROP_NAME from '@/constants/SEARCH_PROP_NAME'
import dndItemRawList from '@/constants/dnd/dndItemRawList'
import {dndItemCategoryCollection} from '@/constants/dnd/dndItemCategoryList'
import {dndWeaponPropCollection} from '@/constants/dnd/dndWeaponPropList'

import listToCollectionById from '@/utils/listToCollectionById'
import prepareForSearch from "@/utils/prepareForSearch"

const getCatName = catId => catId
  ? dndItemCategoryCollection[catId].name
  : ''

const generateWeaponPropNameString = list => list
  .map(
    item => dndWeaponPropCollection[item.id || item].name
  )
  .join(' ')

const dndItemList = dndItemRawList
  .map(
    item => ({
      ...item,
      [SEARCH_PROP_NAME]: prepareForSearch(
        [
          item.name,
          item.nameAlt || '',
          item.nameEn,
          item.description,
          getCatName(item.category),
          getCatName(item.subcategory),
          generateWeaponPropNameString(item.weaponPropList || []),
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

