import { dndSpellCollection } from '@/constants/dnd/dndSpellList'

export default spellIdByCountList => spellIdByCountList
  .map(
    ({limit, list}) => {
      const count = limit === Infinity
        ? 'Неограниченно'
        : ` ${limit.count}/${limit.period} каждое`

      const spellStr = list
        .map(
          id => {
            const {name, nameEn} = dndSpellCollection[id]

            return `_${name}_ (${nameEn})`
          }
        )
        .join(', ')

      return `* ${count}: ${spellStr}`
    }
  )
  .join('\n')
