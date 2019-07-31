import columnOrderList from '../constants/columnOrderList'

const columnSorter = (a, b) => {
  const includesA = columnOrderList.includes(a)
  const includesB = columnOrderList.includes(b)

  if (includesA && !includesB) {
    return -1
  }

  if (!includesA && includesB) {
    return 1
  }

  if (includesA && includesB) {
    const indexA = columnOrderList.findIndex(e => e === a)
    const indexB = columnOrderList.findIndex(e => e === b)

    return indexA - indexB
  }

  if (!includesA && !includesB) {
    return 0
  }
}

export default columnSorter
