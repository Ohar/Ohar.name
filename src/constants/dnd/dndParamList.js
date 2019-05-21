import listToCollectionById from '@/utils/listToCollectionById'

const dndParamList = [
  {
    id: 'str',
    name: 'Сила',
    shortName: 'СИЛ',
  },
  {
    id: 'dex',
    name: 'Ловкость',
    shortName: 'ЛОВ',
  },
  {
    id: 'con',
    name: 'Телосложение',
    shortName: 'ТЕЛ',
  },
  {
    id: 'int',
    name: 'Интеллект',
    shortName: 'ИНТ',
  },
  {
    id: 'wit',
    name: 'Мудрость',
    shortName: 'МУД',
  },
  {
    id: 'cha',
    name: 'Харизма',
    shortName: 'ХАР',
  },
]

export const dndParamCollection = listToCollectionById(dndParamList)
