import SEARCH_PROP_NAME from "@/constants/SEARCH_PROP_NAME";
import {
  CR_0,
  CR_1_8,
  CR_1_4,
} from "@/constants/dnd/dndCrList"
import {SIZE_MEDIUM} from "@/constants/dnd/dndSizeList"
import {
  CREATURE_AARAKOCRA,
  CREATURE_ANY_RACE,
  CREATURE_HUMANOID,
} from "@/constants/dnd/dndCreatureTypeList"
import {
  ALIGMENT_ANY,
  ALIGMENT_NG,
  ALIGMENT_NOT_LAWFUL,
} from '@/constants/dnd/dndAligmentList'
import {
  SPEED_FLY,
  SPEED_WALK,
} from '@/constants/dnd/dndSpeedList'
import {
  ACTION_MELEE_WEAPON_ATTACK,
  ACTION_MELEE_OR_RANGE_WEAPON_ATTACK,
  ACTION_RANGE_WEAPON_ATTACK,
} from '@/constants/dnd/dndActionTypeList'
import {
  LANG_AARAKOCRA,
  LANG_ANY_ONE,
  LANG_AURAN,
} from '@/constants/dnd/dndLanguageList'
import {
  DAMAGE_BLUDGEONING,
  DAMAGE_PIERCING,
  DAMAGE_SLASHING,
} from '@/constants/dnd/dndDamageTypeList'
import { SENSE_PASSIVE_PERCEPTION } from '@/constants/dnd/dndSenseList'
import {
  SKILL_MEDICINE,
  SKILL_PERCEPTION,
  SKILL_RELIGION,
} from '@/constants/dnd/dndSkillList'
import {
  PC_CLASS_PRIEST,
} from '@/constants/dnd/dndPcClassList'
import {
  PARAM_WIT,
} from '@/constants/dnd/dndParamList'
import {
  SPELL_LIGHT,
  SPELL_SACRED_FLAME,
  SPELL_THAUMATURGY,
  SPELL_BLESS,
  SPELL_CURE_WOUNDS,
  SPELL_SANCTUARY,
} from '@/constants/dnd/dndSpellList'

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
    armor: {
      ac: 10,
    },
    cr: CR_0,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_HUMANOID,
      CREATURE_ANY_RACE,
    ],
    params: {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wit: 10,
      cha: 10,
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
        limit: {
          count: 1,
          period: 'ход',
        },
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 2,
          range: 5,
          targetCount: 1,
          damageType: DAMAGE_BLUDGEONING,
          damage: {
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
      str: 11,
      dex: 12,
      con: 12,
      int: 10,
      wit: 10,
      cha: 10,
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
          targetCount: 1,
          damageType: DAMAGE_SLASHING,
          damage: {
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
          targetCount: 1,
          damageType: DAMAGE_PIERCING,
          damage: {
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
    armor: {
      ac: 10,
    },
    cr: CR_1_4,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_HUMANOID,
      CREATURE_ANY_RACE,
    ],
    params: {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wit: 14,
      cha: 11,
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
          targetCount: 1,
          damageType: DAMAGE_BLUDGEONING,
          damage: {
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
    armor: {
      ac: 12,
    },
    hp: {
      cubeType: 8,
      cubeCount: 3,
    },
    speed: {
      [SPEED_WALK]: 20,
      [SPEED_FLY]: 50,
    },
    params: {
      str: 10,
      dex: 14,
      con: 10,
      int: 11,
      wit: 12,
      cha: 11,
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
          targetCount: 1,
          damageType: DAMAGE_SLASHING,
          damage: {
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
          targetCount: 1,
          damageType: DAMAGE_PIERCING,
          damage: {
            cubeType: 6,
            cubeCount: 1,
            cubeBonus: 2,
          },
        },
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
      creature.description,
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
