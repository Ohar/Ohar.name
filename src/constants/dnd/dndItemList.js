import _ from 'lodash'

import SEARCH_PROP_NAME from '@/constants/SEARCH_PROP_NAME'
import dndItemRawList from '@/constants/dnd/dndItemRawList'

import listToCollectionById from '@/utils/listToCollectionById'
import prepareForSearch from "@/utils/prepareForSearch"

const dndItemList = _.sortBy(
  dndItemRawList.map(
    item => ({
      ...item,
      [SEARCH_PROP_NAME]: prepareForSearch(
        [
          item.name,
          item.nameEn,
          item.description,
          item.category,
          item.subcategory,
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
  ),
  [
    'name',
    'description',
  ],
)

export default dndItemList

export const dndItemCollection = listToCollectionById(dndItemRawList)

