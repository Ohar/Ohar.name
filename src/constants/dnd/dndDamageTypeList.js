const listToCollectionById = require('./../../utils/listToCollectionById')

const DAMAGE_ACID = 'acid'
const DAMAGE_BLUDGEONING = 'bludgeoning'
const DAMAGE_COLD = 'cold'
const DAMAGE_ELECTRICITY = 'lightning'
const DAMAGE_FIRE = 'fire'
const DAMAGE_FORCE = 'force'
const DAMAGE_MAGIC_PIERCING_GOOD = 'magic_good'
const DAMAGE_MAGIC_WEAPON = 'magic_piercing_weapon'
const DAMAGE_NECROTIC = 'necrotic'
const DAMAGE_NONMAGIC_NONADAMANTINE_WEAPON = 'nonmagic_nonadamantine_weapon'
const DAMAGE_NONMAGIC_NONSILVER_WEAPON = 'nonmagic_nonsilver_weapon'
const DAMAGE_NONMAGIC_WEAPON = 'nonmagic_weapon'
const DAMAGE_PIERCING = 'piercing'
const DAMAGE_POISON = 'poison'
const DAMAGE_PSYCHIC = 'psychic'
const DAMAGE_RADIANT = 'radiant'
const DAMAGE_SLASHING = 'slashing'
const DAMAGE_THUNDER = 'thunder'

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
    id: DAMAGE_MAGIC_WEAPON,
    name: 'Дробящий, колющий и рубящий урон от магического оружия',
    fullName: 'Дробящий, колющий и рубящий урон от магического оружия',
    isEnumeration: true,
  },
  {
    id: DAMAGE_NONMAGIC_WEAPON,
    name: 'Дробящий, колющий и рубящий урон от немагических атак',
    fullName: 'Дробящий, колющий и рубящий урон от немагических атак',
    isEnumeration: true,
  },
  {
    id: DAMAGE_NONMAGIC_NONADAMANTINE_WEAPON,
    name: 'Дробящий, колющий и рубящий урон от немагических атак, а также от немагического оружия, которое при этом не изготовлено из адамантина',
    fullName: 'Дробящий, колющий и рубящий урон от немагических атак, а также от немагического оружия, которое при этом не изготовлено из адамантина',
    isEnumeration: true,
  },
  {
    id: DAMAGE_NONMAGIC_NONSILVER_WEAPON,
    name: 'Дробящий, колющий и рубящий урон от немагических атак, а также от немагического оружия, которое при этом не посеребрено',
    fullName: 'Дробящий, колющий и рубящий урон от немагических атак, а также от немагического оружия, которое при этом не посеребрено',
    isEnumeration: true,
  },
  {
    id: DAMAGE_MAGIC_PIERCING_GOOD,
    name: 'Колющий от магического оружия, используемого добрыми существами',
    fullName: 'Колющий от магического оружия, используемого добрыми существами',
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
    id: DAMAGE_ELECTRICITY,
    name: 'Электричеством',
    fullName: 'Урон электричеством',
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
    id: DAMAGE_THUNDER,
    name: 'Звуком',
    fullName: 'Урон звуком',
  },
]

module.exports = dndDamageTypeList

module.exports.dndDamageTypeCollection = listToCollectionById(dndDamageTypeList)

module.exports.DAMAGE_ACID = DAMAGE_ACID
module.exports.DAMAGE_BLUDGEONING = DAMAGE_BLUDGEONING
module.exports.DAMAGE_COLD = DAMAGE_COLD
module.exports.DAMAGE_ELECTRICITY = DAMAGE_ELECTRICITY
module.exports.DAMAGE_FIRE = DAMAGE_FIRE
module.exports.DAMAGE_FORCE = DAMAGE_FORCE
module.exports.DAMAGE_MAGIC_WEAPON = DAMAGE_MAGIC_WEAPON
module.exports.DAMAGE_NECROTIC = DAMAGE_NECROTIC
module.exports.DAMAGE_MAGIC_PIERCING_GOOD = DAMAGE_MAGIC_PIERCING_GOOD
module.exports.DAMAGE_NONMAGIC_NONADAMANTINE_WEAPON = DAMAGE_NONMAGIC_NONADAMANTINE_WEAPON
module.exports.DAMAGE_NONMAGIC_NONSILVER_WEAPON = DAMAGE_NONMAGIC_NONSILVER_WEAPON
module.exports.DAMAGE_NONMAGIC_WEAPON = DAMAGE_NONMAGIC_WEAPON
module.exports.DAMAGE_PIERCING = DAMAGE_PIERCING
module.exports.DAMAGE_POISON = DAMAGE_POISON
module.exports.DAMAGE_PSYCHIC = DAMAGE_PSYCHIC
module.exports.DAMAGE_RADIANT = DAMAGE_RADIANT
module.exports.DAMAGE_SLASHING = DAMAGE_SLASHING
module.exports.DAMAGE_THUNDER = DAMAGE_THUNDER
