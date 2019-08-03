import creatureTypeList from './creatureTypeList'
import pcClassList from './pcClassList'

export default [
  ...creatureTypeList.map(
    item => ({
      ...item,
      type: 'creatureType',
    })
  ),
  ...pcClassList.map(
    item => ({
      ...item,
      type: 'pcClass',
    })
  ),
]
