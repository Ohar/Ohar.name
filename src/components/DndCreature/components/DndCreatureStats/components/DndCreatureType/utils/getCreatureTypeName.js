import {dndCreatureTypeCollection} from "@/constants/dnd/dndCreatureTypeList"

export default ({id, isSwarm = false}) => {
  const quantityName = isSwarm
    ? 'plural'
    : 'singular'
  const caseName = isSwarm
    ? 'genitive'
    : 'nominative'

  return dndCreatureTypeCollection[id].name[quantityName][caseName]
}
