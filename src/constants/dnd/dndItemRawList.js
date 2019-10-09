import generateTextLinks from '@/utils/generateTextLinks'
import {
  CREATURE_CAMEL,
  CREATURE_DRAFT_HORSE,
  CREATURE_ELEPHANT, CREATURE_GOAT,
  CREATURE_MASTIFF,
  CREATURE_MULE,
  CREATURE_PONY,
  CREATURE_RIDING_HORSE,
  CREATURE_THRI_KREEN,
  CREATURE_TRICERATOPS,
  CREATURE_WARHORSE,
} from '@/constants/dnd/dndCreatureIdList'
import {
  DAMAGE_ACID,
  DAMAGE_BLUDGEONING,
  DAMAGE_FIRE,
  DAMAGE_PIERCING,
  DAMAGE_POISON,
  DAMAGE_RADIANT,
  DAMAGE_SLASHING,
} from '@/constants/dnd/dndDamageTypeList'
import {
  CAT_AMMO,
  CAT_ANIMALS,
  CAT_ARMOR,
  CAT_ARTISAN_TOOLS,
  CAT_CLOTHES,
  CAT_DRUID_FOCUS,
  CAT_EQUIPMENT,
  CAT_FOOD,
  CAT_GAME_SET,
  CAT_GOODS,
  CAT_HEAVY_ARMOR,
  CAT_HOLY_SYMBOL,
  CAT_EQUIPMENT_KIT,
  CAT_LIGHT_ARMOR,
  CAT_MAGIC_FOCUS,
  CAT_MARTIAL_MELEE_WEAPON,
  CAT_MARTIAL_RANGE_WEAPON,
  CAT_MEDIUM_ARMOR,
  CAT_MUSIC_TOOLS,
  CAT_POISONS,
  CAT_SADDLES,
  CAT_SHIELDS,
  CAT_SIMPLE_MELEE_WEAPON,
  CAT_SIMPLE_RANGE_WEAPON,
  CAT_TOOLS,
  CAT_TRANSPORT,
  CAT_TRANSPORT_WATER,
  CAT_WEAPON,
} from '@/constants/dnd/dndItemCategoryList'
import {
  WEAPON_AMMO,
  WEAPON_FINESSE,
  WEAPON_HEAVY,
  WEAPON_LIGHT,
  WEAPON_RANGE,
  WEAPON_REACH,
  WEAPON_RELOADING,
  WEAPON_SPECIAL,
  WEAPON_THROWN,
  WEAPON_TWO_HANDED,
  WEAPON_VERSATILE,
} from '@/constants/dnd/dndWeaponPropList'

export const ITEM_ABACUS = 'abacus'
export const ITEM_ACID = 'acid'
export const ITEM_ALCHEMISTS_FIRE = 'alchemists_fire'
export const ITEM_ALCHEMISTS_SUPPLIES = 'alchemists_supplies'
export const ITEM_ALE_GALLON = 'ale_gallon'
export const ITEM_ALE_MUG = 'ale_mug'
export const ITEM_AMULET = 'amulet'
export const ITEM_ANTITOXIN = 'antitoxin'
export const ITEM_ARROWS = 'arrows'
export const ITEM_ASSASSINS_BLOOD = 'assassins_blood'
export const ITEM_BACKPACK = 'backpack'
export const ITEM_BAGPIPES = 'bagpipes'
export const ITEM_BALL_BEARINGS = 'ball_bearings'
export const ITEM_BANQUET = 'banquet'
export const ITEM_BARREL = 'barrel'
export const ITEM_BASKET = 'basket'
export const ITEM_BATTLEAXE = 'battleaxe'
export const ITEM_BEDROLL = 'bedroll'
export const ITEM_BELL = 'bell'
export const ITEM_BIT_AND_BRIDLE = 'wagon'
export const ITEM_BLANKET = 'blanket'
export const ITEM_BLOCK_AND_TACKLE = 'block_and_tackle'
export const ITEM_BLOWGUN = 'blowgun'
export const ITEM_BLOWGUN_NEEDLES = 'blowgun_needles'
export const ITEM_BOOK = 'book'
export const ITEM_BOTTLE_GLASS = 'bottle_glass'
export const ITEM_BREAD_LOAF = 'bread_loaf'
export const ITEM_BREASTPLATE = 'breastplate'
export const ITEM_BREWERS_SUPPLIES = 'brewers_supplies'
export const ITEM_BUCKET = 'bucket'
export const ITEM_BURGLARS_PACK = 'burglars_pack'
export const ITEM_BURNT_OTHUR_FUMES = 'burnt_othur_fumes'
export const ITEM_CALLIGRAPHERS_SUPPLIES = 'calligraphers_supplies'
export const ITEM_CALTROPS = 'caltrops'
export const ITEM_CAMEL = 'camel'
export const ITEM_CANDLE = 'candle'
export const ITEM_CANOE = 'canoe'
export const ITEM_CANVAS = 'canvas'
export const ITEM_CARPENTERS_TOOLS = 'carpenters_tools'
export const ITEM_CARRIAGE = 'carriage'
export const ITEM_CART = 'cart'
export const ITEM_CARTOGRAPHERS_TOOLS = 'cartographers_tools'
export const ITEM_CASE_CROSSBOW_BOLT = 'case_crossbow_bolt'
export const ITEM_CASE_MAP_OR_SCROLL = 'case_map_or_scroll'
export const ITEM_CHAIN = 'chain'
export const ITEM_CHAIN_MAIL = 'chain⁠_mail'
export const ITEM_CHAIN_SHIRT = 'chain⁠_s⁠hirt'
export const ITEM_CHALK = 'chalk'
export const ITEM_CHARIOT = 'chariot'
export const ITEM_CHATKCHA = 'chatkcha'
export const ITEM_CHEESE_HUNK = 'cheese_hunk'
export const ITEM_CHEST = 'chest'
export const ITEM_CHICKEN = 'chicken'
export const ITEM_CINNAMON = 'cinnamon'
export const ITEM_CLIMBERS_KIT = 'climbers_kit'
export const ITEM_CLOTHES_COMMON = 'clothes_common'
export const ITEM_CLOTHES_COSTUME = 'clothes_costume'
export const ITEM_CLOTHES_FINE = 'clothes_fine'
export const ITEM_CLOTHES_TRAVELERS = 'clothes_travelers'
export const ITEM_CLOVES = 'cloves'
export const ITEM_CLUB = 'club'
export const ITEM_COBBLERS_TOOLS = 'cobblers_tools'
export const ITEM_COMPONENT_POUCH = 'component_pouch'
export const ITEM_COOKS_UTENSILS = 'cooks_utensils'
export const ITEM_COPPER = 'copper'
export const ITEM_COTTON_CLOTH = 'cotton_cloth'
export const ITEM_CRAWLER_MUCUS = 'crawler_mucus'
export const ITEM_CROSSBOW_BOLTS = 'crossbow_bolts'
export const ITEM_CROSSBOW_HAND = 'crossbow_hand'
export const ITEM_CROSSBOW_HEAVY = 'crossbow_heavy'
export const ITEM_CROSSBOW_LIGHT = 'crossbow_light'
export const ITEM_CROWBAR = 'crowbar'
export const ITEM_CRYSTAL = 'crystal'
export const ITEM_DAGGER = 'dagger'
export const ITEM_DART = 'dart'
export const ITEM_DICE_SET = 'dice_set'
export const ITEM_DIPLOMATS_PACK = 'diplomats_pack'
export const ITEM_DISGUISE_KIT = 'disguise_kit'
export const ITEM_DONKEY = 'donkey'
export const ITEM_DRAFT_HORSE = 'draft_horse'
export const ITEM_DRAGON_CHESS = 'dragon_chess'
export const ITEM_DROW_POISON = 'drow_poison'
export const ITEM_DRUM = 'drum'
export const ITEM_DULCIMER = 'dulcimer'
export const ITEM_DUNGEONEERS_PACK = 'dungeoneers_pack'
export const ITEM_ELEPHANT = 'elephant'
export const ITEM_EMBLEM = 'emblem'
export const ITEM_ENTERTAINERS_PACK = 'entertainers_pack'
export const ITEM_ESSENCE_OF_ETHER = 'essence_of_ether'
export const ITEM_EXOTIC_SADDLE = 'exotic_saddle'
export const ITEM_EXPLORERS_PACK = 'explorers_pack'
export const ITEM_FEED = 'feed'
export const ITEM_FISHING_TACKLE = 'fishing_tackle'
export const ITEM_FLAIL = 'flail'
export const ITEM_FLASK = 'flask'
export const ITEM_FLOUR = 'flour'
export const ITEM_FLUTE = 'flute'
export const ITEM_FORGERY_KIT = 'forgery_kit'
export const ITEM_GALLEY = 'galley'
export const ITEM_GINGER = 'ginger'
export const ITEM_GLAIVE = 'glaive'
export const ITEM_GLASSBLOWERS_TOOLS = 'glassblowers_tools'
export const ITEM_GOAT = 'goat'
export const ITEM_GOLD = 'gold'
export const ITEM_GRAPPLING_HOOK = 'grappling_hook'
export const ITEM_GREATAXE = 'greataxe'
export const ITEM_GREATCLUB = 'greatclub'
export const ITEM_GREATSWORD = 'greatsword'
export const ITEM_GYTHKA = 'gythka'
export const ITEM_HALBERD = 'halberd'
export const ITEM_HALF_PLATE = 'half_plate'
export const ITEM_HAMMER = 'hammer'
export const ITEM_HAMMER_SLEDGE = 'hammer_sledge'
export const ITEM_HANDAXE = 'handaxe'
export const ITEM_HEALERS_KIT = 'healers_kit'
export const ITEM_HERBALISM_KIT = 'herbalism_kit'
export const ITEM_HIDE_ARMOR = 'hide_armor'
export const ITEM_HOLY_WATER = 'holy_water'
export const ITEM_HORN = 'horn'
export const ITEM_HOURGLASS = 'hourglass'
export const ITEM_HUNTING_TRAP = 'hunting_trap'
export const ITEM_INK = 'ink'
export const ITEM_INK_PEN = 'ink_pen'
export const ITEM_INSECT_REPELLENT_INCENSE = 'insect_repellent_incense'
export const ITEM_INSECT_REPELLENT_SALVE = 'insect_repellent_salve'
export const ITEM_IRON = 'iron'
export const ITEM_JAVELIN = 'javelin'
export const ITEM_JEWELERS_TOOLS = 'jewelers_tools'
export const ITEM_JUG = 'jug'
export const ITEM_KEELBOAT = 'keelboat'
export const ITEM_LADDER = 'ladder'
export const ITEM_LAMP = 'lamp'
export const ITEM_LANCE = 'lance'
export const ITEM_LANTERN_BULLSEYE = 'lantern_bullseye'
export const ITEM_LANTERN_HOODED = 'lantern_hooded'
export const ITEM_LEATHER_ARMOR = 'leather_armor'
export const ITEM_LEATHERWORKERS_TOOLS = 'leatherworkers_tools'
export const ITEM_LIGHT_HAMMER = 'light_hammer'
export const ITEM_LINEN = 'linen'
export const ITEM_LOCK = 'lock'
export const ITEM_LONGBOW = 'longbow'
export const ITEM_LONGSHIP = 'longship'
export const ITEM_LONGSWORD = 'longsword'
export const ITEM_LUTE = 'lute'
export const ITEM_LYRE = 'lyre'
export const ITEM_MACE = 'mace'
export const ITEM_MAGNIFYING_GLASS = 'magnifying_glass'
export const ITEM_MALICE = 'malice'
export const ITEM_MANACLES = 'manacles'
export const ITEM_MASONS_TOOLS = 'masons_tools'
export const ITEM_MASTIFF = 'mastiff'
export const ITEM_MAUL = 'maul'
export const ITEM_MEAT_CHUNK = 'meat_chunk'
export const ITEM_MESS_KIT = 'mess_kit'
export const ITEM_MIDNIGHT_TEARS = 'midnight_tears'
export const ITEM_MILITARY_SADDLE = 'military_saddle'
export const ITEM_MIRROR_STEEL = 'mirror_steel'
export const ITEM_MORNINGSTAR = 'morningstar'
export const ITEM_MULE = 'mule'
export const ITEM_NAVIGATORS_TOOLS = 'navigators_tools'
export const ITEM_NET = 'net'
export const ITEM_OIL = 'oil'
export const ITEM_OIL_OF_TAGGIT = 'oil_of_taggit'
export const ITEM_ORB = 'orb'
export const ITEM_OX = 'ox'
export const ITEM_PACK_SADDLE = 'pack_saddle'
export const ITEM_PADDED_ARMOR = 'padded_armor'
export const ITEM_PAINTERS_SUPPLIES = 'painters_supplies'
export const ITEM_PALE_TINCTURE = 'pale_tincture'
export const ITEM_PAN_FLUTE = 'pan_flute'
export const ITEM_PAPER = 'paper'
export const ITEM_PARCHMENT = 'parchment'
export const ITEM_PEPPER = 'pepper'
export const ITEM_PERFUME = 'perfume'
export const ITEM_PIG = 'pig'
export const ITEM_PIKE = 'pike'
export const ITEM_PITCHER = 'pitcher'
export const ITEM_PITON = 'piton'
export const ITEM_PLATE_ARMOR = 'plate_armor'
export const ITEM_PLATINUM = 'platinum'
export const ITEM_PLAYING_CARD_SET = 'playing_card_set'
export const ITEM_POISON_BASIC = 'poison_basic'
export const ITEM_POISONERS_KIT = 'poisoners_kit'
export const ITEM_POLE = 'pole'
export const ITEM_PONY = 'pony'
export const ITEM_POT_IRON = 'pot_iron'
export const ITEM_POTION_OF_HEALING = 'potion_of_healing.'
export const ITEM_POTTERS_TOOLS = 'potters_tools'
export const ITEM_POUCH = 'pouch'
export const ITEM_PRIESTS_PACK = 'priests_pack'
export const ITEM_PURPLE_WORM_POISON = 'purple_worm_poison'
export const ITEM_QUARTERSTAFF = 'quarterstaff'
export const ITEM_QUIVER = 'quiver'
export const ITEM_RAIN_CATCHER = 'rain_catcher'
export const ITEM_RAM_PORTABLE = 'ram_portable'
export const ITEM_RAPIER = 'rapier'
export const ITEM_RATIONS = 'rations'
export const ITEM_RELIQUARY = 'reliquary'
export const ITEM_RIDING_HORSE = 'riding_horse'
export const ITEM_RIDING_SADDLE = 'riding_saddle'
export const ITEM_RING_MAIL = 'ring_mail'
export const ITEM_ROBES = 'robes'
export const ITEM_ROD = 'rod'
export const ITEM_ROPE_HEMP = 'rope_hemp'
export const ITEM_ROPE_SILK = 'rope_silk'
export const ITEM_ROWBOAT = 'rowboat'
export const ITEM_SACK = 'sack'
export const ITEM_SADDLEBAGS = 'saddlebags'
export const ITEM_SAFFRON = 'saffron'
export const ITEM_SAILING_SHIP = 'sailing_ship'
export const ITEM_SALT = 'salt'
export const ITEM_SCALE_MAIL = 'scale_m⁠ail'
export const ITEM_SCALE_MERCHANTS = 'scale_merchants'
export const ITEM_SCHOLARS_PACK = 'scholars_pack'
export const ITEM_SCIMITAR = 'scimitar'
export const ITEM_SEALING_WAX = 'sealing_wax'
export const ITEM_SERPENT_VENOM = 'serpent_venom'
export const ITEM_SHAWM = 'shawm'
export const ITEM_SHEEP = 'sheep'
export const ITEM_SHIELD = 'shield'
export const ITEM_SHORTBOW = 'shortbow'
export const ITEM_SHORTSWORD = 'shortsword'
export const ITEM_SHOVEL = 'shovel'
export const ITEM_SICKLE = 'sickle'
export const ITEM_SIGNAL_WHISTLE = 'signal_whistle'
export const ITEM_SIGNET_RING = 'signet_ring'
export const ITEM_SILVER = 'silver'
export const ITEM_SLED = 'sled'
export const ITEM_SLING = 'sling'
export const ITEM_SLING_BULLETS = 'sling_bullets'
export const ITEM_SMITHS_TOOLS = 'smiths_tools'
export const ITEM_SOAP = 'soap'
export const ITEM_SPEAR = 'spear'
export const ITEM_SPELLBOOK = 'spellbook'
export const ITEM_SPIKES_IRON = 'spikes_iron'
export const ITEM_SPLINT_ARMOR = 'splint_armor'
export const ITEM_SPRIG_OF_HOLLY = 'sprig_of_holly'
export const ITEM_SPRIG_OF_MISTLETOE = 'sprig_of_mistletoe'
export const ITEM_SPYGLASS = 'spyglass'
export const ITEM_STAFF = 'staff'
export const ITEM_STUDDED_LEATHER_ARMOR = 'studded_leather_armor'
export const ITEM_TANKARD = 'tankard'
export const ITEM_TEJ_CASK = 'tej_cask'
export const ITEM_TEJ_MUG = 'tej_mug'
export const ITEM_TENT = 'tent'
export const ITEM_THIEVES_TOOLS = 'thieves_tools'
export const ITEM_THREE_DRAGON_ANTE = 'three_dragon_ante'
export const ITEM_TINDERBOX = 'Tinderbox'
export const ITEM_TINKERS_TOOLS = 'tinkers_tools'
export const ITEM_TORCH = 'Torch'
export const ITEM_TORPOR = 'torpor'
export const ITEM_TOTEM = 'totem'
export const ITEM_TRICERATOPS = 'triceratops'
export const ITEM_TRIDENT = 'trident'
export const ITEM_TRUTH_SERUM = 'truth_serum'
export const ITEM_VIAL = 'vial'
export const ITEM_VIOL = 'viol'
export const ITEM_WAGON = 'wagon'
export const ITEM_WAND = 'wand'
export const ITEM_WAR_PICK = 'war_pick'
export const ITEM_WARHAMMER = 'warhammer'
export const ITEM_WARHORSE = 'warhorse'
export const ITEM_WARSHIP = 'warship'
export const ITEM_WATERSKIN = 'waterskin'
export const ITEM_WEAVERS_TOOLS = 'weavers_tools'
export const ITEM_WHEAT = 'wheat'
export const ITEM_WHETSTONE = 'whetstone'
export const ITEM_WHIP = 'whip'
export const ITEM_WINE_COMMON_BOTTLE = 'wine_common_bottle'
export const ITEM_WINE_COMMON_PITCHER = 'wine_common_pitcher'
export const ITEM_WINE_FINE_BOTTLE = 'wine_fine_bottle'
export const ITEM_WINE_FINE_PITCHER = 'wine_fine_pitcher'
export const ITEM_WOODCARVERS_TOOLS = 'woodcarvers_tools'
export const ITEM_WOODEN_STAFF = 'wooden_staff'
export const ITEM_WYVERN_POISON = 'wyvern_poison'
export const ITEM_YEW_SCEPTER = 'wooden_scepter'
export const ITEM_YEW_WAND = 'yew_wand'
export const ITEM_YKLWA = 'yklwa'


const gameSetDescription = `Владение игровым набором применяется к одному виду игры, например, к ставке трёх драконов или к азартным играм, использующим кости.\n
**Компоненты.** Игровой набор включает в себя всё необходимое для конкретной игры или группы игр, как, например, полная колода карт или доска и фигуры.\n
**История.** Ваше мастерство в игре включает в себя знания о её истории, а также знания о важных событиях и известных исторических фигурах, связанных с игрой.\n
**Проницательность.** Сыграть с кем-то – это отличный способ понять его характер и что он из себя представляет, что в свою очередь позволяет вам лучше распознавать ложь и определять его настроение.\n
**Ловкость рук.** Ловкость рук – это полезный навык для мухлежа в игре, поскольку позволяет вам менять местами фигуры, прятать карты или менять неудачный результат броска кости. С другой стороны, увлечь цель игрой, требующей совершения ловких движений – хорошее отвлечение при карманной краже.\n

| Действие                  | Сл |
|---------------------------|----|
| Поймать игрока на мухлеже | 15 |
| Понять характер оппонента | 15 |
`

const musicalToolDescription = `Если вы владеете определённым музыкальным инструментом, вы можете добавлять бонус мастерства к проверкам характеристик, совершённым во время игры на нём. Бард может использовать музыкальный инструмент в качестве фокусировки для заклинаний.\n
Владение музыкальным инструментом означает, что вы знакомы с приёмами игры на нём. Вы также знаете несколько песен, как правило, исполняющихся на этом инструменте.\n
**История.** Ваш опыт помогает вам вспомнить исторические факты, связанные с вашим инструментом.\n
**Выступление.** Ваши постановки заметно улучшаются, когда вы включаете в них игру на инструменте.\n
**Сочинение мелодии.** Как часть продолжительного отдыха вы можете сочинить новую мелодию и слова для песни, исполняемой на вашем инструменте. Вы можете использовать эту способность, чтобы произвести впечатление на дворянина или распространять скандальные слухи с легко запоминающейся мелодией.\n

| Действие                 | Сл |
|--------------------------|----|
| Опознать мелодию         | 10 |
| Сымпровизировать мелодию | 20 |
`

const dndItemRawList = [
  {
    id: ITEM_PADDED_ARMOR,
    name: 'Стёганный доспех',
    nameEn: 'Padded Armor',
    description: 'Стёганый доспех состоит из прошитых слоёв ткани и ватина.',
    cost: 500,
    weight: 8,
    blockHiding: true,
    acChangeTo: 11,
    acUseDexMod: true,
    source: {
      id: 'PHB',
      page: 145,
    },
    category: CAT_ARMOR,
    subcategory: CAT_LIGHT_ARMOR,
  },
  {
    id: ITEM_LEATHER_ARMOR,
    name: 'Кожаный доспех',
    nameEn: 'Leather Armor',
    description: 'Нагрудник и плечи этого доспеха изготовлены из кожи, вываренной в масле. Остальные части доспеха сделаны из более мягких и гибких материалов.',
    cost: 1000,
    weight: 10,
    acChangeTo: 11,
    acUseDexMod: true,
    source: {
      id: 'PHB',
      page: 145,
    },
    category: CAT_ARMOR,
    subcategory: CAT_LIGHT_ARMOR,
  },
  {
    id: ITEM_STUDDED_LEATHER_ARMOR,
    name: 'Доспех из проклёпанной кожи',
    nameEn: 'Studded Leather Armor',
    description: 'Изготовленный из крепкой, но гибкой кожи проклёпанный доспех усилен тесно расположенными шипами или заклёпками.',
    cost: 4500,
    weight: 13,
    acChangeTo: 12,
    acUseDexMod: true,
    source: {
      id: 'PHB',
      page: 145,
    },
    category: CAT_ARMOR,
    subcategory: CAT_LIGHT_ARMOR,
  },
  {
    id: ITEM_HIDE_ARMOR,
    name: 'Шкурный доспех',
    nameEn: 'Hide Armor',
    description: 'Этот грубый доспех состоит из толстых мехов и шкур. Обычно их носят племена варваров, злые гуманоиды и прочие народы, у которых нет инструментов и материалов для создания более качественных доспехов.',
    cost: 1000,
    weight: 12,
    acChangeTo: 12,
    acUseDexMod: true,
    acDexModMax: 2,
    source: {
      id: 'PHB',
      page: 145,
    },
    category: CAT_ARMOR,
    subcategory: CAT_MEDIUM_ARMOR,
  },
  {
    id: ITEM_CHAIN_SHIRT,
    name: 'Кольчужная рубаха',
    nameEn: 'Chain⁠ S⁠hirt',
    description: 'Сделанная из переплетённых металлических колец кольчужная рубаха носится между слоями одежды или кожи. Этот доспех предоставляет умеренную защиту торса и заглушает звон колец внешним покрытием.',
    cost: 5000,
    weight: 20,
    acChangeTo: 13,
    acUseDexMod: true,
    acDexModMax: 2,
    source: {
      id: 'PHB',
      page: 145,
    },
    category: CAT_ARMOR,
    subcategory: CAT_MEDIUM_ARMOR,
  },
  {
    id: ITEM_SCALE_MAIL,
    name: 'Чешуйчатый доспех',
    nameEn: 'Scale M⁠ail',
    description: 'Этот доспех состоит из кожаных куртки и поножей (а также, возможно, отдельной юбки), покрытых перекрывающимися кусочками металла, похожими на рыбную чешую. В комплект входят рукавицы.',
    cost: 5000,
    weight: 45,
    blockHiding: true,
    acChangeTo: 14,
    acUseDexMod: true,
    acDexModMax: 2,
    source: {
      id: 'PHB',
      page: 145,
    },
    category: CAT_ARMOR,
    subcategory: CAT_MEDIUM_ARMOR,
  },
  {
    id: ITEM_BREASTPLATE,
    name: 'Кираса',
    nameEn: 'Breastplate',
    description: 'Этот доспех состоит из подогнанного металлического панциря, носимого с подкладкой из кожи. Несмотря на то, что руки и ноги остаются практически без защиты, этот доспех хорошо защищает жизненно важные органы, оставляя владельцу относительную подвижность.',
    cost: 40000,
    weight: 20,
    acChangeTo: 14,
    acUseDexMod: true,
    acDexModMax: 2,
    source: {
      id: 'PHB',
      page: 145,
    },
    category: CAT_ARMOR,
    subcategory: CAT_MEDIUM_ARMOR,
  },
  {
    id: ITEM_HALF_PLATE,
    name: 'Полулаты',
    nameEn: 'Half Plate',
    description: 'Полулаты состоят из сформированных металлических пластин, покрывающих большую часть тела владельца. В них не входит защита для ног кроме простых поножей, закреплённых кожаными ремнями.',
    cost: 75000,
    weight: 40,
    blockHiding: true,
    acChangeTo: 15,
    acUseDexMod: true,
    acDexModMax: 2,
    source: {
      id: 'PHB',
      page: 145,
    },
    category: CAT_ARMOR,
    subcategory: CAT_MEDIUM_ARMOR,
  },
  {
    id: ITEM_RING_MAIL,
    name: 'Колечный доспех',
    nameEn: 'Ring⁠ Mail',
    description: 'Это кожаный доспех с нашитыми на него толстыми кольцами. Эти кольца усиливают доспех от ударов мечей и топоров. Колечный доспех хуже кольчуги, и обычно его носят только те, кто не могут позволить себе доспех получше.',
    cost: 3000,
    weight: 40,
    blockHiding: true,
    acChangeTo: 14,
    source: {
      id: 'PHB',
      page: 145,
    },
    category: CAT_ARMOR,
    subcategory: CAT_HEAVY_ARMOR,
  },
  {
    id: ITEM_CHAIN_MAIL,
    name: 'Кольчуга',
    nameEn: 'Chain mail',
    description: 'Изготовленная из переплетающихся металлических колец кольчуга включает также слой стёганой ткани, надеваемой под низ, дабы предотвратить натирание и смягчать удары. В комплект входят рукавицы.',
    cost: 7500,
    weight: 55,
    blockHiding: true,
    acChangeTo: 16,
    requirementList: [
      {
        type: 'param',
        paramType: 'str',
        min: 13,
      },
    ],
    source: {
      id: 'PHB',
      page: 145,
    },
    category: CAT_ARMOR,
    subcategory: CAT_HEAVY_ARMOR,
  },
  {
    id: ITEM_SPLINT_ARMOR,
    name: 'Наборный доспех',
    nameEn: 'Splint',
    description: 'Этот доспех состоит из узких вертикальных металлических пластин, приклёпанных к кожаной подложке, носимой поверх слоя ватина. Соединения защищаются кольчужным полотном.',
    cost: 20000,
    weight: 60,
    blockHiding: true,
    acChangeTo: 17,
    requirementList: [
      {
        type: 'param',
        paramType: 'str',
        min: 15,
      },
    ],
    source: {
      id: 'PHB',
      page: 145,
    },
    category: CAT_ARMOR,
    subcategory: CAT_HEAVY_ARMOR,
  },
  {
    id: ITEM_PLATE_ARMOR,
    name: 'Латы',
    nameEn: 'Plate ',
    description: 'Латы состоят из сформированных металлических пластин, покрывающих всё тело. В комплект лат входят рукавицы, тяжёлые кожаные сапоги, шлем с забралом, и толстый слой ватина. Ремешки и пряжки распределяют вес по всему телу.',
    cost: 150000,
    weight: 65,
    blockHiding: true,
    acChangeTo: 18,
    requirementList: [
      {
        type: 'param',
        paramType: 'str',
        min: 15,
      },
    ],
    source: {
      id: 'PHB',
      page: 145,
    },
    category: CAT_ARMOR,
    subcategory: CAT_HEAVY_ARMOR,
  },
  {
    id: ITEM_SHIELD,
    name: 'Щит',
    nameEn: 'Shield',
    description: `Щит изготавливается из дерева или металла, и несётся одной рукой. Использование щита увеличивает КД на 2. Вы получаете преимущество только от одного щита одновременно.`,
    cost: 1000,
    weight: 6,
    acBonus: 2,
    source: {
      id: 'PHB',
      page: 145,
    },
    category: CAT_ARMOR,
    subcategory: CAT_SHIELDS,
  },
  {
    id: ITEM_QUARTERSTAFF,
    name: 'Боевой посох',
    nameEn: 'Quarterstaff',
    damage: {
      cubeType: 6,
      cubeCount: 1,
    },
    cost: 20,
    damageType: DAMAGE_BLUDGEONING,
    weight: 4,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      {
        id: WEAPON_VERSATILE,
        value: {
          cubeCount: 1,
          cubeType: 8,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_SIMPLE_MELEE_WEAPON,
  },
  {
    id: ITEM_MACE,
    name: 'Булава',
    nameEn: 'Mace',
    description: 'Урон 1к6 дробящий',
    damage: {
      cubeType: 6,
      cubeCount: 1,
    },
    cost: 500,
    damageType: DAMAGE_BLUDGEONING,
    weight: 4,
    source: {
      id: 'PHB',
      page: 149,
    },
    category: CAT_WEAPON,
    subcategory: CAT_SIMPLE_MELEE_WEAPON,
  },
  {
    id: ITEM_CLUB,
    name: 'Дубинка',
    nameEn: 'Club',
    damage: {
      cubeType: 4,
      cubeCount: 1,
    },
    cost: 10,
    damageType: DAMAGE_BLUDGEONING,
    weight: 2,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_LIGHT,
    ],
    category: CAT_WEAPON,
    subcategory: CAT_SIMPLE_MELEE_WEAPON,
  },
  {
    id: ITEM_DAGGER,
    name: 'Кинжал',
    nameEn: 'Dagger',
    damage: {
      cubeType: 4,
      cubeCount: 1,
    },
    range: {
      normal: 20,
      max: 60,
    },
    cost: 200,
    damageType: DAMAGE_PIERCING,
    weight: 1,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_LIGHT,
      WEAPON_FINESSE,
      WEAPON_THROWN,
      {
        id: WEAPON_RANGE,
        value: {
          normal: 20,
          max: 60,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_SIMPLE_MELEE_WEAPON,
  },
  {
    id: ITEM_GYTHKA,
    name: 'Гитка',
    nameEn: 'Gythka',
    description: generateTextLinks(`Гитка это особое двуручное древковое оружие [три-кринов](CREATURE:${CREATURE_THRI_KREEN}) с клинками на каждом конце.`),
    damage: {
      cubeCount: 1,
      cubeType: 8,
    },
    damageType: DAMAGE_SLASHING,
    source: {
      id: 'MM',
      page: 284,
    },
    weaponPropList: [
      WEAPON_TWO_HANDED,
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_CHATKCHA,
    name: 'Чаткча',
    nameEn: 'Chatkcha',
    description: generateTextLinks(`Чаткча это особое плоское оружие [три-кринов](CREATURE:${CREATURE_THRI_KREEN}) с тремя треугольными лезвиями (лёгкое метательное оружие).`),
    damage: {
      cubeCount: 1,
      cubeType: 6,
    },
    damageType: DAMAGE_SLASHING,
    source: {
      id: 'MM',
      page: 284,
    },
    weaponPropList: [
      WEAPON_LIGHT,
      WEAPON_THROWN,
      {
        id: WEAPON_RANGE,
        value: {
          normal: 30,
          max: 120,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_SPEAR,
    name: 'Копьё',
    nameEn: 'Spear',
    damage: {
      cubeType: 6,
      cubeCount: 1,
    },
    range: {
      normal: 20,
      max: 60,
    },
    cost: 100,
    damageType: DAMAGE_PIERCING,
    weight: 3,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      {
        id: WEAPON_VERSATILE,
        value: {
          cubeCount: 1,
          cubeType: 8,
        },
      },
      WEAPON_THROWN,
      {
        id: WEAPON_RANGE,
        value: {
          normal: 20,
          max: 60,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_SIMPLE_MELEE_WEAPON,
  },
  {
    id: ITEM_LIGHT_HAMMER,
    name: 'Лёгкий молот',
    nameEn: 'Light Hammer',
    damage: {
      cubeType: 4,
      cubeCount: 1,
    },
    range: {
      normal: 20,
      max: 60,
    },
    cost: 200,
    damageType: DAMAGE_BLUDGEONING,
    weight: 2,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_LIGHT,
      WEAPON_THROWN,
      {
        id: WEAPON_RANGE,
        value: {
          normal: 20,
          max: 60,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_SIMPLE_MELEE_WEAPON,
  },
  {
    id: ITEM_JAVELIN,
    name: 'Метательное копьё',
    nameEn: 'Javelin',
    damage: {
      cubeType: 6,
      cubeCount: 1,
    },
    range: {
      normal: 30,
      max: 120,
    },
    cost: 50,
    damageType: DAMAGE_PIERCING,
    weight: 2,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_THROWN,
      {
        id: WEAPON_RANGE,
        value: {
          normal: 30,
          max: 120,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_SIMPLE_MELEE_WEAPON,
  },
  {
    id: ITEM_GREATCLUB,
    name: 'Палица',
    nameEn: 'Greatclub',
    damage: {
      cubeType: 8,
      cubeCount: 1,
    },
    cost: 20,
    damageType: DAMAGE_BLUDGEONING,
    weight: 10,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_TWO_HANDED,
    ],
    category: CAT_WEAPON,
    subcategory: CAT_SIMPLE_MELEE_WEAPON,
  },
  {
    id: ITEM_HANDAXE,
    name: 'Ручной топор',
    nameEn: 'Handaxe',
    damage: {
      cubeType: 6,
      cubeCount: 1,
    },
    range: {
      normal: 20,
      max: 60,
    },
    cost: 500,
    damageType: DAMAGE_SLASHING,
    weight: 10,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_LIGHT,
      WEAPON_THROWN,
      {
        id: WEAPON_RANGE,
        value: {
          normal: 20,
          max: 60,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_SIMPLE_MELEE_WEAPON,
  },
  {
    id: ITEM_SICKLE,
    name: 'Серп',
    nameEn: 'Sickle',
    damage: {
      cubeType: 4,
      cubeCount: 1,
    },
    damageType: DAMAGE_SLASHING,
    cost: 100,
    weight: 2,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_LIGHT,
    ],
    category: CAT_WEAPON,
    subcategory: CAT_SIMPLE_MELEE_WEAPON,
  },
  {
    id: ITEM_YKLWA,
    name: 'Иклва',
    nameEn: 'Yklwa',
    description: 'Иклва — это традиционное оружие ближнего боя чультских воинов. Иклва состоит из 3-футой деревянной рукояти со стальным или каменным лезвием длиной до 18 дюймов.',
    damage: {
      cubeType: 8,
      cubeCount: 1,
    },
    range: {
      normal: 10,
      max: 30,
    },
    cost: 100,
    damageType: DAMAGE_PIERCING,
    source: {
      id: 'ToA',
      page: 32,
    },
    weaponPropList: [
      WEAPON_THROWN,
      {
        id: WEAPON_RANGE,
        value: {
          normal: 10,
          max: 30,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_SIMPLE_MELEE_WEAPON,
  },
  {
    id: ITEM_CROSSBOW_LIGHT,
    name: 'Арбалет, лёгкий',
    nameEn: 'Crossbow, light',
    damage: {
      cubeType: 8,
      cubeCount: 1,
    },
    range: {
      normal: 80,
      max: 320,
    },
    cost: 2500,
    damageType: DAMAGE_PIERCING,
    weight: 5,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_AMMO,
      WEAPON_TWO_HANDED,
      WEAPON_RELOADING,
      {
        id: WEAPON_RANGE,
        value: {
          normal: 80,
          max: 320,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_SIMPLE_RANGE_WEAPON,
  },
  {
    id: ITEM_DART,
    name: 'Дротик',
    nameEn: 'Dart',
    damage: {
      cubeType: 4,
      cubeCount: 1,
    },
    range: {
      normal: 20,
      max: 60,
    },
    cost: 5,
    damageType: DAMAGE_PIERCING,
    weight: '0.25',
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_THROWN,
      WEAPON_FINESSE,
      {
        id: WEAPON_RANGE,
        value: {
          normal: 20,
          max: 60,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_SIMPLE_RANGE_WEAPON,
  },
  {
    id: ITEM_SHORTBOW,
    name: 'Короткий лук',
    nameEn: 'Shortbow',
    damage: {
      cubeType: 6,
      cubeCount: 1,
    },
    range: {
      normal: 80,
      max: 320,
    },
    cost: 2500,
    damageType: DAMAGE_PIERCING,
    weight: 2,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_AMMO,
      WEAPON_TWO_HANDED,
      {
        id: WEAPON_RANGE,
        value: {
          normal: 80,
          max: 320,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_SIMPLE_RANGE_WEAPON,
  },
  {
    id: ITEM_SLING,
    name: 'Праща',
    nameEn: 'Sling',
    damage: {
      cubeType: 4,
      cubeCount: 1,
    },
    range: {
      normal: 30,
      max: 120,
    },
    cost: 10,
    damageType: DAMAGE_BLUDGEONING,
    weight: 0,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_AMMO,
      {
        id: WEAPON_RANGE,
        value: {
          normal: 30,
          max: 120,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_SIMPLE_RANGE_WEAPON,
  },
  {
    id: ITEM_HALBERD,
    name: 'Алебарда',
    nameEn: 'Halberd',
    damage: {
      cubeType: 10,
      cubeCount: 1,
    },
    cost: 2000,
    damageType: DAMAGE_SLASHING,
    weight: 6,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_TWO_HANDED,
      WEAPON_REACH,
      WEAPON_HEAVY,
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_WAR_PICK,
    name: 'Боевая кирка',
    nameEn: 'War Pick',
    damage: {
      cubeType: 8,
      cubeCount: 1,
    },
    cost: 500,
    damageType: DAMAGE_PIERCING,
    weight: 2,
    source: {
      id: 'PHB',
      page: 149,
    },
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_WARHAMMER,
    name: 'Боевой молот',
    nameEn: 'Warhammer',
    damage: {
      cubeType: 8,
      cubeCount: 1,
    },
    cost: 1500,
    damageType: DAMAGE_BLUDGEONING,
    weight: 2,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      {
        id: WEAPON_VERSATILE,
        value: {
          cubeCount: 1,
          cubeType: 10,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_BATTLEAXE,
    name: 'Боевой топор',
    nameEn: 'Battleaxe',
    damage: {
      cubeType: 8,
      cubeCount: 1,
    },
    cost: 1000,
    damageType: DAMAGE_SLASHING,
    weight: 4,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      {
        id: WEAPON_VERSATILE,
        value: {
          cubeCount: 1,
          cubeType: 10,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_GLAIVE,
    name: 'Глефа',
    nameEn: 'Glaive',
    damage: {
      cubeType: 10,
      cubeCount: 1,
    },
    cost: 2000,
    damageType: DAMAGE_SLASHING,
    weight: 6,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_TWO_HANDED,
      WEAPON_REACH,
      WEAPON_HEAVY,
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_GREATSWORD,
    name: 'Двуручный меч',
    nameEn: 'Greatsword',
    damage: {
      cubeType: 6,
      cubeCount: 2,
    },
    cost: 5000,
    damageType: DAMAGE_SLASHING,
    weight: 6,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_TWO_HANDED,
      WEAPON_HEAVY,
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_LANCE,
    name: 'Длинное копьё',
    nameEn: 'Lance',
    description: 'Вы совершаете с помехой атаки длинным копьём по существам, находящимся в пределах 5 футов от вас. Кроме того, если вы не находитесь верхом, длинное копьё используется двумя руками.',
    damage: {
      cubeType: 12,
      cubeCount: 1,
    },
    cost: 1000,
    damageType: DAMAGE_PIERCING,
    weight: 6,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_REACH,
      WEAPON_SPECIAL,
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_LONGSWORD,
    name: 'Длинный меч',
    nameEn: 'Longsword',
    damage: {
      cubeType: 8,
      cubeCount: 1,
    },
    cost: 1500,
    damageType: DAMAGE_SLASHING,
    weight: 3,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      {
        id: WEAPON_VERSATILE,
        value: {
          cubeCount: 1,
          cubeType: 10,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_WHIP,
    name: 'Кнут',
    nameEn: 'Whip',
    damage: {
      cubeType: 4,
      cubeCount: 1,
    },
    cost: 200,
    damageType: DAMAGE_SLASHING,
    weight: 3,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_REACH,
      WEAPON_FINESSE,
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_SHORTSWORD,
    name: 'Короткий меч',
    nameEn: 'Shortsword',
    damage: {
      cubeType: 6,
      cubeCount: 1,
    },
    cost: 1000,
    damageType: DAMAGE_PIERCING,
    weight: 2,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_LIGHT,
      WEAPON_FINESSE,
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_MAUL,
    name: 'Молот',
    nameEn: 'Maul',
    damage: {
      cubeType: 6,
      cubeCount: 2,
    },
    cost: 1000,
    damageType: DAMAGE_PIERCING,
    weight: 10,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_HEAVY,
      WEAPON_TWO_HANDED,
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_MORNINGSTAR,
    name: 'Моргенштерн',
    nameEn: 'Morningstar',
    damage: {
      cubeType: 8,
      cubeCount: 1,
    },
    cost: 1500,
    damageType: DAMAGE_PIERCING,
    weight: 4,
    source: {
      id: 'PHB',
      page: 149,
    },
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_PIKE,
    name: 'Пика',
    nameEn: 'Pike',
    damage: {
      cubeType: 10,
      cubeCount: 1,
    },
    cost: 500,
    damageType: DAMAGE_PIERCING,
    weight: 18,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_TWO_HANDED,
      WEAPON_REACH,
      WEAPON_HEAVY,
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_RAPIER,
    name: 'Рапира',
    nameEn: 'Rapier',
    damage: {
      cubeType: 8,
      cubeCount: 1,
    },
    cost: 2500,
    damageType: DAMAGE_PIERCING,
    weight: 2,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_FINESSE,
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_GREATAXE,
    name: 'Секира',
    nameEn: 'Greataxe',
    damage: {
      cubeType: 12,
      cubeCount: 1,
    },
    cost: 3000,
    damageType: DAMAGE_PIERCING,
    weight: 7,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_TWO_HANDED,
      WEAPON_HEAVY,
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_SCIMITAR,
    name: 'Скимитар',
    nameEn: 'Scimitar',
    damage: {
      cubeType: 6,
      cubeCount: 1,
    },
    cost: 2500,
    damageType: DAMAGE_PIERCING,
    weight: 3,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_LIGHT,
      WEAPON_FINESSE,
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_TRIDENT,
    name: 'Трезубец',
    nameEn: 'Trident',
    damage: {
      cubeType: 6,
      cubeCount: 1,
    },
    range: {
      normal: 20,
      max: 60,
    },
    cost: 500,
    damageType: DAMAGE_PIERCING,
    weight: 4,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_THROWN,
      {
        id: WEAPON_VERSATILE,
        value: {
          cubeCount: 1,
          cubeType: 8,
        },
      },
      {
        id: WEAPON_RANGE,
        value: {
          normal: 150,
          max: 600,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_FLAIL,
    name: 'Цеп',
    nameEn: 'Flail',
    damage: {
      cubeType: 8,
      cubeCount: 1,
    },
    cost: 1000,
    damageType: DAMAGE_BLUDGEONING,
    weight: 2,
    source: {
      id: 'PHB',
      page: 149,
    },
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_MELEE_WEAPON,
  },
  {
    id: ITEM_CROSSBOW_HAND,
    name: 'Арбалет, ручной',
    nameEn: 'Crossbow, hand',
    damage: {
      cubeType: 6,
      cubeCount: 1,
    },
    range: {
      normal: 30,
      max: 120,
    },
    cost: 7500,
    damageType: DAMAGE_PIERCING,
    weight: 3,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_AMMO,
      WEAPON_LIGHT,
      WEAPON_RELOADING,
      {
        id: WEAPON_RANGE,
        value: {
          normal: 30,
          max: 120,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_RANGE_WEAPON,
  },
  {
    id: ITEM_CROSSBOW_HEAVY,
    name: 'Арбалет, тяжёлый',
    nameEn: 'Crossbow, heavy',
    damage: {
      cubeType: 10,
      cubeCount: 1,
    },
    range: {
      normal: 100,
      max: 400,
    },
    cost: 5000,
    damageType: DAMAGE_PIERCING,
    weight: 18,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_AMMO,
      WEAPON_TWO_HANDED,
      WEAPON_RELOADING,
      WEAPON_HEAVY,
      {
        id: WEAPON_RANGE,
        value: {
          normal: 100,
          max: 400,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_RANGE_WEAPON,
  },
  {
    id: ITEM_LONGBOW,
    name: 'Длинный лук',
    nameEn: 'Longbow',
    damage: {
      cubeType: 8,
      cubeCount: 1,
    },
    range: {
      normal: 150,
      max: 600,
    },
    cost: 5000,
    damageType: DAMAGE_PIERCING,
    weight: 2,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_AMMO,
      WEAPON_TWO_HANDED,
      WEAPON_HEAVY,
      {
        id: WEAPON_RANGE,
        value: {
          normal: 150,
          max: 600,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_RANGE_WEAPON,
  },
  {
    id: ITEM_BLOWGUN,
    name: 'Духовая трубка',
    nameEn: 'Blowgun',
    damage: {
      cubeType: 0,
      cubeCount: 0,
      cubeBonus: 1,
    },
    range: {
      normal: 25,
      max: 100,
    },
    cost: 1000,
    damageType: DAMAGE_PIERCING,
    weight: 1,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_AMMO,
      WEAPON_RELOADING,
      {
        id: WEAPON_RANGE,
        value: {
          normal: 25,
          max: 100,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_RANGE_WEAPON,
  },
  {
    id: ITEM_NET,
    name: 'Сеть',
    nameEn: 'Net',
    description: 'Существа Большого и меньшего размеров, по которым попала атака сетью, становятся опутанными, пока не высвободятся. Сеть не оказывает эффекта на бесформенных существ и тех, чей размер Огромный или ещё больше. Существо может действием совершить проверку Силы со Сл 10, чтобы высвободиться самому или освободить другое существо, находящееся в пределах его досягаемости. Причинение сети 5 единиц рубящего урона (КД 10) тоже освобождает существо, не причиняя ему вреда, оканчивая эффект и уничтожая сеть.\nЕсли вы действием, бонусным действием или реакцией совершаете атаку сетью, вы можете совершить только одну атаку, вне зависимости от количества положенных атак.',
    range: {
      normal: 5,
      max: 15,
    },
    cost: 100,
    weight: 3,
    source: {
      id: 'PHB',
      page: 149,
    },
    weaponPropList: [
      WEAPON_THROWN,
      WEAPON_SPECIAL,
      {
        id: WEAPON_RANGE,
        value: {
          normal: 5,
          max: 15,
        },
      },
    ],
    category: CAT_WEAPON,
    subcategory: CAT_MARTIAL_RANGE_WEAPON,
  },
  {
    id: ITEM_ABACUS,
    name: 'Абак',
    nameEn: 'Abacus',
    cost: 200,
    weight: 2,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_ALCHEMISTS_FIRE,
    name: 'Алхимический огонь',
    nameEn: 'Alchemist’s Fire',
    description: 'Эта вязкая и клейкая жидкость воспламеняется при контакте с воздухом. Вы можете действием метнуть фляжку на расстояние до 20 фт, разбив её от удара. Совершите дальнобойную атаку по существу или предмету, считая алхимический огонь импровизированным оружием. При попадании цель получает урон огнём 1к4 в начале каждого своего хода. Существо может окончить этот урон, потратив действие на тушение пламени, и совершив проверку Ловкости со Сл 10.',
    damage: {
      cubeType: 4,
      cubeCount: 1,
    },
    range: {
      normal: 20,
      max: 20,
    },
    cost: 5000,
    damageType: DAMAGE_FIRE,
    saveThrow: {
      type: 'dex',
      dc: 10,
    },
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_BLOCK_AND_TACKLE,
    name: 'Блок и лебёдка',
    nameEn: 'Block and tackle',
    description: 'Набор блоков и тросов с крюками для подвешивания предметов. Блок и лебёдка позволяют вам поднять в четыре раза больше, чем обычно.',
    cost: 100,
    weight: 5,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_CROSSBOW_BOLTS,
    name: 'Арбалетные болты',
    nameEn: 'Crossbow bolts',
    description: '20 шт.',
    cost: 100,
    weight: 1.5,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_AMMO,
  },
  {
    id: ITEM_BLOWGUN_NEEDLES,
    name: 'Иглы для трубки',
    nameEn: 'Blowgun needles',
    description: '50 шт.',
    cost: 100,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_AMMO,
  },
  {
    id: ITEM_SLING_BULLETS,
    name: 'Снаряды для пращи',
    nameEn: 'Sling bullets',
    description: '20 шт.',
    cost: 4,
    weight: 1.5,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_AMMO,
  },
  {
    id: ITEM_ARROWS,
    name: 'Стрелы',
    nameEn: 'Arrows',
    description: '20 шт.',
    cost: 100,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_AMMO,
  },
  {
    id: ITEM_BARREL,
    name: 'Бочка',
    nameEn: 'Barrel',
    description: '40 галлонов, 4 кубических фута',
    cost: 200,
    weight: 70,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_PAPER,
    name: 'Бумага',
    nameEn: 'Paper',
    description: '1 лист',
    cost: 20,
    weight: 0,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_WATERSKIN,
    name: 'Бурдюк',
    nameEn: 'Waterskin',
    description: '4 пинты',
    cost: 20,
    weight: 5,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_BOTTLE_GLASS,
    name: 'Бутылка, стеклянная',
    nameEn: 'Bottle, glass',
    description: '1,5 пинты',
    cost: 200,
    weight: 2,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_BUCKET,
    name: 'Ведро',
    nameEn: 'Bucket',
    description: '3 галлона, ½ фт³',
    cost: 5,
    weight: 2,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_ROPE_HEMP,
    name: 'Верёвка пеньковая',
    nameEn: 'Rope, hemp',
    description: '50 фт. У верёвки 2 хита, и её можно порвать проверкой Силы со Сл 17',
    cost: 100,
    weight: 10,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_ROPE_SILK,
    name: 'Верёвка шёлковая',
    nameEn: 'Rope, silk',
    description: '50 фт. У верёвки 2 хита, и её можно порвать проверкой Силы со Сл 17',
    cost: 1000,
    weight: 5,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_SCALE_MERCHANTS,
    name: 'Весы, торговые',
    nameEn: 'Scale, Merchant’s',
    description: 'В набор входят рычажные весы, чашки и набор грузиков на 2 фунта. С их помощью можно точно измерять вес небольших предметов, таких как драгоценные металлы или товары.',
    cost: 500,
    weight: 3,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_SEALING_WAX,
    name: 'Сургуч',
    nameAlt: 'Воск',
    nameEn: 'Sealing wax',
    cost: 50,
    weight: 0,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_POT_IRON,
    name: 'Горшок, железный',
    nameEn: 'Pot, iron',
    description: '1 галлон',
    cost: 200,
    weight: 10,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_PITCHER,
    name: 'Графин',
    nameEn: 'Pitcher',
    description: '1 галлон',
    cost: 2,
    weight: 4,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_PERFUME,
    name: 'Духи',
    nameEn: 'Perfume',
    description: 'флакон',
    cost: 500,
    weight: 0,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_LOCK,
    name: 'Замок',
    nameEn: 'Lock',
    description: 'Вместе с замком идёт и ключ. Без ключа существо, владеющее воровскими инструментами, может вскрыть замок успешной проверкой Ловкости со Сл 15. Мастер может решить, что есть более качественные замки, стоящие больше.',
    cost: 1000,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_POTION_OF_HEALING,
    name: 'Зелье лечения',
    nameEn: 'Potion of Healing.',
    description: 'Существо, выпившее магическую красную жидкость из этого флакона, восстанавливает 2к4 + 2 хита. Зелье выпивается или заливается в рот другому действием.',
    cost: 5000,
    weight: 0.5,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_MIRROR_STEEL,
    name: 'Зеркало, стальное',
    nameEn: 'Mirror, steel',
    cost: 500,
    weight: 0.5,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_CALTROPS,
    name: 'Калтропы',
    nameEn: 'Caltrops',
    description: '20 штук в сумке. Вы можете действием рассыпать сумку калтропов по площади в 5 × 5 фт. Все существа, входящие в эту область, должны преуспеть в спасброске Ловкости со Сл 15, иначе они останавливаются и получают колющий урон 1. Пока это существо не восстановит как минимум 1 хит, его скорость ходьбы уменьшена на 10 фт. Существо, перемещающееся по этой области с уменьшенной вдвое скоростью, не обязано совершать спасбросок.',
    cost: 100,
    damageType: DAMAGE_PIERCING,
    weight: 2,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_MANACLES,
    name: 'Кандалы',
    nameEn: 'Manacles',
    description: 'Эти металлические оковы удерживают существ Маленького и Среднего размера. Для того чтобы сбежать из кандалов, требуется успешная проверка Ловкости со Сл 20. Для того чтобы их сломать, требуется проверка Силы со Сл 20. Каждый набор кандалов идёт с одним ключом. Без ключа существо, владеющее воровскими инструментами, может вскрыть замок кандалов успешной проверкой Ловкости со Сл 15. У кандалов 15 хитов.',
    cost: 200,
    weight: 6,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_ACID,
    name: 'Кислота',
    nameEn: 'Acid',
    description: 'Флакон. Вы можете действием выплеснуть содержимое этого сосуда на существо, находящееся в пределах 5 фт от вас, или метнуть сосуд на расстояние до 20 фт, чтобы он разбился от удара. В любом случае совершите дальнобойную атаку против существа или предмета, считая кислоту импровизированным оружием. При попадании цель получает урон кислотой 2к6.',
    damage: {
      cubeType: 6,
      cubeCount: 2,
    },
    range: {
      normal: 20,
      max: 20,
    },
    cost: 2500,
    damageType: DAMAGE_ACID,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_BOOK,
    name: 'Книга',
    nameEn: 'Book',
    description: 'В книге могут быть стихи, документальные сведения, информация о чём-либо, диаграммы и заметки о гномьих приспособлениях, или что угодно другое, представленное текстом и картинками.',
    cost: 2500,
    weight: 5,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_SPELLBOOK,
    name: 'Книга заклинаний',
    nameEn: 'Spellbook',
    description: 'Книги заклинаний очень важны для волшебников. Это переплетённые кожей тома, содержащие 100 пустых пергаментных страниц, на которых можно записывать заклинания.',
    cost: 5000,
    weight: 3,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_BELL,
    name: 'Колокольчик',
    nameEn: 'Bell',
    cost: 100,
    weight: 0,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_QUIVER,
    name: 'Колчан',
    nameEn: 'Quiver',
    description: 'В колчан помещается 20 стрел.',
    cost: 100,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_SIGNET_RING,
    name: 'Кольцо-печатка',
    nameEn: 'Signet ring',
    cost: 500,
    weight: 0,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_CLIMBERS_KIT,
    name: 'Комплект для лазания',
    nameEn: 'Climber’s kit',
    description: 'В набор для лазания входят шлямбуры, накладные подошвы, перчатки и страховочная привязь. Вы можете действием использовать набор для лазания, чтобы закрепиться на высоте; если вы делаете это, вы не можете упасть более чем на 25 фт от того места, где закрепились, но и не можете подняться выше 25 фт от этого места, не открепившись.',
    cost: 2500,
    weight: 12,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_FISHING_TACKLE,
    name: 'Комплект для рыбалки',
    nameEn: 'Fishing Tackle',
    description: 'В этот набор входит удилище, шёлковая леска, пробковый поплавок, стальные крючки, свинцовые грузила, приманки из ниток и мелкоячеистая сеть.',
    cost: 100,
    weight: 4,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_HEALERS_KIT,
    name: 'Комплект целителя',
    nameEn: 'Healer’s Kit',
    description: 'Это кожаный кошель с бинтами, мазями и шинами. Набор годится для 10 использований. Вы можете действием потратить одно использование набора для стабилизации существа, у которого 0 хитов, не совершая проверку Мудрости (Медицина).',
    cost: 500,
    weight: 3,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_CASE_CROSSBOW_BOLT,
    name: 'Контейнер для арбалетных болтов',
    nameEn: 'Case, Crossbow Bolt',
    description: 'В этот деревянный контейнер помещаются 20 арбалетных болтов.',
    cost: 100,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_CASE_MAP_OR_SCROLL,
    name: 'Контейнер для карт и свитков',
    nameEn: 'Case, Map or Scroll',
    description: 'В этом цилиндрическом кожаном тубусе может храниться до десяти скрученных листов бумаги или пять скрученных листов пергамента.',
    cost: 100,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_BASKET,
    name: 'Корзина',
    nameEn: 'Basket',
    description: '2 фт.³/40 фунтов',
    cost: 40,
    weight: 2,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_POUCH,
    name: 'Кошель',
    nameEn: 'Pouch',
    description: '0,2 фт³/6 фунтов. В кожаном или тканевом кошеле поместится 20 снарядов для пращи или 50 иголок для духовой трубки, а также другие вещи.',
    cost: 50,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_GRAPPLING_HOOK,
    name: 'Крюк-кошка',
    nameEn: 'Grappling hook',
    cost: 200,
    weight: 4,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_JUG,
    name: 'Кувшин',
    nameEn: 'Jug',
    description: '1 галлон',
    cost: 2,
    weight: 4,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_LAMP,
    name: 'Лампа',
    nameEn: 'Lamp',
    description: 'Лампа испускает яркий свет в пределах 15 фт и тусклый свет в пределах ещё 30 фт. Зажжённая лампа горит 6 часов от одной фляги (1 пинта) масла.',
    range: {
      normal: 15,
      max: 45,
    },
    cost: 50,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_LADDER,
    name: 'Лестница',
    nameEn: 'Ladder',
    description: '10 фт',
    cost: 10,
    weight: 25,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_CROWBAR,
    name: 'Ломик',
    nameEn: 'Crowbar',
    description: 'Использование ломика позволяет совершать проверки Силы с преимуществом, если рычаг должен помочь.',
    cost: 200,
    weight: 5,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_SHOVEL,
    name: 'Лопата',
    nameEn: 'Shovel',
    description: '',
    cost: 200,
    weight: 5,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_WAND,
    name: 'Волшебная палочка',
    nameEn: 'Wand',
    description: 'Это особый предмет, созданный для проведения тайных заклинаний. Волшебники, колдуны и чародеи могут использовать эти предметы в качестве фокусировки для заклинаний, как описано в главе 10.',
    cost: 1000,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_MAGIC_FOCUS,
  },
  {
    id: ITEM_ROD,
    name: 'Жезл',
    nameEn: 'Rod',
    description: 'Это особый предмет, созданный для проведения тайных заклинаний. Волшебники, колдуны и чародеи могут использовать эти предметы в качестве фокусировки для заклинаний, как описано в главе 10.',
    cost: 1000,
    weight: 2,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_MAGIC_FOCUS,
  },
  {
    id: ITEM_CRYSTAL,
    name: 'Кристал',
    nameEn: 'Crystal',
    description: 'Это особый предмет, созданный для проведения тайных заклинаний. Волшебники, колдуны и чародеи могут использовать эти предметы в качестве фокусировки для заклинаний, как описано в главе 10.',
    cost: 1000,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_MAGIC_FOCUS,
  },
  {
    id: ITEM_STAFF,
    name: 'Посох',
    nameEn: 'Staff',
    description: 'Это особый предмет, созданный для проведения тайных заклинаний. Волшебники, колдуны и чародеи могут использовать эти предметы в качестве фокусировки для заклинаний, как описано в главе 10.',
    cost: 500,
    weight: 4,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_MAGIC_FOCUS,
  },
  {
    id: ITEM_ORB,
    name: 'Сфера',
    nameEn: 'Orb',
    description: 'Это особый предмет, созданный для проведения тайных заклинаний. Волшебники, колдуны и чародеи могут использовать эти предметы в качестве фокусировки для заклинаний, как описано в главе 10.',
    cost: 2000,
    weight: 3,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_MAGIC_FOCUS,
  },
  {
    id: ITEM_OIL,
    name: 'Масло',
    nameEn: 'Oil',
    description: 'Фляга. Обычно масло продаётся в глиняных флягах по 1 пинте (0,5 литра). Вы можете действием облить маслом из фляги существо, находящееся в пределах 5 фт, или кинуть её на 20 фт, ломая при ударе. Совершите дальнобойную атаку по целевому существу или предмету, считая масло импровизированным оружием. При попадании цель покрывается маслом. Если цель получает урон огнём, пока масло не высохло (1 минута), она получает дополнительный урон огнём 5 от горящего масла. Вы можете также вылить фляжку масла на землю, покрыв площадь 5 × 5 фт, при условии, что пол ровный. Если теперь масло поджечь, оно горит 2 раунда и причиняет урон огнём 5 всем существам, входящим в эту область или оканчивающим в ней ход. Существо может получить этот урон только один раз за ход.',
    cost: 10,
    damage: {
      cubeBonus: 5,
    },
    range: {
      normal: 20,
      max: 20,
    },
    damageType: DAMAGE_FIRE,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_CHALK,
    name: 'Мел',
    nameEn: 'Chalk',
    description: '1 кусочек',
    cost: 1,
    weight: 0,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_BALL_BEARINGS,
    name: 'Металлические шарики',
    nameEn: 'Ball Bearings',
    description: 'В сумке 1000 шт. Вы можете действием рассыпать из этого мешка крохотные металлические шарики, покрыв площадь 10 × 10 фт. Существа, перемещающиеся по этой области, должны преуспеть в спасброске Ловкости со Сл 10, иначе они падают ничком. Существо, перемещающееся по этой области с уменьшенной вдвое скоростью, не обязано совершать спасбросок',
    cost: 100,
    weight: 2,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_SACK,
    name: 'Мешок',
    nameEn: 'Sack',
    description: '1 кубический фут/30 фунтов',
    cost: 1,
    weight: 0.5,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_COMPONENT_POUCH,
    name: 'Мешочек с компонентами',
    nameEn: 'Component Pouch',
    description: 'Мешочек с компонентами это маленький водонепроницаемый кожаный поясной кошель с отделениями для хранения материальных компонентов и других особых предметов, нужных для накладывания заклинаний, если только у этих компонентов не указана стоимость (смотрите описание заклинания).',
    cost: 2500,
    weight: 2,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_HAMMER_SLEDGE,
    name: 'Молот, кузнечный',
    nameEn: 'Hammer, sledge',
    cost: 200,
    weight: 10,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_HAMMER,
    name: 'Молоток',
    nameEn: 'Hammer',
    cost: 100,
    weight: 3,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_SOAP,
    name: 'Мыло',
    nameEn: 'Soap',
    cost: 2,
    weight: 0,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_CLOTHES_TRAVELERS,
    name: 'Дорожная одежда',
    nameEn: 'Clothes, traveler’s',
    cost: 200,
    weight: 4,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_CLOTHES,
  },
  {
    id: ITEM_CLOTHES_COSTUME,
    name: 'Костюм',
    nameEn: 'Costume clothes',
    cost: 500,
    weight: 4,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_CLOTHES,
  },
  {
    id: ITEM_CLOTHES_COMMON,
    name: 'Обычная одежда',
    nameEn: 'Common clothes',
    cost: 50,
    weight: 3,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_CLOTHES,
  },
  {
    id: ITEM_CLOTHES_FINE,
    name: 'Отличная одежда',
    nameEn: 'Fine clothes',
    cost: 1500,
    weight: 6,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_CLOTHES,
  },
  {
    id: ITEM_BLANKET,
    name: 'Одеяло',
    nameEn: 'Blanket',
    cost: 50,
    weight: 3,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_HUNTING_TRAP,
    name: 'Охотничий капкан',
    nameEn: 'Hunting Trap',
    description: 'Если вы действием установите эту ловушку, она образует стальное кольцо с зазубренными краями, которая захлопывается, когда в её центр наступает существо. Капкан привязывается толстой цепью к неподвижному предмету, такому как дерево или колышек, вбитый в землю. Существо, наступившее в центр, должно преуспеть в спасброске Ловкости со Сл 13, иначе оно получает колющий урон 1к4 и прекращает перемещение. Впоследствии, пока существо не высвободится из ловушки, его перемещения ограничены длиной цепи (обычно 3 фута). Любое существо может действием совершить проверку Силы со Сл 13, чтобы высвободить себя или другое существо, находящееся в пределах досягаемости. Каждая проваленная проверка причиняет пойманному существу колющий урон 1.',
    damage: {
      cubeType: 4,
      cubeCount: 1,
    },
    cost: 500,
    damageType: DAMAGE_PIERCING,
    weight: 25,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_TENT,
    name: 'Палатка',
    nameEn: 'Tent',
    description: 'В палатке, простом парусиновом жилище, могут спать двое.',
    cost: 200,
    weight: 20,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_PARCHMENT,
    name: 'Пергамент',
    nameEn: 'Parchment',
    description: '1 лист',
    cost: 10,
    weight: 0,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_HOURGLASS,
    name: 'Песочные часы',
    nameEn: 'Hourglass',
    cost: 2500,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_INK_PEN,
    name: 'Писчее перо',
    nameEn: 'Ink pen',
    cost: 2,
    weight: 0,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_SPYGLASS,
    name: 'Подзорная труба',
    nameEn: 'Spyglass',
    description: 'Предметы, на которые смотрят в подзорную трубу, увеличиваются в два раза.',
    cost: 100000,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_ANTITOXIN,
    name: 'Противоядие',
    nameEn: 'Antitoxin',
    description: 'Флакон. Существо, выпившее жидкость из этого флакона, в течение часа совершает спасброски от яда с преимуществом. Оно не предоставляет преимущества нежити и конструктам.',
    cost: 5000,
    weight: 0,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_RATIONS,
    name: 'Рацион',
    nameEn: 'Rations',
    description: 'На 1 день. Рационы состоят из обезвоженной пищи, подходящей для путешествий, включая вяленое мясо, сухофрукты, галеты и орехи.',
    cost: 50,
    weight: 2,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_BACKPACK,
    name: 'Рюкзак',
    nameEn: 'Backpack',
    description: '1 фт³/30 фунтов',
    cost: 200,
    weight: 5,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_ROBES,
    name: 'Ряса',
    nameEn: 'Robes',
    cost: 100,
    weight: 4,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_CANDLE,
    name: 'Свеча',
    nameEn: 'Candle',
    description: 'В течение 1 часа свеча испускает яркий свет в пределах радиуса 5 фт и тусклый свет в пределах ещё 5 фт.',
    range: {
      normal: 5,
      max: 10,
    },
    cost: 1,
    weight: 0,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_HOLY_WATER,
    name: 'Святая вода',
    nameEn: 'Holy Water',
    description: 'Вы можете действием облить содержимым этой фляги существо, находящееся в пределах 5 фт, или кинуть флягу на 20 фт, ломая при ударе. Совершите дальнобойную атаку по целевому существу, считая святую воду импровизированным оружием. Если цель — изверг или нежить, она получает урон излучением 2к6.\nЖрец или паладин может создать святую воду, исполнив особый ритуал. Этот ритуал исполняется 1 час, использует толчёное серебро на 25 зм и требует, чтобы заклинатель потратил ячейку заклинаний 1 уровня.',
    damage: {
      cubeType: 6,
      cubeCount: 2,
    },
    range: {
      normal: 20,
      max: 20,
    },
    cost: 2500,
    damageType: DAMAGE_RADIANT,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_AMULET,
    name: 'Амулет',
    nameEn: 'Amulet',
    description: 'Священный символ изображает божество или целый пантеон. Это амулет, изображающий символ божества. Жрец или паладин может использовать священный символ в качестве фокусировки для заклинаний. Для такого использования символа заклинатель должен держать его в руке, носить у всех на виду или нести на щите.',
    cost: 500,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_HOLY_SYMBOL,
  },
  {
    id: ITEM_RELIQUARY,
    name: 'Реликварий',
    nameEn: 'Reliquary',
    description: 'Священный символ изображает божество или целый пантеон. Это крохотная коробочка, в которой хранится священная реликвия. Жрец или паладин может использовать священный символ в качестве фокусировки для заклинаний. Для такого использования символа заклинатель должен держать его в руке, носить у всех на виду или нести на щите.',
    cost: 500,
    weight: 2,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_HOLY_SYMBOL,
  },
  {
    id: ITEM_EMBLEM,
    name: 'Эмблема',
    nameEn: 'Emblem',
    description: 'Священный символ изображает божество или целый пантеон. Это символ, выгравированный или выложенный камнями в качестве эмблемы на щите. Жрец или паладин может использовать священный символ в качестве фокусировки для заклинаний. Для такого использования символа заклинатель должен держать его в руке, носить у всех на виду или нести на щите.',
    cost: 500,
    weight: 0,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_HOLY_SYMBOL,
  },
  {
    id: ITEM_SIGNAL_WHISTLE,
    name: 'Сигнальный свисток',
    nameEn: 'Signal whistle',
    cost: 5,
    weight: 0,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_BEDROLL,
    name: 'Спальник',
    nameEn: 'Bedroll',
    cost: 100,
    weight: 7,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_MESS_KIT,
    name: 'Столовый набор',
    nameEn: 'Mess Kit',
    description: 'В этой небольшой коробке находится чашка и простые столовые приборы. Коробка раскрывается, и одна сторона может использоваться как сковорода, а другая — как тарелка или неглубокая миска.',
    cost: 20,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_CHEST,
    name: 'Сундук',
    nameEn: 'Chest',
    description: '12 фт³/300 фунтов',
    cost: 500,
    weight: 25,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_RAM_PORTABLE,
    name: 'Таран, портативный',
    nameEn: 'Ram, Portable',
    description: 'Вы можете вышибать портативным тараном двери. Вы получаете бонус +4 к проверкам Силы. Если другой персонаж помогает вам использовать таран, вы совершаете проверку с преимуществом.',
    cost: 400,
    weight: 35,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_WHETSTONE,
    name: 'Точильный камень',
    nameEn: 'Whetstone',
    cost: 1,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_TINDERBOX,
    name: 'Трутница',
    nameEn: 'Tinderbox',
    description: 'В этом небольшом контейнере находится кремень, кресало и трут (обычно это сухая тряпка, вымоченная в масле), используемые для разжигания огня. Использование его для разжигания факела — или чего-нибудь другого, легковоспламеняющегося — требует одного действия. Разжигание другого огня требует 1 минуты.',
    cost: 50,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_MAGNIFYING_GLASS,
    name: 'Увеличительное стекло',
    nameEn: 'Magnifying Glass',
    description: 'Эта линза позволяет разглядывать маленькие предметы. Линзу также можно использовать для замены кремня и кресала. Разжигание огня увеличительным стеклом требует света, яркого как свет солнца, трута для розжига и примерно 5 минут. Увеличительное стекло позволяет совершать с преимуществом проверки характеристик, сделанных для оценки или исследования мелких и высокодетализированных предметов.',
    cost: 10000,
    weight: 0,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_TORCH,
    name: 'Факел',
    nameEn: 'Torch',
    description: 'Факел горит 1 час, испуская яркий свет в пределах 20 фт и тусклый свет в пределах ещё 20 фт. Если вы совершаете рукопашную атаку горящим факелом и попадаете, он причиняет урон огнём 1.',
    damage: {
      cubeBonus: 1,
    },
    range: {
      normal: 20,
      max: 40,
    },
    cost: 1,
    damageType: DAMAGE_FIRE,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_VIAL,
    name: 'Флакон',
    nameEn: 'Vial',
    description: '4 унции',
    cost: 100,
    weight: 0,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_TANKARD,
    name: 'Большая кружка',
    nameEn: 'Tankard',
    description: '1 пинта',
    cost: 2,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_FLASK,
    name: 'Фляга',
    nameEn: 'Flask',
    description: '1 пинта',
    cost: 2,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_SPRIG_OF_MISTLETOE,
    name: 'Веточка омелы',
    nameEn: 'Sprig of mistletoe',
    description: 'Друид может использовать этот предмет в качестве фокусировки для заклинаний.',
    cost: 100,
    weight: 0,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_DRUID_FOCUS,
  },
  {
    id: ITEM_SPRIG_OF_HOLLY,
    name: 'Веточка падуба',
    nameEn: 'Sprig of holly',
    description: 'Друид может использовать этот предмет в качестве фокусировки для заклинаний.',
    cost: 100,
    weight: 0,
    source: {
      id: 'PHB',
      page: 154,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_DRUID_FOCUS,
  },
  {
    id: ITEM_YEW_WAND,
    name: 'Тисовая палочка',
    nameEn: 'Yew wand',
    description: 'Палочка из тиса или другого дерева. Друид может использовать этот предмет в качестве фокусировки для заклинаний.',
    cost: 1000,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_DRUID_FOCUS,
  },
  {
    id: ITEM_YEW_SCEPTER,
    name: 'Тисовый скипетр',
    nameEn: 'Yew scepter',
    description: 'Скипетр из тиса или другого дерева. Друид может использовать этот предмет в качестве фокусировки для заклинаний.',
    cost: 1000,
    weight: 1,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_DRUID_FOCUS,
  },
  {
    id: ITEM_WOODEN_STAFF,
    name: 'Деревянный посох',
    nameEn: 'Wooden staff',
    description: 'Посох, созданный из живого дерева. Друид может использовать этот предмет в качестве фокусировки для заклинаний.',
    cost: 500,
    weight: 4,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_DRUID_FOCUS,
  },
  {
    id: ITEM_TOTEM,
    name: 'Тотем',
    nameEn: ITEM_TOTEM,
    description: 'Тотем с перьями, мехом, костями и зубами священных животных. Друид может использовать этот предмет в качестве фокусировки для заклинаний.',
    cost: 100,
    weight: 0,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_DRUID_FOCUS,
  },
  {
    id: ITEM_LANTERN_HOODED,
    name: 'Фонарь, закрытый',
    nameEn: `Lantern, Hooded`,
    description: 'Закрытый фонарь испускает яркий свет в пределах 30 фт и тусклый свет в  пределах ещё 30 фт. Зажжённый фонарь горит 6 часов от одной фляги (1 пинта) масла. Вы можете действием опустить козырёк, уменьшив освещение до тусклого света в пределах 5 фт.',
    range: {
      normal: 30,
      max: 60,
    },
    cost: 500,
    weight: 2,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_LANTERN_BULLSEYE,
    name: 'Фонарь, направленный',
    nameEn: 'Lantern, Bullseye',
    description: 'Направленный фонарь испускает яркий свет 60-фтым конусом и тусклый свет в пределах ещё 60 фт. Зажжённый фонарь горит 6 часов от одной фляги (1 пинта) масла.',
    range: {
      normal: 60,
      max: 120,
    },
    cost: 1000,
    weight: 2,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_CHAIN,
    name: 'Цепь',
    nameEn: 'Chain',
    description: 'Длина 10 фт. У цепи 10 хитов. Её можно порвать успешной проверкой Силы со Сл 20.',
    length: 10,
    hp: 10,
    cost: 500,
    saveThrow: {
      type: 'str',
      dc: 20,
    },
    weight: 10,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_INK,
    name: 'Чернила',
    nameEn: 'Ink',
    description: 'Бутылочка, 1 унция',
    cost: 1000,
    weight: 0,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_POLE,
    name: 'Шест',
    nameEn: 'Pole',
    description: 'Длина 10 фт',
    cost: 5,
    weight: 7,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_SPIKES_IRON,
    name: 'Шипы железные',
    nameEn: 'Spikes, iron',
    description: '10 штук',
    cost: 100,
    weight: 5,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_PITON,
    name: 'Шлямбур',
    nameEn: 'Piton',
    cost: 5,
    weight: 0.25,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
  },
  {
    id: ITEM_POISON_BASIC,
    name: 'Яд, простой',
    nameEn: 'Poison, Basic',
    description: 'Вы можете покрыть ядом из этого флакона одно рубящее или колющее оружие или три боеприпаса. Наносится яд одним действием. Существо, по которому попадёт отравленное оружие или боеприпас, должно совершить спасбросок Телосложения со Сл 10, получая в случае провала урон ядом 1к4. Нанесённый яд эффективен 1 минуту, после чего высыхает.',
    damage: {
      cubeType: 4,
      cubeCount: 1,
    },
    saveThrow: {
      type: 'con',
      dc: 10,
    },
    cost: 10000,
    damageType: DAMAGE_POISON,
    poisonType: 'injury',
    weight: 0,
    source: {
      id: 'PHB',
      page: 150,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_POISONS,
  },
  {
    id: ITEM_ENTERTAINERS_PACK,
    name: 'Набор артиста',
    nameEn: 'Entertainer’s Pack',
    description: 'Включает рюкзак, спальник, 2 костюма, 5 свечек, рационы на 5 дней, бурдюк и набор для грима',
    cost: 4000,
    weight: 35,
    source: {
      id: 'PHB',
      page: 151,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_EQUIPMENT_KIT,
  },
  {
    id: ITEM_BURGLARS_PACK,
    name: 'Набор взломщика',
    nameEn: 'Burglar’s Pack',
    description: 'Включает рюкзак, сумку с 1 000 металлических шариков, 10 фт лески, колокольчик, 5 свечек, ломик, молоток, 10 шлямбуров, закрытый фонарь, 2 фляги масла, рационы на 5 дней, трутницу и бурдюк. В набор также входит 50-футовая пеньковая верёвка, закреплённая сбоку.',
    cost: 1600,
    weight: 39,
    source: {
      id: 'PHB',
      page: 151,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_EQUIPMENT_KIT,
  },
  {
    id: ITEM_DIPLOMATS_PACK,
    name: 'Набор дипломата',
    nameEn: 'Diplomat’s Pack',
    description: 'Включает сундук, 2 контейнера для карт и свитков, комплект отличной одежды, бутылочку чернил, писчее перо, лампу, 2 фляги масла, 5 листов бумаги, флакон духов, воск и мыло.',
    cost: 3900,
    weight: 36,
    source: {
      id: 'PHB',
      page: 151,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_EQUIPMENT_KIT,
  },
  {
    id: ITEM_DUNGEONEERS_PACK,
    name: 'Набор исследователя подземелий',
    nameEn: 'Dungeoneer’s Pack',
    description: 'Включает рюкзак, ломик, молоток, 10 шлямбуров, 10 факелов, трутницу, рационы на 10 дней и бурдюк. В набор также входит 50-футовая пеньковая верёвка, закреплённая сбоку.',
    cost: 1200,
    weight: 43,
    source: {
      id: 'PHB',
      page: 151,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_EQUIPMENT_KIT,
  },
  {
    id: ITEM_EXPLORERS_PACK,
    name: 'Набор путешественника',
    nameEn: 'Explorer’s Pack',
    description: 'Включает рюкзак, спальник, столовый набор, трутницу, 10 факелов, рационы на 10 дней и бурдюк. В набор также входит 50-футовая пеньковая верёвка, закреплённая сбоку.',
    cost: 1000,
    weight: 59,
    source: {
      id: 'PHB',
      page: 151,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_EQUIPMENT_KIT,
  },
  {
    id: ITEM_PRIESTS_PACK,
    name: 'Набор священника',
    nameEn: 'Priest’s Pack',
    description: 'Включает рюкзак, одеяло, 10 свечек, трутницу, коробку для пожертвований, 2 упаковки благовоний, кадило, облачение, рационы на 2 дня и бурдюк.',
    cost: 1900,
    weight: 22,
    source: {
      id: 'PHB',
      page: 151,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_EQUIPMENT_KIT,
  },
  {
    id: ITEM_SCHOLARS_PACK,
    name: 'Набор учёного',
    nameEn: 'Scholar’s Pack',
    description: 'Включает рюкзак, научную книгу, бутылочку чернил, писчее перо, 10 листов пергамента, небольшую сумочку с песком и небольшой нож.',
    cost: 4000,
    weight: 11,
    source: {
      id: 'PHB',
      page: 151,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_EQUIPMENT_KIT,
  },
  {
    id: ITEM_THIEVES_TOOLS,
    name: 'Воровские инструменты',
    nameEn: 'Thieves’ tools',
    description: `В этот набор инструментов входят небольшой напильник, набор отмычек, небольшое зеркальце на длинной ручке, ножницы и пара щипчиков. Владение этими инструментами позволяет добавлять бонус мастерства ко всем проверкам характеристик, сделанным для отключения ловушек и взлома замков.\n
Возможно, чаще всего используемые искателями приключений, воровские инструменты разработаны для взлома замков и обезвреживания ловушек. Владение этими инструментами также даёт вам общие знания о принципах действия ловушек и замков.\n
**Компоненты.** Воровские инструменты включают в себя надфиль, набор отмычек, небольшое зеркальце с металлической рукояткой, набор ножниц с узкими лезвиями и пару щипцов.\n
**История.** Ваши познания в области ловушек дают вам дополнительные знания при ответах на вопросы о местах, знаменитых своими ловушками.\n
**Расследование и Восприятие.** Вы получаете дополнительные знания при поиске ловушек, потому что вам известны различные простые признаки, выдающие их наличие.\n
**Установка ловушки.** Вы можете не только обезвреживать ловушки, но и устанавливать их. Как часть короткого отдыха вы можете создать ловушку из подручных средств. Результат вашей проверки становится сложностью для пытающегося обнаружить или обезвредить ловушку. Ловушка наносит урон, соответствующий материалам, использованным при создании (как то яд или оружие), или урон, равный половине результата вашей проверки, смотря что Мастер сочтёт более подходящим.\n

| Действие            | Сл        |
|---------------------|-----------|
| Вскрыть замок       | Различная |
| Обезвредить ловушку | Различная |
`,
    cost: 2500,
    weight: 1,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 86,
      },
    ],
    category: CAT_TOOLS,
  },
  {
    id: ITEM_DRAGON_CHESS,
    name: 'Драконьи шахматы',
    nameEn: 'Dragon Chess',
    description: gameSetDescription,
    cost: 100,
    weight: 0.5,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 83,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_GAME_SET,
  },
  {
    id: ITEM_PLAYING_CARD_SET,
    name: 'Карты',
    nameEn: 'Playing card set',
    description: gameSetDescription,
    cost: 50,
    weight: 0,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 83,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_GAME_SET,
  },
  {
    id: ITEM_DICE_SET,
    name: 'Кости',
    nameEn: 'Dice set',
    description: gameSetDescription,
    cost: 10,
    weight: 0,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 83,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_GAME_SET,
  },
  {
    id: ITEM_THREE_DRAGON_ANTE,
    name: 'Ставка трёх драконов',
    nameEn: 'Three-Dragon Ante',
    description: gameSetDescription,
    cost: 100,
    weight: 0,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 83,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_GAME_SET,
  },
  {
    id: ITEM_NAVIGATORS_TOOLS,
    name: 'Инструменты навигатора',
    nameEn: 'Navigator’s tools',
    description: `Эти инструменты используются для навигации в море. Владение инструментами навигатора позволяет прокладывать курс корабля и пользоваться морскими картами. Кроме того, эти инструменты позволяют вам добавлять бонус мастерства к проверкам характеристик, совершённым, чтобы не потеряться в море.\n 
Владение инструментами навигатора помогает вам определить истинный курс, основываясь на наблюдении за звёздами. Они также позволяют вам разбираться в чтении схем и карт, благодаря выработанному у вас чувство направления.\n
**Компоненты.** Инструменты навигатора включают в себя секстант, компас, кронциркуль, линейку, пергамент, чернила и писчее перо.\n
**Выживание.** Умение обращаться с инструментами навигатора помогает вам не заблудиться и даёт знания о наиболее вероятном расположении дорог и населённых пунктов.\n
**Определение положения.** Проведя тщательные измерения, вы можете определить своё положение на морской навигационной карте и время суток.\n

| Действие                                                      | Сл |
|---------------------------------------------------------------|----|
| Проложить курс                                                | 10 |
| Определить своё местоположение на морской навигационной карте | 15 |
`,
    cost: 2500,
    weight: 2,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'SRD',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 85,
      },
    ],
    category: CAT_TOOLS,
  },
  {
    id: ITEM_POISONERS_KIT,
    name: 'Инструменты отравителя',
    nameEn: 'Poisoner’s kit',
    description: `В набор отравителя входят флаконы, химикаты и прочее снаряжение, необходимое для создания ядов. Владение этим набором позволяет вам добавлять бонус мастерства к проверкам характеристик, совершённым для создания и использования ядов.\n
Инструменты отравителя — это излюбленное средство воров, убийц и прочих сомнительных личностей. Они позволяют вам использовать яды и создавать их из различных веществ. Ваши познания в ядах также помогают вам излечивать от них.\n
**Компоненты.** Инструменты отравителя включают в себя стеклянные склянки, ступку и пестик, химические реагенты и стеклянную палочку для размешивания. \n
**История.** Ваша подготовка в использовании ядов может помочь вам при попытках вспомнить факты о печально известных отравлениях.\n
**Расследование, Восприятие.** Ваши познания в ядах научили вас быть осторожным, имея дело с этими веществами, тем самым помогая вам при обследовании отравленного предмета или при получении зацепок о событиях, связанных с ядами.\n
**Медицина.** Когда вы лечите жертву яда, ваша осведомлённость может дать вам дополнительные знания о том, как правильнее ухаживать за отравленным.\n
**Природа, Выживание.** Работа с ядами позволила вам получить знания о том, какие растения и животные ядовиты.\n
**Обращение с ядами.** Ваше владение позволяет вам аккуратно обращаться с ядами и использовать их без риска самому подвергнуться их действию.\n

| Действие                                                      | Сл |
|---------------------------------------------------------------|----|
| Опознать отравленный предмет                                  | 10 |
| Определить эффект яда                                         | 20 |
`,
    cost: 5000,
    weight: 2,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'SRD',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 85,
      },
    ],
    category: CAT_TOOLS,
  },
  {
    id: ITEM_ALCHEMISTS_SUPPLIES,
    name: 'Инструменты алхимика',
    nameEn: 'Alchemist’s supplies',
    description: `Инструменты алхимика позволяют персонажу создавать полезные варева, такие как кислота или алхимический огонь.\n
**Компоненты.** Инструменты алхимика включают в себя две стеклянные мензурки, металлический каркас, удерживающий мензурку над открытым пламенем, стеклянную палочку для размешивания, небольшие ступку и пестик, мешочек обычных алхимических ингредиентов, включающих в себя соль, измельчённое железо и дистиллированную воду.\n
**Магия.** Владение инструментами алхимика позволяет вам раскрыть больше информации при проверках Магии, связанных с зельями и подобными веществами.\n
**Расследование.** Когда вы осматриваете область в поиске улик, владение инструментами алхимика даёт дополнительные знания о том, какие химикаты и прочие вещества использовались в области.\n
**Алхимическое ремесло.** Вы можете использовать владение инструментами для создания алхимических предметов. Персонаж может потратить деньги, чтобы собрать сырьё, которое весит 1 фунт за каждые использованные 50 зм. Мастер может позволить персонажу пройти проверку на опознание с преимуществом. Как часть продолжительного отдыха вы можете использовать инструменты алхимика, чтобы сделать одну порцию кислоты, алхимического огня, противоядия, масла, духов или мыла. Вычтите половину стоимости созданного предмета из суммарной стоимости собранного вами сырья.\n

| Действие                   | Сл |
|----------------------------|----|
| Создать клубы густого дыма | 10 |
| Опознать яд                | 10 |
| Опознать вещество          | 15 |
| Устроить поджог            | 15 |
| Нейтрализовать кислоту     | 20 |
`,
    cost: 5000,
    weight: 8,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'SRD',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 81,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_ARTISAN_TOOLS,
  },
  {
    id: ITEM_POTTERS_TOOLS,
    name: 'Инструменты гончара',
    nameEn: 'Potter’s tools',
    description: `Инструменты гончара используются для создания различных керамических предметов, наиболее распространённые из них – это горшки и подобные сосуды.\n
**Компоненты.** Инструменты гончара включают в себя гончарные иглы, цикли, скребки, нож и кронциркуль.\n
**История.** Ваши знания и опыт помогают вам опознавать керамические предметы, получая сведения о том, когда они были сделаны и из каких мест или какой культуры они происходят.\n
**Расследование, Восприятие.** Вы получаете дополнительные знания при осмотре керамики, находя зацепки, которые другие могут не заметить, на небольших неровностях и сколах.\n
**Воссоздание облика.** Рассмотрев керамические черепки, вы можете определить происхождение предмета, его изначальную форму и возможное предназначение.\n

| Действие                                  | Сл |
|-------------------------------------------|----|
| Определить, что было в сосуде             | 10 |
| Создать прочный горшок                    | 15 |
| Найти слабое место керамического предмета | 20 |
`,
    cost: 1000,
    weight: 3,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'SRD',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 85,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_ARTISAN_TOOLS,
  },
  {
    id: ITEM_TINKERS_TOOLS,
    name: 'Инструменты ремонтника',
    nameEn: 'Tinker’s tools',
    description: `Набор инструментов ремонтника предназначен для того, чтобы чинить множество обычных предметов. И хотя вы не можете создать большинство из них инструментами ремонтника, вы можете починить порвавшуюся одежду, наточить затупившийся меч и подлатать истрепавшуюся кольчугу.\n
**Компоненты.** Инструменты ремонтника включают в себя различные ручные инструменты, нитки, иголки, точильный камень, куски ткани и кожи, небольшую банку клея (синюю изоленту пока, увы, не придумали).\n
**История.** Вы можете определить возраст и происхождение предмета, даже если у вас в наличии всего несколько осколков, оставшихся от оригинала.\n
**Расследование.** Когда вы осматриваете повреждённый предмет, вы узнаёте, как и насколько давно он был повреждён.\n
**Починка.** Вы можете восстановить по 10 хитов повреждённого предмета за каждый час работы. Для починки любого предмета вам необходим доступ к материалам, необходимым для ремонта. Для металлических предметов вам нужен доступ к открытому огню, жара которого достаточно, чтобы сделать металл пластичным.\n

| Действие                                | Сл |
|-----------------------------------------|----|
| Временно починить повреждённый механизм | 10 |
| Починить предмет вдвое быстрее          | 15 |
| Смастерить из хлама временный предмет   | 20 |
`,
    cost: 5000,
    weight: 10,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'SRD',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 86,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_ARTISAN_TOOLS,
  },
  {
    id: ITEM_CALLIGRAPHERS_SUPPLIES,
    name: 'Инструменты каллиграфа',
    nameEn: 'Calligrapher’s supplies',
    description: `Каллиграфия трактует письмо как прекрасное утончённое искусство. Каллиграфы создают текст, который радует глаз, используя стиль, который сложно подделать. Их инструменты также дают им возможность исследовать рукописный текст и определить его подлинность, поскольку обучение каллиграфа включало в себя множество часов обучения письму и попыток повторить его стиль и оформление.\n
**Компоненты.** Инструменты каллиграфа включают в себя чернила, множество пергаментных листов и три писчих пера.\n
**Магия.** Хотя каллиграфия мало помогает в расшифровке содержимого магического текста, владение этими инструментами помогает определить, кто написал магический текст.\n
**История.** Владение этими инструментами может увеличить выгоду при успешной проверке, совершаемой для анализа или исследования древних записей, свитков или другого текста, включая руны, вырезанные на камне, а также письмена на фресках или других изображениях.\n
**Расшифровка карты сокровищ.** Владение этими инструментами позволяет вам проводить экспертизу карт. Вы можете пройти проверку Интеллекта, чтобы оценить возраст карты, определить, содержит ли карта скрытое послание, и так далее.\n

| Действие                                         | Сл |
|--------------------------------------------------|----|
| Опознать писавшего немагический рукописный текст | 10 |
| Определить душевное состояние писавшего          | 15 |
| Распознать поддельный текст                      | 15 |
| Подделать подпись                                | 20 |
`,
    cost: 1000,
    weight: 5,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'SRD',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 81,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_ARTISAN_TOOLS,
  },
  {
    id: ITEM_MASONS_TOOLS,
    name: 'Инструменты каменщика',
    nameEn: 'Mason’s tools',
    description: `Инструменты каменщика позволяют вам возводить каменные строения, включая стены и здания из кирпича.\n
**Компоненты.** Инструменты каменщика включают в себя мастерок, молоток, долото, щётки и угольник. История. Ваш опыт помогает вам определять дату постройки и предназначение каменного здания, а также понять, кто мог его построить.\n
**Расследование.** Вы получаете дополнительные знания при обследовании помещений в каменном здании.\n
**Восприятие.** Вы замечаете неровности на каменных стенах и полах, что облегчает поиск ловушек и тайных ходов.\n
**Снос.** Ваши познания в каменном зодчестве позволяют вам найти уязвимые места в кладке каменных стен. Вы наносите таким строениям двойной урон своими атаками оружием.\n

| Действие                                                | Сл |
|---------------------------------------------------------|----|
| Продолбить долотом небольшое отверстие в каменной стене | 10 |
| Найти слабое место в каменной стене                     | 15 |
`,
    cost: 1000,
    weight: 8,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'SRD',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 85,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_ARTISAN_TOOLS,
  },
  {
    id: ITEM_CARTOGRAPHERS_TOOLS,
    name: 'Инструменты картографа',
    nameEn: 'Cartographer’s tools',
    description: `Используя инструменты картографа, вы можете составить достоверную карту, чтобы сделать путешествие проще для вас и для тех, кто пойдёт здесь после вас. Это может быть, как крупномасштабная карта, описывающая горные хребты и перевалы, так и схема, показывающая планировку уровня подземелья.\n
**Компоненты.** Инструменты картографа включают в себя писчее перо, чернила, пергамент, циркуль, кронциркуль и линейку.\n
**Магия, История, Религия.** Вы можете использовать ваши познания в картах и различных местах, чтобы извлекать более детальную информацию при использовании этих навыков. Например, вы можете найти скрытое послание на карте, установить, когда была составлена карта, чтобы определить, какие географические особенности изменились с тех пор и так далее.\n
**Природа.** Ваше знакомство с физической географией облегчает вам поиск ответов на вопросы и разрешение проблем, касающихся окружающей местности.\n
**Выживание.** Ваше понимание географии облегчает поиск пути к цивилизации, позволяет прогнозировать, в какой местности могут быть найдены деревни или городки, и уменьшает вероятность того, что вы заблудитесь. Вы изучили так много карт, что общие тенденции, например, как развиваются торговые маршруты или в каких местах обычно строят поселения, вам хорошо знакомы.\n
**Составление карты.** Путешествуя, вы можете рисовать карту в дополнение к участию в других действиях.\n

| Действие                                        | Сл |
|-------------------------------------------------|----|
| Определить возраст и происхождение карты        | 10 |
| Прикинуть направление и расстояние до ориентира | 15 |
| Распознать что карта поддельная                 | 15 |
| Дорисовать недостающий кусок карты              | 20 |
`,
    cost: 1500,
    weight: 6,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'SRD',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 82,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_ARTISAN_TOOLS,
  },
  {
    id: ITEM_LEATHERWORKERS_TOOLS,
    name: 'Инструменты кожевника',
    nameEn: 'Leatherworker’s tools',
    description: `Познания в кожевенном деле распространяются на знания о шкурах животных и их свойствах. Они также включают в себя знания о кожаных доспехах и аналогичных вещах.\n
**Компоненты.** Инструменты кожевника включают кожевенный резак (нож), небольшую киянку, канавкорез, пробойник, нить и куски кожи.\n
**Магия.** Ваши знания и опыт в работе с кожей даёт вам дополнительные знания при обследовании магических предметов, сделанных из кожи, как, например, ботинки или некоторые плащи.\n
**Расследование.** Вы получаете дополнительные знания, когда исследуете кожаные предметы или улики, связанные с ними, также вы используете свои познания в кожевничестве, чтобы находить зацепки, которые другие могут не заметить.\n
**Опознание кожи.** Смотря на кусок кожи или кожаный предмет, вы можете определить источник кожи и любые особые методы, использованные в её обработке. Например, вы можете обнаружить разницу между кожей, выделанной с использованием дварфийских методик, и кожей, выделанной с использованием методик полуросликов.\n

| Действие                               | Сл |
|----------------------------------------|----|
| Изменить внешний вид кожаного предмета | 10 |
| Определить прошлое кожаного предмета   | 20 |
`,
    cost: 500,
    weight: 5,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'SRD',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 84,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_ARTISAN_TOOLS,
  },
  {
    id: ITEM_SMITHS_TOOLS,
    name: 'Инструменты кузнеца',
    nameEn: 'Smith’s tools',
    description: `Инструменты кузнеца позволяют вам работать с металлом, нагревая его для изменения формы, восстанавливая повреждения или создавая из слитков полезные предметы.\n
**Компоненты.** Инструменты кузнеца включают в себя молоты, клещи, уголь, ветошь и точильный камень.\n
**Магия и История.** Ваш опыт даёт вам дополнительные знания при обследовании металлических предметов, таких как, например, оружие.\n
**Расследование.** Вы можете обнаруживать зацепки, которые другие могут не заметить, когда расследование касается брони, оружия или прочих изделий металлообработки.\n
**Починка.** При наличии доступа к инструментам и открытому огню, жара которого достаточно, чтобы сделать металл пластичным, вы можете восстановить по 10 хитов повреждённого металлического предмета за каждый час работы.\n

| Действие                                       | Сл |
|------------------------------------------------|----|
| Наточить затупившийся клинок                   | 10 |
| Починить комплект доспехов                     | 15 |
| Разъединить немагический металлический предмет | 15 |
`,
    cost: 2000,
    weight: 8,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'SRD',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 86,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_ARTISAN_TOOLS,
  },
  {
    id: ITEM_BREWERS_SUPPLIES,
    name: 'Инструменты пивовара',
    nameEn: 'Brewer’s supplies',
    description: `Пивоварение – это искусство производства пива. Но этот процесс может использоваться не только для создания алкогольных напитков, но и для очищения воды. Для создания пива требуются недели на ферментацию, но всего несколько часов непосредственно на работу.\n
**Компоненты.** Инструменты пивовара включают в себя большую стеклянную бутыль, некоторое количество хмеля, сифон, змеевик и несколько футов трубок.\n
**История.** Владение инструментами пивовара даёт вам дополнительные знания при проверках Интеллекта (История), касающихся событий, важной частью которых был алкоголь.\n
**Медицина.** Владение этими инструментами предоставляет дополнительные знания, когда вы облегчаете страдания от алкогольного отравления, похмелья, или, когда используете алкоголь, чтобы притупить боль.\n
**Убеждение.** Крепкий напиток может помочь смягчить даже каменное сердце. Ваше владение инструментами пивовара может помочь вам угостить кого-то ровно таким количеством алкоголя, сколько понадобится для того, чтобы поднять ему настроение.\n
**Дистилляция.** Ваши знания пивоварения позволяют вам очищать воду, которая иначе была бы непригодной для питья. Как часть продолжительного отдыха вы можете очистить до 6 галлонов воды или 1 галлон как часть короткого отдыха. Алкоголики-смертники пьют отнюдь не воду, поэтому используют эти инструменты, чтобы гнать первач.\n

| Действие                          | Сл |
|-----------------------------------|----|
| Обнаружить яд или примесь в питье | 10 |
| Опознать алкоголь                 | 15 |
| Игнорировать эффект алкоголя      | 20 |
`,
    cost: 2000,
    weight: 9,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'SRD',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 81,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_ARTISAN_TOOLS,
  },
  {
    id: ITEM_CARPENTERS_TOOLS,
    name: 'Инструменты плотника',
    nameEn: 'Carpenter’s tools',
    description: `Навыки плотничества позволяют персонажу строить деревянные сооружения. Плотник может построить дом, хижину, деревянный шкаф или подобный предмет.\n
**Компоненты.** Инструменты плотника включают в себя пилу, молоток, гвозди, топор, угольник, линейку, кородёр, рубанок и стамеску.\n
**История.** Владение этими инструментами помогает вам определять назначение и происхождение деревянных строений и прочих больших деревянных объектов.\n
**Расследование.** Вы получаете дополнительные знания при обследовании области в деревянном здании, потому что вы знаете строительные хитрости, которые могут скрыть что-то в области при обследовании. Восприятие. Вы можете заметить неровности на деревянных стенах и полах, что облегчает поиск ловушек и тайных ходов.\n
**Скрытность.** Вы можете быстро найти слабое место в деревянном полу, что облегчает вам определение мест, которые сломаются или заскрипят, если на них наступить.\n
**Укрепление.** За 1 минуту при наличии материалов вы можете укрепить дверь или окно. Сл броска на выбивание увеличивается на 5.\n
**Временное укрытие.** Как часть продолжительного отдыха вы можете построить навес или подобное укрытие, чтобы ваша группа была укрыта от дождя или солнечного зноя на время отдыха. Поскольку оно было построено на скорую руку из первой попавшейся древесины, укрытие разваливается через 1к3 дня после постройки.\n

| Действие                                   | Сл |
|--------------------------------------------|----|
| Построить простое деревянное сооружение    | 10 |
| Спроектировать сложное деревянное строение | 15 |
| Найти слабое место в деревянной стене      | 15 |
| Снять дверь с петель                       | 20 |
`,
    cost: 800,
    weight: 6,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'SRD',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 82,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_ARTISAN_TOOLS,
  },
  {
    id: ITEM_COOKS_UTENSILS,
    name: 'Инструменты повара',
    nameEn: 'Cook’s utensils',
    description: `Жизнь искателя приключений тяжела. При наличии в компании повара ваша пища будет намного вкуснее, чем привычные галеты и сухофрукты.\n
**Компоненты.** Инструменты повара включают в себя металлический котёл, ножи, вилки, ложку для размешивания и половник.\n
**История.** Ваши знания кулинарных методик позволяют вам оценивать структуру социального развития, основываясь на гастрономических обычаях этой культуры.\n
**Медицина.** Оказывая лечение, вы можете превратить горькое или кислое лекарство в приятную на вкус стряпню.\n
**Выживание.** Добывая еду, вы можете использовать собранные вами ингредиенты, которые другие не смогли бы приготовить.\n
**Приготовление еды.** Как часть короткого отдыха вы можете приготовить вкусное блюдо, которое поможет вашим компаньонам восстановить силы. Вы и до пяти существ на ваш выбор восстанавливают по 1 дополнительному хиту за каждую потраченную во время короткого отдыха Кость Хитов, при условии, что у вас есть доступ к вашим инструментам повара и достаточно еды.\n

| Действие                        | Сл |
|---------------------------------|----|
| Приготовить обычную пищу        | 10 |
| Повторить блюдо                 | 10 |
| Обнаружить яд или примесь в еде | 15 |
| Приготовить изысканное блюдо    | 15 |
`,
    cost: 100,
    weight: 8,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'SRD',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 83,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_ARTISAN_TOOLS,
  },
  {
    id: ITEM_WOODCARVERS_TOOLS,
    name: 'Инструменты резчика по дереву',
    nameEn: 'Woodcarver’s tools',
    description: `Инструменты резчика по дереву позволяют вам создавать сложные предметы из дерева, такие как деревянные фигурки или стрелы.\n
**Компоненты.** Инструменты резчика по дереву включают в себя нож, стамеску и маленькую пилу.\n
**Магия, История.** Ваш опыт даёт вам дополнительные знания при осмотре деревянных предметов, таких как статуэтки или стрелы.\n
**Природа.** Ваши познания о древесине дают вам дополнительные знания, когда вы изучаете деревья.\n
**Починка.** Как часть короткого отдыха вы можете починить один повреждённый деревянный предмет.\n
**Сделать стрелы.** Как часть короткого отдыха вы можете сделать до пяти стрел. Как часть продолжительного отдыха вы можете сделать до двенадцати. Вы должны иметь под рукой древесину для изготовления стрел.\n

| Действие                                | Сл |
|-----------------------------------------|----|
| Сделать небольшую деревянную фигурку    | 10 |
| Вырезать замысловатый узор на древесине | 10 |
`,
    cost: 100,
    weight: 5,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'SRD',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 87,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_ARTISAN_TOOLS,
  },
  {
    id: ITEM_COBBLERS_TOOLS,
    name: 'Инструменты сапожника',
    nameEn: 'Cobbler’s tools',
    description: `Несмотря на то, что профессия сапожника может показаться искателю приключений слишком простой, пара хороших сапог будет сопровождать персонажа и в труднопроходимой глуши, и в смертельных подземельях.\n
**Компоненты.** Инструменты сапожника включают в себя молоток, шило, нож, обувную колодку, ножницы, запас кожи и ниток.\n
**Магия, История.** Ваши знания об обуви помогают вам определить магические свойства зачарованных сапог или узнать историю подобных предметов.\n
**Расследование.** Обувь скрывает множество секретов. Вы можете узнать, где недавно был тот, чью обувь вы осматриваете на предмет грязи и поношенности. Ваш опыт в починке обуви облегчает вам определение того, как она была повреждена.\n
**Уход за обувью.** Как часть продолжительного отдыха, вы можете починить обувь ваших компаньонов. В течение следующих 24 часов до 6 существ по вашему выбору, носящих обувь, над которой вы поработали, могут путешествовать до 10 часов в день, не совершая спасброски от истощения.\n
**Создание потайного отделения.** За 8 часов работы вы можете добавить потайное отделение в пару обуви. Отделение может содержать в себе предмет до 3 дюймов длинной и 1 дюйм шириной и высотой. Вы совершаете проверку Интеллекта, добавляя ваш бонус мастерства за владение этими инструментами, для определения Сл проверки Интеллекта (Расследование), необходимой для нахождения отделения.\n

| Действие                                 | Сл |
|------------------------------------------|----|
| Определить возраст и происхождение обуви | 10 |
| Найти потайное отделение в каблуке       | 15 |
`,
    cost: 500,
    weight: 5,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'SRD',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 82,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_ARTISAN_TOOLS,
  },
  {
    id: ITEM_GLASSBLOWERS_TOOLS,
    name: 'Инструменты стеклодува',
    nameEn: 'Glassblower’s tools',
    description: `Владеющий инструментами стеклодува не только умеет выдувать стекло, но также знает особые методики изготовления стеклянных предметов.\n
**Компоненты.** Инструменты стеклодува включают в себя трубку для выдувания, маленькую стеклодувную обкатку, катальник, развёртки и щипцы. Вам нужен источник тепла для работы со стеклом.\n
**Магия, История.** Ваши знания техник выдувания стекла помогают вам, когда вы изучаете стеклянный предмет, как, например, флакон с зельем или стеклянный предмет, найденный в сокровищах. Например, вы можете изучить, как стеклянный флакон с зельем изменился под действием своего содержимого, что поможет определить эффект зелья. (Зелье может оставить осадок, деформировать стекло или окрасить его).\n
**Расследование.** Когда вы изучаете область, ваши знания могут помочь вам, если улики включают в себя разбитые стекла или стеклянные предметы.\n
**Определение слабого места.** Потратив 1 минуту, вы можете найти слабое место стеклянного предмета. Любой урон, наносимый предмету при атаке по слабому месту, удваивается.\n

| Действие                                             | Сл |
|------------------------------------------------------|----|
| Определить происхождение стекла                      | 10 |
| Определить, что когда-то содержал стеклянный предмет | 20 |
`,
    cost: 3000,
    weight: 5,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'SRD',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 83,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_ARTISAN_TOOLS,
  },
  {
    id: ITEM_WEAVERS_TOOLS,
    name: 'Инструменты ткача',
    nameEn: 'Weaver’s tools',
    description: `Инструменты ткача позволяют вам шить одежду и подгонять её по фигуре.\n
**Компоненты.** Инструменты ткача включают в себя нитки, иголки и куски ткани. Вы умеете пользоваться ткацким станком, но подобное оборудование слишком громоздкое для транспортировки.\n
**Магия, История.** Ваш опыт даёт вам дополнительные знания при осмотре предметов гардероба, включая плащи и прочие накидки.\n
**Расследование.** Используя свои знания о процессе пошива одежды, при обследовании гобеленов, обивки, одежды и прочих тканых предметов, вы можете обнаруживать зацепки, которые другие могут не заметить.\n
**Починка.** Как часть короткого отдыха вы можете починить один повреждённый предмет одежды.\n
**Пошив одежды.** Как часть продолжительного отдыха вы можете создать одежду для существа при наличии достаточного количества ткани и ниток.\n

| Действие                       | Сл |
|--------------------------------|----|
| Повторное использование ткани  | 10 |
| Заштопать дырку в ткани        | 10 |
| Подшить наряд                  | 15 |
`,
    cost: 100,
    weight: 5,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'SRD',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 87,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_ARTISAN_TOOLS,
  },
  {
    id: ITEM_PAINTERS_SUPPLIES,
    name: 'Инструменты художника',
    nameEn: 'Painter’s supplies',
    description: `Владение инструментами художника позволяет вам писать красками и рисовать карандашом. Вы также разбираетесь в истории искусств, что может помочь вам при осмотре произведений искусства.\n
**Компоненты.** Инструменты художнику включают в себя мольберт, холст, краски, кисти, угольные карандаши и палитру.\n
**Магия, История, Религия.** Ваш опыт помогает вам раскрыть знания любого рода, которые связаны с произведениями искусства, как, например, магические свойства картины или происхождение странной фрески, найденной в подземелье.\n
**Расследование, Восприятие.** Когда вы осматриваете картину или подобное произведение изобразительного искусства, ваша осведомлённость о способах их создания может дать вам дополнительные знания.\n
**Написание и рисование.** Как часть короткого или продолжительного отдыха вы можете создать простое произведение искусства. Хотя ваше творение и может быть недостаточно точным, вы можете запечатлеть образ или сцену, или на скорую руку сделать копию виденного вами художественного произведения.\n

| Действие                             | Сл |
|--------------------------------------|----|
| Написать точный портрет              | 10 |
| Создать картину со скрытым посланием | 20 |
`,
    cost: 1000,
    weight: 5,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'SRD',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 85,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_ARTISAN_TOOLS,
  },
  {
    id: ITEM_JEWELERS_TOOLS,
    name: 'Инструменты ювелира',
    nameEn: 'Jeweler’s tools',
    description: `Владение инструментами ювелира включает в себя знание основных способов работы с драгоценностями. Также оно позволяет опознавать драгоценные камни.\n
**Компоненты.** Инструменты ювелира включают в себя небольшие пилу и молоточек, напильники, щипцы и пинцет.\n
**Магия.** Владение инструментами ювелира даёт вам знания об известных способах магического применения драгоценных камней. Эти знания будут кстати при проверках Магии, связанных с драгоценными камнями или инкрустированными ими предметами.\n
**Расследование.** При осмотре драгоценностей владение инструментами ювелира помогает вам находить зацепки, которые другие бы просмотрели.\n
**Опознание драгоценности.** Вы можете опознать драгоценность и на глаз определить её стоимость.\n

| Действие                           | Сл |
|------------------------------------|----|
| Изменить внешний вид драгоценности | 15 |
| Определить прошлое драгоценности   | 20 |
`,
    cost: 2500,
    weight: 2,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'SRD',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 84,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_ARTISAN_TOOLS,
  },
  {
    id: ITEM_DISGUISE_KIT,
    name: 'Набор для грима',
    nameEn: 'Disguise kit',
    description: `Этот набор косметики, красителей для волос и бутафории позволяет изменять ваш внешний облик. Владение этим набором позволяет добавлять бонус мастерства к проверкам характеристик, совершённым для визуальной маскировки.\n
Отличный выбор для любого, кто хочет заниматься обманом, набор для грима позволяет своему владельцу принимать фальшивую личину.\n
**Компоненты.** Набор для грима включает в себя различную косметику, краску для волос, немного реквизита и несколько нарядов.\n
**Обман.** В некоторых случаях грим может помочь вам плести более убедительную ложь.\n
**Запугивание.** Правильный образ может сделать вас более устрашающим, когда вы хотите кого-то отпугнуть, притворившись заражённым чумой, либо, когда запугиваете шайку бандитов под видом громилы-головореза.\n
**Выступление.** Искусство перевоплощения может увеличить удовлетворённость публики выступлением, при условии, что обличье должным образом разработано, чтобы вызывать нужную реакцию.\n
**Убеждение.** Народ склонен доверять людям в униформе. Если вы замаскировались под авторитетную фигуру, ваши попытки убедить других обычно более эффективны.\n
**Создание обличья.** Как часть продолжительного отдыха вы можете создать обличье для маскировки. На надевание обличья после его создания требуется 1 минута. Вы можете одновременно иметь при себе только одно такое обличье, не привлекая ненужного внимания, если только у вас нет _Сумки хранения_ (Bag of holding) или другого подобного способа оставить их незамеченными. Каждое такое обличье весит 1 фунт.\n
В других случаях требуется 10 минут на создание обличья, которое немного изменяет вашу внешность и 30 минут, если требуются более обширные изменения.\n

| Действие                                            | Сл |
|-----------------------------------------------------|----|
| Скрыть травмы или особые приметы                    | 10 |
| Распознать использование маскировки кем-либо другим | 15 |
| Скопировать внешность гуманоида                     | 20 |
`,
    cost: 2500,
    weight: 3,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 83,
      },
    ],
    category: CAT_TOOLS,
  },
  {
    id: ITEM_FORGERY_KIT,
    name: 'Набор для фальсификации',
    nameEn: 'Forgery kit',
    description: `В этой небольшой коробке лежат разные бумаги и пергаменты, ручки и чернила, печати и куски воска, золотая и серебряная фольга, и прочие припасы, необходимые для создания убедительных подделок документов. Владение этим набором позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при создании поддельных документов.\n
Набор для фальсификации предназначен для копирования документов и упрощения копирования личной печати или подписи.\n
**Компоненты.** Набор для фальсификации включает в себя чернила различных видов, пергамент и бумагу различных видов, несколько писчих перьев, печати и сургуч, золотой и серебряный листы и небольшие инструменты для лепки из расплавленного воска имитации печати.\n
**Магия.** Набор для фальсификации может быть использован вместе с навыком Магия, чтобы определить, является магический предмет настоящим или поддельным.\n
**Обман.** Качественно выполненная подделка, такая как документ, подтверждающий вашу знатность или предписание, гарантирующее вам безопасный проезд, может придать достоверности вашей лжи.\n
**История.** Набор для фальсификации вместе с вашими познаниями в истории улучшает вашу способность подделывать исторические документы или определять их подлинность.\n
**Расследование.** Когда вы осматриваете предмет, владение набором для фальсификации помогает определить, как предмет был сделан и подлинный ли он.\n
**Другие инструменты.** Умение использовать другие инструменты делает ваши подделки более правдоподобными. Например, вы можете объединить владение набором для фальсификации и владение инструментами картографа, чтобы сделать поддельную карту.\n
**Быстрая подделка.** Как часть короткого отдыха вы можете создать поддельный документ длиной не более одной страницы. Как часть продолжительного отдыха вы можете создать документ длинной до четырёх страниц. Ваша проверка Интеллекта в использовании набора для фальсификации определяет Сл проверки Интеллекта (Расследование) на определение того, что это подделка.\n

| Действие                    | Сл |
|-----------------------------|----|
| Подделать подчерк           | 15 |
| Скопировать восковую печать | 20 |
`,
    cost: 1500,
    weight: 5,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 83,
      },
    ],
    category: CAT_TOOLS,
  },
  {
    id: ITEM_HERBALISM_KIT,
    name: 'Набор травника',
    nameEn: 'Herbalism kit',
    description: `В этот набор входят разнообразные инструменты, такие как ножницы, ступка и пестик, а также мешочки и флаконы, используемые травниками при создании снадобий и зелий. Владение этим набором позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при опознании и использовании трав. Кроме того, владение этим набором требуется для создания противоядия и зелья лечения.\n
Владение набором травника позволяет вам распознавать растения и надёжно сохранять их полезные части.\n
**Компоненты.** Набор травника включает в себя мешочки для хранения трав, секатор и кожаные перчатки для сбора растений, несколько стеклянных банок, ступку и пестик.\n
**Магия.** Ваши осведомлённость в природе и использовании растений может дать дополнительные знания к магическим исследованиям, когда дело касается растений и попыток опознать зелье.\n
**Расследование.** Когда вы обследуете заросшую растениями зону, владение этим набором помогает вам находить детали и зацепки, которые другие бы проглядели.\n
**Медицина.** Ваше мастерство травника улучшает ваши способности лечить болезни и раны, расширяя доступные методы благодаря использованию лекарственных растений.\n
**Природа и Выживание.** Когда вы путешествуете в дикой местности, ваши навыки травничества облегчают опознание растений и поиск источников еды, которые другие могут не заметить.\n
**Опознание растений.** Вы можете быстро распознать большинство растений по запаху и внешнему виду.\n

| Действие       | Сл |
|----------------|----|
| Найти растения | 15 |
| Опознать яд    | 20 |
`,
    cost: 500,
    weight: 3,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 84,
      },
    ],
    category: CAT_TOOLS,
  },
  {
    id: ITEM_DRUM,
    name: 'Барабан',
    nameEn: 'Drum',
    description: musicalToolDescription,
    cost: 600,
    weight: 3,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 85,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_MUSIC_TOOLS,
  },
  {
    id: ITEM_VIOL,
    name: 'Виола',
    nameEn: 'Viol',
    description: musicalToolDescription,
    cost: 3000,
    weight: 1,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 85,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_MUSIC_TOOLS,
  },
  {
    id: ITEM_BAGPIPES,
    name: 'Волынка',
    nameEn: 'Bagpipes',
    description: musicalToolDescription,
    cost: 3000,
    weight: 6,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 85,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_MUSIC_TOOLS,
  },
  {
    id: ITEM_LYRE,
    name: 'Лира',
    nameEn: 'Lyre',
    description: musicalToolDescription,
    cost: 3000,
    weight: 2,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 85,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_MUSIC_TOOLS,
  },
  {
    id: ITEM_LUTE,
    name: 'Лютня',
    nameEn: 'Lute',
    description: musicalToolDescription,
    cost: 3500,
    weight: 2,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 85,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_MUSIC_TOOLS,
  },
  {
    id: ITEM_HORN,
    name: 'Рожок',
    nameEn: 'Horn',
    description: musicalToolDescription,
    cost: 300,
    weight: 2,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 85,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_MUSIC_TOOLS,
  },
  {
    id: ITEM_PAN_FLUTE,
    name: 'Свирель',
    nameEn: 'Pan flute',
    description: musicalToolDescription,
    cost: 1200,
    weight: 2,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 85,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_MUSIC_TOOLS,
  },
  {
    id: ITEM_FLUTE,
    name: 'Флейта',
    nameEn: 'Flute',
    description: musicalToolDescription,
    cost: 200,
    weight: 1,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 85,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_MUSIC_TOOLS,
  },
  {
    id: ITEM_DULCIMER,
    name: 'Дульцимер',
    nameAlt: 'Цимбалы',
    nameEn: 'Dulcimer',
    description: musicalToolDescription,
    cost: 2500,
    weight: 10,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 85,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_MUSIC_TOOLS,
  },
  {
    id: ITEM_SHAWM,
    name: 'Шалмей',
    nameEn: 'Shawm',
    description: musicalToolDescription,
    cost: 200,
    weight: 1,
    source: [
      {
        id: 'PHB',
        page: 154,
      },
      {
        id: 'XGtE',
        page: 85,
      },
    ],
    category: CAT_TOOLS,
    subcategory: CAT_MUSIC_TOOLS,
  },
  {
    id: ITEM_WARHORSE,
    name: 'Боевой конь',
    nameEn: 'Warhorse',
    creatureId: CREATURE_WARHORSE,
    description: 'Скорость 60 фт. Грузоподъёмность 540 фунтов.',
    cost: 40000,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_ANIMALS,
  },
  {
    id: ITEM_CAMEL,
    name: 'Верблюд',
    nameEn: 'Camel',
    creatureId: CREATURE_CAMEL,
    description: 'Скорость 50 фт. Грузоподъёмность 480 фунтов.',
    cost: 5000,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_ANIMALS,
  },
  {
    id: ITEM_RIDING_HORSE,
    name: 'Лошадь скаковая',
    nameAlt: 'Лошадь, ездовая',
    nameEn: 'Riding Horse',
    creatureId: CREATURE_RIDING_HORSE,
    description: 'Скорость 60 фт. Грузоподъёмность 480 фунтов.',
    cost: 7500,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_ANIMALS,
  },
  {
    id: ITEM_DRAFT_HORSE,
    name: 'Лошадь-тяжеловоз',
    nameAlt: 'Лошадь, тягловая',
    nameEn: 'Draft Horse',
    creatureId: CREATURE_DRAFT_HORSE,
    description: 'Скорость 40 фт. Грузоподъёмность 540 фунтов.',
    cost: 5000,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_ANIMALS,
  },
  {
    id: ITEM_MASTIFF,
    name: 'Мастиф',
    nameEn: 'Mastiff',
    creatureId: CREATURE_MASTIFF,
    description: 'Скорость 40 фт. Грузоподъёмность 195 фунтов.',
    cost: 2500,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_ANIMALS,
  },
  {
    id: ITEM_MULE,
    name: 'Мул',
    nameEn: 'Mule',
    creatureId: CREATURE_MULE,
    description: 'Скорость 40 фт. Грузоподъёмность 420 фунтов.',
    cost: 800,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_ANIMALS,
  },
  {
    id: ITEM_DONKEY,
    name: 'Осёл',
    nameEn: 'Donkey',
    creatureId: CREATURE_MULE,
    description: 'Скорость 40 фт. Грузоподъёмность 420 фунтов.',
    cost: 800,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_ANIMALS,
  },
  {
    id: ITEM_PONY,
    name: 'Пони',
    nameEn: 'Pony',
    creatureId: CREATURE_PONY,
    description: 'Скорость 40 фт. Грузоподъёмность 225 фунтов.',
    cost: 3000,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_ANIMALS,
  },
  {
    id: ITEM_ELEPHANT,
    name: 'Слон',
    nameEn: 'Elephant',
    creatureId: CREATURE_ELEPHANT,
    description: 'Скорость: 40 фт. Грузоподъёмность 1320 фунтов.',
    cost: 20000,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_ANIMALS,
  },
  {
    id: ITEM_TRICERATOPS,
    name: 'Трицератопс',
    nameEn: 'Triceratops',
    creatureId: CREATURE_TRICERATOPS,
    description: 'Скорость: 50 фт. Грузоподъёмность 1320 фунтов.',
    cost: 50000,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_ANIMALS,
  },
  {
    id: ITEM_CHARIOT,
    name: 'Карета',
    nameEn: 'Chariot',
    cost: 25000,
    weight: 100,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_TRANSPORT,
  },
  {
    id: ITEM_CARRIAGE,
    name: 'Коляска',
    nameEn: 'Carriage',
    cost: 10000,
    weight: 600,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_TRANSPORT,
  },
  {
    id: ITEM_FEED,
    name: 'Корм',
    nameEn: 'Feed',
    description: 'В день',
    cost: 5,
    weight: 10,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_TRANSPORT,
  },
  {
    id: ITEM_SLED,
    name: 'Сани',
    nameEn: 'Sled',
    cost: 2000,
    weight: 300,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_TRANSPORT,
  },
  {
    id: ITEM_SADDLEBAGS,
    name: 'Перемётные сумки',
    nameAlt: 'Седельные сумки',
    nameEn: 'Saddlebags',
    cost: 400,
    weight: 8,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_TRANSPORT,
  },
  {
    id: ITEM_MILITARY_SADDLE,
    name: 'Военное седло',
    nameEn: 'Military Saddle',
    cost: 2000,
    weight: 30,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_TRANSPORT,
    subcategory: CAT_SADDLES,
  },
  {
    id: ITEM_PACK_SADDLE,
    name: 'Вьючное седло',
    nameAlt: 'Грузовое седло',
    nameEn: 'Pack Saddle',
    cost: 500,
    weight: 15,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_TRANSPORT,
    subcategory: CAT_SADDLES,
  },
  {
    id: ITEM_RIDING_SADDLE,
    name: 'Скаковое седло',
    nameAlt: 'Ездовое седло',
    nameEn: 'Riding Saddle',
    cost: 1000,
    weight: 25,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_TRANSPORT,
    subcategory: CAT_SADDLES,
  },
  {
    id: ITEM_EXOTIC_SADDLE,
    name: 'Экзотическое седло',
    nameEn: 'Exotic Saddle',
    cost: 6000,
    weight: 40,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_TRANSPORT,
    subcategory: CAT_SADDLES,
  },
  {
    id: ITEM_CART,
    name: 'Телега',
    nameEn: 'Cart',
    cost: 1500,
    weight: 200,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_TRANSPORT,
  },
  {
    id: ITEM_BIT_AND_BRIDLE,
    name: 'Узда',
    nameAlt: 'Упряжь и уздечка',
    nameEn: 'Bit and bridle',
    cost: 200,
    weight: 1,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_TRANSPORT,
  },
  {
    id: ITEM_WAGON,
    name: 'Фургон',
    nameEn: 'Wagon',
    cost: 3500,
    weight: 400,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_TRANSPORT,
  },
  {
    id: ITEM_WARSHIP,
    name: 'Военный корабль',
    nameEn: 'Warship',
    description: 'Скорость: 2,5 узла',
    cost: 2500000,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_TRANSPORT_WATER,
  },
  {
    id: ITEM_GALLEY,
    name: 'Галера',
    nameEn: 'Galley',
    description: 'Скорость: 4 узла',
    cost: 3000000,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_TRANSPORT_WATER,
  },
  {
    id: ITEM_KEELBOAT,
    name: 'Килевая лодка',
    nameEn: 'Keelboat',
    description: 'Скорость: 1 узел',
    cost: 300000,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_TRANSPORT_WATER,
  },
  {
    id: ITEM_LONGSHIP,
    name: 'Ладья',
    nameEn: 'Longship',
    description: 'Скорость: 3 узла',
    cost: 1000000,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_TRANSPORT_WATER,
  },
  {
    id: ITEM_SAILING_SHIP,
    name: 'Парусный корабль',
    nameEn: 'Sailing ship',
    description: 'Скорость: 2 узла',
    cost: 1000000,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_TRANSPORT_WATER,
  },
  {
    id: ITEM_ROWBOAT,
    name: 'Шлюпка',
    nameAlt: 'Вёсельная лодка',
    nameEn: 'Rowboat',
    description: 'Скорость: 1,5 узла. Мест: 2',
    cost: 5000,
    weight: 100,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_TRANSPORT_WATER,
  },
  {
    id: ITEM_CANOE,
    name: 'Каноэ',
    nameEn: 'Canoe',
    description: 'Скорость: 2 узла. Мест: 6',
    cost: 5000,
    weight: 100,
    source: {
      id: 'ToA',
      page: 32,
    },
    category: CAT_TRANSPORT_WATER,
  },
  {
    id: ITEM_WHEAT,
    name: 'Пшеница',
    nameEn: 'Wheat',
    cost: 1,
    weight: 1,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_FLOUR,
    name: 'Мука',
    nameEn: 'Flour',
    cost: 2,
    weight: 1,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_CHICKEN,
    name: 'Курица',
    nameEn: 'Chicken',
    cost: 2,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_SALT,
    name: 'Соль',
    nameEn: 'Salt',
    cost: 5,
    weight: 1,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_IRON,
    name: 'Железо',
    nameEn: 'Iron',
    description: '',
    cost: 10,
    weight: 1,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_CANVAS,
    name: 'Холст',
    nameEn: 'Canvas',
    description: '10 фт²',
    cost: 10,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_COPPER,
    name: 'Медь',
    nameEn: 'Copper',
    cost: 50,
    weight: 1,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_COTTON_CLOTH,
    name: 'Хлопчатобумажная ткань',
    nameEn: 'Cotton cloth',
    description: '10 фт²',
    cost: 50,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_GINGER,
    name: 'Имбирь',
    nameEn: 'Ginger',
    cost: 100,
    weight: 1,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_GOAT,
    creatureId: CREATURE_GOAT,
    name: 'Коза',
    nameEn: 'Goat',
    cost: 100,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_CINNAMON,
    name: 'Корица',
    nameEn: 'Cinnamon',
    cost: 200,
    weight: 1,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_PEPPER,
    name: 'Перец',
    nameEn: 'Pepper',
    cost: 200,
    weight: 1,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_SHEEP,
    name: 'Овца',
    nameEn: 'Sheep',
    cost: 200,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_CLOVES,
    name: 'Гвоздика',
    nameEn: 'Cloves',
    cost: 300,
    weight: 1,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_PIG,
    name: 'Свинья',
    nameEn: 'Pig',
    cost: 300,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_SILVER,
    name: 'Серебро',
    nameEn: 'Silver',
    cost: 500,
    weight: 1,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_LINEN,
    name: 'Льняная ткань',
    nameEn: 'Linen',
    description: '10 фт.²',
    cost: 300,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_SAFFRON,
    name: 'Шафран',
    nameEn: 'Saffron',
    cost: 1500,
    weight: 1,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_OX,
    name: 'Вол',
    nameEn: 'Ox',
    cost: 1500,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_GOLD,
    name: 'Золото',
    nameEn: 'Gold',
    cost: 5000,
    weight: 1,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_PLATINUM,
    name: 'Платина',
    nameEn: 'Platinum',
    cost: 50000,
    weight: 1,
    source: {
      id: 'PHB',
      page: 157,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_INSECT_REPELLENT_SALVE,
    name: 'Средство для отпугивания насекомых: мазь',
    nameEn: 'Insect Repellent: salve',
    description: 'Бутыль из тыквы или флакон мази содержит 20 порций мази. Одна порция защищает носителя от обычных насекомых в течение 24 часов. Средство водостойкое, так что оно не смывается дождём.',
    cost: 100,
    source: {
      id: 'ToA',
      page: 32,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_INSECT_REPELLENT_INCENSE,
    name: 'Средство для отпугивания насекомых: ароматическая свеча',
    nameEn: 'Insect Repellent: incense',
    description: 'Свеча горит в течение 8 часов и отгоняет насекомых в радиусе 20 фт вокруг себя.',
    cost: 10,
    source: {
      id: 'ToA',
      page: 32,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_RAIN_CATCHER,
    name: 'Дождесборник',
    nameEn: 'Rain Catcher',
    description: 'Простое устройство, состоящее из квадратного куска шкуры со стороной 5 фт и деревянного каркаса с ножками. Будучи растянутой на каркасе, шкура формирует бассейн, который может собрать два галлона питьевой воды за дюйм осадков и вмещает до 8 галлонов воды. Шкура и каркас складываются и удобны в транспортировке.',
    cost: 100,
    weight: 5,
    source: {
      id: 'ToA',
      page: 32,
    },
    category: CAT_GOODS,
  },
  {
    id: ITEM_WINE_COMMON_PITCHER,
    name: 'Вино, обычное (кружка)',
    nameEn: 'Wine, common (pitcher)',
    description: '1 пинта',
    cost: 20,
    weight: 2,
    source: {
      id: 'PHB',
      page: 158,
    },
    category: CAT_FOOD,
  },
  {
    id: ITEM_TEJ_MUG,
    name: 'Теж (кружка)',
    nameEn: 'Tej (mug)',
    description: 'Перебродивший напиток янтарного цвета на основе мёда. На Чульте он куда более распространён и популярен, чем пиво или эль.',
    cost: 4,
    source: {
      id: 'ToA',
      page: 32,
    },
    category: CAT_FOOD,
  },
  {
    id: ITEM_TEJ_CASK,
    name: 'Теж (бочонок в 1 галлон)',
    nameEn: 'Tej (cask)',
    description: 'Перебродивший напиток янтарного цвета на основе мёда. На Чульте он куда более распространён и популярен, чем пиво или эль.',
    cost: 20,
    source: {
      id: 'ToA',
      page: 32,
    },
    category: CAT_FOOD,
  },
  {
    id: ITEM_WINE_COMMON_BOTTLE,
    name: 'Вино, обычное (бутылка)',
    nameEn: 'Wine, common (bottle)',
    description: '1,5 пинты',
    cost: 50,
    weight: 3,
    source: {
      id: 'PHB',
      page: 158,
    },
    category: CAT_FOOD,
  },
  {
    id: ITEM_WINE_FINE_PITCHER,
    name: 'Вино, изысканное (кружка)',
    nameEn: 'Wine, fine (pitcher)',
    description: '1 пинта',
    cost: 400,
    weight: 2,
    source: {
      id: 'PHB',
      page: 158,
    },
    category: CAT_FOOD,
  },
  {
    id: ITEM_WINE_FINE_BOTTLE,
    name: 'Вино, изысканное (бутылка)',
    nameEn: 'Wine, fine (bottle)',
    description: '1,5 пинты',
    cost: 1000,
    weight: 3,
    source: {
      id: 'PHB',
      page: 158,
    },
    category: CAT_FOOD,
  },
  {
    id: ITEM_MEAT_CHUNK,
    name: 'Мясо, кусок',
    nameEn: 'Meat, chunk',
    cost: 300,
    source: {
      id: 'PHB',
      page: 158,
    },
    category: CAT_FOOD,
  },
  {
    id: ITEM_ALE_MUG,
    name: 'Пиво, кружка',
    nameEn: 'Ale, mug',
    cost: 4,
    source: {
      id: 'PHB',
      page: 158,
    },
    category: CAT_FOOD,
  },
  {
    id: ITEM_ALE_GALLON,
    name: 'Пиво, галлон',
    nameEn: 'Ale, gallon',
    cost: 20,
    source: {
      id: 'PHB',
      page: 158,
    },
    category: CAT_FOOD,
  },
  {
    id: ITEM_CHEESE_HUNK,
    name: 'Сыр, кусок',
    nameEn: 'Cheese, hunk',
    cost: 10,
    source: {
      id: 'PHB',
      page: 158,
    },
    category: CAT_FOOD,
  },
  {
    id: ITEM_BANQUET,
    name: 'Торжественный обед',
    nameEn: 'Banquet',
    description: 'на 1 едока',
    cost: 1000,
    source: {
      id: 'PHB',
      page: 158,
    },
    category: CAT_FOOD,
  },
  {
    id: ITEM_BREAD_LOAF,
    name: 'Хлеб, ломоть',
    nameEn: 'Bread, loaf',
    cost: 2,
    source: {
      id: 'PHB',
      page: 158,
    },
    category: CAT_FOOD,
  },
  {
    id: ITEM_ASSASSINS_BLOOD,
    name: 'Кровь ассасина',
    nameEn: 'Assassin’s Blood',
    description: `Существо, подвергшееся действию этого яда, должно совершить спасбросок Телосложения со Сл 10. При провале оно получает урон ядом 6 (1к12) и становится отравленным на 24 часа. При успехе существо получает половину урона и не становится отравленным.`,
    damage: {
      cubeType: 12,
      cubeCount: 1,
    },
    saveThrow: {
      type: 'con',
      dc: 10,
    },
    cost: 15000,
    damageType: DAMAGE_POISON,
    poisonType: 'ingested',
    source: {
      id: 'DMG',
      page: 257,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_POISONS,
  },
  {
    id: ITEM_BURNT_OTHUR_FUMES,
    name: 'Дым жжённого отура',
    nameEn: 'Burnt Othur Fumes',
    description: `Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 13, иначе оно получит урон ядом 10 (3к6) и будет должно повторять этот спасбросок в начале каждого своего хода. При каждом провале персонаж получит урон ядом 3 (1к6). После трёх успехов яд прекратит своё действие.`,
    damage: {
      cubeType: 6,
      cubeCount: 3,
    },
    saveThrow: {
      type: 'con',
      dc: 13,
    },
    cost: 50000,
    damageType: DAMAGE_POISON,
    poisonType: 'inhaled',
    source: {
      id: 'DMG',
      page: 258,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_POISONS,
  },
  {
    id: ITEM_CRAWLER_MUCUS,
    name: 'Слизь ползающего падальщика',
    nameEn: 'Crawler Mucus',
    description: `Этот яд собирают с мёртвого или недееспособного [ползающего падальщика](/dnd/creature-catalog/carrion_crawler). Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 13, иначе оно станет отравленным на 1 минуту. Будучи отравленным, существо также парализовано. Существо может повторять спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.`,
    saveThrow: {
      type: 'con',
      dc: 13,
    },
    cost: 20000,
    poisonType: 'contact',
    source: {
      id: 'DMG',
      page: 258,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_POISONS,
  },
  {
    id: ITEM_DROW_POISON,
    name: 'Яд дроу',
    nameEn: 'Drow Poison',
    description: `Обычно этот яд изготавливают только дроу, к тому же в местах, где нет солнечного света. Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 13, иначе оно станет отравленным на 1 час. Если спасбросок провален на 5 или больше единиц, существо также лишено сознания, пока отравлено. Существо приходит в сознание, если получает урон или другое существо действием его потрясёт, чтобы разбудить.`,
    saveThrow: {
      type: 'con',
      dc: 13,
    },
    cost: 20000,
    poisonType: 'injury',
    source: {
      id: 'DMG',
      page: 258,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_POISONS,
  },
  {
    id: ITEM_ESSENCE_OF_ETHER,
    name: 'Эссенция эфира',
    nameEn: 'Essence of Ether',
    description: `Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 15, иначе оно станет отравленным на 8 часов. Существо также лишено сознания, пока отравлено. Существо приходит в сознание, если получает урон или другое существо действием его потрясёт, чтобы разбудить.`,
    saveThrow: {
      type: 'con',
      dc: 15,
    },
    cost: 30000,
    poisonType: 'inhaled',
    source: {
      id: 'DMG',
      page: 258,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_POISONS,
  },
  {
    id: ITEM_MALICE,
    name: 'Злоба',
    nameEn: 'Malice',
    description: `Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 15, иначе оно станет отравленным на 1 час. Существо ослеплено, пока отравлено.`,
    saveThrow: {
      type: 'con',
      dc: 15,
    },
    cost: 25000,
    poisonType: 'inhaled',
    source: {
      id: 'DMG',
      page: 258,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_POISONS,
  },
  {
    id: ITEM_MIDNIGHT_TEARS,
    name: 'Полуночные слёзы',
    nameEn: 'Midnight Tears',
    description: `Существо, проглотившее этот яд, до полуночи ни от чего не страдает. Если до этого момента яд не был нейтрализован, существо должно преуспеть в спасброске Телосложения со Сл 17, получая урон ядом 31 (9к6) при провале или половину этого урона при успехе.`,
    damage: {
      cubeType: 6,
      cubeCount: 9,
    },
    saveThrow: {
      type: 'con',
      dc: 17,
    },
    cost: 150000,
    damageType: DAMAGE_POISON,
    poisonType: 'ingested',
    source: {
      id: 'DMG',
      page: 258,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_POISONS,
  },
  {
    id: ITEM_OIL_OF_TAGGIT,
    name: 'Масло таггита',
    nameEn: 'Oil of Taggit',
    description: `Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 13, иначе оно станет отравленным на 24 часа. Существо также лишено сознания, пока отравлено. Существо приходит в сознание, если получает урон.`,
    saveThrow: {
      type: 'con',
      dc: 13,
    },
    cost: 40000,
    poisonType: 'contact',
    source: {
      id: 'DMG',
      page: 258,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_POISONS,
  },
  {
    id: ITEM_PALE_TINCTURE,
    name: 'Бледная настойка',
    nameEn: 'Pale Tincture',
    description: `Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 16, иначе получит урон ядом 3 (1к6) и станет отравленным. Отравленное существо должно повторять спасбросок каждые 24 часа, получая урон ядом 3 (1к6) при провале. Пока яд действует, урон, причинённый им, ничем не может быть вылечен. После семи успешных спасбросков эффект оканчивается, и существо может лечиться как обычно.`,
    damage: {
      cubeType: 6,
      cubeCount: 1,
    },
    saveThrow: {
      type: 'con',
      dc: 16,
    },
    cost: 25000,
    damageType: DAMAGE_POISON,
    poisonType: 'ingested',
    source: {
      id: 'DMG',
      page: 258,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_POISONS,
  },
  {
    id: ITEM_PURPLE_WORM_POISON,
    name: 'Яд лилового червя',
    nameEn: 'Purple Worm Poison',
    description: `Этот яд собирают с мёртвого или недееспособного [лилового червя](/dnd/creature-catalog/purple_worm/). Существо, подвергшееся действию этого яда, должно совершить спасбросок Телосложения со Сл 19, получая при провале урон ядом 42 (12к6), или половину этого урона при успехе.`,
    damage: {
      cubeType: 6,
      cubeCount: 12,
    },
    saveThrow: {
      type: 'con',
      dc: 19,
    },
    cost: 200000,
    damageType: DAMAGE_POISON,
    poisonType: 'injury',
    source: {
      id: 'DMG',
      page: 258,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_POISONS,
  },
  {
    id: ITEM_SERPENT_VENOM,
    name: 'Змеиный яд',
    nameEn: 'Serpent Venom',
    description: `Этот яд собирают с мёртвой или недееспособной гигантской ядовитой змеи. Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 11, получая урон ядом 10 (3к6) при провале, или половину этого урона при успехе.`,
    damage: {
      cubeType: 6,
      cubeCount: 3,
    },
    saveThrow: {
      type: 'con',
      dc: 11,
    },
    cost: 20000,
    damageType: DAMAGE_POISON,
    poisonType: 'injury',
    source: {
      id: 'DMG',
      page: 258,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_POISONS,
  },
  {
    id: ITEM_TORPOR,
    name: 'Ступор',
    nameEn: 'Torpor',
    description: `Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 15, иначе оно станет отравленным на 4к6 часов. Существо также недееспособно, пока отравлено.`,
    saveThrow: {
      type: 'con',
      dc: 15,
    },
    cost: 60000,
    poisonType: 'ingested',
    source: {
      id: 'DMG',
      page: 258,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_POISONS,
  },
  {
    id: ITEM_TRUTH_SERUM,
    name: 'Сыворотка правды',
    nameEn: 'Truth Serum',
    description: `Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 11, иначе станет отравленным на 1 час. Пока существо отравлено, оно не может сознательно говорить ложь, как если бы оно находилось под действием заклинания «Область истины».`,
    saveThrow: {
      type: 'con',
      dc: 11,
    },
    cost: 15000,
    poisonType: 'ingested',
    source: {
      id: 'DMG',
      page: 258,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_POISONS,
  },
  {
    id: ITEM_WYVERN_POISON,
    name: 'Яд виверны',
    nameEn: 'Wyvern Poison',
    description: `Этот яд собирают с мёртвой или недееспособной [виверны](/dnd/creature-catalog/wyvern/). Существо, подвергшееся действию этого яда, должно совершить спасбросок Телосложения со Сл 15, получая при провале урон ядом 24 (7к6) или половину этого урона при успехе.`,
    damage: {
      cubeType: 6,
      cubeCount: 7,
    },
    saveThrow: {
      type: 'con',
      dc: 15,
    },
    cost: 120000,
    damageType: DAMAGE_POISON,
    poisonType: 'injury',
    source: {
      id: 'DMG',
      page: 258,
    },
    category: CAT_EQUIPMENT,
    subcategory: CAT_POISONS,
  },
]

export default dndItemRawList
