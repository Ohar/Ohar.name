import sortByName from '@/utils/sortByName'

import commonMoveList from './list/common'
import druidMoveList from './list/druid'
import dwarfMoveList from './list/dwarf'
import incineratorMoveList from './list/incinerator'
import inventorMoveList from './list/inventor'
import nobleMoveList from './list/noble'
import rangerMoveList from './list/ranger'
import savageMoveList from './list/savage'
import shortyMoveList from './list/shorty'
import sorcererMoveList from './list/sorcerer'
import thiefMoveList from './list/thief'
import warlockMoveList from './list/warlock'
import warriorMoveList from './list/warrior'

const dwMoveList = [
    ...commonMoveList,
    ...druidMoveList,
    ...dwarfMoveList,
    ...incineratorMoveList,
    ...inventorMoveList,
    ...nobleMoveList,
    ...rangerMoveList,
    ...savageMoveList,
    ...shortyMoveList,
    ...sorcererMoveList,
    ...thiefMoveList,
    ...warlockMoveList,
    ...warriorMoveList,
]
  .sort(sortByName)

export default dwMoveList

export const commonMoveIdList = commonMoveList.map(({ id }) => id)
export const dwMoveCollection = dwMoveList.reduce(
  (collection, item) => ({
    ...collection,
    [item.id]: item,
  }),
  {}
)
export const dwMoveListByClassIdCollection = dwMoveList.reduce(
  (collection, item) => ({
    ...collection,
    [item.classId]: collection[item.classId]
      ? [
        ...collection[item.classId],
        item,
      ]
      : [item],
  }),
  {}
)
