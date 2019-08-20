const listToCollectionById = require('./../../utils/listToCollectionById')

const MAGIC_ABJURATION = 'abjuration'
const MAGIC_CONJURATION = 'conjuration'
const MAGIC_DIVINATION = 'divination'
const MAGIC_ENCHANTMENT = 'enchantment'
const MAGIC_EVOCATION = 'evocation'
const MAGIC_ILLUSION = 'illusion'
const MAGIC_NECROMANCY = 'necromancy'
const MAGIC_TRANSMUTATION = 'transmutation'

const dndMagicList = [
  {
    id: MAGIC_ABJURATION,
    name: 'Ограждение',
    nameEn: 'Abjuration',
  },
  {
    id: MAGIC_CONJURATION,
    name: 'Вызов',
    nameEn: 'Conjuration',
  },
  {
    id: MAGIC_DIVINATION,
    name: 'Прорицание',
    nameEn: 'Divination',
  },
  {
    id: MAGIC_ENCHANTMENT,
    name: 'Очарование',
    nameEn: 'Enchantment',
  },
  {
    id: MAGIC_EVOCATION,
    name: 'Воплощение',
    nameEn: 'Evocation',
  },
  {
    id: MAGIC_ILLUSION,
    name: 'Иллюзия',
    nameEn: 'Illusion',
  },
  {
    id: MAGIC_NECROMANCY,
    name: 'Некромантия',
    nameEn: 'Necromancy',
  },
  {
    id: MAGIC_TRANSMUTATION,
    name: 'Преобразование',
    nameEn: 'Transmutation',
  },
]

module.exports = dndMagicList

module.exports.dndMagicCollection = listToCollectionById(dndMagicList)

module.exports.MAGIC_ABJURATION = MAGIC_ABJURATION
module.exports.MAGIC_CONJURATION = MAGIC_CONJURATION
module.exports.MAGIC_DIVINATION = MAGIC_DIVINATION
module.exports.MAGIC_ENCHANTMENT = MAGIC_ENCHANTMENT
module.exports.MAGIC_EVOCATION = MAGIC_EVOCATION
module.exports.MAGIC_ILLUSION = MAGIC_ILLUSION
module.exports.MAGIC_NECROMANCY = MAGIC_NECROMANCY
module.exports.MAGIC_TRANSMUTATION = MAGIC_TRANSMUTATION
