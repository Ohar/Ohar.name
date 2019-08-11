import SEARCH_PROP_NAME from "@/constants/SEARCH_PROP_NAME";
import {
  CR_0,
  CR_1_8,
  CR_1_4,
  CR_10,
} from "@/constants/dnd/dndCrList"
import {
  SIZE_MEDIUM,
  SIZE_LARGE,
} from "@/constants/dnd/dndSizeList"
import {
  CREATURE_AARAKOCRA,
  CREATURE_ABERRATION,
  CREATURE_ANY_RACE,
  CREATURE_FIEND,
  CREATURE_HUMANOID,
} from "@/constants/dnd/dndCreatureTypeList"
import {
  ALIGMENT_ANY,
  ALIGMENT_LE,
  ALIGMENT_NG,
  ALIGMENT_NOT_LAWFUL,
} from '@/constants/dnd/dndAligmentList'
import {
  SPEED_FLY,
  SPEED_SWIM,
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
  LANG_DEEP_SPEECH,
  LANG_TELEPATHY,
} from '@/constants/dnd/dndLanguageList'
import {
  DAMAGE_BLUDGEONING,
  DAMAGE_PIERCING,
  DAMAGE_SLASHING,
} from '@/constants/dnd/dndDamageTypeList'
import {
  SENSE_DARK_VISION,
  SENSE_PASSIVE_PERCEPTION,
} from '@/constants/dnd/dndSenseList'
import {
  SKILL_HISTORY,
  SKILL_MEDICINE,
  SKILL_PERCEPTION,
  SKILL_RELIGION,
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
          targetCount: 1,
          damageType: DAMAGE_BLUDGEONING,
          damage: {
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
          targetCount: 1,
          damageType: DAMAGE_BLUDGEONING,
          damage: {
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
