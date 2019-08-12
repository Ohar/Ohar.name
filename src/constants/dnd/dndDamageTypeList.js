import listToCollectionById from '@/utils/listToCollectionById'

export const DAMAGE_ACID = 'acid'
export const DAMAGE_BLUDGEONING = 'bludgeoning'
export const DAMAGE_COLD = 'cold'
export const DAMAGE_FIRE = 'fire'
export const DAMAGE_FORCE = 'force'
export const DAMAGE_LIGHTNING = 'lightning'
export const DAMAGE_NECROTIC = 'necrotic'
export const DAMAGE_NONMAGIC_WEAPON = 'nonmagic_weapon'
export const DAMAGE_PIERCING = 'piercing'
export const DAMAGE_POISON = 'poison'
export const DAMAGE_PSYCHIC = 'psychic'
export const DAMAGE_RADIANT = 'radiant'
export const DAMAGE_SLASHING = 'slashing'
export const DAMAGE_SONIC = 'sonic'

const dndDamageTypeList = [
  {
    id: DAMAGE_BLUDGEONING,
    name: 'Дробящий',
    fullName: 'Дробящий урон',
  },
  {
    id: DAMAGE_PIERCING,
    name: 'Колющий',
    fullName: 'Колющий урон',
  },
  {
    id: DAMAGE_NONMAGIC_WEAPON,
    name: 'Дробящий, колющий и рубящий урон от немагических атак',
    fullName: 'Дробящий, колющий и рубящий урон от немагических атак',
    isEnumeration: true,
  },
  {
    id: DAMAGE_ACID,
    name: 'Кислотой',
    fullName: 'Урон кислотой',
  },
  {
    id: DAMAGE_SLASHING,
    name: 'Рубящий',
    fullName: 'Рубящий урон',
  },
  {
    id: DAMAGE_FIRE,
    name: 'Огнём',
    fullName: 'Урон огнём',
  },
  {
    id: DAMAGE_COLD,
    name: 'Холодом',
    fullName: 'Урон холодом',
  },
  {
    id: DAMAGE_FORCE,
    name: 'Силовым полем',
    fullName: 'Урон силовым полем',
  },
  {
    id: DAMAGE_NECROTIC,
    name: 'Некротический',
    fullName: 'Некротический урон',
  },
  {
    id: DAMAGE_LIGHTNING,
    name: 'Молнией',
    fullName: 'Урон молнией',
  },
  {
    id: DAMAGE_POISON,
    name: 'Ядом',
    fullName: 'Урон ядом',
  },
  {
    id: DAMAGE_PSYCHIC,
    name: 'Психикой',
    fullName: 'Психический урон',
  },
  {
    id: DAMAGE_RADIANT,
    name: 'Излучением',
    fullName: 'Урон излучением',
  },
  {
    id: DAMAGE_SONIC,
    name: 'Звуком',
    fullName: 'Урон звуком',
  },
]

export default dndDamageTypeList
export const dndDamageTypeCollection = listToCollectionById(dndDamageTypeList)
