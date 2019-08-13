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
  SIZE_TINY,
} from "@/constants/dnd/dndSizeList"
import {
  CREATURE_AARAKOCRA,
  CREATURE_ABERRATION,
  CREATURE_ANY_RACE,
  CREATURE_CELESTIAL,
  CREATURE_FIEND,
  CREATURE_HUMANOID,
  CREATURE_MONSTER,
  CREATURE_UNDEAD,
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
  SPEED_CRAWL,
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
} from '@/constants/dnd/dndActionTypeList'
import {
  LANG_AARAKOCRA,
  LANG_ALL,
  LANG_ALL_KNOWN_AT_LIFE,
  LANG_ANY_ONE,
  LANG_AURAN,
  LANG_COMMON,
  LANG_DEEP_SPEECH,
  LANG_DRACONIC,
  LANG_ELVEN,
  LANG_INFERNAL,
  LANG_TELEPATHY,
} from '@/constants/dnd/dndLanguageList'
import {
  DAMAGE_ACID,
  DAMAGE_BLUDGEONING,
  DAMAGE_COLD,
  DAMAGE_FIRE,
  DAMAGE_ELECTRICITY,
  DAMAGE_NECROTIC,
  DAMAGE_NONMAGIC_WEAPON,
  DAMAGE_PIERCING,
  DAMAGE_POISON,
  DAMAGE_RADIANT,
  DAMAGE_SLASHING,
  DAMAGE_THUNDER,
} from '@/constants/dnd/dndDamageTypeList'
import {
  SENSE_DARK_VISION,
  SENSE_PASSIVE_PERCEPTION,
  SENSE_TRUE_VISION,
  SENSE_VIBRATION_SENSE,
} from '@/constants/dnd/dndSenseList'
import {
  SKILL_HISTORY,
  SKILL_INSIGHT,
  SKILL_MEDICINE,
  SKILL_PERCEPTION,
  SKILL_RELIGION,
  SKILL_STEALTH,
} from '@/constants/dnd/dndSkillList'
import {
  PC_CLASS_PRIEST,
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
  SPELL_BLADE_BARRIER,
  SPELL_BLESS,
  SPELL_COMMUNE,
  SPELL_CONTROL_WEATHER,
  SPELL_CURE_WOUNDS,
  SPELL_DETECT_EVIL_AND_GOOD,
  SPELL_DISPEL_EVIL_AND_GOOD,
  SPELL_FLAME_STRIKE,
  SPELL_INSECT_PLAGUE,
  SPELL_INVISIBILITY,
  SPELL_LIGHT,
  SPELL_RAISE_DEAD,
  SPELL_RESSURECTION,
  SPELL_SACRED_FLAME,
  SPELL_SANCTUARY,
  SPELL_THAUMATURGY,
} from '@/constants/dnd/dndSpellList'
import {
  CAST_MATERIAL,
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

const dndCreatureList = [
  {
    name: 'Обыватель',
    nameEn: 'Commoner',
    description: '**Обыватели** включают в себя крестьян, крепостных, рабов, слуг, пилигримов, торговцев, ремесленников и отшельников.',
    aligmentId: ALIGMENT_ANY,
    source: 'MM:346',
    speed: {
      [SPEED_WALK]: 30,
    },
    hp: {
      cubeType: 8,
      cubeCount: 1,
    },
    armor: 10,
    cr: CR_0,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_HUMANOID,
      CREATURE_ANY_RACE,
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
          damage: {
            type: DAMAGE_BLUDGEONING,
            cubeType: 4,
            cubeCount: 1,
          },
        },
      },
    ],
  },
  {
    name: 'Разбойник',
    nameEn: 'Bandit',
    description: `**Разбойники** рыщут бандами, возглавляемыми головорезами, ветеранами или заклинателями. Не все разбойники злы. Угнетения, засуха, болезни или голод могут подтолкнуть самых честных жителей на путь разбоя.\n
**Пираты** это разбойники открытых морей. Они могут быть флибустьерами, заинтересованными лишь в сокровищах и убийствах, или могут быть каперами, которым правитель разрешил нападать на суда вражеской страны с целью грабежа.
    `,
    aligmentId: ALIGMENT_NOT_LAWFUL,
    source: 'MM:346',
    speed: {
      [SPEED_WALK]: 30,
    },
    hp: {
      cubeType: 8,
      cubeCount: 2,
      cubeBonus: 2,
    },
    armor: {
      ac: 12,
      type: 'кожаный доспех',
    },
    cr: CR_1_8,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_HUMANOID,
      CREATURE_ANY_RACE,
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
          damage: {
            type: DAMAGE_SLASHING,
            cubeType: 6,
            cubeCount: 1,
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
          damage: {
            type: DAMAGE_PIERCING,
            cubeType: 8,
            cubeCount: 1,
            cubeBonus: 1,
          },
        },
      },
    ],
  },
  {
    name: 'Прислужник',
    nameEn: 'Acolyte',
    description: `**Прислужник** это младший представитель духовенства, обычно, помогающий священникам. Он выполняет в храме множество дел и получает от божества незначительные магические способности.`,
    aligmentId: ALIGMENT_ANY,
    source: 'MM:346',
    speed: {
      [SPEED_WALK]: 30,
    },
    hp: {
      cubeType: 8,
      cubeCount: 2,
    },
    armor: 10,
    cr: CR_1_4,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_HUMANOID,
      CREATURE_ANY_RACE,
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
          damage: {
            type: DAMAGE_BLUDGEONING,
            cubeType: 4,
            cubeCount: 1,
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
    description: `**Ааракокры** населяют Воющий Вихрь, бесконечный шторм могучих ветров и дождей, который окружает царство Аакуа в Стихийном Плане Воздуха. Осуществляя воздушное патрулирование, эти птицеподобные гуманоиды охраняют воздушные границы своего дома от захватчиков из Стихийного Плана Земли, своих заклятых врагов — горгулий.
`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_HUMANOID,
      CREATURE_AARAKOCRA,
    ],
    aligmentId: ALIGMENT_NG,
    armor: 12,
    hp: {
      cubeType: 8,
      cubeCount: 3,
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
          damage: {
            type: DAMAGE_SLASHING,
            cubeType: 4,
            cubeCount: 1,
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
          damage: {
            type: DAMAGE_PIERCING,
            cubeType: 6,
            cubeCount: 1,
            cubeBonus: 2,
          },
        },
      },
    ],
  },
  {
    name: 'Аболет',
    nameEn: 'Aboleth',
    description: `До прихода богов **аболеты** скрывались в первичных океанах и подземных озёрах. Они захватили контроль над развивающимися жизненными формами в царстве смертных, превратив их в своих рабов. Их власть уподобила их богам. Затем появились истинные боги, разбили империю аболетов и освободили их рабов.\n
Но аболеты этого никогда не забывали.
`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_ABERRATION,
    ],
    aligmentId: ALIGMENT_LE,
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeType: 10,
      cubeCount: 18,
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
    skillCollection: {
      [SKILL_PERCEPTION]: 10,
      [SKILL_HISTORY]: 12,
    },
    saveThrowCollection: {
      [PARAM_CON]: 6,
      [PARAM_INT]: 8,
      [PARAM_WIT]: 6,
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
          damage: {
            type: DAMAGE_BLUDGEONING,
            cubeType: 6,
            cubeCount: 2,
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
          damage: {
            type: DAMAGE_BLUDGEONING,
            cubeType: 6,
            cubeCount: 3,
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
    description: `Чудовищные огнедышащие исчадия, принявшие облик сильных псов, адские гончие встречаются на полях Ахерона и на всех Нижних Планах. На Материальном Плане адские гончие чаще всего встречаются в услужении у дьяволов, огненных великанов и других злых существ, которые используют их в качестве сторожевых животных и спутников.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_FIEND,
    ],
    aligmentId: ALIGMENT_LE,
    armor: {
      ac: 15,
      type: 'природный доспех',
    },
    hp: {
      cubeType: 8,
      cubeCount: 7,
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
          damage: [
            {
              type: DAMAGE_PIERCING,
              cubeType: 8,
              cubeCount: 1,
              cubeBonus: 3,
            },
            {
              type: DAMAGE_FIRE,
              cubeType: 6,
              cubeCount: 2,
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
    description: `Дэвы это ангелы, которые выступают в роли божественных посланников или агентов на Материальном Плане, в Царстве Теней или Стране Фей. Они могут принимать форму, которая подходит той области, куда они направляются.`,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_CELESTIAL,
    ],
    aligmentId: ALIGMENT_LG,
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeType: 8,
      cubeCount: 16,
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
          damage: [
            {
              type: DAMAGE_BLUDGEONING,
              cubeType: 6,
              cubeCount: 1,
              cubeBonus: 4,
            },
            {
              type: DAMAGE_RADIANT,
              cubeType: 8,
              cubeCount: 4,
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
    description: `Планетары это оружие богов, которым они служат, воплощение мощи своих божеств. Они могут вызвать дождь, чтобы облегчить засуху, или наслать насекомых, чтобы уничтожить урожай. Уши этих небожителей слышат любую ложь, а их сияющие глаза видят любой обман.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_CELESTIAL,
    ],
    aligmentId: ALIGMENT_LG,
    armor: {
      ac: 19,
      type: 'природный доспех',
    },
    hp: {
      cubeType: 10,
      cubeCount: 16,
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
          damage: [
            {
              type: DAMAGE_SLASHING,
              cubeType: 6,
              cubeCount: 4,
              cubeBonus: 7,
            },
            {
              type: DAMAGE_RADIANT,
              cubeType: 8,
              cubeCount: 5,
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
    description: `Солар подобен богу по своей славе и силе. Меч солара самостоятельно летает по полю боя, а одна-единственная стрела из его лука может запросто убить цель. Настолько велика мощь солара, что даже демонические князья содрогаются от его звучных команд.\n
Говорят, что существует всего двадцать четыре солара. Известно, что несколько соларов являются верными помощниками некоторых богов. Остальные отдыхают в состоянии созерцания, ожидая, когда их услуги понадобятся для противостояния огромной угрозе силам добра.`,
    sizeType: SIZE_LARGE,
    creatureTypeIdList: [
      CREATURE_CELESTIAL,
    ],
    aligmentId: ALIGMENT_LG,
    armor: {
      ac: 21,
      type: 'природный доспех',
    },
    hp: {
      cubeType: 10,
      cubeCount: 18,
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
          damage: [
            {
              type: DAMAGE_SLASHING,
              cubeType: 6,
              cubeCount: 4,
              cubeBonus: 7,
            },
            {
              type: DAMAGE_RADIANT,
              cubeType: 8,
              cubeCount: 5,
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
          damage: [
            {
              type: DAMAGE_SLASHING,
              cubeType: 6,
              cubeCount: 4,
              cubeBonus: 7,
            },
            {
              type: DAMAGE_RADIANT,
              cubeType: 8,
              cubeCount: 5,
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
          damage: [
            {
              type: DAMAGE_PIERCING,
              cubeType: 8,
              cubeCount: 2,
              cubeBonus: 6,
            },
            {
              type: DAMAGE_RADIANT,
              cubeType: 8,
              cubeCount: 6,
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
    description: `Анхег похож на огромное насекомое с множеством лап. Его длинные усики подёргиваются, реагируя на любое движение вокруг. На концах его лап огромные крюки, пригодные как для рытья, так и для того, чтобы хватать добычу. Его мощные челюсти способны перекусить небольшое дерево пополам.`,
    aligmentId: ALIGMENT_NO,
    source: 'MM:20',
    speed: {
      [SPEED_WALK]: 30,
      [SPEED_DIG]: 10,
    },
    hp: {
      cubeType: 10,
      cubeCount: 6,
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
      CREATURE_MONSTER,
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
          damage: [
            {
              type: DAMAGE_SLASHING,
              cubeType: 6,
              cubeCount: 2,
              cubeBonus: 3,
            },
            {
              type: DAMAGE_ACID,
              cubeType: 6,
              cubeCount: 1,
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
      cubeType: 10,
      cubeCount: 6,
      cubeBonus: 6,
    },
    armor: 12,
    cr: CR_4,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_UNDEAD,
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
          damage: {
            type: DAMAGE_NECROTIC,
            cubeType: 6,
            cubeCount: 3,
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
  },
  {
    name: 'Бехир',
    nameEn: 'Behir',
    description: `Змееподобный бехир ползает по полу и лазает по стенам, чтобы схватить свою добычу. Его электрическое дыхание может сжечь большинство существ, а более сильных противников он сжимает, обернувшись вокруг них кольцами, и съедает заживо. Внешне бехир похож на смесь чудовищной многоножки и крокодила. Его чешуйчатая шкура переливается от ультрамарина до тёмно-синего цвета, а на брюхе она голубая.`,
    sizeType: SIZE_HUGE,
    creatureTypeIdList: [
      CREATURE_MONSTER,
    ],
    aligmentId: ALIGMENT_NE,
    source: 'MM:22',
    armor: {
      ac: 17,
      type: 'природный доспех',
    },
    hp: {
      cubeType: 12,
      cubeCount: 16,
      cubeBonus: 64,
    },
    cr: CR_11,
    speed: {
      [SPEED_WALK]: 50,
      [SPEED_CRAWL]: 40,
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
          damage: {
            type: DAMAGE_PIERCING,
            cubeType: 10,
            cubeCount: 3,
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
          damage: [
            {
              type: DAMAGE_BLUDGEONING,
              cubeType: 10,
              cubeCount: 2,
              cubeBonus: 6,
            },
            {
              type: DAMAGE_SLASHING,
              cubeType: 10,
              cubeCount: 2,
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
    description: `Блуждающие огоньки являются злобными, похожими на дымку, шарами света, которые обитают в уединённых местах и на полях сражений, связанных с мрачной судьбой или тёмной магией, и питаются страхом и отчаянием.`,
    sizeType: SIZE_TINY,
    creatureTypeIdList: [
      CREATURE_UNDEAD,
    ],
    aligmentId: ALIGMENT_CE,
    source: 'MM:23',
    armor: 19,
    hp: {
      cubeType: 4,
      cubeCount: 9,
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
          damage: {
            type: DAMAGE_ELECTRICITY,
            cubeType: 8,
            cubeCount: 2,
          },
        },
      },
      {
        name: 'Невидимость',
        description: `Блуждающий огонёк и его свет магическим образом становятся невидимыми, пока он не совершит атаку, не использует _Истребление жизни_, или пока не прервётся его концентрация (как при концентрации на заклинании).`,
      },
    ],
  },
].map(
  creature => ({
    ...creature,
    id: creature.nameEn,
    isFemale: Boolean(creature.isFemale),
    [SEARCH_PROP_NAME]: [
      creature.name,
      creature.nameEn,
      creature.description || '',
    ]
      .join('\n'),
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
