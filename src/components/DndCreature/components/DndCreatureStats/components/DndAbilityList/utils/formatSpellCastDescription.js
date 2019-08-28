import formatBonus from '@/utils/formatBonus'

import { dndCastComponentCollection, CAST_NONE } from '@/constants/dnd/dndCastComponentList'
import { dndParamCollection } from '@/constants/dnd/dndParamList'
import { dndPcClassCollection } from '@/constants/dnd/dndPcClassList'

import generateSpellText from './generateSpellText'

const generateExcludeComponentText = componentExclude => {
  if (componentExclude) {
    if (componentExclude === CAST_NONE) {
      return `, не нуждаясь ни в каких компонентах`
    }

    const componentName = dndCastComponentCollection[componentExclude].name.plural.genitive

    return `, не нуждаясь в ${componentName} компонентах`
  }

  return ''
}

export default (
  {
    spellCast: {
      baseStat,
      componentOnly,
      componentExclude,
      saveThrowDc,
      slotCountList,
      spellAttackBonus,
      spellCasterClass,
      spellCasterLevel,
      spellIdByCountList,
      spellIdList,
      preText = '',
      postText = '',
    },
    isFemale,
    name
  }
) => {
  const spellText = generateSpellText({slotCountList, spellIdByCountList, spellIdList})
  let preTextResult = preText

  if (!preText) {
    const statName = dndParamCollection[baseStat].name
    const bonusText = spellAttackBonus
      ? `, ${formatBonus(spellAttackBonus)} к попаданию атаками заклинаниями`
      : ''
    const saveThrowDcText = saveThrowDc
      ? `Сл спасброска от заклинания ${saveThrowDc}`
      : ''
    const spellAdditionalInfoText = saveThrowDcText || bonusText
      ? ` (${saveThrowDcText}${bonusText})`
      : ''

    const spellComponentOnlyText = componentOnly
      ? `, нуждаясь только в ${dndCastComponentCollection[componentOnly].name.plural.genitive} компонентах`
      : ``

    const spellComponentExcludeText = generateExcludeComponentText(componentExclude)

    const introText = spellCasterLevel
      ? `${name} является заклинателем ${spellCasterLevel} уровня.`
      : ''
    const baseStatText = `${isFemale ? 'Её' : 'Его'} базовой характеристикой является ${statName}`

    const spellCastText = spellCasterClass
      ? `У ${isFemale ? 'неё' : 'него'}  приготовлены следующие заклинания ${dndPcClassCollection[spellCasterClass].name.singular.genitive}`
      : `${name} может накладывать следующие заклинания${spellComponentOnlyText}${spellComponentExcludeText}`

    preTextResult = `${introText} ${baseStatText}${spellAdditionalInfoText}. ${spellCastText}:`
  }

  return `${preTextResult}
${spellText}\n
${postText}`
}
