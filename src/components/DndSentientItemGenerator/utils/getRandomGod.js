import { dndGodCollection } from '@/constants/dnd/dndGodList'

import pickByPropability from './../utils/pickByPropability'

import godList from './../constants/godList'

export default () => {
  const godId = pickByPropability(godList).id
  const god = dndGodCollection[godId]

  return god.name
}
