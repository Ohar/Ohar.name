const listToCollectionById = require('./../../utils/listToCollectionById')

const PARAM_STR = 'str'
const PARAM_DEX = 'dex'
const PARAM_CON = 'con'
const PARAM_INT = 'int'
const PARAM_WIT = 'wit'
const PARAM_CHA = 'cha'

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

module.exports = dndParamList

module.exports.dndParamCollection = listToCollectionById(dndParamList)

module.exports.PARAM_STR = PARAM_STR
module.exports.PARAM_DEX = PARAM_DEX
module.exports.PARAM_CON = PARAM_CON
module.exports.PARAM_INT = PARAM_INT
module.exports.PARAM_WIT = PARAM_WIT
module.exports.PARAM_CHA = PARAM_CHA
