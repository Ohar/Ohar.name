import React from 'react'

const DndAcComponent = ({ item: { acChangeTo, acUseDexMod, acDexModMax } }) => {
  const textAc = acChangeTo
  const textAddDex = acUseDexMod
    ? ' + модификатор Ловкости'
    : ''
  const textDexMax = acUseDexMod && acDexModMax
    ? ` (максимум ${acDexModMax})`
    : ''
  const title = `${textAc}${textAddDex}${textDexMax}`

  return (
    <span title={title}>
      {acChangeTo}
      {
        acUseDexMod
          ? ' + мЛов'
          : ''
      }
      {
        acUseDexMod && acDexModMax
          ? ` (${acDexModMax})`
          : ''
      }
    </span>
  )
}

export default DndAcComponent
