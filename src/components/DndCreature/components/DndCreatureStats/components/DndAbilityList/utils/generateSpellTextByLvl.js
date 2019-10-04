import _ from 'lodash'
import declint from 'declint-ru'

import { dndSpellCollection } from '@/constants/dnd/dndSpellList'

import formatSpellText from './formatSpellText'

export default (
  {
    slotCountList,
    spellIdList,
  }
) => Object
  .entries(
    _.groupBy(
      spellIdList.map(
        item => {
          const {lvl} = dndSpellCollection[item.id || item]

          return typeof item === 'string'
            ? {
              id: item,
              lvl,
            }
            : {
              ...item,
              lvl,
            }
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
        : `${count} ${declint(count, ['ячейка', 'ячейки', 'ячеек'])}`
      const spellStr = list.map(formatSpellText).join(', ')

      return `* ${lvlText} (${countText}): ${spellStr}`
    }
  )
  .join('\n')
