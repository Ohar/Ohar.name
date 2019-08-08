import listToCollectionById from '@/utils/listToCollectionById'

export const DAMAGE_ACID = 'acid'
export const DAMAGE_BLUDGEONING = 'bludgeoning'
export const DAMAGE_COLD = 'cold'
export const DAMAGE_FIRE = 'fire'
export const DAMAGE_FORCE = 'force'
export const DAMAGE_LIGHTNING = 'lightning'
export const DAMAGE_NECROTIC = 'necrotic'
export const DAMAGE_PIERCING = 'piercing'
export const DAMAGE_POISON = 'poison'
export const DAMAGE_PSYCHIC = 'psychic'
export const DAMAGE_RADIANT = 'radiant'
export const DAMAGE_SLASHING = 'slashing'
export const DAMAGE_SONIC = 'sonic'

const dndDamageTypeList = [
  {
    id: DAMAGE_BLUDGEONING,
    name: 'дробящий',
  },
  {
    id: DAMAGE_PIERCING,
    name: 'колющий',
  },
  {
    id: DAMAGE_ACID,
    name: 'кислотой',
  },
  {
    id: DAMAGE_SLASHING,
    name: 'рубящий',
  },
  {
    id: DAMAGE_FIRE,
    name: 'огнём',
  },
  {
    id: DAMAGE_COLD,
    name: 'холодом',
  },
  {
    id: DAMAGE_FORCE,
    name: 'силовым полем',
  },
  {
    id: DAMAGE_NECROTIC,
    name: 'некротический',
  },
  {
    id: DAMAGE_LIGHTNING,
    name: 'молнией',
  },
  {
    id: DAMAGE_POISON,
    name: 'ядом',
  },
  {
    id: DAMAGE_PSYCHIC,
    name: 'психикой',
  },
  {
    id: DAMAGE_RADIANT,
    name: 'излучением',
  },
  {
    id: DAMAGE_SONIC,
    name: 'звуком',
  },
]

export default dndDamageTypeList
export const dndDamageTypeCollection = listToCollectionById(dndDamageTypeList)
