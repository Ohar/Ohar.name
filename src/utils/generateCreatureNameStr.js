export default (
  {
    name,
    nameAlt,
    nameEn,
    nameEnAlt,
  }
) => {
  const nameEnAltText = nameEnAlt
    ? ` (${nameEnAlt})`
    : ''
  const nameAltText = nameAlt
    ? ` (${nameAlt})`
    : ''
  const header = `${name}${nameAltText}`
  const title = `${header} [${nameEn}${nameEnAltText}]`

  return {
    header,
    title,
  }
}
