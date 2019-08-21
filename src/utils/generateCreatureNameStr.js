export default (
  {
    name,
    nameAlt,
    nameEn,
    nameEnAlt,
    description
  }
) => {
  const nameEnAltText = nameEnAlt
    ? ` (${nameEnAlt})`
    : ''
  const nameAltText = nameAlt
    ? ` (${nameAlt})`
    : ''
  const header = `${name}${nameAltText}`
  const title = `${header} [${nameEn}${nameEnAltText}]\n\n${description}`

  return {
    header,
    title,
  }
}
