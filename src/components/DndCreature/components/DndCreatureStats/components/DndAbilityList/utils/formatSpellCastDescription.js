import formatBonus from '@/utils/formatBonus'

import { GENDER_FEMALE } from '@/constants/genderList'

import { dndCastComponentCollection } from '@/constants/dnd/dndCastComponentList'
import { dndParamCollection } from '@/constants/dnd/dndParamList'
import { dndPcClassCollection } from '@/constants/dnd/dndPcClassList'

import formatSpellText from './formatSpellText'
import generateExcludeComponentText from './generateExcludeComponentText'
import generateSpellText from './generateSpellText'

export default (
  {
    spellCast: {
      baseStat,
      componentExclude,
      componentInstead,
      componentOnly,
      infinitySpellIdList,
      postText = '',
      preText = '',
      saveThrowDc,
      slotCountList,
      spellAttackBonus,
      spellCasterClass,
      spellCasterLevel,
      spellIdByCountList,
      spellIdList,
    },
    genderId,
    name,
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
      ? spellCasterClass
        ? `, которому нужны только ${dndCastComponentCollection[componentOnly].name.plural.genitive} компоненты`
        : `, нуждаясь только в ${dndCastComponentCollection[componentOnly].name.plural.genitive} компонентах`
      : ``

    const spellComponentExcludeText = generateExcludeComponentText({componentExclude, componentInstead, spellCasterClass})

    const spellComponentText = spellComponentOnlyText || spellComponentExcludeText
      ? `${spellComponentOnlyText}${spellComponentExcludeText}`
      : ''

    const introText = spellCasterLevel
      ? `${name} является заклинателем ${spellCasterLevel} уровня${spellComponentText}.`
      : ''
    const baseStatText = `${genderId === GENDER_FEMALE ? 'Её' : 'Его'} базовой характеристикой является ${statName}`

    const spellCasterClassText = spellCasterClass
      ? dndPcClassCollection[spellCasterClass].name.singular.genitive
      : ''

    const infinitySpellText = infinitySpellIdList
      ? `. ${name} может неограниченно накладывать заклинания ${infinitySpellIdList.map(formatSpellText).join(', ')}`
      : ''

    const spellCastText = spellCasterClass
      ? `У ${genderId === GENDER_FEMALE ? 'неё' : 'него'}  приготовлены следующие заклинания ${spellCasterClassText}`
      : `. ${name} может накладывать следующие заклинания${spellComponentOnlyText}${spellComponentExcludeText}`

    preTextResult = `${introText} ${baseStatText}${spellAdditionalInfoText}${infinitySpellText}. ${spellCastText}:`
  }

  return `${preTextResult}
${spellText}\n
${postText}`
}
