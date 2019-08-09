import proschet from 'proschet';

import {ACTION_RANGE_WEAPON_ATTACK, dndActionTypeCollection} from '@/constants/dnd/dndActionTypeList'
import {dndDamageTypeCollection} from '@/constants/dnd/dndDamageTypeList'
import numberList from '@/constants/numberList'

import generateCube from '@/utils/generateCube'

import showDigitSign from './showDigitSign'

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
  const rangeText = type === ACTION_RANGE_WEAPON_ATTACK
    ? `дистанция ${range.normal} фт./${range.max} фт.`
    : `досягаемость ${range} фт.`

  return `
  *${typeText}*: ${bonusText} к попаданию, ${rangeText}, ${targetText}.
  *Попадание:* ${dmgText} ${cube}.
  `
}
