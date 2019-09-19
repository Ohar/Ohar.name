import formatAltName from '@/utils/formatAltName'

export default (
  {
    name,
    nameAlt,
    nameEn,
    nameEnAlt,
  }
) => {
  const nameEnAltText = formatAltName(nameEnAlt)
  const nameAltText = formatAltName(nameAlt)

  const header = `${name}${nameAltText}`
  const title = `${header} [${nameEn}${nameEnAltText}]`

  return {
    header,
    title,
  }
}
