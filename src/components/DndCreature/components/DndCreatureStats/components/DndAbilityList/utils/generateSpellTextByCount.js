import { dndSpellCollection } from '@/constants/dnd/dndSpellList'

export default spellIdByCountList => spellIdByCountList
  .map(
    ({limit, list}) => {
      const count = limit === Infinity
        ? 'Неограниченно'
        : ` ${limit.count}/${limit.period} каждое`

      const spellStr = list
        .map(
          item => {
            const spell = typeof item === 'string'
              ? dndSpellCollection[item]
              : dndSpellCollection[item.id]
            const {name, nameEn} = spell
            const commentText = typeof item === 'string'
              ? ''
              : ` (${item.comment})`

            return `_${name}_ (${nameEn})${commentText}`
          }
        )
        .join(', ')

      return `* ${count}: ${spellStr}`
    }
  )
  .join('\n')
