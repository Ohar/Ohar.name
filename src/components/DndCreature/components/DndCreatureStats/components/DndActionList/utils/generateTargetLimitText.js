import proschet from 'proschet';

import numberList from '@/constants/numberList'
import {dndTargetCollection} from '@/constants/dnd/dndTargetList'
import {dndSizeCollection} from '@/constants/dnd/dndSizeList'
import {dndConditionCollection} from '@/constants/dnd/dndConditionList'
import {GENDER_FEMALE, GENDER_MALE} from '@/constants/genderList'

const getGoalWord = proschet(['цель', 'цели', 'целей'])

export default target => {
  if (typeof target !== 'string') {
    const targetCount = typeof target === 'object'
      ? target.count
      : target
    const numberWordObj = numberList[targetCount]

    let conditionText = ''
    let limitText = ''
    let commentText = ''
    let numberText = numberWordObj[GENDER_FEMALE]
    let targetText = getGoalWord(targetCount)

    if (target.limit) {
      const {
        genderId,
        name: {
          singular: {
            nominative: singularTypeWord,
            genitive: dualTypeWord,
          },
          plural: {
            genitive: multipleTypeWord,
          },
        },
      } = dndTargetCollection[target.limit.type]

      const getTargetTypeWord = proschet([singularTypeWord, dualTypeWord, multipleTypeWord])

      numberText = numberWordObj[genderId]
      targetText = getTargetTypeWord(target.count)

      if (target.limit.size) {
        if (target.limit.size.max) {
          const sizeText = dndSizeCollection[target.limit.size.max].name.singular[GENDER_MALE].genitive
          limitText = ` c размером не больше ${sizeText}`
        }
      }

      if (target.limit.condition) {
        const {
          singular,
          plural,
        } = dndConditionCollection[target.limit.condition].targetName
        const {
          nominative: singularConditionWord,
          genitive: dualConditionWord,
        } = singular[genderId]
        const {
          genitive: multipleConditionWord,
        } = plural

        const getConditionWord = proschet([singularConditionWord, dualConditionWord, multipleConditionWord])
        conditionText = getConditionWord(target.count)
      }
    }

    if (target.comment) {
      commentText = target.comment
    }

    return [
      numberText,
      conditionText,
      targetText,
      limitText,
      commentText,
    ]
      .filter(e => e)
      .join(' ')
  }

  return target
}
