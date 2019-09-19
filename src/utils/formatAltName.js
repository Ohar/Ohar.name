import arrify from "arrify"

export default name => {
  if (name) {
    const text = name
      ? arrify(name).join(' | ')
      : ''

    return ` (${text})`
  }

  return ''
}
