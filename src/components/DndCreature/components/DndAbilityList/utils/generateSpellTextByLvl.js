import _ from 'lodash'
import proschet from 'proschet'

import { dndSpellCollection } from '@/constants/dnd/dndSpellList'

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
          : {
            ...dndSpellCollection[item.id],
            nameEn: `${dndSpellCollection[item.id].nameEn} (${item.comment})`
          }
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
      const spellStr = list
        .map(
          ({ name, nameEn }) => `_${name}_ (${nameEn})`
        )
        .join(', ')

      return `* ${lvlText} (${countText}): ${spellStr}`
    }
  )
  .join('\n')
