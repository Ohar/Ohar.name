import arrify from 'arrify';

import generateCube from '@/utils/generateCube'

import generateTextByType from './generateTextByType'

const generateHitItemText = hit => {
  const text = generateTextByType(hit)
  const cube = generateCube(hit)
  const comment = hit.comment || ''

  return `${text} ${cube}${comment}`
}

export default hit => arrify(hit)
  .map(
    hitItem => {
      if (Array.isArray(hitItem)) {
        return hitItem
          .map(generateHitItemText)
          .join(' или ')
      }

      if (typeof hitItem === 'object') {
        return generateHitItemText(hitItem)
      }

      if (typeof hitItem === 'string') {
        return hitItem
      }

      return ''
    }
  )
  .join(' плюс ')
