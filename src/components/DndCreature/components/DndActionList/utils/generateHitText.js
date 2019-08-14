import arrify from 'arrify';

import generateCube from '@/utils/generateCube'

import generateTextByType from './generateTextByType'

export default hit => arrify(hit)
  .map(
    hitItem => {
      if (typeof hitItem === 'object') {
        const text = generateTextByType(hitItem)
        const cube = generateCube(hitItem)
        const comment = hitItem.comment
          ? ` (${hitItem.comment})`
          : ''

        return `${text} ${cube}${comment}`
      }

      if (typeof hitItem === 'string') {
        return hitItem
      }

      return ''
    }
  )
  .join(' плюс ')
