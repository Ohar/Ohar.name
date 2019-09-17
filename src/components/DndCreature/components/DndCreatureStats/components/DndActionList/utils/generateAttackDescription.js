import {dndActionTypeCollection} from '@/constants/dnd/dndActionTypeList'

import generateHitText from './generateHitText'
import generateTargetLimitText from './generateTargetLimitText'
import formatRangeText from './formatRangeText'
import showDigitSign from './showDigitSign'

export default action => {
  if (action) {
    const {
      bonus,
      hit,
      miss,
      range,
      target,
      type,
    } = action

    const typeText = dndActionTypeCollection[type].name
    const hitText = generateHitText(hit)
    const missText = generateHitText(miss)
    const bonusText = showDigitSign(bonus)
    const targetText = generateTargetLimitText(target)
    const rangeText = formatRangeText({type, range})

    const missFullText = missText
      ? ` *Промах:* ${missText}.`
      : ''

    return `
*${typeText}*: ${bonusText} к попаданию, ${rangeText}, ${targetText}.
*Попадание:* ${hitText}.${missFullText}`
  }

  return ''
}
