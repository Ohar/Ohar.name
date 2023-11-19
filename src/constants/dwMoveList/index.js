import commonMoveList from './list/common'
import druidMoveList from './list/druid'
import inventorMoveList from './list/inventor'
import sorcererMoveList from './list/sorcerer'
import thiefMoveList from './list/thief'
import warriorMoveList from './list/warrior'

const dwMoveList = [
    ...commonMoveList,
    ...druidMoveList,
    ...inventorMoveList,
    ...sorcererMoveList,
    ...thiefMoveList,
    ...warriorMoveList,
]
  .sort(
    ({ name: A }, { name: B }) => A === B ? 0 : A > B ? 1 : -1
  )

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
