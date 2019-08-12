import formatBonus from '@/utils/formatBonus'

import { dndCastComponentCollection } from '@/constants/dnd/dndCastComponentList'
import { dndParamCollection } from '@/constants/dnd/dndParamList'
import { dndPcClassCollection } from '@/constants/dnd/dndPcClassList'

import generateSpellText from './generateSpellText'

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
    },
    isFemale,
    name
  }
) => {
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
  const spellText = generateSpellText({slotCountList, spellIdByCountList, spellIdList})

  const spellComponentOnlyText = componentOnly
    ? `, нуждаясь только в ${dndCastComponentCollection[componentOnly].name.plural.genitive} компонентах`
    : ``

  const spellComponentExcludeText = componentExclude
    ? `, не нуждаясь в ${dndCastComponentCollection[componentExclude].name.plural.genitive} компонентах`
    : ``

  const introText = spellCasterLevel
    ? `${name} является заклинателем ${spellCasterLevel} уровня.`
    : ''
  const baseStatText = `${isFemale ? 'Её' : 'Его'} базовой характеристикой является ${statName}`

  const spellCastText = spellCasterClass
    ? `У ${isFemale ? 'неё' : 'него'}  приготовлены следующие заклинания ${dndPcClassCollection[spellCasterClass].name.singular.genitive}`
    : `${name} может накладывать следующие заклинания${spellComponentOnlyText}${spellComponentExcludeText}`

  return `${introText} ${baseStatText} ${spellAdditionalInfoText}. ${spellCastText}:
${spellText}`
}
