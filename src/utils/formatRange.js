export default range => {
  if (range) {
    const {
      normal,
      max,
    } = range

    return `${normal}/${max}`
  }

  return ''
}
