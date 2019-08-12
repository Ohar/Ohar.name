import _ from 'lodash'
import proschet from 'proschet'

import formatBonus from '@/utils/formatBonus'

import { dndCastComponentCollection } from '@/constants/dnd/dndCastComponentList'
import { dndParamCollection } from '@/constants/dnd/dndParamList'
import { dndPcClassCollection } from '@/constants/dnd/dndPcClassList'
import { dndSpellCollection } from '@/constants/dnd/dndSpellList'

const getSlotWord = proschet(['ячейка', 'ячейки', 'ячеек'])

export default (
  {
    spellCast: {
      baseStat,
      componentOnly,
      isInnerSpellCasting,
      limitByDay,
      saveThrowDc,
      slotCountList,
      spellAttackBonus,
      spellCasterClass,
      spellCasterLevel,
      spellIdList
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
  const spellList = spellIdList.map(id => dndSpellCollection[id])
  const spellText = Object
    .entries(_.groupBy(spellList, 'lvl'))
    .map(
      ([lvl, list]) => {
        const lvlText = lvl === '0'
          ? 'Заговоры'
          : `${lvl} уровень`
        const count = slotCountList[lvl] || 0
        const unitText = limitByDay
          ? '/день каждое'
          : ` ${getSlotWord(count)}`
        const countText = count === Infinity
          ? 'неограниченно'
          : `${count}${unitText}`
        const spellStr = list
          .map(
            ({ name, nameEn }) => `_${name}_ (${nameEn})`
          )
          .join(', ')
        const headText = isInnerSpellCasting
          ? ` ${countText}`
          : ` ${lvlText} (${countText})`

        return `* ${headText}: ${spellStr}`
      }
    )
    .join('\n')

  const spellComponentText = componentOnly
    ? `, нуждаясь только в ${dndCastComponentCollection[componentOnly].name.plural.genitive} компонентах`
    : ``

  const introText = spellCasterLevel
    ? `${name} является заклинателем ${spellCasterLevel} уровня.`
    : ''
  const baseStatText = `${isFemale ? 'Её' : 'Его'} базовой характеристикой является ${statName}`

  const spellCastText = spellCasterClass
    ? `У ${isFemale ? 'неё' : 'него'}  приготовлены следующие заклинания ${dndPcClassCollection[spellCasterClass].name.singular.genitive}`
    : `${name} может накладывать следующие заклинания${spellComponentText}`

  return `${introText} ${baseStatText} ${spellAdditionalInfoText}. ${spellCastText}:
${spellText}`
}
