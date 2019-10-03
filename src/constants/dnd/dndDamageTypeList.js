const listToCollectionById = require('./../../utils/listToCollectionById')
const {
  CREATURE_ANCIENT_BLACK_DRAGON,
  CREATURE_ANCIENT_BLUE_DRAGON,
  CREATURE_ANCIENT_GREEN_DRAGON,
  CREATURE_ANCIENT_RED_DRAGON,
  CREATURE_ANCIENT_WHITE_DRAGON,
  CREATURE_BLACK_PUDDING,
  CREATURE_ICE_DEVIL,
  CREATURE_MIND_FLAYER,
  CREATURE_SOLAR,
} = require('./../../constants/dnd/dndCreatureIdList')

const DAMAGE_ACID = 'acid'
const DAMAGE_BLUDGEONING = 'bludgeoning'
const DAMAGE_COLD = 'cold'
const DAMAGE_ELECTRICITY = 'lightning'
const DAMAGE_FIRE = 'fire'
const DAMAGE_FORCE = 'force'
const DAMAGE_MAGIC_PIERCING_GOOD = 'magic_good'
const DAMAGE_MAGIC_WEAPON = 'magic_piercing_weapon'
const DAMAGE_NECROTIC = 'necrotic'
const DAMAGE_NONMAGIC = 'nonmagic'
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
    description: `**Дробящий.** Тяжёлые силовые атаки — молотом, падением, сдавливанием и т. п. — причиняют дробящий урон.`,
  },
  {
    id: DAMAGE_PIERCING,
    name: 'Колющий',
    fullName: 'Колющий урон',
    description: `**Колющий.** Колющие и пронзающие атаки, включая удары копьём и укусы чудовищ, причиняют колющий урон.`,
  },
  {
    id: DAMAGE_MAGIC_WEAPON,
    name: 'Дробящий, колющий и рубящий урон от магического оружия',
    fullName: 'Дробящий, колющий и рубящий урон от магического оружия',
    description: `Дробящий, колющий и рубящий урон от магического оружия`,
    isEnumeration: true,
  },
  {
    id: DAMAGE_NONMAGIC,
    name: 'Немагический  дробящий, колющий и рубящий урон',
    fullName: 'Немагический  дробящий, колющий и рубящий урон',
    description: `Немагический  дробящий, колющий и рубящий урон`,
    isEnumeration: true,
  },
  {
    id: DAMAGE_NONMAGIC_WEAPON,
    name: 'Дробящий, колющий и рубящий урон от немагических атак',
    fullName: 'Дробящий, колющий и рубящий урон от немагических атак',
    description: `Дробящий, колющий и рубящий урон от немагических атак`,
    isEnumeration: true,
  },
  {
    id: DAMAGE_NONMAGIC_NONADAMANTINE_WEAPON,
    name: 'Дробящий, колющий и рубящий урон от немагических атак, а также от немагического оружия, которое при этом не изготовлено из адамантина',
    fullName: 'Дробящий, колющий и рубящий урон от немагических атак, а также от немагического оружия, которое при этом не изготовлено из адамантина',
    description: `Дробящий, колющий и рубящий урон от немагических атак, а также от немагического оружия, которое при этом не изготовлено из адамантина`,
    isEnumeration: true,
  },
  {
    id: DAMAGE_NONMAGIC_NONSILVER_WEAPON,
    name: 'Дробящий, колющий и рубящий урон от немагических атак, а также от немагического оружия, которое при этом не посеребрено',
    fullName: 'Дробящий, колющий и рубящий урон от немагических атак, а также от немагического оружия, которое при этом не посеребрено',
    description: `Дробящий, колющий и рубящий урон от немагических атак, а также от немагического оружия, которое при этом не посеребрено`,
    isEnumeration: true,
  },
  {
    id: DAMAGE_MAGIC_PIERCING_GOOD,
    name: 'Колющий от магического оружия, используемого добрыми существами',
    fullName: 'Колющий от магического оружия, используемого добрыми существами',
    description: 'Колющий от магического оружия, используемого добрыми существами',
    isEnumeration: true,
  },
  {
    id: DAMAGE_ACID,
    name: 'Кислотой',
    fullName: 'Урон кислотой',
    description: `**Кислота.** Едкое дыхание [чёрного дракона](CREATURE:${CREATURE_ANCIENT_BLACK_DRAGON}) и растворяющая слизь [чёрного пудинга](CREATURE:${CREATURE_BLACK_PUDDING}) причиняют урон кислотой.`,
  },
  {
    id: DAMAGE_SLASHING,
    name: 'Рубящий',
    fullName: 'Рубящий урон',
    description: `**Рубящий.** Мечи, топоры и когти чудовищ причиняют рубящий урон.`,
  },
  {
    id: DAMAGE_FIRE,
    name: 'Огнём',
    fullName: 'Урон огнём',
    description: `**Огонь.** [Красный дракон](CREATURE:${CREATURE_ANCIENT_RED_DRAGON}), выдыхающий пламя, и многие заклинания, создающие жар, причиняют урон огнём.`,
  },
  {
    id: DAMAGE_COLD,
    name: 'Холодом',
    fullName: 'Урон холодом',
    description: `**Холод.** Лютый холод от копья [ледяного дьявола](CREATURE:${CREATURE_ICE_DEVIL}) и морозное дыхание [белого дракона](CREATURE:${CREATURE_ANCIENT_WHITE_DRAGON}) причиняют урон холодом.`,
  },
  {
    id: DAMAGE_FORCE,
    name: 'Силовым полем',
    fullName: 'Урон силовым полем',
    description: `**Силовое **поле. Силовое поле это чистая магия, сфокусированная в разрушительную силу. Чаще всего силовым полем причиняют урон заклинания, такие как _Волшебная стрела_ и _Божественное оружие_.`,
  },
  {
    id: DAMAGE_NECROTIC,
    name: 'Некротический',
    fullName: 'Некротический урон',
    description: `**Некротическая энергия.** Некротическая энергия, излучаемая некоторой нежитью и такими заклинаниями как _Леденящее прикосновение_, иссушают плоть и даже душу.`,
  },
  {
    id: DAMAGE_ELECTRICITY,
    name: 'Электричеством',
    fullName: 'Урон электричеством',
    description: `**Электричество.** Заклинание _Молния_ и дыхание [синего дракона](CREATURE:${CREATURE_ANCIENT_BLUE_DRAGON}) причиняют урон электричеством.`,
  },
  {
    id: DAMAGE_POISON,
    name: 'Ядом',
    fullName: 'Урон ядом',
    description: `**Яд.** Ядовитые укусы и токсичное дыхание [зелёного дракона](CREATURE:${CREATURE_ANCIENT_GREEN_DRAGON}) причиняют урон ядом.`,
  },
  {
    id: DAMAGE_PSYCHIC,
    name: 'Психикой',
    fullName: 'Психический урон',
    description: `**Психическая энергия.** Атаки силой разума, такие как у [иллитидов](CREATURE:${CREATURE_MIND_FLAYER}), причиняют урон психической энергией.
`,
  },
  {
    id: DAMAGE_RADIANT,
    name: 'Излучением',
    fullName: 'Урон излучением',
    description: `**Излучение.** Урон излучением, причиняемый заклинанием _Небесный огонь_ жреца и карающим оружием [ангела](CREATURE:${CREATURE_SOLAR}), опаляют плоть как огонь и переполняют дух силой.`,
  },
  {
    id: DAMAGE_THUNDER,
    name: 'Звуком',
    fullName: 'Урон звуком',
    description: `**Звук.** Оглушительные звуковые волны, такие как от заклинания _Волна грома_, причиняют урон звуком.`,
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
module.exports.DAMAGE_NONMAGIC = DAMAGE_NONMAGIC
module.exports.DAMAGE_NONMAGIC_NONADAMANTINE_WEAPON = DAMAGE_NONMAGIC_NONADAMANTINE_WEAPON
module.exports.DAMAGE_NONMAGIC_NONSILVER_WEAPON = DAMAGE_NONMAGIC_NONSILVER_WEAPON
module.exports.DAMAGE_NONMAGIC_WEAPON = DAMAGE_NONMAGIC_WEAPON
module.exports.DAMAGE_PIERCING = DAMAGE_PIERCING
module.exports.DAMAGE_POISON = DAMAGE_POISON
module.exports.DAMAGE_PSYCHIC = DAMAGE_PSYCHIC
module.exports.DAMAGE_RADIANT = DAMAGE_RADIANT
module.exports.DAMAGE_SLASHING = DAMAGE_SLASHING
module.exports.DAMAGE_THUNDER = DAMAGE_THUNDER
