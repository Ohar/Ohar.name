import formatSpellText from './formatSpellText'

export default spellIdByCountList => spellIdByCountList
  .map(
    ({limit, list}) => {
      const count = limit === Infinity
        ? 'Неограниченно'
        : ` ${limit.count}/${limit.period} каждое`

      const spellStr = list
        .map(formatSpellText)
        .join(', ')

      return `* ${count}: ${spellStr}`
    }
  )
  .join('\n')
