import declint from 'declint-ru'

export default ({name, limit, comment, cost, restore}) => {
  const textList = [
    limit
      ? `${limit.count}/${limit.period}`
      : '',
    comment || '',
    cost
      ? `стоит ${cost} ${declint(cost, ['действие', 'действия', 'действий'])}`
      : '',
    restore
      ? `перезарядка ${
        restore.from === restore.to
          ? restore.from
          : `${restore.from}–${restore.to}`
      }`
      : '',
  ].filter(e => e)

  const additionalText = textList.length
    ? ` (${textList.join(', ')})`
    : ''

  return `${name}${additionalText}.`
}
