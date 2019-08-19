import {dndLanguageCollection} from "@/constants/dnd/dndLanguageList"

export default lang => {
  const langId = typeof lang === 'string'
    ? lang
    : lang.id

  const langName = dndLanguageCollection[langId].name

  const rangeText = lang.range
    ? ` ${lang.range} фт.`
    : ''
  const doNotSpeakText1st = lang.doNotSpeak
    ? `понимает `
    : ''
  const doNotSpeakText2nd = lang.doNotSpeak
    ? `, но не говорит на нём`
    : ''
  const commentText = lang.comment
    ? ` (${lang.comment})`
    : ''

  return `${doNotSpeakText1st}${langName}${rangeText}${doNotSpeakText2nd}${commentText}`
}
