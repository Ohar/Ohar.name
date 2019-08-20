import proschet from 'proschet';

import numberList from '@/constants/numberList'
import {dndTargetCollection} from '@/constants/dnd/dndTargetList'
import {dndSizeCollection} from '@/constants/dnd/dndSizeList'
import {GENDER_MALE} from '@/constants/genderList'

const getGoalWord = proschet(['цель', 'цели', 'целей'])

export default target => {
  if (typeof target !== 'string') {
    const targetCount = typeof target === 'object'
      ? target.count
      : target
    const numberWordObj = numberList[targetCount]

    let targetLimitText = ''
    let targetNumberText = `${numberWordObj.female} ${getGoalWord(targetCount)}`

    if (target.limit) {
      if (target.limit.type) {
        const {
          genderId,
          name: {
            singular: {
              nominative: singularWord,
              genitive: dualWord,
            },
            plural: {
              genitive: multipleWord,
            },
          },
        } = dndTargetCollection[target.limit.type]

        const getTargetTypeWord = proschet([singularWord, dualWord, multipleWord])

        targetNumberText = `${numberWordObj[genderId]} ${getTargetTypeWord(target.count)}`
      }

      if (target.limit.size) {
        if (target.limit.size.max) {
          const sizeText = dndSizeCollection[target.limit.size.max].name.singular[GENDER_MALE].genitive
          targetLimitText = ` c размером не больше ${sizeText}`
        }
      }
    }

    return `${targetNumberText}${targetLimitText}`
  }

  return target
}
