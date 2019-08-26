import additionalColumnsCollection from './../constants/additionalColumnsCollection'

export default (list, item) => {
  const columntoAdd = additionalColumnsCollection[item]

  return columntoAdd
    ? [
      ...list,
      columntoAdd
    ]
    : list
}
