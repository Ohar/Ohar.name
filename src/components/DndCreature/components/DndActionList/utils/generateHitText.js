import arrify from 'arrify';

import { dndDamageTypeCollection } from '@/constants/dnd/dndDamageTypeList'

import generateCube from '@/utils/generateCube'

export default hit => arrify(hit)
  .map(
    hitItem => {
      if (typeof hitItem === 'object') {
        const text = dndDamageTypeCollection[hitItem.type].fullName
        const cube = generateCube(hitItem)

        return `${text} ${cube}`
      }

      if (typeof hitItem === 'string') {
        return hitItem
      }

      return ''
    }
  )
  .join(' плюс ')
