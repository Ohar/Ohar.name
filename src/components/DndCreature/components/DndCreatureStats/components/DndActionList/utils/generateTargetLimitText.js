import proschet from 'proschet';

import joinText from "@/utils/joinText"

import numberList from '@/constants/numberList'
import {dndTargetCollection} from '@/constants/dnd/dndTargetList'
import {dndSizeCollection} from '@/constants/dnd/dndSizeList'
import {dndConditionCollection} from '@/constants/dnd/dndConditionList'
import {dndCreatureTypeCollection} from '@/constants/dnd/dndCreatureTypeList'
import { GENDER_FEMALE, GENDER_MALE, GENDER_MIDDLE } from '@/constants/genderList'

const getGoalWord = proschet(['цель', 'цели', 'целей'])

export default target => {
  if (typeof target !== 'string') {
    const targetCount = typeof target === 'object'
      ? target.count
      : target
    const numberWordObj = numberList[targetCount]

    let conditionText = ''
    let genderId = ''
    let limitSizeSingleText = ''
    let limitSizeMultipleText = ''
    let commentText = ''
    let numberText = numberWordObj[GENDER_FEMALE]
    let targetText = getGoalWord(targetCount)

    if (target.limit) {
      if (target.limit.type) {
        const dataObj = dndTargetCollection[target.limit.type]
        const {
          name: {
            singular: {
              nominative: singularTypeWord,
              genitive: dualTypeWord,
            },
            plural: {
              genitive: multipleTypeWord,
            },
          },
        } = dataObj
        genderId = dataObj.genderId

        const getTargetTypeWord = proschet([singularTypeWord, dualTypeWord, multipleTypeWord])

        numberText = numberWordObj[genderId]
        targetText = getTargetTypeWord(target.count)
      }

      if (target.limit.creatureType) {
        const dataObj = dndCreatureTypeCollection[target.limit.creatureType]
        const {
          name: {
            singular: {
              nominative: singularTypeWord,
              genitive: dualTypeWord,
            },
            plural: {
              genitive: multipleTypeWord,
            },
          },
        } = dndCreatureTypeCollection[target.limit.creatureType]
        genderId = dataObj.genderId

        const getTargetTypeWord = proschet([singularTypeWord, dualTypeWord, multipleTypeWord])

        numberText = numberWordObj[genderId]
        targetText = getTargetTypeWord(target.count)
      }

      if (target.limit.size) {
        const {size} = target.limit

        if (Array.isArray(size)) {
          const sizeText = joinText(
            size.map(
              sizeItem => dndSizeCollection[sizeItem].name.singular[GENDER_MIDDLE].nominative
            )
          )
          limitSizeMultipleText = ` ${sizeText}`
        }

        if (size.max) {
          const sizeText = dndSizeCollection[size.max].name.singular[GENDER_MALE].genitive
          limitSizeSingleText = ` c размером не больше ${sizeText}`
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
        } = genderId
          ? singular[genderId]
          : singular[GENDER_MALE]
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
      limitSizeMultipleText,
      targetText,
      limitSizeSingleText,
      commentText,
    ]
      .filter(e => e)
      .join(' ')
  }

  return target
}
