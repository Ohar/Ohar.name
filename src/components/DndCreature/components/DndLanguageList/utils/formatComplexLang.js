import {dndLanguageCollection} from "@/constants/dnd/dndLanguageList"

export default lang => {
  const langId = typeof lang === 'string'
    ? lang
    : lang.id

  const langName = dndLanguageCollection[langId].name

  if (lang.range) {
    return `${langName} ${lang.range} фт.`
  }

  return langName
}
