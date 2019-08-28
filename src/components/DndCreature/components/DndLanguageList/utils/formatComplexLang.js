import arrify from "arrify"

import {dndLanguageCollection} from "@/constants/dnd/dndLanguageList"

export default lang => {
  const langIdList = arrify(
    typeof lang === 'string'
    ? lang
    : lang.id
  )

  const langList = langIdList.map(
    langId => dndLanguageCollection[langId]
  )

  const name = langList.length === 1
    ? langList[0].name
    : [
      langList
        .slice(0, -1)
        .map(({ name}) => name)
        .join(', '),
      langList.slice(-1)[0].name,
    ]
      .join(' и ')

  const pronoun = langIdList.length === 1
    ? langList[0].isFemale ? 'ней' : 'нём'
    : 'них'

  const rangeText = lang.range
    ? ` ${lang.range} фт.`
    : ''
  const doNotSpeakText1st = lang.doNotSpeak
    ? `понимает `
    : ''
  const doNotSpeakText2nd = lang.doNotSpeak
    ? `, но не говорит на ${pronoun}`
    : ''
  const commentText = lang.comment
    ? ` (${lang.comment})`
    : ''

  return `${doNotSpeakText1st}${name}${rangeText}${doNotSpeakText2nd}${commentText}`
}
