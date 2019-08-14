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
      range,
      target,
      type,
    } = action

    const typeText = dndActionTypeCollection[type].name
    const hitText = generateHitText(hit)
    const bonusText = showDigitSign(bonus)
    const targetText = generateTargetLimitText(target)
    const rangeText = formatRangeText({type, range})

    return `
*${typeText}*: ${bonusText} к попаданию, ${rangeText}, ${targetText}.
*Попадание:* ${hitText}.`
  }

  return ''
}
