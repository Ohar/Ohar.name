import React from "react"
import proschet from 'proschet'

const getActionWord = proschet(['действие', 'действия', 'действий'])

export default ({name, limit, comment, cost, restore}) => {
  const textList = [
    limit
      ? `${limit.count}/${limit.period}`
      : '',
    comment || '',
    cost
      ? `стоит ${cost} ${getActionWord(cost)}`
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
