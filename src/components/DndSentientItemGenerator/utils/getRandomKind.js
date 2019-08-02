import { dndCreatureTypeCollection } from '@/constants/dnd/dndCreatureTypeList'
import { dndPcClassCollection } from '@/constants/dnd/dndPcClassList'

import kindList from './../constants/kindList'

import pickByPropability from './../utils/pickByPropability'

export default () => {
  const { id, type } = pickByPropability(kindList)

  switch (type) {
    case 'pcClass': {
      return  dndPcClassCollection[id].name
    }

    default:
    case 'creatureType': {
      return  dndCreatureTypeCollection[id].name
    }
  }
}
