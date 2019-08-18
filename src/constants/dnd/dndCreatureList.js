import prepareForSearch from "@/utils/prepareForSearch";

import SEARCH_PROP_NAME from "@/constants/SEARCH_PROP_NAME";
import {
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
} from "@/constants/dnd/dndCrList"
import {
  SIZE_HUGE,
  SIZE_MEDIUM,
  SIZE_LARGE,
  SIZE_SMALL,
  SIZE_TINY,
} from "@/constants/dnd/dndSizeList"
import {
  CREATURE_TYPE_AARAKOCRA,
  CREATURE_TYPE_ABERRATION,
  CREATURE_TYPE_ANY_RACE,
  CREATURE_TYPE_CELESTIAL,
  CREATURE_TYPE_CONSTRUCT,
  CREATURE_TYPE_DRAGON,
  CREATURE_TYPE_ELEMENTAL,
  CREATURE_TYPE_FIEND,
  CREATURE_TYPE_GIANT,
  CREATURE_TYPE_GITH,
  CREATURE_TYPE_GNOLL,
  CREATURE_TYPE_GNOME,
  CREATURE_TYPE_GOBLINOID,
  CREATURE_TYPE_HUMANOID,
  CREATURE_TYPE_MONSTER,
  CREATURE_TYPE_SHAPESHIFTER,
  CREATURE_TYPE_UNDEAD,
} from "@/constants/dnd/dndCreatureTypeList"
import {
  ALIGMENT_ANY,
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
} from '@/constants/dnd/dndAligmentList'
import {
  SPEED_CLIMB,
  SPEED_DIG,
  SPEED_FLY,
  SPEED_SWIM,
  SPEED_WALK,
} from '@/constants/dnd/dndSpeedList'
import {
  ACTION_MELEE_WEAPON_ATTACK,
  ACTION_MELEE_OR_RANGE_WEAPON_ATTACK,
  ACTION_MELEE_SPELL_ATTACK,
  ACTION_RANGE_WEAPON_ATTACK,
  ACTION_RANGE_SPELL_ATTACK,
} from '@/constants/dnd/dndActionTypeList'
import {
  LANG_AARAKOCRA,
  LANG_ABYSSAL,
  LANG_ALL,
  LANG_ALL_KNOWN_AT_LIFE,
  LANG_ANY_ONE,
  LANG_AQUAN,
  LANG_AURAN,
  LANG_COMMON,
  LANG_DEEP_SPEECH,
  LANG_DRACONIC,
  LANG_ELVEN,
  LANG_GIANT,
  LANG_GITH,
  LANG_GNOLL,
  LANG_GNOMISH,
  LANG_GOBLIN,
  LANG_IGNAN,
  LANG_INFERNAL,
  LANG_SYLVAN,
  LANG_TELEPATHY,
  LANG_TERRAN,
  LANG_UMBER_HULK,
  LANG_UNDERCOMMON
} from '@/constants/dnd/dndLanguageList'
import {
  DAMAGE_ACID,
  DAMAGE_BLUDGEONING,
  DAMAGE_COLD,
  DAMAGE_FIRE,
  DAMAGE_ELECTRICITY,
  DAMAGE_NECROTIC,
  DAMAGE_NONMAGIC_WEAPON,
  DAMAGE_NONMAGIC_NONADAMANTINE_WEAPON,
  DAMAGE_PIERCING,
  DAMAGE_POISON,
  DAMAGE_PSYCHIC,
  DAMAGE_RADIANT,
  DAMAGE_SLASHING,
  DAMAGE_THUNDER,
} from '@/constants/dnd/dndDamageTypeList'
import {
  SENSE_BLIND_VISION,
  SENSE_DARK_VISION,
  SENSE_PASSIVE_PERCEPTION,
  SENSE_TRUE_VISION,
  SENSE_VIBRATION_SENSE,
} from '@/constants/dnd/dndSenseList'
import {
  SKILL_ARCANA,
  SKILL_ATHLETICS,
  SKILL_HISTORY,
  SKILL_INSIGHT,
  SKILL_INVESTIGATION,
  SKILL_MEDICINE,
  SKILL_PERCEPTION,
  SKILL_RELIGION,
  SKILL_STEALTH,
} from '@/constants/dnd/dndSkillList'
import {
  PC_CLASS_PRIEST,
  PC_CLASS_WIZARD,
} from '@/constants/dnd/dndPcClassList'
import {
  PARAM_STR,
  PARAM_DEX,
  PARAM_CON,
  PARAM_INT,
  PARAM_WIT,
  PARAM_CHA,
} from '@/constants/dnd/dndParamList'
import {
  SPELL_ANIMATE_DEAD,
  SPELL_BESTOW_CURSE,
  SPELL_BLADE_BARRIER,
  SPELL_BLESS,
  SPELL_BLIGHT,
  SPELL_BLINDNESS_DEAFNESS,
  SPELL_BLUR,
  SPELL_COLOR_SPRAY,
  SPELL_COMMUNE,
  SPELL_COMPREHEND_LANGUAGES,
  SPELL_CONJURE_ELEMENTAL,
  SPELL_CONTROL_WEATHER,
  SPELL_CREATE_FOOD_AND_WATER,
  SPELL_CREATE_OR_DESTROY_WATER,
  SPELL_CREATION,
  SPELL_CURE_WOUNDS,
  SPELL_DANCING_LIGHTS,
  SPELL_DETECT_EVIL_AND_GOOD,
  SPELL_DETECT_MAGIC,
  SPELL_DETECT_THOUGHTS,
  SPELL_DISGUISE_SELF,
  SPELL_DISPEL_EVIL_AND_GOOD,
  SPELL_DOMINATE_PERSON,
  SPELL_ENLARGE_REDUCE,
  SPELL_FEATHER_FALL,
  SPELL_FLAME_STRIKE,
  SPELL_FLY,
  SPELL_FOG_CLOUD,
  SPELL_GASEOUS_FORM,
  SPELL_GREATER_INVISIBILITY,
  SPELL_GUST_OF_WIND,
  SPELL_HALLUCINATORY_TERRAIN,
  SPELL_INSECT_PLAGUE,
  SPELL_INVISIBILITY,
  SPELL_JUMP,
  SPELL_LEVITATE,
  SPELL_LIGHT,
  SPELL_MAGE_HAND,
  SPELL_MAJOR_IMAGE,
  SPELL_MINOR_ILLUSION,
  SPELL_MIRROR_IMAGE,
  SPELL_MISTY_STEP,
  SPELL_MOVE_EARTH,
  SPELL_NONDETECTION,
  SPELL_PASSWALL,
  SPELL_PHANTASMAL_KILLER,
  SPELL_PLANE_SHIFT,
  SPELL_POLYMORPH,
  SPELL_PRESTIDIGITATION,
  SPELL_PURIFY_FOOD_AND_DRINK,
  SPELL_RAISE_DEAD,
  SPELL_RAY_OF_FROST,
  SPELL_RESSURECTION,
  SPELL_SACRED_FLAME,
  SPELL_SANCTUARY,
  SPELL_SEE_INVISIBILITY,
  SPELL_SHIELD,
  SPELL_SLEEP,
  SPELL_STONE_SHAPE,
  SPELL_SUGGESTION,
  SPELL_TELEKINESIS,
  SPELL_THAUMATURGY,
  SPELL_THUNDERWAVE,
  SPELL_TONGUES,
  SPELL_WALL_OF_FIRE,
  SPELL_WALL_OF_STONE,
  SPELL_WATER_BREATHING,
  SPELL_WATER_WALK,
  SPELL_WIND_WALK,
} from '@/constants/dnd/dndSpellList'
import {
  CAST_MATERIAL,
  CAST_NONE,
  CAST_SOMATIC,
  CAST_VERBAL,
} from '@/constants/dnd/dndCastComponentList'
import {
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
} from '@/constants/dnd/dndConditionList'
import {
  TARGET_CREATURE,
  TARGET_OBJECT,
  TARGET_POINT,
} from '@/constants/dnd/dndTargetList'
import { LANG_ITS_CREATOR } from './dndLanguageList';

const CREATURE_AARAKOCRA = 'aarakocra'
const CREATURE_ABOLETH = 'aboleth'
const CREATURE_ACOLYTE = 'acolyte'
const CREATURE_ANKHEG = 'ankheg'
const CREATURE_BANDIT = 'bandit'
const CREATURE_BANSHEE = 'banshee'
const CREATURE_BASILISK = 'basilisk'
const CREATURE_BEHIR = 'behir'
const CREATURE_CLOUD_GIANT = 'cloud_giant'
const CREATURE_COMMONER = 'commoner'
const CREATURE_CLAY_GOLEM = 'clay_golem'
const CREATURE_DAO = 'dao'
const CREATURE_DEVA = 'deva'
const CREATURE_DJINNI = 'djinni'
const CREATURE_EFREETI = 'efreeti'
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
const CREATURE_GIBBERING_MOUTHER = 'gibbering_mouther'
const CREATURE_GITHZERAI_ZERTH = 'githzerai_zerth'
const CREATURE_GITHZERAI_MONK = 'githzerai_monk'
const CREATURE_GITHYANKI_KNIGHT = 'githyanki_knight'
const CREATURE_GITHYANKI_WARRIOR = 'githyanki_warrior'
const CREATURE_GNOLL = 'gnoll'
const CREATURE_GNOLL_FANG_OF_YEENOGHU = 'gnoll_fang_of_yeenoghu'
const CREATURE_GNOLL_PACK_LORD = 'gnoll_pack_lord'
const CREATURE_GNOME_DEEP = 'gnome_deep'
const CREATURE_GOBLIN = 'goblin'
const CREATURE_GOBLIN_BOSS = 'goblin_boss'
const CREATURE_HARPY = 'harpy'
const CREATURE_HELL_HOUND = 'hell_hound'
const CREATURE_HILL_GIANT = 'hill_giant'
const CREATURE_HOMUNCULUS = 'homunculus'
const CREATURE_HYDRA = 'hydra'
const CREATURE_HIPPOGRIFF = 'hippogriff'
const CREATURE_IRON_GOLEM = 'iron_golem'
const CREATURE_MARID = 'marid'
const CREATURE_MERROW = 'merrow'
const CREATURE_PLANETAR = 'planetar'
const CREATURE_ROPER = 'roper'
const CREATURE_SOLAR = 'solar'
const CREATURE_STONE_GIANT = 'stone_giant'
const CREATURE_STONE_GOLEM = 'stone_golem'
const CREATURE_STORM_GIANT = 'storm_giant'
const CREATURE_UMBER_HULK = 'umber_hulk'
const CREATURE_VAMPIRE = 'vampire'
const CREATURE_VAMPIRE_SPAWN = 'vampire_spawn'
const CREATURE_VAMPIRE_SPELLCASTER = 'vampire_spellcaster'
const CREATURE_VAMPIRE_WARRIOR = 'vampire_warrior'
const CREATURE_WATER_WEIRD = 'water_weird'
const CREATURE_WILL_O_WISP = 'will_o_wisp'
const CREATURE_WYVERN = 'wyvern'

const dndCreatureRawList = [
  {
    name: 'Обыватель',
    nameEn: 'Commoner',
    id: CREATURE_COMMONER,
    description: '**Обыватели** включают в себя крестьян, крепостных, рабов, слуг, пилигримов, торговцев, ремесленников и отшельников.',
    aligmentId: ALIGMENT_ANY,
    source: 'MM:346',
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
**Пираты** это разбойники открытых морей. Они могут быть флибустьерами, заинтересованными лишь в сокровищах и убийствах, или могут быть каперами, которым правитель разрешил нападать на суда вражеской страны с целью грабежа.
    `,
    aligmentId: ALIGMENT_NOT_LAWFUL,
    source: 'MM:346',
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
    source: 'MM:346',
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
    description: `**Ааракокры** населяют Воющий Вихрь, бесконечный шторм могучих ветров и дождей, который окружает царство Аакуа в Стихийном Плане Воздуха. Осуществляя воздушное патрулирование, эти птицеподобные гуманоиды охраняют воздушные границы своего дома от захватчиков из Стихийного Плана Земли, своих заклятых врагов — горгулий.`,
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
    source: 'MM:12',
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
Но аболеты этого никогда не забывали.`,
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
    description: `Чудовищные огнедышащие исчадия, принявшие облик сильных псов, **адские гончие** встречаются на полях Ахерона и на всех Нижних Планах. На Материальном Плане адские гончие чаще всего встречаются в услужении у дьяволов, огненных великанов и других злых существ, которые используют их в качестве сторожевых животных и спутников.`,
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
    description: `**Дэвы** это ангелы, которые выступают в роли божественных посланников или агентов на Материальном Плане, в Царстве Теней или Стране Фей. Они могут принимать форму, которая подходит той области, куда они направляются.`,
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
    source: 'MM:17',
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
    description: `**Планетары** это оружие богов, которым они служат, воплощение мощи своих божеств. Они могут вызвать дождь, чтобы облегчить засуху, или наслать насекомых, чтобы уничтожить урожай. Уши этих небожителей слышат любую ложь, а их сияющие глаза видят любой обман.`,
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
    source: 'MM:18',
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
    description: `**Солар** подобен богу по своей славе и силе. Меч солара самостоятельно летает по полю боя, а одна-единственная стрела из его лука может запросто убить цель. Настолько велика мощь солара, что даже демонические князья содрогаются от его звучных команд.\n
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
    description: `**Анхег** похож на огромное насекомое с множеством лап. Его длинные усики подёргиваются, реагируя на любое движение вокруг. На концах его лап огромные крюки, пригодные как для рытья, так и для того, чтобы хватать добычу. Его мощные челюсти способны перекусить небольшое дерево пополам.`,
    aligmentId: ALIGMENT_NO,
    source: 'MM:20',
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
    description: `Когда опускается ночь, незадачливый путник может услышать отдалённые крики одинокого мертвеца. Это **баньши**, горестный дух, злобное создание, появившееся из духа эльфийки.\n
Баньши выглядит как светящаяся, тонкая форма, очертаниями смутно похожая на своё смертное тело. Лицо окутано всклокоченными волосами, а тело одето в просвечивающие лохмотья, которые колышутся вокруг баньши.`,
    aligmentId: ALIGMENT_CE,
    source: 'MM:21',
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
    description: `Змееподобный **бехир** ползает по полу и лазает по стенам, чтобы схватить свою добычу. Его электрическое дыхание может сжечь большинство существ, а более сильных противников он сжимает, обернувшись вокруг них кольцами, и съедает заживо. Внешне бехир похож на смесь чудовищной многоножки и крокодила. Его чешуйчатая шкура переливается от ультрамарина до тёмно-синего цвета, а на брюхе она голубая.`,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:22',
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
    description: `**Блуждающие огоньки** являются злобными, похожими на дымку, шарами света, которые обитают в уединённых местах и на полях сражений, связанных с мрачной судьбой или тёмной магией, и питаются страхом и отчаянием.`,
    sizeType: SIZE_TINY,
    creatureTypeIdList: [
      CREATURE_TYPE_UNDEAD,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:23',
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
    description: `Из всех ужасов, созданных отвратительным колдовством, **бормочущие ротовики** — одни из самых ужасных и порочных порождений. Это существо состоит из глаз, ртов и сжиженных тел его прежних жертв. Впавшие в безумие из-за разрушения их тел и поглощения ротовиком, эти жертвы бессвязно бормочут, пожирая всё, до чего смогут добраться.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_ABERRATION,
    ],
    aligmentId: ALIGMENT_N,
    source: 'MM:24',
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
    description: `Отвратительные и ужасные **бурые увальни** из глубин земли роются в пещерных комплексах, подземельях или поселениях Подземья в поисках еды. Счастливчики, пережившие нападение бурого увальня, часто помнят слишком мало о произошедшем из-за заглушающего разум взгляда бурого увальня.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:25',
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
    description: `Пробуждённые в бесконечной ночи **вампиры** жаждут жизни, которую они потеряли, и утоляют эту жажду, выпивая кровь живых. Вампиры ненавидят солнечный свет, поскольку его прикосновение жжёт их. Они не отбрасывают ни теней, ни отражений, и всякий вампир, желающий ходить незамеченным среди живых, вынужден держаться в темноте и подальше от отражающих поверхностей.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_UNDEAD,
      CREATURE_TYPE_SHAPESHIFTER,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:28',
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
    source: 'MM:29',
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
    source: 'MM:29',
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
    description: `Большинство жертв вампира становятся **порождениями вампира** — хищными созданиями с вампирским голодом к крови, но находящимися под контролем вампира, который их создал. Если истинный вампир позволит порождению выпить кровь из своего тела, порождение превратится в истинного вампира, не подконтрольного своему хозяину. Немногие вампиры готовы отказаться от этого влияния. Порождение вампира обретает собственную волю, когда его создатель погибает. `,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_UNDEAD,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:29',
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
    description: `Путешественники иногда натыкаются в диких местах на объекты, которые выглядят как куски удивительно реалистичной резьбы по камню. Недостающие куски кажутся откушенными. Бывалые путешественники считают такие реликвии предупреждением о том, что где-то рядом находится **василиск**.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:30',
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
    description: `**Каменные великаны** — затворники, тихие и мирные, пока их не беспокоят. Их гранитно-серая кожа, измождённые черты лица и чёрные, запавшие глаза придают каменным великанам суровое выражение. Они любят уединение, скрывая свои жизни и искусство от мира. `,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_GIANT,
    ],
    aligmentId: ALIGMENT_N,
    source: 'MM:36',
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
    description: `Ледяные великаны — громадные грабители с морозных земель, что лежат за гранью цивилизации — это жестокие, выносливые воины, живущие за счёт добычи с набегов и грабежей. Они уважают лишь грубую силу и боевые навыки, демонстрируя их шрамами и отвратительными трофеями, полученными от врагов.`,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_GIANT,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:36',
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
    description: `**Облачные великаны** живут расточительной жизнью высоко над землёй, нисколько не заботясь об участи других рас кроме как ради развлечения. Они мускулистые, кожа у них светлая, а волосы серебряного или голубого цвета.`,
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
    source: 'MM:37',
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
    description: `Умелые ремесленники и организованные бойцы, **огненные великаны** обитают среди вулканов, потоков лавы и скалистых гор. Это безжалостные милитаристские громилы, чьё мастерство в обработке металлов поистине легендарно.`,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_GIANT,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:37',
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
    description: `**Холмовые великаны** — эгоистичные и недалёкие громилы, охотящиеся ради пищи и совершающие набеги в постоянном поиске еды. Они бездумно бродят по холмам и лесам, поглощая всё, что могут, и заставляя меньших существ кормить их. Лень и тупость давно
бы положила им конец, если бы не огромный размер и сила.`,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_GIANT,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:38',
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
    description: `**Штормовые великаны** это задумчивые провидцы, живущие в местах, далёких от цивилизации смертных. У большинства бледный, серо-фиолетовый цвет кожи и волос, а также блестящие изумрудные глаза. Редко встречаются и штормовые великаны с фиолетовой кожей, тёмно-фиолетовыми или тёмно-синими волосами, а также серебристо-серыми или фиолетовыми глазами. Они доброжелательны и мудры, но если разозлить штормового великана, то судьбы тысяч окажутся во власти его ярости.`,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_TYPE_GIANT,
    ],
    aligmentId: ALIGMENT_CG,
    source: 'MM:38',
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
    description: `Живущие в пещерах по всему Подземью ненасытные **верёвочники** рады всему, что могут поймать и сожрать. Верёвочники едят любых существ, от зверей Подземья до искателей приключений вместе с их снаряжением.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:39',
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
    description: `Путешественники порой видят в небесах тёмную крылатую фигуру **виверны**, несущей добычу. Это родственники великих драконов, и охотятся они в тех же дремучих лесах и пещерах. Их появление вызывает всплески тревоги на границах цивилизации.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_NO,
    source: 'MM:40',
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
    description: `**Водная аномалия** является элементалем-защитником, связанным с определённым местом, заполненным водой, таким как бассейн или фонтан. Её змеевидное тело, невидимое, пока погружено в воду, становится заметным только когда она появляется, чтобы напасть, обвиваясь вокруг любого существа, кроме её призывателя и тех, кому разрешит находиться призыватель. Когда водная аномалия повержена, она становится неживой лужей воды.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_ELEMENTAL,
    ],
    aligmentId: ALIGMENT_N,
    source: 'MM:41',
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
    description: `Водянники часто посещают прибрежные воды, охотясь на рыбаков, мерфолков и любых других съедобных существ, которые встретятся им на пути. Эти дикие чудовища хватают и пожирают неосторожную жертву, утягивая трупы в свои подводные гроты для пропитания.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:42',
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
    description: `**Волшебный дракончик** — дракон размером с кошку с крыльями бабочки. У него острые зубы, а восторг он выражает подёргиванием хвоста. Его игривое настроение исчезает только если на него напасть.`,
    sizeType: SIZE_TINY,
    creatureTypeIdList: [
      CREATURE_TYPE_DRAGON,
    ],
    aligmentId: ALIGMENT_CG,
    source: 'MM:43',
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
    description: `**Галеб дур** — существо, похожее на валун с массивными выступами, которые используются как руки и ноги. Он способен оживлять находящиеся рядом с ним камни, и обычно встречается в горной местности.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_ELEMENTAL,
    ],
    aligmentId: ALIGMENT_N,
    source: 'MM:44',
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
    description: `Находя удовольствие в страданиях и смерти, **гарпии**, обладающие садистскими вкусами, постоянно ищут себе новые жертвы. Их сладкие песни привели к смерти бесчисленное множество искателей приключений, приманивая их гарпиям на съедение.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_TYPE_MONSTER,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:45',
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
    description: `**Дао** — жадные и злобные гении со Стихийного Плана Земли. Они носят ювелирные украшения из драгоценных камней и редких металлов. Во время полёта нижняя часть их тел становится столбом вращающегося песка. Дао не испытывает счастья, если ему не завидуют другие дао.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_ELEMENTAL,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:48',
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
    description: `Гордые, эмоциональные гении со Стихийного Плана Воздуха. **Джинны** — это привлекательные, хорошо сложённые, высокие гуманоиды с синей кожей и тёмными глазами. Они одеваются в невесомые мерцающие шелка, которые не только удобны, но и хорошо подчёркивают их мускулатуру.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_ELEMENTAL,
    ],
    aligmentId: ALIGMENT_CG,
    source: 'MM:49',
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
    description: `**Ифриты** — громадные гении со Стихийного Плана Огня — повелевают пламенем, обладают иммунитетом к огню и способны создавать его по своему желанию. Тонкие шёлковые кафтаны и узорчатые одеяния покрывают их красную, как лава, или чёрную, как уголь, кожу. Ифриты украшают себя сверкающими ожерельями, цепями и кольцами с драгоценными камнями. Во время полёта нижняя часть тела ифрита выглядит как столб дыма и тлеющих углей.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_ELEMENTAL,
    ],
    aligmentId: ALIGMENT_LE,
    source: 'MM:50',
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
    description: `Живущие на Стихийном Плане Воды **мариды** — наиболее удивительные из гениев. Несмотря на то, что все гении обладают великой силой, даже слабейший из маридов считает себя сильнее ветреного джинна, приземлённого дао и дымящегося ифрита.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_TYPE_ELEMENTAL,
    ],
    aligmentId: ALIGMENT_CN,
    source: 'MM:51',
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
    description: `**Гидра** это ужасная рептилия с телом крокодила и несколькими головами на длинных змеиных шеях. Хоть головы и можно отрубить, гидра магическим образом их очень быстро отращивает. У типичного представителя этого вида пять голов.`,
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
  },
  {
    name: 'Гиппогриф',
    nameEn: 'Hippogriff',
    id: CREATURE_HIPPOGRIFF,
    description: `**Гиппогриф** — это существо, тайна происхождения которого затерялась в древности. У него крылья и передние лапы орла, задняя часть лошади, и голова, сочетающая черты обоих животных.`,
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
    description: `Опытных монахов гитцераев, лучше всего воплощающих учения и принципы Зертимона, зовут **зертами**. Эти могущественные и дисциплинированные монахи могут перемещать свои тела с одного плана на другой, используя лишь силу разума.`,
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
    description: `Сосредоточенные философы и строгие аскеты, **гитцераи** следуют жёсткому жизненному укладу. Худощавые и жилистые, они носят одежду без изысков, держа своё мнение при себе и доверяя единицам чужаков. Отвернувшиеся от своих воинственных собратьев гитъянок, гитцераи придерживаются монашеского уклада, проживая на островах порядка, что находятся в бескрайнем море хаоса на плане Лимбо.`,
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
    description: `**Гитъянки** грабят бесчисленные миры с палуб своих астральных кораблей и спин красных драконов. Перья, бисер, драгоценные камни и металлы украшают их доспехи и оружие — легендарные серебряные мечи с которыми они прорубаются с боем через своих врагов. Вырвав свободу у свежевателей разума, гитъянки стали безжалостными завоевателями под руководством ужасной королевы-лича Влаакит.`,
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
    description: `**Гитъянки** грабят бесчисленные миры с палуб своих астральных кораблей и спин красных драконов. Перья, бисер, драгоценные камни и металлы украшают их доспехи и оружие — легендарные серебряные мечи с которыми они прорубаются с боем через своих врагов. Вырвав свободу у свежевателей разума, гитъянки стали безжалостными завоевателями под руководством ужасной королевы-лича Влаакит.`,
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
    description: `Стая гноллов возглавляется **вожаком**, правящим силой и хитростью. Лучшее из награбленного отходит к нему, будь то еда, ценные безделушки или магические предметы. В надеждах получить от Йеногу неуязвимость, он покрывает своё тело пирсингом, нелепыми трофеями и наносит на шерсть демонические печати.`,
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
    description: `Происхождение **гноллов** восходит ко времени, когда демонический повелитель Йеногу проник в Материальный План и устроил в нём буйство. Стаи обычных гиен следовали по его следу, подъедая убитых им жертв. Эти гиены были превращены в первых гноллов, и они продолжали следовать за Йеногу, пока его не изгнали обратно в Бездну. Гноллы же распространились по всему мира, став тяжелейшим напоминанием о демонической силе.`,
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
    description: `Празднование побед у гноллов сопровождается демоническими ритуалами и кровавыми приношениями Йеногу. Иногда демонический повелитель награждает своих последователей, делая одного из них одержимым демоном. Помеченный Йеногу счастливчик становится **«клыком Йеногу»** — избранным Властелина Гноллов. Гиена, пирующая врагом, которого поразил клык, подвергается ужасным трансформациям, становясь взрослым гноллом. Именно так Йеногу сотворил первых гноллов. Клык Йеногу может значительно увеличить популяцию гноллов в зависимости от количества гиен в округе. Единственный способ это предотвратить — убить клыка.`,
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
    description: `**Глубинные гномы**, или свирфнеблины, живут глубоко под поверхностью земли в запутанных подземных проходах и искусственных пещерах. Они выживают благодаря скрытности, уму и упорству. Их серая кожа позволяет сливаться с окружающим камнем. Для своего размера свирфнеблины удивительно сильны и тяжелы. В среднем, взрослый глубинный гном весит от 100 до 120 фунтов, а в высоту достигает 3 футов.`,
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
    description: `Гоблинами правят самые сильные и умные среди них. **Гоблинский босс** может командовать отдельным логовом, тогда как гоблинский король или королева (которые являются не более чем теми же прославленными гоблинскими боссами) управляет сотнями гоблинов, живущих во множестве логовищ, что гарантирует выживание племени. Гоблинские боссы часто меняются, а племена захватываются хобгоблинскими воеводами или вождями медвежатников.`,
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
    description: `**Гоблины** — это маленькие, эгоистичные существа с чёрными сердцами, живущие в пещерах, брошенных рудниках, разграбленных подземельях и прочих неприглядных местах. Слабые по отдельности, гоблины собираются в большие — зачастую несметные — группы. Они жадны до власти и часто злоупотребляют теми полномочиями, которые у них уже есть.`,
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
**Глиняные големы** часто одарены священной целью жрецами. Однако, глина — слабый сосуд для жизненной силы. Если голем повреждён, стихийный дух, привязанный к нему, может вырваться на свободу. Такие големы приходят в ярость, круша всё вокруг себя до тех пор, пока не будут уничтожены или полностью восстановлены.`,
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
    description: `**Железный голем** — сильнейший из големов, массивный высокий великан из тяжёлого металла. Форма железного голема может быть любой, но большинство сделано в виде огромных живых доспехов. Его кулаки могут убить существо одним ударом, а его лязгающая походка сотрясает землю под ногами. Железные големы носят огромные мечи для увеличения досягаемости и могут изрыгать облака смертельного яда.`,
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
    description: `Вырезанные и выдолбленные из камня в виде впечатляющих высоких статуй, **каменные големы** сильно различаются размером и формами. Хотя многие имеют черты гуманоидов, каменные големы могут быть вырезаны в любой форме, которую может представить скульптор. Древние каменные големы, найденные в закрытых гробницах или у ворот затерянных городов, иногда имеют форму гигантских зверей.`,
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
    description: `**Мясной голем** — ужасный набор гуманоидных частей тел, сшитых и скреплённых вместе в мускулистого громилу, наполненного внушительной силой. Его мозг способен к простым рассуждениям, хотя его мысли редко бывают более сложными, чем у малого ребёнка. Слои мышц голема реагируют со скоростью молнии, даруя существу ловкостью и силу. Мощные чары защищают его кожу, отражая заклинания и всё оружие, кроме самого мощного.`,
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
**Гомункул** это конструкт, действующий как продолжение своего создателя с двусторонним обменом мыслей, чувств и языков через мистическую связь. У хозяина может быть только один гомункул одновременно (попытка создать ещё одного всегда проваливается), и когда умирает хозяин, умирает и гомункул.`,
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
              size: {
                max: SIZE_LARGE,
              },
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
]

const dndCreatureRawCollection = dndCreatureRawList.reduce(
  (collection, creature) => ({
    ...collection,
    [creature.id]: creature,
  }),
  {}
)

const dndCreatureList = dndCreatureRawList
  .map(
    creature => {
      const parent = creature.parentId
        ? dndCreatureRawCollection[creature.parentId]
        : {}

      const creatureFilled = {
        ...parent,
        ...(
          creature.actionList && parent.actionList
            ? {
              ...creature,
              actionList: [
                ...parent.actionList,
                ...creature.actionList,
              ]
            }
            : creature
        ),
      }

      if (creature.parentId) {
        dndCreatureRawCollection[creature.id] = creatureFilled
      }

      return creatureFilled
    }
  )
  .sort(
    ({name: A}, {name: B}) => A > B
  )
  .map(
  creature => ({
    ...creature,
    isFemale: Boolean(creature.isFemale),
    [SEARCH_PROP_NAME]: prepareForSearch(
      [
        creature.name,
        creature.nameAlt || '',
        creature.nameEn,
        creature.nameEnAlt || '',
        creature.description || '',
      ]
        .filter(e => e)
        .join('\n')
    ),
  })
)

export default dndCreatureList

export const dndCreatureCollection = dndCreatureList.reduce(
  (collection, creature) => ({
    ...collection,
    [creature.id]: creature,
  }),
  {}
)

export const dndCreatureNameList = dndCreatureList.map(
  ({id, name}) => ({
    id,
    name
  })
)
