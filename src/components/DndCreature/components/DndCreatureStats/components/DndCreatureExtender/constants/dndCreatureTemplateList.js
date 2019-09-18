import arrify from 'arrify'
import {
  faDizzy,
  faSkullCrossbones,
  faMehBlank,
  faRobot,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'

import generateTextLinks from '@/utils/generateTextLinks'

import {
  SIZE_MEDIUM,
  SIZE_LARGE,
  SIZE_SMALL,
  SIZE_TINY,
} from '@/constants/dnd/dndSizeList'
import {
  CREATURE_TYPE_AARAKOCRA,
  CREATURE_TYPE_ANY_RACE,
  CREATURE_TYPE_ABERRATION,
  CREATURE_TYPE_BEAST,
  CREATURE_TYPE_BULLYWUG,
  CREATURE_TYPE_CELESTIAL,
  CREATURE_TYPE_DEMON,
  CREATURE_TYPE_DEVIL,
  CREATURE_TYPE_DRAGON,
  CREATURE_TYPE_DWARF,
  CREATURE_TYPE_ELF,
  CREATURE_TYPE_FEY,
  CREATURE_TYPE_FIEND,
  CREATURE_TYPE_FIRENEWT,
  CREATURE_TYPE_GIANT,
  CREATURE_TYPE_GITH,
  CREATURE_TYPE_GNOLL,
  CREATURE_TYPE_GNOME,
  CREATURE_TYPE_GOBLINOID,
  CREATURE_TYPE_GRIMLOCK,
  CREATURE_TYPE_GRUNG,
  CREATURE_TYPE_HUMAN,
  CREATURE_TYPE_HUMANOID,
  CREATURE_TYPE_KENKU,
  CREATURE_TYPE_KOBOLD,
  CREATURE_TYPE_KUO_TOA,
  CREATURE_TYPE_LIZARDFOLK,
  CREATURE_TYPE_MERFOLK,
  CREATURE_TYPE_MONSTER,
  CREATURE_TYPE_ORC,
  CREATURE_TYPE_PLANT,
  CREATURE_TYPE_QUAGGOTH,
  CREATURE_TYPE_SAHUAGIN,
  CREATURE_TYPE_SHAPESHIFTER,
  CREATURE_TYPE_THRI_KREEN,
  CREATURE_TYPE_TITAN,
  CREATURE_TYPE_TROGLODYTE,
  CREATURE_TYPE_UNDEAD,
  CREATURE_TYPE_XVART,
  CREATURE_TYPE_YOAN_TI,
  CREATURE_TYPE_YUGOLOT,
} from '@/constants/dnd/dndCreatureTypeList'
import {
  ALIGMENT_NO,
  ALIGMENT_NOT_LN,
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
  ACTION_MELEE_SPELL_ATTACK,
  ACTION_RANGE_WEAPON_ATTACK,
  ACTION_RANGE_SPELL_ATTACK,
} from '@/constants/dnd/dndActionTypeList'
import {
  dndDamageTypeCollection,
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
} from '@/constants/dnd/dndDamageTypeList'
import {
  SENSE_BLIND_VISION,
  SENSE_DARK_VISION,
  SENSE_PASSIVE_PERCEPTION,
} from '@/constants/dnd/dndSenseList'
import {
  PARAM_STR,
  PARAM_DEX,
  PARAM_CON,
  PARAM_INT,
  PARAM_WIT,
  PARAM_CHA,
} from '@/constants/dnd/dndParamList'
import {
  CONDITION_BLINDED,
  CONDITION_CHARMED,
  CONDITION_EXHAUSTION,
  CONDITION_FRIGHTENED,
  CONDITION_PARALYZED,
  CONDITION_POISONED,
} from '@/constants/dnd/dndConditionList'

import {
  CREATURE_ADULT_BLACK_DRAGON,
  CREATURE_ADULT_BLUE_DRAGON,
  CREATURE_ADULT_BRASS_DRAGON,
  CREATURE_ADULT_BRONZE_DRAGON,
  CREATURE_ADULT_COPPER_DRAGON,
  CREATURE_ADULT_GOLD_DRAGON,
  CREATURE_ADULT_GREEN_DRAGON,
  CREATURE_ADULT_RED_DRAGON,
  CREATURE_ADULT_SILVER_DRAGON,
  CREATURE_ADULT_WHITE_DRAGON,
  CREATURE_ANCIENT_BLACK_DRAGON,
  CREATURE_ANCIENT_BLUE_DRAGON,
  CREATURE_ANCIENT_BRASS_DRAGON,
  CREATURE_ANCIENT_BRONZE_DRAGON,
  CREATURE_ANCIENT_COPPER_DRAGON,
  CREATURE_ANCIENT_GOLD_DRAGON,
  CREATURE_ANCIENT_GREEN_DRAGON,
  CREATURE_ANCIENT_RED_DRAGON,
  CREATURE_ANCIENT_SILVER_DRAGON,
  CREATURE_ANCIENT_WHITE_DRAGON,
  CREATURE_BLACK_DRAGON_WYRMLING,
  CREATURE_BLUE_DRAGON_WYRMLING,
  CREATURE_BRASS_DRAGON_WYRMLING,
  CREATURE_BRONZE_DRAGON_WYRMLING,
  CREATURE_COPPER_DRAGON_WYRMLING,
  CREATURE_DUODRONE,
  CREATURE_DUST_MEPHIT,
  CREATURE_GOLD_DRAGON_WYRMLING,
  CREATURE_GREEN_DRAGON_WYRMLING,
  CREATURE_ICE_MEPHIT,
  CREATURE_MAGMA_MEPHIT,
  CREATURE_MONODRONE,
  CREATURE_MUD_MEPHIT,
  CREATURE_PENTADRONE,
  CREATURE_QUADRONE,
  CREATURE_RED_DRAGON_WYRMLING,
  CREATURE_SILVER_DRAGON_WYRMLING,
  CREATURE_SMOKE_MEPHIT,
  CREATURE_STEAM_MEPHIT,
  CREATURE_TRIDRONE,
  CREATURE_WHITE_DRAGON_WYRMLING,
  CREATURE_YOUNG_BLACK_DRAGON,
  CREATURE_YOUNG_BLUE_DRAGON,
  CREATURE_YOUNG_BRASS_DRAGON,
  CREATURE_YOUNG_BRONZE_DRAGON,
  CREATURE_YOUNG_COPPER_DRAGON,
  CREATURE_YOUNG_GOLD_DRAGON,
  CREATURE_YOUNG_GREEN_DRAGON,
  CREATURE_YOUNG_RED_DRAGON,
  CREATURE_YOUNG_SILVER_DRAGON,
  CREATURE_YOUNG_WHITE_DRAGON,
} from '@/constants/dnd/dndCreatureIdList'
import {
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
  SKILL_SURVIVAL,
} from '@/constants/dnd/dndSkillList'
import {
  LANG_DRACONIC,
} from '@/constants/dnd/dndLanguageList'

import { dndCrCollection } from '@/constants/dnd/dndCrList'

import calcParamBonus from '@/utils/calcParamBonus'

export default [
  {
    templateName: 'Споровый слуга',
    templateIcon: faDizzy,

    templateLimitations: {
      include: {
        sizeType: [
          SIZE_TINY,
          SIZE_SMALL,
          SIZE_MEDIUM,
          SIZE_LARGE,
        ],
        creatureTypeIdList: [
          CREATURE_TYPE_AARAKOCRA,
          CREATURE_TYPE_ANY_RACE,
          CREATURE_TYPE_ABERRATION,
          CREATURE_TYPE_BEAST,
          CREATURE_TYPE_BULLYWUG,
          CREATURE_TYPE_CELESTIAL,
          CREATURE_TYPE_DEMON,
          CREATURE_TYPE_DEVIL,
          CREATURE_TYPE_DRAGON,
          CREATURE_TYPE_DWARF,
          CREATURE_TYPE_ELF,
          CREATURE_TYPE_FEY,
          CREATURE_TYPE_FIEND,
          CREATURE_TYPE_FIRENEWT,
          CREATURE_TYPE_GIANT,
          CREATURE_TYPE_GITH,
          CREATURE_TYPE_GNOLL,
          CREATURE_TYPE_GNOME,
          CREATURE_TYPE_GOBLINOID,
          CREATURE_TYPE_GRIMLOCK,
          CREATURE_TYPE_GRUNG,
          CREATURE_TYPE_HUMAN,
          CREATURE_TYPE_HUMANOID,
          CREATURE_TYPE_KENKU,
          CREATURE_TYPE_KOBOLD,
          CREATURE_TYPE_KUO_TOA,
          CREATURE_TYPE_LIZARDFOLK,
          CREATURE_TYPE_MERFOLK,
          CREATURE_TYPE_MONSTER,
          CREATURE_TYPE_ORC,
          CREATURE_TYPE_QUAGGOTH,
          CREATURE_TYPE_SAHUAGIN,
          CREATURE_TYPE_SHAPESHIFTER,
          CREATURE_TYPE_THRI_KREEN,
          CREATURE_TYPE_TITAN,
          CREATURE_TYPE_TROGLODYTE,
          CREATURE_TYPE_XVART,
          CREATURE_TYPE_YOAN_TI,
          CREATURE_TYPE_YUGOLOT,
        ],
      },
      exclude: {
        templateName: ['Теневой дракон'],
      },
    },

    creatureTypeIdList: [CREATURE_TYPE_PLANT],
    aligmentId: ALIGMENT_NO,
    source: {
      id: 'MM',
      page: 209,
    },
    saveThrowCollection: null,
    skillCollection: null,
    featureList: [
      {
        name: 'Подчинение миконидам',
        description: `Слуга теряет знание всех известных ему языков, но может отвечать на приказы, отданные миконидами посредством спор взаимопонимания. Слуга отдаёт наивысший приоритет приказам, полученным от более сильных миконидов.`,
      },
    ],
    spellCast: null,
    spellCastTogether: null,
    languageList: [],
    senseList: [
      {
        id: SENSE_BLIND_VISION,
        value: 30,
        comment: 'слеп за пределами этого радиуса',
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 8,
      },
    ],
    description: [
      {
        header: 'Шаблон спорового слуги',
        text: `Споровым слугой становится любое существо с размером не больше Большого, оживлённое [верховным миконидом](CREATURE:myconid_sovereign). Существо без плоти и крови (например, конструкт, элементаль, слизь, растение или нежить) не может быть превращено в спорового слугу. У существа, которое становится споровым слугой, появляются или изменяются следующие параметры:\n
**Сохраняемые параметры.** Слуга сохраняет Класс Доспеха, хиты, Кости Хитов, Силу, Ловкость, Телосложение, уязвимости, сопротивления и иммунитеты.\n
**Теряемые параметры.** Слуга теряет свои исходные бонусы спасбросков и навыков, особые чувства, а также особенности. Он теряет все действия кроме Мультиатаки и рукопашных атак оружием, причиняющих дробящий, колющий или рубящий урон. Если у него есть действие или рукопашная атака оружием, которая причиняет урон другого вида, он теряет способность причинять урон этого вида, если только урон не исходит от какого-то снаряжения, например, магического предмета.\n
**Вид.** Слуга получает вид «растение» и теряет все метки.\n
**Мировоззрение.** Слуга лишён мировоззрения.\n
**Скорость.** Уменьшите все значения скорости слуги на 10 футов при минимуме в 5 футов.\n
**Характеристики.** Значения характеристик слуги становятся такими: Инт 2 (−4), Мдр 6 (−2), Хар 1 (−5).\n
**Чувства.** Слуга обладает слепым зрением в радиусе 30 футов и слеп за пределами этого радиуса.\n
**Иммунитет к состоянию.** Слуга не может быть испуган, ослеплён, очарован или парализован.\n
**Языки.** Слуга теряет знание всех известных ему языков, но может отвечать на приказы, отданные миконидами посредством спор взаимопонимания. Слуга отдаёт наивысший приоритет приказам, полученным от более сильных миконидов.\n
**Атаки.** Если слуга не обладает иными возможностями причинения урона, он может использовать свои кулаки и конечности для совершения невооружённых ударов. При попадании невооружённый удар причиняет дробящий урон 1к4 + модификатор Силы слуги, или, если слуга Большого размера, то 2к4 + его модификатор Силы.`,
      },
    ],

    editPropCollection: {
      name: ({ name }) => `${name} споровый слуга`,
      speed: ({ speed: speedCollection }) => Object
        .keys(speedCollection)
        .reduce(
          (resultSpeed, speedId) => {
            const speed = speedCollection[speedId]
            const isObj = typeof speed === 'object'
            const value = isObj ? speed.value : speed
            const editedValue = Math.max(5, value - 10)

            return {
              ...resultSpeed,
              [speedId]: isObj
                ? {
                  ...speed,
                  value: editedValue,
                }
                : editedValue,
            }
          },
          {},
        ),
    },

    filterPropCollection: {
      actionList: [
        {
          name: 'Мультиатака',
        },
        {
          attack: {
            type: [
              ACTION_MELEE_WEAPON_ATTACK,
            ],
            hit: [
              {
                isDamageByEquipment: true,
              },
              {
                type: [
                  DAMAGE_BLUDGEONING,
                  DAMAGE_SLASHING,
                  DAMAGE_PIERCING,
                ],
              },
            ],
          },
        },
      ],
    },

    extendPropCollection: {
      params: {
        [PARAM_INT]: 2,
        [PARAM_WIT]: 6,
        [PARAM_CHA]: 1,
      },
      immunityConditionList: [
        CONDITION_FRIGHTENED,
        CONDITION_BLINDED,
        CONDITION_CHARMED,
        CONDITION_PARALYZED,
      ],
    },

    replaceEmptyPropCollection: {
      actionList: ({ params, sizeType, cr }) => {
        const strBonus = calcParamBonus(params[PARAM_STR])
        const cubeCount = sizeType === SIZE_LARGE ? 2 : 1
        const { profBonus } = dndCrCollection[cr]
        const bonus = strBonus + profBonus

        return [
          {
            name: 'Безоружный удар',
            attack: {
              type: ACTION_MELEE_WEAPON_ATTACK,
              bonus,
              range: 5,
              target: 1,
              hit: {
                type: DAMAGE_BLUDGEONING,
                cubeCount,
                cubeType: 4,
                cubeBonus: strBonus,
              },
            },
          },
        ]
      },
    },
  },
  {
    templateName: 'Драколич',
    templateIcon: faSkullCrossbones,

    templateLimitations: {
      include: {
        id: [
          CREATURE_ADULT_BLACK_DRAGON,
          CREATURE_ADULT_BLUE_DRAGON,
          CREATURE_ADULT_BRASS_DRAGON,
          CREATURE_ADULT_BRONZE_DRAGON,
          CREATURE_ADULT_COPPER_DRAGON,
          CREATURE_ADULT_GOLD_DRAGON,
          CREATURE_ADULT_GREEN_DRAGON,
          CREATURE_ADULT_RED_DRAGON,
          CREATURE_ADULT_SILVER_DRAGON,
          CREATURE_ADULT_WHITE_DRAGON,
          CREATURE_ANCIENT_BLACK_DRAGON,
          CREATURE_ANCIENT_BLUE_DRAGON,
          CREATURE_ANCIENT_BRASS_DRAGON,
          CREATURE_ANCIENT_BRONZE_DRAGON,
          CREATURE_ANCIENT_COPPER_DRAGON,
          CREATURE_ANCIENT_GOLD_DRAGON,
          CREATURE_ANCIENT_GREEN_DRAGON,
          CREATURE_ANCIENT_RED_DRAGON,
          CREATURE_ANCIENT_SILVER_DRAGON,
          CREATURE_ANCIENT_WHITE_DRAGON,
        ],
        creatureTypeIdList: [
          CREATURE_TYPE_DRAGON,
        ],
      },
      exclude: {
        templateName: ['Теневой дракон'],
      },
    },

    creatureTypeIdList: [CREATURE_TYPE_UNDEAD],
    source: {
      id: 'MM',
      page: 99,
    },
    description: [
      {
        header: 'Шаблон драколича',
        text: `Только древний или взрослый истинный дракон может быть преобразован в драколича. Молодые драконы, которые пытаются пройти трансформацию, умирают, равно как и другие существа, не являющиеся истинными драконами, такие как псевдодраконы и виверны. Теневой дракон не может быть преобразован в драколича, поскольку он уже потерял слишком большую часть своего физического тела.\n
Когда дракон становится драколичем, он сохраняет свою статистику, за исключением пунктов, описанных ниже. Дракон теряет все особенности, такие как Амфибия, которые подразумевают живую физиологию. Драколич может сохранить или потерять некоторые или все свои действия логова, или унаследовать новые, в зависимости от решения Мастера.\n
**Вид.** Вид драколича меняется с «дракон» на «нежить», и ему больше не требуется воздух, еда, питьё и сон.\n
**Сопротивление к урону.** Драколич получает сопротивление к урону некротической энергией.\n
**Иммунитет к урону.** Драколич получает иммунитет к яду. Он также сохраняет все иммунитеты, которыми обладал до того, как стал нежитью.\n
**Иммунитет к состоянию.** Драколич не может быть очарован, испуган, парализован или отравлен. Он также не страдает от истощения.\n
**Сопротивление магии.** Драколич совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
      },
      {
        header: 'Драколич',
        text: `Даже таким долгожителям как драконы когда-то приходится умирать. Осознание этого многим драконам не даёт покоя, и некоторые из них позволяют с помощью некромантии и древних ритуалов превращать себя в могущественную нежить — драколичей. Только самые самовлюблённые драконы выбирают этот путь, зная, что в результате они оборвут все связи со своими сородичами и богами драконов.\n
**По ту сторону смерти.** При трансформации драколич сохраняет свою форму и размеры, его кожа и чешуя плотно прилегают к костям или же наоборот, сбрасываются, оставляя голый скелет. Его глаза выглядят как пылающие точки света, плавающие в тёмных впадинах, и намекающие на недоброжелательность неживого разума.\n
Многие драконы преследуют тщеславные цели уничтожения и доминирования, но драколичи сильнее самых злых драконов движимы жаждой власти над всеми. Драколичи являются дьявольски умными тиранами, плетущими паутину из бесчестных схем и планов, завлекая прислужников, движимых алчностью и жаждой власти. Действуя из тени и тщательно стараясь сохранить своё существование в секрете, драколич представляет собой хитрого и опасного противника.\n
**Филактерий драколича.** Создание драколича требует сотрудничества дракона и группы магов или культистов, способных провести надлежащий ритуал. Во время ритуала дракон поглощает токсичное варево, мгновенно его убивающее. Заклинатели при этом уже готовы опутать его дух, чтобы поместить его в специальный драгоценный камень, функционирующий как филактерий лича. Когда плоть дракона изгнивает, дух заключённый внутри камня, возвращается и оживляет драконьи кости.\n
Если физическое тело драколича когда-нибудь будет разрушено, его дух вернётся в драгоценный камень, если они находятся на одном плане. Если драгоценный камень прикоснётся к трупу другого дракона, дух драколича может овладеть этим телом, чтобы стать новым драколичем. Если духовный камень драколича будет находиться на другом плане, духу драколича будет некуда идти при разрушении его тела, и он просто уйдёт в посмертие.`,
      },
    ],

    editPropCollection: {
      name: ({ name }) => name.replace('дракон', 'драколич'),
      featureList: ({ featureList = [] }) => featureList.filter(
        ({ name }) => name !== 'Амфибия',
      ),
    },

    extendPropCollection: {
      resistanceList: [
        DAMAGE_NECROTIC,
      ],
      immunityList: [
        DAMAGE_POISON,
      ],
      immunityConditionList: [
        CONDITION_FRIGHTENED,
        CONDITION_POISONED,
        CONDITION_CHARMED,
        CONDITION_PARALYZED,
        CONDITION_EXHAUSTION,
      ],
      featureList: [
        {
          name: 'Сопротивление магии',
          description: `Драколич совершает с преимуществом спасброски от заклинаний и прочих магических эффектов.`,
        },
      ],
    },
  },
  {
    templateName: 'Теневой дракон',
    templateIcon: faMehBlank,

    templateLimitations: {
      include: {
        id: [
          CREATURE_ADULT_BLACK_DRAGON,
          CREATURE_ADULT_BLUE_DRAGON,
          CREATURE_ADULT_BRASS_DRAGON,
          CREATURE_ADULT_BRONZE_DRAGON,
          CREATURE_ADULT_COPPER_DRAGON,
          CREATURE_ADULT_GOLD_DRAGON,
          CREATURE_ADULT_GREEN_DRAGON,
          CREATURE_ADULT_RED_DRAGON,
          CREATURE_ADULT_SILVER_DRAGON,
          CREATURE_ADULT_WHITE_DRAGON,
          CREATURE_ANCIENT_BLACK_DRAGON,
          CREATURE_ANCIENT_BLUE_DRAGON,
          CREATURE_ANCIENT_BRASS_DRAGON,
          CREATURE_ANCIENT_BRONZE_DRAGON,
          CREATURE_ANCIENT_COPPER_DRAGON,
          CREATURE_ANCIENT_GOLD_DRAGON,
          CREATURE_ANCIENT_GREEN_DRAGON,
          CREATURE_ANCIENT_RED_DRAGON,
          CREATURE_ANCIENT_SILVER_DRAGON,
          CREATURE_ANCIENT_WHITE_DRAGON,
          CREATURE_BLACK_DRAGON_WYRMLING,
          CREATURE_BLUE_DRAGON_WYRMLING,
          CREATURE_BRASS_DRAGON_WYRMLING,
          CREATURE_BRONZE_DRAGON_WYRMLING,
          CREATURE_COPPER_DRAGON_WYRMLING,
          CREATURE_GOLD_DRAGON_WYRMLING,
          CREATURE_GREEN_DRAGON_WYRMLING,
          CREATURE_RED_DRAGON_WYRMLING,
          CREATURE_SILVER_DRAGON_WYRMLING,
          CREATURE_WHITE_DRAGON_WYRMLING,
          CREATURE_YOUNG_BLACK_DRAGON,
          CREATURE_YOUNG_BLUE_DRAGON,
          CREATURE_YOUNG_BRASS_DRAGON,
          CREATURE_YOUNG_BRONZE_DRAGON,
          CREATURE_YOUNG_COPPER_DRAGON,
          CREATURE_YOUNG_GOLD_DRAGON,
          CREATURE_YOUNG_GREEN_DRAGON,
          CREATURE_YOUNG_RED_DRAGON,
          CREATURE_YOUNG_SILVER_DRAGON,
          CREATURE_YOUNG_WHITE_DRAGON,
        ],
        creatureTypeIdList: [CREATURE_TYPE_DRAGON],
      },
      exclude: {
        templateName: ['Драколич'],
      },
    },

    source: {
      id: 'MM',
      page: 100,
    },
    description: [
      {
        header: 'Шаблон теневого дракона',
        text: `Только истинный дракон может превратиться в теневого дракона, и только в том случае, если рождается в Царстве Теней или проживает там несколько лет. Драколич не может стать теневым драконом, так как он уже потерял свою драконью природу и стал нежитью.\n
Когда дракон становится теневым драконом, он сохраняет свою статистику, за исключением пунктов, описанных ниже. Теневой дракон может сохранить или потерять некоторые или все свои действия логова, или унаследовать новые, в зависимости от решения Мастера.\n
**Сопротивление к урону.** Теневой дракон получает сопротивление к урону некротической энергией.\n
**Владение навыком: Скрытность.** Бонус мастерства дракона удваивается для его проверок Ловкости (Скрытность).\n
**Живая тень.** Находясь в области тусклого свете или тьмы, дракон обладает сопротивлением ко всем видам урона кроме урона излучением, психической энергией и силовым полем.\n
**Скрытность в тени.** Находясь в области тусклого света или тьмы, дракон может совершать действие Засада бонусным действием.\n
**Чувствительность к солнечному свету.** Находясь на солнечном свету, дракон совершает с помехой броски атаки, а также проверки Мудрости (Внимательность), полагающиеся на зрение.\n
**Новое действие: Укус.** Если дракон причиняет укусом урон кислотой, огнём, холодом, электричеством или ядом, измените этот урон на урон некротической энергией.\n
**Новое действие: Теневое дыхание.** Любое причиняющее урон оружие дыхания, имеющееся у дракона, теперь причиняет урон некротической энергией, вместо первоначального вида урона. Гуманоид, хиты которого уменьшились до 0 от этого урона, умирает, и из его трупа выходит [тень](CREATURE:shadow) — нежить, действующая сразу после дракона по инициативе. Эта тень находится под контролем дракона.`,
      },
      {
        header: 'Теневой дракон',
        text: `Теневые драконы это истинные драконы, которые либо родились в Царстве Теней, либо трансформировались за годы, проведённые в его мрачных пределах. Некоторые теневые драконы остаются в Царстве Теней, так как им нравятся его безрадостные пейзажи и запустение. Другие стремятся вернуться на Материальный План, желая распространить там тьму и зло Царства Теней.\n
**Тёмные порталы.** Порталы в Царство Теней появляются в покинутых местах и глубочайшем мраке подземных каверн. Драконы, устраивающие логова в подобных местах, часто находят такие порталы и переносятся на новый план. Древние драконы, которые спят в своих берлогах на протяжении месяцев и лет, могут проснуться и понять, что пока они видели сны, без их ведома сформировался перенёсший их портал.\n
**Перерождение в тень.** Превращение дракона из обычного в теневого происходит за нескольких лет, в течение которых чешуйки постепенно утрачивают свой блеск и выцветают до тёмных, угольных оттенков. Его кожистые крылья становятся полупрозрачными, его глаза превращаются в омуты, переливающиеся серым. Теневые драконы считают солнечный свет отвратительным; при ярком свете они слабее, чем во тьме, а в темноте они принимают облик, более похожий на их былую внешность.\n
Магическая природа драконов привлекательна для Царства Теней, которое, как кажется, каким-то образом жаждет мощь и величие этих гигантских рептилий. Царство Теней также оказывает угнетающее влияние на своих обитателей, так что чем дольше существо остаётся на этом плане, тем больше оно перенимает общую тоску. Месяцы и годы проходят для дракона в Царстве Теней, он осознаёт свою трансформацию, но всё же ничего не делает, чтобы предотвратить её.\n
**Назад на Материальный План.** Теневые драконы переполнены силой Царства Теней настолько, что даже возврат на Материальный План не может отменить их трансформацию. Некоторые теневые драконы пытаются заманить других существ из мира смертных обратно в Царство Теней, чтобы пообщаться с ними, по крайней мере, пока они не устанут от своих гостей и не съедят их. Другие рады оставить Царство Теней навсегда позади, понимая, что сокровища и власть легче найти на Материальном Плане.`,
      },
    ],

    editPropCollection: {
      name: ({ name }) => name.includes('Вирмлинг')
        ? name.replace('Вирмлинг', 'Теневой вирмлинг')
        : name.replace('дракон', 'теневой дракон'),
      skillCollection: ({ skillCollection, cr, params }) => {
        const { profBonus } = dndCrCollection[cr]
        const dexBonus = calcParamBonus(params[PARAM_DEX])

        return {
          ...(skillCollection || {}),
          [SKILL_STEALTH]: dexBonus + profBonus * 2,
        }
      },
      actionList: ({ actionList }) => actionList.map(
        action => {
          if (action.name === 'Укус') {
            const hit = arrify(action.attack.hit)
              .map(
                hitItem => arrify(hitItem)
                  .map(
                    item => {
                      if (
                        [
                          DAMAGE_ACID,
                          DAMAGE_COLD,
                          DAMAGE_ELECTRICITY,
                          DAMAGE_FIRE,
                          DAMAGE_POISON,
                        ]
                          .includes(item.type)
                      ) {
                        return {
                          ...item,
                          type: DAMAGE_NECROTIC,
                        }
                      }

                      return item
                    },
                  ),
              )

            return {
              ...action,
              attack: {
                ...action.attack,
                hit,
              },
            }
          }

          if (action.name.toLowerCase().includes('дыхание')) {
            const changedDescription = action.description
              .replace(
                /(огонь)|(волну ледяного воздуха)|(молнию)|(кислоту)|(ядовитый газ)/g,
                'некротическую энергию',
              )
              .replace(
                /(огнём)|(холодом)|(электричеством)|(кислотой)|(ядом)/g,
                'некротической энергией',
              )
            const description = generateTextLinks(`${changedDescription}. Гуманоид, хиты которого уменьшились до 0 от этого урона, умирает, и из его трупа выходит [тень](CREATURE:shadow) — нежить, действующая сразу после дракона по инициативе. Эта тень находится под контролем дракона.`)

            return {
              ...action,
              name: 'Тёмное дыхание',
              description,
            }
          }

          return action
        },
      ),
    },

    extendPropCollection: {
      resistanceList: [
        DAMAGE_NECROTIC,
      ],
      featureList: [
        {
          name: 'Чувствительность к солнечному свету',
          description: `Находясь на солнечном свету, дракон совершает с помехой броски атаки, а также проверки Мудрости (Внимательность), полагающиеся на зрение.`,
        },
        {
          name: 'Живая тень',
          description: `Находясь в области тусклого свете или тьмы, дракон обладает сопротивлением ко всем видам урона кроме урона излучением, психической энергией и силовым полем.`,
        },
        {
          name: 'Скрытность в тени',
          description: `Находясь в области тусклого света или тьмы, дракон может совершать действие Засада бонусным действием.`,
        },
      ],
    },
  },
  {
    templateName: 'Модрон-ренегат',
    templateIcon: faRobot,

    templateLimitations: {
      include: {
        id: [
          CREATURE_MONODRONE,
          CREATURE_DUODRONE,
          CREATURE_TRIDRONE,
          CREATURE_QUADRONE,
          CREATURE_PENTADRONE,
        ],
      },
      exclude: {
        templateName: ['Модрон-ренегат'],
      },
    },

    aligmentId: ALIGMENT_NOT_LN,
    source: {
      id: 'MM',
      page: 212,
    },
    description: [
      {
        header: 'Вариант: Модроны-ренегаты',
        text: `Модрон иногда может дезертировать, либо из-за того, что подвергся воздействию сил хаоса, либо по причине какой-то неисправности. Модроны-ренегаты перестают действовать в соответствии с директивами и желаниями Праймуса, нарушая законы, не подчиняясь приказам и даже занимаясь насилием. Другие модроны стараются отлавливать и уничтожать таких ренегатов.\n
Модрон-ренегат теряет особенность _Косное сознание_, и может иметь любое мировоззрение кроме законно-нейтрального. В остальном у него статистика как у обычного модрона соответствующего ранга.`,
      },
    ],

    editPropCollection: {
      name: ({ name }) => `${name}-ренегат`,
      featureList: ({ featureList }) => featureList.filter(
        ({ name }) => name !== 'Косное сознание',
      ),
    },
  },
  {
    templateName: 'Мефит-призыватель',
    templateIcon: faUserPlus,

    templateLimitations: {
      include: {
        id: [
          CREATURE_MUD_MEPHIT,
          CREATURE_SMOKE_MEPHIT,
          CREATURE_ICE_MEPHIT,
          CREATURE_MAGMA_MEPHIT,
          CREATURE_STEAM_MEPHIT,
          CREATURE_DUST_MEPHIT,
        ],
      },
      exclude: {
        templateName: ['Мефит-призыватель'],
      },
    },
    source: {
      id: 'MM',
      page: 206,
    },
    extendPropCollection: {
      description: [
        {
          header: 'Вариант: Призыв мефита',
          text: `У некоторых мефитов может быть действие, позволяющее им призывать других мефитов.\n
**Призыв мефитов (1/день)**. У мефита есть 25% шанс призвать 1к4 мефита одной с ним разновидности. Призванные мефиты появляются в свободном пространстве в пределах 60 футов от призывателя, действуют как союзники призывателя, и не могут призывать других мефитов. Они остаются в течение 1 минуты, либо до тех пор, пока не убьют их или призвавшего их, или пока призыватель не отпустит их действием.`,
        },
      ],
    },

    editPropCollection: {
      name: ({ name }) => `${name}-призыватель`,
      actionList: ({ actionList }) => [
        ...actionList,
        {
          name: 'Призыв мефитов',
          limit: {
            count: 1,
            period: 'день',
          },
          description: `У мефита есть 25% шанс призвать 1к4 одной с ним разновидности. Призванные мефиты появляются в свободном пространстве в пределах 60 футов от призывателя, действуют как союзники призывателя, и не могут призывать других мефитов. Они остаются в течение 1 минуты, либо до тех пор, пока не убьют их или призвавшего их, или пока призыватель не отпустит их действием.`,
        },
      ],
    },
  },
  // NOT READY
//   {
//     templateName: 'Полудракон',
//     templateIcon: faDragon,
//
//     templateLimitations: {
//       include: {
//         creatureTypeIdList: [
//           CREATURE_TYPE_BEAST,
//           CREATURE_TYPE_GIANT,
//           CREATURE_TYPE_HUMANOID,
//           CREATURE_TYPE_MONSTER,
//         ],
//       },
//       exclude: {
//         templateName: ['Полудракон'],
//       },
//     },
//
//     source: {
//       id: 'MM',
//       page: 241,
//     },
//     senseList: [ // TODO
//       {
//         id: SENSE_DARK_VISION,
//         value: 60,
//       },
//       {
//         id: SENSE_BLIND_VISION,
//         value: 10,
//       },
//     ],
//     resistanceList: [ // TODO
//     ],
//     description: [
//       {
//         header: 'Полудракон',
//         text: `Если дракон в изменённом облике спаривается с другим существом, их союз иногда порождает полудракона. Существо может также трансформироваться в него в результате заклинания сумасшедшего волшебника, или ритуала омовения в драконьей крови. Во всех этих случаях результатом становится существо, объединяющее сущность дракона с обликом его изначальной расы. Каким бы ни было происхождение, все полудраконы имеют общие особенности и внешний вид, получают особые чувства, устойчивость к разрушительной энергии и смертоносное дыхание.\n
// **Драконья натура.** Полудраконы не способны давать потомство естественным путём. Те из них, что намерены размножаться, вынуждены прибегать к сторонним методам, почти всегда задействующим магию. Своего рода компенсацией является долгая жизнь полудраконов. Если не принимать во внимание несчастные случаи, типичный полудракон живёт примерно в два раза дольше обычных представителей недраконьей половины своего вида, то есть полудракон-получеловек может прожить более полутора сотен лет.\n
// Полудраконы наследуют черты характера своих драконьих предков, так что золотые полудраконы зачастую скромны и скрытны, в то время как медные полудраконы проказливы и игривы. Зелёные полудраконы лживы, а белые являются тупыми громилами. Эти черты сдерживаются второй половиной природы полудракона, но жадность, высокомерие и паранойя зачастую свойственны даже добрым полудраконам.`,
//       },
//       {
//         header: 'Шаблон полудракона',
//         text: `Полудраконом могут стать великаны, гуманоиды, звери и монстры. Когда существо становится полудраконом, оно сохраняет всю свою статистику, кроме того, что описано ниже.\n
// **Чувства.** Полудракон получает слепое зрение в радиусе 10 футов и тёмное зрение в радиусе 60 футов.\n
// **Сопротивление.** Полудракон получает сопротивление к виду урона, определяемому его цветом.
//
// | Цвет                                                                                                            | Вид урона     |
// |-----------------------------------------------------------------------------------------------------------------|---------------|
// | [Белый](CREATURE:${CREATURE_ANCIENT_WHITE_DRAGON}) или [серебряный](CREATURE:${CREATURE_ANCIENT_SILVER_DRAGON}) | Холод         |
// | [Бронзовый](CREATURE:${CREATURE_ANCIENT_BRONZE_DRAGON}) или [синий](CREATURE:${CREATURE_ANCIENT_BLUE_DRAGON})   | Электричество |
// | [Зелёный](CREATURE:${CREATURE_ANCIENT_GREEN_DRAGON})                                                            | Яд            |
// | [Золотой](CREATURE:${CREATURE_ANCIENT_GOLD_DRAGON}), [красный](CREATURE:${CREATURE_ANCIENT_RED_DRAGON}) или [латунный](CREATURE:${CREATURE_ANCIENT_BRASS_DRAGON}) | Огонь |
// | [Медный](CREATURE:${CREATURE_ANCIENT_COPPER_DRAGON}) или [чёрный](CREATURE:${CREATURE_ANCIENT_BLACK_DRAGON})    | Кислота       |
//
// **Языки.** Полудраконы говорят на Драконьем вдобавок ко всем другим языкам, которыми владеют.\n
// **Показатель опасности:** Для того чтобы избежать пересчёта показателя опасности существа, применяйте этот шаблон только к существам, выполняющим опциональное требование в приведённой ниже таблице оружия дыхания. В противном случае после применения шаблона высчитайте новый показатель опасности, используя правила из Руководства Мастера.\n
// **Новое действие:** Оружие дыхания. Полудраконы располагают дыхательным оружием своей драконьей родни. То, как это оружие действует, зависит от размера полудракона.
//
// | Размер             | Оружие дыхания          | Опциональное требование |
// |--------------------|-------------------------|-------------------------|
// | Большой или меньше | Как у вирмлинга         | Опасность 2 или выше    |
// | Огромный           | Как у молодого дракона  | Опасность 7 или выше    |
// | Громадный          | Как у взрослого дракона | Опасность 8 или выше    |
//
// `,
//       },
//     ],
//
//     extendPropCollection: {
//       languageList: [LANG_DRACONIC],
//     },
//
//     editPropCollection: {
//       name: ({ name }) => `Полудракон ${name.toLowerCase()}`,
//     },
//   },
]
