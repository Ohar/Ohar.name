const cityTypeList = [
  {
    text: 'Деревня',
    value: 'village',
    supplyKoef: 0.05,
  },
  {
    text: 'Небольшой городок',
    value: 'town',
    supplyKoef: 0.15,
  },
  {
    text: 'Большой город',
    value: 'city',
    supplyKoef: 0.6,
  },
  {
    text: 'Мегаполис',
    value: 'megapolis',
    supplyKoef: 0.8,
  },
]

export default cityTypeList

export const cityTypeCollection = cityTypeList.reduce(
  (collection, cityType) => (
    {
      ...collection,
      [cityType.value]: cityType,
    }
  ),
  {}
)
