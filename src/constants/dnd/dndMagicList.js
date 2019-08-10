import listToCollectionById from '@/utils/listToCollectionById'

export const MAGIC_ABJURATION = 'abjuration'
export const MAGIC_CONJURATION = 'conjuration'
export const MAGIC_DIVINATION = 'divination'
export const MAGIC_ENCHANTMENT = 'enchantment'
export const MAGIC_EVOCATION = 'evocation'
export const MAGIC_ILLUSION = 'illusion'
export const MAGIC_NECROMANCY = 'necromancy'
export const MAGIC_TRANSMUTATION = 'transmutation'

const dndMagicList = [
  {
    id: MAGIC_ABJURATION,
    name: 'ограждение',
    nameEn: 'abjuration',
  },
  {
    id: MAGIC_CONJURATION,
    name: 'вызов',
    nameEn: 'conjuration',
  },
  {
    id: MAGIC_DIVINATION,
    name: 'прорицание',
    nameEn: 'divination',
  },
  {
    id: MAGIC_ENCHANTMENT,
    name: 'очарование',
    nameEn: 'enchantment',
  },
  {
    id: MAGIC_EVOCATION,
    name: 'воплощение',
    nameEn: 'evocation',
  },
  {
    id: MAGIC_ILLUSION,
    name: 'иллюзия',
    nameEn: 'illusion',
  },
  {
    id: MAGIC_NECROMANCY,
    name: 'некромантия',
    nameEn: 'necromancy',
  },
  {
    id: MAGIC_TRANSMUTATION,
    name: 'преобразование',
    nameEn: 'transmutation',
  },
]

export default dndMagicList
export const dndMagicCollection = listToCollectionById(dndMagicList)
