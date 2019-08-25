import listToCollectionById from '@/utils/listToCollectionById'

export const CAT_ARMOR = 'armor'
export const CAT_LIGHT_ARMOR = 'light_armor'
export const CAT_MEDIUM_ARMOR = 'medium_armor'
export const CAT_HEAVY_ARMOR = 'heavy_armor'
export const CAT_MARTIAL_MELEE_WEAPON = 'martial_melee_weapon'
export const CAT_MARTIAL_RANGE_WEAPON = 'martial_range_weapon'
export const CAT_SHIELDS = 'shields'
export const CAT_SIMPLE_MELEE_WEAPON = 'simple_melee_weapon'
export const CAT_SIMPLE_RANGE_WEAPON = 'simple_range_weapon'
export const CAT_WEAPON = 'weapon'
export const CAT_EQUIPMENT = 'equipment'
export const CAT_AMMO = 'ammo'
export const CAT_CONSUMABLES = 'consumables'
export const CAT_POISONS = 'poisons'
export const CAT_MAGIC_FOCUS = 'magic_focus'
export const CAT_DRUID_FOCUS = 'druid_focus'
export const CAT_CLOTHES = 'clothes'
export const CAT_HOLY_SYMBOL = 'holy_symbol'
export const CAT_KIT = 'kit'
export const CAT_TOOLS = 'tools'
export const CAT_ARTISAN_TOOLS = 'artisan_tools'
export const CAT_MUSIC_TOOLS = 'music_tools'
export const CAT_GAME_SET = 'game_set'
export const CAT_ANIMALS = 'animals'
export const CAT_TRANSPORT = 'transport'
export const CAT_TRANSPORT_WATER = 'transport_water'
export const CAT_GOODS = 'goods'
export const CAT_FOOD = 'food'
export const CAT_SADDLES = 'saddles'

const MARTIAL_WEAPON_TEXT = `Воинское оружие включает мечи, топоры и древковое оружие, требующее для эффективного использования особых тренировок. Многие воители используют воинское оружие, потому что оно позволяет максимально использовать их стиль и обучение.`
const MELEE_WEAPON_TEXT = `Рукопашное оружие используется для атаки целей, находящихся в пределах 5 футов от вас.`
const RANGE_WEAPON_TEXT = `Дальнобойное оружие используется для атаки целей, находящихся на расстоянии.`
const SIMPLE_WEAPON_TEXT = `Простым оружием могут пользоваться многие. В это оружие входят дубинки, булавы и прочее оружие, доступное обывателям.`

const dndItemCategoryList = [
  {
    id: CAT_ARMOR,
    name: 'Доспехи',
    nameEn: 'Armor',
    description: `Миры D&D — широкий гобелен, сотканный из разнообразных культур, где каждая находится на своём технологическом уровне. Поэтому искателям приключений могут попасться самые разнообразные доспехи, от кожаных курток и кольчуг до дорогих лат.`,
  },
  {
    id: CAT_LIGHT_ARMOR,
    name: 'Лёгкие доспехи',
    nameEn: 'Light Armor',
    description: `Лёгкие доспехи, изготовленные из лёгких и тонких
материалов, предпочитают ловкие искатели приключений, поскольку те предоставляют защиту, и при этом не ограничивают подвижность. Если вы носите лёгкий доспех, вы при определении Класса Доспеха добавляете модификатор Ловкости к базовому числу, предоставленному доспехом. `,
  },
  {
    id: CAT_MEDIUM_ARMOR,
    name: 'Средние доспехи',
    nameEn: 'Medium Armor',
    description: `Средние доспехи предлагают лучшую защиту, чем лёгкие, но немного ограничивают перемещение. Если вы носите средний доспех, вы при определении Класса Доспеха к базовому числу, предоставленному доспехом, добавляете модификатор Ловкости, но не более +2.`,
  },
  {
    id: CAT_HEAVY_ARMOR,
    name: 'Тяжёлые доспехи',
    nameEn: 'Heavy Armor',
    description: `Из всех видов доспехов, тяжёлые доспехи предоставляют лучшую защиту. Эти комплекты доспехов покрывают всё тело и созданы для защиты от самых разных атак. Их вес и нагрузку могут выдержать только самые тренированные воители. Тяжёлый доспех не позволяет добавлять к Классу Доспеха модификатор Ловкости, но и не даёт штраф, если модификатор Ловкости отрицательный.`,
  },
  {
    id: CAT_SHIELDS,
    name: 'Щиты',
    nameEn: 'Shields',
    description: `Щит изготавливается из дерева или металла, и несётся одной рукой. Использование щита увеличивает КД на 2. Вы получаете преимущество только от одного щита одновременно.`,
  },
  {
    id: CAT_WEAPON,
    name: 'Оружие',
    nameEn: 'Weapon',
    description: `Ваш класс предоставляет вам владение некоторыми видами оружия, отражая направленность вашего класса и инструменты, которые вы, скорее всего, будете использовать. И не важно, чем вы вооружены, мечом или луком, от вашего оружия и умения с ним обращаться зависит ваше выживание.`,
  },
  {
    id: CAT_SIMPLE_MELEE_WEAPON,
    name: 'Простое рукопашное оружие',
    nameEn: 'Simple Melee Weapon',
    description: `${MELEE_WEAPON_TEXT}\n
${SIMPLE_WEAPON_TEXT}`,
  },
  {
    id: CAT_SIMPLE_RANGE_WEAPON,
    name: 'Простое дальнобойное оружие',
    nameEn: 'Simple Range Weapon',
    description: `${RANGE_WEAPON_TEXT}\n
${SIMPLE_WEAPON_TEXT}`,
  },
  {
    id: CAT_MARTIAL_MELEE_WEAPON,
    name: 'Воинское рукопашное оружие',
    nameEn: 'Martial Melee Weapon',
    description: `${MELEE_WEAPON_TEXT}\n
${MARTIAL_WEAPON_TEXT}`,
  },
  {
    id: CAT_MARTIAL_RANGE_WEAPON,
    name: 'Воинское дальнобойное оружие',
    nameEn: 'Martial Range Weapon',
    description: `${RANGE_WEAPON_TEXT}\n
${MARTIAL_WEAPON_TEXT}`,
  },
  {
    id: CAT_EQUIPMENT,
    name: 'Снаряжение',
    nameEn: 'Equipment',
    description: `Рынки городов заполнены самыми разнообразными покупателями и продавцами: тут и кузнецы дварфов, и эльфы резчики по дереву, и фермеры полуросликов и ювелиры гномов, не говоря уже о людях самых разных национальностей и культур. В самых больших городах продаётся практически всё, от плетёных корзин и тренировочных мечей до экзотических специй и изысканных нарядов.\n
Искателям же приключений важно наличие в продаже доспехов, оружия, рюкзаков, верёвок и подобных товаров, так как от хорошего снаряжения зависит выживание в подземельях и диких пустошах.`,
  },
  {
    id: CAT_CONSUMABLES,
    name: 'Расходники',
    nameEn: 'Consumables',
    description: ``,
  },
  {
    id: CAT_AMMO,
    name: 'Боеприпасы',
    nameEn: 'Ammo',
    description: ``,
  },
  {
    id: CAT_POISONS,
    name: 'Яды',
    nameEn: 'Poisons',
    description: ``,
  },
  {
    id: CAT_MAGIC_FOCUS,
    name: 'Магическая фокусировка',
    nameEn: 'Magic Focus',
    description: ``,
  },
  {
    id: CAT_DRUID_FOCUS,
    name: 'Фокусировка друидов',
    nameEn: 'Druid Focus',
    description: ``,
  },
  {
    id: CAT_CLOTHES,
    name: 'Одежда',
    nameEn: 'Clothes',
    description: ``,
  },
  {
    id: CAT_HOLY_SYMBOL,
    name: 'Святой символ',
    nameEn: 'Holy Symbol',
    description: ``,
  },
  {
    id: CAT_KIT,
    name: 'Набор',
    nameEn: 'Kit',
    description: ``,
  },
  {
    id: CAT_TOOLS,
    name: 'Инструменты',
    nameEn: 'Tools',
    description: ``,
  },
  {
    id: CAT_ARTISAN_TOOLS,
    name: 'Инструменты ремесленников',
    nameEn: 'Artisan`s Tools',
    description: ``,
  },
  {
    id: CAT_MUSIC_TOOLS,
    name: 'Музыкальные инструменты',
    nameEn: 'Music Tools',
    description: ``,
  },
  {
    id: CAT_GAME_SET,
    name: 'Игровой набор',
    nameEn: 'Game Set',
    description: ``,
  },
  {
    id: CAT_ANIMALS,
    name: 'Скакуны и другие животные',
    nameEn: 'Steeds & Animals',
    description: ``,
  },
  {
    id: CAT_TRANSPORT,
    name: 'Сёдла, упряжь и транспорт',
    nameEn: 'Transport',
    description: ``,
  },
  {
    id: CAT_TRANSPORT_WATER,
    name: 'Водный транспорт',
    nameEn: 'Transport Water',
    description: ``,
  },
  {
    id: CAT_GOODS,
    name: 'Товары',
    nameEn: 'Goods',
    description: ``,
  },
  {
    id: CAT_FOOD,
    name: 'Еда и напитки',
    nameEn: 'Food & Drinks',
    description: ``,
  },
  {
    id: CAT_SADDLES,
    name: 'Сёдла',
    nameEn: 'Saddles',
    description: ``,
  },
]

export default dndItemCategoryList

export const dndItemCategoryCollection = listToCollectionById(dndItemCategoryList)
