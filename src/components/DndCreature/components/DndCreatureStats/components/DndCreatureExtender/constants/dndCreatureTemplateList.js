import arrify from "arrify"
import { faDizzy, faSkullCrossbones, faMehBlank } from '@fortawesome/free-solid-svg-icons'

import generateTextLinks from '@/utils/generateTextLinks'

import {
  SIZE_MEDIUM,
  SIZE_LARGE,
  SIZE_SMALL,
  SIZE_TINY
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
  ALIGMENT_NO
} from '@/constants/dnd/dndAligmentList'
import {
  SPEED_CLIMB,
  SPEED_DIG,
  SPEED_FLY,
  SPEED_SWIM,
  SPEED_WALK
} from '@/constants/dnd/dndSpeedList'
import {
  ACTION_MELEE_WEAPON_ATTACK,
  ACTION_MELEE_SPELL_ATTACK,
  ACTION_RANGE_WEAPON_ATTACK,
  ACTION_RANGE_SPELL_ATTACK
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
  DAMAGE_THUNDER
} from '@/constants/dnd/dndDamageTypeList'
import {
  SENSE_BLIND_VISION,
  SENSE_PASSIVE_PERCEPTION
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

import {dndCrCollection} from "@/constants/dnd/dndCrList"

import calcParamBonus from '@/utils/calcParamBonus'

export default [
  {
    templateName: 'Споровый слуга',
    templateIcon: faDizzy,

    creatureTypeIdList: [CREATURE_TYPE_PLANT],
    aligmentId: ALIGMENT_NO,
    source: 'MM:209',
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
        comment: 'слеп за пределами этого радиуса'
      },
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 8
      }
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

    extendLimitations: {
      sizeTypeList: [
        SIZE_TINY,
        SIZE_SMALL,
        SIZE_MEDIUM,
        SIZE_LARGE
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
        CREATURE_TYPE_YUGOLOT
      ],
      templateName: ['Теневой дракон'],
    },

    editPropCollection: {
      name: ({name}) => `${name} споровый слуга`,
      speed: ({speed: speedCollection}) => Object
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
          {}
        )
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
                isMagicWeaponDamage: true,
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
        [PARAM_CHA]: 1
      },
      immunityConditionList: [
        CONDITION_FRIGHTENED,
        CONDITION_BLINDED,
        CONDITION_CHARMED,
        CONDITION_PARALYZED
      ],
    },

    replaceEmptyPropCollection: {
      actionList: ({params, sizeType, cr}) => {
        const strBonus = calcParamBonus(params[PARAM_STR])
        const cubeCount = sizeType === SIZE_LARGE ? 2 : 1
        const {profBonus} = dndCrCollection[cr]
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

    creatureTypeIdList: [CREATURE_TYPE_UNDEAD],
    source: 'MM:99',
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
      name: ({name}) => name.replace('дракон', 'драколич'),
      featureList: ({featureList = []}) => featureList.filter(
        ({name}) => name !== 'Амфибия'
      ),
    },

    extendLimitations: {
      creatureIdList: [
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
      templateName: ['Теневой дракон'],
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

    source: 'MM:100',
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
      name: ({name}) => name.includes('Вирмлинг')
        ? name.replace('Вирмлинг', 'Теневой вирмлинг')
        : name.replace('дракон', 'теневой дракон'),
      skillCollection: ({skillCollection, cr, params}) => {
        const {profBonus} = dndCrCollection[cr]
        const dexBonus = calcParamBonus(params[PARAM_DEX])

        return {
          ...(skillCollection || {}),
          [SKILL_STEALTH]: dexBonus + profBonus * 2,
        }
      },
      actionList: ({actionList}) => actionList.map(
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
                    }
                  )
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
                'некротическую энергию'
              )
              .replace(
                /(огнём)|(холодом)|(электричеством)|(кислотой)|(ядом)/g,
                'некротической энергией'
              )
            const description = generateTextLinks(`${changedDescription}. Гуманоид, хиты которого уменьшились до 0 от этого урона, умирает, и из его трупа выходит [тень](CREATURE:shadow) — нежить, действующая сразу после дракона по инициативе. Эта тень находится под контролем дракона.`)

            return {
              ...action,
              name: 'Тёмное дыхание',
              description,
            }
          }

          return action
        }
      ),
    },

    extendLimitations: {
      creatureIdList: [
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
      templateName: ['Драколич'],
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
]
