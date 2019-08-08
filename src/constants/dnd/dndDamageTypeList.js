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
    fullName: 'дробящий урон',
  },
  {
    id: DAMAGE_PIERCING,
    name: 'колющий',
    fullName: 'колющий урон',
  },
  {
    id: DAMAGE_ACID,
    name: 'кислотой',
    fullName: 'урон кислотой',
  },
  {
    id: DAMAGE_SLASHING,
    name: 'рубящий',
    fullName: 'рубящий урон',
  },
  {
    id: DAMAGE_FIRE,
    name: 'огнём',
    fullName: 'урон огнём',
  },
  {
    id: DAMAGE_COLD,
    name: 'холодом',
    fullName: 'урон холодом',
  },
  {
    id: DAMAGE_FORCE,
    name: 'силовым полем',
    fullName: 'урон силовым полем',
  },
  {
    id: DAMAGE_NECROTIC,
    name: 'некротический',
    fullName: 'некротический урон',
  },
  {
    id: DAMAGE_LIGHTNING,
    name: 'молнией',
    fullName: 'урон молнией',
  },
  {
    id: DAMAGE_POISON,
    name: 'ядом',
    fullName: 'урон ядом',
  },
  {
    id: DAMAGE_PSYCHIC,
    name: 'психикой',
    fullName: 'психический урон',
  },
  {
    id: DAMAGE_RADIANT,
    name: 'излучением',
    fullName: 'урон излучением',
  },
  {
    id: DAMAGE_SONIC,
    name: 'звуком',
    fullName: 'урон звуком',
  },
]

export default dndDamageTypeList
export const dndDamageTypeCollection = listToCollectionById(dndDamageTypeList)
