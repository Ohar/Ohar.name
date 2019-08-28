import arrify from "arrify"

import {dndLanguageCollection} from "@/constants/dnd/dndLanguageList"

export default lang => {
  const langIdList = arrify(
    typeof lang === 'string'
    ? lang
    : lang.id
  )

  const langList = langIdList.map(
    langId => dndLanguageCollection[langId].name[
      lang.doNotSpeak
        ? 'instrumental'
        : 'nominative'
    ]
  )

  const name = langList.length === 1
    ? langList[0]
    : [
      langList
        .slice(0, -1)
        .join(', '),
      langList.slice(-1)[0],
    ]
      .join(' и ')

  const pronoun = langIdList.length === 1
    ? langList[0].isFemale ? 'ней' : 'нём'
    : 'них'

  const rangeText = lang.range
    ? ` ${lang.range} фт.`
    : ''
  const doNotSpeakText1st = lang.doNotSpeak || lang.featureName
    ? `понимает `
    : ''
  const doNotSpeakText2nd = lang.doNotSpeak
    ? `, но не говорит на ${pronoun}`
    : ''
  const commentText = lang.comment
    ? ` (${lang.comment})`
    : ''
  const featureText = lang.featureName
    ? `, но говорит только с помощью особенности ${lang.featureName}`
    : ''

  return `${doNotSpeakText1st}${name}${rangeText}${doNotSpeakText2nd}${featureText}${commentText}`
}
