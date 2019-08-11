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

export default dndMagicList
export const dndMagicCollection = listToCollectionById(dndMagicList)
