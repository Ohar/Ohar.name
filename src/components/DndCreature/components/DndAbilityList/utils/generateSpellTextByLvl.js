import _ from 'lodash'
import proschet from 'proschet'

const getSlotWord = proschet(['ячейка', 'ячейки', 'ячеек'])

export default (
  {
    slotCountList,
    spellList,
  }
) => Object
  .entries(_.groupBy(spellList, 'lvl'))
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
