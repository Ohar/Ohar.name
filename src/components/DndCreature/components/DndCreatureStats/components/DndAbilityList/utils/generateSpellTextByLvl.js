import _ from 'lodash'
import proschet from 'proschet'

import { dndSpellCollection } from '@/constants/dnd/dndSpellList'

import formatSpellText from './formatSpellText'

const getSlotWord = proschet(['ячейка', 'ячейки', 'ячеек'])

export default (
  {
    slotCountList,
    spellIdList,
  }
) => Object
  .entries(
    _.groupBy(
      spellIdList.map(
        item => typeof item === 'string'
          ? dndSpellCollection[item]
          : dndSpellCollection[item.id]
      ),
      'lvl'
    )
  )
  .map(
    ([lvl, list]) => {
      const lvlText = lvl === '0'
        ? 'Заговоры'
        : `${lvl} уровень`
      const count = slotCountList[lvl] || 0
      const countText = count === Infinity
        ? 'неограниченно'
        : `${count} ${getSlotWord(count)}`
      const spellStr = list.map(formatSpellText).join(', ')

      return `* ${lvlText} (${countText}): ${spellStr}`
    }
  )
  .join('\n')
