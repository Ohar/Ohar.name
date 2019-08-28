const {
  CR_0,
  CR_1_8,
  CR_1_4,
  CR_1_2,
  CR_1,
  CR_2,
  CR_3,
  CR_4,
  CR_5,
  CR_6,
  CR_7,
  CR_8,
  CR_9,
  CR_10,
  CR_11,
  CR_12,
  CR_13,
  CR_14,
  CR_15,
  CR_16,
  CR_17,
  CR_18,
  CR_19,
  CR_20,
  CR_21,
  CR_22,
  CR_23,
  CR_24,
  CR_25,
  CR_26,
  CR_27,
  CR_28,
  CR_29,
  CR_30,
} = require('./dndCrList')
const {
  SIZE_GARGANTUA,
  SIZE_HUGE,
  SIZE_MEDIUM,
  SIZE_LARGE,
  SIZE_SMALL,
  SIZE_TINY,
} = require('./dndSizeList')
const {
  CREATURE_TYPE_AARAKOCRA,
  CREATURE_TYPE_ABERRATION,
  CREATURE_TYPE_ANY_RACE,
  CREATURE_TYPE_BEAST,
  CREATURE_TYPE_BULLYWUG,
  CREATURE_TYPE_CELESTIAL,
  CREATURE_TYPE_CONSTRUCT,
  CREATURE_TYPE_DEMON,
  CREATURE_TYPE_DEVIL,
  CREATURE_TYPE_DRAGON,
  CREATURE_TYPE_DWARF,
  CREATURE_TYPE_ELEMENTAL,
  CREATURE_TYPE_FEY,
  CREATURE_TYPE_FIEND,
  CREATURE_TYPE_GIANT,
  CREATURE_TYPE_GITH,
  CREATURE_TYPE_GNOLL,
  CREATURE_TYPE_GNOME,
  CREATURE_TYPE_GOBLINOID,
  CREATURE_TYPE_GRIMLOCK,
  CREATURE_TYPE_HUMANOID,
  CREATURE_TYPE_MONSTER,
  CREATURE_TYPE_PLANT,
  CREATURE_TYPE_SHAPESHIFTER,
  CREATURE_TYPE_UNDEAD
} = require('./dndCreatureTypeList')
const {
  ALIGMENT_ANY,
  ALIGMENT_ANY_EVIL,
  ALIGMENT_CE,
  ALIGMENT_CG,
  ALIGMENT_CN,
  ALIGMENT_LE,
  ALIGMENT_LG,
  ALIGMENT_LN,
  ALIGMENT_NE,
  ALIGMENT_NG,
  ALIGMENT_N,
  ALIGMENT_NO,
  ALIGMENT_NOT_LAWFUL,
} = require('./dndAligmentList')
const {
  SPEED_CLIMB,
  SPEED_DIG,
  SPEED_FLY,
  SPEED_SWIM,
  SPEED_WALK,
} = require('./dndSpeedList')
const {
  ACTION_MELEE_WEAPON_ATTACK,
  ACTION_MELEE_OR_RANGE_WEAPON_ATTACK,
  ACTION_MELEE_SPELL_ATTACK,
  ACTION_RANGE_WEAPON_ATTACK,
  ACTION_RANGE_SPELL_ATTACK,
} = require('./dndActionTypeList')
const {
  LANG_AARAKOCRA,
  LANG_ABYSSAL,
  LANG_ALL,
  LANG_ALL_KNOWN_AT_LIFE,
  LANG_ANY_ONE,
  LANG_AQUAN,
  LANG_AURAN,
  LANG_BULLYWUG,
  LANG_CELESTIAL,
  LANG_COMMON,
  LANG_DEEP_SPEECH,
  LANG_DRACONIC,
  LANG_DWARVISH,
  LANG_ELVEN,
  LANG_GIANT,
  LANG_GITH,
  LANG_GNOLL,
  LANG_GNOMISH,
  LANG_GOBLIN,
  LANG_GRELL,
  LANG_IGNAN,
  LANG_INFERNAL,
  LANG_ITS_CREATOR,
  LANG_PRIMORDIAL,
  LANG_SYLVAN,
  LANG_TELEPATHY,
  LANG_TERRAN,
  LANG_UMBER_HULK,
  LANG_UNDERCOMMON,
  LANG_YETI,
} = require('./dndLanguageList')
const {
  DAMAGE_ACID,
  DAMAGE_BLUDGEONING,
  DAMAGE_COLD,
  DAMAGE_ELECTRICITY,
  DAMAGE_FIRE,
  DAMAGE_MAGIC_WEAPON,
  DAMAGE_NECROTIC,
  DAMAGE_NONMAGIC_NONADAMANTINE_WEAPON,
  DAMAGE_NONMAGIC_NONSILVER_WEAPON,
  DAMAGE_NONMAGIC_WEAPON,
  DAMAGE_PIERCING,
  DAMAGE_POISON,
  DAMAGE_PSYCHIC,
  DAMAGE_RADIANT,
  DAMAGE_SLASHING,
  DAMAGE_THUNDER,
} = require('./dndDamageTypeList')
const {
  SENSE_BLIND_VISION,
  SENSE_DARK_VISION,
  SENSE_PASSIVE_PERCEPTION,
  SENSE_TRUE_VISION,
  SENSE_VIBRATION_SENSE,
} = require('./dndSenseList')
const {
  SKILL_ARCANA,
  SKILL_ATHLETICS,
  SKILL_DECEPTION,
  SKILL_HISTORY,
  SKILL_INSIGHT,
  SKILL_INTIMIDATION,
  SKILL_INVESTIGATION,
  SKILL_MEDICINE,
  SKILL_PERCEPTION,
  SKILL_PERSUASION,
  SKILL_RELIGION,
  SKILL_STEALTH,
} = require('./dndSkillList')
const {
  PC_CLASS_PRIEST,
  PC_CLASS_WIZARD,
} = require('./dndPcClassList')
const {
  PARAM_STR,
  PARAM_DEX,
  PARAM_CON,
  PARAM_INT,
  PARAM_WIT,
  PARAM_CHA,
} = require('./dndParamList')
const {
  SPELL_ALTER_SELF,
  SPELL_ANIMATE_DEAD,
  SPELL_BANE,
  SPELL_BARKSKIN,
  SPELL_BESTOW_CURSE,
  SPELL_BLADE_BARRIER,
  SPELL_BLESS,
  SPELL_BLIGHT,
  SPELL_BLINDNESS_DEAFNESS,
  SPELL_BLUR,
  SPELL_CLAIRVOYANCE,
  SPELL_COLOR_SPRAY,
  SPELL_COMMAND,
  SPELL_COMMUNE,
  SPELL_COMPREHEND_LANGUAGES,
  SPELL_CONFUSION,
  SPELL_CONJURE_ELEMENTAL,
  SPELL_CONTACT_OTHER_PLANE,
  SPELL_CONTROL_WEATHER,
  SPELL_COUNTERSPELL,
  SPELL_CREATE_FOOD_AND_WATER,
  SPELL_CREATE_OR_DESTROY_WATER,
  SPELL_CREATION,
  SPELL_CURE_WOUNDS,
  SPELL_DANCING_LIGHTS,
  SPELL_DARKNESS,
  SPELL_DETECT_EVIL_AND_GOOD,
  SPELL_DETECT_MAGIC,
  SPELL_DETECT_THOUGHTS,
  SPELL_DISGUISE_SELF,
  SPELL_DISPEL_EVIL_AND_GOOD,
  SPELL_DISPEL_MAGIC,
  SPELL_DIVINATION,
  SPELL_DOMINATE_PERSON,
  SPELL_DRUIDCRAFT,
  SPELL_ENLARGE_REDUCE,
  SPELL_ENTANGLE,
  SPELL_EYEBITE,
  SPELL_FAERIE_FIRE,
  SPELL_FEATHER_FALL,
  SPELL_FIREBALL,
  SPELL_FLAME_STRIKE,
  SPELL_FLY,
  SPELL_FOG_CLOUD,
  SPELL_FREEDOM_OF_MOVEMENT,
  SPELL_GASEOUS_FORM,
  SPELL_GOODBERRY,
  SPELL_GREATER_INVISIBILITY,
  SPELL_GUST_OF_WIND,
  SPELL_HALLUCINATORY_TERRAIN,
  SPELL_HOLD_MONSTER,
  SPELL_HOLD_PERSON,
  SPELL_IDENTIFY,
  SPELL_INSECT_PLAGUE,
  SPELL_INVISIBILITY,
  SPELL_JUMP,
  SPELL_LEVITATE,
  SPELL_LIGHT,
  SPELL_LIGHTNING_BOLT,
  SPELL_LOCATE_OBJECT,
  SPELL_MAGE_HAND,
  SPELL_MAGIC_MISSILE,
  SPELL_MAJOR_IMAGE,
  SPELL_MINOR_ILLUSION,
  SPELL_MIRROR_IMAGE,
  SPELL_MISTY_STEP,
  SPELL_MOVE_EARTH,
  SPELL_NONDETECTION,
  SPELL_PASS_WITHOUT_TRACE,
  SPELL_PASSWALL,
  SPELL_PHANTASMAL_FORCE,
  SPELL_PHANTASMAL_KILLER,
  SPELL_PLANE_SHIFT,
  SPELL_POISON_SPRAY,
  SPELL_POLYMORPH,
  SPELL_POWER_WORD_STUN,
  SPELL_PRESTIDIGITATION,
  SPELL_PURIFY_FOOD_AND_DRINK,
  SPELL_RAISE_DEAD,
  SPELL_RAY_OF_ENFEEBLEMENT,
  SPELL_RAY_OF_FROST,
  SPELL_RAY_OF_SICKNESS,
  SPELL_RESSURECTION,
  SPELL_SACRED_FLAME,
  SPELL_SANCTUARY,
  SPELL_SCRYING,
  SPELL_SEE_INVISIBILITY,
  SPELL_SHIELD,
  SPELL_SHILLELAGH,
  SPELL_SILENCE,
  SPELL_SLEEP,
  SPELL_STONE_SHAPE,
  SPELL_SUGGESTION,
  SPELL_TELEKINESIS,
  SPELL_THAUMATURGY,
  SPELL_THUNDERWAVE,
  SPELL_TONGUES,
  SPELL_VICIOUS_MOCKERY,
  SPELL_WALL_OF_FIRE,
  SPELL_WALL_OF_STONE,
  SPELL_WATER_BREATHING,
  SPELL_WATER_WALK,
  SPELL_WEB,
  SPELL_WIND_WALK,
} = require('./dndSpellList')
const {
  CAST_MATERIAL,
  CAST_NONE,
  CAST_SOMATIC,
  CAST_VERBAL,
} = require('./dndCastComponentList')
const {
  CONDITION_BLINDED,
  CONDITION_CHARMED,
  CONDITION_DEAFENED,
  CONDITION_EXHAUSTION,
  CONDITION_FRIGHTENED,
  CONDITION_GRAPPLED,
  CONDITION_INCAPACITATED,
  CONDITION_INVISIBLE,
  CONDITION_PARALYZED,
  CONDITION_PETRIFIED,
  CONDITION_POISONED,
  CONDITION_PRONE,
  CONDITION_RESTRAINED,
  CONDITION_STUNNED,
  CONDITION_UNCONSCIOUS,
} = require('./dndConditionList')
const {
  TARGET_CREATURE,
  TARGET_OBJECT,
  TARGET_POINT,
} = require('./dndTargetList')
const {
  blackDragonDescription,
  blueDragonDescription,
  boneDevilSummoner,
  brassDragonDescription,
  bronzeDragonDescription,
  copperDragonDescription,
  coven,
  goldDragonDescription,
  greenDragonDescription,
  iceDevilSummoner,
  redDragonDescription,
  silverDragonDescription,
  whiteDragonDescription,
} = require('./dndCreatureCommonParts')

const CREATURE_AARAKOCRA = 'aarakocra'
const CREATURE_ABOLETH = 'aboleth'
const CREATURE_ABOMINABLE_YETI = 'abominable_yeti'
const CREATURE_ACOLYTE = 'acolyte'
const CREATURE_ADULT_BLACK_DRAGON = 'adult_black_dragon'
const CREATURE_ADULT_BLUE_DRAGON = 'adult_blue_dragon'
const CREATURE_ADULT_BRASS_DRAGON = 'adult_brass_dragon'
const CREATURE_ADULT_BRONZE_DRAGON = 'adult_bronze_dragon'
const CREATURE_ADULT_COPPER_DRAGON = 'adult_copper_dragon'
const CREATURE_ADULT_GOLD_DRAGON = 'adult_gold_dragon'
const CREATURE_ADULT_GREEN_DRAGON = 'adult_green_dragon'
const CREATURE_ADULT_RED_DRAGON = 'adult_red_dragon'
const CREATURE_ADULT_SILVER_DRAGON = 'adult_silver_dragon'
const CREATURE_ADULT_WHITE_DRAGON = 'adult_white_dragon'
const CREATURE_ALLOSAURUS = 'allosaurus'
const CREATURE_ANCIENT_BLACK_DRAGON = 'ancient_black_dragon'
const CREATURE_ANCIENT_BLUE_DRAGON = 'ancient_blue_dragon'
const CREATURE_ANCIENT_BRASS_DRAGON = 'ancient_brass_dragon'
const CREATURE_ANCIENT_BRONZE_DRAGON = 'ancient_bronze_dragon'
const CREATURE_ANCIENT_COPPER_DRAGON = 'ancient_copper_dragon'
const CREATURE_ANCIENT_GOLD_DRAGON = 'ancient_gold_dragon'
const CREATURE_ANCIENT_GREEN_DRAGON = 'ancient_green_dragon'
const CREATURE_ANCIENT_RED_DRAGON = 'ancient_red_dragon'
const CREATURE_ANCIENT_SILVER_DRAGON = 'ancient_silver_dragon'
const CREATURE_ANCIENT_WHITE_DRAGON = 'ancient_white_dragon'
const CREATURE_ANKHEG = 'ankheg'
const CREATURE_ANKYLOSAURUS = 'ankylosaurus'
const CREATURE_BALOR = 'balor'
const CREATURE_BANDIT = 'bandit'
const CREATURE_BANSHEE = 'banshee'
const CREATURE_BARLGURA = 'barlgura'
const CREATURE_BASILISK = 'basilisk'
const CREATURE_BARBED_DEVIL = 'barbed_devil'
const CREATURE_BARBED_DEVIL_SUMMONER = 'barbed_devil_summoner'
const CREATURE_BEARDED_DEVIL = 'bearded_devil'
const CREATURE_BEARDED_DEVIL_SUMMONER = 'bearded_devil_summoner'
const CREATURE_BEHIR = 'behir'
const CREATURE_BEHOLDER = 'beholder'
const CREATURE_BEHOLDER_ZOMBIE = 'beholder_zombie'
const CREATURE_BLACK_DRAGON_WYRMLING = 'black_dragon_wyrmling'
const CREATURE_BLUE_DRAGON_WYRMLING = 'blue_dragon_wyrmling'
const CREATURE_BONE_DEVIL = 'bone_devil'
const CREATURE_BONE_DEVIL_SUMMONER = 'bone_devil_summoner'
const CREATURE_BONE_DEVIL_SUMMONER_WITH_A_SPEAR = 'bone_devil_summoner_with_a_spear'
const CREATURE_BONE_DEVIL_WITH_A_SPEAR = 'bone_devil_with_a_spear'
const CREATURE_BRASS_DRAGON_WYRMLING = 'brass_dragon_wyrmling'
const CREATURE_BRONZE_DRAGON_WYRMLING = 'bronze_dragon_wyrmling'
const CREATURE_BULLYWUG = 'bullywug'
const CREATURE_CAMBION = 'cambion'
const CREATURE_CHAIN_DEVIL = 'chain_devil'
const CREATURE_CHASME = 'chasme'
const CREATURE_CLAY_GOLEM = 'clay_golem'
const CREATURE_CLOUD_GIANT = 'cloud_giant'
const CREATURE_COMMONER = 'commoner'
const CREATURE_COPPER_DRAGON_WYRMLING = 'copper_dragon_wyrmling'
const CREATURE_DAO = 'dao'
const CREATURE_DEATH_TYRANT = 'death_tyrant'
const CREATURE_DEMILICH = 'demilich'
const CREATURE_DEVA = 'deva'
const CREATURE_DJINNI = 'djinni'
const CREATURE_DOPPELGANGER = 'doppelganger'
const CREATURE_DRAGON_TURTLE = 'dragon_turtle'
const CREATURE_DRETCH = 'dretch'
const CREATURE_DRIDER = 'drider'
const CREATURE_DRIDER_SPELLCASTER = 'drider_spellcaster'
const CREATURE_DRYAD = 'dryad'
const CREATURE_DUERGAR = 'duergar'
const CREATURE_EFREETI = 'efreeti'
const CREATURE_ERINYES = 'erinyes'
const CREATURE_ERINYES_SUMMONER = 'erinyes_summoner'
const CREATURE_FAERIE_DRAGON_BLUE = 'faerie_dragon_blue'
const CREATURE_FAERIE_DRAGON_GREEN = 'faerie_dragon_green'
const CREATURE_FAERIE_DRAGON_LIGHT_BLUE = 'faerie_dragon_light_blue'
const CREATURE_FAERIE_DRAGON_ORANGE = 'faerie_dragon_orange'
const CREATURE_FAERIE_DRAGON_RED = 'faerie_dragon_red'
const CREATURE_FAERIE_DRAGON_VIOLET = 'faerie_dragon_violet'
const CREATURE_FAERIE_DRAGON_YELLOW = 'faerie_dragon_yellow'
const CREATURE_FIRE_GIANT = 'fire_giant'
const CREATURE_FLESH_GOLEM = 'flesh_golem'
const CREATURE_FROST_GIANT = 'frost_giant'
const CREATURE_GALEB_DUHR = 'galeb_duhr'
const CREATURE_GARGOYLE = 'gargoyle'
const CREATURE_GAS_SPORE = 'gas_spore'
const CREATURE_GIBBERING_MOUTHER = 'gibbering_mouther'
const CREATURE_GITHZERAI_ZERTH = 'githzerai_zerth'
const CREATURE_GITHZERAI_MONK = 'githzerai_monk'
const CREATURE_GITHYANKI_KNIGHT = 'githyanki_knight'
const CREATURE_GITHYANKI_WARRIOR = 'githyanki_warrior'
const CREATURE_GLABREZU = 'glabrezu'
const CREATURE_GNOLL = 'gnoll'
const CREATURE_GNOLL_FANG_OF_YEENOGHU = 'gnoll_fang_of_yeenoghu'
const CREATURE_GNOLL_PACK_LORD = 'gnoll_pack_lord'
const CREATURE_GNOME_DEEP = 'gnome_deep'
const CREATURE_GOBLIN = 'goblin'
const CREATURE_GOBLIN_BOSS = 'goblin_boss'
const CREATURE_GOLD_DRAGON_WYRMLING = 'gold_dragon_wyrmling'
const CREATURE_GORGON = 'gorgon'
const CREATURE_GORISTRO = 'goristro'
const CREATURE_GREEN_DRAGON_WYRMLING = 'green_dragon_wyrmling'
const CREATURE_GREEN_HAG = 'green_hag'
const CREATURE_GREEN_HAG_COVEN = 'green_hag_coven'
const CREATURE_GRELL = 'grell'
const CREATURE_GRICK = 'grick'
const CREATURE_GRICK_ALPHA = 'grick_alpha'
const CREATURE_GRIFFON = 'griffon'
const CREATURE_GRIMLOCK = 'grimlock'
const CREATURE_HARPY = 'harpy'
const CREATURE_HELL_HOUND = 'hell_hound'
const CREATURE_HEZROU = 'hezrou'
const CREATURE_HILL_GIANT = 'hill_giant'
const CREATURE_HOMUNCULUS = 'homunculus'
const CREATURE_HORNED_DEVIL = 'horned_devil'
const CREATURE_HORNED_DEVIL_SUMMONER = 'horned_devil_summoner'
const CREATURE_HYDRA = 'hydra'
const CREATURE_HIPPOGRIFF = 'hippogriff'
const CREATURE_ICE_DEVIL = 'ice_devil'
const CREATURE_ICE_DEVIL_SUMMONER = 'ice_devil_summoner'
const CREATURE_ICE_DEVIL_SUMMONER_WITH_A_SPEAR = 'ice_devil_summoner_with_a_spear'
const CREATURE_ICE_DEVIL_WITH_A_SPEAR = 'ice_devil_with_a_spear'
const CREATURE_IMP = 'imp'
const CREATURE_IMP_FAMILIAR = 'imp_familiar'
const CREATURE_IRON_GOLEM = 'iron_golem'
const CREATURE_LEMURE = 'lemure'
const CREATURE_MANES = 'manes'
const CREATURE_MARID = 'marid'
const CREATURE_MARILITH = 'marilith'
const CREATURE_MERROW = 'merrow'
const CREATURE_NALFESHNEE = 'nalfeshnee'
const CREATURE_NEEDLE_BLIGHT = 'needle_blight'
const CREATURE_NIGHT_HAG = 'night_hag'
const CREATURE_PLANETAR = 'planetar'
const CREATURE_QUASIT = 'quasit'
const CREATURE_QUASIT_FAMILIAR = 'quasit_familiar'
const CREATURE_OGRE_ZOMBIE = 'ogre_zombie'
const CREATURE_PIT_FIEND = 'pit_fiend'
const CREATURE_PIT_FIEND_SUMMONER = 'pit_fiend_summoner'
const CREATURE_PLESIOSAURUS = 'plesiosaurus'
const CREATURE_PTERANODON = 'pteranodon'
const CREATURE_RED_DRAGON_WYRMLING = 'red_dragon_wyrmling'
const CREATURE_ROPER = 'roper'
const CREATURE_SEA_HAG = 'sea_hag'
const CREATURE_SHADOW_DEMON = 'shadow_demon'
const CREATURE_SHRIEKER = 'shrieker'
const CREATURE_SILVER_DRAGON_WYRMLING = 'silver_dragon_wyrmling'
const CREATURE_SOLAR = 'solar'
const CREATURE_STONE_GIANT = 'stone_giant'
const CREATURE_STONE_GOLEM = 'stone_golem'
const CREATURE_STORM_GIANT = 'storm_giant'
const CREATURE_SPECTATOR = 'spectator'
const CREATURE_SPINED_DEVIL = 'spined_devil'
const CREATURE_TRICERATOPS = 'triceratops'
const CREATURE_TWIG_BLIGHT = 'twig_blight'
const CREATURE_TYRANNOSAURUS_REX = 'tyrannosaurus_rex'
const CREATURE_UMBER_HULK = 'umber_hulk'
const CREATURE_UNICORN = 'unicorn'
const CREATURE_VAMPIRE = 'vampire'
const CREATURE_VAMPIRE_SPAWN = 'vampire_spawn'
const CREATURE_VAMPIRE_SPELLCASTER = 'vampire_spellcaster'
const CREATURE_VAMPIRE_WARRIOR = 'vampire_warrior'
const CREATURE_VINE_BLIGHT = 'vine_blight'
const CREATURE_VIOLET_FUNGUS = 'violet_fungus'
const CREATURE_VROCK = 'vrock'
const CREATURE_WATER_WEIRD = 'water_weird'
const CREATURE_WHITE_DRAGON_WYRMLING = 'white_dragon_wyrmling'
const CREATURE_WILL_O_WISP = 'will_o_wisp'
const CREATURE_WYVERN = 'wyvern'
const CREATURE_XORN = 'xorn'
const CREATURE_YETI = 'yeti'
const CREATURE_YOCHLOL = 'yochlol'
const CREATURE_YOUNG_BLACK_DRAGON = 'young_black_dragon'
const CREATURE_YOUNG_BLUE_DRAGON = 'young_blue_dragon'
const CREATURE_YOUNG_BRASS_DRAGON = 'young_brass_dragon'
const CREATURE_YOUNG_BRONZE_DRAGON = 'young_bronze_dragon'
const CREATURE_YOUNG_COPPER_DRAGON = 'young_copper_dragon'
const CREATURE_YOUNG_GOLD_DRAGON = 'young_gold_dragon'
const CREATURE_YOUNG_GREEN_DRAGON = 'young_green_dragon'
const CREATURE_YOUNG_RED_DRAGON = 'young_red_dragon'
const CREATURE_YOUNG_SILVER_DRAGON = 'young_silver_dragon'
const CREATURE_YOUNG_WHITE_DRAGON = 'young_white_dragon'
const CREATURE_ZOMBIE = 'zombie'

module.exports = [
  {
    name: 'Обыватель',
    nameEn: 'Commoner',
    id: CREATURE_COMMONER,
    description: '**Обыватели** включают в себя крестьян, крепостных, рабов, слуг, пилигримов, торговцев, ремесленников и отшельников.',
    aligmentId: ALIGMENT_ANY,
    source: 'MM:348',
    speed: {
      [SPEED_WALK]: 30,
    },
    hp: {
      cubeCount: 1,
      cubeType: 8,
    },
    armor: 10,
    cr: CR_0,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_HUMANOID,
      CREATURE_TYPE_ANY_RACE,
    ],
    params: {
      [PARAM_STR]: 10,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 10,
      [PARAM_INT]: 10,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 10,
    },
    languageList: [
      LANG_ANY_ONE,
    ],
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    actionList: [
      {
        name: 'Дубина',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 2,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 1,
            cubeType: 4,
          },
        },
      },
    ],
  },
  {
    name: 'Разбойник',
    nameEn: 'Bandit',
    id: CREATURE_BANDIT,
    description: `**Разбойники** рыщут бандами, возглавляемыми головорезами, ветеранами или заклинателями. Не все разбойники злы. Угнетения, засуха, болезни или голод могут подтолкнуть самых честных жителей на путь разбоя.\n
**Пираты** это разбойники открытых морей. Они могут быть флибустьерами, заинтересованными лишь в сокровищах и убийствах, или могут быть каперами, которым правитель разрешил нападать на суда вражеской страны с целью грабежа.`,
    aligmentId: ALIGMENT_NOT_LAWFUL,
    source: 'MM:348',
    speed: {
      [SPEED_WALK]: 30,
    },
    hp: {
      cubeCount: 2,
      cubeType: 8,
      cubeBonus: 2,
    },
    armor: {
      ac: 12,
      type: 'кожаный доспех',
    },
    cr: CR_1_8,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_HUMANOID,
      CREATURE_TYPE_ANY_RACE,
    ],
    params: {
      [PARAM_STR]: 11,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 12,
      [PARAM_INT]: 10,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 10,
    },
    languageList: [
      LANG_ANY_ONE,
    ],
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    actionList: [
      {
        name: 'Скимитар',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 3,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 1,
            cubeType: 6,
            cubeBonus: 1,
          },
        },
      },
      {
        name: 'Лёгкий арбалет',
        attack: {
          type: ACTION_RANGE_WEAPON_ATTACK,
          bonus: 3,
          range: {
            normal: 80,
            max: 320,
          },
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 8,
            cubeBonus: 1,
          },
        },
      },
    ],
  },
  {
    name: 'Прислужник',
    nameEn: 'Acolyte',
    id: CREATURE_ACOLYTE,
    description: `**Прислужник** это младший представитель духовенства, обычно, помогающий священникам. Он выполняет в храме множество дел и получает от божества незначительные магические способности.`,
    aligmentId: ALIGMENT_ANY,
    source: 'MM:348',
    speed: {
      [SPEED_WALK]: 30,
    },
    hp: {
      cubeCount: 2,
      cubeType: 8,
    },
    armor: 10,
    cr: CR_1_4,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_HUMANOID,
      CREATURE_TYPE_ANY_RACE,
    ],
    params: {
      [PARAM_STR]: 10,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 10,
      [PARAM_INT]: 10,
      [PARAM_WIT]: 14,
      [PARAM_CHA]: 11,
    },
    languageList: [
      LANG_ANY_ONE,
    ],
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 12,
      },
    ],
    skillCollection: {
      [SKILL_MEDICINE]: 4,
      [SKILL_RELIGION]: 2,
    },
    actionList: [
      {
        name: 'Дубина',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 2,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 1,
            cubeType: 4,
          },
        },
      },
    ],
    spellCast: {
      spellCasterLevel: 1,
      spellCasterClass: PC_CLASS_PRIEST,
      baseStat: PARAM_WIT,
      spellAttackBonus: 4,
      saveThrowDc: 12,
      spellIdList: [
        SPELL_BLESS,
        SPELL_CURE_WOUNDS,
        SPELL_LIGHT,
        SPELL_SACRED_FLAME,
        SPELL_SANCTUARY,
        SPELL_THAUMATURGY,
      ],
      slotCountList: [
        Infinity,
        3,
      ],
    },
  },
  {
    name: 'Ааракокра',
    nameEn: 'Aarakocra',
    id: CREATURE_AARAKOCRA,
    description: `**Ааракокры** населяют Воющий Вихрь, бесконечный шторм могучих ветров и дождей, который окружает царство Аакуа в Стихийном Плане Воздуха. Осуществляя воздушное патрулирование, эти птицеподобные гуманоиды охраняют воздушные границы своего дома от захватчиков из Стихийного Плана Земли, своих заклятых врагов — горгулий.\n
**Враги Стихийного Зла**. На службе у Воздушных Герцогов Аакуы ааракокры разведывают планы в поисках храмов Стихийного Зла. Они шпионят за злыми стихийными существами, а затем либо вступают с ними в бой, либо возвращаются с докладом к герцогам.\n
На Материальном Плане ааракокры возводят гнёзда на вершинах самых высоких гор, особенно на пиках вблизи порталов, ведущих на Стихийный План Воздуха. С этих высот ааракокры следят за признаками стихийного вторжения, а также за малейшими угрозами для своего домашнего плана. Ааракокры предпочитают жить сами по себе, как перекати-поле, скитаясь по области в течение многих лет, защищая её от набегов Стихийного Зла.\n
У ааракокр нет представления о политических границах или личной собственности, они не знают цену драгоценным камням, золоту и другим драгоценностям. Всё это для них это ничего не значит. По их мнению, существо должно использовать то, что необходимо, а потом бросить это на ветер, чтобы этим воспользовались другие.\n
**Поиск семи осколков**. Воздушные Герцоги Аакуы происходят от стихийных существ, называемых ваати, которые некогда правили множеством миров. Существо, известное как Королева Хаоса, появившись, развязало межплановую войну с ваати. Для борьбы с этой угрозой семь героев ваати объединили свои силы, чтобы создать могущественный _Жезл Закона_. В битве с величайшим генералом королевы, Мишкой Волчьим Пауком, ваати убили Мишку, проткнув его жезлом как копьём. Жезл сломался на семь осколков, которые разлетелись по всей мультивселенной. Ааракокры ищут эти осколки в разных местах, чтобы восстановить то, что теперь известно как _Жезл Семи Частей_.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_HUMANOID,
      CREATURE_TYPE_AARAKOCRA,
    ],
    aligmentId: ALIGMENT_NG,
    armor: 12,
    hp: {
      cubeCount: 3,
      cubeType: 8,
    },
    speed: {
      [SPEED_WALK]: 20,
      [SPEED_FLY]: 50,
    },
    params: {
      [PARAM_STR]: 10,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 10,
      [PARAM_INT]: 11,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 11,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 5,
    },
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 15,
      },
    ],
    languageList: [
      LANG_AARAKOCRA,
      LANG_AURAN,
    ],
    cr: CR_1_4,
    source: 'MM:14',
    featureList: [
      {
        name: 'Пикирующая атака',
        description: 'Если ааракокра летит и пикирует как минимум на 30 футов по прямой к цели, а затем попадает по ней рукопашной атакой оружием, атака причиняет цели дополнительный урон 3 (1к6).',
      },
    ],
    actionList: [
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 1,
            cubeType: 4,
            cubeBonus: 2,
          },
        },
      },
      {
        name: 'Метательное копьё',
        attack: {
          type: ACTION_MELEE_OR_RANGE_WEAPON_ATTACK,
          bonus: 4,
          range: {
            melee: 5,
            range: {
              normal: 30,
              max: 120,
            },
          },
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 6,
            cubeBonus: 2,
          },
        },
      },
    ],
    isFemale: true,
  },
  {
    name: 'Аболет',
    nameEn: 'Aboleth',
    id: CREATURE_ABOLETH,
    description: `До прихода богов **аболеты** скрывались в первичных океанах и подземных озёрах. Они захватили контроль над развивающимися жизненными формами в царстве смертных, превратив их в своих рабов. Их власть уподобила их богам. Затем появились истинные боги, разбили империю аболетов и освободили их рабов.\n
Но аболеты этого никогда не забывали.\n
**Вечная память.** У аболетов безупречная память.
Они передают знания и опыт из поколения в поколения. Поэтому обида за поражение от рук богов прекрасно сохранилась в их разуме. Разум аболетов это сокровищница древних знаний, отсылающих к доисторическим моментам, и помнят они это очень ясно. Они терпеливо и хитро плетут свои заговоры на протяжении эпох. Мало кто может постичь глубину этих планов кроме самих аболетов.\n
**Боги озёр.** Аболеты обустраиваются в водных средах, в том числе в безднах океанов, глубоких озёрах и Стихийном Плане Воды. В этих областях и землях, примыкающим к них, аболеты подобны богам, требующим поклонения и повиновения от своих подданных. Пожирая других существ, аболеты обогащаться опытом и знаниями своей добычи, которые они добавляют к вечным воспоминаниям. Аболеты используют свои телепатические способности, чтобы читать мысли существ и узнавать их желания. Они используют эти знания, чтобы обеспечить лояльность существ в обмен на выполнение этих желаний. В своём логове аболет может, с помощью своих сил, подменить чувства своих последователей, внушая им иллюзию обещанного вознаграждения.\n
**Враги богов.** Крушение власти аболетов навсегда осталось в их вечных воспоминаниях, так как аболеты никогда по-настоящему не умирают. Если организм аболета уничтожается, его дух возвращается на Стихийный План Воды, где в течение нескольких дней или месяцев для него создаётся новое тело. Главная цель аболетов — свергнуть богов и вернуть контроль над миром. Скрываясь на протяжении эпох, аболеты разрабатывают свой план для идеального исполнения.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_ABERRATION,
    ],
    aligmentId: ALIGMENT_LE,
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 18,
      cubeType: 10,
      cubeBonus: 36,
    },
    speed: {
      [SPEED_WALK]: 10,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 21,
      [PARAM_DEX]: 9,
      [PARAM_CON]: 15,
      [PARAM_INT]: 18,
      [PARAM_WIT]: 15,
      [PARAM_CHA]: 18,
    },
    saveThrowCollection: {
      [PARAM_CON]: 6,
      [PARAM_INT]: 8,
      [PARAM_WIT]: 6,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 10,
      [SKILL_HISTORY]: 12,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 20,
      },
    ],
    languageList: [
      LANG_DEEP_SPEECH,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_10,
    source: 'MM:13',
    featureList: [
      {
        name: 'Амфибия',
        description: 'Аболет может дышать и воздухом и под водой.',
      },
      {
        name: 'Слизистое облако',
        description: 'Находясь под водой, аболет окружён слизью. Существа, которые касаются аболета или попадают по нему рукопашной атакой, находясь в пределах 5 футов от него, должны совершить спасбросок Телосложения со Сл 14. При провале существо заболевает на 1к4 часа. Больные существа могут дышать только под водой.',
      },
      {
        name: 'Зондирующая телепатия',
        description: 'Если существо общается телепатически с аболетом, и аболет при этом видит это существо, он может узнать самые потаённые желания существа.',
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: 'Аболет совершает три атаки щупальцем.',
      },
      {
        name: 'Щупальце',
        description: `Если цель — существо, она должна преуспеть в спасброске Телосложения со Сл 14, иначе станет заболевшей. Заболевание не проявляется в течение 1 минуты, и может быть удалено любой магией, лечащей болезни. Через 1 минуту кожа больного существа становиться прозрачной и склизкой, существо не может восстанавливать хиты кроме как будучи под водой, и болезнь можно удалить только полным исцелением или другим лечащим болезни заклинанием как минимум 6 уровня. Если существо находится вне водоёма, оно получает урон кислотой 6 (1к12) каждые 10 минут, если вода не попала на кожу до истечения 10 минут.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 9,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 5,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 9,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 3,
            cubeType: 6,
            cubeBonus: 5,
          },
        },
      },
      {
        name: 'Порабощение',
        limit: {
          count: 3,
          period: 'день',
        },
        description: `Аболет нацеливается на одно существо, которое видит в пределах 30 футов от себя. Цель должна преуспеть в спасброске Мудрости со Сл 14, иначе она станет магическим образом очарованной. Эффект оканчивается со смертью аболета, либо когда он перестанет быть на одном с целью плане. Очарованная цель находится под контролем аболета, и не может совершать реакции. Цель и аболет могут общаться телепатически на любой дистанции.
Каждый раз, когда очарованная цель получает урон, она может повторить спасбросок. В случае успеха эффект заканчивается. Не более чем один раз в 24 часа цель может также повторить спасбросок, но при этом она должна находиться как минимум в 1 миле от аболета.`,
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: 'Аболет совершает проверку Мудрости (Внимательность).',
      },
      {
        name: 'Удар хвостом',
        description: 'Аболет совершает одну атаку хвостом.',
      },
      {
        name: 'Психическое истощение',
        cost: 2,
        description: `Одно очарованное аболетом существо получает урон психическойэнергией 10 (3к6), и аболет восстанавливает хиты, равные урону, который получило существо.`,
      },
    ],
  },
  {
    name: 'Адская гончая',
    nameEn: 'Hell hound',
    id: CREATURE_HELL_HOUND,
    description: `Чудовищные огнедышащие исчадия, принявшие облик сильных псов, адские гончие встречаются на полях Ахерона и на всех Нижних Планах. На Материальном Плане адские гончие чаще всего встречаются в услужении у дьяволов, огненных великанов и других злых существ, которые используют их в качестве сторожевых животных и спутников.\n
**Жгучий голод.** Адские гончие охотятся стаями, поедая любых существ, которые кажутся съедобными. Они избегают потенциально опасных противников, атакуя самую слабую добычу беспощадными укусами и своим огненным дыханием, и демонстрируют упорную решимость в преследовании добычи до её горького конца.\n
Когда адские гончие кормятся, плоть, которую они пожирают, обжаривается в адском пламени внутри них. Когда адская гончая умирает, этот огонь уничтожает её останки в клубах дыма и полыхающих углей, не оставляя ничего, кроме клочков обгоревшего чёрного меха.\n
**Злые до мозга костей.** Адские гончие умнее, чем обычные звери, а их законопослушная сущность заставляет их хорошо выполнять команды. Однако злобный нрав адской гончей не позволяет псу обучаться командам ни у кого, кроме как у безжалостного убийцы. Если адской гончей не позволять баловать свой злобный голод, она быстро покидает хозяина или оборачивается против него. `,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
    ],
    aligmentId: ALIGMENT_LE,
    armor: {
      ac: 15,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 7,
      cubeType: 8,
      cubeBonus: 14,
    },
    speed: {
      [SPEED_WALK]: 50,
    },
    params: {
      [PARAM_STR]: 17,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 14,
      [PARAM_INT]: 6,
      [PARAM_WIT]: 13,
      [PARAM_CHA]: 6,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 5,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 15,
      },
    ],
    languageList: [
      {
        id: LANG_INFERNAL,
        doNotSpeak: true,
      },
    ],
    immunityList: [
      DAMAGE_FIRE,
    ],
    cr: CR_3,
    source: 'MM:15',
    featureList: [
      {
        name: 'Острый слух и тонкий нюх',
        description: 'Гончая совершает с преимуществом проверки Мудрости (Внимательность), полагающиеся на слух и обоняние.',
      },
      {
        name: 'Тактика стаи',
        description: 'Гончая совершает с преимуществом броски атаки по существу, если в пределах 5 футов от этого существа находится как минимум один дееспособный союзник гончей.',
      },
    ],
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 1,
              cubeType: 8,
              cubeBonus: 3,
            },
            {
              type: DAMAGE_FIRE,
              cubeCount: 2,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Огненное дыхание',
        restore: {
          from: 5,
          to: 6,
        },
        description: `Гончая выдыхает огонь 15-футовым конусом. Все существа в этой области должны совершить спасбросок Ловкости со Сл 12, получая урон огнём 21 (6к6) при провале, или половину этого урона при успехе.`,
      },
    ],
    isFemale: true,
  },
  {
    name: 'Дэв',
    nameEn: 'Deva',
    id: CREATURE_DEVA,
    description: `Дэвы это ангелы, которые выступают в роли божественных посланников или агентов на Материальном Плане, в Царстве Теней или Стране Фей. Они могут принимать форму, которая подходит той области, куда они направляются.\n
Легенды гласят об ангелах, которые принимают облик смертных на много лет, и даруют помощь, надежду и мужество добрым народам. Дэв может принимать любой облик, хотя предпочитает являться смертным в облике безобидного гуманоида или животного. Когда обстоятельства требуют явить истинный облик, дэв предстаёт в образе прекрасного человекоподобного существа с серебряной кожей. Его волосы и глаза сверкают неземным блеском, а большие, покрытые перьями крылья разворачиваются у него за спиной. `,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_CELESTIAL,
    ],
    aligmentId: ALIGMENT_LG,
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 16,
      cubeType: 8,
      cubeBonus: 64,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_FLY]: 90,
    },
    params: {
      [PARAM_STR]: 18,
      [PARAM_DEX]: 18,
      [PARAM_CON]: 18,
      [PARAM_INT]: 17,
      [PARAM_WIT]: 20,
      [PARAM_CHA]: 20,
    },
    saveThrowCollection: {
      [PARAM_WIT]: 9,
      [PARAM_CHA]: 9,
    },
    skillCollection: {
      [SKILL_INSIGHT]: 9,
      [SKILL_PERCEPTION]: 9,
    },
    resistanceList: [
      DAMAGE_RADIANT,
      DAMAGE_NONMAGIC_WEAPON,
    ],
    immunityConditionList: [
      CONDITION_CHARMED,
      CONDITION_EXHAUSTION,
      CONDITION_FRIGHTENED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 19,
      },
    ],
    languageList: [
      LANG_ALL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_10,
    source: 'MM:19',
    featureList: [
      {
        name: 'Оружие ангела',
        description: `Атаки оружием дэва являются магическими. Если дэв попадает любым оружием, оно причиняет дополнительный урон излучением 4к8 (уже включено в атаку).`,
      },
      {
        name: 'Сопротивление магии',
        description: `Дэв совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 17,
      componentOnly: CAST_VERBAL,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            SPELL_DETECT_EVIL_AND_GOOD,
          ],
        },
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_COMMUNE,
            SPELL_RAISE_DEAD,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дэв совершает две рукопашные атаки.`,
      },
      {
        name: 'Булава',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 8,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_BLUDGEONING,
              cubeCount: 1,
              cubeType: 6,
              cubeBonus: 4,
            },
            {
              type: DAMAGE_RADIANT,
              cubeCount: 4,
              cubeType: 8,
            },
          ],
        },
      },
      {
        name: 'Целебное касание',
        limit: {
          count: 3,
          period: 'день',
        },
        description: `Дэв прикасается к другому существу. Цель магическим образом восстанавливает 20 (4к8+2) хитов и избавляется от проклятий, болезней, отравлений, слепоты и глухоты.`,
      },
      {
        name: 'Смена формы',
        description: `Дэв магическим образом превращается в гуманоида или зверя, чей показатель опасности не превышает его собственный, или принимает свой истинный облик. Если дэв умирает, он принимает свой истинный облик. Всё снаряжение, которое он несёт или носит, сливается с новым обликом или используется им (на выбор дэва).\n
В новом облике дэв сохраняет игровую статистику и способность говорить, но КД, режимы перемещения, Сила, Ловкость и специальные чувства заменяются теми, что есть у нового облика, и он получает все элементы статистики и умения (кроме классовых умений, легендарных действий и действий логова), которые есть у нового облика, но отсутствуют у него.`,
      },
    ],
  },
  {
    name: 'Планетар',
    nameEn: 'Planetar',
    id: CREATURE_PLANETAR,
    description: `Планетары это оружие богов, которым они служат, воплощение мощи своих божеств. Они могут вызвать дождь, чтобы облегчить засуху, или наслать насекомых, чтобы уничтожить урожай. Уши этих небожителей слышат любую ложь, а их сияющие глаза видят любой обман.\n
Планетары мускулистые и лысые. Кожа их зелёного цвета с молочным отливом, а крылья у них белые. Они возвышаются над большинством гуманоидов, и изящно пользуются огромными мечами. Иногда их отправляют на помощь могущественным смертным, занятым добрыми делами, но особенно планетары любят миссии, в которых можно сразиться с исчадьями. `,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_CELESTIAL,
    ],
    aligmentId: ALIGMENT_LG,
    armor: {
      ac: 19,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 16,
      cubeType: 10,
      cubeBonus: 112,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 120,
    },
    params: {
      [PARAM_STR]: 24,
      [PARAM_DEX]: 20,
      [PARAM_CON]: 24,
      [PARAM_INT]: 19,
      [PARAM_WIT]: 22,
      [PARAM_CHA]: 25,
    },
    saveThrowCollection: {
      [PARAM_CON]: 12,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 12,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 11,
    },
    resistanceList: [
      DAMAGE_RADIANT,
      DAMAGE_NONMAGIC_WEAPON,
    ],
    immunityConditionList: [
      CONDITION_CHARMED,
      CONDITION_EXHAUSTION,
      CONDITION_FRIGHTENED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 21,
      },
    ],
    languageList: [
      LANG_ALL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_16,
    source: 'MM:20',
    featureList: [
      {
        name: 'Оружие ангела',
        description: `Атаки оружием планетара являются магическими. Если планетар попадает любым оружием, оно причиняет дополнительный урон излучением 5к8 (уже включено в атаку).`,
      },
      {
        name: 'Божественная осведомлённость',
        description: `Планетар знает, когда слышит ложь.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Планетар совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 20,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            SPELL_DETECT_EVIL_AND_GOOD,
            SPELL_INVISIBILITY,
          ],
        },
        {
          limit: {
            count: 3,
            period: 'день',
          },
          list: [
            SPELL_BLADE_BARRIER,
            SPELL_DISPEL_EVIL_AND_GOOD,
            SPELL_FLAME_STRIKE,
            SPELL_RAISE_DEAD,
          ],
        },
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_COMMUNE,
            SPELL_CONTROL_WEATHER,
            SPELL_INSECT_PLAGUE,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Мультиатака',
        description: `Планетар совершает две рукопашные атаки.`,
      },
      {
        name: 'Двуручный меч',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 12,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_SLASHING,
              cubeCount: 4,
              cubeType: 6,
              cubeBonus: 7,
            },
            {
              type: DAMAGE_RADIANT,
              cubeCount: 5,
              cubeType: 8,
            },
          ],
        },
      },
      {
        name: 'Целебное касание',
        limit: {
          count: 4,
          period: 'день',
        },
        description: `Планетар прикасается к другому существу. Цель магическим образом восстанавливает 30 (6к8+3) хитов и избавляется от проклятий, болезней, отравлений, слепоты и глухоты.`,
      },
    ],
  },
  {
    name: 'Солар',
    nameEn: 'Solar',
    id: CREATURE_SOLAR,
    description: `Солар подобен богу по своей славе и силе. Меч солара самостоятельно летает по полю боя, а одна-единственная стрела из его лука может запросто убить цель. Настолько велика мощь солара, что даже демонические князья содрогаются от его звучных команд.\n
Говорят, что существует всего двадцать четыре солара. Известно, что несколько соларов являются верными помощниками некоторых богов. Остальные отдыхают в состоянии созерцания, ожидая, когда их услуги понадобятся для противостояния огромной угрозе силам добра.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_CELESTIAL,
    ],
    aligmentId: ALIGMENT_LG,
    armor: {
      ac: 21,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 18,
      cubeType: 10,
      cubeBonus: 144,
    },
    speed: {
      [SPEED_WALK]: 50,
      [SPEED_FLY]: 150,
    },
    params: {
      [PARAM_STR]: 26,
      [PARAM_DEX]: 22,
      [PARAM_CON]: 26,
      [PARAM_INT]: 25,
      [PARAM_WIT]: 25,
      [PARAM_CHA]: 30,
    },
    saveThrowCollection: {
      [PARAM_INT]: 14,
      [PARAM_WIT]: 14,
      [PARAM_CHA]: 17,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 14,
    },
    resistanceList: [
      DAMAGE_NONMAGIC_WEAPON,
      DAMAGE_RADIANT,
    ],
    immunityList: [
      DAMAGE_NECROTIC,
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_CHARMED,
      CONDITION_EXHAUSTION,
      CONDITION_FRIGHTENED,
      CONDITION_POISONED,
    ],
    senseList: [
      {
        id: SENSE_TRUE_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 24,
      },
    ],
    languageList: [
      LANG_ALL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_21,
    source: 'MM:21',
    featureList: [
      {
        name: 'Оружие ангела',
        description: `Атаки оружием солара являются магическими. Если солар попадает любым оружием, оно причиняет дополнительный урон излучением 6к8 (уже включено в атаку).`,
      },
      {
        name: 'Божественная осведомлённость',
        description: `Солар знает, когда слышит ложь.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Солар совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 25,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            SPELL_DETECT_EVIL_AND_GOOD,
            {
              id: SPELL_INVISIBILITY,
              comment: 'только на себя',
            },
          ],
        },
        {
          limit: {
            count: 3,
            period: 'день',
          },
          list: [
            SPELL_BLADE_BARRIER,
            SPELL_DISPEL_EVIL_AND_GOOD,
            SPELL_RESSURECTION,
          ],
        },
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_COMMUNE,
            SPELL_CONTROL_WEATHER,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Мультиатака',
        description: `Солар совершает две атаки двуручным мечом.`,
      },
      {
        name: 'Двуручный меч',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 12,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_SLASHING,
              cubeCount: 4,
              cubeType: 6,
              cubeBonus: 7,
            },
            {
              type: DAMAGE_RADIANT,
              cubeCount: 5,
              cubeType: 8,
            },
          ],
        },
      },
      {
        name: 'Двуручный меч',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 12,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_SLASHING,
              cubeCount: 4,
              cubeType: 6,
              cubeBonus: 7,
            },
            {
              type: DAMAGE_RADIANT,
              cubeCount: 5,
              cubeType: 8,
            },
          ],
        },
      },
      {
        name: 'Убийственный лук',
        attack: {
          type: ACTION_RANGE_WEAPON_ATTACK,
          bonus: 13,
          range: {
            normal: 150,
            max: 600,
          },
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 2,
              cubeType: 8,
              cubeBonus: 6,
            },
            {
              type: DAMAGE_RADIANT,
              cubeCount: 6,
              cubeType: 8,
            },
          ],
        },
        description: `Если цель — существо с количеством хитов 100 или меньше, она должна преуспеть в спасброске Телосложения со Сл 15, иначе умрёт.`,
      },
      {
        name: 'Летающий меч',
        description: `Солар отпускает свой двуручный меч в магическое парение в свободном пространстве в пределах 5 футов от себя. Если солар видит меч, он может мысленно бонусным действием отдать ему команду пролететь до 50 футов и либо совершить одну атаку по цели, либо вернуться в руки солара. Если парящий меч становится целью любого эффекта, считается, что солар его держит. Парящий меч падает, если солар умирает.`,
      },
      {
        name: 'Целебное касание',
        limit: {
          count: 4,
          period: 'день',
        },
        description: `Солар прикасается к другому существу. Цель магическим образом восстанавливает 30 (6к8+3) хитов и избавляется от проклятий, болезней, отравлений, слепоты и глухоты.`,
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Телепортация',
        description: `Солар магическим образом телепортируется вместе со всем несомым и носимым снаряжением, на расстояние до 120 футов в свободное пространство, которое он видит.`,
      },
      {
        name: 'Опаляющая вспышка',
        cost: 2,
        description: `Солар излучает магическую, божественную энергию. Все выбранные им существа в пределах 10 футов должны совершить спасбросок Ловкости со Сл 23, получая при провале урон огнём 14 (4к6) плюс урон огнём 14 (4к6), или половину этого урона при успехе.`,
      },
      {
        name: 'Ослепляющий взор',
        cost: 3,
        description: `Солар нацеливается на одно существо, которое видит в пределах 30 футов отсебя. Если цель видит его, она должна преуспеть в спасброске Телосложения со Сл 15, иначе она станет ослеплённой, пока слепота не будет снята магией, такой как _Малое восстановление_ (lesser restoration).`,
      },
    ],
  },
  {
    name: 'Анхег',
    nameEn: 'Ankheg',
    id: CREATURE_ANKHEG,
    description: `Анхег похож на огромное насекомое с множеством лап. Его длинные усики подёргиваются, реагируя на любое движение вокруг. На концах его лап огромные крюки, пригодные как для рытья, так и для того, чтобы хватать добычу. Его мощные челюсти способны перекусить небольшое дерево пополам.\n
**Скрывающиеся в земле.** Своими мощными челюстями анхег роет извилистые туннели глубоко под землёй. Когда анхег охотится, он роет вверх, ожидая чуть ниже поверхности земли, пока его усики не уловят движение сверху. Затем он выпрыгивает из-под земли, хватая жертву челюстями. Он дробит и измельчает жертву, одновременно выделяет кислотные ферменты, которые помогают растворить жертву для облегчения переваривания. Также анхег может плеваться кислотой в своих врагов.\n
**Проклятье лесов и полей.** Несмотря на то, что анхеги получают часть питательных вещей из почвы, в которой они прячутся, они должны дополнять свой рацион свежим мясом. Пастбища, изобилующие пасущимся скотом, и леса, полные дичи, это основные охотничьи угодья анхегов. Поэтому анхеги это проклятье фермеров и охотников.\n
**Земляные туннели.** Когда анхег копает под землёй, он оставляет за собой узкий, частично обвалившийся туннель. В этих туннелях можно обнаружить частички сброшенного хитина, остатки яиц анхегов или кошмарные останки жертв анхегов, в том числе монеты и другие сокровища, разбросанные во время нападения. `,
    aligmentId: ALIGMENT_NO,
    source: 'MM:22',
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_DIG]: 10,
    },
    hp: {
      cubeCount: 6,
      cubeType: 10,
      cubeBonus: 6,
    },
    armor: [
      {
        ac: 14,
        type: 'природный доспех',
      },
      {
        ac: 11,
        type: 'когда сбит с ног',
      },
    ],
    cr: CR_2,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    params: {
      [PARAM_STR]: 17,
      [PARAM_DEX]: 11,
      [PARAM_CON]: 13,
      [PARAM_INT]: 1,
      [PARAM_WIT]: 13,
      [PARAM_CHA]: 6,
    },
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 11,
      },
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_VIBRATION_SENSE,
        value: 60,
      },
    ],
    actionList: [
      {
        name: 'Укус',
        description: 'Если цель — существо с размером не больше Большого, она становится схваченной (Сл высвобождения 13). Пока цель схвачена, анхег может кусать только её, но зато атаки совершает с преимуществом.',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_SLASHING,
              cubeCount: 2,
              cubeType: 6,
              cubeBonus: 3,
            },
            {
              type: DAMAGE_ACID,
              cubeCount: 1,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Кислотная струя',
        description: 'Анхег плюёт кислотой линией длиной 30 футов и шириной 5 футов, при условии, что он не держит в захвате существа. Все существа в этой линии должны совершить спасбросок Ловкости со Сл 13, получая урон кислотой 10 (3к6) при провале, или половину этого урона при успехе.',
        restore: {
          from: 6,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Баньши',
    nameEn: 'Banshee',
    id: CREATURE_BANSHEE,
    description: `Когда опускается ночь, незадачливый путник может услышать отдалённые крики одинокого мертвеца. Это баньши, горестный дух, злобное создание, появившееся из духа эльфийки.\n
Баньши выглядит как светящаяся, тонкая форма, очертаниями смутно похожая на своё смертное тело. Лицо окутано всклокоченными волосами, а тело одето в просвечивающие лохмотья, которые колышутся вокруг баньши.\n
**Гнев богов. Баньши это нежить, воскресшая из останков эльфиек. Тех эльфиек, которые были благословлены великой красотой, но не смогли использовать этот дар, чтобы привнести в мир радость. Они использовали свою красоту для совращения и контролирования других. Эльфийки, страдающие от проклятья баньши, не испытывают радости, и в присутствии живых испытывают только страдание. Когда проклятье овладевает ими полностью, их разум и тело начинают распадаться, пока не завершится окончательная трансформация в нежить.\n
**Границы скорби.** Баньши навсегда привязаны к месту своей гибели, не в силах удалиться от него более чем на пять миль. Баньши вынуждены снова и снова переживать каждое мгновение своей жизни в идеальных воспоминаниях, но всегда отказываясь принимать ответственность за свою судьбу.\n
**Собиратели прекрасного.** Тщеславие, являющееся основополагающей силой проклятья баньши, не пропадает после смерти. Эти существа жаждут красивых предметов: ювелирные украшения, картины, статуи и другие предметы искусства. В то же время баньши не переносят каких-либо зеркальных поверхностей, потому что не могут вынести ужаса своего внешнего вида. Одного беглого взгляда бывает достаточно, чтобы баньши впала в ярость.\n
**Природа нежити.** Баньши не нуждается в воздухе, еде, питье и сне. `,
    aligmentId: ALIGMENT_CE,
    source: 'MM:23',
    speed: {
      [SPEED_WALK]: 0,
      [SPEED_FLY]: {
        value: 40,
        comment: 'парит',
      },
    },
    hp: {
      cubeCount: 6,
      cubeType: 10,
      cubeBonus: 6,
    },
    armor: 12,
    cr: CR_4,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_UNDEAD,
    ],
    params: {
      [PARAM_STR]: 1,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 10,
      [PARAM_INT]: 12,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 17,
    },
    saveThrowCollection: {
      [PARAM_WIT]: 2,
      [PARAM_CHA]: 5,
    },
    resistanceList: [
      DAMAGE_ACID,
      DAMAGE_FIRE,
      DAMAGE_ELECTRICITY,
      DAMAGE_THUNDER,
      DAMAGE_NONMAGIC_WEAPON,
    ],
    immunityList: [
      DAMAGE_COLD,
      DAMAGE_NECROTIC,
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_CHARMED,
      CONDITION_EXHAUSTION,
      CONDITION_FRIGHTENED,
      CONDITION_GRAPPLED,
      CONDITION_PARALYZED,
      CONDITION_PETRIFIED,
      CONDITION_POISONED,
      CONDITION_PRONE,
      CONDITION_RESTRAINED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    languageList: [
      LANG_COMMON,
      LANG_ELVEN,
    ],
    featureList: [
      {
        name: 'Обнаружение жизни',
        description: `Баньши магически чувствует присутствие существ на расстоянии 5 миль, не являющихся ни нежитью, ни конструктами. Она знает общее направление, но не точное местоположение.`,
      },
      {
        name: 'Бестелесное перемещение',
        description: `Баньши может перемещаться сквозь других существ и предметы, как если бы они были труднопроходимой местностью. Она получает урон силовым полем 5 (1к10), если оканчивает ход внутри предмета.`,
      },
    ],
    actionList: [
      {
        name: 'Разлагающее касание',
        attack: {
          type: ACTION_MELEE_SPELL_ATTACK,
          bonus: 4,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_NECROTIC,
            cubeCount: 3,
            cubeType: 6,
            cubeBonus: 2,
          },
        },
      },
      {
        name: 'Ужасный облик',
        description: `Все существа, находящиеся в пределах 60 футов от баньши, не являющиеся нежитью и видящие её, должны преуспеть в спасброске Мудрости со Сл 13, иначе они становятся испуганными на 1 минуту. Испуганная цель может повторять этот спасбросок в конце каждого своего хода, с помехой, если баньши находится в пределах её линии обзора, оканчивая эффект на себе при успехе. Если цель успешно совершила спасбросок или действие эффекта закончилось, она получает иммунитет к Ужасному облику этой баньши на следующие 24 часа.`,
      },
      {
        name: 'Вопль',
        description: `Если баньши не находится на солнечном свете, она может издать скорбный вопль. Этот вопль не оказывает эффект на конструктов и нежить. Все другие существа в пределах 30 футов от неё, услышавшие вопль, должны совершить спасбросок Телосложения со Сл 13. При провале хиты существа снижаются до 0. При успехе существо получает урон психической энергией 10 (3к6).`,
        limit: {
          count: 1,
          period: 'день',
        },
      },
    ],
    isFemale: true,
  },
  {
    name: 'Бехир',
    nameEn: 'Behir',
    id: CREATURE_BEHIR,
    description: `Змееподобный бехир ползает по полу и лазает по стенам, чтобы схватить свою добычу. Его электрическое дыхание может сжечь большинство существ, а более сильных противников он сжимает, обернувшись вокруг них кольцами, и съедает заживо. Внешне бехир похож на смесь чудовищной многоножки и крокодила. Его чешуйчатая шкура переливается от ультрамарина до тёмно-синего цвета, а на брюхе она голубая.\n
Внешне бехир похож на смесь чудовищной многоножки и крокодила. Его чешуйчатая шкура переливается от ультрамарина до тёмно-синего цвета, а на брюхе она голубая.\n
**Пещерный хищник.** Логова бехиров располагаются в недоступных другим существам местах, достичь которых можно только преодолев тяжёлый подъем. Глубокие норы, пещеры в отвесных стенах скал и каверны, попасть в которые можно только по узким извилистым туннелям — всё это идеальные места для засад бехиров. Дюжина ног бехира позволяет ему с лёгкостью добираться до своего логова. Когда он не лазает, он двигается ещё быстрее, сложив ноги вдоль туловища, и скользя как змея.\n
Проглотив свою жертву целиком, бехир впадает в дрёму, пока полностью не переварит свою жертву. В это время он выбирает тихое место, где вторгшиеся в его владения враги не найдут его.\n
**Враги драконов.** Давным-давно великаны и драконы сошлись в, казалось бы, бесконечной войне. Штормовые великаны создали первых бехиров как оружие против драконов, поэтому ненависть к драконам у бехиров в крови.\n
Бехир никогда не устроит логово там, где обитает дракон. Если дракон попытается устроить логово в нескольких дюжинах миль от логова бехира, тот постарается либо убить дракона, либо прогнать его подальше. Только если дракон окажется сильнее бехира, тот отступит, чтобы найти новое место для логова себе. `,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:24',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 16,
      cubeType: 12,
      cubeBonus: 64,
    },
    cr: CR_11,
    speed: {
      [SPEED_WALK]: 50,
      [SPEED_CLIMB]: 40,
    },
    params: {
      [PARAM_STR]: 23,
      [PARAM_DEX]: 16,
      [PARAM_CON]: 18,
      [PARAM_INT]: 7,
      [PARAM_WIT]: 14,
      [PARAM_CHA]: 12,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 6,
      [SKILL_STEALTH]: 7,
    },
    immunityList: [
      DAMAGE_ELECTRICITY,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 90,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 16,
      },
    ],
    languageList: [
      LANG_DRACONIC,
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Бехир совершает две атаки: одну укусом, и одну сжиманием.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 3,
            cubeType: 10,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Сжимание',
        description: `Цель становится схваченной (Сл высвобождения 16), если бехир пока не сжимает никакое существо. Пока цель схвачена, она опутана.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 5,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
              size: {
                max: SIZE_LARGE,
              },
            },
          },
          hit: [
            {
              type: DAMAGE_BLUDGEONING,
              cubeCount: 2,
              cubeType: 10,
              cubeBonus: 6,
            },
            {
              type: DAMAGE_SLASHING,
              cubeCount: 2,
              cubeType: 10,
              cubeBonus: 6,
            },
          ],
        },
      },
      {
        name: 'Электрическое дыхание',
        description: `Бехир выдыхает молнию длиной 20 футов и шириной 5 футов. Все существа в этой линии должны совершить спасбросок Ловкости со Сл 16, получая урон электричеством 66 (12к10) при провале, или половину этого урона при успехе.`,
        retore: {
          min: 5,
          max: 6,
        },
      },
      {
        name: 'Проглатывание',
        description: `Бехир совершает одну атаку укусом по существу с размером не больше Среднего, схваченному им. Если эта атака попадает, существо становится проглоченным и перестаёт быть схваченным. Будучи проглоченным, существо ослеплено и опутано, и обладает полным укрытием от атак и прочих эффектов, исходящих снаружи бехира, и получает урон кислотой 21 (6к6) в начале каждого хода бехира. У бехира может быть проглочено только одно существо одновременно.\n
Если бехир получает за один ход 30 или больше урона от проглоченного существа, бехир должен в конце этого хода преуспеть в спасброске Телосложения со Сл 14, иначе отрыгнёт существо, которое падает ничком в пространстве в пределах 10 футов от бехира. Если бехир умирает, проглоченное существо перестаёт быть опутанным им, и может высвободиться из трупа, потратив 15 футов перемещения, падая при выходе ничком.`,
      },
    ],
  },
  {
    name: 'Блуждающий огонёк',
    nameEn: 'Will-o’-wisp',
    id: CREATURE_WILL_O_WISP,
    description: `Блуждающие огоньки являются злобными, похожими на дымку, шарами света, которые обитают в уединённых местах и на полях сражений, связанных с мрачной судьбой или тёмной магией, и питаются страхом и отчаянием.\n
**Надежда и обречение.** Издали блуждающие огоньки выглядят как свет раскачивающегося фонаря, хотя они могут менять свой цвет и уменьшать яркость до минимума. Активируя свой свет, блуждающие огоньки внушают надежду, намекая на безопасность существам, которые следуют за ними. Блуждающие огоньки заманивают опрометчивых созданий в ямы с зыбучим песком, убежища чудовищ и другие опасные места, чтобы кормиться страданиями своей жертвы и наслаждаться её предсмертными криками. Злое существо, которое стало жертвой блуждающего огонька, тоже может стать огоньком, и его несчастный дух материализуется над его бездыханным трупом подобно мерцающему пламени.\n
**Поглощённые отчаянием.** Блуждающие огоньки являются душами злых существ, которые погибли в мучениях или страданиях, поскольку они блуждали по покинутым местам, пропитанным могущественной магией. Они появляются в болотистых трясинах и полях сражений, усыпанных костями, где угнетающее настроение насыщеннее и тяжелее, чем густой туман и мгла. Заточенные в этих заброшенных местах потерянных надежд и воспоминаний, блуждающие огоньки приманивают других созданий, и питаются страданиями путников.\n
**На службе зла.** Блуждающие огоньки редко разговаривают, однако если говорят, то их голос звучит как далёкий шёпот. В скверных местах, в которых они обитают, блуждающие огоньки иногда образуют симбиотические отношения с опасными соседями. Карги, они, чёрные драконы и злобные культисты используют блуждающих огоньков для заманивания существ в засаду. И пока злобные союзники истребляют созданий, которых они окружили, огоньки, паря над ними, питаются агонией умирающих тел. Натура нежити. Блуждающему огоньку не нужен воздух, еда, питьё и сон. `,
    sizeType: SIZE_TINY,
    creatureTypeIdList: [
      CREATURE_TYPE_UNDEAD,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:25',
    armor: 19,
    hp: {
      cubeCount: 9,
      cubeType: 4,
    },
    cr: CR_2,
    speed: {
      [SPEED_WALK]: 0,
      [SPEED_FLY]: {
        value: 50,
        comment: 'парит',
      },
    },
    params: {
      [PARAM_STR]: 1,
      [PARAM_DEX]: 28,
      [PARAM_CON]: 10,
      [PARAM_INT]: 13,
      [PARAM_WIT]: 14,
      [PARAM_CHA]: 11,
    },
    immunityList: [
      DAMAGE_ELECTRICITY,
      DAMAGE_POISON,
    ],
    resistanceList: [
      DAMAGE_THUNDER,
      DAMAGE_ACID,
      DAMAGE_NECROTIC,
      DAMAGE_FIRE,
      DAMAGE_COLD,
      DAMAGE_NONMAGIC_WEAPON,
    ],
    immunityConditionList: [
      CONDITION_UNCONSCIOUS,
      CONDITION_GRAPPLED,
      CONDITION_EXHAUSTION,
      CONDITION_RESTRAINED,
      CONDITION_POISONED,
      CONDITION_PARALYZED,
      CONDITION_PRONE,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 12,
      },
    ],
    languageList: [
      LANG_ALL_KNOWN_AT_LIFE,
    ],
    featureList: [
      {
        name: 'Истребление жизни',
        description: `Блуждающий огонёк может бонусным действием нацелиться на одно существо, которое видит в пределах 5 футов, у которого при этом 0 хитов, и которое всё ещё живо. Цель должна преуспеть в спасброске Телосложения со Сл 10 от этой магии, иначе умрёт. Если цель умирает, блуждающий огонёк восстанавливает 10 (3к6) хитов.`,
      },
      {
        name: 'Эфемерность',
        description: `Блуждающий огонёк не может ничего носить и нести.`,
      },
      {
        name: 'Бестелесное перемещение',
        description: `Блуждающий огонёк может перемещаться сквозь других существ и предметы, как если бы они были труднопроходимой местностью. Он получает урон силовым полем 5 (1к10), если оканчивает ход внутри предмета.`,
      },
      {
        name: 'Переменное свечение',
        description: `Блуждающий огонёк испускает яркий свет в радиусе от 5 до 20 футов и тусклый свет в пределах ещё такого же количества футов. Блуждающий огонёк может изменять радиус бонусным действием.`,
      },
    ],
    actionList: [
      {
        name: 'Шок',
        attack: {
          type: ACTION_MELEE_SPELL_ATTACK,
          bonus: 4,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_ELECTRICITY,
            cubeCount: 2,
            cubeType: 8,
          },
        },
      },
      {
        name: 'Невидимость',
        description: `Блуждающий огонёк и его свет магическим образом становятся невидимыми, пока он не совершит атаку, не использует _Истребление жизни_, или пока не прервётся его концентрация (как при концентрации на заклинании).`,
      },
    ],
  },
  {
    name: 'Бормочущий ротовик',
    nameEn: 'Gibbering mouther',
    id: CREATURE_GIBBERING_MOUTHER,
    description: `Из всех ужасов, созданных отвратительным колдовством, бормочущие ротовики — одни из самых ужасных и порочных порождений. Это существо состоит из глаз, ртов и сжиженных тел его прежних жертв. Впавшие в безумие из-за разрушения их тел и поглощения ротовиком, эти жертвы бессвязно бормочут, пожирая всё, до чего смогут добраться.\n
**Бесформенное тело.** Тело бормочущего ротовика представляет собой аморфную массу из ртов и глаз, передвигающуюся, цепляясь за поверхность несколькими ртами, и подтаскивая остальное тело. И хотя они медленно передвигаются, они легко могут плавать в воде, грязи и зыбучих песках.\n
**Безумное бормотание.** Когда бормочущий ротовик чует добычу, его рты начинают бормотать и шептать на разные голоса: басовитыми и высокими, плачущими и воющими, орущими в агонии и экстазе одновременно. Эта какофония голосов заполняет собой всё, что может услышать существо, и большинство бежит от неё в ужасе. Остальные же, подавленные страхом и безумием, стоят парализованными, глядя, как ужасающее существо подползает всё ближе, чтобы поглотить их.\n
**Всепоглощающие.** Ведомый жаждой поглощать всех, до кого он доберётся, бормочущий ротовик подползает к парализованным его безумными голосами жертвам и хор на время замолкает, пока пасти обгладывают и поглощают плоть. Это чудовище разжижает камень, к которому прикасается, затрудняя бегство существ, которым удалось справиться с воздействием его бормотания.\n
Бормочущий ротовик не оставляет от своих жертв даже следа. Однако когда останки тела жертвы будут поглощены, её глаза и рот всплывают на поверхность чудовища, готовые присоединиться к хору мучительного бормотания, который услышит следующая жертва твари.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_ABERRATION,
    ],
    aligmentId: ALIGMENT_N,
    source: 'MM:26',
    armor: 9,
    hp: {
      cubeCount: 9,
      cubeType: 8,
      cubeBonus: 27,
    },
    cr: CR_2,
    speed: {
      [SPEED_WALK]: 10,
      [SPEED_SWIM]: 10,
    },
    params: {
      [PARAM_STR]: 10,
      [PARAM_DEX]: 8,
      [PARAM_CON]: 16,
      [PARAM_INT]: 3,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 6,
    },
    immunityConditionList: [
      CONDITION_PRONE,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    featureList: [
      {
        name: 'Искажённая земля',
        description: `Пол в радиусе 10 футов вокруг ротовика является воскообразной труднопроходимой местностью. Все существа, начинающие ход в этой области, должны преуспеть в спасброске Силы со Сл 10, иначе их скорость уменьшается до 0 до начала их следующего хода.`,
      },
      {
        name: 'Бормотание',
        description: `Ротовик постоянно неразборчиво бормочет, пока видит другое существо, и сам дееспособен. Все существа, начинающие ход в пределах 20 футов от ротовика, и слышащие бормотание, должны преуспеть в спасброске Мудрости со Сл 10. При провале существо не может совершать реакции до начала своего следующего хода и бросает к8, чтобы определить, что оно будет делать в текущем ходу.\n
* При результате от «1» до «4» существо ничего не делает.\n
* При результате «5» или «6» существо не совершает ни действий, ни бонусных действий, и всё своё перемещение тратит на то, чтобы перемещаться в случайным образом выбранном направлении.\n
* При результате «7» или «8» существо совершает рукопашную атаку по случайным образом выбранному существу в пределах досягаемости, или не делает ничего, если не может совершить такой атаки.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Бормочущий ротовик совершает одну атаку укусом и, если может, использует Ослепляющий плевок.`,
      },
      {
        name: 'Укусы',
        description: `Если размер цели не больше Среднего, она должна преуспеть в спасброске Силы со Сл 10, иначе будет сбита с ног. Если цель убита этим уроном, ротовик поглощает её.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 2,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 5,
            cubeType: 6,
          },
        },
      },
      {
        name: 'Ослепляющий плевок',
        description: `Ротовик выплёвывает шар слизи в точку, которую он видит в пределах 15 футов от себя. Шар при столкновении взрывается ослепительной вспышкой. Все существа в пределах 5 футов от вспышки должны преуспеть в спасброске Ловкости со Сл 13, иначе станут ослеплёнными до конца следующего хода ротовика.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Бурый увалень',
    nameEn: 'Umber hulk',
    id: CREATURE_UMBER_HULK,
    description: `Отвратительные и ужасные бурые увальни из глубин земли роются в пещерных комплексах, подземельях или поселениях Подземья в поисках еды. Счастливчики, пережившие нападение бурого увальня, часто помнят слишком мало о произошедшем из-за заглушающего разум взгляда бурого увальня.\n
**Обитатели окраин.** Бурые увальни могут прорываться через твёрдый камень, образовывая целые туннели на своём пути. Крепкий как сталь хитин их тел может выдержать даже обвалы, обрушения туннелей и камнепады, обычно следующие за ними.\n
Закопавшись в стену пещеры или прохода, бурый увалень лежит и ждёт существ, которые будут проходить мимо. Его усы-щупальца ощущают любое движение рядом. Когда он вырывается из своей засады в облаке земли и камня, его ничего не подозревающая добыча оборачивается к нему лицом, немедленно впадая в транс от его сбивающего с толку взгляда, вынужденная беспомощно стоять, пока его жвала защёлкиваются на её глотке.\n
**Заглушающий разум.** Многие пережившие столкновение с бурым увальнем могут вспомнить лишь пару деталей нападения, потому что в момент нападения взгляд бурого увальня заглушает их разум. Те, кто бился и убивал бурых увальней, могут распознать некоторые признаки. Для обитателей Подземья о неведомом враге рассказывают пугающие сказки об исчезнувших исследователях и неожиданных обвалах. Бурые увальни обладают сверхъестественными способностями в этих историях. Мораль многих из них заключается в предупреждении: если вы заметили бурого увальня, бежать от него уже поздно.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:27',
    armor: {
      ac: 18,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 11,
      cubeType: 10,
      cubeBonus: 33,
    },
    cr: CR_5,
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_DIG]: 20,
    },
    params: {
      [PARAM_STR]: 20,
      [PARAM_DEX]: 13,
      [PARAM_CON]: 16,
      [PARAM_INT]: 9,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 10,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_VIBRATION_SENSE,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    languageList: [
      LANG_UMBER_HULK,
    ],
    featureList: [
      {
        name: 'Сбивающий с толку взгляд',
        description: `Если существо начинает ход в пределах 30 футов от бурого увальня и при этом может видеть глаза увальня, бурый увалень может магическим образом заставить его совершить спасбросок Харизмы со Сл 15, если
он при этом дееспособен.\n
При провале спасброска существо не может совершать реакции до начала своего следующего хода, и бросает к8, чтобы определить, что оно будет делать в текущем ходу.\n
* При результате «1–4» существо ничего не делает.\n
* При результате «5–6» существо не совершает действий, а всё перемещение тратит на то, что перемещается в случайном направлении.\n
* При результате «7–8» существо совершает одну рукопашную атаку по случайным образом выбранному существу, или не делает ничего, если в пределах досягаемости существ нет.\n
Если существо не захвачено врасплох, оно может отводить взгляд, чтобы не совершать спасбросок в начале своего хода. Если существо делает это, оно не видит бурого увальня до начала своего следующего хода, после чего может снова отводить взгляд. Если существо в этот период посмотрит на бурого увальня, оно тут же совершает спасбросок.`,
      },
      {
        name: 'Прокладывание туннеля',
        description: `Бурый увалень может копать сквозь сплошной камень со скоростью копания, уменьшенной вдвое, оставляя за собой туннель шириной 5 футов и высотой 8 футов.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Бурый увалень совершает три атаки: две когтями, и одну жвалами.`,
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 8,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 1,
            cubeType: 8,
            cubeBonus: 5,
          },
        },
      },
      {
        name: 'Жвалы',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 8,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 5,
          },
        },
      },
    ],
  },
  {
    name: 'Вампир',
    nameEn: 'Vampire',
    id: CREATURE_VAMPIRE,
    description: `Пробуждённые в бесконечной ночи вампиры жаждут жизни, которую они потеряли, и утоляют эту жажду, выпивая кровь живых. Вампиры ненавидят солнечный свет, поскольку его прикосновение жжёт их. Они не отбрасывают ни теней, ни отражений, и всякий вампир, желающий ходить незамеченным среди живых, вынужден держаться в темноте и подальше от отражающих поверхностей.\n
**Тёмные желания.** Даже если вампир сохраняет какие-либо воспоминания о прежней жизни, его эмоциональные привязанности увядают, так как его прежние чистые чувства искажаются. Любовь превращается в голодную одержимость, а дружба становится лишь горькой ревностью. Вместо проявлений эмоций вампиры желают физического проявления своей страсти, поэтому вампир, который ищет любовь, может зациклиться на юной красавице. Ребёнок может стать объектом страсти вампира, одержимого молодостью и возможностями. Другие окружают себя искусством, книгами или зловещими предметами, такими как устройства пыток или трофеи существ, ими убитых.\n
**Рождённые смертью.** Большинство жертв вампира становятся порождениями вампира — хищными созданиями с вампирским голодом к крови, но находящимися под контролем вампира, который их создал. Если истинный вампир позволит порождению выпить кровь из своего тела, порождение превратится в истинного вампира, не подконтрольного своему хозяину. Немногие вампиры готовы отказаться от этого влияния. Порождение вампира обретает собственную волю, когда его создатель погибает.\n
**Прикованные к могиле.** Каждый вампир связан со своим гробом, склепом, или местом захоронения, в котором он должен покоиться днём. Если вампир не был официально похоронен, он должен находиться в земле на глубине в 1 фут, в месте его превращения в нежить. Вампир может перемещать своё место захоронения, транспортируя гроб, или достаточное количество могильной земли. Некоторые вампиры оборудуют несколько мест для своего отдыха.\n
**Натура нежити.** Ни вампир, ни порождение вампира не нуждаются в воздухе. `,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_UNDEAD,
      CREATURE_TYPE_SHAPESHIFTER,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:30',
    armor: {
      ac: 16,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 17,
      cubeType: 8,
      cubeBonus: 68,
    },
    cr: CR_13,
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 18,
      [PARAM_DEX]: 18,
      [PARAM_CON]: 18,
      [PARAM_INT]: 17,
      [PARAM_WIT]: 15,
      [PARAM_CHA]: 18,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 9,
      [PARAM_WIT]: 7,
      [PARAM_CHA]: 9,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 7,
      [SKILL_STEALTH]: 9,
    },
    resistanceList: [
      DAMAGE_NECROTIC,
      DAMAGE_NONMAGIC_WEAPON,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 17,
      },
    ],
    languageList: [
      LANG_ALL_KNOWN_AT_LIFE,
    ],
    featureList: [
      {
        name: 'Перевёртыш',
        description: `Если вампир не находится под солнечным светом и не стоит в текущей воде, он может действием превратиться в Крошечную летучую мышь или Среднее облако тумана, или же принять свой истинный облик.\n
Находясь в облике летучей мыши, вампир не может говорить, его скорость ходьбы равна 5 футам, и у него скорость полёта 30 футов. Вся его статистика за исключением размера и скорости остаётся той же самой. Всё, что он носит, превращается вместе с ним, а то, что он несёт — нет. Он принимает свой истинный облик, если умирает.\n
Находясь в облике тумана, вампир не может совершать действий, говорить и манипулировать предметами. Он ничего не весит, обладает скоростью полёта 20 футов, может парить и может входить в пространство враждебных существ и останавливаться там. Кроме того, если через некое пространство может проходить воздух, то это же может сделать и туман, без протискивания, хотя и не может проходить сквозь воду. Он совершает с преимуществом спасброски Силы, Ловкости и Телосложения, и обладает иммунитетом к немагическому
урону, за исключением урона, который он получает, находясь под солнечными лучами.`,
      },
      {
        name: 'Легендарное сопротивление',
        description: `Если вампир проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
      {
        name: 'Туманный побег',
        description: `Если хиты вампира опускаются до 0 за пределами места отдыха, он вместо того, чтобы потерять сознание, превращается в туманное облако (как сказано в описании особенности _Перевёртыш_), при условии, что он не находится под солнечными лучами или в текущей воде. Если он не может превратиться, он уничтожается.\n
Пока у вампира в туманном облике 0 хитов, он не может возвращаться в облик вампира, и обязан вернуться в место отдыха в течение 2 часов, иначе будет уничтожен. Достигнув места отдыха, он принимает облик вампира. После этого он становится парализованным, пока не восстановит хотя бы 1 хит. Проведя 1 час в месте отдыха с 0 хитов, он восстанавливает 1 хит.`,
      },
      {
        name: 'Регенерация',
        description: `Вампир восстанавливает 20 хитов в начале своего хода, если у него есть хотя бы 1 хит, и он не находится ни под солнечными лучами ни в текущей воде. Если вампир получает урон излучением или урон от святой воды, эта особенность не действует в начале следующего хода вампира.`,
      },
      {
        name: 'Паучье лазание',
        description: `Вампир может лазать по сложным поверхностям, включая потолки, без совершения проверок характеристик.`,
      },
      {
        name: 'Слабости вампира',
        description: `Вампир обладает следующими слабостями:
* _Запрет_. Вампир не может войти в жилище без приглашения одного из обитателей.
* _Урон от текущей воды_. Вампир получает урон кислотой 20, если оканчивает ход в текущей воде.
* _Кол в сердце_. Если колющее оружие, изготовленное из дерева, вонзить в сердце вампира, пока он недееспособен в своём месте отдыха, вампир станет парализованным, пока кол не вынут.
* _Гиперчувствительность к солнечному свету_. Вампир получает урон излучением 20, если начинает ход под солнечным светом. Находясь на солнечном свету, он совершает с помехой броски атаки и проверки характеристик.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака (только в облике вампира)',
        description: `Вампир совершает две атаки, только одна из которых может быть _укусом_.`,
      },
      {
        name: 'Безоружный удар (только в облике вампира)',
        description: 'Вместо причинения урона вампир может схватить цель (Сл высвобождения 18).',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 9,
          range: 5,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
            },
          },
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 1,
            cubeType: 8,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Укус (только в облике вампира или летучей мыши)',
        description: 'Максимум хитов цели уменьшается на количество, равное полученному урону некротической энергией, а вампир восстанавливает такое же количество хитов. Уменьшение хитов длится до тех пор, пока цель не окончит продолжительный отдых. Цель умирает, если этот эффект уменьшает максимум её хитов до 0. Гуманоид, убитый этим способом, а после закопанный в землю, восстаёт следующей ночью в качестве порождения вампира, находящегося под контролем вампира. ',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 9,
          range: 5,
          target: 'одно согласное существо или существо, схваченное вампиром, недееспособное или опутанное',
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 1,
              cubeType: 6,
              cubeBonus: 4,
            },
            {
              type: DAMAGE_NECROTIC,
              cubeCount: 3,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Очарование',
        description: `Вампир нацеливается на одного гуманоида, которого видит в пределах 30 футов. Если цель видит вампира, она должна преуспеть в спасброске Мудрости со Сл 17 от этой магии, иначе станет очарованной вампиром. Очарованная цель считает вампира верным другом, о котором нужно заботиться, и которого нужно защищать. Несмотря на то, что цель не находится под контролем вампира, она выполняет его просьбы и искренне прилагает все нужные усилия, и будет согласной целью для укуса вампира.\n
Каждый раз, когда вампир или спутники вампира делают цели что-нибудь плохое, цель может повторить спасбросок, оканчивая эффект на себе при успехе. В противном случае эффект длится 24 часа, пока вампир не будет уничтожен, пока вампир с целью не окажутся на разных планах существования, или пока вампир не окончит эффект бонусным действием.`,
      },
      {
        name: 'Дети ночи',
        description: `Вампир магическим образом призывает 2к4 роя крыс или летучих мышей, при условии, что на небе нет солнца. Находясь на открытом воздухе, вампир может вместо этого призвать 3к6 волков. Вызванные существа приходят через 1к4 раунда, действуют как союзники вампира и подчиняются его устным командам. Звери остаются на 1 час, пока вампир не умрёт, или пока вампир не отпустит их бонусным действием.`,
        limit: {
          count: 1,
          period: 'день',
        },
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Перемещение',
        description: 'Вампир перемещается на расстояние, не превышающее его скорость, не провоцируя атаки..',
      },
      {
        name: 'Безоружный удар',
        description: 'Вампир совершает один безоружный удар.',
      },
      {
        name: 'Укус',
        cost: 2,
        description: `Вампир совершает одну атаку укусом.`,
      },
    ],
  },
  {
    name: 'Вампир воитель',
    nameEn: 'Vampire Warrior',
    id: CREATURE_VAMPIRE_WARRIOR,
    parentId: CREATURE_VAMPIRE,
    source: 'MM:31',
    armor: {
      ac: 18,
      type: 'латы',
    },
    cr: CR_15,
    actionList: [
      {
        name: 'Мультиатака (только в облике вампира)',
        description: `Вампир совершает две атаки двуручным мечом.`,
      },
      {
        name: 'Двуручный меч (только в облике вампира)',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 9,
          range: 5,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
            },
          },
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 4,
          },
        },
      },
    ],
  },
  {
    name: 'Вампир заклинатель',
    nameEn: 'Vampire Spellcaster',
    id: CREATURE_VAMPIRE_SPELLCASTER,
    parentId: CREATURE_VAMPIRE,
    source: 'MM:31',
    cr: CR_15,
    spellCast: {
      spellCasterLevel: 9,
      spellCasterClass: PC_CLASS_WIZARD,
      baseStat: PARAM_INT,
      spellAttackBonus: 8,
      saveThrowDc: 16,
      spellIdList: [
        SPELL_MAGE_HAND,
        SPELL_RAY_OF_FROST,
        SPELL_PRESTIDIGITATION,
        SPELL_COMPREHEND_LANGUAGES,
        SPELL_FOG_CLOUD,
        SPELL_SLEEP,
        SPELL_DETECT_THOUGHTS,
        SPELL_MIRROR_IMAGE,
        SPELL_GUST_OF_WIND,
        SPELL_ANIMATE_DEAD,
        SPELL_NONDETECTION,
        SPELL_BESTOW_CURSE,
        SPELL_GREATER_INVISIBILITY,
        SPELL_BLIGHT,
        SPELL_DOMINATE_PERSON,
      ],
      slotCountList: [
        Infinity,
        4,
        3,
        3,
        3,
        1,
      ],
    },
  },
  {
    name: 'Порождение вампира',
    nameEn: 'Vampire spawn',
    id: CREATURE_VAMPIRE_SPAWN,
    description: `Большинство жертв вампира становятся порождениями вампира — хищными созданиями с вампирским голодом к крови, но находящимися под контролем вампира, который их создал. Если истинный вампир позволит порождению выпить кровь из своего тела, порождение превратится в истинного вампира, не подконтрольного своему хозяину. Немногие вампиры готовы отказаться от этого влияния. Порождение вампира обретает собственную волю, когда его создатель погибает.\n
**Натура нежити.** Ни вампир, ни порождение вампира не нуждаются в воздухе.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_UNDEAD,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:31',
    armor: {
      ac: 15,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 11,
      cubeType: 8,
      cubeBonus: 33,
    },
    cr: CR_5,
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 16,
      [PARAM_DEX]: 16,
      [PARAM_CON]: 16,
      [PARAM_INT]: 11,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 12,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 6,
      [PARAM_WIT]: 3,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 3,
      [SKILL_STEALTH]: 6,
    },
    resistanceList: [
      DAMAGE_NECROTIC,
      DAMAGE_NONMAGIC_WEAPON,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 13,
      },
    ],
    languageList: [
      LANG_ALL_KNOWN_AT_LIFE,
    ],
    featureList: [
      {
        name: 'Регенерация',
        description: `Вампир восстанавливает 10 хитов в начале своего хода, если у него есть хотя бы 1 хит, и он не находится ни под солнечными лучами ни в текущей воде. Если вампир получает урон излучением или урон от святой воды, эта особенность не действует в начале следующего хода вампира.`,
      },
      {
        name: 'Паучье лазание',
        description: `Вампир может лазать по сложным поверхностям, включая потолки, без совершения проверок характеристик.`,
      },
      {
        name: 'Слабости вампира',
        description: `Вампир обладает следующими слабостями:
* _Запрет_. Вампир не может войти в жилище без приглашения одного из обитателей.
* _Урон от текущей воды_. Вампир получает урон кислотой 20, если оканчивает ход в текущей воде.
* _Кол в сердце_. Если колющее оружие, изготовленное из дерева, вонзить в сердце вампира, пока он недееспособен в своём месте отдыха, вампир станет парализованным, пока кол не вынут.
* _Гиперчувствительность к солнечному свету_. Вампир получает урон излучением 20, если начинает ход под солнечным светом. Находясь на солнечном свету, он совершает с помехой броски атаки и проверки характеристик.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Вампир совершает две атаки, только одна из которых может быть _укусом_.`,
      },
      {
        name: 'Когти',
        description: 'Вместо причинения урона вампир может схватить цель (Сл высвобождения 13).',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
            },
          },
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 4,
            cubeBonus: 3,
          },
        },
      },
      {
        name: 'Укус',
        description: 'Максимум хитов цели уменьшается на количество, равное полученному урону некротической энергией, а вампир восстанавливает такое же количество хитов. Уменьшение хитов длится до тех пор, пока цель не окончит продолжительный отдых. Цель умирает, если этот эффект уменьшает максимум её хитов до 0.',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 'одно согласное существо или существо, схваченное вампиром, недееспособное или опутанное',
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 1,
              cubeType: 6,
              cubeBonus: 3,
            },
            {
              type: DAMAGE_NECROTIC,
              cubeCount: 2,
              cubeType: 6,
            },
          ],
        },
      },
    ],
  },
  {
    name: 'Василиск',
    nameEn: 'Basilisk',
    id: CREATURE_BASILISK,
    description: `Путешественники иногда натыкаются в диких местах на объекты, которые выглядят как куски удивительно реалистичной резьбы по камню. Недостающие куски кажутся откушенными. Бывалые путешественники считают такие реликвии предупреждением о том, что где-то рядом находится василиск.\n
**Адаптирующийся хищник.** Василискам комфортно в засушливом, умеренном или тропическом климате. Его логово располагается в пещере или другом защищённом месте. Однако чаще василисков встречают под землёй.\n
Василиски, родившиеся и выращенные в неволе, могут быть одомашнены и обучены. Обученный василиск знает, как избегать взгляда с теми, кого хозяин хочет защитить, что делает его опасным охранником. Именно из-за этого яйца василиска высоко ценятся.\n
**Каменный взгляд.** Василиски слишком тяжеловесные для охоты, но им и не нужно преследовать добычу. Взгляда василиска может быть достаточно, чтобы быстро превратить жертву в пористый камень, а сильные челюсти василиска способны крошить камень. А уже в пищеводе камень снова принимает органическую форму.\n
Некоторые алхимики утверждают, что знают, как обработать пищевод василиска и жидкости, находящиеся в нем. Из обработанного должным образом пищевода можно выделить масло, которое будет обращать окаменение. К сожалению, если жертва потеряла какую-либо часть своего тела, пока находилась в каменном виде, при оживлении она не восстановится. Если в каменном виде существо потеряло жизненно важный орган, например, голову, вернуть существо в первоначальное состояние при помощи этого масла будет невозможно. `,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:32',
    armor: {
      ac: 15,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 8,
      cubeType: 8,
      cubeBonus: 16,
    },
    cr: CR_3,
    speed: {
      [SPEED_WALK]: 20,
    },
    params: {
      [PARAM_STR]: 16,
      [PARAM_DEX]: 8,
      [PARAM_CON]: 15,
      [PARAM_INT]: 2,
      [PARAM_WIT]: 8,
      [PARAM_CHA]: 7,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 9,
      },
    ],
    featureList: [
      {
        name: 'Окаменяющий взгляд',
        description: `Если существо начинает ход в пределах 30 футов от василиска, и они видят друг друга, василиск, если он дееспособен, может заставить существо совершить спасбросок Телосложения со Сл 12. При провале существо магическим образом начинает превращаться в камень и становится опутанным. Оно должно повторить этот спасбросок в конце своего следующего хода. При успехе эффект заканчивается. При провале существо становится окаменевшим. Окаменение длится до тех пор, пока не будет использовано заклинание _Высшее восстановление_ (greater restoration) или подобная магия.\n
Если существо не захвачено врасплох, оно может отвести взгляд, чтобы не совершать спасбросок в начале хода. В этом случае отводящее взгляд существо до начала своего следующего хода не видит василиска. Если существо в этот период посмотрит на василиска, оно тут же совершает спасбросок.\n
Если василиск видит своё отражение в полированной поверхности, находящейся в пределах 30 футов от него в ярко освещённом месте, василиск из-за проклятья подвергается действию своего собственного взгляда.`,
      },
    ],
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 2,
              cubeType: 6,
              cubeBonus: 3,
            },
            {
              type: DAMAGE_POISON,
              cubeCount: 2,
              cubeType: 6,
            },
          ],
        },
      },
    ],
  },
  {
    name: 'Каменный великан',
    nameEn: 'Stone Giant',
    id: CREATURE_STONE_GIANT,
    description: `Каменные великаны — затворники, тихие и мирные, пока их не беспокоят. Их гранитно-серая кожа, измождённые черты лица и чёрные, запавшие глаза придают каменным великанам суровое выражение. Они любят уединение, скрывая свои жизни и искусство от мира.\n
**Обитатели каменного мира.** Домом каменным великанам служат укромные пещеры. Пещерные сети – города, скальные туннели — дороги, а подземные по- токи — водные пути. Горные цепи это их материки, с огромными просторами земли между ними, будто океаны, которые каменные великаны редко пересекают.\n
В своих тёмных, тихих пещерах каменные великаны безмолвно трудятся над искусной резьбой, измеряя время эхом воды, капающей в подземные пруды. В глубочайших комнатах поселений каменных великанов, далеко от шума летучих мышей и союзных великанам пещерных медведей, находятся святые места, где тишина и тьма совершенны. Камень вбирает в себя самые святые качества в этих пещерных соборах, а их опоры и колонны покрыты такой красивой резьбой, что устыдят легендарных дварфских камнетёсов.\n
**Резчики и пророки.** Среди каменных великанов ремесло считается величайшим достоянием. Они создают замысловатые фрески на пещерных стенах, раскрашивают эти фрески и занимаются другими видами искусства. Резьбу по камню они почитают величайшим навыком.\n
Каменные великаны стремятся к выявлению форм из необработанного камня, которые, как они верят, раскрывают смысл, вдохновлённый их богом Скореусом Камнекостным. Великаны назначают лучших резчиков своими лидерами, шаманами и пророками. Святые руки такого великана во время работы становятся руками бога.\n
**Изящные атлеты.** Несмотря на большой размер и мускулатуру, каменные великаны гибки и изящны. Умелые метатели камней занимают высокое положение в уложении великанов, проверяя и показывая своё умение метать и ловить огромные валуны. Такие великаны занимают передовые ранги, когда племени надо защищать свой дом или атаковать врагов. Однако, даже в бою главное — мастерство. Метание булыжника каменным великаном — проявление не просто грубой силы, но ошеломляющего равновесия и атлетизма.\n
**Мечтатели под открытым небом.** Каменные великаны воспринимают мир за пределами своих подземных жилищ как царство снов, где ничто по-настоящему не истинно, и не реально. На поверхности они ведут себя так, как гуманоиды могут вести себя в своих снах, не отдавая особого отчёта в своих действиях и никогда не доверяя полностью тому, что видят или слышат. Обещание, данное над землёй, не обязательно надо сдерживать. Оскорбление можно нанести без извинений. Убийство добычи или разумного существа не вызывает вины в мире грёз под открытым небом.\n
Некоторые великаны, не обладающие грацией атлетов или художественным мастерством, живут на задворках общества, служа племени охранниками границ или скитающимися охотниками. Когда нарушители проникают слишком глубоко на горную территорию клана каменных великанов, эти охранники встречают их летящими булыжниками и ливнем расколотого камня. Выжившие после такого рассказывают истории о жестокости каменных великанов, так и не поняв, как мало эти громилы, проживающие в мире грёз, походят на свой тихий артистичный род.`,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_GIANT,
    ],
    aligmentId: ALIGMENT_N,
    source: 'MM:38',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 11,
      cubeType: 12,
      cubeBonus: 55,
    },
    speed: {
      [SPEED_WALK]: 40,
    },
    params: {
      [PARAM_STR]: 23,
      [PARAM_DEX]: 15,
      [PARAM_CON]: 20,
      [PARAM_INT]: 10,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 9,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 5,
      [PARAM_CON]: 8,
      [PARAM_WIT]: 4,
    },
    skillCollection: {
      [SKILL_ATHLETICS]: 12,
      [SKILL_PERCEPTION]: 4,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    languageList: [
      LANG_GIANT,
    ],
    cr: CR_7,
    featureList: [
      {
        name: 'Каменный камуфляж',
        description: `Великан совершает с преимуществом проверки Ловкости (Скрытность), когда пытается спрятаться на каменистой местности.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Великан совершает две атаки палицей.`,
      },
      {
        name: 'Палица',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 9,
          range: 15,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 3,
            cubeType: 8,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Камень',
        description: `Если цель — существо, она должны преуспеть в спасброске Телосложения со Сл 17, иначе будет сбита с ног.`,
        attack: {
          type: ACTION_RANGE_WEAPON_ATTACK,
          bonus: 9,
          range: {
            normal: 60,
            max: 240,
          },
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 4,
            cubeType: 10,
            cubeBonus: 6,
          },
        },
      },
    ],
    reactionList: [
      {
        name: 'Ловля камней',
        description: `Если в великана метнут камень или подобный предмет, великан может, если совершит успешный спасбросок Ловкости со Сл 10, поймать снаряд и не получить от него дробящий урон.`,
      },
    ],
  },
  {
    name: 'Ледяной великан',
    nameAlt: 'Морозный гигант',
    nameEn: 'Frost Giant',
    id: CREATURE_FROST_GIANT,
    description: `Ледяные великаны — громадные грабители с морозных земель, что лежат за гранью цивилизации — это жестокие, выносливые воины, живущие за счёт добычи с набегов и грабежей. Они уважают лишь грубую силу и боевые навыки, демонстрируя их шрамами и отвратительными трофеями, полученными от врагов.\n
**Ледяные сердца.** Ледяные великаны это существа льда и снега. Их волосы и бороды бледно-белые или светло-голубые, скованные морозом и гремящие сосульками. Их плоть синяя, словно ледник.\n
Ледяные великаны живут на высоких пиках и в ледяных ущельях, где золотая голова солнца скрыта зимой. Зерновые не прорастают в их морозных селениях, а скота, по сравнению с тем, что захватывают в налётах на цивилизованные земли, держат мало. Они охотятся за дичью в тундре и горах, но не готовят её, так как мясо только что убитой добычи слишком горячо на их вкус.\n
**Грабители во вьюге.** Боевые рога ледяных великанов ревут, когда они выдвигаются из своих ледяных крепостей и ледниковых разломов во время завывающей бури. Когда же буря утихает, деревни и фермы лежат в руинах, а вороны слетаются пировать на трупах тех, кто был достаточно глуп или не везуч, чтобы встать на пути великанов.\n
Постоялые дворы и таверны больше всего страдают от причинённого урона — их подвалы пусты, и бочек эля и мёда больше нет. Кузнецы тоже готовы закрыться — железо и сталь забрали. К удивлению, не потревоженными остаются дома ростовщиков и богатых горожан — для этих грабителей мало проку от монет и безделушек. Ледяные великаны ценят лишь драгоценности и украшения, достаточно большие, чтобы их можно было носить или чтобы их хотя бы было видно. Однако даже такие сокровища чаще всего сохраняют для торга с другими великанами, более искусными в создании металлического оружия и доспехов.\n
**Правящие силой.** Ледяные великаны уважают грубую силу больше чего-либо ещё, и место в иерархии ледяных великанов основывается на признаках физической мощи, таких как превосходная мускулатура, шрамы из знаменитых сражений или трофеи из тел поверженных врагов. Задания, вроде охоты, ухода за детьми и ремёсла, дают великанам сообразно их силе и выносливости.\n
Если встречаются ледяные великаны различных кланов, и статус их неясен, они борются за господство. Такие встречи похожи на фестивали, где великаны восхваляют своих героев, бесстыдно хвастаются и бросают друг другу вызовы. Бывает и так, что неофициальная церемония становится хаотичной схваткой, в которой оба клана дерутся, валя деревья, разбивая лёд на замёрзших озёрах и вызывая лавины на заснеженных горах.\n
**Воюй, не производи.** Хоть ледяные великаны и считают недостойным рабское ремесло, они высоко ценят навыки резьбы и обработки кожи. Они создают свою одежду из шкур и костей зверей, а из обычных или слоновьих костей вырезают драгоценности и рукояти для оружия и инструментов. Они используют одежду и броню своих врагов, связывая щиты в кольчугу и приматывая клинки мечей к деревянным рукояткам, создавая гигантские копья. С поверженных драконов можно добыть лучшие боевые трофеи, и величайшие ярлы ледяных великанов носят доспехи из драконьей чешуи или владеют кирками или булавами из драконьих зубов и когтей.`,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_GIANT,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:38',
    armor: {
      ac: 15,
      type: 'лоскутный доспех',
    },
    hp: {
      cubeCount: 12,
      cubeType: 12,
      cubeBonus: 60,
    },
    speed: {
      [SPEED_WALK]: 40,
    },
    params: {
      [PARAM_STR]: 23,
      [PARAM_DEX]: 9,
      [PARAM_CON]: 21,
      [PARAM_INT]: 9,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 12,
    },
    saveThrowCollection: {
      [PARAM_CON]: 8,
      [PARAM_WIT]: 3,
      [PARAM_CHA]: 4,
    },
    skillCollection: {
      [SKILL_ATHLETICS]: 9,
      [SKILL_PERCEPTION]: 3,
    },
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    languageList: [
      LANG_GIANT,
    ],
    cr: CR_8,
    actionList: [
      {
        name: 'Мультиатака',
        description: `Великан совершает две атаки секирой.`,
      },
      {
        name: 'Секира',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 9,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 3,
            cubeType: 12,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Камень',
        attack: {
          type: ACTION_RANGE_WEAPON_ATTACK,
          bonus: 9,
          range: {
            normal: 60,
            max: 240,
          },
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 4,
            cubeType: 10,
            cubeBonus: 6,
          },
        },
      },
    ],
  },
  {
    name: 'Облачный великан',
    nameEn: 'Cloud Giant',
    id: CREATURE_CLOUD_GIANT,
    description: `Облачные великаны живут расточительной жизнью высоко над землёй, нисколько не заботясь об участи других рас кроме как ради развлечения. Они мускулистые, кожа у них светлая, а волосы серебряного или голубого цвета.\n
**Великие и могучие.** Облачные великаны путешествуют вместе с ветрами, и могут оказаться в любом месте мира. В трудные времена разрозненные семейства облачных великанов объединяются в единый клан. Впрочем, у них не всегда получается сделать это быстро.\n
Будучи настроенными на магическую энергетику своих воздушных просторов, облачные великаны могут создавать завесы густых туманов и сами могут превращаться в туман. Они обитают в замках на пиках высоких гор или на прочных облаках, где находятся их владения. Время от времени эти магические облака все ещё проносятся по небесам, напоминая о потерянных империях великанов.\n
Облачные великаны — лучшие заклинатели среди всех великанов; они могут контролировать погоду, вызывать шторм и управлять ветром почти так же хорошо, как родственные им штормовые великаны.\n
**Влиятельные правители.** Несмотря на то, что облачные великаны ниже по рангу, чем штормовые, ведя уединённый образ жизни, штормовые великаны редко вступают в контакт с остальными представителями своего рода. Поэтому многие облачные великаны считают себя обладателями самого высокого статуса и могущества среди других представителей своего вида. Они приказывают стоящим ниже великанам искать для них богатства и предметы искусства, нанимают огненных великанов в качестве кузнецов и ремесленников, и используя ледяных великанов как разбойников, мародёров и грабителей. Глуповатые холмовые великаны служат им громилами и пушечным мясом — иногда они сражаются ради развлечения облачных великанов. Облачный великан может приказать холмовым или ледяным великанам присвоить земли гуманоидов, которые они считают справедливой платой за долгое милосердие.\n
На вершинах гор и массивных облаков облачные великаны разводят необыкновенные сады. Там растёт виноград величиной с яблоко, яблоки размером с тыкву, и тыквы размером с телегу. С этих рассеянных по миру семян и пошли сказания об овощах размером с дом и волшебных бобах.\n
Человеческая знать разводит охотничьих соколов, а облачные великаны для этих же целей содержат грифонов, перитонов и виверн. Подобные создания часто охраняют сады облачных великанов наравне с натренированными хищниками, такими как совомеды и львы.\n
**Дети Трикстера.** Покровительствующее божество и отец облачных великанов — Мемнор Трикстер, умнейший и коварнейший из всех божеств великанов. Облачные великаны ориентируются на деяния Мемнора и равняются на него. Злые великаны при этом подражают его двуличности и своенравности, а добрые любят его за интеллект и красноречие. Члены одной семьи, как правило, следуют одним курсом.\n
**Богатство и власть.** Облачные великаны заслуживают своё место в уложении собранными сокровищами, носимым богатством и подарками, даруемыми другим облачным великанам. Однако, стоимость — лишь одна сторона медали. Роскошь на самом великане и окружение его дома также должны быть дивными и прекрасными. Мешки золота или самоцветов ценятся облачными великанами меньше, чем украшения, сделанные из этих материалов. Создание сокровищ, приносящих уважение, является частью домашнего хозяйства великана.\n
Облачные великаны предпочитают не красть и не драться за сокровища друг с другом, а ставить их на кон в азартных играх, любя высокие риски и соответствующую награду. Они часто спорят насчёт событий, которые не зависят от них самих, например, о жизни малых существ. Положение в уложении и баснословные суммы можно выиграть или проиграть в споре о военных успехах гуманоидных наций. Вмешательство в конфликт влечёт за собой потерю ставки, но такой обман считается жульничеством только если будет обнаружен. В противном случае это ум, чествующий Мемнора.`,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_GIANT,
    ],
    aligmentId: [
      {
        id: ALIGMENT_NG,
        comment: '50%',
      },
      {
        id: ALIGMENT_NE,
        comment: '50%',
      },
    ],
    source: 'MM:39',
    armor: {
      ac: 14,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 16,
      cubeType: 12,
      cubeBonus: 96,
    },
    speed: {
      [SPEED_WALK]: 40,
    },
    params: {
      [PARAM_STR]: 27,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 22,
      [PARAM_INT]: 12,
      [PARAM_WIT]: 16,
      [PARAM_CHA]: 16,
    },
    saveThrowCollection: {
      [PARAM_CON]: 10,
      [PARAM_WIT]: 7,
      [PARAM_CHA]: 7,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 7,
      [SKILL_INSIGHT]: 7,
    },
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 17,
      },
    ],
    languageList: [
      LANG_GIANT,
      LANG_COMMON,
    ],
    cr: CR_9,
    featureList: [
      {
        name: 'Тонкий нюх',
        description: `Великан совершает с преимуществом проверки Мудрости (Внимательность), полагающиеся на обоняние.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_CHA,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            SPELL_DETECT_MAGIC,
            SPELL_LIGHT,
            SPELL_FOG_CLOUD,
          ],
        },
        {
          limit: {
            count: 3,
            period: 'день',
          },
          list: [
            SPELL_FEATHER_FALL,
            SPELL_FLY,
            SPELL_TELEKINESIS,
            SPELL_MISTY_STEP,
          ],
        },
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_CONTROL_WEATHER,
            SPELL_GASEOUS_FORM,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Мультиатака',
        description: `Великан совершает две атаки моргенштерном.`,
      },
      {
        name: 'Моргенштерн',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 12,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 3,
            cubeType: 8,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Камень',
        attack: {
          type: ACTION_RANGE_WEAPON_ATTACK,
          bonus: 12,
          range: {
            normal: 60,
            max: 240,
          },
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 4,
            cubeType: 10,
            cubeBonus: 8,
          },
        },
      },
    ],
  },
  {
    name: 'Огненный великан',
    nameEn: 'Fire Giant',
    id: CREATURE_FIRE_GIANT,
    description: `Умелые ремесленники и организованные бойцы, огненные великаны обитают среди вулканов, потоков лавы и скалистых гор. Это безжалостные милитаристские громилы, чьё мастерство в обработке металлов поистине легендарно.\n
**Огненные кузни.** Крепости огненных великанов находятся около и внутри вулканов или рядом с озёрами магмы. Жар, исходящий от тех мест, где они живут, раскаляет докрасна стены их железных крепостей. В землях, где нет источников высокой температуры, им приходится сжигать много угля. Обычно кузни занимают почётные места в их владениях, и каменные крепости великанов постоянно извергают столбы дыма и сажи. В более отдалённых заставах огненные великаны сжигают тонны дров, чтобы поддержать температуру в своих кузницах. Это приводит к тому, что на много километров в округе не остаётся ни одного дерева, а вся почва покрывается сажей.\n
Огненные великаны ненавидят холод так же, как их родственники, ледяные великаны, ненавидят жар. Они могут приспосабливаться к холоду, но только с усилиями, надевая тяжёлую шерстяную одежду и меха, и поддерживая тепло в очаге, чтобы оставаться в тепле.\n
**Боевые эксперты.** С самого рождения огненных великанов учат воевать. Ещё в колыбели родители поют им песни о сражениях. Детьми огненные великаны играют в войну, кидаясь друг в друга вулканическими породами на берегах магмовых рек. Позднее военное обучение становится неотъемлемой частью жизни великанов в крепостях и подземных царствах дыма и пепла. Огненные великаны поют оды о выигранных и проигранных сражениях, а их танцы представляют собой боевое топанье ногами, резонирующее, словно кузнечные молоты в их задымленных залах.\n
Огненные великаны передают секреты своего мастерства из поколения в поколение, и их боевая удаль происходит не из дикой ярости, а из дисциплины и бесконечных тренировок. Многие враги недооценивают огненных великанов из-за их грубого поведения, и слишком поздно узнают, что те живут сражениями и могут быть хитрыми тактиками.\n
**Феодальный строй.** Гуманоиды, побеждённые в войне, становятся вассалами огненных великанов. Вассалы должны отдавать своих подданных, чтобы те обрабатывали фермы и поля на окраине владений огненных великанов, выполняли роль прислуги в их замках, разводили скот и убирали поля. Также они вынуждены платить десятину огненным великанам.\n
Ремесленники огненных великанов чаще работают по опыту и вдохновению, чем по записям и вычислениям. Большинство огненных великанов не тратят время на подобную чепуху, для этого они держат рабов, которые разбираются в этом. Тех рабов, что не подходят для двора или полевых работ (особенно дварфов), огненные великаны отправляют в свои горные владения добывать руду и драгоценные камни из-под земли.\n
Огненные великаны низкого ранга управляют шахтами и рабами, трудящимися в них — немногие живут долго при такой опасной и трудной работе. Хоть огненные великаны и умеют прокладывать туннели и добывать руду, их не столько заботит безопасность рабов, сколько выплавка и обработка богатств, добываемых этими рабами.\n
**Умелые ремесленники.** Огненные великаны заработали грозную репутацию солдат и завоевателей своими поджогами, грабежом и разрушениями. Однако они воспитывают величайших мастеров и ремесленников среди всех великанов. Они превосходны как в выплавке и ковке, так и в больших постройках из металлов и камня, а качество их мастерства видно даже в разрушительных орудиях и оружии.\n
Огненные великаны стараются строить нерушимые крепости и сильнейшие осадные орудия. Они экспериментируют со сплавами, создавая крепчайшую броню, а затем куют мечи, способные её пронзить. Для такой работы в равной степени важны и мускулы и мозги, а огненные великаны, занимающие высокое положение, как правило, сильнейшие и умнейшие в своём роду.`,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_GIANT,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:39',
    armor: {
      ac: 18,
      type: 'латный доспех',
    },
    hp: {
      cubeCount: 13,
      cubeType: 12,
      cubeBonus: 78,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 25,
      [PARAM_DEX]: 9,
      [PARAM_CON]: 23,
      [PARAM_INT]: 10,
      [PARAM_WIT]: 14,
      [PARAM_CHA]: 13,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 3,
      [PARAM_CON]: 10,
      [PARAM_CHA]: 5,
    },
    skillCollection: {
      [SKILL_ATHLETICS]: 11,
      [SKILL_PERCEPTION]: 6,
    },
    immunityList: [
      DAMAGE_FIRE,
    ],
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 16,
      },
    ],
    languageList: [
      LANG_GIANT,
    ],
    cr: CR_9,
    actionList: [
      {
        name: 'Мультиатака',
        description: `Великан совершает две атаки двуручным мечом`,
      },
      {
        name: 'Двуручный меч',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 11,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 6,
            cubeType: 6,
            cubeBonus: 7,
          },
        },
      },
      {
        name: 'Камень',
        attack: {
          type: ACTION_RANGE_WEAPON_ATTACK,
          bonus: 11,
          range: {
            normal: 60,
            max: 240,
          },
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 4,
            cubeType: 10,
            cubeBonus: 7,
          },
        },
      },
    ],
  },
  {
    name: 'Холмовой великан',
    nameEn: 'Hill Giant',
    id: CREATURE_HILL_GIANT,
    description: `Холмовые великаны — эгоистичные и недалёкие громилы, охотящиеся ради пищи и совершающие набеги в постоянном поиске еды. Они бездумно бродят по холмам и лесам, поглощая всё, что могут, и заставляя меньших существ кормить их. Лень и тупость давно бы положила им конец, если бы не огромный размер и сила.\n
**Примитивные.** Холмовые великаны живут в холмах и горных долинах по всему миру, собираясь в мазанках или хижинах из грубых брёвен. Их кожа смугла из-за жизни, проведённой на склонах холмов и сна под солнцем. Оружием им служат вырванные с корнем деревья и камни, поднятые с земли. Их пот смешивается с запахом носимых необработанных шкур животных, плохо сшитых волосами и кожаны- ми ремнями.\n
**Больше — значит лучше.** В мире холмовых великанов гуманоиды и животные это лёгкая добыча, на которую можно безнаказанно охотиться. Такие существа как драконы и другие великаны это суровые противники. Холмовые великаны оценивают силу по размеру.\n
Холмовые великаны не осознают, что подчиняются уложению. Они знают только то, что другие великаны больше и сильнее, чем они, поэтому им надо подчиняться. Вождь племени холмовых великанов — обычно самый высокий и толстый, но который может при этом двигаться. Только в исключительных случаях холмовой великан, у которого мозгов больше, нежели мышц, с помощью хитрости получает расположение великанов более высокого статуса, умело подрывая общественный порядок.\n
**Ненасытные пожиратели.** Если холмовым великанам нечем заняться, они едят так часто, как только могут. Холмовой великан охотится и добывает еду один или вместе с лютым волком, так, чтобы не делиться с соплеменниками. Великан ест всё, кроме того, что на первый взгляд смертельно, как, например, известные ядовитые существа. Гнилое мясо — лёгкая добыча, впрочем, как и увядшие растения и даже грязь.\n
Фермеры боятся и ненавидят холмовых великанов. Какой-нибудь хищник, например, анхег, может вылезти на поле и съесть корову-другую, пока его не прогонят, а холмовой великан поглотит стадо крупнорогатого скота, потом перейдёт на овец, коз и куриц, а потом переключится на фрукты, овощи и зерно. Если же под рукой окажется и семья фермера, великан может перекусить и ей.\n
**Глупые и смертоносные.** Благодаря способности переваривать практически что угодно, холмовые великаны пережили эры, но так и остались дикарями, питающимися и размножающимися в холмах как животные. Им никогда не требовалось адаптироваться или меняться, так что их разум и эмоции остались простыми и неразвитыми.\n
Не имея собственной культуры, холмовые великаны копируют традиции существ, за которыми наблюдают, прежде чем съесть. При этом они не думают о своём размере и весе. Племена холмовых великанов, старающиеся имитировать эльфов, валили целые леса в попытках жить на деревьях. Другие хотели занять города и деревни гуманоидов, пока не столкнулись с дверьми и окнами зданий, после чего, от потуг войти, разрушались стены и крыши.\n
В общении холмовые великаны грубы, прямы и плохо разбираются в обмане. Холмового великана можно одурачить, и он будет убегать от другого великана, если несколько крестьян накроются одеялом и встанут друг другу на плечи, держа гигантскую раскрашенную тыквенную голову. Аргументы бессмысленны для холмового великана, однако умное существо иногда может подстрекнуть холмового великана на выгодные для себя действия.\n
**Яростные хулиганы.** Холмовой великан, чувствующий, будто его обманули, оскорбили или выставили дураком, вымещает свою ужасающую ярость на всём, что попадается под руку. Даже размазав обидчика в кашу, великан продолжает буйствовать, пока не успокоится, не заметит что-нибудь более интересное или не проголодается.\n
Если холмовой великан провозглашает себя королём территории, на которой проживают гуманоиды, она управляется террором и тиранией. Его решения меняются вместе с настроением, и если он забудет свой самопровозглашённый титул, то может запросто съесть подданных.`,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_GIANT,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:40',
    armor: {
      ac: 13,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 10,
      cubeType: 12,
      cubeBonus: 40,
    },
    speed: {
      [SPEED_WALK]: 40,
    },
    params: {
      [PARAM_STR]: 21,
      [PARAM_DEX]: 8,
      [PARAM_CON]: 19,
      [PARAM_INT]: 5,
      [PARAM_WIT]: 9,
      [PARAM_CHA]: 6,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 2,
    },
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 12,
      },
    ],
    languageList: [
      LANG_GIANT,
    ],
    cr: CR_5,
    actionList: [
      {
        name: 'Мультиатака',
        description: `Великан совершает две атаки палицей`,
      },
      {
        name: 'Палица',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 8,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 3,
            cubeType: 8,
            cubeBonus: 5,
          },
        },
      },
      {
        name: 'Камень',
        attack: {
          type: ACTION_RANGE_WEAPON_ATTACK,
          bonus: 8,
          range: {
            normal: 60,
            max: 240,
          },
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 3,
            cubeType: 10,
            cubeBonus: 5,
          },
        },
      },
    ],
  },
  {
    name: 'Штормовой великан',
    nameEn: 'Storm Giant',
    id: CREATURE_STORM_GIANT,
    description: `Штормовые великаны это задумчивые провидцы, живущие в местах, далёких от цивилизации смертных. У большинства бледный, серо-фиолетовый цвет кожи и волос, а также блестящие изумрудные глаза. Редко встречаются и штормовые великаны с фиолетовой кожей, тёмно-фиолетовыми или тёмно-синими волосами, а также серебристо-серыми или фиолетовыми глазами. Они доброжелательны и мудры, но если разозлить штормового великана, то судьбы тысяч окажутся во власти его ярости.\n
**Далёкие короли-пророки.** Штормовые великаны живут в отдалённых убежищах высоко над миром или так глубоко в океанах, что большинство существ не может их достичь. Некоторые селятся в облачных замках, откуда летящий дракон кажется лишь точкой. Другие живут на горных вершинах, пронизывающих облака. Есть и те, что занимают дворцы, покрытые водорослями и кораллами на дне океана, или мрачные крепости в подводных расщелинах.\n
**Отрешённые оракулы.** Штормовые великаны помнят славу древних империй великанов, созданных богом Аннамом. Они пытаются восстановить то, что было утрачено при падении этих империй. Они не конкурируют за статус в уложении, но свои века проживают в задумчивой изоляции, ища на звёздном небе и в океанских глубинах знаки, символы и предзнаменования благословения Аннама.\n
Штормовые великаны видят мировые события в широкой перспективе. Они могут предсказать подъём и падение королей и империй, увидеть начало и конец удачи и несчастья, и найти связь в, казалось бы, несвязанных событиях. Читая знаки и пророчествуя, штормовые великаны изучают множество секретов, до того неизвестных, и знания, что уже позабыты.\n
Короли взойдут и падут, войны выиграют и проиграют, а добро и зло сойдутся в схватках. За всем этим штормовые великаны будут наблюдать, словно смертные боги на протяжении многих жизней, и им известно, что вмешиваться бессмысленно. Однако штормовой великан может добровольно раскрыть секреты доброжелательным существам, прибывших в его далёкие владения с определённой целью. Такие существа должны говорить и действовать уважительно, ведь разозлённый штормовой великан — сила абсолютного разрушения.\n
**Уединённые жизни.** Штормовые великаны редко общаются с сородичами. Обычно они сравнивают символы и знамения или вступают в краткие браки. Родители штормовых великанов остаются вместе, пока растёт их ребёнок, а затем возвращаются к любимой ими изоляции.\n
Некоторые культуры гуманоидов поклоняются штормовым великанам как малым богам, создавая мифы и истории о подвигах великанов и их обширных знаниях. Штормовым великаном управляет совесть, а не законы или честь. Так что штормовой великан, чей разум одолела жадность или вкус власти, легко может стать страшной угрозой.`,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_GIANT,
    ],
    aligmentId: ALIGMENT_CG,
    source: 'MM:40',
    armor: {
      ac: 16,
      type: 'чешуйчатый доспех',
    },
    hp: {
      cubeCount: 20,
      cubeType: 12,
      cubeBonus: 100,
    },
    speed: {
      [SPEED_WALK]: 50,
      [SPEED_SWIM]: 50,
    },
    params: {
      [PARAM_STR]: 29,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 20,
      [PARAM_INT]: 16,
      [PARAM_WIT]: 18,
      [PARAM_CHA]: 18,
    },
    saveThrowCollection: {
      [PARAM_STR]: 14,
      [PARAM_CON]: 10,
      [PARAM_WIT]: 9,
      [PARAM_CHA]: 9,
    },
    skillCollection: {
      [SKILL_ATHLETICS]: 14,
      [SKILL_PERCEPTION]: 9,
      [SKILL_HISTORY]: 8,
      [SKILL_ARCANA]: 8,
    },
    resistanceList: [
      DAMAGE_COLD,
    ],
    immunityList: [
      DAMAGE_THUNDER,
      DAMAGE_ELECTRICITY,
    ],
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 19,
      },
    ],
    languageList: [
      LANG_GIANT,
      LANG_COMMON,
    ],
    cr: CR_13,
    featureList: [
      {
        name: 'Амфибия',
        description: `Великан может дышать и воздухом и под водой.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 17,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            SPELL_LEVITATE,
            SPELL_DETECT_MAGIC,
            SPELL_FEATHER_FALL,
            SPELL_LIGHT,
          ],
        },
        {
          limit: {
            count: 3,
            period: 'день',
          },
          list: [
            SPELL_CONTROL_WEATHER,
            SPELL_WATER_BREATHING,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Мультиатака',
        description: `Великан совершает две атаки двуручным мечом.`,
      },
      {
        name: 'Двуручный меч',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 14,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 6,
            cubeType: 6,
            cubeBonus: 9,
          },
        },
      },
      {
        name: 'Камень',
        attack: {
          type: ACTION_RANGE_WEAPON_ATTACK,
          bonus: 14,
          range: {
            normal: 60,
            max: 240,
          },
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 4,
            cubeType: 12,
            cubeBonus: 9,
          },
        },
      },
      {
        name: 'Удар молнии',
        description: `Великан вызывает магическую молнию в точку, которую он видит в пределах 500 футов от себя. Все существа в пределах 10 футов от этой точки должны совершить спасбросок Ловкости со Сл 17, получая урон электричеством 54 (12к8) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Верёвочник',
    nameEn: 'Roper',
    id: CREATURE_ROPER,
    description: `Живущие в пещерах по всему Подземью ненасытные верёвочники рады всему, что могут поймать и сожрать. Верёвочники едят любых существ, от зверей Подземья до искателей приключений вместе с их снаряжением.\n
Верёвочник имеет вид сталактита или сталагмита, что позволяет ему атаковать внезапно. Существо может медленно двигаться, используя тысячи липких ресничек под своим основанием. Оно подкрадывается по стенам пещеры и вдоль потолков, выбирая лучшее место, чтобы атаковать.\n
**Охотники Подземья.** Верёвочник является развитой и зрелой формой пронзателя, с которым его объединяет внешний вид и тактика охоты. Верёвочник может оставаться неподвижным на протяжении долгих часов, прикрывая свой единственный глаз, чтобы больше походить на каменное формирование. Существа, подошедшие слишком близко, удивляются, когда этот глаз распахивается, и в их направлении вылетают липкие хватающие щупальца. Верёвочник издаёт ужасные гортанные звуки, подтягивая борющихся жертв к смертельному укусу своих каменных зубов.\n
Верёвочник может переваривать практически всё, за исключением платины, драгоценных камней и магических вещей, которые могут быть извлечены из его глотки после смерти. Желудочный сок верёвочника также ценится алхимиками, которые используют его в качестве растворителя.\n
**Ослабляющие щупальца.** Верёвочник имеет шесть утолщений вдоль тела, в которых находятся щупальца, липнущие ко всему, чего касаются. Каждое щупальце имеет похожие на волосы наросты, которые проникают в плоть врагов и вытягивают их силу, так что жертва может лишь слабо сопротивляться тянущему её верёвочнику. Если щупальце отрубается или уничтожается, верёвочник производит новое ему на замену.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:41',
    armor: {
      ac: 20,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 11,
      cubeType: 10,
      cubeBonus: 33,
    },
    speed: {
      [SPEED_WALK]: 10,
      [SPEED_CLIMB]: 10,
    },
    params: {
      [PARAM_STR]: 18,
      [PARAM_DEX]: 8,
      [PARAM_CON]: 17,
      [PARAM_INT]: 7,
      [PARAM_WIT]: 16,
      [PARAM_CHA]: 6,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 6,
      [SKILL_STEALTH]: 5,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 16,
      },
    ],
    cr: CR_5,
    featureList: [
      {
        name: 'Обманчивая внешность',
        description: `Пока верёвочник остаётся без движения, он неотличим от обычного пещерного образования, такого как сталагмит.`,
      },
      {
        name: 'Хваткие усики',
        description: `У верёвочника может быть до шести усиков одновременно. Каждый усик можно атаковать (КД 20; 10 хитов; иммунитет к урону психической энергией и ядом). Уничтожение усика не причиняет урон верёвочнику, который может в своём следующем ходу создать усик на замену уничтоженному. Усик также можно сломать, если существо действием совершит проверку Силы со Сл 15 и преуспеет.`,
      },
      {
        name: 'Паучье лазание',
        description: `Верёвочник может лазать по сложным поверхностям, включая потолки, без совершения проверок характеристик.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Верёвочник совершает четыре атаки усиками, использует Подтаскивание и совершает одну атаку укусом.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 4,
            cubeType: 8,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Усик',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 50,
          target: 1,
          hit: `Цель становится схваченной (Сл высвобождения равна 15). Пока цель схвачена, она также опутана и совершает с помехой проверки Силы и спасброски Силы, а верёвочник не может использовать этот усик против другой цели`,
        },
      },
      {
        name: 'Подтаскивание',
        description: `Верёвочник подтаскивает всех схваченных существ на расстояние до 25 футов к себе.`,
      },
    ],
  },
  {
    name: 'Виверна',
    nameEn: 'Wyvern',
    id: CREATURE_WYVERN,
    description: `Путешественники порой видят в небесах тёмную крылатую фигуру виверны, несущей добычу. Это родственники великих драконов, и охотятся они в тех же дремучих лесах и пещерах. Их появление вызывает всплески тревоги на границах цивилизации.\n
У виверны есть две чешуйчатые лапы, кожистые крылья и мощный хвост, увенчанный самым мощным оружием виверны: ядовитым жалом. Яд жала виверны может убить существо в считанные секунды. Необычайно сильный яд в крови жертвы уничтожает вены и артерии по пути к её сердцу. Но, несмотря на смертоносность виверн, находятся охотники и искатели приключений, выслеживающие виверн ради их яда, который используется в алхимии и наносится на оружие.\n
**Воздушные охотники.** Виверны не сражаются на земле кроме случаев, когда иными способами жертву не достать, или когда их заманили в положение, при котором сражение в воздухе не представляется возможным. Если вынудить её сражаться на земле, виверна припадает, шипя и рыча, при этом держа жало над головой.\n
**Агрессивные и безудержные.** Виверны прекращают преследовать свою добычу только если получают серьёзную травму, или если жертве так долго удаётся ускользать, что легче становится поймать какую-нибудь другую добычу. Если убегающее существо забьётся куда-то, куда виверна не может пролезть из-за размера, она будет охранять выход из этого убежища, пытаясь при возможности достать жертву жалом.\n
Хотя виверны гораздо хитрее обычных животных, они далеко не такие умные, как их драконьи собратья. Поэтому если существо, за которым с воздуха охотится виверна, сохраняет самообладание, оно вполне может ускользнуть от виверны или провести её. Виверны следуют за жертвой кратчайшим путём, не раздумывая о возможной засаде.\n
**Приручённые виверны.** Виверну можно приручить, чтобы использовать как ездовое животное, однако это трудная и опасная задача. Лучше всего выращивать виверн для этих целей с самого младенчества. Тем не менее, хищный темперамент виверн стоил жизни многим горе-дрессировщикам. `,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:42',
    armor: {
      ac: 13,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 13,
      cubeType: 10,
      cubeBonus: 39,
    },
    speed: {
      [SPEED_WALK]: 20,
      [SPEED_FLY]: 80,
    },
    params: {
      [PARAM_STR]: 19,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 16,
      [PARAM_INT]: 5,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 6,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 4,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    cr: CR_6,
    actionList: [
      {
        name: 'Мультиатака',
        description: `Виверна совершает две атаки: одну укусом, и одну жалом. Во время полёта она может использовать когти вместо одной другой атаки.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Когти',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Жало',
        description: `Цель должна совершить спасбросок Телосложения со Сл 15, получая урон ядом 24 (7к6) при провале, или половину этого урона при успехе.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 4,
          },
        },
      },
    ],
    isFemale: true,
  },
  {
    name: 'Водная аномалия',
    nameEn: 'Water weird',
    id: CREATURE_WATER_WEIRD,
    description: `Водная аномалия является элементалем-защитником, связанным с определённым местом, заполненным водой, таким как бассейн или фонтан. Её змеевидное тело, невидимое, пока погружено в воду, становится заметным только когда она появляется, чтобы напасть, обвиваясь вокруг любого существа, кроме её призывателя и тех, кому разрешит находиться призыватель. Когда водная аномалия повержена, она становится неживой лужей воды.\n
**Добрые и злые аномалии.** Как у большинства элементалей, у водной аномалии нет понятия добра или зла. Однако аномалия, связанная со священным или осквернённым источником воды, начинает черпать природу того места, становясь нейтрально-доброй или нейтрально-злой.\n
Нейтрально-добрая водная аномалия старается отпугнуть незваных гостей, а не убить их, в то время как нейтрально-злая с удовольствием убьёт их, и даже может предать своего призывателя. Водная аномалия теряет своё злое мировоззрение, если её источник очистить при помощи заклинания _Очищение пищи и питья_.\n
**Стихийная натура.** Водной аномалии не нужен воздух, еда, питьё и сон.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_ELEMENTAL,
    ],
    aligmentId: ALIGMENT_N,
    source: 'MM:43',
    armor: 13,
    hp: {
      cubeCount: 9,
      cubeType: 10,
      cubeBonus: 9,
    },
    speed: {
      [SPEED_WALK]: 0,
      [SPEED_SWIM]: 60,
    },
    params: {
      [PARAM_STR]: 17,
      [PARAM_DEX]: 16,
      [PARAM_CON]: 13,
      [PARAM_INT]: 11,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 10,
    },
    resistanceList: [
      DAMAGE_FIRE,
      DAMAGE_NONMAGIC_WEAPON,
    ],
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_UNCONSCIOUS,
      CONDITION_GRAPPLED,
      CONDITION_EXHAUSTION,
      CONDITION_RESTRAINED,
      CONDITION_POISONED,
      CONDITION_PARALYZED,
      CONDITION_PRONE,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 30,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    languageList: [
      {
        id: LANG_AQUAN,
        doNotSpeak: true,
      },
    ],
    cr: CR_3,
    featureList: [
      {
        name: 'Невидимость в воде',
        description: `Водная аномалия невидима, если полностью погружена в воду.`,
      },
      {
        name: 'Привязка к воде',
        description: `Водная аномалия умирает, если покидает воду, к которой привязана, или если эта вода уничтожается.`,
      },
    ],
    actionList: [
      {
        name: 'Сжимание',
        description: `Если размер цели не больше Среднего, она становится схваченной (Сл высвобождения 13) и подтягивается на 5 футов к водной аномалии. Пока цель схвачена, она опутана, водная аномалия пытается её утопить, и аномалия не может сжимать другую цель.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 10,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
            },
          },
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 3,
            cubeType: 6,
            cubeBonus: 3,
          },
        },
      },
    ],
    isFemale: true,
  },
  {
    name: 'Водянник',
    nameEn: 'Merrow',
    id: CREATURE_MERROW,
    description: `Водянники часто посещают прибрежные воды, охотясь на рыбаков, мерфолков и любых других съедобных существ, которые встретятся им на пути. Эти дикие чудовища хватают и пожирают неосторожную жертву, утягивая трупы в свои подводные гроты для пропитания.\n
**Превращённые мерфолки.** Давным-давно племя мерфолков нашло на дне моря идол Демогоргона. Не зная что это такое, они принесли артефакт своему королю. Каждого, кто коснулся идола, поразило безумие, в том числе и короля, который распорядился выполнить ритуал с жертвоприношением, чтобы открыть врата в Бездну. Океан стал красным от крови убитых мерфолков, но ритуал сработал, и король повёл выживших через подводные врата в Бездну на слой Демогоргона. Мерфолки остались здесь на несколько поколений, сражаясь за свои жизни, пока Бездна полностью не исказила их, превратив в нескладных отвратительных чудовищ. Так появились первые водянники.\n
**Прибрежные разбойники.** Всякий раз, когда представляется возможность, Князь Демонов посылает водянников назад на Материальный План, чтобы учинить резню в океанах. Водянники — разбойники, нападающие на любых существ меньше и слабее себя.\n
Водянники обитают в подводных пещерах, наполненных сокровищами и трофеями, взятыми с затонувших кораблей или забранными у жертв. Они привязывают гниющие трупы мёртвых врагов и утонувших моряков, чтобы отметить границы своей территории.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:44',
    armor: {
      ac: 13,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 6,
      cubeType: 10,
      cubeBonus: 12,
    },
    speed: {
      [SPEED_WALK]: 10,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 18,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 15,
      [PARAM_INT]: 8,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 9,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    languageList: [
      LANG_AQUAN,
      LANG_ABYSSAL,
    ],
    cr: CR_2,
    featureList: [
      {
        name: 'Амфибия',
        description: `Водянник может дышать и воздухом и под водой.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Водянник совершает две атаки: одну укусом, и одну либо когтями, либо гарпуном.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 8,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Когти',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 4,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Гарпун',
        description: `Если цель — существо с размером не больше Огромного, она должна преуспеть в состязании Силы с водянником, иначе её подтянет на 20 футов в сторону водянника.`,
        attack: {
          type: ACTION_MELEE_OR_RANGE_WEAPON_ATTACK,
          bonus: 6,
          range: {
            melee: 5,
            range: {
              normal: 20,
              max: 60,
            },
          },
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 4,
          },
        },
      },
    ],
  },
  {
    name: 'Красный волшебный дракончик',
    nameEn: 'Red faerie dragon',
    id: CREATURE_FAERIE_DRAGON_RED,
    description: `Волшебный дракончик — дракон размером с кошку с крыльями бабочки. У него острые зубы, а восторг он выражает подёргиванием хвоста. Его игривое настроение исчезает только если на него напасть.\n
**Невидимые озорники.** Присутствие волшебного дракончика выдаёт лишь его сдавленный смешок. Дракончик остаётся вне поля зрения, скрытно наблюдая за тем, как жертвы разбираются с его розыгрышами. Когда веселье заканчивается, он может показаться, в зависимости от настроения своих «жертв».\n
**Дружелюбные и смышлёные.** У волшебного дракончика острый ум, любовь к сокровищам и хорошей компании и озорное чувство юмора. Путешественники могут сыграть на драконьей натуре дракончика, предложив ему «сокровища» в виде конфет, выпечки и побрякушек в обмен на информацию и безопасный проход через его территорию.\n
**Цвет и возраст.** Чешуя волшебного дракончика меняет оттенок с возрастом, проходя все цвета радуги. У всех волшебных дракончиков есть способности к магии, и они получают доступ к новым заклинаниям по мере взросления.\n

| Цвета дракона | Возраст         |
|---------------|-----------------|
| Красный       | 5 лет и меньше  |
| Оранжевый     | 6–10 лет        |
| Жёлтый        | 11–20 лет       |
| Зелёный       | 21–30 лет       |
| Голубой       | 31–40 лет       |
| Синий         | 41–50 лет       |
| Фиолетовый    | 51 год и старше |
`,
    sizeType: SIZE_TINY,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CG,
    source: 'MM:45',
    armor: 15,
    hp: {
      cubeCount: 4,
      cubeType: 4,
      cubeBonus: 4,
    },
    speed: {
      [SPEED_WALK]: 10,
      [SPEED_FLY]: 60,
    },
    params: {
      [PARAM_STR]: 3,
      [PARAM_DEX]: 20,
      [PARAM_CON]: 13,
      [PARAM_INT]: 14,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 16,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 3,
      [SKILL_ARCANA]: 4,
      [SKILL_STEALTH]: 7,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 13,
      },
    ],
    languageList: [
      LANG_DRACONIC,
      LANG_SYLVAN,
    ],
    cr: CR_1,
    featureList: [
      {
        name: 'Превосходная невидимость',
        description: `Дракон может бонусным действием магическим образом стать невидимым, пока концентрируется (как при концентрации на заклинании). Всё снаряжение, которое дракон несёт или носит, становится невидимым вместе с ним.`,
      },
      {
        name: 'Ограниченная телепатия',
        description: `При помощи телепатии дракон может магическим образом общаться со всеми другими волшебными дракончиками в пределах 60 футов.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Дракон совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 13,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_MAGE_HAND,
            SPELL_MINOR_ILLUSION,
            SPELL_DANCING_LIGHTS,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 5,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
            },
          },
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 0,
            cubeType: 0,
            cubeBonus: 1,
          },
        },
      },
      {
        name: 'Благодушное дыхание',
        description: `Дракон выдыхает облако газа, вызывающего эйфорию, на одно существо, находящееся в пределах 5 футов от него. Цель должна преуспеть в спасброске Мудрости со Сл 11, иначе в течение 1 минуты не сможет совершать реакции, и в начале каждого своего хода должна будет бросать к6, чтобы определить своё поведение в этом ходу:
* **1–4**. Цель не совершает ни действия, ни бонусные действия, и всё своё перемещение тратит на перемещение в случайным образом выбранном направлении.
* **5–6**. Цель не перемещается, и единственное, что может делать в этом ходу, это совершение спасброска Мудрости со Сл 11, оканчивая эффект на себе при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Оранжевый волшебный дракончик',
    nameEn: 'Orange faerie dragon',
    id: CREATURE_FAERIE_DRAGON_ORANGE,
    parentId: CREATURE_FAERIE_DRAGON_RED,
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 13,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_MAGE_HAND,
            SPELL_MINOR_ILLUSION,
            SPELL_DANCING_LIGHTS,
            SPELL_COLOR_SPRAY,
          ],
        },
      ],
    },
  },
  {
    name: 'Жёлтый волшебный дракончик',
    nameEn: 'Yellow faerie dragon',
    id: CREATURE_FAERIE_DRAGON_YELLOW,
    parentId: CREATURE_FAERIE_DRAGON_ORANGE,
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 13,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_MAGE_HAND,
            SPELL_MINOR_ILLUSION,
            SPELL_DANCING_LIGHTS,
            SPELL_COLOR_SPRAY,
            SPELL_MIRROR_IMAGE,
          ],
        },
      ],
    },
  },
  {
    name: 'Зелёный волшебный дракончик',
    nameEn: 'Green faerie dragon',
    id: CREATURE_FAERIE_DRAGON_GREEN,
    parentId: CREATURE_FAERIE_DRAGON_YELLOW,
    cr: CR_2,
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 13,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_MAGE_HAND,
            SPELL_MINOR_ILLUSION,
            SPELL_DANCING_LIGHTS,
            SPELL_COLOR_SPRAY,
            SPELL_MIRROR_IMAGE,
            SPELL_SUGGESTION,
          ],
        },
      ],
    },
  },
  {
    name: 'Голубой волшебный дракончик',
    nameEn: 'Light blue faerie dragon',
    id: CREATURE_FAERIE_DRAGON_LIGHT_BLUE,
    parentId: CREATURE_FAERIE_DRAGON_GREEN,
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 13,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_MAGE_HAND,
            SPELL_MINOR_ILLUSION,
            SPELL_DANCING_LIGHTS,
            SPELL_COLOR_SPRAY,
            SPELL_MIRROR_IMAGE,
            SPELL_SUGGESTION,
            SPELL_MAJOR_IMAGE,
          ],
        },
      ],
    },
  },
  {
    name: 'Синий волшебный дракончик',
    nameEn: 'Blue faerie dragon',
    id: CREATURE_FAERIE_DRAGON_BLUE,
    parentId: CREATURE_FAERIE_DRAGON_LIGHT_BLUE,
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 13,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_MAGE_HAND,
            SPELL_MINOR_ILLUSION,
            SPELL_DANCING_LIGHTS,
            SPELL_COLOR_SPRAY,
            SPELL_MIRROR_IMAGE,
            SPELL_SUGGESTION,
            SPELL_MAJOR_IMAGE,
            SPELL_HALLUCINATORY_TERRAIN,
          ],
        },
      ],
    },
  },
  {
    name: 'Фиолетовый волшебный дракончик',
    nameEn: 'Violet faerie dragon',
    id: CREATURE_FAERIE_DRAGON_VIOLET,
    parentId: CREATURE_FAERIE_DRAGON_BLUE,
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 13,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_MAGE_HAND,
            SPELL_MINOR_ILLUSION,
            SPELL_DANCING_LIGHTS,
            SPELL_COLOR_SPRAY,
            SPELL_MIRROR_IMAGE,
            SPELL_SUGGESTION,
            SPELL_MAJOR_IMAGE,
            SPELL_HALLUCINATORY_TERRAIN,
            SPELL_POLYMORPH,
          ],
        },
      ],
    },
  },
  {
    name: 'Галеб дур',
    nameEn: 'Galeb duhr',
    id: CREATURE_GALEB_DUHR,
    description: `Галеб дур — существо, похожее на валун с массивными выступами, которые используются как руки и ноги. Он способен оживлять находящиеся рядом с ним камни, и обычно встречается в горной местности.\n
Могущественная магия позволяет заклинателям призывать галеб дура с Плана Земли, хотя некоторые из них могут появиться и без помощи магии — в тех местах, что соприкасаются с этим планом. По сравнению с другими элементалями, галеб дур обладает большим интеллектом, что позволяет ему лучше оценивать степень угрозы и вступать в диалог с существами, зашедшими на охраняемую им территорию.\n
**Каменный страж.** Галеб дур не стареет, не ест и не пьёт, что делает его великолепным охранником. Могущественный друид может поручить ему охрану каменного круга или священного холма. Другой галеб дур может быть создан для охраны подземной гробницы или башни волшебника. По своему усмотрению он может принять облик обычного валуна и находиться в нём годами.\n
Галеб дур навечно связан с Материальным Планом, поэтому после смерти не возвращается на План Земли. У него великолепная память, и он всегда рад поделиться информацией о местности с существами, которых не расценивает как угрозу.\n
**Связь с камнем.** Галеб дур способен слиться воедино с землёй вокруг себя, что позволяет ему наполнить близлежащие камни и валуны неким подобием жизни. Он использует оживлённые камни, чтобы отпугивать чужаков и защищать то, что ему поручено. Чтобы приблизиться к нарушителям, он прижимает конечности к телу и с бешеной скоростью катится вперёд.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_ELEMENTAL,
    ],
    aligmentId: ALIGMENT_N,
    source: 'MM:46',
    armor: {
      ac: 16,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 9,
      cubeType: 8,
      cubeBonus: 45,
    },
    speed: {
      [SPEED_WALK]: {
        value: 15,
        comment: '30 фт. когда катится, 60 фт. когда катится по склону',
      },
    },
    params: {
      [PARAM_STR]: 20,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 20,
      [PARAM_INT]: 11,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 11,
    },
    resistanceList: [
      DAMAGE_NONMAGIC_WEAPON,
    ],
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_EXHAUSTION,
      CONDITION_PETRIFIED,
      CONDITION_POISONED,
      CONDITION_PARALYZED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_VIBRATION_SENSE,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 11,
      },
    ],
    languageList: [
      LANG_TERRAN,
    ],
    cr: CR_6,
    featureList: [
      {
        name: 'Обманчивая внешность',
        description: `Пока галеб дур остаётся без движения, он неотличим от обычного валуна.`,
      },
      {
        name: 'Катящаяся атака в броске',
        description: `Если галеб дур прокатится как минимум 20 футов по направлению к цели, а затем в том же ходу попадёт по ней атакой размашистым ударом, цель получает от атаки дополнительный дробящий урон 7 (2к6). Если цель — существо, она должна преуспеть в спасброске Силы со Сл 16, иначе будет сбита с ног.`,
      },
    ],
    actionList: [
      {
        name: 'Размашистый удар',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 8,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 5,
          },
        },
      },
      {
        name: 'Оживление валунов',
        description: `Галеб дур магическим образом оживляет до двух валунов, которые видит в пределах 60 футов от себя. Валун обладает статистикой галеб дура, за исключением того, что у него Интеллект 1 и Харизма 1, его нельзя очаровать и испугать, и у него нет этого варианта действия. Валун остаётся живым, пока галеб дур сохраняет концентрацию, вплоть до 1 минуты (как при концентрации на заклинании).`,
        limit: {
          count: 1,
          period: 'день',
        },
      },
    ],
  },
  {
    name: 'Гарпия',
    nameEn: 'Harpy',
    id: CREATURE_HARPY,
    description: `Находя удовольствие в страданиях и смерти, гарпии, обладающие садистскими вкусами, постоянно ищут себе новые жертвы. Их сладкие песни привели к смерти бесчисленное множество искателей приключений, приманивая их гарпиям на съедение.\n
Гарпия обладает телом, ногами и крыльями стервятника и туловищем, руками и головой человека. Их глаза отражают абсолютное зло их душ, а острые когти гарпий и костяные дубинки делают их опасными в бою.\n
**Божественное проклятье.** В давние времена блуждающая по лесу эльфийка услышала пение птиц, настолько чистое и прекрасное, что была тронута до слез. Следуя этой музыке, она вышла на поляну, где стоял красивый юный эльф, который тоже остановился, чтобы послушать песню птицы. Это был Фенмарел Местарин, эльфийский бог-затворник. Его божественный облик похитил её сердце, но эльф сбежал, исчезнув среди деревьев, словно его там никогда и не было.\n
Эльфийка обыскала лес и звала незнакомца, но она не нашла никаких следов его присутствия. Доведённая до отчаяния свой страстью, она умоляла богов о помощи. Аэрдри Фаэниа, эльфийская богиня неба, услышала плач эльфийки и отправилась ей на помощь. Она явилась в образе птицы, чья песня очаровала бога-затворника, и научила эльфийку этой песне красоты и обольщения.\n
Когда её пению не удалось привлечь Фенмарела Местарина к себе, эльфийка прокляла богов, вызвав ужасающую силу, и превратилась в первую гарпию. Магия наложенного проклятья изменила дух эльфийки, также как и её тело, превратив её желание любви в жажду плоти, но её красивая песня продолжает привлекать жертв в её смертельные объятия.\n
**Песнь гарпии.** Услышать песнь гарпии это услышать музыку красивее, чем что-либо в этом мире. Путешественник, который поддастся чарующему эффекту этого пения, вынужден слепо двигаться к его источнику. Гарпия очаровывает жертв, прежде чем атакует, но иногда использует свою песню более эффективно, заманивая добычу на утёсы, в болота, зыбучие пески или в смертельно опасные ямы. Существа, попавшие в ловушку или потерявшие сознание, становятся лёгкой мишенью для гнева гарпии.\n
**Садисты и трусы.** Гарпии устраивают логово у мрачных прибрежных скал и в других местах, опасных для нелетающих существ. Гарпии не ведут честных битв, и они никогда не нападают, если не обладают явным преимуществом. Если бой оборачивается не в пользу гарпий, им не хватает хитрости, чтобы менять тактику, и потому они скорее сбегут и останутся голодными, чем будут рисковать в прямом бою.\n
Во время нападения гарпии играют со своей едой, восторгаясь «музыкой» криков своих жертв. Гарпия не торопится расчленять беспомощного врага, и может днями пытать жертву, пока не наступит её конец.\n
**Жуткие коллекционеры. Гарпии забирают блестящие побрякушки, ценности и другие трофеи со своих жертв, иногда сражаясь друг с другом за право претендовать на отборную добычу. Если ценности не найдены, гарпия забирает волосы, кости или части тела жертвы, чтобы вплести их в своё гнездо. Логово гарпии обычно сокрыто в отдалённых руинах, и там искатели приключений могут обнаружить ценные сокровища и магию, спрятанные под мерзкими кучами отходов.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:47',
    armor: 11,
    hp: {
      cubeCount: 7,
      cubeType: 8,
      cubeBonus: 7,
    },
    speed: {
      [SPEED_WALK]: 20,
      [SPEED_FLY]: 40,
    },
    params: {
      [PARAM_STR]: 12,
      [PARAM_DEX]: 13,
      [PARAM_CON]: 12,
      [PARAM_INT]: 7,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 13,
    },
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    languageList: [
      LANG_COMMON,
    ],
    cr: CR_1,
    actionList: [
      {
        name: 'Мультиатака',
        description: `Гарпия совершает две атаки: одну когтями, и одну дубиной.`,
      },
      {
        name: 'Когти',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 3,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 4,
            cubeBonus: 1,
          },
        },
      },
      {
        name: 'Дубина',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 3,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 1,
            cubeType: 4,
            cubeBonus: 1,
          },
        },
      },
      {
        name: 'Манящая песня',
        description: `Гарпия начинает петь магическую мелодию. Все гуманоиды и великаны в пределах 300 футов от гарпии, слышащие песню, должны преуспеть в спасброске Мудрости со Сл 11, иначе они станут очарованными до окончания песни. Гарпия может продолжать петь в следующих раундах бонусным действием. Она может прекратить петь в любое время. Песня оканчивается, если гарпия становится недееспособной.
Будучи очарованной гарпией, цель недееспособна и игнорирует песни других гарпий. Если очарованная цель находится более чем в 5 футах от гарпии, цель должна в свой ход переместиться к гарпии кратчайшим маршрутом. Она не избегает провоцированных атак, но перед вхождением в опасную местность, такую как лава или яма, а также при получении урона из любого источника кроме этой гарпии цель может повторять спасбросок. Существо также может повторять спасбросок в конце каждого своего хода. Если спасбросок существа был успешным, эффект на нём прекращается.
Успешно спасшаяся цель получает иммунитет к песне этой гарпии на следующие 24 часа.`,
      },
    ],
    isFemale: true,
  },
  {
    name: 'Дао',
    nameEn: 'Dao',
    id: CREATURE_DAO,
    description: `Дао — жадные и злобные гении со Стихийного Плана Земли. Они носят ювелирные украшения из драгоценных камней и редких металлов. Во время полёта нижняя часть их тел становится столбом вращающегося песка. Дао не испытывает счастья, если ему не завидуют другие дао.\n
**Всё, что блестит.** Дао обитают на Стихийном Плане Земли в комплексах переплетающихся туннелей и пещер, пронизанных мерцающими рудами. Эти лабиринты постоянно расширяются, поскольку дао роют и перестраивают своё пространство. Дао нет дела до бедности и несчастий всех остальных. Подобно тому, как смертные используют пряности, дао могут посыпать свою пищу перемолотыми в пыль золотом и драгоценными камнями.\n
**Властители земли.** Дао никогда не помогает смертным, если только не может получить от них что-то взамен, желательно сокровище. Среди гениев дао общаются и торгуют с ифритами, но презирают джиннов и маридов. Другие расы, населяющие Стихийный План Земли, сторонятся дао, которые постоянно ищут новых рабов для разработки лабиринтов их парящих каменных островов.\n
**Гордые рабовладельцы.** Дао достают лучших рабов, которых только можно купить, и заставляют их работать в опасных подземных мирах, дрожащих от землетрясений.\n
Сколь сильно дао любят порабощать других, столь же сильно они ненавидят, когда порабощают их самих. Известно, что могущественные волшебники заманивают дао на Материальный План и заключают их в драгоценные камни или железные фляги. К несчастью для дао, их жадность позволяет магам довольно легко обманывать их и заставлять себе служить. `,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_ELEMENTAL,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:50',
    armor: {
      ac: 18,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 15,
      cubeType: 10,
      cubeBonus: 105,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_DIG]: 30,
      [SPEED_FLY]: 30,
    },
    params: {
      [PARAM_STR]: 23,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 24,
      [PARAM_INT]: 12,
      [PARAM_WIT]: 13,
      [PARAM_CHA]: 14,
    },
    saveThrowCollection: {
      [PARAM_INT]: 5,
      [PARAM_WIT]: 5,
      [PARAM_CHA]: 6,
    },
    immunityConditionList: [
      CONDITION_PETRIFIED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 11,
      },
    ],
    languageList: [
      LANG_TERRAN,
    ],
    cr: CR_11,
    featureList: [
      {
        name: 'Скольжение сквозь землю',
        description: `Дао может перемещаться, копая, сквозь немагические и необработанные землю и камень. При этом дао не беспокоит материал, через который перемещается.`,
      },
      {
        name: 'Элементальная гибель',
        description: `Если дао умирает, его тело распадается на кристаллическую пыль, оставляя только снаряжение, которое дао носил и нёс.`,
      },
      {
        name: 'Устойчивый',
        description: `Дао совершает с преимуществом спасброски Силы и Ловкости против эффектов, сбивающих его с ног.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 14,
      spellAttackBonus: 6,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            SPELL_STONE_SHAPE,
            SPELL_DETECT_EVIL_AND_GOOD,
            SPELL_DETECT_MAGIC,
          ],
        },
        {
          limit: {
            count: 3,
            period: 'день',
          },
          list: [
            SPELL_MOVE_EARTH,
            SPELL_PASSWALL,
            SPELL_TONGUES,
          ],
        },
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_PHANTASMAL_KILLER,
            SPELL_GASEOUS_FORM,
            SPELL_WALL_OF_STONE,
            SPELL_INVISIBILITY,
            {
              id: SPELL_CONJURE_ELEMENTAL,
              comment: 'только земляной элементаль',
            },
            SPELL_PLANE_SHIFT,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дао совершает две атаки кулаком, либо две атаки молотом.`,
      },
      {
        name: 'Кулак',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Молот',
        description: `Если цель — существо с размером не больше Огромного, она должна преуспеть в проверке Силы со Сл 18, иначе будет сбита с ног.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 4,
            cubeType: 6,
            cubeBonus: 6,
          },
        },
      },
    ],
    isFemale: true,
  },
  {
    name: 'Джинн',
    nameEn: 'Djinni',
    id: CREATURE_DJINNI,
    description: `Гордые, эмоциональные гении со Стихийного Плана Воздуха. Джинны — это привлекательные, хорошо сложённые, высокие гуманоиды с синей кожей и тёмными глазами. Они одеваются в невесомые мерцающие шелка, которые не только удобны, но и хорошо подчёркивают их мускулатуру.\n
**Ветреные эстеты.** Джинны правят облачными островами, покрытыми бесчисленными шатрами или увенчанными чудесными зданиями, фонтанами и садами. Джинны любят комфорт и удобство, наслаждаются сочными фруктами, острыми винами, ароматными благовониями и прекрасной музыкой.\n
Джинны известны своим озорством и благосклонным отношением к смертным. В среде гениев джинны прохладно относятся к ифритам и маридам, которых считают высокомерными. Они открыто презирают дао и при малейшей провокации с их стороны отвечают им той же монетой.\n
**Властители ветров.** Будучи повелителями воздуха, джинны ездят на мощных вихрях, которые сами же и создают развлечения ради. Они способны управлять ими, и даже перевозить на них пассажиров. Существа, противостоящие джинну, атакуются ветром и громом, и на этом же ветру джинн покинет поле боя, если враг окажется сильнее. Во время полёта нижняя часть тела джинна становится столбом вращающегося воздуха.\n
**Покорные слуги.** Джинны верят, что подневольная служба — это проявление судьбы, и что никто не может противиться ей. Поэтому они единственные из всех гениев наиболее подходят для подобной службы, хотя она никогда не доставляет им радости. Своих рабов джинны воспринимают больше как слуг, заслуживающих доброты и защиты, и неохотно с ними расстаются.\n
Смертный, желающий получить услугу от джинна, может упросить его, преподнеся хорошие дары, или прибегнув к лести. Однако могущественные волшебники способны просто призвать джинна и заставить его служить, или могут поймать его, используя магию. Долговременная служба раздражает джинна, а заточение — непростительно. Джиннов возмущают жестокие волшебники, заставляющие их столетиями томиться в бутылках, железных флягах и духовых инструментах. Предательство, особенно со стороны смертного, которому джинн доверял — крайне мерзкое деяние, которое можно искупить только смертью. `,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_ELEMENTAL,
    ],
    aligmentId: ALIGMENT_CG,
    source: 'MM:51',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 14,
      cubeType: 10,
      cubeBonus: 84,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_FLY]: 90,
    },
    params: {
      [PARAM_STR]: 21,
      [PARAM_DEX]: 15,
      [PARAM_CON]: 22,
      [PARAM_INT]: 15,
      [PARAM_WIT]: 16,
      [PARAM_CHA]: 20,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 6,
      [PARAM_WIT]: 7,
      [PARAM_CHA]: 9,
    },
    immunityList: [
      DAMAGE_THUNDER,
      DAMAGE_ELECTRICITY,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 13,
      },
    ],
    languageList: [
      LANG_AURAN,
    ],
    cr: CR_11,
    featureList: [
      {
        name: 'Элементальная гибель',
        description: `Если джинн умирает, его тело распадается на тёплый ветерок, оставляя только снаряжение, которое джинн носил и нёс.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 17,
      spellAttackBonus: 9,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            SPELL_THUNDERWAVE,
            SPELL_DETECT_EVIL_AND_GOOD,
            SPELL_DETECT_MAGIC,
          ],
        },
        {
          limit: {
            count: 3,
            period: 'день',
          },
          list: [
            {
              id: SPELL_CREATE_FOOD_AND_WATER,
              comment: 'может создавать вино вместо воды',
            },
            SPELL_WIND_WALK,
            SPELL_TONGUES,
          ],
        },
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_GASEOUS_FORM,
            SPELL_INVISIBILITY,
            SPELL_MAJOR_IMAGE,
            {
              id: SPELL_CONJURE_ELEMENTAL,
              comment: 'только воздушный элементаль',
            },
            SPELL_CREATION,
            SPELL_PLANE_SHIFT,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Мультиатака',
        description: `Джинн совершает три атаки скимитаром.`,
      },
      {
        name: 'Скимитар',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 9,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_SLASHING,
              cubeCount: 2,
              cubeType: 6,
              cubeBonus: 5,
            },
            {
              typeList: [
                DAMAGE_THUNDER,
                DAMAGE_ELECTRICITY,
              ],
              cubeCount: 1,
              cubeType: 6,
              comment: ' (на выбор джинна)',
            },
          ],
        },
      },
      {
        name: 'Создание смерча',
        description: `В точке, которую джинн видит в пределах 120 футов от себя, магическим образом появляется смерч в виде цилиндра с радиусом 5 футов и высотой 30 футов. Смерч существует, пока джинн поддерживает концентрацию (как при концентрации на заклинании). Все существа кроме джинна, входящие в смерч, должны преуспеть в спасброске Силы со Сл 18, иначе станут опутанными им. Джинн может действием перемещать смерч на расстояние до 60 футов, и существа, опутанные смерчем, перемещаются вместе с ним. Смерч исчезает, если джинн перестаёт его видеть\n
Существо может действием освободить существо, опутанное смерчем, в том числе и себя, преуспев в проверке Силы со Сл 18. Если проверка успешна, существо перестаёт быть опутанным и перемещается в ближайшее пространство за пределами смерча.`,
      },
    ],
  },
  {
    name: 'Ифрит',
    nameEn: 'Efreeti',
    id: CREATURE_EFREETI,
    description: `**Ифриты** — громадные гении со Стихийного Плана Огня — повелевают пламенем, обладают иммунитетом к огню и способны создавать его по своему желанию. Тонкие шёлковые кафтаны и узорчатые одеяния покрывают их красную, как лава, или чёрную, как уголь, кожу. Ифриты украшают себя сверкающими ожерельями, цепями и кольцами с драгоценными камнями. Во время полёта нижняя часть тела ифрита выглядит как столб дыма и тлеющих углей.\n
**Надменные и жестокие.** Ифриты коварны, хитры и жестоки, а порой беспощадны. Они не выносят вынужденной службы и безжалостны в своей мести тем, кто причинил им вред. Сами ифриты этого не осознают, и считают свою расу честной и спокойной, хотя и признают, что немного эгоистичны.\n
**Злобные рабовладельцы.** Ифриты расценивают все остальные расы как врагов или потенциальных рабов. За рабами они совершают набеги на Материальный и стихийные планы. Ифриты правят как деспоты и тираны, возвышая лишь жесточайших из рабов. Те становятся надсмотрщиками, которые при помощи кнута держат в узде остальных рабов.\n
**Планарные налётчики.** Большинство ифритов живёт на Стихийном Плане Огня, в больших увенчанных куполами крепостях из чёрного стекла и базальта, окружённых кипящими огненными озёрами, или в знаменитом Латунном городе. Кроме того, по многим планам разбросаны военные аванпосты ифритов, переполненные их приспешниками и рабами.\n
На Материальном Плане ифриты обитают в жарких местах, таких как вулканы или пустыни. Их любовь к пустыням приводит к конфликтам с джиннами, которые ездят на пустынных смерчах, и связанными с землёй дао. Ифриты ненавидят маридов, с которыми враждуют весь период существования обеих рас.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_ELEMENTAL,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:52',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 16,
      cubeType: 10,
      cubeBonus: 112,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 60,
    },
    params: {
      [PARAM_STR]: 22,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 24,
      [PARAM_INT]: 16,
      [PARAM_WIT]: 15,
      [PARAM_CHA]: 16,
    },
    saveThrowCollection: {
      [PARAM_INT]: 7,
      [PARAM_WIT]: 6,
      [PARAM_CHA]: 7,
    },
    immunityList: [
      DAMAGE_FIRE,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 12,
      },
    ],
    languageList: [
      LANG_IGNAN,
    ],
    cr: CR_11,
    featureList: [
      {
        name: 'Элементальная гибель',
        description: `Если ифрит умирает, его тело распадается во вспышке огня и клубах дыма, оставляя только снаряжение, которое ифрит носил и нёс.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 15,
      spellAttackBonus: 7,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            SPELL_DETECT_MAGIC,
          ],
        },
        {
          limit: {
            count: 3,
            period: 'день',
          },
          list: [
            SPELL_ENLARGE_REDUCE,
            SPELL_TONGUES,
          ],
        },
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_GASEOUS_FORM,
            SPELL_INVISIBILITY,
            SPELL_MAJOR_IMAGE,
            SPELL_WALL_OF_FIRE,
            {
              id: SPELL_CONJURE_ELEMENTAL,
              comment: 'только огненный элементаль',
            },
            SPELL_PLANE_SHIFT,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Мультиатака',
        description: `Ифрит совершает две атаки скимитаром, либо два раза использует **Метание пламени**.`,
      },
      {
        name: 'Скимитар',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_SLASHING,
              cubeCount: 2,
              cubeType: 6,
              cubeBonus: 6,
            },
            {
              type: DAMAGE_FIRE,
              cubeCount: 2,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Метание пламени',
        attack: {
          type: ACTION_RANGE_SPELL_ATTACK,
          bonus: 7,
          range: 120,
          target: 1,
          hit: {
            type: DAMAGE_FIRE,
            cubeCount: 5,
            cubeType: 6,
          },
        },
      },
    ],
  },
  {
    name: 'Марид',
    nameEn: 'Marid',
    id: CREATURE_MARID,
    description: `Живущие на Стихийном Плане Воды **мариды** — наиболее удивительные из гениев. Несмотря на то, что все гении обладают великой силой, даже слабейший из маридов считает себя сильнее ветреного джинна, приземлённого дао и дымящегося ифрита.\n
Огромные и рыбоподобные, мариды представляют собой странное зрелище в своих жилетах и ярко окрашенных шароварах. Их голоса бывают то мягкими, как дыхание морского бриза, то неистовыми и громоподобными, как штормовые волны, разбивающиеся о скалы. В полёте их тела обращаются в столбы пенистой воды.\n
**Повелители воды.** Вода — родная стихия маридов, и эти гении властны творить с ней всё, что пожелают. Марид может ходить по воде и дышать, находясь под водой. Он может создать воду или сформировать облако пара или туман из влаги, присутствующей в воздухе. Он может даже сам превратиться в туман или обратить мощь воды против своих врагов.\n
**Дома маридов.** Мариды редки на Материальном Плане. Они обитают в могучих магических коралловых крепостях в Стихийном Плане Воды. Их цитадели дрейфуют в глубинах вод, но в них есть отдельные залы с воздухом, где могут разместиться рабы или гости.\n
Мариды не требуют многого от своих рабов, но желают обладать ими просто ради положения в обществе. Мариды покидают свои пределы, дабы захватить людей, искусных в ремёслах или искусствах, шутов или рассказчиков, и обращают их в рабов при своём дворе.\n
**Иерархия тщеславия.** Все мариды претендуют на благородные титулы, и меж собой в высоте звания соревнуются шахи, султаны, муфтии и хедивы. Обычно титулы маридов не значат ничего, кроме степени высокомерия носящих их.\n
Мариды свысока смотрят на всех прочих — даже на других гениев — как на низших в различной степени существ, от «бедных родственников» до тех, от кого можно ждать лишь беды. Они терпят джиннов, не любят дао, и ненавидят ифритов.\n
Гуманоиды — это последние из существ, которых мариды готовы терпеть, но иногда они согласны заключать сделки с могучими волшебниками и властителями почти как с равными. Иногда это бывает ошибкой, ведь волшебники заключают маридов в морские раковины, кувшины и фляги. Сладкие речи и богатые дары — вот каким языком следует обращаться к мариду ничтожным смертным, знающим своё место.\n
**Своенравные рассказчики.** Мариды — непревзойдённые рассказчики, чьи излюбленные легенды прославляют доблесть всего рода маридов и, разумеется, самого рассказчика. Прихотливые и чудаковатые, они лгут часто и искусно. Они не всегда намеренно лгут, зачастую они лишь желают приукрасить свой рассказ. Мариды сочтут преступлением попытку низшего существа прервать их рассказ, а оскорбление марида — это верный способ обратить его гнев против себя.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_ELEMENTAL,
    ],
    aligmentId: ALIGMENT_CN,
    source: 'MM:53',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 17,
      cubeType: 10,
      cubeBonus: 136,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_FLY]: 60,
      [SPEED_SWIM]: 90,
    },
    params: {
      [PARAM_STR]: 22,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 26,
      [PARAM_INT]: 18,
      [PARAM_WIT]: 17,
      [PARAM_CHA]: 18,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 5,
      [PARAM_WIT]: 7,
      [PARAM_CHA]: 8,
    },
    resistanceList: [
      DAMAGE_ACID,
      DAMAGE_COLD,
      DAMAGE_ELECTRICITY,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 30,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 13,
      },
    ],
    languageList: [
      LANG_AQUAN,
    ],
    cr: CR_11,
    featureList: [
      {
        name: 'Амфибия',
        description: `Марид может дышать и воздухом и под водой.`,
      },
      {
        name: 'Элементальная гибель',
        description: `Если марид умирает, его тело распадается во взрыве воды и пены, оставляя только снаряжение, которое марид носил и нёс.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 16,
      spellAttackBonus: 8,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            SPELL_DETECT_EVIL_AND_GOOD,
            SPELL_DETECT_MAGIC,
            SPELL_PURIFY_FOOD_AND_DRINK,
            SPELL_CREATE_OR_DESTROY_WATER,
            SPELL_FOG_CLOUD,
          ],
        },
        {
          limit: {
            count: 3,
            period: 'день',
          },
          list: [
            SPELL_WATER_BREATHING,
            SPELL_WATER_WALK,
            SPELL_TONGUES,
          ],
        },
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_CONTROL_WEATHER,
            SPELL_GASEOUS_FORM,
            SPELL_INVISIBILITY,
            {
              id: SPELL_CONJURE_ELEMENTAL,
              comment: 'только водный элементаль',
            },
            SPELL_PLANE_SHIFT,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Мультиатака',
        description: `Марид совершает две атаки трезубцем.`,
      },
      {
        name: 'Трезубец',
        attack: {
          type: ACTION_MELEE_OR_RANGE_WEAPON_ATTACK,
          bonus: 10,
          range: {
            melee: 5,
            range: {
              normal: 20,
              max: 60,
            },
          },
          target: 1,
          hit: [
            [
              {
                type: DAMAGE_PIERCING,
                cubeCount: 2,
                cubeType: 6,
                cubeBonus: 6,
              },
              {
                type: DAMAGE_PIERCING,
                cubeCount: 2,
                cubeType: 8,
                cubeBonus: 6,
                comment: ', если используется двумя руками для совершения рукопашной атаки',
              },
            ],
          ],
        },
      },
      {
        name: 'Струя воды',
        description: `Марид магическим образом испускает струю воды 60-футовой линией шириной 5 футов. Все существа в этой линии должны совершить спасбросок Ловкости со Сл 16. При провале цель получает дробящий урон 21 (6к6) и, если её размер не больше Огромного, толкается на расстояние до 20 футов от марида и сбивается с ног. При успехе цель получает половину дробящего урона, но не толкается и не сбивается с ног.`,
      },
    ],
  },
  {
    name: 'Гидра',
    nameEn: 'Hydra',
    id: CREATURE_HYDRA,
    description: `Гидра это ужасная рептилия с телом крокодила и несколькими головами на длинных змеиных шеях. Хоть головы и можно отрубить, гидра магическим образом их очень быстро отращивает. У типичного представителя этого вида пять голов.\n
На заре времён Тиамат, Королева Злых Драконов, убила конкурирующее божество по имени Лернея, и рассеяла её кровь по мультивселенной. Каждая упавшая на землю капля породила многоголовую гидру, мучимую таким же сильным голодом, как ненависть павшего божества. Великие герои не раз испытывали свою силу в бою с такими существами.\n
**Неутолимый голод.** Чревоугодливая и прожорливая гидра хватает и рвёт свою жертву на части в припадке жора. Когда гидра зачистит всю округу от съедобных обитателей и прогонит прочь существ, достаточно умных, чтобы её сторониться, она уходит искать еду куда-нибудь ещё. Голод гидры настолько велик, что она никогда не наедается, её головы от голода даже могут начать нападать друг на друга, и таким образом существо может начать есть само себя живьём.\n
**Водные обитатели.** Гидры — природные пловцы, обитающие в реках, у побережья озёр, на мелководьях в океане и даже в болотах. Гидре обычно не требуется убежище от стихий, поэтому и логова она не устраивает. Только в холодном климате гидры бывают вынуждены искать пристанища в пещерах или руинах.\n
Когда гидра спит, как минимум одна её голова бодрствует, так что это существо очень сложно застать врасплох.`,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:54',
    armor: {
      ac: 15,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 15,
      cubeType: 12,
      cubeBonus: 75,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_SWIM]: 30,
    },
    params: {
      [PARAM_STR]: 20,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 20,
      [PARAM_INT]: 2,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 7,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 16,
      },
    ],
    cr: CR_8,
    featureList: [
      {
        name: 'Задержка дыхания',
        description: `Гидра может задержать дыхание на 1 час.`,
      },
      {
        name: 'Многочисленные головы',
        description: `У гидры пять голов. Пока у гидры больше одной головы, она совершает с преимуществом спасброски от испуга, глухоты, лишения сознания, ослепления, очарования и ошеломления. Если гидра за один ход получает урон 25 или больше, одна из её голов умирает. Если умрут все головы, умирает и гидра. В конце своего хода она отращивает по две головы за каждую умершую голову с конца её предыдущего хода, если только она не получала за этот период урон огнём. За каждую отращённую голову гидра восстанавливает по 10 хитов.`,
      },
      {
        name: 'Реагирующие головы',
        description: `За каждую голову после первой гидра получает дополнительную реакцию, которую можно использовать только для совершения провоцированных атак.`,
      },
      {
        name: 'Неусыпный',
        description: `Пока гидра спит, как минимум одна её голова бодрствует`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Гидра совершает столько атак укусом, сколько у неё есть голов.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 8,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 10,
            cubeBonus: 5,
          },
        },
      },
    ],
    isFemale: true,
  },
  {
    name: 'Гиппогриф',
    nameEn: 'Hippogriff',
    id: CREATURE_HIPPOGRIFF,
    description: `Гиппогриф — это существо, тайна происхождения которого затерялась в древности. У него крылья и передние лапы орла, задняя часть лошади, и голова, сочетающая черты обоих животных.\n
Гиппогрифы всеядны, и ведут уединённый образ жизни, выбирая себе спутников раз и навсегда, и редко удаляясь от гнезда более чем на несколько миль. Защищая своих детей или партнёра, гиппогриф сражается насмерть. Гиппогрифы живородящие, яиц они не откладывают.\n
Драконам, грифонам и вивернам нравится мясо гиппогрифов, поэтому они часто охотятся на этих существ.\n
**Летучие ездовые животные.** Выращенный в неволе гиппогриф может стать верным спутником и ездовым животным. Из всех существ, которые могут служить летучим ездовым животным, гиппогрифов легче всего приручить, и они будут самыми верными животными из всех, если их правильно дрессировать. `,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:55',
    armor: 11,
    hp: {
      cubeCount: 3,
      cubeType: 10,
      cubeBonus: 3,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 60,
    },
    params: {
      [PARAM_STR]: 17,
      [PARAM_DEX]: 13,
      [PARAM_CON]: 13,
      [PARAM_INT]: 2,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 8,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 15,
    },
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 15,
      },
    ],
    cr: CR_1,
    featureList: [
      {
        name: 'Острое зрение',
        description: `Гиппогриф совершает с преимуществом проверки Мудрости (Внимательность), полагающиеся на зрение.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Гиппогриф совершает две атаки: одну клювом, и одну когтями.`,
      },
      {
        name: 'Клюв',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 10,
            cubeBonus: 3,
          },
        },
      },
      {
        name: 'Когти',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 3,
          },
        },
      },
    ],
  },
  {
    name: 'Гитцерай зерт',
    nameEn: 'Githzerai zerth',
    id: CREATURE_GITHZERAI_ZERTH,
    description: `Опытных монахов гитцераев, лучше всего воплощающих учения и принципы Зертимона, зовут зертами. Эти могущественные и дисциплинированные монахи могут перемещать свои тела с одного плана на другой, используя лишь силу разума.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_HUMANOID,
      CREATURE_TYPE_GITH,
    ],
    aligmentId: ALIGMENT_LN,
    source: 'MM:58',
    armor: 17,
    hp: {
      cubeCount: 13,
      cubeType: 8,
      cubeBonus: 26,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 13,
      [PARAM_DEX]: 18,
      [PARAM_CON]: 15,
      [PARAM_INT]: 16,
      [PARAM_WIT]: 17,
      [PARAM_CHA]: 12,
    },
    saveThrowCollection: {
      [PARAM_STR]: 4,
      [PARAM_DEX]: 7,
      [PARAM_INT]: 6,
      [PARAM_WIT]: 6,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 6,
      [SKILL_ARCANA]: 6,
      [SKILL_INSIGHT]: 6,
    },
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 16,
      },
    ],
    languageList: [
      LANG_GITH,
    ],
    cr: CR_6,
    featureList: [
      {
        name: 'Психическая защита',
        description: `Пока гитцерай не носит доспех и не использует щит, к его КД добавляется модификатор Мудрости.`,
      },
    ],
    spellCast: {
      comment: 'псионика',
      baseStat: PARAM_WIT,
      saveThrowDc: 14,
      spellAttackBonus: 6,
      componentExclude: CAST_NONE,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            {
              id: SPELL_MAGE_HAND,
              comment: 'рука невидима',
            },
          ],
        },
        {
          limit: {
            count: 3,
            period: 'день',
          },
          list: [
            SPELL_SEE_INVISIBILITY,
            SPELL_FEATHER_FALL,
            SPELL_JUMP,
            SPELL_SHIELD,
          ],
        },
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_PHANTASMAL_KILLER,
            SPELL_PLANE_SHIFT,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Мультиатака',
        description: `Гитцерай совершает две атаки безоружным ударом.`,
      },
      {
        name: 'Безоружный удар',
        description: `Это считается атакой магическим оружием.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_BLUDGEONING,
              cubeCount: 2,
              cubeType: 6,
              cubeBonus: 4,
            },
            {
              type: DAMAGE_PSYCHIC,
              cubeCount: 3,
              cubeType: 8,
            },
          ],
        },
      },
    ],
  },
  {
    name: 'Гитцерай монах',
    nameEn: 'Githzerai monk',
    id: CREATURE_GITHZERAI_MONK,
    description: `Сосредоточенные философы и строгие аскеты, гитцераи следуют жёсткому жизненному укладу. Худощавые и жилистые, они носят одежду без изысков, держа своё мнение при себе и доверяя единицам чужаков. Отвернувшиеся от своих воинственных собратьев гитъянок, гитцераи придерживаются монашеского уклада, проживая на островах порядка, что находятся в бескрайнем море хаоса на плане Лимбо.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_HUMANOID,
      CREATURE_TYPE_GITH,
    ],
    aligmentId: ALIGMENT_LN,
    source: 'MM:58',
    armor: 14,
    hp: {
      cubeCount: 7,
      cubeType: 8,
      cubeBonus: 7,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 12,
      [PARAM_DEX]: 15,
      [PARAM_CON]: 12,
      [PARAM_INT]: 13,
      [PARAM_WIT]: 14,
      [PARAM_CHA]: 10,
    },
    saveThrowCollection: {
      [PARAM_STR]: 3,
      [PARAM_DEX]: 4,
      [PARAM_INT]: 3,
      [PARAM_WIT]: 4,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 4,
      [SKILL_INSIGHT]: 4,
    },
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    languageList: [
      LANG_GITH,
    ],
    cr: CR_2,
    featureList: [
      {
        name: 'Психическая защита',
        description: `Пока гитцерай не носит доспех и не использует щит, к его КД добавляется модификатор Мудрости.`,
      },
    ],
    spellCast: {
      comment: 'псионика',
      baseStat: PARAM_WIT,
      componentExclude: CAST_NONE,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            {
              id: SPELL_MAGE_HAND,
              comment: 'рука невидима',
            },
          ],
        },
        {
          limit: {
            count: 3,
            period: 'день',
          },
          list: [
            SPELL_SEE_INVISIBILITY,
            SPELL_FEATHER_FALL,
            SPELL_JUMP,
            SPELL_SHIELD,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Мультиатака',
        description: `Гитцерай совершает две атаки безоружным ударом.`,
      },
      {
        name: 'Безоружный удар',
        description: `Это считается атакой магическим оружием.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_BLUDGEONING,
              cubeCount: 1,
              cubeType: 8,
              cubeBonus: 2,
            },
            {
              type: DAMAGE_PSYCHIC,
              cubeCount: 2,
              cubeType: 8,
            },
          ],
        },
      },
    ],
  },
  {
    name: 'Гитъянки воитель',
    nameEn: 'Githyanki warrior',
    id: CREATURE_GITHYANKI_WARRIOR,
    description: `Гитъянки грабят бесчисленные миры с палуб своих астральных кораблей и спин красных драконов. Перья, бисер, драгоценные камни и металлы украшают их доспехи и оружие — легендарные серебряные мечи с которыми они прорубаются с боем через своих врагов. Вырвав свободу у свежевателей разума, гитъянки стали безжалостными завоевателями под руководством ужасной королевы-лича Влаакит.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_HUMANOID,
      CREATURE_TYPE_GITH,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:59',
    armor: {
      ac: 17,
      type: 'полулаты',
    },
    hp: {
      cubeCount: 9,
      cubeType: 8,
      cubeBonus: 9,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 15,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 12,
      [PARAM_INT]: 13,
      [PARAM_WIT]: 13,
      [PARAM_CHA]: 10,
    },
    saveThrowCollection: {
      [PARAM_CON]: 3,
      [PARAM_INT]: 3,
      [PARAM_WIT]: 3,
    },
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 11,
      },
    ],
    languageList: [
      LANG_GITH,
    ],
    cr: CR_3,
    spellCast: {
      comment: 'псионика',
      baseStat: PARAM_CHA,
      componentExclude: CAST_NONE,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            {
              id: SPELL_MAGE_HAND,
              comment: 'рука невидима',
            },
          ],
        },
        {
          limit: {
            count: 3,
            period: 'день',
          },
          list: [
            {
              id: SPELL_NONDETECTION,
              comment: 'только на себя',
            },
            SPELL_JUMP,
            SPELL_MISTY_STEP,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Мультиатака',
        description: `Гитъянки совершает две атаки двуручным мечом.`,
      },
      {
        name: 'Двуручный меч',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_SLASHING,
              cubeCount: 2,
              cubeType: 6,
              cubeBonus: 2,
            },
            {
              type: DAMAGE_PSYCHIC,
              cubeCount: 2,
              cubeType: 6,
            },
          ],
        },
      },
    ],
  },
  {
    name: 'Гитъянки рыцарь',
    nameEn: 'Githyanki knight',
    id: CREATURE_GITHYANKI_KNIGHT,
    description: `Гитъянки грабят бесчисленные миры с палуб своих астральных кораблей и спин красных драконов. Перья, бисер, драгоценные камни и металлы украшают их доспехи и оружие — легендарные серебряные мечи с которыми они прорубаются с боем через своих врагов. Вырвав свободу у свежевателей разума, гитъянки стали безжалостными завоевателями под руководством ужасной королевы-лича Влаакит.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_HUMANOID,
      CREATURE_TYPE_GITH,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:59',
    armor: {
      ac: 18,
      type: 'латный доспех',
    },
    hp: {
      cubeCount: 14,
      cubeType: 8,
      cubeBonus: 28,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 16,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 15,
      [PARAM_INT]: 14,
      [PARAM_WIT]: 14,
      [PARAM_CHA]: 15,
    },
    saveThrowCollection: {
      [PARAM_CON]: 5,
      [PARAM_INT]: 5,
      [PARAM_WIT]: 5,
    },
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 12,
      },
    ],
    languageList: [
      LANG_GITH,
    ],
    cr: CR_8,
    spellCast: {
      comment: 'псионика',
      baseStat: PARAM_INT,
      componentExclude: CAST_NONE,
      saveThrowDc: 13,
      spellAttackBonus: 5,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            {
              id: SPELL_MAGE_HAND,
              comment: 'рука невидима',
            },
          ],
        },
        {
          limit: {
            count: 3,
            period: 'день',
          },
          list: [
            {
              id: SPELL_NONDETECTION,
              comment: 'только на себя',
            },
            SPELL_JUMP,
            SPELL_MISTY_STEP,
            SPELL_TONGUES,
          ],
        },
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_TELEKINESIS,
            SPELL_PLANE_SHIFT,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Мультиатака',
        description: `Гитъянки совершает две атаки серебряным двуручным мечом.`,
      },
      {
        name: 'Серебряный двуручный меч',
        description: `Это атака магическим оружием. При критическом попадании по цели, находящейся в астральном теле (как при использовании заклинания _Проекция в астрал_ (Astral projection)), гитъянки может перерезать серебряную нить, соединяющую цель с материальным телом, вместо причинения урона.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 9,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_SLASHING,
              cubeCount: 2,
              cubeType: 6,
              cubeBonus: 6,
            },
            {
              type: DAMAGE_PSYCHIC,
              cubeCount: 3,
              cubeType: 6,
            },
          ],
        },
      },
    ],
  },
  {
    name: 'Вожак стаи гноллов',
    nameEn: 'Gnoll pack lord',
    id: CREATURE_GNOLL_PACK_LORD,
    description: `Стая гноллов возглавляется вожаком, правящим силой и хитростью. Лучшее из награбленного отходит к нему, будь то еда, ценные безделушки или магические предметы. В надеждах получить от Йеногу неуязвимость, он покрывает своё тело пирсингом, нелепыми трофеями и наносит на шерсть демонические печати.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_HUMANOID,
      CREATURE_TYPE_GNOLL,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:61',
    armor: {
      ac: 15,
      type: 'кольчужная рубаха',
    },
    hp: {
      cubeCount: 9,
      cubeType: 8,
      cubeBonus: 9,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 16,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 13,
      [PARAM_INT]: 8,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 9,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    languageList: [
      LANG_GNOLL,
    ],
    cr: CR_2,
    featureList: [
      {
        name: 'Буйство',
        description: `Если гнолл в свой ход опускает рукопашной атакой хиты существа до 0, он может бонусным действием переместиться на расстояние до половины своей скорости и совершить атаку укусом.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Гнолл совершает две атаки, либо глефой, либо длинным луком, и использует Разжигание буйства, если может.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 5,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
            },
          },
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 4,
            cubeBonus: 3,
          },
        },
      },
      {
        name: 'Глефа',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 1,
            cubeType: 10,
            cubeBonus: 3,
          },
        },
      },
      {
        name: 'Длинный лук',
        attack: {
          type: ACTION_RANGE_WEAPON_ATTACK,
          bonus: 4,
          range: {
            normal: 150,
            max: 600,
          },
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 8,
            cubeBonus: 2,
          },
        },
      },
      {
        name: 'Разжигание буйства',
        description: `Одно существо, которое гнолл видит в пределах 30 футов от себя, может реакцией совершить рукопашную атаку, если оно слышит гнолла и обладает особенностью Буйство.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Гнолл',
    nameEn: 'Gnoll',
    id: CREATURE_GNOLL,
    description: `Гноллы это человекоподобные дикари, что без предупреждения нападают на поселения на окраинах цивилизации, убивая своих жертв и пожирая их плоть.\n
**Демоническое происхождение.** Происхождение гноллов восходит ко времени, когда демонический повелитель Йеногу проник в Материальный План и устроил в нём буйство. Стаи обычных гиен следовали по его следу, подъедая убитых им жертв. Эти гиены были превращены в первых гноллов, и они продолжали следовать за Йеногу, пока его не изгнали обратно в Бездну. Гноллы же распространились по всему мира, став тяжелейшим напоминанием о демонической силе.\n
**Кочевники-налётчики.** Гноллы опасны ещё и потому, что нападают внезапно. Они приходят из пустоши, грабят и убивают, а затем идут дальше. Они налетают подобно саранче, разоряя поселения, и оставляют после себя лишь разрушенные здания, обглоданные трупы и осквернённую землю. Обычно гноллы выбирают лёгкие цели для своих набегов, но даже закованные в доспехи воины предпочитают отсидеться в замках, пока неистовствующая орда гноллов безнаказанно жжёт фермы, деревни и города, а людей убивают и пожирают.\n
Гноллы редко строят капитальные здания, и ремесло у них не ценится. Они не делают оружие и доспехи, но собирают их с трупов павших врагов. Они вещают уши, скальпы и другие трофеи своих противников на свои ободранные доспехи.\n
**Жажда крови.** Вы не найдёте ни добра, ни сострадания в сердце гнолла. Подобно демонам, им чужды угрызения совести, и их нельзя приручить или принудительно лишить желания разрушать. Безумная жажда крови гноллов делает их агрессивными ко всему живому, а когда у них нет общего врага, они грызутся между собой. Даже самые свирепые орки избегают объединяться с гноллами.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_HUMANOID,
      CREATURE_TYPE_GNOLL,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:61',
    armor: {
      ac: 15,
      type: 'шкурный доспех, щит',
    },
    hp: {
      cubeCount: 5,
      cubeType: 8,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 14,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 11,
      [PARAM_INT]: 6,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 7,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    languageList: [
      LANG_GNOLL,
    ],
    cr: CR_1_2,
    featureList: [
      {
        name: 'Буйство',
        description: `Если гнолл в свой ход опускает рукопашной атакой хиты существа до 0, он может бонусным действием переместиться на расстояние до половины своей скорости и совершить атаку укусом.`,
      },
    ],
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
            },
          },
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 4,
            cubeBonus: 2,
          },
        },
      },
      {
        name: 'Копьё',
        attack: {
          type: ACTION_MELEE_OR_RANGE_WEAPON_ATTACK,
          bonus: 4,
          range: {
            melee: 5,
            range: {
              normal: 20,
              max: 60,
            },
          },
          target: 1,
          hit: [
            [
              {
                type: DAMAGE_PIERCING,
                cubeCount: 1,
                cubeType: 6,
                cubeBonus: 2,
              },
              {
                type: DAMAGE_PIERCING,
                cubeCount: 1,
                cubeType: 8,
                cubeBonus: 2,
                comment: ', если используется двумя руками для совершения рукопашной атаки',
              },
            ],
          ],
        },
      },
      {
        name: 'Длинный лук',
        attack: {
          type: ACTION_RANGE_WEAPON_ATTACK,
          bonus: 3,
          range: {
            normal: 150,
            max: 600,
          },
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 8,
            cubeBonus: 1,
          },
        },
      },
    ],
  },
  {
    name: 'Гнолл клык Йеногу',
    nameEn: 'Gnoll fang of Yeenoghu',
    id: CREATURE_GNOLL_FANG_OF_YEENOGHU,
    description: `Празднование побед у гноллов сопровождается демоническими ритуалами и кровавыми приношениями Йеногу. Иногда демонический повелитель награждает своих последователей, делая одного из них одержимым демоном. Помеченный Йеногу счастливчик становится «клыком Йеногу» — избранным Властелина Гноллов. Гиена, пирующая врагом, которого поразил клык, подвергается ужасным трансформациям, становясь взрослым гноллом. Именно так Йеногу сотворил первых гноллов. Клык Йеногу может значительно увеличить популяцию гноллов в зависимости от количества гиен в округе. Единственный способ это предотвратить — убить клыка.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_GNOLL,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:61',
    armor: {
      ac: 14,
      type: 'шкурный доспех',
    },
    hp: {
      cubeCount: 10,
      cubeType: 8,
      cubeBonus: 20,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 17,
      [PARAM_DEX]: 15,
      [PARAM_CON]: 15,
      [PARAM_INT]: 10,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 13,
    },
    saveThrowCollection: {
      [PARAM_CON]: 4,
      [PARAM_WIT]: 2,
      [PARAM_CHA]: 3,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    languageList: [
      LANG_ABYSSAL,
      LANG_COMMON,
    ],
    cr: CR_4,
    featureList: [
      {
        name: 'Буйство',
        description: `Если гнолл в свой ход опускает рукопашной атакой хиты существа до 0, он может бонусным действием переместиться на расстояние до половины своей скорости и совершить атаку укусом.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Гнолл совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 5,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
            },
          },
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 6,
            cubeBonus: 3,
            comment: `, и цель должна преуспеть в спасброске Телосложения со Сл 12, иначе получит урон ядом 7 (2к6)`,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 1,
            cubeType: 8,
            cubeBonus: 3,
          },
        },
      },
    ],
  },
  {
    name: 'Глубинный гном',
    nameAlt: 'Свирфнеблин',
    nameEn: 'Gnome, deep',
    nameEnAlt: 'Svirfneblin',
    id: CREATURE_GNOME_DEEP,
    description: `Глубинные гномы, или свирфнеблины, живут глубоко под поверхностью земли в запутанных подземных проходах и искусственных пещерах. Они выживают благодаря скрытности, уму и упорству. Их серая кожа позволяет сливаться с окружающим камнем. Для своего размера свирфнеблины удивительно сильны и тяжелы. В среднем, взрослый глубинный гном весит от 100 до 120 фунтов, а в высоту достигает 3 футов.\n
Обычно анклав глубинных гномов хорошо укреплён, и в нем проживает несколько сотен свирфнеблинов. На случае нападения врагов в поселениях глубинных гномов есть секретные туннели для эвакуации.\n
**Разделение по полу.** Мужчины свирфнеблинов лысы, в то время как у женщин свалянные серые волосы. Пока мужчины ходят по окраинам в поисках врагов и месторождений драгоценных камней, женщины управляют анклавом.\n
**Собиратели драгоценных камней.** Свирфнеблины ищут драгоценные камни, особенно рубины, которые добывают из шахт глубоко в Подземье. Именно охота за самоцветами втягивает их в конфликты со злобоглазами, дроу, куо-тоа, дуэргарами и свежевателями разума. Но среди множества этих врагов больше всего гномы боятся и презирают безжалостных демонопоклонников дроу.\n
**Друзья земли.** Глубинного гнома частенько можно встретить в компании существ со Стихийного Плана Земли. Некоторые свирфнеблины могут призывать этих существ. Поселения гномов охраняются земляными существами, а также зорнами, которых обещают кормить самоцветами.`,
    sizeType: SIZE_SMALL,
    creatureTypeIdList: [
      CREATURE_TYPE_HUMANOID,
      CREATURE_TYPE_GNOME,
    ],
    aligmentId: ALIGMENT_NG,
    source: 'MM:62',
    armor: {
      ac: 15,
      type: 'кольчужная рубаха',
    },
    hp: {
      cubeCount: 3,
      cubeType: 6,
      cubeBonus: 6,
    },
    speed: {
      [SPEED_WALK]: 20,
    },
    params: {
      [PARAM_STR]: 15,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 14,
      [PARAM_INT]: 12,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 9,
    },
    skillCollection: {
      [SKILL_INVESTIGATION]: 3,
      [SKILL_PERCEPTION]: 2,
      [SKILL_STEALTH]: 4,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 12,
      },
    ],
    languageList: [
      LANG_GNOMISH,
      LANG_UNDERCOMMON,
      LANG_TERRAN,
    ],
    cr: CR_1_2,
    featureList: [
      {
        name: 'Каменный камуфляж',
        description: `Гном совершает с преимуществом проверки Ловкости (Скрытность), когда пытается спрятаться на каменистой местности.`,
      },
      {
        name: 'Гномья хитрость',
        description: `Гном совершает с преимуществом спасброски Интеллекта, Мудрости и Харизмы от магии.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_INT,
      componentExclude: CAST_MATERIAL,
      saveThrowDc: 11,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            {
              id: SPELL_NONDETECTION,
              comment: 'только на себя',
            },
          ],
        },
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_BLINDNESS_DEAFNESS,
            SPELL_DISGUISE_SELF,
            SPELL_BLUR,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Боевая кирка',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 8,
            cubeBonus: 2,
          },
        },
      },
      {
        name: 'Отравленный дротик',
        attack: {
          type: ACTION_RANGE_WEAPON_ATTACK,
          bonus: 4,
          range: {
            normal: 30,
            max: 120,
          },
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
            },
          },
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 4,
            cubeBonus: 2,
            comment: ` и цель должна преуспеть в спасброске Телосложения со Сл 12, иначе станет отравленной на 1 минуту. Цель может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе`,
          },
        },
      },
    ],
  },
  {
    name: 'Босс гоблинов',
    nameEn: 'Goblin boss',
    id: CREATURE_GOBLIN_BOSS,
    description: `Гоблинами правят самые сильные и умные среди них. Гоблинский босс может командовать отдельным логовом, тогда как гоблинский король или королева (которые являются не более чем теми же прославленными гоблинскими боссами) управляет сотнями гоблинов, живущих во множестве логовищ, что гарантирует выживание племени. Гоблинские боссы часто меняются, а племена захватываются хобгоблинскими воеводами или вождями медвежатников.`,
    sizeType: SIZE_SMALL,
    creatureTypeIdList: [
      CREATURE_TYPE_HUMANOID,
      CREATURE_TYPE_GOBLINOID,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:64',
    armor: {
      ac: 17,
      type: 'кольчужная рубаха, щит',
    },
    hp: {
      cubeCount: 6,
      cubeType: 6,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 10,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 10,
      [PARAM_INT]: 10,
      [PARAM_WIT]: 8,
      [PARAM_CHA]: 10,
    },
    skillCollection: {
      [SKILL_STEALTH]: 6,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 9,
      },
    ],
    languageList: [
      LANG_GOBLIN,
      LANG_COMMON,
    ],
    cr: CR_1,
    featureList: [
      {
        name: 'Ловкий побег',
        description: `Гоблин может в каждом своём ходу бонусным действием совершать действие Засада или Отход.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Гоблин совершает две атаки скимитаром. Вторая атака совершается с помехой.`
      },
      {
        name: 'Скимитар',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 1,
            cubeType: 6,
            cubeBonus: 2,
          },
        },
      },
      {
        name: 'Метательное копьё',
        attack: {
          type: ACTION_MELEE_OR_RANGE_WEAPON_ATTACK,
          bonus: 2,
          range: {
            melee: 5,
            range: {
              normal: 30,
              max: 120,
            },
          },
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 6,
          },
        },
      },
    ],
    reactionList: [
      {
        name: 'Перенаправление атаки',
        description: `Если существо, видимое гоблином, нацеливается на него атакой, гоблин выбирает другого гоблина в пределах 5 футов от себя. Эти два гоблина меняются местами, и целью становится выбранный гоблин.`
      },
    ],
  },
  {
    name: 'Гоблин',
    nameEn: 'Goblin',
    id: CREATURE_GOBLIN,
    description: `Гоблины — это маленькие, эгоистичные существа с чёрными сердцами, живущие в пещерах, брошенных рудниках, разграбленных подземельях и прочих неприглядных местах. Слабые по отдельности, гоблины собираются в большие — зачастую несметные — группы. Они жадны до власти и часто злоупотребляют теми полномочиями, которые у них уже есть.\n
Гоблиноиды. Гоблины принадлежат к семейству существ, называемых гоблиноидами. Их большие родственники, хобгоблины и медвежатники, любят подчинять себе гоблинов путём запугивания. Гоблины ленивые и расхлябанные, что делает их плохими
слугами, рабочими или охраной.\n
**Злорадство.** Ведомые жадностью и злобой, гоблины не способны на помощь, но всегда рады нечастым моментам своего триумфа. Они прыгают и пляшут, радуясь, когда победа остаётся за ними. А когда заканчивается празднество, они упиваются пытками других существ и прочими пакостями.\n
Лидеры и последователи. Гоблинами правят самые сильные и умные среди них. Гоблинский босс может командовать отдельным логовом, тогда как гоблинский король или королева (которые являются не более чем теми же прославленными гоблинскими боссами) управляет сотнями гоблинов, живущих во множестве логовищ, что гарантирует выживание племени. Гоблинские боссы часто меняются, а племена захватываются хобгоблинскими воеводами или вождями медвежатников.\n
**Замысловатые логова.** Гоблины увешивают свои логова сигнализацией, которая оповещает о вторжении. Их логова пронизаны запутанными узкими туннелями и норами, через которые человек не сможет пролезть. Гоблины же могут с их помощью сбежать или неожиданно обойти противника с тыла.\n
Крысоводы и наездники на волках. Гоблинов тянет к крысам и волкам, которых они взращивают своими спутниками и верховыми животными, соответственно. Подобно крысам, гоблины избегают солнечного света и днём спят под землёй. Как волки, они стайные охотники, которые становятся тем смелее, чем больше их число. Охотясь на спинах волков, они изматывают врагов, часто нападая и тут же отступая.\n
**Почитатели Маглубиета.** Маглубиет Могучий, Владыка Глубин и Тьмы — величайший из богов гоблиноидов. Большинство гоблинов представляет его одиннадцатифутовым гоблином, покрытым боевыми шрамами, с чёрной кожей и горящими пламенем глазами. Ему поклоняются не из любви, но из страха. Гоблины верят, что духи погибших в битве гоблинов вступают в ряды его армии на Ахероне. Этой «привилегии» — вечной тирании Маглубиета Могучего — большинство гоблинов страшится даже более самой смерти.`,
    sizeType: SIZE_SMALL,
    creatureTypeIdList: [
      CREATURE_TYPE_HUMANOID,
      CREATURE_TYPE_GOBLINOID,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:64',
    armor: {
      ac: 15,
      type: 'кожаный доспех, щит',
    },
    hp: {
      cubeCount: 2,
      cubeType: 6,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 8,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 10,
      [PARAM_INT]: 10,
      [PARAM_WIT]: 8,
      [PARAM_CHA]: 8,
    },
    skillCollection: {
      [SKILL_STEALTH]: 6,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 9,
      },
    ],
    languageList: [
      LANG_GOBLIN,
      LANG_COMMON,
    ],
    cr: CR_1_4,
    featureList: [
      {
        name: 'Ловкий побег',
        description: `Гоблин может в каждом своём ходу бонусным действием совершать действие Засада или Отход.`,
      },
    ],
    actionList: [
      {
        name: 'Скимитар',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 1,
            cubeType: 6,
            cubeBonus: 2,
          },
        },
      },
      {
        name: 'Короткий лук',
        attack: {
          type: ACTION_RANGE_WEAPON_ATTACK,
          bonus: 4,
          range: {
            normal: 80,
            max: 320,
          },
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 6,
            cubeBonus: 2,
          },
        },
      },
    ],
  },
  {
    name: 'Глиняный голем',
    nameEn: 'Clay golem',
    id: CREATURE_CLAY_GOLEM,
    description: `Этот громоздкий, изваянный из глины голем ростом выше обычного человека. Он сделан в форме человека, но пропорции не соблюдены.\n
Глиняные големы часто одарены священной целью жрецами. Однако, глина — слабый сосуд для жизненной силы. Если голем повреждён, стихийный дух, привязанный к нему, может вырваться на свободу. Такие големы приходят в ярость, круша всё вокруг себя до тех пор, пока не будут уничтожены или полностью восстановлены.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_CONSTRUCT,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:66',
    armor: {
      ac: 14,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 14,
      cubeType: 10,
      cubeBonus: 56,
    },
    speed: {
      [SPEED_WALK]: 20,
    },
    params: {
      [PARAM_STR]: 20,
      [PARAM_DEX]: 9,
      [PARAM_CON]: 18,
      [PARAM_INT]: 3,
      [PARAM_WIT]: 8,
      [PARAM_CHA]: 1,
    },
    immunityList: [
      DAMAGE_ACID,
      DAMAGE_PSYCHIC,
      DAMAGE_POISON,
      DAMAGE_NONMAGIC_NONADAMANTINE_WEAPON,
    ],
    immunityConditionList: [
      CONDITION_FRIGHTENED,
      CONDITION_EXHAUSTION,
      CONDITION_PETRIFIED,
      CONDITION_POISONED,
      CONDITION_CHARMED,
      CONDITION_PARALYZED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 9,
      },
    ],
    languageList: [
      {
        id: LANG_ITS_CREATOR,
        doNotSpeak: true,
      },
    ],
    cr: CR_9,
    featureList: [
      {
        name: 'Поглощение кислоты',
        description: `Каждый раз, когда голем должен получить урон кислотой, он не получает урон, и вместо этого восстанавливает число хитов, равное причиняемому урону кислотой.`,
      },
      {
        name: 'Берсерк',
        description: `Каждый раз, когда голем начинает ход с 60 или меньше хитами, бросайте к6. Если выпадет «6», голем становится берсерком. Будучи берсерком, он в каждом своём ходу атакует ближайшее видимое существо. Если поблизости нет существ, к которым можно подойти и атаковать, голем атакует предмет, предпочитая предметы с размером меньше своего. Став берсерком, голем остаётся им, пока его не уничтожат или пока он не восстановит все свои хиты.`,
      },
      {
        name: 'Неизменяемая форма',
        description: `Голем обладает иммунитетом ко всем заклинаниям и эффектам, изменяющим его форму.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Голем совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
      {
        name: 'Магическое оружие',
        description: `Атаки оружием голема являются магическими.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Голем совершает два размашистых удара.`,
      },
      {
        name: 'Размашистый удар',
        description: `Если цель — существо, она должна преуспеть в спасброске Телосложения со Сл 15, иначе максимум её хитов уменьшится на количество, равное полученному урону. Цель умирает, если эта атака уменьшает максимум хитов до 0. Уменьшение длится до тех пор, пока не будет устранено заклинанием _Высшее восстановление_ (Greater restoration) или подобной магией.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 8,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 5,
          },
        },
      },
      {
        name: 'Спешка',
        description: `До конца своего следующего хода голем магическим образом получает бонус +2 к КД, совершает с преимуществом спасброски Ловкости, и может использовать атаку размашистым ударом бонусным действием.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Железный голем',
    nameEn: 'Iron golem',
    id: CREATURE_IRON_GOLEM,
    description: `Железный голем — сильнейший из големов, массивный высокий великан из тяжёлого металла. Форма железного голема может быть любой, но большинство сделано в виде огромных живых доспехов. Его кулаки могут убить существо одним ударом, а его лязгающая походка сотрясает землю под ногами. Железные големы носят огромные мечи для увеличения досягаемости и могут изрыгать облака смертельного яда.\n
Тело железного голема выплавлено с добавлением редких примесей и добавок. Другие големы имеют уязвимость, заключающуюся в их материале или силе стихийного духа, связанного с ним, а железные големы были созданы быть практически неуязвимыми. Их металлические тела лишают свободы управляющих духов, и они восприимчивы только к оружию, наполненному магией или силой адамантина. `,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_CONSTRUCT,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:67',
    armor: {
      ac: 20,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 20,
      cubeType: 10,
      cubeBonus: 100,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 24,
      [PARAM_DEX]: 9,
      [PARAM_CON]: 20,
      [PARAM_INT]: 3,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 1,
    },
    immunityList: [
      DAMAGE_FIRE,
      DAMAGE_PSYCHIC,
      DAMAGE_POISON,
      DAMAGE_NONMAGIC_NONADAMANTINE_WEAPON,
    ],
    immunityConditionList: [
      CONDITION_FRIGHTENED,
      CONDITION_EXHAUSTION,
      CONDITION_PETRIFIED,
      CONDITION_POISONED,
      CONDITION_CHARMED,
      CONDITION_PARALYZED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    languageList: [
      {
        id: LANG_ITS_CREATOR,
        doNotSpeak: true,
      },
    ],
    cr: CR_16,
    featureList: [
      {
        name: 'Поглощение огня',
        description: `Каждый раз, когда голем должен получить урон огнём, он не получает урон, и вместо этого восстанавливает число хитов, равное причиняемому урону огнём.`,
      },
      {
        name: 'Неизменяемая форма',
        description: `Голем обладает иммунитетом ко всем заклинаниям и эффектам, изменяющим его форму.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Голем совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
      {
        name: 'Магическое оружие',
        description: `Атаки оружием голема являются магическими.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Голем совершает две рукопашные атаки.`,
      },
      {
        name: 'Размашистый удар',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 13,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 3,
            cubeType: 10,
            cubeBonus: 7,
          },
        },
      },
      {
        name: 'Меч',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 13,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 3,
            cubeType: 10,
            cubeBonus: 7,
          },
        },
      },
      {
        name: 'Ядовитое дыхание',
        description: `Голем выдыхает ядовитый газ 15-футовым конусом. Все существа в этой области должны совершить спасбросок Телосложения со Сл 19, получая урон ядом 45 (10к8) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 6,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Каменный голем',
    nameEn: 'Stone golem',
    id: CREATURE_STONE_GOLEM,
    description: `Вырезанные и выдолбленные из камня в виде впечатляющих высоких статуй, каменные големы сильно различаются размером и формами. Хотя многие имеют черты гуманоидов, каменные големы могут быть вырезаны в любой форме, которую может представить скульптор. Древние каменные големы, найденные в закрытых гробницах или у ворот затерянных городов, иногда имеют форму гигантских зверей.\n
Как и другие големы, каменные големы почти невосприимчивы к заклинаниям и обычному оружию. Существа, сражающиеся с каменным големом, могут почувствовать слабость и замедление хода времени, как если бы они сами были сделаны из камня.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_CONSTRUCT,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:67',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 17,
      cubeType: 10,
      cubeBonus: 85,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 22,
      [PARAM_DEX]: 9,
      [PARAM_CON]: 20,
      [PARAM_INT]: 3,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 1,
    },
    immunityList: [
      DAMAGE_PSYCHIC,
      DAMAGE_POISON,
      DAMAGE_NONMAGIC_NONADAMANTINE_WEAPON,
    ],
    immunityConditionList: [
      CONDITION_FRIGHTENED,
      CONDITION_EXHAUSTION,
      CONDITION_PETRIFIED,
      CONDITION_POISONED,
      CONDITION_CHARMED,
      CONDITION_PARALYZED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    languageList: [
      {
        id: LANG_ITS_CREATOR,
        doNotSpeak: true,
      },
    ],
    cr: CR_10,
    featureList: [
      {
        name: 'Неизменяемая форма',
        description: `Голем обладает иммунитетом ко всем заклинаниям и эффектам, изменяющим его форму.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Голем совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
      {
        name: 'Магическое оружие',
        description: `Атаки оружием голема являются магическими.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Голем совершает два размашистых удара.`,
      },
      {
        name: 'Размашистый удар',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 3,
            cubeType: 8,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Замедление',
        description: `Голем нацеливается на одно или несколько существ, видимых в пределах 10 футов от себя. Все цели должны совершить спасбросок Мудрости со Сл 17 от этой магии. При провале цель не может совершать реакции, её скорость уменьшается вдвое, и она не может совершать более одной атаки за свой ход. Кроме того, цель может в свой ход совершать либо действие, либо бонусное действие, но не то и другое. Эти эффекты длятся 1 минуту. Цель может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Мясной голем',
    nameAlt: 'Голем из плоти',
    nameEn: 'Flesh golem',
    id: CREATURE_FLESH_GOLEM,
    description: `Мясной голем — ужасный набор гуманоидных частей тел, сшитых и скреплённых вместе в мускулистого громилу, наполненного внушительной силой. Его мозг способен к простым рассуждениям, хотя его мысли редко бывают более сложными, чем у малого ребёнка. Слои мышц голема реагируют со скоростью молнии, даруя существу ловкостью и силу. Мощные чары защищают его кожу, отражая заклинания и всё оружие, кроме самого мощного.\n
Мясной голем передвигается шатающейся одеревенелой походкой, и не полностью контролирует своё тело. Его мёртвая плоть не является идеальным хранилищем для стихийного духа, который иногда бессвязно воет, чтобы выпустить свою ярость. Если голем освободится от воли создателя, он впадает в неистовство до тех пор, пока не будет успокоен, или пока его оболочка из плоти не будет разрушена или полностью восстановлена.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_CONSTRUCT,
    ],
    aligmentId: ALIGMENT_N,
    source: 'MM:68',
    armor: 9,
    hp: {
      cubeCount: 11,
      cubeType: 8,
      cubeBonus: 44,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 19,
      [PARAM_DEX]: 9,
      [PARAM_CON]: 18,
      [PARAM_INT]: 6,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 5,
    },
    immunityList: [
      DAMAGE_ELECTRICITY,
      DAMAGE_POISON,
      DAMAGE_NONMAGIC_NONADAMANTINE_WEAPON,
    ],
    immunityConditionList: [
      CONDITION_FRIGHTENED,
      CONDITION_EXHAUSTION,
      CONDITION_PETRIFIED,
      CONDITION_POISONED,
      CONDITION_CHARMED,
      CONDITION_PARALYZED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    languageList: [
      {
        id: LANG_ITS_CREATOR,
        doNotSpeak: true,
      },
    ],
    cr: CR_5,
    featureList: [
      {
        name: 'Берсерк',
        description: `Каждый раз, когда голем начинает ход с 40 или меньше хитами, бросайте к6. Если выпадет «6», голем становится берсерком. Будучи берсерком, он в каждом своём ходу атакует ближайшее видимое существо. Если поблизости нет существ, к которым можно подойти и атаковать, голем атакует предмет, предпочитая предметы с размером меньше своего. Став берсерком, голем остаётся им, пока его не уничтожат или пока он не восстановит все свои хиты.\n
Создатель голема, находящийся в пределах 60 футов от ставшего берсерком голема, может попытаться успокоить его, отдавая чёткие команды убедительным голосом. Голем должен слышать создателя, который действием совершает проверку Харизмы (Убеждение) со Сл 15. При успехе голем перестаёт быть берсерком. Если голем получает урон, когда у него 40 или меньше хитов, он может снова стать берсерком.`,
      },
      {
        name: 'Боязнь огня',
        description: `Если голем получает урон огнём, он до конца своего следующего хода совершает с помехой броски атаки и проверки характеристик.`,
      },
      {
        name: 'Неизменяемая форма',
        description: `Голем обладает иммунитетом ко всем заклинаниям и эффектам, изменяющим его форму.`,
      },
      {
        name: 'Поглощение электричества',
        description: `Каждый раз, когда голем должен получить урон электричеством, он не получает урон, и вместо этого восстанавливает число хитов, равное причиняемому урону электричеством.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Голем совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
      {
        name: 'Магическое оружие',
        description: `Атаки оружием голема являются магическими.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Голем совершает два размашистых удара.`,
      },
      {
        name: 'Размашистый удар',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 4,
          },
        },
      },
    ],
  },
  {
    name: 'Гомункул',
    nameEn: 'Homunculus',
    id: CREATURE_HOMUNCULUS,
    description: `Смешав глину, пепел, корень мандрагоры и кровь, можно с помощью специального ритуала создать верного компаньона размером с белку.\n
Гомункул это конструкт, действующий как продолжение своего создателя с двусторонним обменом мыслей, чувств и языков через мистическую связь. У хозяина может быть только один гомункул одновременно (попытка создать ещё одного всегда проваливается), и когда умирает хозяин, умирает и гомункул.\n
**Обмен сознаний.** Гомункул знает всё, что знает его создатель, включая языки, на которых тот может говорить и читать. Кроме того, всё, что ощущает конструкт, становится известно его хозяину, даже на невероятно далёких расстояниях, но только если они оба находятся на одном и том же плане. Действуя как шпион, разведчик, агент или посланец, гомункул это бесценный слуга для заклинателя, вовлечённого в секретный эксперимент или приключение.`,
    sizeType: SIZE_TINY,
    creatureTypeIdList: [
      CREATURE_TYPE_CONSTRUCT,
    ],
    aligmentId: ALIGMENT_N,
    source: 'MM:69',
    armor: {
      ac: 13,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 2,
      cubeType: 4,
    },
    speed: {
      [SPEED_WALK]: 20,
      [SPEED_FLY]: 40,
    },
    params: {
      [PARAM_STR]: 4,
      [PARAM_DEX]: 15,
      [PARAM_CON]: 11,
      [PARAM_INT]: 10,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 7,
    },
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_POISONED,
      CONDITION_CHARMED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    languageList: [
      {
        id: LANG_ITS_CREATOR,
        doNotSpeak: true,
      },
    ],
    cr: CR_0,
    featureList: [
      {
        name: 'Телепатическая связь',
        description: `Если гомункул и его хозяин находятся на одном плане существования, гомункул может магическим образом передавать всё, что ощущает, своему хозяину, и они могут общаться между собой телепатически.`,
      },
    ],
    actionList: [
      {
        name: 'Укус',
        description: `Цель должна преуспеть в спасброске Телосложения со Сл 10, иначе станет отравленной на 1 минуту. Если спасбросок провален на 5 или больше единиц, цель вместо этого становится отравленной на 5 (1к10) минут, и пока отравлена таким образом, она лишена сознания.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
            },
          },
          hit: {
            type: DAMAGE_PIERCING,
            cubeBonus: 1,
          },
        },
      },
    ],
  },
  {
    name: 'Горгона',
    nameEn: 'Gorgon',
    id: CREATURE_GORGON,
    description: `Немногие остаются в живых после встречи с горгоной и могут рассказать об этом. Тело этого существа покрыто металлическими пластинами, а из ноздрей валит зелёный пар.\n
**Жуткое строение.** Окрас железных пластин горгон варьируется от воронёно-чёрного до серебристо-белого, но эта естественная броня никоим образом не сковывает движение и не ограничивает мобильность. Их тела выделяют жир, смазывающий пластины. Больные или обездвиженные горгоны, как лишаем или плесенью, покрываются ржавчиной. Когда заржавевшая горгона двигается, пластины трутся друг об друга, издавая визг и скрежет.\n
**Чудовищный хищник.** Когда горгона замечает свою потенциальную жертву, она нападает с устрашающим металлическим звоном. Попав, она сбивает врага и опрокидывает его навзничь, а затем затаптывает до смерти своими ужасными копытами. Окружённая противниками, горгона выдыхает смертоносные испарения, чтобы поразить существ, обратив их в камень. Проголодавшись, она разбивает окаменевшую добычу на куски и, используя свои крепкие зубы, перемалывает камни в песок, которым питается. Целая сеть пробитых в чаще троп и поваленных деревьев окружает логово горгоны, заваленное не съеденными обломками поверженных врагов.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:70',
    armor: {
      ac: 19,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 12,
      cubeType: 10,
      cubeBonus: 48,
    },
    speed: {
      [SPEED_WALK]: 40,
    },
    params: {
      [PARAM_STR]: 20,
      [PARAM_DEX]: 11,
      [PARAM_CON]: 18,
      [PARAM_INT]: 2,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 7,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 4,
    },
    immunityConditionList: [
      CONDITION_PETRIFIED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    cr: CR_5,
    featureList: [
      {
        name: 'Растаптывающий рывок',
        description: `Если горгона переместится как минимум на 20 футов по прямой к существу, а затем в том же ходу попадёт по нему атакой бодания, эта цель должна преуспеть в спасброске Силы со Сл 16, иначе будет сбита с ног. Если цель сбита с ног, горгона может бонусным действием совершить по ней одну атаку копытами.`,
      },
    ],
    actionList: [
      {
        name: 'Бодание',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 8,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 12,
            cubeBonus: 5,
          },
        },
      },
      {
        name: 'Копыта',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 8,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 5,
          },
        },
      },
      {
        name: 'Окаменяющее дыхание',
        description: `Горгона выдыхает окаменяющий газ 30-футовым конусом. Все существа в этой области должны преуспеть в спасброске Телосложения со Сл 13. При провале цель начинает превращаться в камень и становится опутанной. Опутанная цель должна повторить спасбросок в конце своего следующего хода. При успехе эффект на этой цели оканчивается. При провале цель становится окаменевшей, пока не будет вылечена заклинанием _Высшее восстановление_ или подобной магией.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
    isFemale: true,
  },
  {
    name: 'Горгулья',
    nameEn: 'Gargoyle',
    id: CREATURE_GARGOYLE,
    description: `Облик безжизненных горгулий, украшающих вершины величественных зданий, навеян этими злобными существами стихии земли, похожими на гротескные дьявольские статуи. Горгулья таится среди каменных стен и руин, неподвижная, подобно каменным скульптурам, и наслаждается тем ужасом, который она вселяет, когда оживает, и той болью, которую причиняет своим жертвам.\n
**Оживший камень.** Горгульи гнездятся на утёсах и скалах, а также на выступах в пещерах. Они обитают на городских крышах, подобно стервятникам, примостившись среди высоких каменных арок и контрфорсов замков и соборов, и способны сидеть настолько смирно, что выглядят безжизненными. В таком состоянии горгулья может находиться годами, что делает её идеальным стражем.\n
**Зловещая репутация.** Горгульи известны своей жестокостью. Статуи в виде горгулий присутствуют в архитектуре многих культур, и они призваны отпугивать злоумышленников. Несмотря на то, что это всего лишь статуи, среди них могут затаиться настоящие горгульи, поджидающие своих жертв. Со скуки горгулья может ловить и мучать птиц и грызунов, но чем дольше она ждёт, тем сильнее жаждет навредить разумным существам.\n
**Безжалостные слуги.** Хитрые существа с лёгкостью могут заставить горгулий служить себе. Им нравятся простые задачи, такие как охрана хозяйского дома, пытки и убийство нарушителей, в общем, всё, что связано с минимумом усилий и максимум боли и насилия.\n
Из-за склонности к беспричинному хаосу и разрушению горгульи иногда служат демонам. Могущественные заклинатели также без труда привлекают горгулий для охраны ворот и стен. Горгульи обладают терпением и стойкостью камня, и годами могут служить даже жесточайшему хозяину, не выражая недовольства.\n
**Стихийная натура.** Горгулье не нужен воздух, еда, питьё и сон.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_ELEMENTAL,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:71',
    armor: {
      ac: 15,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 7,
      cubeType: 8,
      cubeBonus: 21,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_FLY]: 60,
    },
    params: {
      [PARAM_STR]: 15,
      [PARAM_DEX]: 11,
      [PARAM_CON]: 16,
      [PARAM_INT]: 6,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 7,
    },
    resistanceList: [
      DAMAGE_NONMAGIC_NONADAMANTINE_WEAPON,
    ],
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_EXHAUSTION,
      CONDITION_PETRIFIED,
      CONDITION_POISONED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    cr: CR_2,
    featureList: [
      {
        name: 'Обманчивая внешность',
        description: `Пока горгулья остаётся без движения, она неотличима от неживой статуи.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Горгулья совершает две атаки: одну укусом и одну когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 6,
            cubeBonus: 2,
          },
        },
      },
      {
        name: 'Когти',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 1,
            cubeType: 6,
            cubeBonus: 2,
          },
        },
      },
    ],
    isFemale: true,
  },
  {
    name: 'Грелл',
    nameEn: 'Grell',
    id: CREATURE_GRELL,
    description: `Грелл походит на летающий мозг с узким острым клювом. Под толстой волокнистой шкурой его трёхметровых щупалец скрываются сотни кольцевых мышц. Острые шипы на концах щупальцев впрыскивают парализующий яд. Грелл может частично скрывать эти шипы в щупальцах, чтобы взаимодействовать с объектами, которые не хочет проткнуть или разорвать.\n
У греллов нет глаз, а летают они с помощью своего рода левитации. У них острый слух, а кожа чувствительна к колебаниям воздуха и электрическим полям, благодаря чему они легко обнаруживают существ в непосредственной близости. Это существо чувствует и двигается благодаря своей способности к управлению электричеством, так что и молнию оно может поглотить без вреда.\n
Бывает, что греллы, одиночки по своей природе, собираются в маленькие группы, называемые шабашами.\n
**Парящие налётчики.** Греллы предпочитают нападать либо на одиночек, либо на отстающих, зависая под потолком коридоров или пещер, пока удобная жертва не пройдёт снизу, где тут же будет опутана щупальцами. Парализованное существо грелл относит в своё логово.\n
**Инородные пожиратели.** Греллы — иноземные хищники, делящие всех других существ на три категории: съедобное, несъедобное и Великие Едоки (те немногие существа, что могут охотиться на греллов). Их не мучает совесть от нападений на съедобных существ, в том числе и гуманоидов. Однако больших существ, которых тяжело нести, они избегают.\n
Иногда грелл может позволить искателям приключений сражаться с другими угрозами в подземелье, которое он зовёт домом. Держась в стороне, пока герои разбираются с большей угрозой, он ждёт, когда сможет нанести удар. `,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_ABERRATION,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:72',
    armor: 12,
    hp: {
      cubeCount: 10,
      cubeType: 8,
      cubeBonus: 10,
    },
    speed: {
      [SPEED_WALK]: 10,
      [SPEED_FLY]: {
        value: 30,
        comment: 'парит',
      },
    },
    params: {
      [PARAM_STR]: 15,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 13,
      [PARAM_INT]: 12,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 9,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 4,
      [SKILL_STEALTH]: 6,
    },
    immunityList: [
      DAMAGE_ELECTRICITY,
    ],
    immunityConditionList: [
      CONDITION_BLINDED,
      CONDITION_PRONE,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
        comment: 'слеп за пределами этого радиуса',
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    languageList: [
      LANG_GRELL,
    ],
    cr: CR_3,
    actionList: [
      {
        name: 'Мультиатака',
        description: `Грелл совершает две атаки: одну щупальцами, и одну клювом.`,
      },
      {
        name: 'Щупальца',
        description: `Цель должна преуспеть в спасброске Телосложения со Сл 11, иначе станет отравленной на 1 минуту. Отравленная цель парализована, и может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект при успехе.\n
Цель также становится схваченной (Сл высвобождения равна 15). Если размер цели не больше Среднего, она также становится опутанной, пока не перестанет быть схваченной. Держа цель в захвате, грелл совершает с преимуществом броски атаки по ней, и не может использовать эту атаку против других целей. Когда грелл перемещается, все существа с размером не больше Среднего, схваченные им, перемещаются вместе с ним.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 10,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
            },
          },
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 10,
            cubeBonus: 2,
          },
        },
      },
      {
        name: 'Клюв',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
            },
          },
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 4,
            cubeBonus: 2,
          },
        },
      },
    ],
  },
  {
    name: 'Визгун',
    nameEn: 'Shrieker',
    id: CREATURE_SHRIEKER,
    description: `Визгуны — это грибы размером с человека, которые издают пронзительные вопли, отпугивая потревоживших их существ. Другие существа могут использовать их как сигнал о приближении потенциальной жертвы, а различные разумные расы Подземья разводят визгунов на окраинах своих поселений, чтобы отвадить непрошенных гостей.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_PLANT,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:74',
    armor: 5,
    hp: {
      cubeCount: 3,
      cubeType: 8,
    },
    speed: {
      [SPEED_WALK]: 0,
    },
    params: {
      [PARAM_STR]: 1,
      [PARAM_DEX]: 1,
      [PARAM_CON]: 10,
      [PARAM_INT]: 1,
      [PARAM_WIT]: 3,
      [PARAM_CHA]: 1,
    },
    immunityConditionList: [
      CONDITION_DEAFENED,
      CONDITION_FRIGHTENED,
      CONDITION_BLINDED,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 30,
        comment: 'слеп за пределами этого радиуса',
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 6,
      },
    ],
    cr: CR_0,
    actionList: [
      {
        name: 'Обманчивая внешность',
        description: `Пока визгун остаётся без движения, он неотличим от обычного гриба.`,
      },
      {
        name: 'Визг',
        description: `Если в пределах 30 футов от визгуна появляется яркий свет или существо, визгун испускает визг, слышимый на расстоянии 300 футов. Визгун продолжает кричать, пока не пройдёт 1к4 раунда после того, как источник беспокойства окажется за пределами его восприятия.`,
      },
    ],
  },
  {
    name: 'Газовая спора',
    nameEn: 'Gas spore',
    id: CREATURE_GAS_SPORE,
    description: `Первые газовые споры, как считается, появились из мёртвых злобоглазов, чьи гниющие трупы напитали грибы-паразиты искажённой магией. Прошло много времени, и газовые споры превратились в отдельное растение, быстро и целеустремлённо растущее уже безо всяких трупов, создавая злобно выглядящую насмешку над самым страшным обитателем Подземья.\n
**Форма злобоглаза.** Газовая спора — это сферический пузыревидный гриб, напоминающий издалека злобоглаза, однако его истинная натура становится все более очевидна по мере приближения к нему. У чудовища есть слепой центральный «глаз» и отростки на верхней части, на первый взгляд напоминающие глаза злобоглаза.\n
**Предсмертный хлопок.** Газовая спора это пустая оболочка, наполненная газом легче воздуха, который позволяет ей висеть в воздухе как злобоглаз. Если пронзить спору даже слабейшей атакой, она лопается, выпуская облако смертоносных спор. Существо, которое вдохнёт их, становится носителем и может умереть всего лишь за один день. Его труп при этом становится пищей, из которой возникает новая газовая спора.\n
**Воспоминания злобоглаза.** Газовая спора, возникшая из трупа злобоглаза, иногда перенимает в себя часть воспоминаний своего погибшего прародителя. Когда она взрывается, смертоносные споры распространяют эти воспоминания. Вдохнувшее такую спору существо, если оно выживет, получает часть воспоминаний злобоглаза, и может узнать о его логове, окружающей местности или её обитателях. `,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_PLANT,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:74',
    armor: 5,
    hp: {
      cubeCount: 1,
      cubeType: 10,
      cubeBonus: -4,
    },
    speed: {
      [SPEED_WALK]: 0,
      [SPEED_FLY]: {
        value: 10,
        comment: 'парит',
      },
    },
    params: {
      [PARAM_STR]: 5,
      [PARAM_DEX]: 1,
      [PARAM_CON]: 3,
      [PARAM_INT]: 1,
      [PARAM_WIT]: 1,
      [PARAM_CHA]: 1,
    },
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_DEAFENED,
      CONDITION_FRIGHTENED,
      CONDITION_BLINDED,
      CONDITION_POISONED,
      CONDITION_PARALYZED,
      CONDITION_PRONE,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 30,
        comment: 'слепа за пределами этого радиуса',
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 5,
      },
    ],
    cr: CR_1_2,
    featureList: [
      {
        name: 'Предсмертный взрыв',
        description: `Газовая спора взрывается, когда её хиты опускаются до 0. Все существа в пределах 20 футов от неё должны преуспеть в спасброске Телосложения со Сл 15, иначе получат урон ядом 10 (3к6) и заболеют при провале. Существа, обладающие иммунитетом к отравленному состоянию, обладают и иммунитетом к болезни.\n
Споры населяют организм существа, и убивают его через количество часов, равное 1к12 + значение Телосложения существа, если болезнь до этого времени не будет вылечена. Когда пройдёт половина этого срока, существо станет отравленным до конца длительности болезни. После того, как существо умирает, из него вылетают 2к4 Крохотные газовые споры, которые вырастают до полного размера за 7 дней.`,
      },
      {
        name: 'Жуткое сходство',
        description: `Газовая спора выглядят как злобоглазы. Существо, видящее газовую спору, может понять её истинную природу, если совершит успешную проверку Интеллекта (Природа) со Сл 15.`,
      },
    ],
    actionList: [
      {
        name: 'Касание',
        description: `Существо должно преуспеть в спасброске Телосложения со Сл 10, иначе будет поражено болезнью, описанной в тексте Предсмертного взрыва.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 0,
          range: 5,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
            },
          },
          hit: {
            type: DAMAGE_POISON,
            cubeBonus: 1,
          },
        },
      },
    ],
    isFemale: true,
  },
  {
    name: 'Лиловый гриб',
    nameEn: 'Violet fungus',
    id: CREATURE_VIOLET_FUNGUS,
    description: `Этот гриб фиолетового оттенка использует корнеобразные отростки в своём основании, чтобы передвигаться по поверхности пещеры. Четыре побега в середине ствола гриба используются, чтобы хлестать жертву, вызывая гниение при малейшем прикосновении. Любое убитое лиловым грибом существо очень быстро разлагается. Из трупа вырастает новый фиолетовый гриб, который достигает зрелости через 2к6 дней.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_PLANT,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:74',
    armor: 5,
    hp: {
      cubeCount: 4,
      cubeType: 8,
    },
    speed: {
      [SPEED_WALK]: 5,
    },
    params: {
      [PARAM_STR]: 3,
      [PARAM_DEX]: 1,
      [PARAM_CON]: 10,
      [PARAM_INT]: 1,
      [PARAM_WIT]: 3,
      [PARAM_CHA]: 1,
    },
    immunityConditionList: [
      CONDITION_DEAFENED,
      CONDITION_FRIGHTENED,
      CONDITION_BLINDED,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 30,
        comment: 'слеп за пределами этого радиуса',
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 6,
      },
    ],
    cr: CR_1_4,
    featureList: [
      {
        name: 'Обманчивая внешность',
        description: `Пока лиловый гриб остаётся без движения, он неотличим от обычного гриба.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Гриб совершает 1к4 атаки Разлагающим касанием.`,
      },
      {
        name: 'Разлагающее касание',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 2,
          range: 10,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
            },
          },
          hit: {
            type: DAMAGE_NECROTIC,
            cubeCount: 1,
            cubeType: 8,
          },
        },
      },
    ],
  },
  {
    name: 'Альфа грик',
    nameEn: 'Grick alpha',
    id: CREATURE_GRICK_ALPHA,
    description: `Похожий на червя грик остаётся невидимым, сливаясь с камнями пещер и туннелей, в которых обитает. Лишь при приближении жертвы он вскакивает, а четыре его колючих щупальца открывают голодный щёлкающий клюв. Стаю гриков чаще всего возглавляет крупный откормленный альфа-самец, вокруг которого собираются остальные.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:75',
    armor: {
      ac: 18,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 10,
      cubeType: 10,
      cubeBonus: 20,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_CLIMB]: 30,
    },
    params: {
      [PARAM_STR]: 18,
      [PARAM_DEX]: 16,
      [PARAM_CON]: 15,
      [PARAM_INT]: 4,
      [PARAM_WIT]: 14,
      [PARAM_CHA]: 9,
    },
    resistanceList: [
      DAMAGE_NONMAGIC_WEAPON,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 12,
      },
    ],
    cr: CR_7,
    featureList: [
      {
        name: 'Каменный камуфляж',
        description: `Грик совершает с преимуществом проверки Ловкости (Скрытность), когда пытается спрятаться на каменистой местности.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Грик совершает две атаки: одну хвостом, и одну щупальцами. Если грик попадает щупальцами, он может совершить одну атаку клювом по той же самой цели.`,
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Щупальца',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 4,
            cubeType: 8,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Клюв',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 4,
          },
        },
      },
    ],
  },
  {
    name: 'Грик',
    nameEn: 'Grick',
    id: CREATURE_GRICK,
    description: `Похожий на червя грик остаётся невидимым, сливаясь с камнями пещер и туннелей, в которых обитает. Лишь при приближении жертвы он вскакивает, а четыре его колючих щупальца открывают голодный щёлкающий клюв.\n
**Пассивные хищники.** Грики редко охотятся. Вместо этого их эластичные туши перемещаются в места, где постоянно проходят существа. Они скрываются среди каменных валунов и обломков, просачиваются в норы, отверстия и щели, взбираются на уступы или оборачиваются вокруг сталактитов, чтобы свалиться на неосмотрительную жертву. Грик поглощает практически что угодно, за исключением других гриков. Его целью является ближайшая жертва, повалив которую он хватает своими щупальцами и уносит, чтобы поесть в одиночестве.\n
**Бродячие налётчики.** Грики не меняют зону обитания, пока есть доступ к пище, который обычно прекращается, когда разумные существа узнают об их присутствии и составляют планы новых маршрутов в обход логова. Когда в Подземье жертв становится недостаточно, грики поднимаются на поверхность и охотятся в диких землях, взбираясь на деревья или скалистые уступы. Стаю гриков чаще всего возглавляет крупный откормленный альфа-самец, вокруг которого собираются остальные.\n
**Трофеи убийств.** Со временем в логовах гриков скапливаются ненужное имущество их разумных жертв, и умелые проводники могут это определить по явным признакам. Исследователи Подземья иногда запечатывают входы и выходы из логова гриков, моря их голодом, а затем забирая себе богатства глупых жертв. `,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:75',
    armor: {
      ac: 14,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 6,
      cubeType: 8,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_CLIMB]: 30,
    },
    params: {
      [PARAM_STR]: 14,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 11,
      [PARAM_INT]: 3,
      [PARAM_WIT]: 14,
      [PARAM_CHA]: 5,
    },
    resistanceList: [
      DAMAGE_NONMAGIC_WEAPON,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 12,
      },
    ],
    cr: CR_2,
    featureList: [
      {
        name: 'Каменный камуфляж',
        description: `Грик совершает с преимуществом проверки Ловкости (Скрытность), когда пытается спрятаться на каменистой местности.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Грик совершает одну атаку щупальцами. Если эта атака попадает, грик может совершить одну атаку клювом по той же самой цели.`,
      },
      {
        name: 'Щупальца',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 2,
          },
        },
      },
      {
        name: 'Клюв',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 6,
            cubeBonus: 2,
          },
        },
      },
    ],
  },
  {
    name: 'Гримлок',
    nameEn: 'Grimlock',
    id: CREATURE_GRIMLOCK,
    description: `Деградирующие подземные гримлоки когда-то были людьми, но поклонение свежевателям разума, наряду со столетиями бродяжничества по Подземью, давным-давно превратили их в слепых чудовищных каннибалов.\n
**Жалкие культисты.** Империя свежевателей разума когда-то простиралась на множество миров, подчиняя бессчётные расы. Среди них были и людские культуры, чьи жрецы были извращены свежевателями разума с помощью контроля мыслей. Эти лидеры отвергли веру своих последователей, обратившись к иллитидам, которых стали почитать как богохульных божеств.\n
Со временем, на ритуалах этих порабощённых людей выросли культы каннибалов, которые считают поедание мозга свежевателем разума священным обрядом. Иллитиды приказывали своим поклонникам похищать других разумных существ для жертвоприношений. Как только мозг жертвы поглощался, свежеватель разума отдавал безжизненное тело культистам.\n
**Слепые охотники.** С рухнувшим правлением свежевателей разума, их культы столкнулись с постоянным потоком врагов, когда-то бывших их жертвам. Культы нашли спасение в Подземье — мире их богов иллитидов. Прожив много столетий в мире без света, культисты научились выживать, используя остальные чувства. Со временем их глаза высохли, а веки закрылись навсегда.\n
Гримлок услышит едва уловимый топот и шёпот, эхом отдающийся в каменных проходах. Он может говорить в таких низких диапазонах, что большинство гуманоидов его не услышат. Запахи пота, плоти и крови пробуждают его аппетит, и он может отследить их, словно ищейка. Чтобы усилить эти чувства, гримлоки оставляют кровавые следы, кучи навоза и внутренности добычи подальше от своего логова. Когда чужаки проходят через эти зоны, все эти отвратительные запахи оседают на них, предупреждая гримлоков о приближении.\n
Для большинства существ слепота это огромный недостаток. Для гримлока, у которого усилены остальные чувства, слепота это дар. Его нельзя одурачить видимыми иллюзиями или образами. И он бесстрашен, пока преследует добычу.\n
**Бесконечная война.** Гримлоки всё ещё чтят свежевателей разума, служа им там, где это возможно. И они всё ещё помнят войну, что загнала их глубоко под землю. Для них она никогда не закончится. Они продолжают возвращаться на поверхность, похищая пленников для своих хозяев иллитидов. `,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_HUMANOID,
      CREATURE_TYPE_GRIMLOCK,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:76',
    armor: 11,
    hp: {
      cubeCount: 2,
      cubeType: 8,
      cubeBonus: 2,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 16,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 12,
      [PARAM_INT]: 9,
      [PARAM_WIT]: 8,
      [PARAM_CHA]: 6,
    },
    skillCollection: {
      [SKILL_ATHLETICS]: 5,
      [SKILL_PERCEPTION]: 3,
      [SKILL_STEALTH]: 3,
    },
    immunityConditionList: [
      CONDITION_BLINDED,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 30,
        comment: 'или 10 фт., когда глух (слеп за пределами этого радиуса)',
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 13,
      },
    ],
    cr: CR_1_4,
    languageList: [
      LANG_UNDERCOMMON,
    ],
    featureList: [
      {
        name: 'Компенсация слепоты',
        description: `Гримлок не может использовать слепое зрение, будучи оглохшим и лишённым обоняния.`,
      },
      {
        name: 'Острый слух и тонкий нюх',
        description: `Гримлок совершает с преимуществом проверки Мудрости (Внимательность), полагающиеся на слух и обоняние.`,
      },
      {
        name: 'Каменный камуфляж',
        description: `Гримлок совершает с преимуществом проверки Ловкости (Скрытность), когда пытается спрятаться на каменистой местности.`,
      },
    ],
    actionList: [
      {
        name: 'Костяная дубина с шипами',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_BLUDGEONING,
              cubeCount: 1,
              cubeType: 4,
              cubeBonus: 3,
            },
            {
              type: DAMAGE_PIERCING,
              cubeCount: 1,
              cubeType: 4,
            },
          ],
        },
      },
    ],
  },
  {
    name: 'Грифон',
    nameEn: 'Griffon',
    id: CREATURE_GRIFFON,
    description: `Грифоны — свирепые крылатые хищники с мускулистыми телами львов и головами, передними лапами и крыльями орлов. Когда они нападают, грифоны смертоносны и быстры, как орлы, несмотря на то, что удары их мощны и грациозны, как у львов.\n
**Пожиратели лошадей.** Грифоны охотятся небольшими прайдами, летая над равнинами и лесами близ своих скал. Стадные животные и лошади — их любимая пища, однако они также охотятся и на гиппогрифов. Заметив лошадей, грифон кричит, чтобы предупредить своих гордых собратьев, которые мгновенно набрасываются на жертву.\n
Лошади страшатся пронзительного крика грифона, готовясь к кровавому бою, который неизбежно последует за ним. Грифон по возможности игнорирует всадника лошади, и наездники, бросившие своего скакуна, или погонщик, отпустивший пару лошадей, могут сбежать невредимыми, пока грифон атакует выбранную жертву. Всадник, который попытается защитить свою лошадь, навлекает на себя всю ярость сражающегося грифона.\n
**Небожители.** Грифоны располагают свои логова на вершинах скал, строя гнезда из палок, листьев и костей своей добычи. После того как грифон обосновался, он остаётся на выбранной территории, пока не закончится продовольствие.\n
Агрессивные собственники, грифоны вступают в жестокий воздушный бой за свою территорию, раздирая крылья вторгшихся, чтоб сбросить их на землю. Существ, которые пытаются вскарабкаться к логову, они сдирают со скалы и съедают или сбивают с большой высоты, чтоб те падали и разбивались. Тренированные ездовые животные. Грифона, взращённого из яйца, можно натренировать для службы в качестве ездового животного. Однако такая тренировка опасна и занимает много времени и затрат (в основном на необходимую пищу). Опытные тренеры хорошо знакомы с легендарной свирепостью грифонов и, как правило, только они в состоянии безопасно растить этих существ.\n
После обучения грифон становится яростным и верным ездовым животным. Он связывает себя с одним хозяином на всю жизнь, сражаясь за него до самой смерти. Грифон сохраняет свой ненасытный аппетит к конине, и мудрый хозяин обеспечит ему другую добычу при прохождении через цивилизованные страны.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:77',
    armor: 12,
    hp: {
      cubeCount: 7,
      cubeType: 10,
      cubeBonus: 21,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_FLY]: 80,
    },
    params: {
      [PARAM_STR]: 18,
      [PARAM_DEX]: 15,
      [PARAM_CON]: 16,
      [PARAM_INT]: 2,
      [PARAM_WIT]: 13,
      [PARAM_CHA]: 8,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 5,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 15,
      },
    ],
    cr: CR_2,
    featureList: [
      {
        name: 'Острое зрение',
        description: `Грифон совершает с преимуществом проверки Мудрости (Внимательность), полагающиеся на зрение.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Грифон совершает две атаки: одну клювом, и одну когтями.`,
      },
      {
        name: 'Клюв',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 8,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Когти',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 4,
          },
        },
      },
    ],
  },
  {
    name: 'Демилич',
    nameEn: 'Demilich',
    id: CREATURE_DEMILICH,
    description: `Бессмертие лича длится, пока он скармливает своему филактерию души смертных. Если этого не происходит, его кости рассыпаются пылью, оставляя только череп. В таком «демиличе» осталась только часть злой жизненной силы лича, но и этого достаточно, чтобы при угрозе останки поднялись в воздух, окутанные призрачной формой. Череп испускает страшный рёв, убивающий слабых сердцем, а остальных заставляющий трястись от ужаса. Оставшись один, он падает и вновь погружается в пустоту своего существования.\n
Немногие личи стремятся стать демиличами, ведь для них это конец существования, которое они старались продлить, став нежитью. Тем не менее, время может разрушить стремления и память лича, заставляя его забиться в гробницу и забыть о питании душами. Заклинания выветриваются из его разума, и больше он не может использовать тайную магию. Тем не менее, даже череп остаётся смертельно опасным и очень неприятным противником.\n
**Нерушимое существование.** Даже после превращения в демилича, филактерий сохраняется. Пока филактерий цел, демилич не может быть окончательно убит. Череп восстанавливается через 1к10 дней, возвращая его к жалкому существованию. Если у него ещё остался разум, он может вернуть былую силу, скормив всего одну душу филактерию. После этого демилич вернётся к облику лича, восстановив своё немёртвое тело.\n
**Натура нежити.** Демиличу не нужен воздух, еда, питьё и сон. Желание выжить у демилича столь сильно, что у него всегда максимальное количество хитов на Костях Хитов вместо средних. `,
    sizeType: SIZE_TINY,
    creatureTypeIdList: [
      CREATURE_TYPE_UNDEAD,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:78',
    armor: {
      ac: 20,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 20,
      cubeType: 4,
    },
    speed: {
      [SPEED_WALK]: 0,
      [SPEED_FLY]: {
        value: 30,
        comment: 'парит',
      },
    },
    params: {
      [PARAM_STR]: 1,
      [PARAM_DEX]: 20,
      [PARAM_CON]: 10,
      [PARAM_INT]: 20,
      [PARAM_WIT]: 17,
      [PARAM_CHA]: 20,
    },
    saveThrowCollection: {
      [PARAM_CON]: 6,
      [PARAM_INT]: 11,
      [PARAM_WIT]: 9,
      [PARAM_CHA]: 11,
    },
    resistanceList: [
      DAMAGE_MAGIC_WEAPON,
    ],
    immunityList: [
      DAMAGE_NECROTIC,
      DAMAGE_PSYCHIC,
      DAMAGE_POISON,
      DAMAGE_NONMAGIC_WEAPON,
    ],
    immunityConditionList: [
      CONDITION_DEAFENED,
      CONDITION_FRIGHTENED,
      CONDITION_EXHAUSTION,
      CONDITION_PETRIFIED,
      CONDITION_POISONED,
      CONDITION_CHARMED,
      CONDITION_STUNNED,
      CONDITION_PARALYZED,
      CONDITION_PRONE,
    ],
    senseList: [
      {
        id: SENSE_TRUE_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 13,
      },
    ],
    cr: CR_18,
    featureList: [
      {
        name: 'Избегание',
        description: `Если демилич подвергается эффекту, позволяющему совершить спасбросок, чтобы получить только половину урона, он вообще не получает урон, если преуспеет, и получает лишь половину урона при провале.`,
      },
      {
        name: 'Легендарное сопротивление',
        description: `Если демилич проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
      {
        name: 'Иммунитет к изгнанию',
        description: `Демилич обладает иммунитетом к эффектам, изгоняющим нежить.`,
      },
    ],
    actionList: [
      {
        name: 'Вой',
        description: `Демилич испускает душераздирающий вопль. Все существа в пределах 30 футов от демилича, слышащие вой, должны преуспеть в спасброске Телосложения со Сл 15, иначе их хиты опускаются до 0. При успешном спасброске существо становится испуганным до конца своего следующего хода.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
      {
        name: 'Вытягивание жизни',
        description: `Демилич выбирает до трёх существ, которых видит в пределах 10 футов от себя. Каждая цель должна преуспеть в спасброске Телосложения со Сл 19, иначе получит урон некротической энергией 21 (6к6), а демилич восстановит количество хитов, равное сумме урона, причинённого всем целям.`,
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Полёт',
        description: `Демилич пролетает расстояние, не превышающее половину скорости полёта.`,
      },
      {
        name: 'Облако пыли',
        description: `Демилич магическим образом превращается в облако праха. Все существа в пределах 10 футов от демилича, включая тех, что стоят за углом, должны преуспеть в спасброске Телосложения со Сл 15, иначе станут ослеплёнными до конца следующего хода демилича. Преуспевшее в спасброске существо получает иммунитет к этому эффекту до конца следующего хода демилича.`,
      },
      {
        name: 'Вытягивание энергии',
        cost: 2,
        description: `Все существа в пределах 30 футов от демилича должны совершить спасбросок Телосложения со Сл 15. При провале максимум хитов существа магическим образом уменьшается на 10 (3к6). Если максимум хитов из-за этого уменьшился до 0, существо умирает. Максимум хитов восстанавливается заклинанием _Высшее восстановление_ (greater restoration) и подобной магией.`,
      },
      {
        name: 'Подлое проклятье',
        cost: 3,
        description: `Демилич нацеливается наодно существо, которое видит в пределах 30 футов от себя. Цель должна преуспеть в спасброске Мудрости со Сл 15, иначе она станет магическим образом проклятой. Пока проклятье действует, цель совершает с помехой броски атаки и спасброски. Цель может повторять этот спасбросок в конце каждого своего хода, оканчивая проклятье при успехе.`,
      },
    ],
  },
  {
    name: 'Балор',
    nameEn: 'Balor',
    id: CREATURE_BALOR,
    description: `Часть древнего и ужасного зла, балоры командуют демоническими армиями, стремятся получить власть и уничтожают любого, кто встанет у них на пути.\n
Орудуя пламенным кнутом и мечом, наполненным силой шторма, балоры питают свой боевой дух ненавистью и яростью. В предсмертной агонии поток демонической ярости низвергается огненным взрывом, который может уничтожить даже самых крепких врагов.`,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEMON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:85',
    armor: {
      ac: 19,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 21,
      cubeType: 12,
      cubeBonus: 126,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 80,
    },
    params: {
      [PARAM_STR]: 26,
      [PARAM_DEX]: 15,
      [PARAM_CON]: 22,
      [PARAM_INT]: 20,
      [PARAM_WIT]: 16,
      [PARAM_CHA]: 22,
    },
    saveThrowCollection: {
      [PARAM_STR]: 14,
      [PARAM_CON]: 12,
      [PARAM_WIT]: 9,
      [PARAM_CHA]: 12,
    },
    resistanceList: [
      DAMAGE_COLD,
      DAMAGE_ELECTRICITY,
      DAMAGE_NONMAGIC_WEAPON,
    ],
    immunityList: [
      DAMAGE_POISON,
      DAMAGE_FIRE,
    ],
    immunityConditionList: [
      CONDITION_POISONED,
    ],
    senseList: [
      {
        id: SENSE_TRUE_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 13,
      },
    ],
    languageList: [
      LANG_ABYSSAL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_19,
    featureList: [
      {
        name: 'Предсмертная агония',
        description: `Когда балор умирает, он взрывается, и все существа в пределах 30 футов от него должны совершить спасброски Ловкости со Сл 20, получая урон огнём 70 (20к6) при провале, или половину этого урона при успехе. Взрыв воспламеняет горючие предметы в этой области, которые никто не несёт и не носит, и уничтожает оружие балора.`,
      },
      {
        name: 'Огненная аура',
        description: `В начале каждого хода балора все существа в пределах 5 футов от него получают урон огнём 10 (3к6), а горючие предметы в ауре, которые никто не несёт и не носит, воспламеняются. Существо, касающееся балора или попадающее по нему рукопашной атакой, находясь в пределах 5 футов от него, получает урон огнём 10 (3к6).`,
      },
      {
        name: 'Сопротивление магии',
        description: `Балор совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
      {
        name: 'Магическое оружие',
        description: `Атаки оружием балора являются магическими.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Балор совершает две атаки: одну длинным мечом, и одну кнутом.`,
      },
      {
        name: 'Длинный меч',
        description: `Если балор совершает критическое попадание, он бросает кости урона три раза, а не два.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 14,
          range: 10,
          target: 1,
          hit: [
            {
              type: DAMAGE_SLASHING,
              cubeCount: 3,
              cubeType: 8,
              cubeBonus: 8,
            },
            {
              type: DAMAGE_ELECTRICITY,
              cubeCount: 3,
              cubeType: 8,
            },
          ],
        },
      },
      {
        name: 'Кнут',
        description: `Цель должна преуспеть в спасброске Силы со Сл 20, иначе её подтянет на 25 футов к балору.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 14,
          range: 30,
          target: 1,
          hit: [
            {
              type: DAMAGE_SLASHING,
              cubeCount: 2,
              cubeType: 6,
              cubeBonus: 8,
            },
            {
              type: DAMAGE_FIRE,
              cubeCount: 3,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Телепортация',
        description: `Балор магическим образом телепортируется вместе со всем несомым и носимым снаряжением, на расстояние до 120 футов в свободное пространство, которое он видит.`,
      },
    ],
  },
  {
    name: 'Барлгура',
    nameEn: 'Barlgura',
    id: CREATURE_BARLGURA,
    description: `Барлгура представляет дикость и жестокость Бездны. Барлгуры сбиваются в стаи, чтобы одолеть противника, который сильнее их, захватить ужасные трофеи и развесить их на своей территории.\n
Барлгура выглядит как огромный орангутанг с ужасной, набрякшей мордой и клыками, торчащими из пасти. Ростом барлгура чуть менее 8 футов, у него широкие плечи и весит он 650 фунтов. Передвигается по земле как обезьяна, ловко и быстро лазает.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEMON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:86',
    armor: {
      ac: 15,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 8,
      cubeType: 10,
      cubeBonus: 24,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_CLIMB]: 40,
    },
    params: {
      [PARAM_STR]: 18,
      [PARAM_DEX]: 15,
      [PARAM_CON]: 16,
      [PARAM_INT]: 7,
      [PARAM_WIT]: 14,
      [PARAM_CHA]: 9,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 5,
      [PARAM_CON]: 6,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 5,
      [SKILL_STEALTH]: 6,
    },
    resistanceList: [
      DAMAGE_COLD,
      DAMAGE_ELECTRICITY,
      DAMAGE_FIRE,
    ],
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_POISONED,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 30,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 15,
      },
    ],
    languageList: [
      LANG_ABYSSAL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_5,
    featureList: [
      {
        name: 'Безрассудство',
        description: `В начале своего хода барлгура может решить, что в этом ходу все рукопашные атаки оружием будет совершать с преимуществом, но в этом случае до начала его следующего хода все броски атаки по нему тоже будут совершаться с преимуществом.`,
      },
      {
        name: 'Прыжок с разбега',
        description: `Если барлгура совершает прыжок с разбега, он прыгает в длину на расстояние до 40 футов и в высоту на расстояние до 20 футов.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_WIT,
      saveThrowDc: 13,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_PHANTASMAL_FORCE,
            SPELL_ENTANGLE,
          ],
        },
        {
          limit: {
            count: 2,
            period: 'день',
          },
          list: [
            SPELL_DISGUISE_SELF,
            {
              id: SPELL_INVISIBILITY,
              comment: 'только на себя',
            },
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Мультиатака',
        description: `Барлгура совершает три атаки: одну укусом, и две кулаками.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Кулак',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 1,
            cubeType: 10,
            cubeBonus: 4,
          },
        },
      },
    ],
  },
  {
    name: 'Врок',
    nameEn: 'Vrock',
    id: CREATURE_VROCK,
    description: `Вроки — тупые, капризные исчадия, живущие только ради боли и резни. Врок напоминает гигантскую помесь гуманоида и стервятника, он скрючен, его чудовищное тело и огромные крылья воняют падалью.\n
Вроки пожирают плоть гуманоидов каждый раз, как только представляется такая возможность, ошеломляя потенциальную добычу оглушительным визгом, а затем бросаются вниз, чтобы атаковать клювом и когтями. Вроки могут взмахивать крыльями, выпуская в воздух облака токсичных спор.\n
Красивые вещи заставляют вроков драться друг с другом за обладание дешёвыми украшениями и поделочными камнями. Однако, не смотря на любовь к сокровищам, вроков трудно подкупить. Они не видят смысла с кем-либо торговаться, если можно забрать то, что хочется, с трупа торгующегося.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEMON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:87',
    armor: {
      ac: 15,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 11,
      cubeType: 10,
      cubeBonus: 44,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 60,
    },
    params: {
      [PARAM_STR]: 17,
      [PARAM_DEX]: 15,
      [PARAM_CON]: 18,
      [PARAM_INT]: 8,
      [PARAM_WIT]: 13,
      [PARAM_CHA]: 8,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 5,
      [PARAM_WIT]: 4,
      [PARAM_CHA]: 2,
    },
    resistanceList: [
      DAMAGE_COLD,
      DAMAGE_ELECTRICITY,
      DAMAGE_FIRE,
      DAMAGE_NONMAGIC_WEAPON,
    ],
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_POISONED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 11,
      },
    ],
    languageList: [
      LANG_ABYSSAL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_6,
    featureList: [
      {
        name: 'Сопротивление магии',
        description: `Врок совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Врок совершает две атаки: одну клювом, и одну когтями.`,
      },
      {
        name: 'Клюв',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 3,
          },
        },
      },
      {
        name: 'Когти',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 3,
          },
        },
      },
      {
        name: 'Споры',
        description: `Из врока исходит облако токсичных спор с радиусом 15 футов. Споры огибают углы. Все существа в этой области должны преуспеть в спасброске Телосложения со Сл 14, иначе станут отравленными. Будучи отравленной таким образом, цель получает урон ядом 5 (1к10) в начале каждого своего хода. Цель может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если на цель вылить флакон святой воды, эффект на ней тоже закончится. `,
        restore: {
          from: 6,
          to: 6,
        },
      },
      {
        name: 'Ошеломляющий вопль',
        description: `Врок испускает жуткий вопль. Все существа в пределах 20 футов от него, слышащие его, и не являющиеся демонами, должны преуспеть в спасброске Телосложения со Сл 14, иначе станут ошеломлёнными до конца следующего хода врока.`,
        limit: {
          count: 1,
          period: 'день',
        },
      },
    ],
  },
  {
    name: 'Дретч',
    nameEn: 'Dretch',
    id: CREATURE_DRETCH,
    description: `Дретчи, одни из самых слабых демонов, — отталкивающие, поглощённые ненавистью к себе существа, обречённые на вечность разочарования. Низкий интеллект позволяет дретчам выполнять только самые простые задачи. Однако нехватку потенциала они компенсируют злобой. Дретчи сбиваются в толпу, выражая своё недовольство тревожным галдежом и ворчанием.`,
    sizeType: SIZE_SMALL,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEMON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:87',
    armor: {
      ac: 11,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 4,
      cubeType: 6,
      cubeBonus: 4,
    },
    speed: {
      [SPEED_WALK]: 20,
    },
    params: {
      [PARAM_STR]: 11,
      [PARAM_DEX]: 11,
      [PARAM_CON]: 12,
      [PARAM_INT]: 5,
      [PARAM_WIT]: 8,
      [PARAM_CHA]: 3,
    },
    resistanceList: [
      DAMAGE_COLD,
      DAMAGE_ELECTRICITY,
      DAMAGE_FIRE,
    ],
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_POISONED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 9,
      },
    ],
    languageList: [
      LANG_ABYSSAL,
      {
        id: LANG_TELEPATHY,
        range: 120,
        comment: 'работает только с существами, понимающими язык Бездны',
      },
    ],
    cr: CR_1_4,
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дретч совершает две атаки: одну укусом, и одну когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 2,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 6,
          },
        },
      },
      {
        name: 'Когти',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 2,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 4,
          },
        },
      },
      {
        name: 'Зловонное облако',
        description: `От дретча исходит облако отвратительного зелёного газа с радиусом 10 футов. Этот газ огибает углы, и его пространство является слабо заслонённой местностью. Облако существует 1 минуту, или пока сильный ветер его не развеет. Все существа, начинающие ход в этой области, должны преуспеть в спасброске Телосложения со Сл 11, иначе станут отравленными до начала своего следующего хода. Будучи отравленной таким образом, цель может в свой ход совершать либо действие, либо бонусное действие, но не то и другое, и не может совершать реакции.`,
        limit: {
          count: 1,
          period: 'день',
        },
      },
    ],
  },
  {
    name: 'Глабрезу',
    nameEn: 'Glabrezu',
    id: CREATURE_GLABREZU,
    description: `Глабрезу наслаждается, искушая смертных, и они одни из немногих демонов, готовы предложить свои услуги тому глупцу, что осмелился призвать их.\n
Глабрезу страшны в бою, но предпочитают уничтожать соблазном, используя как приманку власть и богатство. Заключая коварные, хитрые сделки, они копят богатства, которые, как и обещали, отдают недальновидным призывателям и глупым смертным. Если же жертва не поддалась соблазну и обману, они применят силу, чтобы одержать победу.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEMON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:88',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 15,
      cubeType: 10,
      cubeBonus: 75,
    },
    speed: {
      [SPEED_WALK]: 40,
    },
    params: {
      [PARAM_STR]: 20,
      [PARAM_DEX]: 15,
      [PARAM_CON]: 21,
      [PARAM_INT]: 19,
      [PARAM_WIT]: 17,
      [PARAM_CHA]: 16,
    },
    saveThrowCollection: {
      [PARAM_STR]: 9,
      [PARAM_CON]: 9,
      [PARAM_WIT]: 7,
      [PARAM_CHA]: 7,
    },
    resistanceList: [
      DAMAGE_COLD,
      DAMAGE_ELECTRICITY,
      DAMAGE_FIRE,
      DAMAGE_NONMAGIC_WEAPON,
    ],
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_POISONED,
    ],
    senseList: [
      {
        id: SENSE_TRUE_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 13,
      },
    ],
    languageList: [
      LANG_ABYSSAL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_9,
    featureList: [
      {
        name: 'Сопротивление магии',
        description: `Глабрезу совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_INT,
      saveThrowDc: 16,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            SPELL_DETECT_MAGIC,
            SPELL_DISPEL_MAGIC,
            SPELL_DARKNESS,
          ],
        },
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_FLY,
            SPELL_POWER_WORD_STUN,
            SPELL_CONFUSION,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Мультиатака',
        description: `Глабрезу совершает четыре атаки: две клешнями, и две кулаками. В качестве альтернативы, он совершает две атаки клешнями и накладывает одно заклинание.`,
      },
      {
        name: 'Клешня',
        description: `Если цель — существо с размером не больше Среднего, оно становится схваченным (Сл высвобождения равна 15). У глабрезу есть две клешни, и каждая может держать по одной цели.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 9,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 5,
          },
        },
      },
      {
        name: 'Кулак',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 9,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 4,
            cubeBonus: 2,
          },
        },
      },
    ],
  },
  {
    name: 'Гористро',
    nameEn: 'Goristro',
    id: CREATURE_GORISTRO,
    description: `Гористро выглядит как изуверский минотавр двадцати футов ростом. Под началом демонических повелителей гористро становятся грозными осадными орудиями и ценными питомцами. Преследуя добычу, они сверхъестественным образом выбираются из лабиринтов и запутанных проходов.\n
Громадные гористро иногда носят на плечах паланкины для меньших размерами демонов, перевозя их, как слоны на своих спинах.`,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEMON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:89',
    armor: {
      ac: 19,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 23,
      cubeType: 12,
      cubeBonus: 161,
    },
    speed: {
      [SPEED_WALK]: 40,
    },
    params: {
      [PARAM_STR]: 25,
      [PARAM_DEX]: 11,
      [PARAM_CON]: 25,
      [PARAM_INT]: 6,
      [PARAM_WIT]: 13,
      [PARAM_CHA]: 14,
    },
    saveThrowCollection: {
      [PARAM_STR]: 13,
      [PARAM_DEX]: 6,
      [PARAM_CON]: 13,
      [PARAM_WIT]: 7,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 7,
    },
    resistanceList: [
      DAMAGE_COLD,
      DAMAGE_ELECTRICITY,
      DAMAGE_FIRE,
      DAMAGE_NONMAGIC_WEAPON,
    ],
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_POISONED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 17,
      },
    ],
    languageList: [
      LANG_ABYSSAL,
    ],
    cr: CR_17,
    featureList: [
      {
        name: 'Атака в броске',
        description: `Если гористро переместится как минимум на 15 футов по прямой к цели, а затем в том же ходу попадёт по ней атакой бодания, цель получает дополнительный колющий урон 38 (7к10). Если цель — существо, она должна преуспеть в спасброске Силы со Сл 21, иначе её оттолкнёт на 20 футов и собьёт с ног.`,
      },
      {
        name: 'Запоминание пути',
        description: `Гористро может с лёгкостью вспомнить любой пройдённый путь.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Гористро совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
      {
        name: 'Осадное чудовище',
        description: `Гористро причиняет двойной урон предметам и строениям.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Гористро совершает три атаки: две кулаками и одну копытом.`,
      },
      {
        name: 'Кулак',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 13,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 3,
            cubeType: 8,
            cubeBonus: 7,
          },
        },
      },
      {
        name: 'Копыто',
        description: `Если цель — существо, она должна преуспеть в спасброске Силы со Сл 21, иначе её собьёт с ног.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 13,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 3,
            cubeType: 10,
            cubeBonus: 7,
          },
        },
      },
      {
        name: 'Бодание',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 13,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 7,
            cubeType: 10,
            cubeBonus: 7,
          },
        },
      },
    ],
  },
  {
    name: 'Йоклол',
    nameEn: 'Yochlol',
    id: CREATURE_YOCHLOL,
    description: `Йоклол, Прислужницы Лолс, действующие по воле Королевы Пауков, это её шпионы, надсмотрщики и агенты зла. Они всегда подле неё в Ямах Демонической Паутины, но иногда Лолс отправляет их на Материальный План для защиты храмов и помощи особо привилегированным жрицам. Йоклол не рождаются вне царства Лолс, и не служат никаким демоническим повелителям кроме своей королевы.\n
Вне Бездны, чтобы скрыть демоническую натуру, йоклол может принять вид женщины дроу или чудовищного паука. Истинный её облик — столб жёлтой слизи с единственным злобным глазом. В истинном облике и в облике дроу касание йоклол жалит ядом так же, как и укус её паучьего облика.`,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEMON,
      CREATURE_TYPE_SHAPESHIFTER,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:90',
    armor: {
      ac: 15,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 16,
      cubeType: 8,
      cubeBonus: 64,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_CLIMB]: 30,
    },
    params: {
      [PARAM_STR]: 15,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 18,
      [PARAM_INT]: 13,
      [PARAM_WIT]: 15,
      [PARAM_CHA]: 15,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 6,
      [PARAM_INT]: 5,
      [PARAM_WIT]: 6,
      [PARAM_CHA]: 6,
    },
    skillCollection: {
      [SKILL_DECEPTION]: 10,
      [SKILL_INSIGHT]: 6,
    },
    resistanceList: [
      DAMAGE_COLD,
      DAMAGE_ELECTRICITY,
      DAMAGE_FIRE,
      DAMAGE_NONMAGIC_WEAPON,
    ],
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_POISONED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 12,
      },
    ],
    languageList: [
      LANG_ABYSSAL,
      LANG_UNDERCOMMON,
      LANG_ELVEN,
    ],
    cr: CR_10,
    featureList: [
      {
        name: 'Перевёртыш',
        description: `Йоклол может действием принять облик, напоминающий женщину дроу или громадного паука, или принять свой истинный облик. Во всех обликах её статистика остаётся той же самой. Всё несомое и носимое ей снаряжение не превращается. Она принимает свой истинный облик, если умирает.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Йоклол совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
      {
        name: 'Паучье лазание',
        description: `Йоклол может лазать по сложным поверхностям, включая потолки, без совершения проверок характеристик.`,
      },
      {
        name: 'Хождение по паутине',
        description: `Йоклол игнорирует ограничения перемещения, вызванные паутиной.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 14,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            SPELL_DETECT_THOUGHTS,
            SPELL_WEB,
          ],
        },
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_DOMINATE_PERSON,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Мультиатака',
        description: `Йоклол совершает две рукопашные атаки.`,
      },
      {
        name: 'Размашистый удар (в облике демона)',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 10,
          target: 1,
          hit: [
            {
              type: DAMAGE_BLUDGEONING,
              cubeCount: 1,
              cubeType: 6,
              cubeBonus: 2,
            },
            {
              type: DAMAGE_POISON,
              cubeCount: 6,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Размашистый удар (в облике дроу)',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_BLUDGEONING,
              cubeCount: 1,
              cubeType: 6,
              cubeBonus: 2,
            },
            {
              type: DAMAGE_POISON,
              cubeCount: 6,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Укус (в облике паука)',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 1,
              cubeType: 6,
              cubeBonus: 2,
            },
            {
              type: DAMAGE_POISON,
              cubeCount: 6,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Туманный облик',
        description: `Йоклол становится токсичным туманом или возвращается в свой истинный облик. Всё снаряжение, которое она несёт и носит, превращается вместе с ней. Она принимает свой истинный облик, если умирает.\n
Находясь в туманном облике, йоклол недееспособна, и не может говорить. Она обладает скоростью полёта 30 футов, может парить, и может проходить сквозь любое пространство, если оно не герметично. Она совершает с преимуществом спасброски Силы, Ловкости и Телосложения, и обладает иммунитетом к немагическому урону.\n
Находясь в туманном облике, йоклол может входить в пространство существ и останавливаться там. Каждый раз, когда существо начинает ход, разделяя с йоклол пространство, оно должны преуспеть в спасброске Телосложения со Сл 14, иначе станет отравленным до начала своего следующего хода. Будучи отравленной таким образом, цель является недееспособной.`,
      },
    ],
  },
  {
    name: 'Квазит',
    nameEn: 'Quasit',
    id: CREATURE_QUASIT,
    description: `Квазиты водятся на Нижних Планах. Физически слабые, они держатся в тени, чтобы плести интриги и ложь. Более мощные демоны используют квазитов для почтовых пересылок и шпионажа, когда не пожирают их и не растаскивают их друг от друга, чтобы скоротать время.\n
Квазит может предстать в животном облике, но в истинном виде он выглядит как 2-футовый зелёный гуманоид с колючим хвостом и рогами. Когти на руках и ногах квазита содержат раздражающий яд. Нападая, он предпочитает быть невидимым.`,
    sizeType: SIZE_TINY,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEMON,
      CREATURE_TYPE_SHAPESHIFTER,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:91',
    armor: 13,
    hp: {
      cubeCount: 3,
      cubeType: 4,
    },
    speed: {
      [SPEED_WALK]: 40,
    },
    params: {
      [PARAM_STR]: 5,
      [PARAM_DEX]: 17,
      [PARAM_CON]: 10,
      [PARAM_INT]: 7,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 10,
    },
    skillCollection: {
      [SKILL_STEALTH]: 5,
    },
    resistanceList: [
      DAMAGE_COLD,
      DAMAGE_ELECTRICITY,
      DAMAGE_FIRE,
      DAMAGE_NONMAGIC_WEAPON,
    ],
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_POISONED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    languageList: [
      LANG_ABYSSAL,
      LANG_COMMON,
    ],
    cr: CR_1,
    featureList: [
      {
        name: 'Перевёртыш',
        description: `Квазит может действием принять звериный облик, напоминающий летучую мышь (скорость 10 фт. летая 40 фт.), многоножку (40 фт., лазая 40 фт.), или жабу (40 фт., плавая 40 фт.), или принять свой истинный облик. Во всех обликах его характеристики остаются теми же самыми, исключая указанные изменения скорости. Всё несомое и носимое им снаряжение не превращается. Он принимает свой истинный облик, если умирает.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Квазит совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
    ],
    actionList: [
      {
        name: 'Когти',
        comment: 'в зверином облике Укус',
        description: 'Цель должна преуспеть в спасброске Телосложения со Сл 10, иначе получит урон ядом 5 (2к4) и станет отравленной на 1 минуту. Цель может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 4,
            cubeBonus: 3,
          },
        },
      },
      {
        name: 'Испуг',
        description: `Одно существо на выбор квазита в пределах 20 футов от него должно преуспеть в спасброске Мудрости со Сл 10, иначе станет испуганным на 1 минуту. Цель может повторять этот спасбросок в конце каждого своего хода, с помехой, если квазит находится в пределах линии обзора, оканчивая эффект на себе при успехе.`,
        limit: {
          count: 1,
          period: 'день',
        },
      },
      {
        name: 'Невидимость',
        description: `Квазит магическим образом становится невидимым, пока не атакует или не использует Испуг, или пока не окончится его концентрация (как при концентрации на заклинании). Всё снаряжение, которое квазит несёт или носит, становится невидимым вместе с ним.`,
      },
    ],
  },
  {
    name: 'Квазит-фамильяр',
    nameEn: 'Quasit-familiar',
    id: CREATURE_QUASIT_FAMILIAR,
    parentId: CREATURE_QUASIT,
    description: `Смертные заклинатели, которые хотят фамильяра с другого плана, считают квазита лёгким для призыва и служения. Квазиты — раболепные слуги. Они великолепно служат своим хозяевам, подвигая смертных на всё большее зло и хаос.`,
    featureList: [
      {
        name: 'Фамильяр',
        description: `Квазит может служить другому существу фамильяром, создав телепатическую связь с желающим того хозяином. Пока они связаны, хозяин может ощущать то же, что и квазит, пока они находятся в пределах мили друг от друга. Пока квазит находится в пределах 10 футов от хозяина, на хозяина распространяется особенность квазита _Сопротивление магии_. В любое время и по любой причине квазит может прекратить службу, оборвав телепатическую связь.`,
      },
    ],
  },
  {
    name: 'Марилит',
    nameEn: 'Marilith',
    id: CREATURE_MARILITH,
    description: `Марилит выглядит пугающе — шестирукая женщина, нижняя часть тела которой заменена на хвост гигантской змеи.\n
Используя мечи в каждой из своих шести рук, марилит является опаснейшим врагом, с которым немногие могут сравниться. Эти демоны обладают острым умом и великолепным тактическим чутьём, и благодаря этому могут объединить других демонов. Марилит часто встречают в качестве офицеров во главе демонической орды, где они используют любую возможность ринуться в бой.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEMON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:92',
    armor: {
      ac: 18,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 18,
      cubeType: 10,
      cubeBonus: 90,
    },
    speed: {
      [SPEED_WALK]: 40,
    },
    params: {
      [PARAM_STR]: 18,
      [PARAM_DEX]: 20,
      [PARAM_CON]: 20,
      [PARAM_INT]: 18,
      [PARAM_WIT]: 16,
      [PARAM_CHA]: 20,
    },
    saveThrowCollection: {
      [PARAM_STR]: 9,
      [PARAM_CON]: 10,
      [PARAM_WIT]: 8,
      [PARAM_CHA]: 10,
    },
    resistanceList: [
      DAMAGE_COLD,
      DAMAGE_ELECTRICITY,
      DAMAGE_FIRE,
      DAMAGE_NONMAGIC_WEAPON,
    ],
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_POISONED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 13,
      },
    ],
    languageList: [
      LANG_ABYSSAL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_16,
    featureList: [
      {
        name: 'Сопротивление магии',
        description: `Марилит совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
      {
        name: 'Магическое оружие',
        description: `Атаки оружием марилит являются магическими.`,
      },
      {
        name: 'Быстрая реакция',
        description: `Марилит может совершать по одной реакции в каждом ходу сражения.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Марилит совершает семь атак: шесть длинными мечами, и одну хвостом.`,
      },
      {
        name: 'Длинный меч',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 9,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Хвост',
        description: 'Если размер цели не больше Среднего, она становится схваченной (Сл высвобождения 19). Пока цель схвачена, она опутана, марилит может автоматически попадать по цели хвостом, и марилит не может совершать атаки хвостом по другим целям.',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 9,
          range: 10,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
            },
          },
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Телепортация',
        description: 'Марилит магическим образом телепортируется вместе со всем несомым и носимым снаряжением, на расстояние до 120 футов в свободное пространство, которое она видит.',
      },
    ],
    reactionList: [
      {
        name: 'Парирование',
        description: `Марилит добавляет 5 к КД против одной рукопашной атаки, которая должна попасть по ней. Для этого марилит должна видеть атакующего, и должна использовать рукопашное оружие.`,
      },
    ],
    isFemale: true,
  },
  {
    name: 'Нальфешни',
    nameEn: 'Nalfeshnee',
    id: CREATURE_NALFESHNEE,
    description: `Нальфешни является одним из самых гротескных демонов — это тучная пародия на обезьяну и кабана, в два раза выше человеческого роста, с перистыми крыльями, которые кажутся слишком маленькими для его раздутого тела. Эти звериные черты скрывают выдающийся интеллект и хитрость.\n
Нальфешни разрушительны в бою, они с помощью крыльев летят над первыми рядами своего войска и ищут уязвимых противников, которые могут быть уничтожены с небольшим усилием. Из гущи боя, они телепатическим рёвом командуют меньшими демонами, вместе с тем заставляя врагов бежать и рассеиваться.\n
Нальфешни могут питаться ненавистью и отчаянием, но они предпочитают плоть гуманоидов. Они держат свои кладовые заполненными гуманоидами, похищенными из Материального Плана, чтобы пировать ещё живыми существами. Думая о себе как о развитых и культурных, нальфешни используют запятнанные ржавчиной столовые приборы во время своих трапез.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEMON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:93',
    armor: {
      ac: 18,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 16,
      cubeType: 10,
      cubeBonus: 96,
    },
    speed: {
      [SPEED_WALK]: 20,
      [SPEED_FLY]: 40,
    },
    params: {
      [PARAM_STR]: 21,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 22,
      [PARAM_INT]: 19,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 15,
    },
    saveThrowCollection: {
      [PARAM_CON]: 11,
      [PARAM_INT]: 9,
      [PARAM_WIT]: 6,
      [PARAM_CHA]: 7,
    },
    resistanceList: [
      DAMAGE_COLD,
      DAMAGE_ELECTRICITY,
      DAMAGE_FIRE,
      DAMAGE_NONMAGIC_WEAPON,
    ],
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_POISONED,
    ],
    senseList: [
      {
        id: SENSE_TRUE_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 11,
      },
    ],
    languageList: [
      LANG_ABYSSAL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_13,
    featureList: [
      {
        name: 'Сопротивление магии',
        description: `Нальфешни совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Нальфешни использует _Ореол ужаса_, если может. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 5,
            cubeType: 10,
            cubeBonus: 5,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 3,
            cubeType: 6,
            cubeBonus: 5,
          },
        },
      },
      {
        name: 'Ореол ужаса',
        description: 'Нальфешни магическим образом излучает разноцветную ауру. Все существа в пределах 15 футов от нальфешни, видящие этот свет, должны преуспеть в спасброске Мудрости со Сл 15, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ореолу ужаса этого нальфешни на следующие 24 часа.',
      },
      {
        name: 'Телепортация',
        description: `Нальфешни магическим образом телепортируется вместе со всем несомым и носимым снаряжением, на расстояние до 120 футов в свободное пространство, которое он видит.`,
      },
    ],
  },
  {
    name: 'Мэйн',
    nameEn: 'Manes',
    id: CREATURE_MANES,
    description: `Души злых существ, попадающих на Нижние Планы, превращаются в мэйнов — низшую форму демонов. Эти жалкие исчадия нападают на всех кроме демонов, а на Материальный План их призывают те, кто хотят сеять смерть и хаос.\n
Оркус, Повелитель Нежити, может преобразовывать мэйнов в нежить, чаще всего в упырей и тени. Другие демонические повелители просто поедают мэйнов, полностью их уничтожая. В иных случаях умирающий мэйн превращается в зловонное облако, которое через сутки трансформируется в другого мэйна. `,
    sizeType: SIZE_SMALL,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEMON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:94',
    armor: 9,
    hp: {
      cubeCount: 2,
      cubeType: 6,
      cubeBonus: 2,
    },
    speed: {
      [SPEED_WALK]: 20,
    },
    params: {
      [PARAM_STR]: 10,
      [PARAM_DEX]: 9,
      [PARAM_CON]: 13,
      [PARAM_INT]: 3,
      [PARAM_WIT]: 8,
      [PARAM_CHA]: 4,
    },
    resistanceList: [
      DAMAGE_COLD,
      DAMAGE_ELECTRICITY,
      DAMAGE_FIRE,
    ],
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_POISONED,
      CONDITION_FRIGHTENED,
      CONDITION_CHARMED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 9,
      },
    ],
    languageList: [
      {
        id: LANG_ABYSSAL,
        doNotSpeak: true,
      },
    ],
    cr: CR_1_8,
    actionList: [
      {
        name: 'Когти',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 2,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 4,
          },
        },
      },
    ],
  },
  {
    name: 'Теневой демон',
    nameEn: 'Shadow demon',
    id: CREATURE_SHADOW_DEMON,
    description: `Если тело демона уничтожено, но исчадие не смогло заново воплотиться в Бездне, его сущность может принять частично бесплотную форму. Теневые демоны существуют вне привычной демонической иерархии, так как их появление зачастую идёт от магии смертных, а не посредством превращения или роста. Теневые демоны исчезают во тьме и двигаются, не издавая ни звука. Бесплотными когтями они вырывают и пожирают страхи жертв, пробуют на вкус воспоминания и упиваются сомненьями. Яркий свет — их враг, он являет их настоящую форму, рассеивая размытую тьму и освещая крылатого гуманоида, нижняя часть которого рассеивается дымом, и чьи страшные когти рвут разум жертвы.\n
**Теневая натура.** Теневому демону не нужен воздух, еда, питьё и сон. `,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEMON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:94',
    armor: 13,
    hp: {
      cubeCount: 12,
      cubeType: 8,
      cubeBonus: 12,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_FLY]: 30,
    },
    params: {
      [PARAM_STR]: 1,
      [PARAM_DEX]: 17,
      [PARAM_CON]: 12,
      [PARAM_INT]: 14,
      [PARAM_WIT]: 13,
      [PARAM_CHA]: 14,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 5,
      [PARAM_CHA]: 4,
    },
    vulnerabilityList: [
      DAMAGE_RADIANT,
    ],
    resistanceList: [
      DAMAGE_THUNDER,
      DAMAGE_ACID,
      DAMAGE_NECROTIC,
      DAMAGE_FIRE,
      DAMAGE_NONMAGIC_WEAPON,
    ],
    immunityList: [
      DAMAGE_COLD,
      DAMAGE_ELECTRICITY,
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_GRAPPLED,
      CONDITION_EXHAUSTION,
      CONDITION_PETRIFIED,
      CONDITION_RESTRAINED,
      CONDITION_POISONED,
      CONDITION_PARALYZED,
      CONDITION_PRONE,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 11,
      },
    ],
    languageList: [
      LANG_ABYSSAL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_4,
    featureList: [
      {
        name: 'Бестелесное перемещение',
        description: `Демон может перемещаться сквозь других существ и предметы, как если бы они были труднопроходимой местностью. Он получает урон силовым полем 5 (1к10), если оканчивает ход внутри предмета.`,
      },
      {
        name: 'Чувствительность к свету',
        description: `Находясь на ярком свету, демон совершает с помехой броски атаки, а также проверки Мудрости (Внимательность), полагающиеся на зрение.`,
      },
      {
        name: 'Скрытность в тени',
        description: `Находясь в области тусклого света или тьмы, демон может совершать действие Засада бонусным действием.`,
      },
    ],
    actionList: [
      {
        name: 'Когти',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 5,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
            },
          },
          hit: [
            [
              {
                type: DAMAGE_PSYCHIC,
                cubeCount: 2,
                cubeType: 6,
                cubeBonus: 3,
              },
              {
                preText: ' если демон совершал бросок атаки с преимуществом ',
                type: DAMAGE_PSYCHIC,
                cubeCount: 4,
                cubeType: 6,
                cubeBonus: 3,
              },
            ],
          ],
        },
      },
    ],
  },
  {
    name: 'Хезроу',
    nameEn: 'Hezrou',
    id: CREATURE_HEZROU,
    description: `Хезроу — пехота демонических орд Бездны. Они сильные, но глупые, их часто заставляют жертвовать собой более мощные демоны. Они нападают в скопление вражеских сил, и от их зловония тошнит даже самых стойких противников.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEMON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:95',
    armor: {
      ac: 13,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 13,
      cubeType: 10,
      cubeBonus: 65,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 19,
      [PARAM_DEX]: 17,
      [PARAM_CON]: 20,
      [PARAM_INT]: 5,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 13,
    },
    saveThrowCollection: {
      [PARAM_STR]: 7,
      [PARAM_CON]: 8,
      [PARAM_WIT]: 4,
    },
    resistanceList: [
      DAMAGE_COLD,
      DAMAGE_ELECTRICITY,
      DAMAGE_FIRE,
      DAMAGE_NONMAGIC_WEAPON,
    ],
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_POISONED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 11,
      },
    ],
    languageList: [
      LANG_ABYSSAL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_8,
    featureList: [
      {
        name: 'Сопротивление магии',
        description: `Хезроу совершает с преимуществом Сопротивление магии. Чазм совершает с преимуществом спасброски от заклинаний и прочих магических эффектов. спасброски от заклинаний и прочих магических эффектов.`,
      },
      {
        name: 'Вонь',
        description: `Все существа, начинающие ход в пределах 10 футов от хезроу, должны преуспеть в спасброске Телосложения со Сл 14, иначе становятся отравленными до начала своего следующего хода. При успешном спасброске существо получает иммунитет к вони этого хезроу на 24 часа.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Хезроу совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 4,
          },
        },
      },
    ],
  },
  {
    name: 'Чазм',
    nameEn: 'Chasme',
    id: CREATURE_CHASME,
    description: `Этот отвратительный демон выглядит как ужасающая помесь человека и мухи. Он перемешается на четырёх ногах, способных цепляться за стены и потолок. Прилёт чазма предвещает жужжание, вгоняющее жертву в ступор, не позволяющий защититься.\n
Слабые чазмы служат более могущественным хозяевам информаторами или надсмотрщиками. Они предпочитают в качестве наказаний пытки, и прекрасно выслеживают демонов-дезертиров, бежавших от своих владык. Ловля предателей даёт чазмам возможность пытать жертву, не опасаясь наказания.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEMON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:95',
    armor: {
      ac: 15,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 13,
      cubeType: 10,
      cubeBonus: 13,
    },
    speed: {
      [SPEED_WALK]: 20,
      [SPEED_FLY]: 60,
    },
    params: {
      [PARAM_STR]: 15,
      [PARAM_DEX]: 15,
      [PARAM_CON]: 12,
      [PARAM_INT]: 11,
      [PARAM_WIT]: 14,
      [PARAM_CHA]: 10,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 5,
      [PARAM_WIT]: 5,
    },
    resistanceList: [
      DAMAGE_COLD,
      DAMAGE_ELECTRICITY,
      DAMAGE_FIRE,
    ],
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_POISONED,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 10,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 15,
      },
    ],
    languageList: [
      LANG_ABYSSAL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_6,
    featureList: [
      {
        name: 'Гул',
        description: `Чазм издаёт ужасающий гудящий звук, к которому демоны обладают иммунитетом. Все остальные существа, начинающие ход в пределах 30 футов от чазма, должны преуспеть в спасброске Телосложения со Сл 12, иначе они потеряют сознание на 10 минут. Существо, не слышащее гул, автоматически преуспевает в спасброске. Эффект на существе оканчивается, если оно получает урон или другое существо действием обольёт его святой водой. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к этому гулу на следующие 24 часа.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Чазм совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
      {
        name: 'Паучье лазание',
        description: `Чазм может лазать по сложным поверхностям, включая потолки, без совершения проверок характеристик.`,
      },
    ],
    actionList: [
      {
        name: 'Хоботок',
        description: `Максимум хитов цели уменьшается на количество полученного урона некротической энергией. Если этот эффект уменьшает максимум хитов существа до 0, это существо умирает. Максимум хитов снижен, пока существо не окончит продолжительный отдых, или пока существо не получит эффект заклинания, такого как _Высшее восстановление_.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 5,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
            },
          },
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 4,
              cubeType: 6,
              cubeBonus: 2,
            },
            {
              type: DAMAGE_NECROTIC,
              cubeCount: 7,
              cubeType: 6,
            },
          ],
        },
      },
    ],
  },
  {
    name: 'Аллозавр',
    nameEn: 'Allosaurus',
    id: CREATURE_ALLOSAURUS,
    description: `Аллозавр — хищник, обладающий громадным размером, силой и скоростью. Он может догнать и повалить почти любую добычу на открытой местности, вцепивших в жертву своими опасными когтями.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_BEAST,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:96',
    armor: {
      ac: 13,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 6,
      cubeType: 10,
      cubeBonus: 18,
    },
    speed: {
      [SPEED_WALK]: 60,
    },
    params: {
      [PARAM_STR]: 19,
      [PARAM_DEX]: 13,
      [PARAM_CON]: 17,
      [PARAM_INT]: 2,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 5,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 5,
    },
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 15,
      },
    ],
    cr: CR_2,
    featureList: [
      {
        name: 'Наскок',
        description: `Если аллозавр переместится как минимум на 30 футов по прямой к существу, а затем в том же ходу попадёт по нему атакой когтём, эта цель должна преуспеть в спасброске Силы со Сл 13, иначе будет сбита с ног. Если цель сбита с ног, аллозавр может бонусным действием совершить по ней одну атаку укусом.`,
      },
    ],
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 1,
            cubeType: 8,
            cubeBonus: 4,
          },
        },
      },
    ],
  },
  {
    name: 'Анкилозавр',
    nameEn: 'Ankylosaurus',
    id: CREATURE_ANKYLOSAURUS,
    description: ``,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_BEAST,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:96',
    armor: {
      ac: 15,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 8,
      cubeType: 12,
      cubeBonus: 16,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 19,
      [PARAM_DEX]: 11,
      [PARAM_CON]: 15,
      [PARAM_INT]: 2,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 5,
    },
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 11,
      },
    ],
    cr: CR_3,
    actionList: [
      {
        name: 'Хвост',
        description: 'Если цель — существо, она должна преуспеть в спасброске Силы со Сл 14, иначе будет сбита с ног.',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 4,
            cubeType: 6,
            cubeBonus: 4,
          },
        },
      },
    ],
  },
  {
    name: 'Плезиозавр',
    nameEn: 'Plesiosaurus',
    id: CREATURE_PLESIOSAURUS,
    description: `Плезиозавр это водный динозавр с компактным телом и мощными плавниками. Хищный и агрессивный, он нападает на любое встреченное им существо. Его гибкая шея, составляющая треть от общей длины, извивается во все стороны и позволяет совершать мощные укусы.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_BEAST,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:97',
    armor: {
      ac: 13,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 8,
      cubeType: 10,
      cubeBonus: 24,
    },
    speed: {
      [SPEED_WALK]: 20,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 18,
      [PARAM_DEX]: 15,
      [PARAM_CON]: 16,
      [PARAM_INT]: 2,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 5,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 3,
      [SKILL_STEALTH]: 4,
    },
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 13,
      },
    ],
    cr: CR_2,
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 3,
            cubeType: 6,
            cubeBonus: 4,
          },
        },
      },
    ],
  },
  {
    name: 'Птеранодон',
    nameEn: 'Pteranodon',
    id: CREATURE_PTERANODON,
    description: `Эти крылатые рептилии с размахом крыльев 15–20 футов обычно ныряют в воду за мелкой добычей, но не гнушаются возможностью атаковать любое подходящее существо. У птеранодона нет зубов, однако есть острый клюв для той добычи, которую он не может проглотить за один раз.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_BEAST,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:97',
    armor: {
      ac: 13,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 3,
      cubeType: 8,
    },
    speed: {
      [SPEED_WALK]: 10,
      [SPEED_FLY]: 60,
    },
    params: {
      [PARAM_STR]: 12,
      [PARAM_DEX]: 15,
      [PARAM_CON]: 10,
      [PARAM_INT]: 2,
      [PARAM_WIT]: 9,
      [PARAM_CHA]: 5,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 1,
    },
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 11,
      },
    ],
    cr: CR_1_4,
    featureList: [
      {
        name: 'Облёт',
        description: 'Птеранодон не провоцирует атаки, когда вылетает из досягаемости врага.',
      },
    ],
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 3,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 4,
            cubeBonus: 1,
          },
        },
      },
    ],
  },
  {
    name: 'Тираннозавр рекс',
    nameEn: 'Tyrannosaurus rex',
    id: CREATURE_TYRANNOSAURUS_REX,
    description: `Этого огромного хищника боятся все остальные существа на его территории. Несмотря на его размер и вес, тираннозавр — отличный бегун. Он преследует всё, что может съесть. И есть не так много существ, которых он не пытался бы съесть. В поисках нормальной жертвы тираннозавр может перебиваться падалью, или любыми небольшими существами, пытающимися украсть его добычу.`,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_BEAST,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:97',
    armor: {
      ac: 13,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 13,
      cubeType: 12,
      cubeBonus: 52,
    },
    speed: {
      [SPEED_WALK]: 50,
    },
    params: {
      [PARAM_STR]: 25,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 19,
      [PARAM_INT]: 2,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 9,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 4,
    },
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    cr: CR_8,
    actionList: [
      {
        name: 'Мультиатака',
        description: 'Тираннозавр совершает две атаки: одну укусом, и одну хвостом. Он не может совершить обе атаки по одной и той же цели.',
      },
      {
        name: 'Укус',
        description: 'Если цель — существо с размером не больше Среднего, она становится схваченной (Сл высвобождения 17). Пока цель схвачена, она опутана, и тираннозавр не может кусать другую цель.',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 4,
            cubeType: 12,
            cubeBonus: 7,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 3,
            cubeType: 8,
            cubeBonus: 7,
          },
        },
      },
    ],
  },
  {
    name: 'Трицератопс',
    nameEn: 'Triceratops',
    id: CREATURE_TRICERATOPS,
    description: `Один из самых агрессивных травоядных динозавров. Череп трицератопса имеет костяной воротник, служащий для защиты. С внушительными рогами и впечатляющей скоростью трицератопс может без проблем нанизать хищника на рога или растоптать.`,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_BEAST,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:97',
    armor: {
      ac: 13,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 10,
      cubeType: 12,
      cubeBonus: 30,
    },
    speed: {
      [SPEED_WALK]: 50,
    },
    params: {
      [PARAM_STR]: 22,
      [PARAM_DEX]: 9,
      [PARAM_CON]: 17,
      [PARAM_INT]: 2,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 5,
    },
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    cr: CR_5,
    featureList: [
      {
        name: 'Растаптывающий рывок',
        description: `Если трицератопс переместится как минимум на 20 футов по прямой к существу, а затем в том же ходу попадёт по нему атакой бодания, эта цель должна преуспеть в спасброске Силы со Сл 13, иначе будет сбита с ног. Если цель сбита с ног, трицератопс может бонусным действием совершить по ней одну атаку растаптыванием. `,
      },
    ],
    actionList: [
      {
        name: 'Бодание',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 9,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 4,
            cubeType: 8,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Растаптывание',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 9,
          range: 5,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
              condition: CONDITION_PRONE,
            },
          },
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 3,
            cubeType: 10,
            cubeBonus: 6,
          },
        },
      },
    ],
  },
  {
    name: 'Доппельгангер',
    nameEn: 'Doppelganger',
    id: CREATURE_DOPPELGANGER,
    description: `Доппельгангеры — хитрые перевёртыши, которые, принимая вид других гуманоидов, используют это для сбрасывания преследования и заманивая жертв в ловушки. Мало кто внушают страх, подозрения и использует ложь лучше, чем доппельгангеры. Распространившись по всем землям и цивилизациям, они могут принять вид любого существа любой расы.\n
**Кража секретов.** Возможность принимать любой облик позволяет доппельгангеру влиться почти в любое общество, но эта способность не включает в себя знание языков, не даёт манеры, память и характер. Доппельгангеры нередко преследуют или похищают существ, в которых намерены превратиться, изучая их, и выведывая их секреты. Доппельгангеры способны читать поверхностные мысли существ, что позволяет им узнавать имена, желания, страхи существ, и даже немногие разрозненные воспоминания. Доппельгангер, имитирующий конкретное существо в течение долгого периода, может держать оригинал живым под рукой неделями, ежедневно изучая разум жертвы, чтобы достоверно узнать, как та говорит и поступает.\n
**Мошенники гедонисты.** Доппельгангеры работают в одиночку или небольшими группами, в которых роли переходят от одного жулика к другому. Пока один доппельгангер занимает место убитого торговца или дворянина, остальные берут на себя роли личностей, в зависимости от обстоятельств, играя родственников или слуг, и так живут за счёт жертвы.\n
**Подкидыши.** Доппельгангеры слишком ленивы и корыстны, чтобы воспитывать своё потомство. Они принимают облик притягательных мужчин, чтобы соблазнить женщин, а затем бросить воспитывать их детей. Ребёнок доппельгангер выглядит как нормальный представитель вида матери, пока не достигнет подросткового возраста, во время которого обнаруживает свою истинную природу и отправляется в путь, чтобы отыскать своих родичей и присоединиться к ним. `,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
      CREATURE_TYPE_SHAPESHIFTER,
    ],
    aligmentId: ALIGMENT_N,
    source: 'MM:98',
    armor: 14,
    hp: {
      cubeCount: 8,
      cubeType: 8,
      cubeBonus: 16,
    },
    speed: {
      [SPEED_WALK]: 50,
    },
    params: {
      [PARAM_STR]: 11,
      [PARAM_DEX]: 18,
      [PARAM_CON]: 14,
      [PARAM_INT]: 11,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 14,
    },
    skillCollection: {
      [SKILL_DECEPTION]: 6,
      [SKILL_INSIGHT]: 3,
    },
    immunityConditionList: [
      CONDITION_CHARMED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 11,
      },
    ],
    cr: CR_3,
    languageList: [
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Перевёртыш',
        description: `Доппельгангер может действием превратиться в Маленького или Среднего гуманоида, которого уже видел, или принять свой истинный облик. Вся его статистика, кроме размера, одинаковая во всех обликах. Всё несомое и носимое им снаряжение не превращается. Он принимает свой истинный облик, если умирает.`,
      },
      {
        name: 'Мастер устраивать засады',
        description: `В первом раунде сражения доппельгангер совершает с преимуществом броски атаки по всем существам, которых он застал врасплох.`,
      },
      {
        name: 'Внезапная атака',
        description: `Если доппельгангер застаёт врасплох существо, и попадает по нему атакой в первом раунде сражения, цель получает от атаки дополнительный урон 10 (3к6).`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Доппельгангер совершает две рукопашные атаки.`,
      },
      {
        name: 'Размашистый удар',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 1,
            cubeType: 6,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Чтение мыслей',
        description: `Доппельгангер магическим образом читает поверхностные мысли одного существа в пределах 60 футов от себя. Эффект может проникать через препятствия, но 3 фута древесины или грунта, 2 фута камня, 2 дюйма металла или тонкий лист свинца блокируют его. Пока цель находится в пределах дистанции, доппельгангер может продолжать чтение мыслей, при условии, что концентрация доппельгангера не прерывается (как при концентрации на заклинании). Читая мысли цели, доппельгангер совершает с преимуществом проверки Мудрости (Проницательность) и Харизмы (Запугивание, Обман и Убеждение) против цели.`,
      },
    ],
  },
  {
    name: 'Древний белый дракон',
    nameEn: 'Ancient white dragon',
    id: CREATURE_ANCIENT_WHITE_DRAGON,
    description: whiteDragonDescription,
    sizeType: SIZE_GARGANTUA,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:103',
    armor: {
      ac: 20,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 18,
      cubeType: 20,
      cubeBonus: 144,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_DIG]: 40,
      [SPEED_FLY]: 80,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 26,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 26,
      [PARAM_INT]: 10,
      [PARAM_WIT]: 13,
      [PARAM_CHA]: 14,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 6,
      [PARAM_CON]: 14,
      [PARAM_WIT]: 7,
      [PARAM_CHA]: 8,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 13,
      [SKILL_STEALTH]: 6,
    },
    immunityList: [
      DAMAGE_COLD,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 23,
      },
    ],
    cr: CR_20,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Хождение по льду',
        description: `Дракон может перемещаться по ледяным поверхностям и лазать по ним, не совершая проверок характеристик. Кроме того, труднопроходимая местность, вызванная льдом или снегом, не стоит дополнительного перемещения.`,
      },
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 14,
          range: 15,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 2,
              cubeType: 10,
              cubeBonus: 8,
            },
            {
              type: DAMAGE_COLD,
              cubeCount: 2,
              cubeType: 8,
            },
          ],
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 14,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 14,
          range: 20,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 16, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Холодное дыхание',
        description: `Дракон выдыхает волну ледяного воздуха 90-футовым конусом. Все существа в этой области должны совершить спасбросок Телосложения со Сл 22, получая урон холодом 72 (16к8) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 15 футов от дракона должны преуспеть в спасброске Ловкости со Сл 22, иначе получат дробящий урон 15 (2к6 + 8) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Взрослый белый дракон',
    nameEn: 'Adult white dragon',
    id: CREATURE_ADULT_WHITE_DRAGON,
    description: whiteDragonDescription,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:104',
    armor: {
      ac: 18,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 16,
      cubeType: 12,
      cubeBonus: 96,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_DIG]: 30,
      [SPEED_FLY]: 80,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 22,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 22,
      [PARAM_INT]: 8,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 12,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 5,
      [PARAM_CON]: 11,
      [PARAM_WIT]: 6,
      [PARAM_CHA]: 6,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 11,
      [SKILL_STEALTH]: 5,
    },
    immunityList: [
      DAMAGE_COLD,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 21,
      },
    ],
    cr: CR_13,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Хождение по льду',
        description: `Дракон может перемещаться по ледяным поверхностям и лазать по ним, не совершая проверок характеристик. Кроме того, труднопроходимая местность, вызванная льдом или снегом, не стоит дополнительного перемещения.`,
      },
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 11,
          range: 10,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 2,
              cubeType: 10,
              cubeBonus: 6,
            },
            {
              type: DAMAGE_COLD,
              cubeCount: 1,
              cubeType: 8,
            },
          ],
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 11,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 11,
          range: 15,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 14, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Холодное дыхание',
        description: `Дракон выдыхает волну ледяного воздуха 60-футовым конусом. Все существа в этой области должны совершить спасбросок Телосложения со Сл 19, получая урон холодом 54 (12к8) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 10 футов от дракона должны преуспеть в спасброске Ловкости со Сл 19, иначе получат дробящий урон 13 (2к6 + 6) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Молодой белый дракон',
    nameEn: 'Young white dragon',
    id: CREATURE_YOUNG_WHITE_DRAGON,
    description: whiteDragonDescription,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:104',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 14,
      cubeType: 10,
      cubeBonus: 56,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_DIG]: 20,
      [SPEED_FLY]: 80,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 18,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 18,
      [PARAM_INT]: 6,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 12,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 3,
      [PARAM_CON]: 7,
      [PARAM_WIT]: 3,
      [PARAM_CHA]: 4,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 6,
      [SKILL_STEALTH]: 3,
    },
    immunityList: [
      DAMAGE_COLD,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 30,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 16,
      },
    ],
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    cr: CR_6,
    featureList: [
      {
        name: 'Хождение по льду',
        description: `Дракон может перемещаться по ледяным поверхностям и лазать по ним, не совершая проверок характеристик. Кроме того, труднопроходимая местность, вызванная льдом или снегом, не стоит дополнительного перемещения.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 10,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 2,
              cubeType: 10,
              cubeBonus: 4,
            },
            {
              type: DAMAGE_COLD,
              cubeCount: 1,
              cubeType: 8,
            },
          ],
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Холодное дыхание',
        description: `Дракон выдыхает волну ледяного воздуха 30-футовым конусом. Все существа в этой области должны совершить спасбросок Телосложения со Сл 15, получая урон холодом 45 (10к8) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Вирмлинг белого дракона',
    nameEn: 'White dragon wyrmling',
    id: CREATURE_WHITE_DRAGON_WYRMLING,
    description: whiteDragonDescription,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:105',
    armor: {
      ac: 16,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 5,
      cubeType: 8,
      cubeBonus: 10,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_DIG]: 15,
      [SPEED_FLY]: 60,
      [SPEED_SWIM]: 30,
    },
    params: {
      [PARAM_STR]: 14,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 14,
      [PARAM_INT]: 5,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 11,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 2,
      [PARAM_CON]: 4,
      [PARAM_WIT]: 2,
      [PARAM_CHA]: 2,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 4,
      [SKILL_STEALTH]: 2,
    },
    immunityList: [
      DAMAGE_COLD,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 10,
      },
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    languageList: [
      LANG_DRACONIC,
    ],
    cr: CR_2,
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 1,
              cubeType: 10,
              cubeBonus: 2,
            },
            {
              type: DAMAGE_COLD,
              cubeCount: 1,
              cubeType: 4,
            },
          ],
        },
      },
      {
        name: 'Холодное дыхание',
        description: `Дракон выдыхает волну града 15-футовым конусом. Все существа в этой области должны совершить спасбросок Телосложения со Сл 12, получая урон холодом 22 (5к8) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Древний зелёный дракон',
    nameEn: 'Ancient green dragon',
    id: CREATURE_ANCIENT_GREEN_DRAGON,
    description: greenDragonDescription,
    sizeType: SIZE_GARGANTUA,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:107',
    armor: {
      ac: 21,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 22,
      cubeType: 20,
      cubeBonus: 154,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 80,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 27,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 25,
      [PARAM_INT]: 20,
      [PARAM_WIT]: 17,
      [PARAM_CHA]: 19,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 8,
      [PARAM_CON]: 14,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 11,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 17,
      [SKILL_DECEPTION]: 11,
      [SKILL_INSIGHT]: 10,
      [SKILL_STEALTH]: 8,
      [SKILL_PERSUASION]: 11,
    },
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_POISONED,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 27,
      },
    ],
    cr: CR_22,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Амфибия',
        description: `Дракон может дышать и воздухом и под водой.`,
      },
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 15,
          range: 15,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 2,
              cubeType: 10,
              cubeBonus: 8,
            },
            {
              type: DAMAGE_POISON,
              cubeCount: 3,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 15,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 4,
            cubeType: 6,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 15,
          range: 20,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 19, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Ядовитое дыхание',
        description: `Дракон выдыхает ядовитый газ 90-футовым конусом. Все существа в этой области должны совершить спасбросок Телосложения со Сл 22, получая урон ядом 77 (22к8) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 15 футов от дракона должны преуспеть в спасброске Ловкости со Сл 23, иначе получат дробящий урон 15 (2к6 + 8) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Взрослый зелёный дракон',
    nameEn: 'Adult green dragon',
    id: CREATURE_ADULT_GREEN_DRAGON,
    description: greenDragonDescription,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:108',
    armor: {
      ac: 19,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 18,
      cubeType: 12,
      cubeBonus: 90,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 80,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 23,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 21,
      [PARAM_INT]: 18,
      [PARAM_WIT]: 15,
      [PARAM_CHA]: 17,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 6,
      [PARAM_CON]: 10,
      [PARAM_WIT]: 7,
      [PARAM_CHA]: 8,
    },
    skillCollection: {
      [SKILL_DECEPTION]: 8,
      [SKILL_INSIGHT]: 7,
      [SKILL_PERCEPTION]: 12,
      [SKILL_PERSUASION]: 8,
      [SKILL_STEALTH]: 6,
    },
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_POISONED,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 22,
      },
    ],
    cr: CR_15,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Амфибия',
        description: `Дракон может дышать и воздухом и под водой.`,
      },
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 11,
          range: 10,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 2,
              cubeType: 10,
              cubeBonus: 6,
            },
            {
              type: DAMAGE_POISON,
              cubeCount: 2,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 11,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 11,
          range: 15,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 16, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Ядовитое дыхание',
        description: `Дракон выдыхает ядовитый газ 60-футовым конусом. Все существа в этой области должны совершить спасбросок Телосложения со Сл 18, получая урон ядом 56 (16к6) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 10 футов от дракона должны преуспеть в спасброске Ловкости со Сл 19, иначе получат дробящий урон 15 (2к6 + 6) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Молодой зелёный дракон',
    nameEn: 'Young green dragon',
    id: CREATURE_YOUNG_GREEN_DRAGON,
    description: greenDragonDescription,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:108',
    armor: {
      ac: 18,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 16,
      cubeType: 10,
      cubeBonus: 45,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 80,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 19,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 17,
      [PARAM_INT]: 16,
      [PARAM_WIT]: 13,
      [PARAM_CHA]: 15,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 4,
      [PARAM_CON]: 6,
      [PARAM_WIT]: 4,
      [PARAM_CHA]: 5,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 7,
      [SKILL_DECEPTION]: 5,
      [SKILL_STEALTH]: 4,
    },
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_POISONED,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 30,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 17,
      },
    ],
    cr: CR_8,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Амфибия',
        description: `Дракон может дышать и воздухом и под водой.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 10,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 2,
              cubeType: 10,
              cubeBonus: 4,
            },
            {
              type: DAMAGE_POISON,
              cubeCount: 2,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Ядовитое дыхание',
        description: `Дракон выдыхает ядовитый газ 30-футовым конусом. Все существа в этой области должны совершить спасбросок Телосложения со Сл 14, получая урон ядом 42 (12к6) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Вирмлинг зелёного дракона',
    nameEn: 'Green dragon wyrmling',
    id: CREATURE_GREEN_DRAGON_WYRMLING,
    description: greenDragonDescription,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:109',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 7,
      cubeType: 8,
      cubeBonus: 7,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_FLY]: 60,
      [SPEED_SWIM]: 30,
    },
    params: {
      [PARAM_STR]: 15,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 13,
      [PARAM_INT]: 14,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 13,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 3,
      [PARAM_CON]: 3,
      [PARAM_WIT]: 2,
      [PARAM_CHA]: 3,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 4,
      [SKILL_STEALTH]: 3,
    },
    immunityList: [
      DAMAGE_POISON,
    ],
    immunityConditionList: [
      CONDITION_POISONED,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 10,
      },
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    cr: CR_2,
    languageList: [
      LANG_DRACONIC,
    ],
    featureList: [
      {
        name: 'Амфибия',
        description: `Дракон может дышать и воздухом и под водой.`,
      },
    ],
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 1,
              cubeType: 10,
              cubeBonus: 2,
            },
            {
              type: DAMAGE_POISON,
              cubeCount: 1,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Ядовитое дыхание',
        description: `Дракон выдыхает ядовитый газ 15-футовым конусом. Все существа в этой области должны совершить спасбросок Телосложения со Сл 11, получая урон ядом 21 (6к6) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Древний красный дракон',
    nameEn: 'Ancient red dragon',
    id: CREATURE_ANCIENT_RED_DRAGON,
    description: redDragonDescription,
    sizeType: SIZE_GARGANTUA,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:111',
    armor: {
      ac: 22,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 28,
      cubeType: 20,
      cubeBonus: 252,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_CLIMB]: 40,
      [SPEED_FLY]: 80,
    },
    params: {
      [PARAM_STR]: 30,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 23,
      [PARAM_INT]: 18,
      [PARAM_WIT]: 15,
      [PARAM_CHA]: 23,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 7,
      [PARAM_CON]: 16,
      [PARAM_WIT]: 9,
      [PARAM_CHA]: 13,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 16,
      [SKILL_STEALTH]: 7,
    },
    immunityList: [
      DAMAGE_FIRE,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 26,
      },
    ],
    cr: CR_24,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 17,
          range: 15,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 2,
              cubeType: 10,
              cubeBonus: 10,
            },
            {
              type: DAMAGE_FIRE,
              cubeCount: 4,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 17,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 4,
            cubeType: 6,
            cubeBonus: 10,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 17,
          range: 20,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 10,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 21, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Огненное дыхание',
        description: `Дракон выдыхает огонь 90-футовым конусом. Все существа в этой области должны совершить спасбросок Ловкости со Сл 24, получая урон огнём 91 (26к6) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 15 футов от дракона должны преуспеть в спасброске Ловкости со Сл 25, иначе получат дробящий урон 17 (2к6 + 10) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Взрослый красный дракон',
    nameEn: 'Adult red dragon',
    id: CREATURE_ADULT_RED_DRAGON,
    description: redDragonDescription,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:112',
    armor: {
      ac: 19,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 19,
      cubeType: 12,
      cubeBonus: 133,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_CLIMB]: 40,
      [SPEED_FLY]: 80,
    },
    params: {
      [PARAM_STR]: 27,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 25,
      [PARAM_INT]: 16,
      [PARAM_WIT]: 13,
      [PARAM_CHA]: 21,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 6,
      [PARAM_CON]: 13,
      [PARAM_WIT]: 7,
      [PARAM_CHA]: 11,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 13,
      [SKILL_STEALTH]: 6,
    },
    immunityList: [
      DAMAGE_FIRE,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 23,
      },
    ],
    cr: CR_17,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 14,
          range: 10,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 2,
              cubeType: 10,
              cubeBonus: 8,
            },
            {
              type: DAMAGE_FIRE,
              cubeCount: 2,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 14,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 14,
          range: 15,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 19, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Огненное дыхание',
        description: `Дракон выдыхает огонь 60-футовым конусом. Все существа в этой области должны совершить спасбросок Ловкости со Сл 21, получая урон огнём 63 (18к6) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 10 футов от дракона должны преуспеть в спасброске Ловкости со Сл 22, иначе получат дробящий урон 15 (2к6 + 8) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Молодой красный дракон',
    nameEn: 'Young red dragon',
    id: CREATURE_YOUNG_RED_DRAGON,
    description: redDragonDescription,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:112',
    armor: {
      ac: 18,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 17,
      cubeType: 10,
      cubeBonus: 85,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_CLIMB]: 40,
      [SPEED_FLY]: 80,
    },
    params: {
      [PARAM_STR]: 23,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 21,
      [PARAM_INT]: 14,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 19,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 4,
      [PARAM_CON]: 9,
      [PARAM_WIT]: 4,
      [PARAM_CHA]: 8,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 8,
      [SKILL_STEALTH]: 4,
    },
    immunityList: [
      DAMAGE_FIRE,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 30,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 18,
      },
    ],
    cr: CR_10,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 10,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 2,
              cubeType: 10,
              cubeBonus: 6,
            },
            {
              type: DAMAGE_FIRE,
              cubeCount: 1,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Огненное дыхание',
        description: `Дракон выдыхает огонь 30-футовым конусом. Все существа в этой области должны совершить спасбросок Ловкости со Сл 17, получая урон огнём 56 (16к6) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Вирмлинг красного дракона',
    nameEn: 'Red dragon wyrmling',
    id: CREATURE_RED_DRAGON_WYRMLING,
    description: redDragonDescription,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:112',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 10,
      cubeType: 8,
      cubeBonus: 30,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_CLIMB]: 30,
      [SPEED_FLY]: 60,
    },
    params: {
      [PARAM_STR]: 19,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 17,
      [PARAM_INT]: 12,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 15,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 2,
      [PARAM_CON]: 5,
      [PARAM_WIT]: 2,
      [PARAM_CHA]: 4,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 4,
      [SKILL_STEALTH]: 2,
    },
    immunityList: [
      DAMAGE_FIRE,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 10,
      },
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    cr: CR_10,
    languageList: [
      LANG_DRACONIC,
    ],
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 1,
              cubeType: 10,
              cubeBonus: 4,
            },
            {
              type: DAMAGE_FIRE,
              cubeCount: 1,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Огненное дыхание',
        description: `Дракон выдыхает огонь 15-футовым конусом. Все существа в этой области должны совершить спасбросок Ловкости со Сл 13, получая урон огнём 24 (7к6) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Древний синий дракон',
    nameEn: 'Ancient blue dragon',
    id: CREATURE_ANCIENT_BLUE_DRAGON,
    description: blueDragonDescription,
    sizeType: SIZE_GARGANTUA,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:114',
    armor: {
      ac: 22,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 26,
      cubeType: 20,
      cubeBonus: 208,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_DIG]: 40,
      [SPEED_FLY]: 80,
    },
    params: {
      [PARAM_STR]: 29,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 27,
      [PARAM_INT]: 18,
      [PARAM_WIT]: 17,
      [PARAM_CHA]: 21,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 7,
      [PARAM_CON]: 15,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 12,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 17,
      [SKILL_STEALTH]: 7,
    },
    immunityList: [
      DAMAGE_ELECTRICITY,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 27,
      },
    ],
    cr: CR_23,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 16,
          range: 15,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 2,
              cubeType: 10,
              cubeBonus: 9,
            },
            {
              type: DAMAGE_ELECTRICITY,
              cubeCount: 2,
              cubeType: 10,
            },
          ],
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 16,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 9,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 16,
          range: 20,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 9,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 20, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Электрическое дыхание',
        description: `Дракон выдыхает молнию 120-футовой линией шириной 10 футов. Все существа в этой области должны совершить спасбросок Ловкости со Сл 23, получая урон электричеством 88 (16к10) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 15 футов от дракона должны преуспеть в спасброске Ловкости со Сл 24, иначе получат дробящий урон 16 (2к6 + 9) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Взрослый синий дракон',
    nameEn: 'Adult blue dragon',
    id: CREATURE_ADULT_BLUE_DRAGON,
    description: blueDragonDescription,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:115',
    armor: {
      ac: 19,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 18,
      cubeType: 12,
      cubeBonus: 108,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_DIG]: 30,
      [SPEED_FLY]: 80,
    },
    params: {
      [PARAM_STR]: 25,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 23,
      [PARAM_INT]: 16,
      [PARAM_WIT]: 15,
      [PARAM_CHA]: 19,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 5,
      [PARAM_CON]: 11,
      [PARAM_WIT]: 7,
      [PARAM_CHA]: 9,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 12,
      [SKILL_STEALTH]: 5,
    },
    immunityList: [
      DAMAGE_ELECTRICITY,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 22,
      },
    ],
    cr: CR_16,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 12,
          range: 10,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 2,
              cubeType: 10,
              cubeBonus: 7,
            },
            {
              type: DAMAGE_ELECTRICITY,
              cubeCount: 1,
              cubeType: 10,
            },
          ],
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 12,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 7,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 12,
          range: 15,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 7,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 17, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Электрическое дыхание',
        description: `Дракон выдыхает молнию 90-футовой линией шириной 5 футов. Все существа в этой области должны совершить спасбросок Ловкости со Сл 19, получая урон электричеством 66 (12к10) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 10 футов от дракона должны преуспеть в спасброске Ловкости со Сл 20, иначе получат дробящий урон 14 (2к6 + 7) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Молодой синий дракон',
    nameEn: 'Young blue dragon',
    id: CREATURE_YOUNG_BLUE_DRAGON,
    description: blueDragonDescription,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:115',
    armor: {
      ac: 18,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 16,
      cubeType: 10,
      cubeBonus: 64,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_DIG]: 20,
      [SPEED_FLY]: 80,
    },
    params: {
      [PARAM_STR]: 21,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 19,
      [PARAM_INT]: 14,
      [PARAM_WIT]: 13,
      [PARAM_CHA]: 17,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 4,
      [PARAM_CON]: 8,
      [PARAM_WIT]: 5,
      [PARAM_CHA]: 7,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 9,
      [SKILL_STEALTH]: 4,
    },
    immunityList: [
      DAMAGE_ELECTRICITY,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 30,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 19,
      },
    ],
    cr: CR_9,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 9,
          range: 10,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 2,
              cubeType: 10,
              cubeBonus: 5,
            },
            {
              type: DAMAGE_ELECTRICITY,
              cubeCount: 1,
              cubeType: 10,
            },
          ],
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 9,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 5,
          },
        },
      },
      {
        name: 'Электрическое дыхание',
        description: `Дракон выдыхает молнию 60-футовой линией шириной 5 футов. Все существа в этой области должны совершить спасбросок Ловкости со Сл 16, получая урон электричеством 55 (10к10) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Вирмлинг синего дракона',
    nameEn: 'Blue dragon wyrmling',
    id: CREATURE_BLUE_DRAGON_WYRMLING,
    description: blueDragonDescription,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:115',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 8,
      cubeType: 8,
      cubeBonus: 16,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_DIG]: 15,
      [SPEED_FLY]: 60,
    },
    params: {
      [PARAM_STR]: 17,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 15,
      [PARAM_INT]: 12,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 15,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 2,
      [PARAM_CON]: 4,
      [PARAM_WIT]: 2,
      [PARAM_CHA]: 4,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 4,
      [SKILL_STEALTH]: 2,
    },
    immunityList: [
      DAMAGE_ELECTRICITY,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 10,
      },
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    cr: CR_3,
    languageList: [
      LANG_DRACONIC,
    ],
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 1,
              cubeType: 10,
              cubeBonus: 3,
            },
            {
              type: DAMAGE_ELECTRICITY,
              cubeCount: 1,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Электрическое дыхание',
        description: `Дракон выдыхает молнию 30-футовой линией шириной 5 футов. Все существа в этой области должны совершить спасбросок Ловкости со Сл 12, получая урон электричеством 22 (4к10) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Древний чёрный дракон',
    nameEn: 'Ancient black dragon',
    id: CREATURE_ANCIENT_BLACK_DRAGON,
    description: blackDragonDescription,
    sizeType: SIZE_GARGANTUA,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:117',
    armor: {
      ac: 22,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 21,
      cubeType: 20,
      cubeBonus: 147,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 80,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 27,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 25,
      [PARAM_INT]: 16,
      [PARAM_WIT]: 15,
      [PARAM_CHA]: 19,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 9,
      [PARAM_CON]: 14,
      [PARAM_WIT]: 9,
      [PARAM_CHA]: 11,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 16,
      [SKILL_STEALTH]: 9,
    },
    immunityList: [
      DAMAGE_ACID,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 26,
      },
    ],
    cr: CR_21,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Амфибия',
        description: `Дракон может дышать и воздухом и под водой.`,
      },
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 15,
          range: 15,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 2,
              cubeType: 10,
              cubeBonus: 8,
            },
            {
              type: DAMAGE_ACID,
              cubeCount: 2,
              cubeType: 8,
            },
          ],
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 15,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 15,
          range: 20,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 19, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Кислотное дыхание',
        description: `Дракон выдыхает кислоту 90-футовой линией шириной 10 футов. Все существа в этой области должны совершить спасбросок Ловкости со Сл 22, получая урон электричеством 67 (15к8) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 15 футов от дракона должны преуспеть в спасброске Ловкости со Сл 23, иначе получат дробящий урон 15 (2к6 + 8) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Взрослый чёрный дракон',
    nameEn: 'Adult black dragon',
    id: CREATURE_ADULT_BLACK_DRAGON,
    description: blackDragonDescription,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:118',
    armor: {
      ac: 19,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 17,
      cubeType: 12,
      cubeBonus: 85,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 80,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 23,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 21,
      [PARAM_INT]: 14,
      [PARAM_WIT]: 13,
      [PARAM_CHA]: 17,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 7,
      [PARAM_CON]: 10,
      [PARAM_WIT]: 6,
      [PARAM_CHA]: 8,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 11,
      [SKILL_STEALTH]: 7,
    },
    immunityList: [
      DAMAGE_ACID,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 21,
      },
    ],
    cr: CR_14,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Амфибия',
        description: `Дракон может дышать и воздухом и под водой.`,
      },
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 11,
          range: 10,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 2,
              cubeType: 10,
              cubeBonus: 6,
            },
            {
              type: DAMAGE_ACID,
              cubeCount: 1,
              cubeType: 8,
            },
          ],
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 11,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 11,
          range: 15,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 16, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Кислотное дыхание',
        description: `Дракон выдыхает кислоту 60-футовой линией шириной 5 футов. Все существа в этой области должны совершить спасбросок Ловкости со Сл 18, получая урон электричеством 54 (12к8) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 15 футов от дракона должны преуспеть в спасброске Ловкости со Сл 19, иначе получат дробящий урон 13 (2к6 + 6) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Молодой чёрный дракон',
    nameEn: 'Young black dragon',
    id: CREATURE_YOUNG_BLACK_DRAGON,
    description: blackDragonDescription,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:118',
    armor: {
      ac: 18,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 15,
      cubeType: 10,
      cubeBonus: 45,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 80,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 19,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 17,
      [PARAM_INT]: 12,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 15,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 5,
      [PARAM_CON]: 6,
      [PARAM_WIT]: 3,
      [PARAM_CHA]: 5,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 6,
      [SKILL_STEALTH]: 5,
    },
    immunityList: [
      DAMAGE_ACID,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 30,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 16,
      },
    ],
    cr: CR_7,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Амфибия',
        description: `Дракон может дышать и воздухом и под водой.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 10,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 2,
              cubeType: 10,
              cubeBonus: 4,
            },
            {
              type: DAMAGE_ACID,
              cubeCount: 1,
              cubeType: 8,
            },
          ],
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Кислотное дыхание',
        description: `Дракон выдыхает кислоту 30-футовой линией шириной 5 футов. Все существа в этой области должны совершить спасбросок Ловкости со Сл 14, получая урон электричеством 49 (11к8) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Вирмлинг чёрного дракона',
    nameEn: 'Black dragon wyrmling',
    id: CREATURE_BLACK_DRAGON_WYRMLING,
    description: blackDragonDescription,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:118',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 6,
      cubeType: 8,
      cubeBonus: 6,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_FLY]: 60,
      [SPEED_SWIM]: 30,
    },
    params: {
      [PARAM_STR]: 15,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 13,
      [PARAM_INT]: 10,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 13,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 4,
      [PARAM_CON]: 3,
      [PARAM_WIT]: 2,
      [PARAM_CHA]: 3,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 4,
      [SKILL_STEALTH]: 4,
    },
    immunityList: [
      DAMAGE_ACID,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 10,
      },
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    cr: CR_2,
    languageList: [
      LANG_DRACONIC,
    ],
    featureList: [
      {
        name: 'Амфибия',
        description: `Дракон может дышать и воздухом и под водой.`,
      },
    ],
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 1,
              cubeType: 10,
              cubeBonus: 2,
            },
            {
              type: DAMAGE_ACID,
              cubeCount: 1,
              cubeType: 4,
            },
          ],
        },
      },
      {
        name: 'Кислотное дыхание',
        description: `Дракон выдыхает кислоту 15-футовой линией шириной 5 футов. Все существа в этой области должны совершить спасбросок Ловкости со Сл 11, получая урон электричеством 22 (5к8) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Древний бронзовый дракон',
    nameEn: 'Ancient bronze dragon',
    id: CREATURE_ANCIENT_BRONZE_DRAGON,
    description: bronzeDragonDescription,
    sizeType: SIZE_GARGANTUA,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LG,
    source: 'MM:121',
    armor: {
      ac: 22,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 22,
      cubeType: 20,
      cubeBonus: 192,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 80,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 29,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 27,
      [PARAM_INT]: 18,
      [PARAM_WIT]: 17,
      [PARAM_CHA]: 21,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 7,
      [PARAM_CON]: 15,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 12,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 17,
      [SKILL_INSIGHT]: 10,
      [SKILL_STEALTH]: 7,
    },
    immunityList: [
      DAMAGE_ELECTRICITY,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 27,
      },
    ],
    cr: CR_22,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Амфибия',
        description: `Дракон может дышать и воздухом и под водой.`,
      },
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 16,
          range: 15,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 9,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 16,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 9,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 16,
          range: 20,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 9,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 20, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Электрическое дыхание.** Дракон выдыхает молнию 120-футовой линией шириной 10 футов. Все существа в этой линии должны совершить спасбросок Ловкости со Сл 23, получая урон электричеством 88 (16к10) при провале, или половину этого урона при успехе.
* **Отталкивающее дыхание.** Дракон выдыхает отталкивающую энергию 30-футовым конусом. Все существа в этой области должны преуспеть в спасброске Силы со Сл 23. При провале существо толкается на 60 футов от дракона.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
      {
        name: 'Смена формы',
        description: `Дракон магическим образом превращается в гуманоида или зверя, чей показатель опасности не превышает его собственный, или принимает свой истинный облик. Он принимает свой истинный облик, если умирает. Всё снаряжение, которое он несёт или носит, сливается с новым обликом или используется им (на выбор дракона).\n
В новом облике дракон сохраняет мировоззрение, хиты, Кости Хитов, способность говорить, владения, Легендарные действия, действия логова, значения Интеллекта, Мудрости и Харизмы, а также действия. Все остальные характеристики и умения заменяются характеристиками и умениями нового облика, за исключением классовых умений и легендарных действий нового облика.`,
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 15 футов от дракона должны преуспеть в спасброске Ловкости со Сл 24, иначе получат дробящий урон 16 (2к6 + 9) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Взрослый бронзовый дракон',
    nameEn: 'Adult bronze dragon',
    id: CREATURE_ADULT_BRONZE_DRAGON,
    description: bronzeDragonDescription,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LG,
    source: 'MM:122',
    armor: {
      ac: 19,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 17,
      cubeType: 12,
      cubeBonus: 102,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 80,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 25,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 23,
      [PARAM_INT]: 16,
      [PARAM_WIT]: 15,
      [PARAM_CHA]: 19,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 5,
      [PARAM_CON]: 11,
      [PARAM_WIT]: 7,
      [PARAM_CHA]: 9,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 12,
      [SKILL_INSIGHT]: 7,
      [SKILL_STEALTH]: 5,
    },
    immunityList: [
      DAMAGE_ELECTRICITY,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 22,
      },
    ],
    cr: CR_15,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Амфибия',
        description: `Дракон может дышать и воздухом и под водой.`,
      },
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 12,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 7,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 12,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 7,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 12,
          range: 15,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 7,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 17, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Электрическое дыхание.** Дракон выдыхает молнию 90-футовой линией шириной 5 футов. Все существа в этой линии должны совершить спасбросок Ловкости со Сл 19, получая урон электричеством 66 (12к10) при провале, или половину этого урона при успехе.
* **Отталкивающее дыхание.** Дракон выдыхает отталкивающую энергию 30-футовым конусом. Все существа в этой области должны преуспеть в спасброске Силы со Сл 19. При провале существо толкается на 60 футов от дракона.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
      {
        name: 'Смена формы',
        description: `Дракон магическим образом превращается в гуманоида или зверя, чей показатель опасности не превышает его собственный, или принимает свой истинный облик. Он принимает свой истинный облик, если умирает. Всё снаряжение, которое он несёт или носит, сливается с новым обликом или используется им (на выбор дракона).\n
В новом облике дракон сохраняет мировоззрение, хиты, Кости Хитов, способность говорить, владения, Легендарные действия, действия логова, значения Интеллекта, Мудрости и Харизмы, а также действия. Все остальные характеристики и умения заменяются характеристиками и умениями нового облика, за исключением классовых умений и легендарных действий нового облика.`,
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 15 футов от дракона должны преуспеть в спасброске Ловкости со Сл 20, иначе получат дробящий урон 14 (2к6 + 7) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Молодой бронзовый дракон',
    nameEn: 'Young bronze dragon',
    id: CREATURE_YOUNG_BRONZE_DRAGON,
    description: bronzeDragonDescription,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LG,
    source: 'MM:122',
    armor: {
      ac: 18,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 15,
      cubeType: 10,
      cubeBonus: 60,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 80,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 21,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 19,
      [PARAM_INT]: 14,
      [PARAM_WIT]: 13,
      [PARAM_CHA]: 17,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 3,
      [PARAM_CON]: 7,
      [PARAM_WIT]: 4,
      [PARAM_CHA]: 6,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 7,
      [SKILL_INSIGHT]: 4,
      [SKILL_STEALTH]: 3,
    },
    immunityList: [
      DAMAGE_ELECTRICITY,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 30,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 17,
      },
    ],
    cr: CR_8,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Амфибия',
        description: `Дракон может дышать и воздухом и под водой.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 8,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 5,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 8,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 5,
          },
        },
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Электрическое дыхание.** Дракон выдыхает молнию 60-футовой линией шириной 5 футов. Все существа в этой линии должны совершить спасбросок Ловкости со Сл 15, получая урон электричеством 55 (10к10) при провале, или половину этого урона при успехе.
* **Отталкивающее дыхание.** Дракон выдыхает отталкивающую энергию 30-футовым конусом. Все существа в этой области должны преуспеть в спасброске Силы со Сл 15. При провале существо толкается на 40 футов от дракона.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Вирмлинг бронзового дракона',
    nameEn: 'Bronze dragon wyrmling',
    id: CREATURE_BRONZE_DRAGON_WYRMLING,
    description: bronzeDragonDescription,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LG,
    source: 'MM:123',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 5,
      cubeType: 8,
      cubeBonus: 10,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_FLY]: 60,
      [SPEED_SWIM]: 30,
    },
    params: {
      [PARAM_STR]: 17,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 15,
      [PARAM_INT]: 12,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 15,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 2,
      [PARAM_CON]: 4,
      [PARAM_WIT]: 2,
      [PARAM_CHA]: 4,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 4,
      [SKILL_STEALTH]: 2,
    },
    immunityList: [
      DAMAGE_ELECTRICITY,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 10,
      },
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    cr: CR_2,
    languageList: [
      LANG_DRACONIC,
    ],
    featureList: [
      {
        name: 'Амфибия',
        description: `Дракон может дышать и воздухом и под водой.`,
      },
    ],
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 10,
            cubeBonus: 3,
          },
        },
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Электрическое дыхание.** Дракон выдыхает молнию 40-футовой линией шириной 5 футов. Все существа в этой линии должны совершить спасбросок Ловкости со Сл 12, получая урон электричеством 16 (3к10) при провале, или половину этого урона при успехе.
* **Отталкивающее дыхание.** Дракон выдыхает отталкивающую энергию 30-футовым конусом. Все существа в этой области должны преуспеть в спасброске Силы со Сл 12. При провале существо толкается на 30 футов от дракона.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Древний золотой дракон',
    nameEn: 'Ancient gold dragon',
    id: CREATURE_ANCIENT_GOLD_DRAGON,
    description: goldDragonDescription,
    sizeType: SIZE_GARGANTUA,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LG,
    source: 'MM:124',
    armor: {
      ac: 22,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 28,
      cubeType: 20,
      cubeBonus: 252,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 80,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 30,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 29,
      [PARAM_INT]: 18,
      [PARAM_WIT]: 17,
      [PARAM_CHA]: 28,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 9,
      [PARAM_CON]: 16,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 16,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 17,
      [SKILL_INSIGHT]: 10,
      [SKILL_STEALTH]: 9,
      [SKILL_PERSUASION]: 16,
    },
    immunityList: [
      DAMAGE_FIRE,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 27,
      },
    ],
    cr: CR_24,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Амфибия',
        description: `Дракон может дышать и воздухом и под водой.`,
      },
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 17,
          range: 15,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 10,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 17,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 10,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 17,
          range: 20,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 10,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 24, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Огненное дыхание.** Дракон выдыхает огонь 90-футовым конусом. Все существа в этой области должны совершить спасбросок Ловкости со Сл 24, получая урон огнём 71 (13к10) при провале, или половину этого урона при успехе.
* **Ослабляющее дыхание.** Дракон выдыхает газ 90-футовым конусом. Все существа в этой области должны преуспеть в спасброске Силы со Сл 24, иначе в течение 1 минуты будут совершать с помехой броски атаки, основанные на Силе, проверки Силы и спасброски Силы. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
      {
        name: 'Смена формы',
        description: `Дракон магическим образом превращается в гуманоида или зверя, чей показатель опасности не превышает его собственный, или принимает свой истинный облик. Он принимает свой истинный облик, если умирает. Всё снаряжение, которое он несёт или носит, сливается с новым обликом или используется им (на выбор дракона).\n
В новом облике дракон сохраняет мировоззрение, хиты, Кости Хитов, способность говорить, владения, Легендарные действия, действия логова, значения Интеллекта, Мудрости и Харизмы, а также действия. Все остальные характеристики и умения заменяются характеристиками и умениями нового облика, за исключением классовых умений и легендарных действий нового облика.`,
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 15 футов от дракона должны преуспеть в спасброске Ловкости со Сл 24, иначе получат дробящий урон 17 (2к6 + 10) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Взрослый золотой дракон',
    nameEn: 'Adult gold dragon',
    id: CREATURE_ADULT_GOLD_DRAGON,
    description: goldDragonDescription,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LG,
    source: 'MM:125',
    armor: {
      ac: 19,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 19,
      cubeType: 12,
      cubeBonus: 133,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 80,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 27,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 25,
      [PARAM_INT]: 16,
      [PARAM_WIT]: 17,
      [PARAM_CHA]: 24,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 8,
      [PARAM_CON]: 13,
      [PARAM_WIT]: 8,
      [PARAM_CHA]: 13,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 14,
      [SKILL_INSIGHT]: 8,
      [SKILL_STEALTH]: 8,
      [SKILL_PERSUASION]: 13,
    },
    immunityList: [
      DAMAGE_FIRE,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 24,
      },
    ],
    cr: CR_17,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Амфибия',
        description: `Дракон может дышать и воздухом и под водой.`,
      },
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 14,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 14,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 14,
          range: 15,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 21, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Огненное дыхание.** Дракон выдыхает огонь 60-футовым конусом. Все существа в этой области должны совершить спасбросок Ловкости со Сл 21, получая урон огнём 66 (12к10) при провале, или половину этого урона при успехе.
* **Ослабляющее дыхание.** Дракон выдыхает газ 60-футовым конусом. Все существа в этой области должны преуспеть в спасброске Силы со Сл 21, иначе в течение 1 минуты будут совершать с помехой броски атаки, основанные на Силе, проверки Силы и спасброски Силы. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
      {
        name: 'Смена формы',
        description: `Дракон магическим образом превращается в гуманоида или зверя, чей показатель опасности не превышает его собственный, или принимает свой истинный облик. Он принимает свой истинный облик, если умирает. Всё снаряжение, которое он несёт или носит, сливается с новым обликом или используется им (на выбор дракона).\n
В новом облике дракон сохраняет мировоззрение, хиты, Кости Хитов, способность говорить, владения, Легендарные действия, действия логова, значения Интеллекта, Мудрости и Харизмы, а также действия. Все остальные характеристики и умения заменяются характеристиками и умениями нового облика, за исключением классовых умений и легендарных действий нового облика.`,
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 10 футов от дракона должны преуспеть в спасброске Ловкости со Сл 22, иначе получат дробящий урон 15 (2к6 + 8) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Молодой золотой дракон',
    nameEn: 'Young gold dragon',
    id: CREATURE_YOUNG_GOLD_DRAGON,
    description: goldDragonDescription,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LG,
    source: 'MM:126',
    armor: {
      ac: 18,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 17,
      cubeType: 10,
      cubeBonus: 85,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 80,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 23,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 21,
      [PARAM_INT]: 16,
      [PARAM_WIT]: 13,
      [PARAM_CHA]: 20,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 6,
      [PARAM_CON]: 9,
      [PARAM_WIT]: 5,
      [PARAM_CHA]: 9,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 9,
      [SKILL_INSIGHT]: 5,
      [SKILL_STEALTH]: 6,
      [SKILL_PERSUASION]: 9,
    },
    immunityList: [
      DAMAGE_FIRE,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 30,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 19,
      },
    ],
    cr: CR_10,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Амфибия',
        description: `Дракон может дышать и воздухом и под водой.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Огненное дыхание.** Дракон выдыхает огонь 30-футовым конусом. Все существа в этой области должны совершить спасбросок Ловкости со Сл 17, получая урон огнём 55 (10к10) при провале, или половину этого урона при успехе.
* **Ослабляющее дыхание.** Дракон выдыхает газ 30-футовым конусом. Все существа в этой области должны преуспеть в спасброске Силы со Сл 17, иначе в течение 1 минуты будут совершать с помехой броски атаки, основанные на Силе, проверки Силы и спасброски Силы. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Вирмлинг золотого дракона',
    nameEn: 'Gold dragon wyrmling',
    id: CREATURE_GOLD_DRAGON_WYRMLING,
    description: goldDragonDescription,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LG,
    source: 'MM:126',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 8,
      cubeType: 8,
      cubeBonus: 24,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_FLY]: 60,
      [SPEED_SWIM]: 30,
    },
    params: {
      [PARAM_STR]: 19,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 17,
      [PARAM_INT]: 14,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 16,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 4,
      [PARAM_CON]: 5,
      [PARAM_WIT]: 2,
      [PARAM_CHA]: 5,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 4,
      [SKILL_STEALTH]: 4,
    },
    immunityList: [
      DAMAGE_FIRE,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 10,
      },
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    cr: CR_3,
    languageList: [
      LANG_DRACONIC,
    ],
    featureList: [
      {
        name: 'Амфибия',
        description: `Дракон может дышать и воздухом и под водой.`,
      },
    ],
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 10,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Огненное дыхание.** Дракон выдыхает огонь 15-футовым конусом. Все существа в этой области должны совершить спасбросок Ловкости со Сл 13, получая урон огнём 22 (2к10) при провале, или половину этого урона при успехе.
* **Ослабляющее дыхание.** Дракон выдыхает газ 15-футовым конусом. Все существа в этой области должны преуспеть в спасброске Силы со Сл 13, иначе в течение 1 минуты будут совершать с помехой броски атаки, основанные на Силе, проверки Силы и спасброски Силы. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Древний латунный дракон',
    nameEn: 'Ancient brass dragon',
    id: CREATURE_ANCIENT_BRASS_DRAGON,
    description: brassDragonDescription,
    sizeType: SIZE_GARGANTUA,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CG,
    source: 'MM:127',
    armor: {
      ac: 20,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 17,
      cubeType: 20,
      cubeBonus: 119,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_DIG]: 40,
      [SPEED_FLY]: 80,
    },
    params: {
      [PARAM_STR]: 27,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 25,
      [PARAM_INT]: 16,
      [PARAM_WIT]: 15,
      [PARAM_CHA]: 19,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 6,
      [PARAM_CON]: 13,
      [PARAM_WIT]: 8,
      [PARAM_CHA]: 10,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 14,
      [SKILL_HISTORY]: 9,
      [SKILL_STEALTH]: 6,
      [SKILL_PERSUASION]: 10,
    },
    immunityList: [
      DAMAGE_FIRE,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 24,
      },
    ],
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    cr: CR_20,
    featureList: [
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 14,
          range: 15,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 14,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 14,
          range: 20,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 18, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Огненное дыхание.** Дракон выдыхает огонь 90-футовой линией шириной 10 футов. Все существа в этой линии должны совершить спасбросок Ловкости со Сл 21, получая урон огнём 56 (16к6) при провале, или половину этого урона при успехе.
* **Усыпляющее дыхание.** Дракон выдыхает усыпляющий газ 90-футовым конусом. Все существа в этой области должны преуспеть в спасброске Телосложения со Сл 21, иначе потеряют сознание на 10 минут. Этот эффект оканчивается для существа, если оно получает урон или кто-нибудь действием разбудит его.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
      {
        name: 'Смена формы',
        description: `Дракон магическим образом превращается в гуманоида или зверя, чей показатель опасности не превышает его собственный, или принимает свой истинный облик. Он принимает свой истинный облик, если умирает. Всё снаряжение, которое он несёт или носит, сливается с новым обликом или используется им (на выбор дракона).\n
В новом облике дракон сохраняет мировоззрение, хиты, Кости Хитов, способность говорить, владения, Легендарные действия, действия логова, значения Интеллекта, Мудрости и Харизмы, а также действия. Все остальные характеристики и умения заменяются характеристиками и умениями нового облика, за исключением классовых умений и легендарных действий нового облика.`,
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 15 футов от дракона должны преуспеть в спасброске Ловкости со Сл 22, иначе получат дробящий урон 15 (2к6 + 8) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Взрослый латунный дракон',
    nameEn: 'Adult brass dragon',
    id: CREATURE_ADULT_BRASS_DRAGON,
    description: brassDragonDescription,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CG,
    source: 'MM:128',
    armor: {
      ac: 18,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 15,
      cubeType: 12,
      cubeBonus: 75,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_DIG]: 30,
      [SPEED_FLY]: 80,
    },
    params: {
      [PARAM_STR]: 23,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 21,
      [PARAM_INT]: 14,
      [PARAM_WIT]: 13,
      [PARAM_CHA]: 17,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 5,
      [PARAM_CON]: 10,
      [PARAM_WIT]: 6,
      [PARAM_CHA]: 8,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 11,
      [SKILL_HISTORY]: 7,
      [SKILL_STEALTH]: 5,
      [SKILL_PERSUASION]: 8,
    },
    immunityList: [
      DAMAGE_FIRE,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 21,
      },
    ],
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    cr: CR_13,
    featureList: [
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 11,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 11,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 11,
          range: 15,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 16, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Огненное дыхание.** Дракон выдыхает огонь 60-футовой линией шириной 5 футов. Все существа в этой линии должны совершить спасбросок Ловкости со Сл 18, получая урон огнём 45 (13к6) при провале, или половину этого урона при успехе.
* **Усыпляющее дыхание.** Дракон выдыхает усыпляющий газ 60-футовым конусом. Все существа в этой области должны преуспеть в спасброске Телосложения со Сл 18, иначе потеряют сознание на 10 минут. Этот эффект оканчивается для существа, если оно получает урон или кто-нибудь действием разбудит его.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 10 футов от дракона должны преуспеть в спасброске Ловкости со Сл 19, иначе получат дробящий урон 13 (2к6 + 6) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Молодой латунный дракон',
    nameEn: 'Young brass dragon',
    id: CREATURE_YOUNG_BRASS_DRAGON,
    description: brassDragonDescription,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CG,
    source: 'MM:128',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 13,
      cubeType: 10,
      cubeBonus: 39,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_DIG]: 20,
      [SPEED_FLY]: 80,
    },
    params: {
      [PARAM_STR]: 19,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 17,
      [PARAM_INT]: 12,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 15,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 3,
      [PARAM_CON]: 6,
      [PARAM_WIT]: 3,
      [PARAM_CHA]: 5,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 6,
      [SKILL_STEALTH]: 3,
      [SKILL_PERSUASION]: 5,
    },
    immunityList: [
      DAMAGE_FIRE,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 30,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 16,
      },
    ],
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    cr: CR_6,
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Огненное дыхание.** Дракон выдыхает огонь 40-футовой линией шириной 5 футов. Все существа в этой линии должны совершить спасбросок Ловкости со Сл 14, получая урон огнём 45 (12к6) при провале, или половину этого урона при успехе.
* **Усыпляющее дыхание.** Дракон выдыхает усыпляющий газ 30-футовым конусом. Все существа в этой области должны преуспеть в спасброске Телосложения со Сл 14, иначе потеряют сознание на 5 минут. Этот эффект оканчивается для существа, если оно получает урон или кто-нибудь действием разбудит его.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Вирмлинг латунного дракона',
    nameEn: 'Brass dragon wyrmling',
    id: CREATURE_BRASS_DRAGON_WYRMLING,
    description: brassDragonDescription,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CG,
    source: 'MM:129',
    armor: {
      ac: 16,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 3,
      cubeType: 8,
      cubeBonus: 3,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_DIG]: 15,
      [SPEED_FLY]: 60,
    },
    params: {
      [PARAM_STR]: 15,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 13,
      [PARAM_INT]: 10,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 13,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 2,
      [PARAM_CON]: 3,
      [PARAM_WIT]: 2,
      [PARAM_CHA]: 3,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 4,
      [SKILL_STEALTH]: 2,
    },
    immunityList: [
      DAMAGE_FIRE,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 10,
      },
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    languageList: [
      LANG_DRACONIC,
    ],
    cr: CR_1,
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 2,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 10,
            cubeBonus: 2,
          },
        },
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Огненное дыхание.** Дракон выдыхает огонь 20-футовой линией шириной 5 футов. Все существа в этой линии должны совершить спасбросок Ловкости со Сл 11, получая урон огнём 14 (4к6) при провале, или половину этого урона при успехе.
* **Усыпляющее дыхание.** Дракон выдыхает усыпляющий газ 15-футовым конусом. Все существа в этой области должны преуспеть в спасброске Телосложения со Сл 11, иначе потеряют сознание на 1 минуту. Этот эффект оканчивается для существа, если оно получает урон или кто-нибудь действием разбудит его.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Древний медный дракон',
    nameEn: 'Ancient copper dragon',
    id: CREATURE_ANCIENT_COPPER_DRAGON,
    description: copperDragonDescription,
    sizeType: SIZE_GARGANTUA,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CG,
    // В Бестиарии перевода студии Phantom неправильная информация
    source: 'R20:https://roll20.net/compendium/dnd5e/Ancient%20Copper%20Dragon#toc_4',
    armor: {
      ac: 21,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 20,
      cubeType: 20,
      cubeBonus: 140,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_CLIMB]: 40,
      [SPEED_FLY]: 80,
    },
    params: {
      [PARAM_STR]: 27,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 25,
      [PARAM_INT]: 20,
      [PARAM_WIT]: 17,
      [PARAM_CHA]: 19,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 8,
      [PARAM_CON]: 14,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 11,
    },
    skillCollection: {
      [SKILL_DECEPTION]: 11,
      [SKILL_PERCEPTION]: 17,
      [SKILL_STEALTH]: 8,
    },
    immunityList: [
      DAMAGE_ACID,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 27,
      },
    ],
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    cr: CR_21,
    featureList: [
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 15,
          range: 15,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 15,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 15,
          range: 20,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 19, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Кислотное дыхание.** Дракон выдыхает кислоту 90-футовой линией шириной 10 футов. Все существа в этой линии должны совершить спасбросок Ловкости со Сл 22, получая урон кислотой 63 (14к8) при провале, или половину этого урона при успехе.
* **Замедляющее дыхание.** Дракон выдыхает газ 90-футовым конусом. Все существа в этой области должны преуспеть в спасброске Телосложения со Сл 22. При провале существо не может использовать реакции, его скорость уменьшается вдвое, и оно не может совершать более одной атаки в ход. Кроме того, существо может в свой ход совершать либо действие, либо бонусное действие, но не то и другое. Эти эффекты длятся 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
      {
        name: 'Смена формы',
        description: `Дракон магическим образом превращается в гуманоида или зверя, чей показатель опасности не превышает его собственный, или принимает свой истинный облик. Он принимает свой истинный облик, если умирает. Всё снаряжение, которое он несёт или носит, сливается с новым обликом или используется им (на выбор дракона).\n
В новом облике дракон сохраняет мировоззрение, хиты, Кости Хитов, способность говорить, владения, Легендарные действия, действия логова, значения Интеллекта, Мудрости и Харизмы, а также действия. Все остальные характеристики и умения заменяются характеристиками и умениями нового облика, за исключением классовых умений и легендарных действий нового облика.`,
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 15 футов от дракона должны преуспеть в спасброске Ловкости со Сл 23, иначе получат дробящий урон 15 (2к6 + 8) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Взрослый медный дракон',
    nameEn: 'Adult copper dragon',
    id: CREATURE_ADULT_COPPER_DRAGON,
    description: copperDragonDescription,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CG,
    source: 'MM:131',
    armor: {
      ac: 18,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 16,
      cubeType: 12,
      cubeBonus: 80,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_CLIMB]: 40,
      [SPEED_FLY]: 80,
    },
    params: {
      [PARAM_STR]: 23,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 21,
      [PARAM_INT]: 18,
      [PARAM_WIT]: 15,
      [PARAM_CHA]: 17,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 6,
      [PARAM_CON]: 10,
      [PARAM_WIT]: 7,
      [PARAM_CHA]: 8,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 12,
      [SKILL_DECEPTION]: 8,
      [SKILL_STEALTH]: 6,
    },
    immunityList: [
      DAMAGE_ACID,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 22,
      },
    ],
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    cr: CR_14,
    featureList: [
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 11,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 11,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 11,
          range: 15,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 16, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Кислотное дыхание.** Дракон выдыхает кислоту 60-футовой линией шириной 5 футов. Все существа в этой линии должны совершить спасбросок Ловкости со Сл 22, получая урон кислотой 54 (12к8) при провале, или половину этого урона при успехе.
* **Замедляющее дыхание.** Дракон выдыхает газ 60-футовым конусом. Все существа в этой области должны преуспеть в спасброске Телосложения со Сл 18. При провале существо не может использовать реакции, его скорость уменьшается вдвое, и оно не может совершать более одной атаки в ход. Кроме того, существо может в свой ход совершать либо действие, либо бонусное действие, но не то и другое. Эти эффекты длятся 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 10 футов от дракона должны преуспеть в спасброске Ловкости со Сл 19, иначе получат дробящий урон 13 (2к6 + 6) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Молодой медный дракон',
    nameEn: 'Young copper dragon',
    id: CREATURE_YOUNG_COPPER_DRAGON,
    description: copperDragonDescription,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CG,
    source: 'MM:131',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 14,
      cubeType: 10,
      cubeBonus: 42,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_CLIMB]: 40,
      [SPEED_FLY]: 80,
    },
    params: {
      [PARAM_STR]: 19,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 17,
      [PARAM_INT]: 16,
      [PARAM_WIT]: 13,
      [PARAM_CHA]: 15,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 4,
      [PARAM_CON]: 6,
      [PARAM_WIT]: 4,
      [PARAM_CHA]: 5,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 7,
      [SKILL_DECEPTION]: 5,
      [SKILL_STEALTH]: 4,
    },
    immunityList: [
      DAMAGE_ACID,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 30,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 17,
      },
    ],
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    cr: CR_7,
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Кислотное дыхание.** Дракон выдыхает кислоту 40-футовой линией шириной 5 футов. Все существа в этой линии должны совершить спасбросок Ловкости со Сл 14, получая урон кислотой 40 (9к8) при провале, или половину этого урона при успехе.
* **Замедляющее дыхание.** Дракон выдыхает газ 30-футовым конусом. Все существа в этой области должны преуспеть в спасброске Телосложения со Сл 14. При провале существо не может использовать реакции, его скорость уменьшается вдвое, и оно не может совершать более одной атаки в ход. Кроме того, существо может в свой ход совершать либо действие, либо бонусное действие, но не то и другое. Эти эффекты длятся 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Вирмлинг медного дракона',
    nameEn: 'Copper dragon wyrmling',
    id: CREATURE_COPPER_DRAGON_WYRMLING,
    description: copperDragonDescription,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CG,
    source: 'MM:132',
    armor: {
      ac: 16,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 4,
      cubeType: 8,
      cubeBonus: 4,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_CLIMB]: 30,
      [SPEED_FLY]: 60,
    },
    params: {
      [PARAM_STR]: 15,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 13,
      [PARAM_INT]: 14,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 13,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 3,
      [PARAM_CON]: 3,
      [PARAM_WIT]: 2,
      [PARAM_CHA]: 3,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 4,
      [SKILL_STEALTH]: 3,
    },
    immunityList: [
      DAMAGE_ACID,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 10,
      },
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    languageList: [
      LANG_DRACONIC,
    ],
    cr: CR_1,
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 10,
            cubeBonus: 2,
          },
        },
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Кислотное дыхание.** Дракон выдыхает кислоту 20-футовой линией шириной 5 футов. Все существа в этой линии должны совершить спасбросок Ловкости со Сл 11, получая урон кислотой 18 (4к8) при провале, или половину этого урона при успехе.
* **Замедляющее дыхание.** Дракон выдыхает газ 15-футовым конусом. Все существа в этой области должны преуспеть в спасброске Телосложения со Сл 11. При провале существо не может использовать реакции, его скорость уменьшается вдвое, и оно не может совершать более одной атаки в ход. Кроме того, существо может в свой ход совершать либо действие, либо бонусное действие, но не то и другое. Эти эффекты длятся 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Древний серебряный дракон',
    nameEn: 'Ancient silver dragon',
    id: CREATURE_ANCIENT_SILVER_DRAGON,
    description: silverDragonDescription,
    sizeType: SIZE_GARGANTUA,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LG,
    source: 'MM:133',
    armor: {
      ac: 22,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 25,
      cubeType: 20,
      cubeBonus: 225,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 80,
    },
    params: {
      [PARAM_STR]: 30,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 29,
      [PARAM_INT]: 18,
      [PARAM_WIT]: 15,
      [PARAM_CHA]: 23,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 7,
      [PARAM_CON]: 16,
      [PARAM_WIT]: 9,
      [PARAM_CHA]: 13,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 16,
      [SKILL_HISTORY]: 11,
      [SKILL_ARCANA]: 11,
      [SKILL_STEALTH]: 7,
    },
    immunityList: [
      DAMAGE_COLD,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 26,
      },
    ],
    cr: CR_23,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 17,
          range: 15,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 10,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 17,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 10,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 17,
          range: 20,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 10,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 21, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Холодное дыхание.** Дракон выдыхает волну ледяного воздуха 90-футовым конусом. Все существа в этой области должны совершить спасбросок Телосложения со Сл 24, получая урон холодом 67 (15к8) при провале, или половину этого урона при успехе.
* **Парализующее дыхание.** Дракон выдыхает парализующий газ 90-футовым конусом. Все существа в этой области должны преуспеть в спасброске Телосложения со Сл 24, иначе станут парализованными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
      {
        name: 'Смена формы',
        description: `Дракон магическим образом превращается в гуманоида или зверя, чей показатель опасности не превышает его собственный, или принимает свой истинный облик. Он принимает свой истинный облик, если умирает. Всё снаряжение, которое он несёт или носит, сливается с новым обликом или используется им (на выбор дракона).\n
В новом облике дракон сохраняет мировоззрение, хиты, Кости Хитов, способность говорить, владения, Легендарные действия, действия логова, значения Интеллекта, Мудрости и Харизмы, а также действия. Все остальные характеристики и умения заменяются характеристиками и умениями нового облика, за исключением классовых умений и легендарных действий нового облика.`,
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 15 футов от дракона должны преуспеть в спасброске Ловкости со Сл 25, иначе получат дробящий урон 17 (2к6 + 10) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Взрослый серебряный дракон',
    nameEn: 'Adult silver dragon',
    id: CREATURE_ADULT_SILVER_DRAGON,
    description: silverDragonDescription,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LG,
    source: 'MM:134',
    armor: {
      ac: 19,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 18,
      cubeType: 12,
      cubeBonus: 126,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 80,
    },
    params: {
      [PARAM_STR]: 27,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 25,
      [PARAM_INT]: 16,
      [PARAM_WIT]: 13,
      [PARAM_CHA]: 21,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 5,
      [PARAM_CON]: 12,
      [PARAM_WIT]: 6,
      [PARAM_CHA]: 10,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 11,
      [SKILL_HISTORY]: 8,
      [SKILL_ARCANA]: 8,
      [SKILL_STEALTH]: 5,
    },
    immunityList: [
      DAMAGE_COLD,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 21,
      },
    ],
    cr: CR_16,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    featureList: [
      {
        name: 'Легендарное сопротивление',
        description: `Если дракон проваливает спасбросок, он может вместо этого сделать спасбросок успешным.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон может использовать Ужасающую внешность. Затем он совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 13,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 13,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 13,
          range: 15,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Ужасающая внешность',
        description: `Все существа на выбор дракона, находящиеся в пределах 120 футов от него и знающие о его присутствии, должны преуспеть в спасброске Мудрости со Сл 18, иначе станут испуганными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Ужасающей внешности этого дракона на следующие 24 часа.`,
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Холодное дыхание.** Дракон выдыхает волну ледяного воздуха 60-футовым конусом. Все существа в этой области должны совершить спасбросок Телосложения со Сл 20, получая урон холодом 58 (13к8) при провале, или половину этого урона при успехе.
* **Парализующее дыхание.** Дракон выдыхает парализующий газ 60-футовым конусом. Все существа в этой области должны преуспеть в спасброске Телосложения со Сл 20, иначе станут парализованными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
      {
        name: 'Смена формы',
        description: `Дракон магическим образом превращается в гуманоида или зверя, чей показатель опасности не превышает его собственный, или принимает свой истинный облик. Он принимает свой истинный облик, если умирает. Всё снаряжение, которое он несёт или носит, сливается с новым обликом или используется им (на выбор дракона).\n
В новом облике дракон сохраняет мировоззрение, хиты, Кости Хитов, способность говорить, владения, Легендарные действия, действия логова, значения Интеллекта, Мудрости и Харизмы, а также действия. Все остальные характеристики и умения заменяются характеристиками и умениями нового облика, за исключением классовых умений и легендарных действий нового облика.`,
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Обнаружение',
        description: `Дракон совершает проверку Мудрости (Внимательность).`,
      },
      {
        name: 'Атака хвостом',
        description: `Дракон совершает атаку хвостом.`,
      },
      {
        name: 'Атака крыльями',
        cost: 2,
        description: `Дракон бьёт своими крыльями. Все существа в пределах 10 футов от дракона должны преуспеть в спасброске Ловкости со Сл 21, иначе получат дробящий урон 15 (2к6 + 8) и будут сбиты с ног. После этого дракон может пролететь на расстояние, не превышающее половину скорости полёта. `,
      },
    ],
  },
  {
    name: 'Молодой серебряный дракон',
    nameEn: 'Young silver dragon',
    id: CREATURE_YOUNG_SILVER_DRAGON,
    description: silverDragonDescription,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LG,
    source: 'MM:135',
    armor: {
      ac: 18,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 16,
      cubeType: 10,
      cubeBonus: 80,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 80,
    },
    params: {
      [PARAM_STR]: 23,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 21,
      [PARAM_INT]: 14,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 19,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 4,
      [PARAM_CON]: 9,
      [PARAM_WIT]: 4,
      [PARAM_CHA]: 8,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 8,
      [SKILL_HISTORY]: 6,
      [SKILL_ARCANA]: 6,
      [SKILL_STEALTH]: 4,
    },
    immunityList: [
      DAMAGE_COLD,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 30,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 18,
      },
    ],
    cr: CR_9,
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракон совершает три атаки: одну укусом, и две когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 10,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Холодное дыхание.** Дракон выдыхает волну ледяного воздуха 30-футовым конусом. Все существа в этой области должны совершить спасбросок Телосложения со Сл 17, получая урон холодом 54 (12к8) при провале, или половину этого урона при успехе.
* **Парализующее дыхание.** Дракон выдыхает парализующий газ 30-футовым конусом. Все существа в этой области должны преуспеть в спасброске Телосложения со Сл 17, иначе станут парализованными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Вирмлинг серебрянного дракона',
    nameEn: 'Silver dragon wyrmling',
    id: CREATURE_SILVER_DRAGON_WYRMLING,
    description: silverDragonDescription,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_LG,
    source: 'MM:135',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 6,
      cubeType: 8,
      cubeBonus: 18,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_FLY]: 60,
    },
    params: {
      [PARAM_STR]: 19,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 17,
      [PARAM_INT]: 12,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 15,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 2,
      [PARAM_CON]: 5,
      [PARAM_WIT]: 2,
      [PARAM_CHA]: 4,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 4,
      [SKILL_STEALTH]: 2,
    },
    immunityList: [
      DAMAGE_COLD,
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 10,
      },
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    cr: CR_2,
    languageList: [
      LANG_DRACONIC,
    ],
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 10,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Оружие дыхания',
        description: `Дракон использует один из следующих видов оружия дыхания.
* **Холодное дыхание.** Дракон выдыхает волну ледяного воздуха 15-футовым конусом. Все существа в этой области должны совершить спасбросок Телосложения со Сл 13, получая урон холодом 18 (4к8) при провале, или половину этого урона при успехе.
* **Парализующее дыхание.** Дракон выдыхает парализующий газ 15-футовым конусом. Все существа в этой области должны преуспеть в спасброске Телосложения со Сл 13, иначе станут парализованными на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Дракочерепаха',
    nameEn: 'Dragon turtle',
    id: CREATURE_DRAGON_TURTLE,
    description: `Дракочерепахи являются одними из самых страшных существ в океане. Настолько же большие и прожорливые, как и их наземные родичи драконы, дракочерепахи сокрушают своими смертельными челюстями, паровым дыханием и сокрушительным хвостом.\n
Грубый панцирь дракочерепахи имеет такой же тёмно-зелёный цвет, как и глубокая вода, в которой обитает это чудовище. Серебряные прожилки, подчёркивающие панцирь, напоминают танец света на открытой водной глади, а всплывшую дракочерепаху иногда принимают за отражение солнца или луны на волнах.\n
**Драконы глубин.** Как и истинные драконы, дракочерепахи собирают сокровища, сначала топя корабли, и затем просеивая обломки в поисках монет и других драгоценных предметов. Дракочерепахи заглатывают сокровища для транспортировки, а затем срыгивают их, когда добираются до логова.\n
Дракочерепахи обитают в пещерах, скрытых в коралловых рифах или под морским дном, либо вдоль скалистых участков береговой линии. Если приглянувшаяся пещера уже заселена, дракочерепаха нападает на её нынешних обитателей в попытке захватить пещеру.\n
**Наёмные чудовища.** Дракочерепахи достаточно умны, чтобы их можно было подкупить, и пираты, ходящие под парусом по морям, патрулируемым этими существами, быстро учатся предлагать им сокровища в обмен на безопасный проход. Умные сахуагины иногда объединяются с дракочерепахами, соблазняя их сокровищами, чтобы использовать их обжигающее дыхание в качестве оружия в набегах сахуагинов на корабли и прибрежные поселения.\n
**Стихийная мощь.** Дракочерепахи иногда проходят через подводные разрывы в планах на Стихийный План Воды. Эти чудовищные экземпляры можно найти на службе маридов, которые крепят на спинах дракочерепах величественные коралловые троны и ездят на них, как на ездовых животных.`,
    sizeType: SIZE_GARGANTUA,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:136',
    armor: {
      ac: 20,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 22,
      cubeType: 20,
      cubeBonus: 110,
    },
    speed: {
      [SPEED_WALK]: 20,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 25,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 20,
      [PARAM_INT]: 10,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 12,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 6,
      [PARAM_CON]: 11,
      [PARAM_WIT]: 7,
    },
    resistanceList: [
      DAMAGE_FIRE,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 11,
      },
    ],
    languageList: [
      LANG_DRACONIC,
      LANG_AQUAN,
    ],
    cr: CR_17,
    featureList: [
      {
        name: 'Амфибия',
        description: `Дракочерепаха может дышать и воздухом и под водой.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дракочерепаха совершает три атаки: одну укусом, и две когтями. Она может совершить одну атаку хвостом вместо двух атак когтями.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 13,
          range: 15,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 3,
            cubeType: 12,
            cubeBonus: 7,
          },
        },
      },
      {
        name: 'Когти',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 13,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 7,
          },
        },
      },
      {
        name: 'Паровое дыхание',
        description: `Дракочерепаха выдыхает обжигающий пар 60-футовым конусом. Все существа в этой области должны совершить спасбросок Телосложения со Сл 18, получая урон огнём 52 (15к6) при провале, или половину этого урона при успехе. Нахождение под водой не даёт сопротивления к этому урону.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
    isFemale: true,
  },
  {
    name: 'Драук',
    nameEn: 'Drider',
    id: CREATURE_DRIDER,
    description: `Когда дроу подаёт большие надежды, Лолс призывает его в Ямы Демонической Паутины, чтобы испытать его веру и силу. Те, кто проходят испытание, возвышаются пред Лолс. Те же, кто не преуспеет, превращаются в драуков — ужасных гибридов дроу и гигантских пауков, которые служат живым напоминанием мощи Лолс. Лишь дроу может быть обращён в драука, и секретом такого превращения владеет только Лолс.\n
**Пожизненная метка.** Дроу, превращённый в драука, возвращается на Материальный План извращённым и униженным существом. Ведомые своим сумасшествием, они растворяются в Подземье, становясь отшельниками и охотниками, одиночками или вожаками стай гигантских пауков.\n
В редких исключениях, драуки возвращаются на окраины общества дроу, невзирая на своё проклятье, чаще всего, чтобы воплотить в жизнь давнюю клятву или месть из прошлой жизни. Дроу боятся и сторонятся драуков, ставя их даже ниже рабов. Но они терпят их присутствие, так как эти существа являются живым воплощением воли Лолс и напоминанием о судьбе, которая ожидает всех, кто подведёт Паучью Королеву.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:137',
    armor: {
      ac: 19,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 13,
      cubeType: 10,
      cubeBonus: 52,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_SWIM]: 30,
    },
    params: {
      [PARAM_STR]: 16,
      [PARAM_DEX]: 16,
      [PARAM_CON]: 18,
      [PARAM_INT]: 13,
      [PARAM_WIT]: 14,
      [PARAM_CHA]: 12,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 5,
      [SKILL_STEALTH]: 9,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 15,
      },
    ],
    languageList: [
      LANG_UNDERCOMMON,
      LANG_ELVEN,
    ],
    cr: CR_6,
    featureList: [
      {
        name: 'Наследие фей',
        description: `Драук совершает с преимуществом спасброски от очарования, и магия не может его усыпить.`,
      },
      {
        name: 'Паучье лазание',
        description: `Драук может лазать по сложным поверхностям, включая потолки, без совершения проверок характеристик.`,
      },
      {
        name: 'Чувствительность к солнечному свету',
        description: `Находясь на солнечном свету, драук совершает с помехой броски атаки, а также проверки Мудрости (Внимательность), полагающиеся на зрение.`,
      },
      {
        name: 'Хождение по паутине',
        description: `Драук игнорирует ограничения перемещения, вызванные паутиной.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_WIT,
      saveThrowDc: 13,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            SPELL_DANCING_LIGHTS,
          ],
        },
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_FAERIE_FIRE,
            SPELL_DARKNESS,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Мультиатака',
        description: `Драук совершает три атаки, либо длинным мечом, либо длинным луком. Он может заменить одну из этих атак атакой укусом.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
            },
          },
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 1,
              cubeType: 4,
            },
            {
              type: DAMAGE_POISON,
              cubeCount: 2,
              cubeType: 8,
            },
          ],
        },
      },
      {
        name: 'Длинный меч',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: [
            [
              {
                type: DAMAGE_SLASHING,
                cubeCount: 1,
                cubeType: 8,
                cubeBonus: 3,
              },
              {
                type: DAMAGE_SLASHING,
                cubeCount: 1,
                cubeType: 10,
                cubeBonus: 3,
                comment: ', если используется двумя руками',
              },
            ],
          ],
        },
      },
      {
        name: 'Длинный лук',
        attack: {
          type: ACTION_RANGE_WEAPON_ATTACK,
          bonus: 6,
          range: {
            normal: 150,
            max: 600,
          },
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 1,
              cubeType: 8,
              cubeBonus: 3,
            },
            {
              type: DAMAGE_POISON,
              cubeCount: 1,
              cubeType: 8,
            },
          ],
        },
      },
    ],
  },
  {
    name: 'Драук-заклинатель',
    nameEn: 'Drider Spellcaster',
    id: CREATURE_DRIDER_SPELLCASTER,
    parentId: CREATURE_DRIDER,
    params: {
      [PARAM_STR]: 16,
      [PARAM_DEX]: 16,
      [PARAM_CON]: 18,
      [PARAM_INT]: 13,
      [PARAM_WIT]: 16,
      [PARAM_CHA]: 12,
    },
    spellCast: {
      spellCasterLevel: 7,
      spellCasterClass: PC_CLASS_PRIEST,
      baseStat: PARAM_WIT,
      spellAttackBonus: 6,
      saveThrowDc: 14,
      spellIdList: [
        SPELL_THAUMATURGY,
        SPELL_DETECT_MAGIC,
        SPELL_SANCTUARY,
        SPELL_DISPEL_MAGIC,
        SPELL_SILENCE,
        SPELL_POISON_SPRAY,
        SPELL_BANE,
        SPELL_HOLD_PERSON,
        SPELL_CLAIRVOYANCE,
        SPELL_DIVINATION,
        SPELL_FREEDOM_OF_MOVEMENT,
      ],
      slotCountList: [
        Infinity,
        4,
        3,
        3,
        2,
      ],
    },
  },
  {
    name: 'Дриада',
    nameEn: 'Dryad',
    id: CREATURE_DRYAD,
    description: `Путешественники, войдя в лес, могут увидеть мельком женственную фигуру, порхающую между деревьями. Тёплый смех, дребезжащий в воздухе, уводит тех, кто слышит его, вглубь, в изумрудные тени.\n
**Родство с деревьями.** Могущественные феи иногда привязывают более слабых фейских духов к деревьям, превращая их в дриад. Иногда это делается в наказание, когда фейский дух влюбляется в смертного, а такая любовь запретна.\n
Дриада может выйти из дерева и путешествовать по окрестным землям, но дерево остаётся её домом и привязывает её к миру. Пока дерево остаётся здоровым и невредимым, дриада остаётся вечно молодой и очаровательной. Она страдает, если дереву причинён вред. Если дерево будет уничтожено дриада погружается в безумие.\n
**Уединённые феи.** Дриады выступают в качестве опекунов своих лесных владений. Застенчивые и отчуждённые, они наблюдают за нарушителями из деревьев. Дриады, поражённые красотой незнакомца, могут пожелать узнать его более тщательно, возможно даже постараются заманить странника подальше, чтобы очаровать.\n
Дриады работают сообща с другими лесными существами, чтобы защищать свои леса. Единороги, тренты и сатиры живут неподалёку от них, так же как и друиды, разделяющим преданность дриад к лесу, который называют своим домом.\n
**Магия лесной природы.** Дриады могут говорить с растениями и животными. Они могут телепортироваться из одного дерева в другое, заманивая чужаков в рощи. Попав в опасную ситуацию, дриада может увлечь гуманоидов своими чарами, превращая врагов в друзей. Они также знают несколько полезных заклинаний.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_FEY,
    ],
    aligmentId: ALIGMENT_N,
    source: 'MM:138',
    armor: {
      ac: 11,
      type: '16 c Дубовой корой',
    },
    hp: {
      cubeCount: 5,
      cubeType: 8,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 10,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 11,
      [PARAM_INT]: 14,
      [PARAM_WIT]: 15,
      [PARAM_CHA]: 18,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 4,
      [SKILL_STEALTH]: 5,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    languageList: [
      LANG_SYLVAN,
      LANG_ELVEN,
    ],
    cr: CR_1,
    featureList: [
      {
        name: 'Сопротивление магии',
        description: `Дриада совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
      {
        name: 'Общение со зверьми и растениями',
        description: `Дриада может общаться со зверьми и растениями, как если бы у них был общий язык.`,
      },
      {
        name: 'Путешествие через деревья',
        description: `Один раз в свой ход дриада может использовать 10 футов перемещения на то, чтобы магическим образом войти живое дерево в пределах досягаемости и выйти из второго живого дерева в пределах 60 футов от первого, появляясь в свободном пространстве в пределах 5 футов от второго дерева. Оба дерева должны быть как минимум Большого размера.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 14,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            SPELL_DRUIDCRAFT,
          ],
        },
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            SPELL_ENTANGLE,
            SPELL_GOODBERRY,
          ],
        },
        {
          limit: {
            count: 3,
            period: 'день',
          },
          list: [
            SPELL_PASS_WITHOUT_TRACE,
            SPELL_SHILLELAGH,
            SPELL_BARKSKIN,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Дубина',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 2,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 1,
            cubeType: 4,
          },
        },
      },
      {
        name: 'Дубина (с Дубинкой)',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 1,
            cubeType: 8,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Фейское очарование',
        description: `Дриада нацеливается на одного гуманоида или зверя, которого видит в пределах 30 футов от себя. Если цель видит дриаду, она должна преуспеть в спасброске Мудрости со Сл 14, иначе станет магическим образом очарованной. Очарованное существо считает дриаду верным другом, о котором нужно заботиться и которого нужно защищать. Несмотря на то, что цель не находится под контролем дриады, она выполняет её просьбы.\n
Каждый раз, когда дриада или её союзники причиняют цели вред, та может повторить спасбросок, оканчивая эффект на себе при успехе. В противном случае эффект длится 24 часа, или пока дриада не умрёт. Чтобы эффект не прерывался, дриада должна находиться на одном плане с целью, и дриада может сама окончить эффект бонусным действием. Если спасбросок цели был успешным, цель получает иммунитет к Фейскому очарованию этой дриады на следующие 24 часа. У дриады одновременно очарованными может быть не более одного гуманоида и не более трёх зверей.`,
      },
    ],
    isFemale: true,
  },
  {
    name: 'Дуэргар',
    nameEn: 'Duergar',
    id: CREATURE_DUERGAR,
    description: `Тираничные дуэргары, также известные как серые дварфы, обитают в фантастических городах глубоко в Подземье. Используя древние знания дварфов и мириады рабов, они неустанно трудятся над расширением своих подземных королевств.\n
Большинство дуэргаров (включая женщин) — лысые, а их кожа пепельно-серая. Они носят серые одежды, которые помогают слиться с камнем, и простые украшения, которые отражают их суровый и практичный нрав.\n
**Рабы господ.** Дуэргары когда-то были дварфами, до того как их жадность и бесконечные рыскания под землёй не привели их к встрече со свежевателями разума. Поколениями находясь в плену иллитидов, дварфы, в конечном счёте, отвоевали свою независимость при помощи злого божества Ладугуэра. Однако рабство навсегда изменило их, сделав их дух тёмным, а самих дуэргаров такими же злыми, как и тираны, от которых они освободились. Несмотря на полученную свободу, дуэргары — суровые, пессимистичные и недоверчивые существа, которые всегда тяжело трудятся и жалуются, что не помнят, что значит быть счастливым или гордым. Их произведения и достижения долговечны, но лишены тепла, и им чуждо искусство.\n
Дуэргары воюют со своими дварфскими сородичами и другими подземными расами. Они заключают союзы, когда это выгодно, и нарушают их, когда в них более нет выгоды. Они берут рабов, чтобы те работали в Подземье, относясь к ним как к бесплатной рабочей силе и грубому эквиваленту валюты.\n
**Крепкие как камень.** Как и дварфы, дуэргары крепко сложены. Вдобавок к их физической выносливости, они обладают невероятной ментальной стойкостью ещё со времён рабства у иллитидов. Разум дуэргара — это крепость, способная отражать очарования, иллюзии и другие заклинания.\n
**Рождённые во тьме.** Подземье насыщено странными магическими силами, которые дуэргары впитали за поколения рабства. Дуэргары могут увеличиться в размере и силе на короткое время, становясь могучими воинами, размерами сравниваясь с ограми. Если же они столкнутся с противником, который им не по зубам, или во время шпионажа за существами, нарушающими их границы, дуэргары могут становиться невидимыми, сливаясь с тьмой.\n
Эоны, проведённые в Подземье, также отточили их тёмное зрение, позволяя им во тьме видеть вдвое дальше, чем другим дварфам. Однако за это приходится платить, ведь зрению дуэргаров угрожает солнечный свет.\n
**Дьявольский хозяин.** Известно, что Асмодей, Владыка Девяти Преисподних, изображает богов дуэргаров, чтобы взращивать зло, тлеющее в сердцах серых дварфов. Предлагая им божественное провидение и отмщение их врагам, он в то же время подталкивает их к всё более тираническим действиям и скрывает свою истинную личину.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_HUMANOID,
      CREATURE_TYPE_DWARF,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:139',
    armor: {
      ac: 16,
      type: 'чешуйчатый доспех, щит',
    },
    hp: {
      cubeCount: 4,
      cubeType: 8,
      cubeBonus: 8,
    },
    speed: {
      [SPEED_WALK]: 25,
    },
    params: {
      [PARAM_STR]: 14,
      [PARAM_DEX]: 11,
      [PARAM_CON]: 14,
      [PARAM_INT]: 11,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 9,
    },
    resistanceList: [
      [DAMAGE_POISON],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    languageList: [
      LANG_DWARVISH,
      LANG_UNDERCOMMON,
    ],
    cr: CR_1,
    featureList: [
      {
        name: 'Дуэргарская устойчивость',
        description: `Дуэргар совершает с преимуществом спасброски от яда, заклинаний и иллюзий, а также спасброски для сопротивления очарованию и параличу.`,
      },
      {
        name: 'Чувствительность к солнечному свету',
        description: `Находясь на солнечном свету, дуэргар совершает с помехой броски атаки, а также проверки Мудрости (Внимательность), полагающиеся на зрение.`,
      },
    ],
    actionList: [
      {
        name: 'Увеличение',
        comment: 'перезаряжается после короткого или продолжительного отдыха',
        description: `На 1 минуту дуэргар магическим образом увеличивается в размере вместе со всем, что несёт и носит. В увеличенном состоянии дуэргар Большого размера, удваивает кости урона в атаках, основанных на Силе (уже учтено), и совершает с преимуществом проверки Силы. Если дуэргару не хватает места, чтобы стать Большим, он приобретает максимальный размер, допустимый имеющимся пространством.`,
      },
      {
        name: 'Боевая кирка',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 8,
            cubeBonus: 2,
          },
        },
      },
      {
        name: 'Боевая кирка',
        comment: 'в увеличенной форме',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 2,
          },
        },
      },
      {
        name: 'Метательное копьё',
        attack: {
          type: ACTION_MELEE_OR_RANGE_WEAPON_ATTACK,
          bonus: 4,
          range: {
            melee: 5,
            range: {
              normal: 30,
              max: 120,
            },
          },
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 6,
            cubeBonus: 2,
          },
        },
      },
      {
        name: 'Метательное копьё',
        comment: 'в увеличенной форме',
        attack: {
          type: ACTION_MELEE_OR_RANGE_WEAPON_ATTACK,
          bonus: 4,
          range: {
            melee: 5,
            range: {
              normal: 30,
              max: 120,
            },
          },
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 2,
          },
        },
      },
      {
        name: 'Невидимость',
        comment: 'перезаряжается после короткого или продолжительного отдыха',
        description: `Дуэргар магическим образом становится невидимым, пока не атакует, не наложит заклинание, не использует Увеличение, или пока не окончится его концентрация, но не более 1 часа (как при концентрации на заклинании). Всё снаряжение, которое дуэргар несёт или носит, становится невидимым вместе с ним.`,
      },
    ],
  },
  {
    name: 'Бес',
    nameEn: 'Imp',
    id: CREATURE_IMP,
    description: `Бесы могут быть замечены повсеместно на Нижних Планах. Они работают на побегушках у дьявольских господ, шпионят за конкурентами, а также вводят в заблуждение и подстрекают смертных. Бесы будут с гордостью служить своим хозяевам, но на них нельзя положиться, если задача должна быть выполнена эффективно и быстро.\n
Бес может принимать животный облик по своему желанию, но в естественном состоянии он напоминает крохотного краснокожего гуманоида с колючим хвостом, маленькими рожками и кожаными крыльями. Они нападают из невидимости, ударяя своим ядовитым жалом.`,
    sizeType: SIZE_TINY,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEVIL,
      CREATURE_TYPE_SHAPESHIFTER,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:144',
    armor: 13,
    hp: {
      cubeCount: 3,
      cubeType: 4,
      cubeBonus: 3,
    },
    speed: {
      [SPEED_WALK]: 20,
      [SPEED_FLY]: 40,
    },
    params: {
      [PARAM_STR]: 6,
      [PARAM_DEX]: 17,
      [PARAM_CON]: 13,
      [PARAM_INT]: 11,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 14,
    },
    skillCollection: {
      [SKILL_DECEPTION]: 4,
      [SKILL_PERCEPTION]: 3,
      [SKILL_STEALTH]: 5,
      [SKILL_PERSUASION]: 4,
    },
    resistanceList: [
      [DAMAGE_COLD],
      [DAMAGE_NONMAGIC_NONSILVER_WEAPON],
    ],
    immunityList: [
      [DAMAGE_FIRE],
      [DAMAGE_POISON],
    ],
    immunityConditionList: [
      [CONDITION_POISONED],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 11,
      },
    ],
    languageList: [
      LANG_INFERNAL,
      LANG_COMMON,
    ],
    cr: CR_1,
    featureList: [
      {
        name: 'Перевёртыш',
        description: `Бес может действием принять звериный облик, напоминающий ворона (20 фт., летая 60 фт.), крысу (скорость 20 фт.) или паука (20 фт., лазая 20 фт.), или принять свой истинный облик. Во всех обликах его статистика остаётся той же самой, исключая указанные изменения скорости. Всё несомое и носимое им снаряжение не превращается. Он принимает свой истинный облик, если умирает.`,
      },
      {
        name: 'Дьявольское зрение',
        description: `Магическая тьма не мешает тёмному зрению беса.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Бес совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
    ],
    actionList: [
      {
        name: 'Жало',
        comment: 'в зверином облике — Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 4,
            cubeBonus: 3,
            comment: `, и цель должна совершить спасбросок Телосложения со Сл 11, получая урон ядом 10 (3к6) при провале, или половину этого урона при успехе`,
          },
        },
      },
      {
        name: 'Невидимость',
        description: `Бес магическим образом становится невидимым, пока не атакует или не утратит концентрацию (как при концентрации на заклинании). Всё снаряжение, которое бес несёт или носит, становится невидимым вместе с ним.`,
      },
    ],
  },
  {
    name: 'Бес-фамильяр',
    nameEn: 'Imp Familiar',
    id: CREATURE_IMP_FAMILIAR,
    parentId: CREATURE_IMP,
    description: `Бывает, что бесы состоят на службе у смертных заклинателей, помогая им как советники, шпионы или фамильяры. Бес подталкивает хозяина к совершению злых поступков, зная, что в результате душа смертного может достаться ему. Бесы демонстрируют необыкновенную верность своим хозяевам, и могут быть довольно опасными, если хозяину что-то угрожает.`,
    source: 'MM:143',
    featureList: [
      {
        name: 'Фамильяр',
        description: `Бес может служить другому существу фамильяром, создав телепатическую связь с желающим того хозяином. Пока они связаны, хозяин может ощущать то же, что и бес, пока они находятся в пределах мили друг от друга. Пока бес находится в пределах 10 футов от хозяина, на хозяина распространяется особенность беса Сопротивление магии. Если хозяин нарушит условия договора с бесом, последний может прекратить службу, оборвав телепатическую связь.`,
      },
    ],
  },
  {
    name: 'Бородатый дьявол',
    nameAlt: 'Барбазу',
    nameEn: 'Bearded devil',
    nameEnAlt: 'Barbazu',
    id: CREATURE_BEARDED_DEVIL,
    description: `Бородатые дьяволы служат ударной силой для архидьяволов, сражаясь плечом к плечу и упиваясь славой битвы. Они отвечают насилием на любое пренебрежение, реальное или воображаемое, упиваясь жестокостью, когда их зазубренные клинки разрубают врагов.\n
Бородатые дьяволы похожи на человека с заострёнными ушами, чешуйчатой кожей, длинным хвостом и когтями, выдающими их жестокую натуру. Эти дьяволы получили своё название из-за змееподобных отростков на подбородках, которые они используют, чтобы атаковать и отравлять врагов, ослабляя их опасным ядом. `,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEVIL,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:144',
    armor: {
      ac: 13,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 8,
      cubeType: 8,
      cubeBonus: 16,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 16,
      [PARAM_DEX]: 15,
      [PARAM_CON]: 15,
      [PARAM_INT]: 9,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 11,
    },
    saveThrowCollection: {
      [PARAM_STR]: 5,
      [PARAM_CON]: 4,
      [PARAM_WIT]: 2,
    },
    resistanceList: [
      [DAMAGE_COLD],
      [DAMAGE_NONMAGIC_NONSILVER_WEAPON],
    ],
    immunityList: [
      [DAMAGE_FIRE],
      [DAMAGE_POISON],
    ],
    immunityConditionList: [
      [CONDITION_POISONED],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    languageList: [
      LANG_INFERNAL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_3,
    featureList: [
      {
        name: 'Дьявольское зрение',
        description: `Магическая тьма не мешает тёмному зрению дьявола.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Дьявол совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
      {
        name: 'Уверенный',
        description: `Дьявол не может быть испуган, если видит в пределах 30 футов от себя союзное существо.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дьявол совершает две атаки: одну бородой, и одну глефой.`,
      },
      {
        name: 'Борода',
        description: `Цель должна преуспеть в спасброске Телосложения со Сл 12, иначе станет отравленной на 1 минуту. Будучи отравленной таким образом, цель не может восстанавливать хиты. Цель может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 5,
          target: {
            count: 1,
            limit: {
              type: TARGET_CREATURE,
            },
          },
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 8,
            cubeBonus: 2,
          },
        },
      },
      {
        name: 'Глефа',
        description: `Если цель — существо, не являющееся ни нежитью, ни конструктом, она должна преуспеть в спасброске Телосложения со Сл 12, иначе будет терять 5 (1к10) хитов в начале каждого своего хода из-за инфернальной раны. Каждый раз, когда демон попадает этой атакой по цели, уже имеющей эту рану, урон от раны увеличивается на 5 (1к10). Любое существо может залечить рану, если действием совершит успешную проверку Мудрости (Медицина) со Сл 12. Эта рана также закрывается, если цель получит магическое лечение.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 10,
            cubeBonus: 3,
          },
        },
      },
    ],
  },
  {
    name: 'Бородатый дьявол-призыватель',
    nameEn: 'Bearded devil summoner',
    id: CREATURE_BEARDED_DEVIL_SUMMONER,
    parentId: CREATURE_BEARDED_DEVIL,
    actionList: [
      {
        name: 'Призыв дьявола',
        description: `Дьявол пытается призвать одного бородатого дьявола с шансом 30%.\n
Призванный дьявол появляется в свободном пространстве в пределах 60 футов от призывателя, и действует как его союзник, не имеющий способности призывать дьяволов. Он помогает в течение 1 минуты или пока призыватель не умрёт или действием его не отпустит.`,
        limit: {
          count: 1,
          period: 'день',
        },
      },
    ],
  },
  {
    name: 'Дьявол цепей',
    nameAlt: 'Китон',
    nameEn: 'Chain devil',
    nameEnAlt: 'Kyton',
    id: CREATURE_CHAIN_DEVIL,
    description: `Это зловещее исчадие носит цепи как одежду. Распугивая других существ жутким взглядом, этот дьявол оживляет покрывающие его тело цепи, а также те цепи, что есть рядом. Ожившие цепи покрываются крюками, лезвиями и шипами, разрывающими врагов.\n
Дьяволы цепей выступают в роли тюремщиков-садистов, наслаждающихся болью и живущих только ради того, чтобы эту боль причинять. Это они пытают души смертных, запертые в Девяти Преисподних, вымещая свою садистскую ярость на жалких лемурах, в облике которых эти души и появляются.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEVIL,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:145',
    armor: {
      ac: 16,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 10,
      cubeType: 8,
      cubeBonus: 40,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 18,
      [PARAM_DEX]: 15,
      [PARAM_CON]: 18,
      [PARAM_INT]: 11,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 14,
    },
    saveThrowCollection: {
      [PARAM_CON]: 7,
      [PARAM_WIT]: 4,
      [PARAM_CHA]: 5,
    },
    resistanceList: [
      [DAMAGE_COLD],
      [DAMAGE_NONMAGIC_NONSILVER_WEAPON],
    ],
    immunityList: [
      [DAMAGE_FIRE],
      [DAMAGE_POISON],
    ],
    immunityConditionList: [
      [CONDITION_POISONED],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 11,
      },
    ],
    languageList: [
      LANG_INFERNAL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_8,
    featureList: [
      {
        name: 'Дьявольское зрение',
        description: `Магическая тьма не мешает тёмному зрению дьявола.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Дьявол совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дьявол совершает две атаки цепями.`,
      },
      {
        name: 'Цепь',
        description: `Цель становится схваченной (Сл высвобождения 14), если нет другого существа, схваченного этим дьяволом. Пока цель схвачена, она опутана и получает колющий урон 7 (2к6) в начале каждого своего хода.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 8,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Оживление цепей',
        comment: 'перезаряжается после короткого или продолжительного отдыха',
        description: `До четырёх цепей, видимых дьяволом в пределах 60 футов от себя, магическим образом обрастают острыми колючками и оживают, находясь под контролем дьявола, при условии, что эти цепи никто не несёт и не носит.\n
У каждой ожившей цепи КД 20, 20 хитов, сопротивление к колющему урону и иммунитет к урону звуком и психической энергией. Если дьявол в свой ход использует Мультиатаку, он может каждой ожившей цепью совершить одну дополнительную атаку Цепью. Каждая ожившая цепь может схватить по одной цели, но не может совершать атаки, если есть цель, схваченная ей. Ожившая цепь возвращается в неживое состояние, если её хиты опускаются до 0, а также если дьявол становится недееспособным или умирает.`,
      },
    ],
    reactionList: [
      {
        name: 'Обескураживающая иллюзия',
        description: `Если существо, видимое дьяволом, начинает ход в пределах 30 футов от дьявола, дьявол может создать иллюзию, чтобы выглядеть как мертвец, бывший этому существу родным, или наоборот, как его злейший враг. Если это существо видит дьявола, оно должно преуспеть в спасброске Мудрости со Сл 14, иначе станет испуганным до конца своего хода.`,
      },
    ],
  },
  {
    name: 'Игольчатый дьявол',
    nameAlt: 'Спинагон',
    nameEn: 'Spined devil',
    nameEnAlt: 'Spinagon',
    id: CREATURE_SPINED_DEVIL,
    description: `Спинагоны по размеру меньше большинства других дьяволов, и они служат шпионами и посредниками старших дьяволов и архидьяволов. Они — глаза и уши Девяти Преисподних, и даже те дьяволы, которые презирают физическую слабость спинагонов, относятся к ним, по крайней мере, с толикой уважения.\n
Тело и хвост спинагона усеяно иглами, а иглы с хвоста он может использовать как дистанционное оружие. При контакте с целью шипы воспламеняются. В свободное от доставки сообщений или сбора разведданных время игольчатые дьяволы служат в инфернальных легионах летучей артиллерией, компенсируя свою относительную слабость путём нападения толпой. Хоть игольчатые дьяволы и жаждут продвижения в ранге и власти, они по своей природе трусливы и быстро рассеются, если сражение пойдёт не в их пользу. `,
    sizeType: SIZE_SMALL,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEVIL,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:146',
    armor: {
      ac: 13,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 5,
      cubeType: 6,
      cubeBonus: 5,
    },
    speed: {
      [SPEED_WALK]: 20,
      [SPEED_FLY]: 40,
    },
    params: {
      [PARAM_STR]: 10,
      [PARAM_DEX]: 15,
      [PARAM_CON]: 12,
      [PARAM_INT]: 11,
      [PARAM_WIT]: 14,
      [PARAM_CHA]: 8,
    },
    resistanceList: [
      [DAMAGE_COLD],
      [DAMAGE_NONMAGIC_NONSILVER_WEAPON],
    ],
    immunityList: [
      [DAMAGE_FIRE],
      [DAMAGE_POISON],
    ],
    immunityConditionList: [
      [CONDITION_POISONED],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 12,
      },
    ],
    languageList: [
      LANG_INFERNAL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_2,
    featureList: [
      {
        name: 'Дьявольское зрение',
        description: `Магическая тьма не мешает тёмному зрению дьявола.`,
      },
      {
        name: 'Облёт',
        description: `Дьявол не провоцирует атаки, когда вылетает из досягаемости врага.`,
      },
      {
        name: 'Запас игл',
        description: `У дьявола есть двенадцать игл на хвосте. Использованные иглы отрастают к моменту, когда дьявол оканчивает продолжительный отдых.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Дьявол совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дьявол совершает две атаки: одну укусом, и одну вилами, или же две атаки иглами на хвосте.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 2,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 4,
          },
        },
      },
      {
        name: 'Вилы',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 2,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 6,
          },
        },
      },
      {
        name: 'Игла на хвосте',
        attack: {
          type: ACTION_RANGE_WEAPON_ATTACK,
          bonus: 4,
          range: {
            normal: 20,
            max: 80,
          },
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 1,
              cubeType: 4,
              cubeBonus: 2,
            },
            {
              type: DAMAGE_FIRE,
              cubeCount: 1,
              cubeType: 6,
            },
          ],
        },
      },
    ],
  },
  {
    name: 'Исчадие преисподней',
    nameAlt: 'Исчадие из ямы',
    nameEn: 'Pit Fiend',
    id: CREATURE_PIT_FIEND,
    description: `Безоговорочные повелители большинства других дьяволов, исчадия преисподней служат напрямую эрцгерцогам и эрцгерцогиням Девяти Преисподних, и выполняют их желания. Эти могучие дьяволы — генералы Девяти Преисподних, ведущие в битву инфернальные легионы.\n
С их гипертрофированным чувством собственного превосходства и права повелевать другими, исчадия преисподней формируют некую гротескную аристократию инфернального царства. Эти доминирующие тираны-манипуляторы плетут внутри сложной и опасной политики Девяти Преисподних заговоры с целью уничтожения всего, что стоит между ними и их желаниями.\n
Исчадие преисподней представляет собой громадное чудовище с подобным кнуту хвостом и огромными крыльями, в которые он заворачивается как в плащ. Его тело покрыто крепчайшей чешуёй, а с клыкастой пасти капает яд, который может свалить с ног даже самое крепкое смертное существо. Исчадия преисподней бесстрашны в бою, они стараются сойтись в поединке один-на-один с самым сильным врагом, демонстрируя всем своё превосходство и надменность, которая не позволяет им допустить и мысли о возможности поражения. `,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEVIL,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:147',
    armor: {
      ac: 19,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 24,
      cubeType: 10,
      cubeBonus: 168,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_FLY]: 60,
    },
    params: {
      [PARAM_STR]: 26,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 24,
      [PARAM_INT]: 22,
      [PARAM_WIT]: 18,
      [PARAM_CHA]: 24,
    },
    resistanceList: [
      [DAMAGE_COLD],
      [DAMAGE_NONMAGIC_NONSILVER_WEAPON],
    ],
    immunityList: [
      [DAMAGE_FIRE],
      [DAMAGE_POISON],
    ],
    immunityConditionList: [
      [CONDITION_POISONED],
    ],
    senseList: [
      {
        id: SENSE_TRUE_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    languageList: [
      LANG_INFERNAL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_20,
    featureList: [
      {
        name: 'Аура страха',
        description: `Все враждебные исчадию преисподней существа, начинающие ход в пределах 20 футов от исчадия преисподней, должны совершать спасбросок Мудрости со Сл 21, если исчадие преисподней дееспособно. При провале существо становится испуганным до начала своего следующего хода. Если спасбросок был успешным, оно получает иммунитет к Ауре страха этого исчадия на следующие 24 часа.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Исчадие преисподней совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
      {
        name: 'Магическое оружие',
        description: `Атаки оружием исчадия преисподней являются магическими.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 21,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            SPELL_DETECT_MAGIC,
            SPELL_FIREBALL,
          ],
        },
        {
          limit: {
            count: 3,
            period: 'день',
          },
          list: [
            SPELL_WALL_OF_FIRE,
            SPELL_HOLD_MONSTER,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Мультиатака',
        description: `Исчадие преисподней совершает четыре атаки: одну укусом, одну когтём, одну булавой, и одну хвостом.`,
      },
      {
        name: 'Укус',
        description: `Цель должна преуспеть в спасброске Телосложения со Сл 21, иначе станет отравленной. Будучи отравленной таким образом, цель не может восстанавливать хиты, и получает урон ядом 21 (6к6) в начале каждого своего хода. Отравленная цель может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 14,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 4,
            cubeType: 6,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 14,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 4,
            cubeType: 8,
            cubeBonus: 8,
          },
        },
      },
      {
        name: 'Булава',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 14,
          range: 10,
          target: 1,
          hit: [
            {
              type: DAMAGE_BLUDGEONING,
              cubeCount: 2,
              cubeType: 6,
              cubeBonus: 8,
            },
            {
              type: DAMAGE_FIRE,
              cubeCount: 6,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 14,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 3,
            cubeType: 10,
            cubeBonus: 8,
          },
        },
      },
    ],
  },
  {
    name: 'Исчадие-призыватель преисподней',
    nameAlt: 'Исчадие-призыватель из ямы',
    nameEn: 'Pit Fiend summoner',
    id: CREATURE_PIT_FIEND_SUMMONER,
    parentId: CREATURE_PIT_FIEND,
    actionList: [
      {
        name: 'Призыв дьявола',
        description: `Исчадие преисподней выбирает, кого призвать, и пытается это сделать без шанса провала.\n
* 2к4 бородатых дьявола
* 1к4 шипастых дьявола
* одну эринию\n
Призванные существа появляются в свободном пространстве в пределах 60 футов от исчадия преисподней, и действуют как его союзники, не имеющие способности призывать дьяволов. Они помогает в течение 1 минуты или пока исчадие преисподней не умрёт или действием их не отпустит.`,
        limit: {
          count: 1,
          period: 'день',
        },
      },
    ],
  },
  {
    name: 'Костяной дьявол',
    nameAlt: 'Осилут',
    nameEn: 'Bone Devil',
    nameEnAlt: 'Osyluth',
    id: CREATURE_BONE_DEVIL,
    description: `Движимые ненавистью, вожделением и завистью, костяные дьяволы служат жестокими надсмотрщиками Девяти Преисподних. Они принуждают более слабых дьяволов к работе, получая особое наслаждение, когда их соперников понижают в ранге. Вместе с тем они долго продвигаются по иерархии и люто завидуют своим начальникам, выслуживаясь перед ними, хоть их это и злит.\n
Костяные дьяволы выглядят как гуманоидная оболочка с высохшей кожей, натянутой на скелетный остов. У них устрашающий череп вместо головы и хвост скорпиона, и неприятный запах разложения висит в воздухе вокруг них. Хотя их когти наносят разрушительный урон в бою, костяные дьяволы также орудуют костяными копьями с крюками, которыми они ловят врагов перед тем как ударить их ядовитым жалом.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEVIL,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:148',
    armor: {
      ac: 19,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 15,
      cubeType: 10,
      cubeBonus: 60,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_FLY]: 40,
    },
    params: {
      [PARAM_STR]: 18,
      [PARAM_DEX]: 16,
      [PARAM_CON]: 18,
      [PARAM_INT]: 13,
      [PARAM_WIT]: 14,
      [PARAM_CHA]: 16,
    },
    saveThrowCollection: {
      [PARAM_INT]: 5,
      [PARAM_WIT]: 6,
      [PARAM_CHA]: 7,
    },
    skillCollection: {
      [SKILL_DECEPTION]: 7,
      [SKILL_INSIGHT]: 6,
    },
    resistanceList: [
      [DAMAGE_COLD],
      [DAMAGE_NONMAGIC_NONSILVER_WEAPON],
    ],
    immunityList: [
      [DAMAGE_FIRE],
      [DAMAGE_POISON],
    ],
    immunityConditionList: [
      [CONDITION_POISONED],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 12,
      },
    ],
    languageList: [
      LANG_INFERNAL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_9,
    featureList: [
      {
        name: 'Дьявольское зрение',
        description: `Магическая тьма не мешает тёмному зрению дьявола.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Дьявол совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дьявол совершает три атаки: две когтями, и одну жалом.`,
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 8,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 1,
            cubeType: 8,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Жало',
        description: `Цель должна преуспеть в спасброске Телосложения со Сл 14, иначе станет отравленной на 1 минуту. Цель может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 8,
          range: 10,
          target: 1,
          hit: [
            {
              type: DAMAGE_SLASHING,
              cubeCount: 2,
              cubeType: 8,
              cubeBonus: 4,
            },
            {
              type: DAMAGE_POISON,
              cubeCount: 5,
              cubeType: 6,
            },
          ],
        },
      },
    ],
  },
  {
    name: 'Костяной дьявол-призыватель',
    nameEn: 'Bone devil summoner',
    id: CREATURE_BONE_DEVIL_SUMMONER,
    parentId: CREATURE_BONE_DEVIL,
    ...boneDevilSummoner,
  },
  {
    name: 'Костяной дьявол c копьём',
    nameEn: 'Bone Devil with a Spear',
    id: CREATURE_BONE_DEVIL_WITH_A_SPEAR,
    parentId: CREATURE_BONE_DEVIL,
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дьявол совершает две атаки: одну гвизармой, и одну жалом.`,
      },
      {
        name: 'Гвизарма',
        description: `Если цель — существо с размером не больше Огромного, оно становится схваченным (Сл высвобождения 14). Пока цель схвачена, дьявол не может использовать свою гвизарму против другой цели.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 8,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 12,
            cubeBonus: 4,
          },
        },
      },
    ],
  },
  {
    name: 'Костяной дьявол-призыватель c копьём',
    nameEn: 'Bone devil summoner with a Spear',
    id: CREATURE_BONE_DEVIL_SUMMONER_WITH_A_SPEAR,
    parentId: CREATURE_BONE_DEVIL_WITH_A_SPEAR,
    ...boneDevilSummoner,
  },
  {
    name: 'Ледяной дьявол',
    nameAlt: 'Гелюгон',
    nameEn: 'Ice Devil',
    nameEnAlt: 'Gelugon',
    id: CREATURE_ICE_DEVIL,
    description: `Ледяные дьяволы обычно обитают на холодных слоях Стигии и Кании, и служат командирами инфернальных армий, выплёскивая свои гнев и негодование на меньших дьяволов. Жаждя власти своих командиров — исчадий преисподней, — они упорно трудятся ради повышения, убивая врагов Девяти Преисподних и захватывая для своих хозяев-архидьяволов как можно больше душ.\n
У ледяных дьяволов, напоминающих внешне гигантских двуногих насекомых, когтистые руки и ноги, мощные мандибулы и длинные хвосты, покрытые бритвенно-острыми шипами. Некоторые из них вооружены зазубренными копьями, чьё ледяное прикосновение делает врагов беспомощными в бою. `,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEVIL,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:149',
    armor: {
      ac: 18,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 19,
      cubeType: 10,
      cubeBonus: 76,
    },
    speed: {
      [SPEED_WALK]: 40,
    },
    params: {
      [PARAM_STR]: 21,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 18,
      [PARAM_INT]: 18,
      [PARAM_WIT]: 15,
      [PARAM_CHA]: 18,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 7,
      [PARAM_CON]: 9,
      [PARAM_WIT]: 7,
      [PARAM_CHA]: 9,
    },
    resistanceList: [
      [DAMAGE_NONMAGIC_NONSILVER_WEAPON],
    ],
    immunityList: [
      [DAMAGE_COLD],
      [DAMAGE_FIRE],
      [DAMAGE_POISON],
    ],
    immunityConditionList: [
      [CONDITION_POISONED],
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
      },
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 12,
      },
    ],
    languageList: [
      LANG_INFERNAL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_14,
    featureList: [
      {
        name: 'Дьявольское зрение',
        description: `Магическая тьма не мешает тёмному зрению дьявола.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Дьявол совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дьявол совершает три атаки: одну укусом, одну когтями, и одну хвостом.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 2,
              cubeType: 6,
              cubeBonus: 5,
            },
            {
              type: DAMAGE_COLD,
              cubeCount: 3,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Когти',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_SLASHING,
              cubeCount: 2,
              cubeType: 4,
              cubeBonus: 5,
            },
            {
              type: DAMAGE_COLD,
              cubeCount: 3,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 10,
          target: 1,
          hit: [
            {
              type: DAMAGE_BLUDGEONING,
              cubeCount: 2,
              cubeType: 6,
              cubeBonus: 5,
            },
            {
              type: DAMAGE_COLD,
              cubeCount: 3,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Стена льда',
        description: `Дьявол магическим образом формирует непрозрачную стену льда на твёрдой поверхности, которую видит в пределах 60 футов от себя. Толщина стены — 1 фут, длина до 30 футов и высота 10 футов, или же это купол полусферы с диаметром до 20 футов.\n
Когда стена появляется, все существа в её пространстве выталкиваются из неё по ближайшему маршруту. Существо само выбирает, с какой стороны стены окажется, если только оно не недееспособно. После этого существо совершает спасбросок Ловкости со Сл 17, получая урон холодом 35 (10к6) при провале или половину этого урона при успехе.\n
Стена существует 1 минуту, либо пока дьявол не станет недееспособным или не умрёт. Стене можно причинять урон и прорубать в ней проходы; у каждой 10-футовой секции КД 5, 30 хитов, уязвимость к урону огнём и иммунитет к урону кислотой, некротической энергией, психической энергией, холодом и ядом. Если секция уничтожена, она оставляет после себя область холодного воздуха. Каждый раз, когда существо оканчивает перемещение, проходя в текущем ходу через область холодного воздуха, как добровольно, так и не по своей воле, это существо должно совершить спасбросок Телосложения со Сл 17, получая урон холодом 17 (5к6) при провале, или половину этого урона при успехе. Область холодного воздуха исчезает, когда исчезнет вся стена. `,
        restore: {
          from: 6,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Ледяной дьявол-призыватель',
    nameEn: 'Ice devil summoner',
    id: CREATURE_ICE_DEVIL_SUMMONER,
    parentId: CREATURE_ICE_DEVIL,
    ...iceDevilSummoner,
  },
  {
    name: 'Ледяной дьявол c копьём',
    nameEn: 'Ice Devil with a Spear',
    id: CREATURE_ICE_DEVIL_WITH_A_SPEAR,
    parentId: CREATURE_ICE_DEVIL,
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дьявол совершает две атаки: одну ледяным копьём, и одну хвостом.`,
      },
      {
        name: 'Ледяное копьё',
        description: `Если цель — существо, она должна преуспеть в спасброске Телосложения со Сл 15, иначе её скорость на 1 минуту снижается на 10 футов; в каждом своём ходу она сможет совершать либо действие, либо бонусное действие, но не то и другое; и оно не может совершать реакции. Цель может повторять спасбросок в конце каждого своего хода, при успехе завершая этот эффект на себе.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 10,
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 2,
              cubeType: 8,
              cubeBonus: 5,
            },
            {
              type: DAMAGE_COLD,
              cubeCount: 3,
              cubeType: 6,
            },
          ],
        },
      },
    ],
  },
  {
    name: 'Ледяной дьявол-призыватель c копьём',
    nameEn: 'Ice devil summoner with a Spear',
    id: CREATURE_ICE_DEVIL_SUMMONER_WITH_A_SPEAR,
    parentId: CREATURE_ICE_DEVIL_WITH_A_SPEAR,
    ...iceDevilSummoner,
  },
  {
    name: 'Лемур',
    nameEn: 'Lemure',
    id: CREATURE_LEMURE,
    description: `Лемуры появляются когда душа смертного испорчена злом и сослана навечно в Девять Преисподних. Самая низшая разновидность дьяволов, лемуры — отвратительные, бесформенные существа, обречённые страдать и мучиться до тех пор, пока не продвинутся до более высокой формы дьявола, например, до беса.\n
Лемуры напоминают собой расплавленную массу плоти с чем-то вроде головы и гуманоидного торса. Постоянная гримаса страдания искривляет лицо, его слабый рот постоянно двигается, несмотря на то, что он не может говорить.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEVIL,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:150',
    armor: 7,
    hp: {
      cubeCount: 3,
      cubeType: 8,
    },
    speed: {
      [SPEED_WALK]: 15,
    },
    params: {
      [PARAM_STR]: 10,
      [PARAM_DEX]: 5,
      [PARAM_CON]: 11,
      [PARAM_INT]: 1,
      [PARAM_WIT]: 11,
      [PARAM_CHA]: 3,
    },
    resistanceList: [
      [DAMAGE_COLD],
    ],
    immunityList: [
      [DAMAGE_FIRE],
      [DAMAGE_POISON],
    ],
    immunityConditionList: [
      [CONDITION_FRIGHTENED],
      [CONDITION_POISONED],
      [CONDITION_CHARMED],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    languageList: [
      {
        id: LANG_INFERNAL,
        doNotSpeak: true,
      },
    ],
    cr: CR_0,
    featureList: [
      {
        name: 'Дьявольское зрение',
        description: `Магическая тьма не мешает тёмному зрению лемура.`,
      },
      {
        name: 'Адское возрождение',
        description: `Лемур, умерший в Девяти Преисподних, возвращается к жизни с полными хитами через 1к10 дней, если только не был убит существом с добрым мировоззрением и находящимся под действием заклинания _Благословение_ (Bless), и его останки не поливали святой водой.`,
      },
    ],
    actionList: [
      {
        name: 'Кулак',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 3,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 1,
            cubeType: 4,
          },
        },
      },
    ],
  },
  {
    name: 'Шипастый дьявол',
    nameAlt: 'Гаматула',
    nameEn: 'Barbed devil',
    nameEnAlt: 'Hamatula',
    id: CREATURE_BARBED_DEVIL,
    description: `Существа с необузданными жадностью и желаниями, шипастые дьяволы служат охранниками для более сильных обитателей Девяти Преисподних и их сокровищниц. Светящиеся глаза этого похожего на высокого гуманоида, покрытого острыми колючками, шипами, и крючками, дьявола зорко выискивают предметы или существ, которые можно бы было прибрать к рукам. Эти исчадия готовы к любому шансу вступить в бой, если победа сулит награду.\n
Шипастые дьяволы известны своей бдительностью, и их трудно застать врасплох, а ещё они относятся к своим обязанностям без скуки и рассеянности. Они используют свои острые когти как оружие и кидают огненные шары в убегающих от них врагов. `,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEVIL,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:150',
    armor: {
      ac: 15,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 13,
      cubeType: 8,
      cubeBonus: 52,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 16,
      [PARAM_DEX]: 17,
      [PARAM_CON]: 18,
      [PARAM_INT]: 12,
      [PARAM_WIT]: 14,
      [PARAM_CHA]: 14,
    },
    saveThrowCollection: {
      [PARAM_STR]: 6,
      [PARAM_CON]: 7,
      [PARAM_WIT]: 5,
      [PARAM_CHA]: 5,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 8,
      [SKILL_DECEPTION]: 5,
      [SKILL_INSIGHT]: 5,
    },
    resistanceList: [
      [DAMAGE_COLD],
      [DAMAGE_NONMAGIC_NONSILVER_WEAPON],
    ],
    immunityList: [
      [DAMAGE_FIRE],
      [DAMAGE_POISON],
    ],
    immunityConditionList: [
      [CONDITION_POISONED],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 18,
      },
    ],
    languageList: [
      LANG_INFERNAL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_5,
    featureList: [
      {
        name: 'Шипастая шкура',
        description: `В начале каждого своего хода шипастый дьявол причиняет колющий урон 5 (1к10) всем схватившим его существам.`,
      },
      {
        name: 'Дьявольское зрение',
        description: `Магическая тьма не мешает тёмному зрению дьявола.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Дьявол совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дьявол совершает три рукопашные атаки: одну хвостом, и две когтями. В качестве альтернативы, он может дважды использовать Метание пламени.`,
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 6,
            cubeBonus: 3,
          },
        },
      },
      {
        name: 'Хвост',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 3,
          },
        },
      },
      {
        name: 'Метание пламени',
        description: `Если цель — горючий предмет, который никто не несёт и не носит, она также загорается.`,
        attack: {
          type: ACTION_RANGE_SPELL_ATTACK,
          bonus: 5,
          range: 150,
          target: 1,
          hit: {
            type: DAMAGE_FIRE,
            cubeCount: 3,
            cubeType: 6,
          },
        },
      },
    ],
  },
  {
    name: 'Шипастый дьявол-призыватель',
    nameEn: 'Barbed devil summoner',
    id: CREATURE_BARBED_DEVIL_SUMMONER,
    parentId: CREATURE_BARBED_DEVIL,
    actionList: [
      {
        name: 'Призыв дьявола',
        description: `Дьявол пытается призвать одного шипастого дьявола с шансом 30%.\n
Призванный дьявол появляется в свободном пространстве в пределах 60 футов от призывателя, и действует как его союзник, не имеющий способности призывать дьяволов. Он помогает в течение 1 минуты или пока призыватель не умрёт или действием его не отпустит.`,
        limit: {
          count: 1,
          period: 'день',
        },
      },
    ],
  },
  {
    name: 'Рогатый дьявол',
    nameAlt: 'Мальбранш',
    nameEn: 'Horned devil',
    nameEnAlt: 'Malebranche ',
    id: CREATURE_HORNED_DEVIL,
    description: `Рогатые дьяволы безумно ленивы, и стараются не подвергать себя опасности. Более того, они ненавидят и боятся существ сильнее их самих. Однако если их достаточно спровоцировать или разозлить, ярость этих исчадий бывает ужасающей.\n
Мальбранш ростом примерно с огра и покрыт твёрдыми как железо чешуйками. Рогатые дьяволы, летающая пехота адских легионов, следуют приказам дословно. Их огромные крылья и гигантские рога являют собой устрашающую картину, когда они пикируют с неба, атакуя смертоносными трезубцами и хлеща хвостами.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEVIL,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:151',
    armor: {
      ac: 18,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 17,
      cubeType: 10,
      cubeBonus: 85,
    },
    speed: {
      [SPEED_WALK]: 20,
      [SPEED_FLY]: 60,
    },
    params: {
      [PARAM_STR]: 22,
      [PARAM_DEX]: 17,
      [PARAM_CON]: 21,
      [PARAM_INT]: 12,
      [PARAM_WIT]: 16,
      [PARAM_CHA]: 17,
    },
    saveThrowCollection: {
      [PARAM_STR]: 10,
      [PARAM_DEX]: 7,
      [PARAM_WIT]: 7,
      [PARAM_CHA]: 7,
    },
    resistanceList: [
      [DAMAGE_COLD],
      [DAMAGE_NONMAGIC_NONSILVER_WEAPON],
    ],
    immunityList: [
      [DAMAGE_FIRE],
      [DAMAGE_POISON],
    ],
    immunityConditionList: [
      [CONDITION_POISONED],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 13,
      },
    ],
    languageList: [
      LANG_INFERNAL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_11,
    featureList: [
      {
        name: 'Дьявольское зрение',
        description: `Магическая тьма не мешает тёмному зрению дьявола.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Дьявол совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Дьявол совершает три рукопашные атаки: две вилами, и одну хвостом. Он может использовать Метание пламени вместо любой рукопашной атаки.`,
      },
      {
        name: 'Вилы',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Хвост',
        description: `Если цель — существо, не являющееся ни нежитью, ни конструктом, она должна преуспеть в спасброске Телосложения со Сл 17, иначе будет терять 10 (3к6) хитов в начале каждого своего хода из-за инфернальной раны. Каждый раз, когда демон попадает этой атакой по цели, уже имеющей эту рану, урон от раны увеличивается на 10 (3к6). Любое существо может залечить рану, если действием совершит успешную проверку Мудрости (Медицина) со Сл 12. Эта рана также закрывается, если цель получит магическое лечение.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 10,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 8,
            cubeBonus: 6,
          },
        },
      },
      {
        name: 'Метание пламени',
        description: `Если цель — горючий предмет, который никто не несёт и не носит, она также загорается.`,
        attack: {
          type: ACTION_RANGE_SPELL_ATTACK,
          bonus: 7,
          range: 150,
          target: 1,
          hit: {
            type: DAMAGE_FIRE,
            cubeCount: 4,
            cubeType: 6,
          },
        },
      },
    ],
  },
  {
    name: 'Рогатый дьявол-призыватель',
    nameEn: 'Horned devil summoner',
    id: CREATURE_HORNED_DEVIL_SUMMONER,
    parentId: CREATURE_HORNED_DEVIL,
    actionList: [
      {
        name: 'Призыв дьявола',
        description: `Дьявол пытается призвать одного рогатого дьявола с шансом 30%.\n
Призванный дьявол появляется в свободном пространстве в пределах 60 футов от призывателя, и действует как его союзник, не имеющий способности призывать дьяволов. Он помогает в течение 1 минуты или пока призыватель не умрёт или действием его не отпустит.`,
        limit: {
          count: 1,
          period: 'день',
        },
      },
    ],
  },
  {
    name: 'Эриния',
    nameEn: 'Erinyes',
    id: CREATURE_ERINYES,
    description: `Самые прекрасные и завораживающие из всех младших и старших дьяволов — это эринии, дисциплинированные и яростные воины. Пикируя с небес, они несут быструю смерть существам, предавшим их повелителей или нарушившим эдикты Асмодея. Эринии выглядят как гуманоиды мужского или женского пола с фигурами, достойными изваяний, и большими пернатыми крыльями. Большинство одето в стилизованную броню и рогатые шлемы, и пользуется изысканными мечами и луками. У некоторых при себе есть верёвки опутывания, чтобы обездвиживать сильных противников.\n
Легенды гласят, что первые эринии были ангелами, падшими с Верхних Планов из-за какого-то проступка или искушения. Эринии всегда пользуются возможностью быть неверно принятыми за ангела, чтобы легче выполнить свою миссию по завоеванию или совращению. `,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
      CREATURE_TYPE_DEVIL,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:152',
    armor: {
      ac: 18,
      type: 'латный доспех',
    },
    hp: {
      cubeCount: 18,
      cubeType: 8,
      cubeBonus: 72,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_FLY]: 60,
    },
    params: {
      [PARAM_STR]: 18,
      [PARAM_DEX]: 16,
      [PARAM_CON]: 18,
      [PARAM_INT]: 14,
      [PARAM_WIT]: 14,
      [PARAM_CHA]: 18,
    },
    saveThrowCollection: {
      [PARAM_DEX]: 7,
      [PARAM_CON]: 8,
      [PARAM_WIT]: 6,
      [PARAM_CHA]: 8,
    },
    resistanceList: [
      [DAMAGE_COLD],
      [DAMAGE_NONMAGIC_NONSILVER_WEAPON],
    ],
    immunityList: [
      [DAMAGE_FIRE],
      [DAMAGE_POISON],
    ],
    immunityConditionList: [
      [CONDITION_POISONED],
    ],
    senseList: [
      {
        id: SENSE_TRUE_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 12,
      },
    ],
    languageList: [
      LANG_INFERNAL,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_12,
    featureList: [
      {
        name: 'Адское оружие',
        description: `Атаки оружием эринии являются магическими, и причиняют при попадании дополнительный урон ядом 13 (3к8) (уже учтён в атаках).`,
      },
      {
        name: 'Сопротивление магии',
        description: `Эриния совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Эриния совершает три атаки.`,
      },
      {
        name: 'Длинный меч',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 8,
          range: 5,
          target: 1,
          hit: [
            [
              {
                type: DAMAGE_SLASHING,
                cubeCount: 1,
                cubeType: 8,
                cubeBonus: 4,
              },
              {
                type: DAMAGE_SLASHING,
                cubeCount: 1,
                cubeType: 10,
                cubeBonus: 4,
                comment: `, если используется двумя руками, `,
              },
            ],
            {
              type: DAMAGE_POISON,
              cubeCount: 3,
              cubeType: 8,
            },
          ],
        },
      },
      {
        name: 'Длинный лук',
        description: `Цель должна преуспеть в спасброске Телосложения со Сл 14, иначе станет отравленной. Яд действует до тех пор, пока не будет устранён заклинанием _Малое восстановление_ (Lesser restoration) или подобной магией.`,
        attack: {
          type: ACTION_RANGE_WEAPON_ATTACK,
          bonus: 7,
          range: {
            normal: 150,
            max: 600,
          },
          target: 1,
          hit: [
            {
              type: DAMAGE_PIERCING,
              cubeCount: 1,
              cubeType: 8,
              cubeBonus: 3,
            },
            {
              type: DAMAGE_POISON,
              cubeCount: 3,
              cubeType: 8,
            },
          ],
        },
      },
    ],
    reactionList: [
      {
        name: 'Парирование',
        description: `Эриния добавляет 4 к КД против одной рукопашной атаки, которая должна попасть по ней. Для этого эриния должна видеть атакующего, и должна использовать рукопашное оружие.`,
      },
    ],
    isFemale: true,
  },
  {
    name: 'Эриния-призыватель',
    nameEn: 'Erinyes summoner',
    id: CREATURE_ERINYES_SUMMONER,
    parentId: CREATURE_ERINYES,
    actionList: [
      {
        name: 'Призыв дьявола',
        description: `Эриния выбирает, кого призвать, и пытается это сделать с шансом 50%.\n
* 3к6 игольчатых дьяволов
* 1к6 бородатых дьяволов
* одну эринию\n
Призванные существа появляются в свободном пространстве в пределах 60 футов от исчадия преисподней, и действуют как его союзники, не имеющие способности призывать дьяволов. Они помогает в течение 1 минуты или пока исчадие преисподней не умрёт или действием их не отпустит.`,
        limit: {
          count: 1,
          period: 'день',
        },
      },
    ],
  },
  {
    name: 'Единорог',
    nameEn: 'Unicorn',
    id: CREATURE_UNICORN,
    description: `Единороги обитают в зачарованных лесах. Не являющиеся родственниками лошадей, на которых они так похожи, белые и сияющие, как звёзды, единороги — это небожители, оберегающие лесные царства. Изо лба единорога растёт один закрученный спиралью рог, прикосновение которого может лечить больных и раненых. Его уши ловят каждое слово и шёпот существ, которые обитают в его владениях, и он знает языки эльфов и лесных народов. Единороги позволяют добрым существам входить в свой лес для охоты и сбора еды и всегда держат злодеев подальше. Злые существа редко покидают владения единорогов живыми.\n
**Божественные охранники.** Добрые божества отправляют единорогов на Материальный План, чтобы уберечь от зла, защитить и сохранить священные места. Большинство единорогов защищает определённую территорию, такую как зачарованный лес. Впрочем, боги иногда посылают единорогов охранять священные артефакты или защищать определённых существ. Когда силы тьмы преследуют кого-то, кого боги хотят защитить, они могут направить его в лес единорога, где злые существа найдут лишь свою погибель.\n
Единороги часто служат божествам лесов и дикой местности, включая богов добрых фей. Все единороги обладают природной способностью к врачеванию, но некоторым из них боги более благосклонны, и они способны творить чудеса, доступные обычно лишь высшим жрецам.\n
**Владыки леса.** Лес единорога — это святое царство, где под сенью древ ничто не пройдёт незамеченным. Единорог слышит каждую ноту, спетую эльфами в кронах деревьев. Он чувствует, как гусеницы ворочаются в своих коконах, и как качаются листья и ветки, когда на них опускаются бабочки, чтобы дать отдых своим крыльям.\n
Лес единорога пронизан чувством спокойствия. Все, от волков и лис до птиц, белок и маленьких жуков, во владениях единорога, кажется, обрели покой. Пикси, спрайты, сатиры, дриады и другие обычно переменчивые феи, которые живут под сенью его леса, верно служат единорогу. Под защитой единорога существа ощущают себя в безопасности от угроз подкрадывающейся цивилизации и распространяющегося зла и коварства.\n
Единороги постоянно обходят свои владения, двигаясь осторожно, чтобы не потревожить других обитателей. Чужак может лишь краем глаза заметить это движение, чтобы, обернувшись, не увидеть ничего кроме диких лесов.\n
**Священный рог. Рог единорога фокусирует его мощь, являясь частичкой божественной магии, заключённой в спиральной кости. Волшебные палочки из такого рога создают мощную магию, а удары рога единорога обладают божественной силой. Волшебники могут использовать истолчённый рог единорога для создания мощных зелий, чернил для свитков и использовать его в качестве компонента для сверхъестественных ритуалов. Но любое существо, которое примет участие, хотя бы и самое малое, в убийстве единорога, весьма вероятно подвергнется божественной каре.\n
**Благословенные скакуны.** Когда тьма и зло угрожают захватить мир смертных, боги иногда считают уместным свести единорога с достойным наездником-героем. Паладин верхом на единороге является знаком прямого божественного вмешательства в дела мира смертных. Это священный союз, созданный, чтобы рубить головы демонам и изгонять дьяволов обратно в Девять Преисподних.\n
В опасные времена, когда тьма подступает всё ближе, единорог остаётся со своим героем, а его рог сияет ярко, отгоняя ночь. Но если избранник богов отступает от своей благодати и отворачивается от дела добра, единорог покидает его, и никогда более не возвращается.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_CELESTIAL,
    ],
    aligmentId: ALIGMENT_LG,
    source: 'MM:154',
    armor: 12,
    hp: {
      cubeCount: 9,
      cubeType: 10,
      cubeBonus: 18,
    },
    speed: {
      [SPEED_WALK]: 50,
    },
    params: {
      [PARAM_STR]: 18,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 15,
      [PARAM_INT]: 11,
      [PARAM_WIT]: 17,
      [PARAM_CHA]: 16,
    },
    immunityList: [
      [DAMAGE_POISON],
    ],
    immunityConditionList: [
      [CONDITION_POISONED],
      [CONDITION_CHARMED],
      [CONDITION_PARALYZED],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 13,
      },
    ],
    languageList: [
      LANG_CELESTIAL,
      LANG_SYLVAN,
      LANG_ELVEN,
      {
        id: LANG_TELEPATHY,
        range: 60,
      },
    ],
    cr: CR_5,
    featureList: [
      {
        name: 'Атака в броске',
        description: `Если единорог переместится как минимум на 20 футов по прямой к цели, а затем в том же ходу попадёт по ней атакой рогом, цель получает от атаки дополнительный колющий урон 9 (2к8). Если цель — существо, она должна преуспеть в спасброске Силы со Сл 15, иначе будет сбита с ног.`,
      },
      {
        name: 'Сопротивление магии',
        description: `Единорог совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
      {
        name: 'Магическое оружие',
        description: `Атаки оружием единорога являются магическими.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Единорог совершает две атаки: одну копытами, и одну рогом.`,
      },
      {
        name: 'Копыта',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Рог',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 1,
            cubeType: 8,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Целебное касание',
        description: `Единорог касается другого существа своим рогом. Цель магическим образом восстанавливает 11 (2к8+2) хитов. Кроме того, это касание лечит все болезни и нейтрализует все яды, действующие на цель.`,
        limit: {
          count: 3,
          period: 'день',
        },
      },
      {
        name: 'Телепортация',
        description: `Единорог магическим образом телепортирует себя и до трёх согласных существ, которых он видит в пределах 5 футов от себя, вместе со всем несомым и носимым ими снаряжением, в место, известное единорогу, находящееся в пределах 1 мили.`,
        limit: {
          count: 1,
          period: 'день',
        },
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Копыта',
        description: `Единорог совершает одну атаку копытами.`,
        cost: 2,
      },
      {
        name: 'Мерцающий щит',
        description: `Единорог создаёт мерцающее магическое поле вокруг себя или другого существа, видимого в пределах 60 футов. Цель получает до конца следующего хода единорога бонус +2 к КД.`,
        cost: 2,
      },
      {
        name: 'Самолечение',
        description: `Единорог магическим образом восстанавливает 11 (2к8 + 2) хитов.`,
        cost: 3,
      },
    ],
  },
  {
    name: 'Жаболюд',
    nameEn: 'Bullywug',
    id: CREATURE_BULLYWUG,
    description: `Жизнь жаболюда это опасность, грубость и влага. Эти земноводные гуманоиды должны постоянно находиться во влажных местах, устраивая себе жилища в дождливых лесах и сырых пещерах. Всегда голодные и невероятно злые, жаболюды при возможности берут своего противника числом, но отступают при серьёзной опасности в поисках более лёгкой добычи.\n
Кожа жаболюдов обычно зелёная или серая, иногда с жёлтыми пятнами, что позволяет им сливаться с окружающей средой. Они носят грубые доспехи и простое оружие, и к тому же они могут сильно укусить врага, который подошёл достаточно близко.\n
**Грязные аристократы.** Жаболюды считают себя правителями болот. Они следуют своего рода этикету, когда имеют дело с чужаками и друг с другом, исходя из капризов и фантазий своего лидера — самозваного владыки грязи. Жаболюды представляются звучными титулами, совершают сложные поклоны и унижаются перед владыками, бесконечно борясь за благосклонность правителей.\n
Для продвижения наверх среди сородичей у жаболюдов есть два пути. Можно убить своего соперника, хотя нужно постараться, чтобы сохранить свою причастность в секрете, или можно найти клад или магический предмет и принести его в дар своему господину. Жаболюд, который убивает своего соперника открыто, скорее всего, будет казнён. Поэтому для жаболюдов более характерны набеги на караваны или поселения с целью разжиться драгоценными безделушками, чтобы произвести впечатление на повелителя и завоевать его благосклонность. Безусловно, высококачественные товары, попавшие к жаболюдам, теряют свой вид. После того как подарок потерял блеск, лорд жаболюдов обычно требует, чтобы его подданные принесли ему ещё сокровищ в качестве дани.\n
**Буйная дипломатия.** Жаболюды ничего не ценят больше чем возможность править теми, кто проник на их территории. Их воины не просто пытаются убить злоумышленников, они пытаются пленить их.\n
Пленников доставляют к королю или королеве — необычайно большого размера жаболюду — и там они должны молить о пощаде. Взятки, сокровища и лесть помогут обмануть правителя жаболюдов, и пленнику позволят идти дальше, но сперва «гостя» попытаются впечатлить сокровищами и величием царства. Страдающие глубоким комплексом неполноценности владыки жаболюдов воображают себя королями и королевами, но отчаянно нуждаются в проявлении страха и уважения пришельцев извне.\n
**Амфибии союзники.** Жаболюды говорят на языке, похожем на кваканье лягушек, что позволяет им общаться на больших расстояниях. Новости о злоумышленниках или других событиях на болоте распространяются в течение нескольких минут с помощью это шумной системы связи.\n
Простые слова на этом языке понятны лягушкам и жабам. Жаболюды используют эту возможность, чтобы установить прочные связи с гигантскими лягушками, которых они используют как охранников и охотников. Большие особи иногда используются как ездовые животные. Способность лягушек заглатывать существ обеспечивает жаболюдам-охотникам лёгкий способ доставки добычи в деревню.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_HUMANOID,
      CREATURE_TYPE_BULLYWUG,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:155',
    armor: {
      ac: 15,
      type: 'шкурный доспех, щит',
    },
    hp: {
      cubeCount: 2,
      cubeType: 8,
      cubeBonus: 2,
    },
    speed: {
      [SPEED_WALK]: 20,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 12,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 13,
      [PARAM_INT]: 7,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 7,
    },
    skillCollection: {
      [SKILL_STEALTH]: 3,
    },
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    languageList: [
      LANG_BULLYWUG,
    ],
    cr: CR_1_4,
    featureList: [
      {
        name: 'Амфибия',
        description: `Жаболюд может дышать и воздухом и под водой.`,
      },
      {
        name: 'Общение с лягушками и жабами',
        description: `Жаболюд может обмениваться простыми понятиями с лягушками и жабами, когда говорит на языке Жаболюдов.`,
      },
      {
        name: 'Болотный камуфляж',
        description: `Жаболюд совершает с преимуществом проверки Ловкости (Скрытность), когда пытается спрятаться на болотистой местности.`,
      },
      {
        name: 'Прыжок с места',
        description: `Жаболюд совершает прыжки в длину на расстояние до 20 футов и прыжки в высоту на расстояние до 10 футов, хоть с разбегом, хоть без него.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Жаболюд совершает две рукопашные атаки: одну укусом, и одну копьём.`,
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 3,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 1,
            cubeType: 4,
            cubeBonus: 1,
          },
        },
      },
      {
        name: 'Копьё',
        attack: {
          type: ACTION_MELEE_OR_RANGE_WEAPON_ATTACK,
          bonus: 3,
          range: {
            melee: 5,
            range: {
              normal: 20,
              max: 60,
            },
          },
          target: 1,
          hit: [
            [
              {
                type: DAMAGE_PIERCING,
                cubeCount: 1,
                cubeType: 6,
                cubeBonus: 1,
              },
              {
                type: DAMAGE_PIERCING,
                cubeCount: 1,
                cubeType: 8,
                cubeBonus: 1,
                comment: `, если используется двумя руками для совершения рукопашной атаки`,
              },
            ],
          ],
        },
      },
    ],
  },
  {
    name: 'Игольчатая зараза',
    nameEn: 'Needle blight',
    id: CREATURE_NEEDLE_BLIGHT,
    description: `В тени леса игольчатая зараза издалека может быть принята за сгорбившегося гуманоида, передвигающегося шаркающей походкой. Вблизи же эти существа выглядят как ужасные растения, чьи иглы растут по всему телу. Игольчатый сорняк выбрасывает эти игры в стороны или запускает их как стрелы, которые пробивают доспех и плоть.\n
Когда игольчатая зараза обнаруживает угрозу, она выбрасывает пыльцу, которая с ветром передвигается к другим сородичам по всему лесу. Предупреждённые о местонахождении своих врагов, игольчатые заразы сходятся со всех сторон, чтобы омыть свои корни кровью. `,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_PLANT,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:157',
    armor: {
      ac: 12,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 2,
      cubeType: 8,
      cubeBonus: 2,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 12,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 13,
      [PARAM_INT]: 4,
      [PARAM_WIT]: 8,
      [PARAM_CHA]: 3,
    },
    conditionImmunityList: [
      [CONDITION_DEAFENED],
      [CONDITION_BLINDED],
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
        comment: 'слепа за пределами этого радиуса',
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 9,
      },
    ],
    languageList: [
      {
        id: LANG_COMMON,
        doNotSpeak: true,
      },
    ],
    cr: CR_1_4,
    actionList: [
      {
        name: 'Когти',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 3,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 4,
            cubeBonus: 1,
          },
        },
      },
      {
        name: 'Иглы',
        attack: {
          type: ACTION_RANGE_WEAPON_ATTACK,
          bonus: 3,
          range: {
            normal: 30,
            max: 60,
          },
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 1,
          },
        },
      },
    ],
    isFemale: true,
  },
  {
    name: 'Ветвистая зараза',
    nameEn: 'Twig blight',
    id: CREATURE_TWIG_BLIGHT,
    description: `Когда добычи вокруг недостаточно, ветвистая зараза пускает в почву корни. В такие моменты они ничем не отличаться от обычного сухого кустарника. Когда же они высвобождают корни из земли для передвижения, ветки переплетаются друг с другом, формируя человекоподобное тело с головой и конечностями.\n
Ветвистая зараза ищет поляны и колодцы, прорастая там, и устраивая засады на потенциальных жертв, желающих отдохнуть или утолить жажду. Сбиваясь в группы, зараза сливается с естественной растительностью или грудами мусора или хвороста. Ветвистая зараза очень суха, и потому особенно восприимчива к огню.`,
    sizeType: SIZE_SMALL,
    creatureTypeIdList: [
      CREATURE_TYPE_PLANT,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:157',
    armor: {
      ac: 13,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 1,
      cubeType: 6,
      cubeBonus: 1,
    },
    speed: {
      [SPEED_WALK]: 20,
    },
    params: {
      [PARAM_STR]: 6,
      [PARAM_DEX]: 13,
      [PARAM_CON]: 12,
      [PARAM_INT]: 4,
      [PARAM_WIT]: 8,
      [PARAM_CHA]: 3,
    },
    skillCollection: {
      [SKILL_STEALTH]: 3,
    },
    vulnerabilityList: [
      [DAMAGE_FIRE],
    ],
    conditionImmunityList: [
      [CONDITION_DEAFENED],
      [CONDITION_BLINDED],
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
        comment: 'слепа за пределами этого радиуса',
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 9,
      },
    ],
    languageList: [
      {
        id: LANG_COMMON,
        doNotSpeak: true,
      },
    ],
    cr: CR_1_8,
    featureList: [
      {
        name: 'Обманчивая внешность',
        description: `Пока зараза остаётся без движения, она неотличима от засохшего кустарника.`,
      },
    ],
    actionList: [
      {
        name: 'Когти',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 3,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 4,
            cubeBonus: 1,
          },
        },
      },
    ],
    isFemale: true,
  },
  {
    name: 'Вьющаяся зараза',
    nameEn: 'Vine blight',
    id: CREATURE_VINE_BLIGHT,
    description: `Прикидываясь массой ползучих лиан, вьющаяся зараза скрывается в зарослях, ожидая приближающуюся добычу. Шевеля растения вокруг себя, эта зараза путает и сбивает с толку своих врагов, прежде чем атаковать.\n
Это единственная зараза, способная говорить. Благодаря связи со злым духом древа Галтиаса, которому он служит, зараза говорит надломленным голосом своего мёртвого господина, дразня своих жертв или ведя переговоры с более сильным противником. `,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_PLANT,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:157',
    armor: {
      ac: 12,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 4,
      cubeType: 8,
      cubeBonus: 8,
    },
    speed: {
      [SPEED_WALK]: 10,
    },
    params: {
      [PARAM_STR]: 15,
      [PARAM_DEX]: 8,
      [PARAM_CON]: 14,
      [PARAM_INT]: 5,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 3,
    },
    skillCollection: {
      [SKILL_STEALTH]: 1,
    },
    conditionImmunityList: [
      [CONDITION_DEAFENED],
      [CONDITION_BLINDED],
    ],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 60,
        comment: 'слепа за пределами этого радиуса',
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    languageList: [
      LANG_COMMON,
    ],
    cr: CR_1_2,
    featureList: [
      {
        name: 'Обманчивая внешность',
        description: `Пока зараза остаётся без движения, она неотличима от клубка лиан.`,
      },
    ],
    actionList: [
      {
        name: 'Сжимание',
        description: `Если размер цели не больше Большого, она становится схваченной (Сл высвобождения 12). Пока цель схвачена, она опутана, и зараза не может сжимать другую цель.`,
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 4,
          range: 10,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 2,
          },
        },
      },
      {
        name: 'Опутывающие растения',
        description: `Цепкие корни и плети вырастают в 15-футовом радиусе вокруг заразы, засыхая через 1 минуту. В течение этого времени эта область является труднопроходимой местностью для существ, не являющихся растениями. Кроме того, все существа на выбор заразы, находящиеся в этой местности, когда растения только появляются, должны преуспеть в спасброске Силы со Сл 12, иначе станут опутанными. Любое существо может действием совершить проверку Силы со Сл 12, освобождая себя или другое опутанное существо при успехе.`,
        restore: {
          from: 5,
          to: 6,
        },
      },
    ],
    isFemale: true,
  },
  {
    name: 'Злобоглаз',
    nameAlt: 'Бехолдер',
    nameEn: 'Beholder',
    id: CREATURE_BEHOLDER,
    description: `Одного взгляда на злобоглаза достаточно, чтобы понять всю его отвратительную и чужеродную природу. Эти агрессивные, ненавидящие всех и жадные аберрации считают всех остальных существ низшими, и либо играют ими, либо уничтожают их.\n
Шаровидное тело злобоглаза все время левитирует, его большой выпуклый глаз расположен над широкой пастью, полной острых зубов, глаза поменьше располагаться на стебельках, создавая эффект короны. Они все время изгибаются и крутятся, держа противников в поле зрения. Когда злобоглаз спит, он закрывает свой центральный глаз, но оставляет мелкие глаза открытыми, готовыми послать ему сигнал опасности.\n
**Ксенофобы изоляционисты.** Враги повсюду, по крайне мере, в это верит каждый злобоглаз. Они убеждены, что другие существа, мелкие, грубые и мерзкие, завидуют их великолепию и магическим силам. Злобоглазы всегда подозревают других в составлении заговоров против них, даже когда вокруг никого нет.\n
Презрение, которое злобоглазы испытывают по отношению к другим существам, не исключает презрения к себе подобным. Каждый злобоглаз считает, что его форма идеальная, а любое отклонение от неё — это недостаток расовой чистоты. Злобоглазы сильно отличаются друг от друга, поэтому конфликт между ними неизбежен. Некоторые злобоглазы защищены перекрывающимися хитиновыми пластинами. У других шкуры гладкие. У кого-то стебельки с глазами извиваются как щупальца, у других они похожи на глаза раков. Даже незначительные различия в окрасе шкуры могут сделать из двух злобоглазов врагов на всю жизнь.\n
**Око-тиран.** Некоторые злобоглазы превращают свои ксенофобские наклонности в настоящий деспотизм. Вместо жизни в изоляции, они порабощают других существ, основывая и контролируя обширные империи. Такие злобоглазы иногда захватывают себе области внутри города или под ним, командуя целыми агентурными сетями.\n
**Отчуждённые логова.** Из-за отказа делить территорию с другими, большинство злобоглазов удаляться в холодные холмы, заброшенные руины и глубокие пещеры. Своё логово злобоглаз обычно вырезает лучом расщепления из своего глаза, соединяя вертикальными проходами камеры, расположенные друг над другом. Такое расположение позволяет злобоглазу спокойно перемещаться, одновременно затрудняя перемещения проникших в логово врагов. Если вдруг злоумышленники проникнут в логово, высокие потолки позволят злобоглазу левитировать наверху, пока его враги находятся на полу.\n
Комнаты в логове злобоглаза в полной мере отражают высокомерие этого существа. Они украшена трофеями, полученными в битвах, в том числе и окаменевшими искателями приключений, застывшими в последний момент с испуганными лицами, частичками других злобоглазов, и магическими вещами, полученными от могущественных врагов. Злобоглазы сами оценивают стоимость своих вещей, и по собственной воле редко расстанутся с сокровищами. `,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_ABERRATION,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:160',
    armor: {
      ac: 18,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 19,
      cubeType: 10,
      cubeBonus: 76,
    },
    speed: {
      [SPEED_WALK]: 0,
      [SPEED_FLY]: {
        value: 20,
        comment: 'парит',
      },
    },
    params: {
      [PARAM_STR]: 10,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 18,
      [PARAM_INT]: 17,
      [PARAM_WIT]: 15,
      [PARAM_CHA]: 17,
    },
    saveThrowCollection: {
      [PARAM_INT]: 8,
      [PARAM_WIT]: 7,
      [PARAM_CHA]: 8,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 12,
    },
    conditionImmunityList: [
      [CONDITION_PRONE],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 22,
      },
    ],
    languageList: [
      LANG_DEEP_SPEECH,
      LANG_UNDERCOMMON,
    ],
    cr: CR_13,
    featureList: [
      {
        name: 'Конус антимагии',
        description: `Центральный глаз злобоглаза создаёт 150-футовым конусом зону антимагии, как заклинание _Преграда магии_ (antimagic field). В начале каждого своего хода злобоглаз решает, в какую сторону направлен конус, и будет ли он активен. Эта зона работает и против лучей из глаз самого злобоглаза.`,
      },
    ],
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 4,
            cubeType: 6,
          },
        },
      },
      {
        name: 'Лучи из глаз',
        description: `Злобоглаз испускает три магических луча из глаз, выбранных случайным образом (перебрасывая повторяющиеся результаты), выбирая от одной до трёх целей, видимых в пределах 120 футов:\n
1. _Очаровывающий луч._ Целевое существо должно преуспеть в спасброске Мудрости со Сл 16, иначе станет очарованным злобоглазом на 1 час, или пока злобоглаз не причинит ему вред.\n
2. _Парализующий луч._ Целевое существо должно преуспеть в спасброске Телосложения со Сл 16, иначе станет парализованным на 1 минуту. Цель может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.\n
3. _Луч страха._ Целевое существо должно преуспеть в спасброске Мудрости со Сл 16, иначе станет испуганным на 1 минуту. Цель может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.\n
4. _Замедляющий луч._ Целевое существо должно преуспеть в спасброске Ловкости со Сл 16. При провале скорость цели на 1 минуту уменьшается вдвое. Кроме того, существо не может совершать реакции, и может в свой ход совершать либо действие, либо бонусное действие, но не то и другое. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.\n
5. _Луч бессилия._ Целевое существо должно совершить спасбросок Телосложения со Сл 16, получая урон некротической энергией 36 (8к8) при провале, или половину этого урона при успехе.\n
6. _Телекинетический луч._
    * Если цель — существо, она должна преуспеть в спасброске Силы со Сл 16, иначе злобоглаз переместит её на расстояние до 30 футов в любом направлении. Цель опутана телекинетической хваткой луча до начала следующего хода злобоглаза, либо пока злобоглаз не станет недееспособным.\n
    * Если цель — предмет, весящий не больше 300 фунтов, никем не несомый и не носимый, он перемещается в любом направлении на расстояние до 30 футов. Злобоглаз может этим лучом совершать аккуратные действия, например, манипулировать простым инструментом, открывать дверь или контейнеры.\n
7. _Усыпляющий луч._ Целевое существо должно преуспеть в спасброске Мудрости со Сл 16, иначе уснёт и в течение 1 минуты будет лишено сознания. Цель просыпается, если получает урон или другое существо действием разбудит его. Этот луч не оказывает никакого эффекта на конструктов и нежить.\n
8. _Луч окаменения._ Целевое существо должно совершить спасбросок Ловкости со Сл 16. При провале существо начинает превращаться в камень и становится опутанным. В конце своего следующего хода оно должно повторить этот спасбросок. При успехе эффект оканчивается. При провале существо становится окаменевшим, пока не будет использовано заклинание _Высшее восстановление_ (Greater restoration) или подобная магия.\n
9. _Луч расщепления._
    * Если цель — существо, она должна преуспеть в спасброске Ловкости со Сл 16, иначе получит урон силовым полем 45 (10к8). Если этот урон снижает хиты существа до 0, его тело становится кучкой серой пыли.
    * Если цель — немагический предмет или творение магической силы с размером не больше Большого, она расщепляется без спасброска.
    * Если цель — немагический предмет или творение магической силы с размером Огромный или больше, этот луч расщепляет объём куба с длиной ребра 10 футов.\n
10. _Луч смерти._ Целевое существо должно преуспеть в спасброске Ловкости со Сл 16, иначе получит урон некротической энергией 55 (10к10). Цель умирает, если луч уменьшает её хиты до 0.`,
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Луч из глаз',
        description: `Злобоглаз использует один случайным образом выбранный луч из глаз.`,
      },
    ],
  },
  {
    name: 'Тиран смерти',
    nameEn: 'Death tyrant',
    id: CREATURE_DEATH_TYRANT,
    description: `Иногда разум спящего злобоглаза забредает дальше обычного безумия, воображая себе реальность, в которой он существует после смерти. Когда такие сны завладевают злобоглазом, он может трансформироваться, скинув плоть, и став тираном смерти. Он хитёр и управляет той же магией, которой владел при жизни, но теперь он подпитывается силой нежити. Тиран смерти выглядит как массивный голый череп с точечкой красного света, сверкающей в пустой глазнице. Его глаза на отростках сгнили, и десять призрачных глаз теперь парят над ним, свирепо смотря во всех направлениях.\n
**Смертоносный деспот.** Как и при существовании в виде злобоглазов, тираны смерти распространяют свою власть на других существ. Кроме того, способность злобоглаза отменять магию взглядом центрального глаза, сменяется на более зловещую силу тирана смерти, который теперь может превращать бывших рабов или врагов в нежить.\n
Зомби, созданные тираном смерти, используют и выбрасываются им по мере необходимости. Они охраняют вход в логово тирана смерти или его сокровищницу. Они служат приманкой в ловушках, а в бою выступают в роли расходного материала. Зомби отвлекают сильных врагов и дают время тирану смерти занять положение и подготовиться к уничтожению врага.\n
**Армия мёртвых.** Тиран смерти, ставший нежитью, становиться машиной уничтожения. Движимый жаждой власти и безопасности, он приближается к человеческим поселениями, уничтожая своими лучами все живое, попавшееся ему на пути, а затем создаёт себе армию нежити. Если его не остановить, тиран смерти может за неделю уничтожить население большого города, а затем он устремит свой мёртвый взгляд на дальнейшие завоевания. Любое уничтоженное поселение пополняет армию зомби тирана смерти.\n
**Природа нежити.** Тиран смерти не нуждается в воздухе, еде, питье и сне.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_UNDEAD,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:161',
    armor: {
      ac: 19,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 25,
      cubeType: 10,
      cubeBonus: 50,
    },
    speed: {
      [SPEED_WALK]: 0,
      [SPEED_FLY]: {
        value: 20,
        comment: 'парит',
      },
    },
    params: {
      [PARAM_STR]: 10,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 14,
      [PARAM_INT]: 19,
      [PARAM_WIT]: 15,
      [PARAM_CHA]: 19,
    },
    saveThrowCollection: {
      [PARAM_STR]: 5,
      [PARAM_CON]: 7,
      [PARAM_INT]: 9,
      [PARAM_WIT]: 7,
      [PARAM_CHA]: 9,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 12,
    },
    immunityList: [
      [DAMAGE_POISON],
    ],
    conditionImmunityList: [
      [CONDITION_EXHAUSTION],
      [CONDITION_PETRIFIED],
      [CONDITION_POISONED],
      [CONDITION_CHARMED],
      [CONDITION_PARALYZED],
      [CONDITION_PRONE],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 22,
      },
    ],
    languageList: [
      LANG_DEEP_SPEECH,
      LANG_UNDERCOMMON,
    ],
    cr: CR_14,
    featureList: [
      {
        name: 'Конус отрицательной энергии',
        description: `Центральный глаз тирана смерти испускает 150-футовым конусом невидимую магическую отрицательную энергию. В начале каждого своего хода тиран решает, в какую сторону направлен конус, и будет ли он активен.\n
Все существа в этой области не могут восстанавливать хиты. Все гуманоиды, умирающие в ней, становятся зомби под командованием тирана. Мёртвый гуманоид сохраняет своё место в порядке инициативы и оживает в начале своего следующего хода, при условии, что его тело не уничтожено полностью.`,
      },
    ],
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 4,
            cubeType: 6,
          },
        },
      },
      {
        name: 'Лучи из глаз',
        description: `Тиран смерти испускает три магических луча из глаз, выбранных случайным образом (перебрасывая повторяющиеся результаты), выбирая от одной до трёх целей, видимых в пределах 120 футов:\n
1. _Очаровывающий луч._ Целевое существо должно преуспеть в спасброске Мудрости со Сл 17, иначе станет очарованным тираном на 1 час, или пока злобоглаз не причинит ему вред.\n
2. _Парализующий луч._ Целевое существо должно преуспеть в спасброске Телосложения со Сл 17, иначе станет парализованным на 1 минуту. Цель может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.\n
3. _Луч страха._ Целевое существо должно преуспеть в спасброске Мудрости со Сл 17, иначе станет испуганным на 1 минуту. Цель может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.\n
4. _Замедляющий луч._ Целевое существо должно преуспеть в спасброске Ловкости со Сл 17. При провале скорость цели на 1 минуту уменьшается вдвое. Кроме того, существо не может совершать реакции, и может в свой ход совершать либо действие, либо бонусное действие, но не то и другое. Существо может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.\n
5. _Луч бессилия._ Целевое существо должно совершить спасбросок Телосложения со Сл 17, получая урон некротической энергией 36 (8к8) при провале, или половину этого урона при успехе.\n
6. _Телекинетический луч._
    * Если цель — существо, она должна преуспеть в спасброске Силы со 17 , иначе тиран переместит её на расстояние до 30 футов в любом направлении. Цель опутана телекинетической хваткой луча до начала следующего хода тирана, либо пока тиран не станет недееспособным.
    * Если цель — предмет, весящий не больше 300 фунтов, никем не несомый и не носимый, он перемещается в любом направлении на расстояние до 30 футов. Тиран может этим лучом совершать аккуратные действия, например, манипулировать простым инструментом, открывать дверь или контейнеры.\n
7. _Усыпляющий луч._ Целевое существо должно преуспеть в спасброске Мудрости со Сл 17, иначе уснёт и в течение 1 минуты будет лишено сознания. Цель просыпается, если получает урон или другое существо действием разбудит его. Этот луч не оказывает никакого эффекта на конструктов и нежить.\n
8. _Луч окаменения._ Целевое существо должно совершить спасбросок Ловкости со Сл 17. При провале существо начинает превращаться в камень и становится опутанным. В конце своего следующего хода оно должно повторить этот спасбросок. При успехе эффект оканчивается. При провале существо становится окаменевшим, пока не будет использовано заклинание _Высшее восстановление_ (Greater restoration) или подобная магия.\n
9. _Луч расщепления._
    * Если цель — существо, она должна преуспеть в спасброске Ловкости со Сл 17, иначе получит урон силовым полем 45 (10к8). Если этот урон снижает хиты существа до 0, его тело становится кучкой серой пыли.
    * Если цель — немагический предмет или творение магической силы с размером не больше Большого, она расщепляется без спасброска.
    * Если цель — немагический предмет или творение магической силы с размером Огромный или больше, этот луч расщепляет объём куба с длиной ребра 10 футов.\n
10. _Луч смерти._ Целевое существо должно преуспеть в спасброске Ловкости со Сл 17, иначе получит урон некротической энергией 55 (10к10). Цель умирает, если луч уменьшает её хиты до 0. `,
      },
    ],
    legendaryPoints: 3,
    legendaryActionList: [
      {
        name: 'Луч из глаз',
        description: `Тиран смерти использует один случайным образом выбранный луч из глаз.`,
      },
    ],
  },
  {
    name: 'Наблюдатель',
    nameEn: 'Spectator',
    id: CREATURE_SPECTATOR,
    description: `Наблюдатель это малый злобоглаз, который призван магическим ритуалом из другого плана существования. Компоненты этого ритуала включают четыре глаза на стебельках злобоглаза. Соответственно, у наблюдателя есть четыре глаза, расположенные парами с каждой стороны от широкого глаза в центре его четырёхфутового шаровидного тела.\n
Магический страж. Призванный наблюдатель охраняет местность или сокровища по выбору того, кто его призвал, на протяжении 101 года, не позволяя никому, кроме призывателя, заходить в эту зону или получать доступ к сокровищам, при условии, что призыватель не приказал обратного. Если вещь похищена или уничтожена до срока, призванный наблюдатель исчезает. В любом другом случае он никогда не оставит своего поста.\n
Проблески безумия. Несмотря на то, что наблюдатель умеет говорить, он предпочитает общаться телепатически. Пока он на страже, он вежлив, свободно говорит о своих приказах и своём призывателе. Тем не менее, даже короткого разговора с наблюдателем хватит, чтобы понять причуды его личности, вызванные долгими годами изоляции. Он может придумать воображаемых врагов, говорить о себе в третьем лице или пытаться подражать голосу своего призывателя.\n
Как и любой злобоглаз, наблюдатель считает себя воплощением всего своего рода и люто ненавидит других наблюдателей. Если два наблюдателя сталкиваются, они почти всегда сражаются до смерти.\n
Освобождение от службы. Когда наблюдатель заканчивает свою службу, он предоставляется сам себе. Многие поселяются в тех же местах, которые охраняли, особенно если их призыватели умерли. С потерей цели, безумие наблюдателя, лишь мелькавшее во время его службы, проявляется в полной мере. `,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_ABERRATION,
    ],
    aligmentId: ALIGMENT_LN,
    source: 'MM:162',
    armor: {
      ac: 14,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 6,
      cubeType: 8,
      cubeBonus: 12,
    },
    speed: {
      [SPEED_WALK]: 0,
      [SPEED_FLY]: {
        value: 30,
        comment: 'парит',
      },
    },
    params: {
      [PARAM_STR]: 8,
      [PARAM_DEX]: 14,
      [PARAM_CON]: 14,
      [PARAM_INT]: 13,
      [PARAM_WIT]: 14,
      [PARAM_CHA]: 11,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 6,
    },
    conditionImmunityList: [
      [CONDITION_PRONE],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 16,
      },
    ],
    languageList: [
      LANG_DEEP_SPEECH,
      LANG_UNDERCOMMON,
      {
        id: LANG_TELEPATHY,
        range: 120,
      },
    ],
    cr: CR_3,
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 1,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 1,
            cubeType: 6,
            cubeBonus: -1,
          },
        },
      },
      {
        name: 'Лучи из глаз',
        description: `Наблюдатель испускает один или два магических луча из глаз в одно или два существа, видимых в пределах 90 футов. Каждый луч используется только один раз в ход.\n
1. _Луч замешательства._ Цель должна преуспеть в спасброске Мудрости со Сл 13, иначе она не сможет использовать реакции до конца своего следующего хода. Во время своего хода цель не может перемещаться, и обязана действием совершить рукопашную или дальнобойную атаку по случайному существу в пределах досягаемости. Если цель не может атаковать, она в своём ходу ничего не делает.\n
2. _Парализующий луч._ Цель должна преуспеть в спасброске Телосложения со Сл 13, иначе станет парализованной на 1 минуту. Цель может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.\n
3. _Луч страха._ Цель должна преуспеть в спасброске Мудрости со Сл 13, иначе станет испуганной на 1 минуту. Цель может повторять этот спасбросок в конце каждого своего хода, с помехой, если наблюдатель ей виден, оканчивая эффект на себе при успехе.\n
4. _Ранящий луч._ Цель должна совершить спасбросок Телосложения со Сл 13, получая урон некротической энергией 16 (3к10) при провале, или половину этого урона при успехе. `,
      },
      {
        name: 'Создание еды и воды',
        description: `Наблюдатель магическим образом создаёт достаточное количество пищи и воды, чтобы поддерживать себя в течение 24 часов.`,
      },
    ],
    reactionList: [
      {
        name: 'Отражение заклинаний',
        description: `Если наблюдатель совершает успешный спасбросок от заклинания, или атака заклинанием промахивается по нему, наблюдатель может выбрать другое существо (включая самого заклинателя), видимое в пределах 30 футов. Заклинание нацеливается на выбранное существо вместо наблюдателя. Если заклинание заставляет совершить спасбросок, его совершает выбранное существо. Если у заклинания есть атака, бросок атаки перебрасывается по выбранному существу.`,
      },
    ],
  },
  {
    name: 'Зомби',
    nameEn: 'Zombie',
    id: CREATURE_ZOMBIE,
    description: `Откуда-то из темноты слышатся гортанные стоны. В поле зрения появляется шатающееся тело, подволакивающее распухшую ногу и тянущее изломанные руки. Зомби с лёгкостью убьют всех, кто не успеет избежать их объятий.\n
**Тёмные слуги.** Зловещая некромантия заставляет мёртвых подниматься в виде зомби, выполняющих без страха и сомнения то, что прикажет их создатель. Они двигаются неровной, дёргающейся походкой, одетые в гниющие остатки того, в чём их похоронили, окружая себя зловонным запахом разложения.\n
Большинство зомби создаётся из гуманоидных останков, однако подобием жизни могут быть наполнены плоть и кости любого живого существа. Обычно для этого используется заклинание из арсенала некромантии. Некоторые зомби могут подниматься самостоятельно, когда тёмная магия окутывает какое-либо пространство. Единожды поднятое как зомби, существо не сможет больше вернуться к жизни, разве что кроме как посредством могущественной магии, например, заклинания _Воскрешение_ (Resurrection).\n
У зомби нет никакого осознания бывшего себя, его разум лишён мыслей и фантазии. Без приказа зомби будет просто стоять на месте и гнить, пока рядом не окажется кто-то, кого можно убить. Магия, поднявшая зомби, наполняет его злом, поэтому оставленный без цели, он атакует любое живое существо, столкнувшееся с ним.\n
**Отвратительные тела.** Зомби появляются такими, какими они были при жизни, демонстрируя раны, от которых умерли. Однако магия, которая создаёт этих ужасных существ, требует времени. Мёртвые воины могут подняться на поле боя, выпотрошенные и раздутые, после нескольких дней на солнце. Грязный мертвец, бывший когда-то крестьянином, может прорыть себе путь из земли, покрытый личинками и червями. Зомби может быть вынесен прибоем или восстать посреди болота, разбухший и воняющий, после многих недель, проведённых в воде.\n
**Безмозглые солдаты.** Зомби выбирают самый кратчайший путь к своему врагу, неспособные оценить препятствия на пути, тактику и опасный ландшафт. В стремлении достичь своего врага, находящегося на другом берегу, они могут войти в бурлящую реку, где их размажет о камни. Чтобы убить противника, стоящего внизу, зомби могут выйти в открытое окно. Они бездумно шагнут в полыхающий огонь, колодец с кислотой, и напрямки пойдут через поле, усеянное шипами.\n
Они могут следовать простым приказам и отличать друзей от врагов, но их способности ограничены волочением ног туда, куда укажут, убивая всех врагов на пути. Зомби обычно вооружены тем, что использовали, и не будут поднимать выпавшее оружие и другие инструменты, пока им не прикажут.\n **Натура нежити.** Зомби не нужен воздух, еда, питьё и сон.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_UNDEAD,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:164',
    armor: 8,
    hp: {
      cubeCount: 3,
      cubeType: 8,
      cubeBonus: 9,
    },
    speed: {
      [SPEED_WALK]: 20,
    },
    params: {
      [PARAM_STR]: 13,
      [PARAM_DEX]: 6,
      [PARAM_CON]: 16,
      [PARAM_INT]: 3,
      [PARAM_WIT]: 6,
      [PARAM_CHA]: 5,
    },
    saveThrowCollection: {
      [PARAM_WIT]: 0,
    },
    immunityList: [
      [DAMAGE_POISON],
    ],
    conditionImmunityList: [
      [CONDITION_POISONED],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 8,
      },
    ],
    languageList: [
      {
        id: LANG_ALL_KNOWN_AT_LIFE,
        doNotSpeak: true,
      },
    ],
    cr: CR_1_4,
    featureList: [
      {
        name: 'Стойкость нежити',
        description: `Если урон опускает хиты зомби до 0, он совершает спасбросок Телосложения со Сл 5 + полученный урон, если только это не был урон излучением или урон от критического попадания. При успехе хиты зомби опускаются до 1.`,
      },
    ],
    actionList: [
      {
        name: 'Размашистый удар',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 3,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 1,
            cubeType: 6,
            cubeBonus: 1,
          },
        },
      },
    ],
  },
  {
    name: 'Огр-зомби',
    nameEn: 'Ogre zombie',
    id: CREATURE_OGRE_ZOMBIE,
    description: `Откуда-то из темноты слышатся гортанные стоны. В поле зрения появляется шатающееся тело, подволакивающее распухшую ногу и тянущее изломанные руки. Зомби с лёгкостью убьют всех, кто не успеет избежать их объятий.\n
**Тёмные слуги.** Зловещая некромантия заставляет мёртвых подниматься в виде зомби, выполняющих без страха и сомнения то, что прикажет их создатель. Они двигаются неровной, дёргающейся походкой, одетые в гниющие остатки того, в чём их похоронили, окружая себя зловонным запахом разложения.\n
Большинство зомби создаётся из гуманоидных останков, однако подобием жизни могут быть наполнены плоть и кости любого живого существа. Обычно для этого используется заклинание из арсенала некромантии. Некоторые зомби могут подниматься самостоятельно, когда тёмная магия окутывает какое-либо пространство. Единожды поднятое как зомби, существо не сможет больше вернуться к жизни, разве что кроме как посредством могущественной магии, например, заклинания _Воскрешение_ (Resurrection).\n
У зомби нет никакого осознания бывшего себя, его разум лишён мыслей и фантазии. Без приказа зомби будет просто стоять на месте и гнить, пока рядом не окажется кто-то, кого можно убить. Магия, поднявшая зомби, наполняет его злом, поэтому оставленный без цели, он атакует любое живое существо, столкнувшееся с ним.\n
**Отвратительные тела.** Зомби появляются такими, какими они были при жизни, демонстрируя раны, от которых умерли. Однако магия, которая создаёт этих ужасных существ, требует времени. Мёртвые воины могут подняться на поле боя, выпотрошенные и раздутые, после нескольких дней на солнце. Грязный мертвец, бывший когда-то крестьянином, может прорыть себе путь из земли, покрытый личинками и червями. Зомби может быть вынесен прибоем или восстать посреди болота, разбухший и воняющий, после многих недель, проведённых в воде.\n
**Безмозглые солдаты.** Зомби выбирают самый кратчайший путь к своему врагу, неспособные оценить препятствия на пути, тактику и опасный ландшафт. В стремлении достичь своего врага, находящегося на другом берегу, они могут войти в бурлящую реку, где их размажет о камни. Чтобы убить противника, стоящего внизу, зомби могут выйти в открытое окно. Они бездумно шагнут в полыхающий огонь, колодец с кислотой, и напрямки пойдут через поле, усеянное шипами.\n
Они могут следовать простым приказам и отличать друзей от врагов, но их способности ограничены волочением ног туда, куда укажут, убивая всех врагов на пути. Зомби обычно вооружены тем, что использовали, и не будут поднимать выпавшее оружие и другие инструменты, пока им не прикажут.\n **Натура нежити.** Зомби не нужен воздух, еда, питьё и сон.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_UNDEAD,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:164',
    armor: 8,
    hp: {
      cubeCount: 9,
      cubeType: 10,
      cubeBonus: 36,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 19,
      [PARAM_DEX]: 6,
      [PARAM_CON]: 18,
      [PARAM_INT]: 3,
      [PARAM_WIT]: 6,
      [PARAM_CHA]: 5,
    },
    saveThrowCollection: {
      [PARAM_WIT]: 0,
    },
    immunityList: [
      [DAMAGE_POISON],
    ],
    conditionImmunityList: [
      [CONDITION_POISONED],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 8,
      },
    ],
    languageList: [
      {
        id: [LANG_GIANT, LANG_COMMON],
        doNotSpeak: true,
      },
    ],
    cr: CR_2,
    featureList: [
      {
        name: 'Стойкость нежити',
        description: `Если урон опускает хиты зомби до 0, он совершает спасбросок Телосложения со Сл 5 + полученный урон, если только это не был урон излучением или урон от критического попадания. При успехе хиты зомби опускаются до 1.`,
      },
    ],
    actionList: [
      {
        name: 'Моргенштерн',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_BLUDGEONING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 4,
          },
        },
      },
    ],
  },
  {
    name: 'Злобоглаз-зомби',
    nameAlt: 'Бехолдер-зомби',
    nameEn: 'Beholder zombie',
    id: CREATURE_BEHOLDER_ZOMBIE,
    description: `Откуда-то из темноты слышатся гортанные стоны. В поле зрения появляется шатающееся тело, подволакивающее распухшую ногу и тянущее изломанные руки. Зомби с лёгкостью убьют всех, кто не успеет избежать их объятий.\n
**Тёмные слуги.** Зловещая некромантия заставляет мёртвых подниматься в виде зомби, выполняющих без страха и сомнения то, что прикажет их создатель. Они двигаются неровной, дёргающейся походкой, одетые в гниющие остатки того, в чём их похоронили, окружая себя зловонным запахом разложения.\n
Большинство зомби создаётся из гуманоидных останков, однако подобием жизни могут быть наполнены плоть и кости любого живого существа. Обычно для этого используется заклинание из арсенала некромантии. Некоторые зомби могут подниматься самостоятельно, когда тёмная магия окутывает какое-либо пространство. Единожды поднятое как зомби, существо не сможет больше вернуться к жизни, разве что кроме как посредством могущественной магии, например, заклинания _Воскрешение_ (Resurrection).\n
У зомби нет никакого осознания бывшего себя, его разум лишён мыслей и фантазии. Без приказа зомби будет просто стоять на месте и гнить, пока рядом не окажется кто-то, кого можно убить. Магия, поднявшая зомби, наполняет его злом, поэтому оставленный без цели, он атакует любое живое существо, столкнувшееся с ним.\n
**Отвратительные тела.** Зомби появляются такими, какими они были при жизни, демонстрируя раны, от которых умерли. Однако магия, которая создаёт этих ужасных существ, требует времени. Мёртвые воины могут подняться на поле боя, выпотрошенные и раздутые, после нескольких дней на солнце. Грязный мертвец, бывший когда-то крестьянином, может прорыть себе путь из земли, покрытый личинками и червями. Зомби может быть вынесен прибоем или восстать посреди болота, разбухший и воняющий, после многих недель, проведённых в воде.\n
**Безмозглые солдаты.** Зомби выбирают самый кратчайший путь к своему врагу, неспособные оценить препятствия на пути, тактику и опасный ландшафт. В стремлении достичь своего врага, находящегося на другом берегу, они могут войти в бурлящую реку, где их размажет о камни. Чтобы убить противника, стоящего внизу, зомби могут выйти в открытое окно. Они бездумно шагнут в полыхающий огонь, колодец с кислотой, и напрямки пойдут через поле, усеянное шипами.\n
Они могут следовать простым приказам и отличать друзей от врагов, но их способности ограничены волочением ног туда, куда укажут, убивая всех врагов на пути. Зомби обычно вооружены тем, что использовали, и не будут поднимать выпавшее оружие и другие инструменты, пока им не прикажут.\n **Натура нежити.** Зомби не нужен воздух, еда, питьё и сон.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_UNDEAD,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:164',
    armor: {
      ac: 15,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 11,
      cubeType: 10,
      cubeBonus: 33,
    },
    speed: {
      [SPEED_WALK]: 0,
      [SPEED_FLY]: {
        value: 20,
        comment: 'парит',
      },
    },
    params: {
      [PARAM_STR]: 10,
      [PARAM_DEX]: 8,
      [PARAM_CON]: 16,
      [PARAM_INT]: 3,
      [PARAM_WIT]: 8,
      [PARAM_CHA]: 5,
    },
    saveThrowCollection: {
      [PARAM_WIT]: 2,
    },
    immunityList: [
      [DAMAGE_POISON],
    ],
    conditionImmunityList: [
      [CONDITION_POISONED],
      [CONDITION_PRONE],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 9,
      },
    ],
    languageList: [
      {
        id: [LANG_DEEP_SPEECH, LANG_UNDERCOMMON],
        doNotSpeak: true,
      },
    ],
    cr: CR_5,
    featureList: [
      {
        name: 'Стойкость нежити',
        description: `Если урон опускает хиты зомби до 0, он совершает спасбросок Телосложения со Сл 5 + полученный урон, если только это не был урон излучением или урон от критического попадания. При успехе хиты зомби опускаются до 1.`,
      },
    ],
    actionList: [
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 3,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 4,
            cubeType: 6,
          },
        },
      },
      {
        name: 'Луч из глаз',
        description: `Зомби использует случайным образом выбранный магический луч из глаз, выбирая цель, видимую в пределах 60 футов.\n
1. _Парализующий луч._ Целевое существо должно преуспеть в спасброске Телосложения со Сл 14, иначе станет парализованным на 1 минуту.\n 
    Цель может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.\n
2. _Луч страха._ Целевое существо должно преуспеть в спасброске Мудрости со Сл 14, иначе станет испуганным на 1 минуту. Цель может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.\n
3. _Луч бессилия._ Целевое существо должно совершить спасбросок Телосложения со Сл 14, получая урон некротической энергией 36 (8к8) при провале, или половину этого урона при успехе.\n
4. _Луч расщепления._ 
    * Если цель — существо, оно должно преуспеть в спасброске Ловкости со Сл 14, иначе получит урон силовым полем 45 (10к8). Если этот урон снижает хиты существа до 0, его тело становится кучкой серой пыли.
    * Если цель — немагический предмет или творение магической силы с размером не больше Большого, она расщепляется без спасброска.
    * Если цель — немагический предмет или творение магической силы с размером Огромный или больше, этот луч расщепляет объём куба с длиной ребра 10 футов.`,
      },
    ],
  },
  {
    name: 'Зорн',
    nameEn: 'Xorn',
    id: CREATURE_XORN,
    description: `Странные существа со Стихийного Плана Земли, зорны вынюхивают драгоценные камни и металлы, после чего пробираются через землю и скалы, чтоб поглотить эти сокровища. На Материальном Плане зорну приходится много перемещаться по Подземью, чтоб прокормить себя, поэтому, если в их рационе не хватает ценных минералов, они становятся агрессивными к шахтёрам и искателям сокровищ.\n
На неестественное происхождение зорнов намекают их необычайно тяжёлое тело и огромный мощный рот, расположенный на вершине головы. Три его длинные руки заканчиваются острыми когтями, а его три больших глаза с каменными веками смотрят во всех направлениях.\n
**Стихийные путешественники.** Обладающие силой стихийной земли зорны скользят сквозь камень и грязь так же легко, как рыба плавает в воде. При движении они не перемещают землю или камни, а сливаются с ней и проходят, не оставляя ни туннелей, ни дыр, ни намёка на своё присутствие.\n
Зорны предпочитают не покидать свой родной план, где они с лёгкостью могут поедать запасы драгоценных камней и металлов. Когда зорн попадает на Материальный План, будь то случайно или из любопытства, он в равной мере ищет пропитание и путь домой.\n
**Воры и попрошайки.** Зорны блуждают в недрах земли в поисках драгоценных металлов и камней. Из- за неспособности поглощать органическую материю, они игнорируют прочих существ. Однако умение зорна унюхать металлы и камни часто привлекает его внимание к искателям приключений, имеющим при себе монеты и драгоценные камни. Так как зорны не злые, они выпрашивают или торгуются, предлагая информацию, полученную ими в путешествии, в обмен на сокровища. При отказе зорны переходят к угрозам и запугиванию. Голодающие или разозлённые они прибегают к силе.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_ELEMENTAL,
    ],
    aligmentId: ALIGMENT_N,
    source: 'MM:165',
    armor: {
      ac: 19,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 7,
      cubeType: 8,
      cubeBonus: 42,
    },
    speed: {
      [SPEED_WALK]: 20,
      [SPEED_DIG]: 20,
    },
    params: {
      [PARAM_STR]: 17,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 22,
      [PARAM_INT]: 11,
      [PARAM_WIT]: 10,
      [PARAM_CHA]: 11,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 6,
      [SKILL_STEALTH]: 3,
    },
    resistanceList: [
      [DAMAGE_NONMAGIC_NONADAMANTINE_WEAPON],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_VIBRATION_SENSE,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 16,
      },
    ],
    languageList: [
      LANG_TERRAN,
    ],
    cr: CR_5,
    featureList: [
      {
        name: 'Скольжение сквозь землю',
        description: `Зорн может перемещаться, копая, сквозь немагические и необработанные землю и камень. При этом зорн не беспокоит материал, через который перемещается.`,
      },
      {
        name: 'Каменный камуфляж',
        description: `Зорн совершает с преимуществом проверки Ловкости (Скрытность), когда пытается спрятаться на каменистой местности.`,
      },
      {
        name: 'Нюх на сокровища',
        description: `Зорн может определять по запаху местонахождение драгоценных металлов и камней, таких как монеты и огранённые драгоценные камни, в пределах 60 футов от себя.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Зорн совершает три атаки когтём и одну атаку укусом.`,
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 1,
            cubeType: 6,
            cubeBonus: 3,
          },
        },
      },
      {
        name: 'Укус',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_PIERCING,
            cubeCount: 3,
            cubeType: 6,
            cubeBonus: 6,
          },
        },
      },
    ],
  },
  {
    name: 'Йети',
    nameEn: 'Yeti',
    id: CREATURE_YETI,
    description: `Несомые ветром с далёких гор вопли йети порождают страх в сердцах немногочисленных пастухов и шахтёров, обитающих среди вершин. Эти громадные существа рыщут среди горных пиков в непрестанной охоте за пищей. Их снежно-белый мех позволяет им как призракам бродить на фоне снежных ландшафтов. Холодные как лёд, обезьяньи глаза йети могут заморозить добычу на месте.\n
**Заядлые охотники.** Коренные жители гор стараются путешествовать вооружёнными группами, зная, что йети способны учуять запахи на расстоянии многих миль. Стоит йети учуять добычу, как они, завывая от охотничьего азарта, несутся к ней по льду и камню. Даже в метель запах добычи привлекает йети сквозь холод и снег.\n
Йети охотятся в одиночку или небольшими семейными стаями. Когда существо убегает от йети или вовлекает его в сражение, могут прийти другие йети, учуявшие аромат крови. Йети борются друг с другом за территорию и за останки таких сражений на ней, и убитых в этой борьбе, также пожирают, сопровождая пиршество довольными воплями.\n
**Ужасающие ревуны.** Перед лавиной, снежной бурей или смертельным морозом завывания йети летят на ледяном ветру вниз по склонам гор. Некоторые горные обитатели верят в то, что в воплях йети звучат голоса их близких, погибших в лавинах и вьюгах, суля своим плачем недобрые предзнаменования. Более прагматичные люди считают, что вопли йети это напоминание о том, что, несмотря на все достижения цивилизации, они могут стать добычей сил дикой природы.\n
**Зверские буяны.** Когда горные стада изобилуют скотом, йети предпочитают держаться подальше от людских областей. Но ведомые голодом, они волнами накатываются на людские поселения; ломая ворота и стены частокола, которые отпугивали их когда-то, они поедают всех, кто обитал внутри них.\n
Коварные горцы иногда используют йети как невольное оружие. Военачальник может приказать подбросить зарезанных коз или овец в лагерь врага, чтобы тем самым спровоцировать нападение йети, которое создаст хаос и серьёзно проредит ряды неприятеля перед предстоящей битвой. Вожди горных кланов в желании расширить свою территорию устраивают большие облавы, лишая йети источников добычи и провоцируя их на нападения на человеческие поселения, которые потом легко можно будет захватить. `,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:166',
    armor: {
      ac: 12,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 6,
      cubeType: 10,
      cubeBonus: 18,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_CLIMB]: 40,
    },
    params: {
      [PARAM_STR]: 18,
      [PARAM_DEX]: 13,
      [PARAM_CON]: 16,
      [PARAM_INT]: 8,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 7,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 3,
      [SKILL_STEALTH]: 3,
    },
    immunityList: [
      [DAMAGE_COLD],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 13,
      },
    ],
    languageList: [
      LANG_YETI,
    ],
    cr: CR_3,
    featureList: [
      {
        name: 'Страх огня',
        description: `Если йети получает урон огнём, он до конца своего следующего хода совершает с помехой броски атаки и проверки характеристик.`,
      },
      {
        name: 'Тонкий нюх',
        description: `Йети совершает с преимуществом проверки Мудрости (Внимательность), полагающиеся на обоняние.`,
      },
      {
        name: 'Снежный камуфляж',
        description: `Йети совершает с преимуществом проверки Ловкости (Скрытность), когда пытается спрятаться на снежной местности.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Йети может использовать Леденящий взгляд и совершает две атаки когтём.`,
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_SLASHING,
              cubeCount: 1,
              cubeType: 6,
              cubeBonus: 4,
            },
            {
              type: DAMAGE_COLD,
              cubeCount: 1,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Леденящий взгляд',
        description: `Йети нацеливается на одно существо, которое видит в пределах 30 футов от себя. Если цель видит йети, она должна преуспеть в спасброске Телосложения со Сл 13 от этой магии, иначе получит урон холодом 10 (3к6) и станет парализованной на 1 минуту, если только не обладает иммунитетом к холоду. Цель может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок цели был успешным, или эффект на ней закончился, цель получает иммунитет к Леденящему взгляду всех йети (но не отвратительных йети) на 1 час. `,
      },
    ],
  },
  {
    name: 'Отвратительный йети',
    nameEn: 'Abominable yeti',
    id: CREATURE_ABOMINABLE_YETI,
    description: `Отвратительный йети крупнее обычного йети, и в стоячем виде втрое выше человека. Как правило, они живут и охотятся в одиночку, хотя пара отвратительных йети может прожить вместе достаточно долго, чтобы вырастить потомство. Эти огромные йети территориальные и дикие, они нападают на любых теплокровных существ, с которыми они сталкиваются, и пожирают их, а потом разбрасывают их кости по льду и снегу. `,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:167',
    armor: {
      ac: 15,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 11,
      cubeType: 12,
      cubeBonus: 66,
    },
    speed: {
      [SPEED_WALK]: 40,
      [SPEED_CLIMB]: 40,
    },
    params: {
      [PARAM_STR]: 24,
      [PARAM_DEX]: 10,
      [PARAM_CON]: 22,
      [PARAM_INT]: 9,
      [PARAM_WIT]: 13,
      [PARAM_CHA]: 9,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 5,
      [SKILL_STEALTH]: 4,
    },
    immunityList: [
      [DAMAGE_COLD],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 15,
      },
    ],
    languageList: [
      LANG_YETI,
    ],
    cr: CR_9,
    featureList: [
      {
        name: 'Страх огня',
        description: `Если йети получает урон огнём, он до конца своего следующего хода совершает с помехой броски атаки и проверки характеристик.`,
      },
      {
        name: 'Тонкий нюх',
        description: `Йети совершает с преимуществом проверки Мудрости (Внимательность), полагающиеся на обоняние.`,
      },
      {
        name: 'Снежный камуфляж',
        description: `Йети совершает с преимуществом проверки Ловкости (Скрытность), когда пытается спрятаться на снежной местности.`,
      },
    ],
    actionList: [
      {
        name: 'Мультиатака',
        description: `Йети может использовать Леденящий взгляд и совершает две атаки когтём.`,
      },
      {
        name: 'Коготь',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 11,
          range: 5,
          target: 1,
          hit: [
            {
              type: DAMAGE_SLASHING,
              cubeCount: 2,
              cubeType: 6,
              cubeBonus: 7,
            },
            {
              type: DAMAGE_COLD,
              cubeCount: 2,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Леденящий взгляд',
        description: `Йети нацеливается на одно существо, которое видит в пределах 30 футов от себя. Если цель видит йети, она должна преуспеть в спасброске Телосложения со Сл 18 от этой магии, иначе получит урон холодом 21 (6к6) и станет парализованной на 1 минуту, если только не обладает иммунитетом к холоду. Цель может повторять этот спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Если спасбросок цели был успешным, или эффект на ней закончился, цель получает иммунитет к Леденящему взгляду этого йети на 1 час.`,
      },
      {
        name: 'Холодное дыхание',
        description: `Йети выдыхает холодный воздух 30-футовым конусом. Все существа в этой области должны совершить спасбросок Телосложения со Сл 18, получая урон холодом 45 (10к8) при провале, или половину этого урона при успехе.`,
        restore: {
          from: 6,
          to: 6,
        },
      },
    ],
  },
  {
    name: 'Камбион',
    nameEn: 'Cambion',
    id: CREATURE_CAMBION,
    description: `Камбионы являются отпрысками исчадий (обычно суккубов или инкубов) и гуманоидов (обычно людей). Камбионы наследуют черты обоих родителей, однако рога, кожистые крылья и жилистые хвосты явно ука- зывают на их чужеродное происхождение.\n
**Рождённые быть плохими.** Взрослея, камбионы развратом и пороками повергают в ужас даже самых преданных смертных родителей. Даже в юности камбионы позиционируют себя как владыки смертных. Они могут организовать бунты в городах, собирая банды гуманоидов и младших дьяволов себе в услужение.\n
**Пешки сильных.** Камбионы вынуждены служить исчадьям, из восхищения и страха, но втайне ожидая, что однажды займут их место. Камбионы, выросшие в Девяти Преисподних, служат солдатами, посланниками и личными слугами дьяволов. В Бездне камбионы занимают своё место исходя из своей силы и воли.\n
**Порождения Граз’зта.** Демонический повелитель Граз’зт любит сношаться с гуманоидами, которые заключили сделку с исчадиями, и он породил множество камбионов, которые помогают ему сеять хаос по всей мультивселенной. Отпрыски Граз’зта отличаются угольно-чёрной кожей, раздвоенными копытами, шестипалыми руками и невероятной красотой. `,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
    ],
    aligmentId: ALIGMENT_ANY_EVIL,
    source: 'MM:168',
    armor: {
      ac: 19,
      type: 'чешуйчатый доспех',
    },
    hp: {
      cubeCount: 11,
      cubeType: 8,
      cubeBonus: 33,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_FLY]: 60,
    },
    params: {
      [PARAM_STR]: 18,
      [PARAM_DEX]: 18,
      [PARAM_CON]: 16,
      [PARAM_INT]: 14,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 16,
    },
    saveThrowCollection: {
      [PARAM_STR]: 7,
      [PARAM_CON]: 6,
      [PARAM_INT]: 5,
      [PARAM_CHA]: 6,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 4,
      [SKILL_INTIMIDATION]: 6,
      [SKILL_DECEPTION]: 6,
      [SKILL_STEALTH]: 7,
    },
    resistanceList: [
      [DAMAGE_FIRE],
      [DAMAGE_COLD],
      [DAMAGE_ELECTRICITY],
      [DAMAGE_POISON],
      [DAMAGE_NONMAGIC_WEAPON],
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    languageList: [
      LANG_ABYSSAL,
      LANG_INFERNAL,
      LANG_COMMON,
    ],
    cr: CR_5,
    featureList: [
      {
        name: 'Благословение исчадия',
        description: `КД камбиона включает бонус Харизмы.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 14,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            SPELL_DETECT_MAGIC,
            SPELL_COMMAND,
            SPELL_ALTER_SELF,
          ],
        },
        {
          limit: {
            count: 1,
            period: 'день',
          },
          list: [
            {
              id: SPELL_PLANE_SHIFT,
              comment: 'только на себя',
            },
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Мультиатака',
        description: `Камбион совершает две рукопашные атаки или два раза использует Огненный луч.`,
      },
      {
        name: 'Копьё',
        attack: {
          type: ACTION_MELEE_OR_RANGE_WEAPON_ATTACK,
          bonus: 7,
          range: {
            melee: 5,
            range: {
              normal: 20,
              max: 60,
            },
          },
          target: 1,
          hit: [
            [
              {
                type: DAMAGE_PIERCING,
                cubeCount: 1,
                cubeType: 6,
                cubeBonus: 4,
              },
              {
                type: DAMAGE_PIERCING,
                cubeCount: 1,
                cubeType: 8,
                cubeBonus: 4,
                comment: ', если используется двумя руками для совершения рукопашной атаки,',
              },
            ],
            {
              type: DAMAGE_FIRE,
              cubeCount: 1,
              cubeType: 6,
            },
          ],
        },
      },
      {
        name: 'Огненный луч',
        attack: {
          type: ACTION_RANGE_SPELL_ATTACK,
          bonus: 7,
          range: 120,
          target: 1,
          hit: {
            type: DAMAGE_FIRE,
            cubeCount: 3,
            cubeType: 6,
          },
        },
      },
      {
        name: 'Чары исчадия',
        description: `Один гуманоид, видимый камбионом в пределах 30 футов, должен преуспеть в спасброске Мудрости со Сл 14, иначе станет магическим образом очарованным на 1 день. Очарованная цель подчиняется устным командам камбиона. Если цель терпит вред от камбиона или другого существа, или получает самоубийственную команду от камбиона, цель может повторить спасбросок, оканчивая эффект на себе при успехе. Если спасбросок цели был успешным, или эффект на ней закончился, она получает иммунитет к Чарам исчадия этого камбиона на следующие 24 часа.`,
      },
    ],
  },
  {
    name: 'Зелёная карга',
    nameEn: 'Green hag',
    id: CREATURE_GREEN_HAG,
    description: `Гнусные и злобные зелёные карги живут в умирающих лесах, на безлюдных болотах и туманных топях, устраивая логова в пещерах. Зелёные ведьмы любят манипулировать людьми, скрывая намерения за слоями лжи. Они заманивают жертв, имитируя голоса и прося о помощи, отваживая нежеланных гостей криками диких зверей.\n
**Одержимость печалью. Зелёные карги пируют на печали и трагедиях других. Они ликуют, когда надежда оборачивается отчаяньем не только для одного существа, но и для целых народов.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_FEY,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:170',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 11,
      cubeType: 8,
      cubeBonus: 33,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 18,
      [PARAM_DEX]: 12,
      [PARAM_CON]: 16,
      [PARAM_INT]: 13,
      [PARAM_WIT]: 14,
      [PARAM_CHA]: 14,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 4,
      [SKILL_ARCANA]: 3,
      [SKILL_DECEPTION]: 4,
      [SKILL_STEALTH]: 3,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 14,
      },
    ],
    languageList: [
      LANG_DRACONIC,
      LANG_COMMON,
      LANG_SYLVAN,
    ],
    cr: CR_3,
    featureList: [
      {
        name: 'Амфибия',
        description: `Карга может дышать и воздухом и под водой.`,
      },
      {
        name: 'Подражание',
        description: `Карга может подражать звукам животных и голосам гуманоидов. Существо, слышащее эти звуки, может понять, что это подражание, если совершит успешную проверку Мудрости (Проницательность) со Сл 14.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 12,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            SPELL_VICIOUS_MOCKERY,
            SPELL_MINOR_ILLUSION,
            SPELL_DANCING_LIGHTS,
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Когти',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 6,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Иллюзорная внешность',
        description: `Карга покрывает себя и всё, что несёт и носит, магической иллюзией, заставляющей её выглядеть как другое существо примерно её размера и с гуманоидным телом. Иллюзия оканчивается, если карга умирает, и карга может окончить её бонусным действием.\n Изменения, внесённые эти эффектом, не проходят физическую проверку. Например, кожа карги может выглядеть гладкой, но тот, кто её коснётся, почувствует морщины. Если же полагаться только на зрение, то существо должно действием совершить проверку Интеллекта (Анализ) со Сл 20 и преуспеть, чтобы понять, что была использована иллюзия.`,
      },
      {
        name: 'Невидимая ходьба',
        description: `Карга магическим образом становится невидимой, пока не атакует, или не наложит заклинание, либо пока не прервёт концентрацию (как при концентрации на заклинании). Будучи невидимой, она не оставляет физических следов, так что выследить её можно только с помощью магии. Всё снаряжение, которое она несёт и носит, становится невидимым вместе с ней.`,
      },
    ],
    isFemale: true,
  },
  {
    name: 'Зелёная карга (в шабаше)',
    nameEn: 'Green hag (coven)',
    id: CREATURE_GREEN_HAG_COVEN,
    parentId: CREATURE_GREEN_HAG,
    cr: CR_5,
    ...coven,
  },
  {
    name: 'Морская карга',
    nameEn: 'Sea hag',
    id: CREATURE_SEA_HAG,
    description: `Морские карги живут в мрачных и грязных подводных логовах, в окружении водянников и других водных чудовищ.\n
Красота приводит морских карг в ярость. Когда морская карга сталкивается с чем-то красивым, она может просто атаковать, или испортить это. Если чтото прекрасное даёт надежду, морская ведьма хочет вселить отчаяние. Если что-то внушает мужество, морская ведьма хочет вселить страх.\n
**Уродство внутри и снаружи.** Морские карги являются самыми уродливыми из всех карг. Склизкая чешуя покрывает их мертвенно-бледную кожу. Волосы морской карги похожи на водоросли и покрывают её тощее тело, а её стеклянные глаза выглядят безжизненными, как у куклы. Также морская карга может скрывать свой истинный облик под покровом иллюзии, но из-за проклятья она всё равно кажется уродливой. В лучшем случае она может притвориться нищенкой. `,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_FEY,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:171',
    armor: {
      ac: 14,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 7,
      cubeType: 8,
      cubeBonus: 21,
    },
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_SWIM]: 40,
    },
    params: {
      [PARAM_STR]: 16,
      [PARAM_DEX]: 13,
      [PARAM_CON]: 16,
      [PARAM_INT]: 12,
      [PARAM_WIT]: 12,
      [PARAM_CHA]: 13,
    },
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 60,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 11,
      },
    ],
    languageList: [
      LANG_AQUAN,
      LANG_GIANT,
      LANG_COMMON,
    ],
    cr: CR_2,
    featureList: [
      {
        name: 'Амфибия',
        description: `Карга может дышать и воздухом и под водой.`,
      },
      {
        name: 'Кошмарная внешность',
        description: `Все гуманоиды, начинающие ход в пределах 30 футов от карги, и видящие её истинный облик, должны совершать спасбросок Мудрости со Сл 11. При провале существо становится испуганным на 1 минуту. Существо может повторять этот спасбросок в конце каждого своего хода, с помехой, если карга находится в пределах линии обзора, оканчивая эффект на себе при успехе. Если спасбросок существа был успешным, или эффект на нём окончился, оно получает иммунитет к Кошмарной внешности этой карги на следующие 24 часа.\n
Если цель не захвачена врасплох, и обнаружение истинного облика карги не было неожиданным, цель может отвести взгляд, чтобы не совершать спасбросок. В этом случае отводящее взгляд существо до начала своего следующего хода совершает с помехой броски атаки по карге.`,
      },
    ],
    actionList: [
      {
        name: 'Когти',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 5,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 6,
            cubeBonus: 3,
          },
        },
      },
      {
        name: 'Смертельный взгляд',
        description: `Карга нацеливается на одно испуганное существо, которое видит в пределах 30 футов от себя. Если цель видит каргу, она должна преуспеть в спасброске Мудрости со Сл 11 от этой магии, иначе её хиты опускаются до 0.`,
      },
      {
        name: 'Иллюзорная внешность',
        description: `Карга покрывает себя и всё, что несёт и носит, магической иллюзией, заставляющей её выглядеть как другое уродливое существо примерно её размера и с гуманоидным телом. Иллюзия оканчивается, если карга умирает, и карга может окончить её бонусным действием.\n
Изменения, внесённые эти эффектом, не проходят физическую проверку. Например, карга может скрыть когти на пальцах, но тот, кто коснётся её руки, почувствует когти. Если же полагаться только на зрение, то существо должно действием совершить проверку Интеллекта (Анализ) со Сл 16 и преуспеть, чтобы понять, что была использована иллюзия. `,
      },
    ],
    isFemale: true,
  },
  {
    name: 'Ночная карга',
    nameEn: 'Night hag',
    id: CREATURE_NIGHT_HAG,
    description: `Хитрые и разрушительные ночные карги любят поворачивать помыслы во зло: любовь в одержимость, доброту в ненависть, преданность в пренебрежение, щедрость в эгоизм. Ночные карги испытывают извращённую радость, развращая смертных.\n
Ночные карги когда-то были существами Страны Фей, но за испорченность их давным-давно изгнали в Гадес, где они превратились в исчадий. Ночные карги уже давно распространились по всем Нижним Планам.\n
Торговцы душами. Пока человек спит, ночная карга может, находясь на Эфирном Плане, вторгнуться в его сны. Существо с истинным зрением увидит призрачный облик карги, сидящей на жертве. Карга наполняет разум жертвы сомнениями и страхами, надеясь подвигнуть её на злые поступки. Она не окончит свои ночные бдения, пока жертва не издохнет во сне. Если карге удалось побудить жертву совершить тёмное деяние, она ловит её искалеченную душу в _сумку душ_ и уносит её в Гадес.\n
**Предметы ночной карги.** Ночная карга носит с собой два крайне редких магических предмета, созданных для себя. Если они потеряются, она пойдёт на многое, чтобы вернуть их, потому что создание новых требует много времени и сил.\n
1. **Каменное сердце.** Этот блестящий чёрный камень позволяет карге становиться бестелесной. Прикосновение к нему также лечит все болезни. Создание занимает 30 дней.
2. **Сумка душ.** Если существо умирает от воздействия Ночных кошмаров, карга ловит его душу в чёрный мешок, сшитый из плоти. _Сумка_ вмещает только одну злую душу, и только та карга, что создала его, может ей пользоваться. Создание _сумки душ_ занимает 7 дней и требует приношения в жертву гуманоида (из плоти которого и делается сумка).`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_FIEND,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:172',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeCount: 15,
      cubeType: 8,
      cubeBonus: 45,
    },
    speed: {
      [SPEED_WALK]: 30,
    },
    params: {
      [PARAM_STR]: 18,
      [PARAM_DEX]: 15,
      [PARAM_CON]: 16,
      [PARAM_INT]: 16,
      [PARAM_WIT]: 14,
      [PARAM_CHA]: 16,
    },
    skillCollection: {
      [SKILL_PERCEPTION]: 6,
      [SKILL_DECEPTION]: 7,
      [SKILL_INSIGHT]: 6,
      [SKILL_STEALTH]: 6,
    },
    resistanceList: [
      DAMAGE_FIRE,
      DAMAGE_COLD,
      DAMAGE_NONMAGIC_NONSILVER_WEAPON,
    ],
    immunityList: [
      CONDITION_CHARMED,
    ],
    senseList: [
      {
        id: SENSE_DARK_VISION,
        value: 120,
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 16,
      },
    ],
    languageList: [
      LANG_ABYSSAL,
      LANG_INFERNAL,
      LANG_COMMON,
      LANG_PRIMORDIAL,
    ],
    cr: CR_5,
    featureList: [
      {
        name: 'Сопротивление магии',
        description: `Карга совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
    ],
    spellCast: {
      baseStat: PARAM_CHA,
      saveThrowDc: 14,
      spellAttackBonus: 6,
      componentExclude: CAST_MATERIAL,
      spellIdByCountList: [
        {
          limit: Infinity,
          list: [
            SPELL_MAGIC_MISSILE,
            SPELL_DETECT_MAGIC,
          ],
        },
        {
          limit: {
            count: 2,
            period: 'день',
          },
          list: [
            SPELL_RAY_OF_ENFEEBLEMENT,
            SPELL_SLEEP,
            {
              id: SPELL_PLANE_SHIFT,
              comment: 'только на себя',
            },
          ],
        },
      ],
    },
    actionList: [
      {
        name: 'Когти',
        comment: 'только в форме карги',
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 7,
          range: 5,
          target: 1,
          hit: {
            type: DAMAGE_SLASHING,
            cubeCount: 2,
            cubeType: 8,
            cubeBonus: 4,
          },
        },
      },
      {
        name: 'Смена формы',
        description: `Карга магическим образом превращается в гуманоидную женщину Маленького или Среднего размера, либо же принимает свой истинный облик. Её статистика одинакова во всех обликах. Всё снаряжение, которое она несёт и носит, не превращается. Она принимает истинный облик, когда умирает.`,
      },
      {
        name: 'Эфирность',
        description: `Карга магическим образом переходит на Эфирный План с Материального Плана, или наоборот. Для этого у карги должно быть _каменное сердце_.`,
      },
      {
        name: 'Ночные кошмары',
        description: `Находясь на Эфирном Плане, карга магическим образом касается спящего на Материальном Плане гуманоида. Заклинание _Защита от добра и зла_ (Protection from evil and good), наложенное на цель, предотвращает этот контакт, равно как и _Магический круг_ (Magic circle). Пока контакт поддерживается, цель переживает ужасные видения. Если эти видения длятся как минимум 1 час, цель не получает преимущества от отдыха, и максимум её хитов уменьшается на 5 (1к10). Если этот эффект опускает максимум хитов до 0, цель умирает, и если цель была злой, её душа захватывается сумкой душ. Уменьшение максимума хитов длится до тех пор, пока не будет устранено заклинанием _Высшее восстановление_ (Greater restoration) или подобной магией. `,
        limit: {
          count: 1,
          period: 'день',
        },
      },
    ],
    isFemale: true,
  },
]
