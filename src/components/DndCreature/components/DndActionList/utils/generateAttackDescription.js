import {dndActionTypeCollection} from '@/constants/dnd/dndActionTypeList'

import generateDamageText from './generateDamageText'
import generateTargetLimitText from './generateTargetLimitText'
import formatRangeText from './formatRangeText'
import showDigitSign from './showDigitSign'

export default action => {
  if (action) {
    const {
      bonus,
      damage,
      range,
      target,
      type,
    } = action

    const typeText = dndActionTypeCollection[type].name
    const dmgText = generateDamageText(damage)
    const bonusText = showDigitSign(bonus)
    const targetText = generateTargetLimitText(target)
    const rangeText = formatRangeText({type, range})

    return `
*${typeText}*: ${bonusText} к попаданию, ${rangeText}, ${targetText}.
*Попадание:* ${dmgText}.`
  }

  return ''
}
