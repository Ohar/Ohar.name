import listToCollectionById from '@/utils/listToCollectionById'

export const PARAM_STR = 'str'
export const PARAM_DEX = 'dex'
export const PARAM_CON = 'con'
export const PARAM_INT = 'int'
export const PARAM_WIT = 'wit'
export const PARAM_CHA = 'cha'

const dndParamList = [
  {
    id: PARAM_STR,
    name: 'Сила',
    shortName: 'Сил',
  },
  {
    id: PARAM_DEX,
    name: 'Ловкость',
    shortName: 'Лов',
  },
  {
    id: PARAM_CON,
    name: 'Телосложение',
    shortName: 'Тел',
  },
  {
    id: PARAM_INT,
    name: 'Интеллект',
    shortName: 'Инт',
  },
  {
    id: PARAM_WIT,
    name: 'Мудрость',
    shortName: 'Мдр',
  },
  {
    id: PARAM_CHA,
    name: 'Харизма',
    shortName: 'Хар',
  },
]

export default dndParamList
export const dndParamCollection = listToCollectionById(dndParamList)
