import { dndDamageTypeCollection } from '@/constants/dnd/dndDamageTypeList'

import generateCube from '@/utils/generateCube'

export default damage => {
  const list = Array.isArray(damage)
    ? damage
    : [damage]

  return list
    .map(
      dmgItem => {
        const text = dndDamageTypeCollection[dmgItem.type].fullName
        const cube = generateCube(dmgItem)

        return `${text} ${cube}`
      }
    )
    .join(' плюс ')
}
