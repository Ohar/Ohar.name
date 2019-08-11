import _ from 'lodash'
import proschet from 'proschet'

import formatBonus from '@/utils/formatBonus'

import { dndParamCollection } from '@/constants/dnd/dndParamList'
import { dndPcClassCollection } from '@/constants/dnd/dndPcClassList'
import { dndSpellCollection } from '@/constants/dnd/dndSpellList'

const getSlotWord = proschet(['ячейка', 'ячейки', 'ячеек'])

export default (
  {
    spellCast: {
      baseStat,
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
  const bonusText = formatBonus(spellAttackBonus)
  const className = dndPcClassCollection[spellCasterClass].name.singular.genitive
  const spellList = spellIdList.map(id => dndSpellCollection[id])
  const spellText = Object
    .entries(_.groupBy(spellList, 'lvl'))
    .map(
      ([lvl, list]) => {
        const lvlText = lvl === '0'
          ? 'Заговоры'
          : `${lvl} уровень`
        const count = slotCountList[lvl] || 0
        const countText = count === Infinity
          ? '(неограниченно)'
          : `(${count} ${getSlotWord(count)})`
        const spellStr = list
          .map(
            ({ name, nameEn }) => `_${name}_ (${nameEn})`
          )
          .join(', ')

        return `* ${lvlText} ${countText}: ${spellStr}`
      }
    )
    .join('\n')

  return `${name} является заклинателем ${spellCasterLevel} уровня. ${isFemale ? 'Её' : 'Его'} базовой характеристикой является ${statName} (Сл спасброска от заклинания ${saveThrowDc}, ${bonusText} к попаданию атаками заклинаниями). У ${isFemale ? 'неё' : 'него'}  приготовлены следующие заклинания ${className}:
${spellText}`
}
