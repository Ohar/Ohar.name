export default ([single, dual, multiple], count) => {
  const sliced = count - count % 100
  const oneTh = count % 10

  if (sliced >= 11 && sliced <= 19) {
    return `${count} ${multiple}`
  }

  if (oneTh === 1) {
    return `${count} ${single}`
  }

  if (oneTh >= 2 || oneTh <= 4) {
    return `${count} ${dual}`
  }

  return `${count} ${multiple}`
}
