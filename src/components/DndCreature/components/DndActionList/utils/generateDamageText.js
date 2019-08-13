import arrify from 'arrify';

import { dndDamageTypeCollection } from '@/constants/dnd/dndDamageTypeList'

import generateCube from '@/utils/generateCube'

export default damage => arrify(damage)
  .map(
    dmgItem => {
      const text = dndDamageTypeCollection[dmgItem.type].fullName
      const cube = generateCube(dmgItem)

      return `${text} ${cube}`
    }
  )
  .join(' плюс ')
