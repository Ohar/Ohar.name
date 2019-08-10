import proschet from 'proschet';

import {dndActionTypeCollection} from '@/constants/dnd/dndActionTypeList'
import {dndDamageTypeCollection} from '@/constants/dnd/dndDamageTypeList'
import numberList from '@/constants/numberList'

import generateCube from '@/utils/generateCube'

import showDigitSign from './showDigitSign'
import formatRangeText from './formatRangeText'

const getGoalWord = proschet(['цель', 'цели', 'целей'])

export default (
  {
    bonus,
    damage,
    damageType,
    range,
    targetCount,
    type,
  }
) => {
  const typeText = dndActionTypeCollection[type].name
  const dmgText = dndDamageTypeCollection[damageType].fullName
  const bonusText = showDigitSign(bonus)
  const cube = generateCube(damage)
  const targetText = `${numberList[targetCount].female} ${getGoalWord(targetCount)}`
  const rangeText = formatRangeText({type, range})

  return `
  *${typeText}*: ${bonusText} к попаданию, ${rangeText}, ${targetText}.
  *Попадание:* ${dmgText} ${cube}.
  `
}
