import proschet from 'proschet';

import {dndActionTypeCollection} from '@/constants/dnd/dndActionTypeList'
import numberList from '@/constants/numberList'

import generateDamageText from './generateDamageText'
import formatRangeText from './formatRangeText'
import showDigitSign from './showDigitSign'

const getGoalWord = proschet(['цель', 'цели', 'целей'])

export default action => {
  if (action) {
    const {
      bonus,
      damage,
      range,
      targetCount,
      type,
    } = action

    const typeText = dndActionTypeCollection[type].name
    const dmgText = generateDamageText(damage)
    const bonusText = showDigitSign(bonus)
    const targetText = `${numberList[targetCount].female} ${getGoalWord(targetCount)}`
    const rangeText = formatRangeText({type, range})

    return `
*${typeText}*: ${bonusText} к попаданию, ${rangeText}, ${targetText}.
*Попадание:* ${dmgText}.`
  }

  return ''
}
