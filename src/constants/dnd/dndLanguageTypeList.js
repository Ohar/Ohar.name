const listToCollectionById = require('./../../utils/listToCollectionById')

const LANG_TYPE_STANDARD = 'standard'
const LANG_TYPE_EXOTIC = 'exotic'
const LANG_TYPE_HIDDEN = 'hidden'

const dndLanguageTypeList = [
  {
    id: LANG_TYPE_STANDARD,
    name: 'Обычный',
  },
  {
    id: LANG_TYPE_EXOTIC,
    name: 'Экзотический',
  },
  {
    id: LANG_TYPE_HIDDEN,
    name: 'Тайный',
  },
]

module.exports = dndLanguageTypeList

module.exports.dndLanguageTypeCollection = listToCollectionById(dndLanguageTypeList)

module.exports.LANG_TYPE_STANDARD = LANG_TYPE_STANDARD
module.exports.LANG_TYPE_EXOTIC = LANG_TYPE_EXOTIC
module.exports.LANG_TYPE_HIDDEN = LANG_TYPE_HIDDEN
