import listToCollectionById from '@/utils/listToCollectionById'

const dndDamageTypeList = [
  {
    id: 'bludgeoning',
    name: 'дробящий',
  },
  {
    id: 'piercing',
    name: 'колющий',
  },
  {
    id: 'acid',
    name: 'кислотой',
  },
  {
    id: 'slashing',
    name: 'рубящий',
  },
  {
    id: 'fire',
    name: 'огнём',
  },
  {
    id: 'cold',
    name: 'холодом',
  },
  {
    id: 'force',
    name: 'силовым полем',
  },
  {
    id: 'necrotic',
    name: 'некротический',
  },
  {
    id: 'lightning',
    name: 'молнией',
  },
  {
    id: 'poison',
    name: 'ядом',
  },
  {
    id: 'psychic',
    name: 'психикой',
  },
  {
    id: 'radiant',
    name: 'излучением',
  },
  {
    id: 'sonic',
    name: 'звуком',
  },
]

export const dndDamageTypeCollection = listToCollectionById(dndDamageTypeList)
