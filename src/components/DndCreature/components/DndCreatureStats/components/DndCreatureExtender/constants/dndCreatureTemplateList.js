import arrify from 'arrify'
import {
  faBrain,
  faBroom,
  faBug,
  faCandyCane,
  faDizzy,
  faGavel,
  faGem,
  faHandMiddleFinger,
  faHatWizard,
  faMagic,
  faMehBlank,
  faMusic,
  faPills,
  faRobot,
  faSkullCrossbones,
  faSpider,
  faSwimmer,
  faTree,
  faUserFriends,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'

import generateTextLinks from '@/utils/generateTextLinks'

import {
  SIZE_GARGANTUA,
  SIZE_HUGE,
  SIZE_LARGE,
  SIZE_MEDIUM,
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
  CREATURE_TYPE_YUAN_TI,
  CREATURE_TYPE_YUGOLOTH,
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
  CREATURE_ARCANALOTH,
  CREATURE_BARBED_DEVIL,
  CREATURE_BEARDED_DEVIL,
  CREATURE_BLACK_DRAGON_WYRMLING,
  CREATURE_BLUE_DRAGON_WYRMLING,
  CREATURE_BLUE_SLAAD,
  CREATURE_BONE_DEVIL,
  CREATURE_BRASS_DRAGON_WYRMLING,
  CREATURE_BRONZE_DRAGON_WYRMLING,
  CREATURE_COPPER_DRAGON_WYRMLING,
  CREATURE_DEATH_SLAAD,
  CREATURE_DROW,
  CREATURE_DROW_ELITE_WARRIOR,
  CREATURE_DROW_PRIESTESS_OF_LOLTH,
  CREATURE_DUODRONE,
  CREATURE_DUST_MEPHIT,
  CREATURE_ERINYES,
  CREATURE_ETTERCAP,
  CREATURE_GIANT_LIZARD,
  CREATURE_GIANT_RAT,
  CREATURE_GOLD_DRAGON_WYRMLING,
  CREATURE_GRAY_OOZE,
  CREATURE_GRAY_SLAAD,
  CREATURE_GREEN_DRAGON_WYRMLING,
  CREATURE_GREEN_HAG,
  CREATURE_GREEN_SLAAD,
  CREATURE_HORNED_DEVIL,
  CREATURE_ICE_DEVIL,
  CREATURE_ICE_MEPHIT,
  CREATURE_IMP,
  CREATURE_MAGMA_MEPHIT,
  CREATURE_MEZZOLOTH,
  CREATURE_MIND_FLAYER,
  CREATURE_MONODRONE,
  CREATURE_MUD_MEPHIT,
  CREATURE_NIGHT_HAG,
  CREATURE_NYCALOTH,
  CREATURE_PENTADRONE,
  CREATURE_PIT_FIEND,
  CREATURE_PSEUDODRAGON,
  CREATURE_QUADRONE,
  CREATURE_QUASIT,
  CREATURE_RED_DRAGON_WYRMLING,
  CREATURE_RED_SLAAD,
  CREATURE_SATYR,
  CREATURE_SEA_HAG,
  CREATURE_SILVER_DRAGON_WYRMLING,
  CREATURE_SMOKE_MEPHIT,
  CREATURE_SPINED_DEVIL,
  CREATURE_STEAM_MEPHIT,
  CREATURE_SWARM_OF_INSECTS,
  CREATURE_THRI_KREEN,
  CREATURE_TREANT,
  CREATURE_TRIDRONE,
  CREATURE_TROLL,
  CREATURE_ULTROLOTH,
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
  LANG_TELEPATHY,
} from '@/constants/dnd/dndLanguageList'
import {
  SPELL_BESTOW_CURSE,
  SPELL_BLADE_WARD,
  SPELL_BLUR,
  SPELL_CLAIRVOYANCE,
  SPELL_CONFUSION,
  SPELL_CONTACT_OTHER_PLANE,
  SPELL_COUNTERSPELL,
  SPELL_DANCING_LIGHTS,
  SPELL_DETECT_MAGIC,
  SPELL_DISGUISE_SELF,
  SPELL_EYEBITE,
  SPELL_HALLUCINATORY_TERRAIN,
  SPELL_HOLD_PERSON,
  SPELL_IDENTIFY,
  SPELL_INVISIBILITY,
  SPELL_LIGHTNING_BOLT,
  SPELL_LOCATE_OBJECT,
  SPELL_MAGE_HAND,
  SPELL_MAGIC_WEAPON,
  SPELL_PHANTASMAL_KILLER,
  SPELL_POLYMORPH,
  SPELL_RAY_OF_SICKNESS,
  SPELL_SCRYING,
  SPELL_SENDING,
  SPELL_SHIELD,
  SPELL_SHOCKING_GRASP,
  SPELL_SLEEP,
  SPELL_TELEKINESIS,
  SPELL_WALL_OF_FORCE,
} from '@/constants/dnd/dndSpellList'
import {
  PC_CLASS_WIZARD,
} from '@/constants/dnd/dndPcClassList'
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
} from '@/constants/dnd/dndCrList'

import { dndCrCollection } from '@/constants/dnd/dndCrList'
import { GENDER_MIDDLE } from '@/constants/genderList'

import calcParamBonus from '@/utils/calcParamBonus'
import formatBonus from '@/utils/formatBonus'
import { CAST_NONE } from '@/constants/dnd/dndCastComponentList'
import { TARGET_CREATURE } from '@/constants/dnd/dndTargetList'

import enchantWeapon from './../utils/enchantWeapon'

import warhorseTemplateList from './warhorseTemplateList'

const giantLizardDescription = [
  {
    header: 'Вариант: Особенности гигантских ящериц',
    text: generateTextLinks(`У некоторых [гигантских ящериц](CREATURE:${CREATURE_GIANT_LIZARD}) есть одна или обе из следующих особенностей:\n
**Задержка дыхания.** Ящерица может задержать дыхание на 15 минут (ящерица с этой особенностью также обладает скоростью плавания 30 футов).\n
**Паучье лазание.** Ящерица может лазать по сложным поверхностям, включая потолки, без совершения проверок характеристик.`),
  },
]

const insectSwarmDescription = [
  {
    header: 'Вариант: Рои насекомых',
    text: generateTextLinks(`В рой могут собираться самые разные насекомые, и у каждого такого роя будут свои особые характеристики.
1. **Рой жуков.** Рой жуков получает скорость копания 5 футов.
2. **Рой многоножек.** Существо, хиты которого опускаются до 0 роем многоножек, остаётся стабилизированным, но отравленным на 1 час, даже если восстановит хиты, и пока оно отравлено из-за этого, оно ещё и парализовано.
3. **Рой ос.** Рой ос обладает скоростью ходьбы 5 футов, скоростью полёта 30 футов и не обладает скоростью лазания.
4. **Рой пауков.** Рой пауков обладает следующими особенностями:
**Паучье лазание.** Этот рой может лазать по сложным поверхностям, в том числе и вниз головой, по потолку, не совершая никаких проверок характеристик.
**Чувство паутины.** Находясь в контакте с паутиной, этот рой знает точное местоположение всех других существ, находящихся в контакте с той же паутиной.
**Хождение по паутине.** Этот рой игнорирует ограничения перемещения, вызванные паутиной.`),
  },
]

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
          CREATURE_TYPE_YUAN_TI,
          CREATURE_TYPE_YUGOLOTH,
        ],
      },
      exclude: {
        templateName: ['Теневой дракон'],
        swarmSizeType: [
          SIZE_GARGANTUA,
          SIZE_HUGE,
          SIZE_LARGE,
          SIZE_MEDIUM,
          SIZE_SMALL,
          SIZE_TINY,
        ],
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
        isBlindOutside: true,
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
  {
    templateName: 'Дьявол-призыватель',
    templateIcon: faUserPlus,

    templateLimitations: {
      include: {
        id: [
          CREATURE_BARBED_DEVIL,
          CREATURE_BEARDED_DEVIL,
          CREATURE_BONE_DEVIL,
          CREATURE_ERINYES,
          CREATURE_HORNED_DEVIL,
          CREATURE_ICE_DEVIL,
          CREATURE_PIT_FIEND,
        ],
      },
    },
    source: {
      id: 'MM',
      page: 142,
    },
    extendPropCollection: {
      description: [
        {
          header: 'Вариант: Призыв дьявола',
          text: generateTextLinks(`У некоторых дьяволов может быть действие, позволяющее им призывать других дьяволов.\n
**Призыв дьявола (1/день).** Дьявол выбирает, кого призвать, и пытается это сделать.\n
\n
* [Бородатый дьявол](CREATURE:${CREATURE_BEARDED_DEVIL}) получает 30% шанс призыва одного [бородатого дьявола](CREATURE:${CREATURE_BEARDED_DEVIL}).\n
* [Исчадие преисподней](CREATURE:${CREATURE_PIT_FIEND}) призывает 2к4 [бородатых дьявола](CREATURE:${CREATURE_BEARDED_DEVIL}), 1к4 [шипастых дьявола](CREATURE:${CREATURE_BARBED_DEVIL}) или одну [эринию](CREATURE:${CREATURE_ERINYES}) без шанса провала.\n
* [Костяной дьявол](CREATURE:${CREATURE_BONE_DEVIL}) получает 40% шанс призыва 2к6 [игольчатых дьяволов](CREATURE:${CREATURE_SPINED_DEVIL}) или одного [костяного дьявола](CREATURE:${CREATURE_BONE_DEVIL}).\n
* [Ледяной дьявол](CREATURE:${CREATURE_ICE_DEVIL}) получает 60% шанс призыва одного [ледяного дьявола](CREATURE:${CREATURE_ICE_DEVIL}).\n
* [Рогатый дьявол](CREATURE:${CREATURE_HORNED_DEVIL}) получает 30% шанс призыва одного [рогатого дьявола](CREATURE:${CREATURE_HORNED_DEVIL}).\n
* [Шипастый дьявол](CREATURE:${CREATURE_BARBED_DEVIL}) получает 30% шанс призыва одного [шипастого дьявола](CREATURE:${CREATURE_BARBED_DEVIL}).\n
* [Эриния](CREATURE:${CREATURE_ERINYES}) получает 50% шанс призыва 3к6 [игольчатых дьяволов](CREATURE:${CREATURE_SPINED_DEVIL}), 1к6 [бородатых дьяволов](CREATURE:${CREATURE_BEARDED_DEVIL}) или одной [эринии](CREATURE:${CREATURE_ERINYES}).\n
\n
Призванный дьявол появляется в свободном пространстве в пределах 60 футов от призывателя, и действует как его союзник, не имеющий способности призывать дьяволов. Он помогает в течение 1 минуты или пока призыватель не умрёт или действием его не отпустит.`),
        },
      ],
    },

    editPropCollection: {
      name: ({ name }) => name.replace(/(дьявол|Эриния|Исчадие)/, '$1-призыватель'),
      actionList: ({ id, name, actionList }) => {
        let preText = ``

        switch (id) {
          case CREATURE_BARBED_DEVIL:
            preText = `Шипастый дьявол пытается призвать одного [шипастого дьявола](CREATURE:${CREATURE_BARBED_DEVIL}) с шансом 30%.`
            break

          case CREATURE_BEARDED_DEVIL:
            preText = `Бородатый дьявол пытается призвать одного [бородатого дьявола](CREATURE:${CREATURE_BEARDED_DEVIL}) с шансом 30%.`
            break

          case CREATURE_BONE_DEVIL:
            preText = `Костяной дьявол выбирает, кого призвать, и пытается это сделать с шансом 30%.\n
 * 2к6 [игольчатых дьяволов](CREATURE:${CREATURE_SPINED_DEVIL})
 * одного [костяного дьявола](CREATURE:${CREATURE_BONE_DEVIL})`
            break

          case CREATURE_ERINYES:
            preText = `Эриния выбирает, кого призвать, и пытается это сделать с шансом 50%.\n
* 3к6 [игольчатых дьяволов](CREATURE:${CREATURE_SPINED_DEVIL})
* 1к6 [бородатых дьяволов](CREATURE:${CREATURE_BEARDED_DEVIL})
* одну [эринию](CREATURE:${CREATURE_ERINYES})`
            break

          case CREATURE_HORNED_DEVIL:
            preText = `Рогатый дьявол пытается призвать одного [рогатого дьявола](CREATURE:${CREATURE_HORNED_DEVIL}) с шансом 30%.`
            break

          case CREATURE_ICE_DEVIL:
            preText = `Ледяной дьявол пытается призвать одного [ледяного дьявола](CREATURE:${CREATURE_ICE_DEVIL}) с шансом 60%.`
            break

          case CREATURE_PIT_FIEND:
            preText = `Исчадие преисподней выбирает, кого призвать, и пытается это сделать без шанса провала.\n
* 2к4 [бородатых дьявола](CREATURE:${CREATURE_BEARDED_DEVIL})
* 1к4 [шипастых дьявола](CREATURE:${CREATURE_BARBED_DEVIL})
* одну [эринию](CREATURE:${CREATURE_ERINYES})`
            break
        }

        return [
          ...actionList,
          {
            name: 'Призыв дьявола',
            description: generateTextLinks(`${preText}\n
Призванный дьявол появляется в свободном пространстве в пределах 60 футов от призывателя, и действует как его союзник, не имеющий способности призывать дьяволов. Он помогает в течение 1 минуты или пока призыватель не умрёт или действием его не отпустит.`),
            limit: {
              count: 1,
              period: 'день',
            },
          },
        ]
      },
    },
  },
  {
    templateName: 'Костяной дьявол c копьём',
    templateIcon: faCandyCane,

    templateLimitations: {
      include: {
        id: [
          CREATURE_BONE_DEVIL,
        ],
      },
    },
    source: {
      id: 'MM',
      page: 148,
    },
    extendPropCollection: {
      description: [
        {
          header: 'Вариант: Копья костяных дьяволов',
          text: generateTextLinks(`
Некоторые [костяные дьяволы](CREATURE:${CREATURE_BONE_DEVIL}) обладают следующими вариантами действий:\n
**Мультиатака.** Дьявол совершает две атаки: одну гвизармой, и одну жалом.\n
**Гвизарма.** Рукопашная атака оружием: +8 к попаданию, досягаемость 10 фт., одна цель. Попадание: Колющий урон 17 (2к12 + 4). Если цель — существо с размером не больше Огромного, оно становится схваченным (Сл высвобождения 14). Пока цель схвачена, дьявол не может использовать свою гвизарму против другой цели.`),
        },
      ],
      actionList: [
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

    editPropCollection: {
      name: ({ name }) => name.replace('дьявол', 'дьявол c копьём'),
      actionList: ({ actionList }) => actionList.map(
        action => action.name === 'Мультиатака'
          ? {
            ...action,
            description: `Дьявол совершает три атаки: две когтями, и одну жалом. Он может совершить одну атаку гвизармой вместо двух атак когтями`,
          }
          : action
      ),
    },
  },
  {
    templateName: 'Ледяной дьявол c копьём',
    templateIcon: faCandyCane,

    templateLimitations: {
      include: {
        id: [
          CREATURE_ICE_DEVIL,
        ],
      },
    },
    source: {
      id: 'MM',
      page: 149,
    },
    extendPropCollection: {
      description: [
        {
          header: 'Вариант: Копья ледяных дьяволов',
          text: generateTextLinks(`Некоторые [ледяные дьяволы](CREATURE:${CREATURE_ICE_DEVIL}) обладают следующими вариантами действий:\n
**Мультиатака.** Дьявол совершает две атаки: одну ледяным копьём, и одну хвостом.\n
**Ледяное копьё.** Рукопашная атака оружием: +10 к попаданию, досягаемость 10 фт., одна цель. Попадание: Колющий урон 14 (2к8 + 5) плюс урон холодом 10 (3к6). Если цель — существо, она должна преуспеть в спасброске Телосложения со Сл 15, иначе её скорость на 1 минуту снижается на 10 футов; в каждом своём ходу она сможет совершать либо действие, либо бонусное действие, но не то и другое; и оно не может совершать реакции. Цель может повторять спасбросок в конце каждого своего хода, при успехе завершая этот эффект на себе.`),
        },
      ],
      actionList: [
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

    editPropCollection: {
      name: ({ name }) => name.replace('дьявол', 'дьявол c копьём'),
      actionList: ({ actionList }) => actionList.map(
        action => action.name === 'Мультиатака'
          ? {
            ...action,
            description: `Дьявол совершает две атаки: одну ледяным копьём и одну хвостом. Он может совершить одну атаку укусом и одну когтями вместо атаки ледяным копьём.`,
          }
          : action
      ),
    },
  },
  {
    templateName: 'Бес-фамильяр',
    templateIcon: faUserFriends,

    templateLimitations: {
      include: {
        id: [
          CREATURE_IMP,
        ],
      },
    },
    source: {
      id: 'MM',
      page: 143,
    },
    extendPropCollection: {
      description: [
        {
          header: 'Вариант: Фамильяр бес',
          text: generateTextLinks(`Бывает, что [бесы](CREATURE:${CREATURE_IMP}) состоят на службе у смертных заклинателей, помогая им как советники, шпионы или фамильяры. Бес подталкивает хозяина к совершению злых поступков, зная, что в результате душа смертного может достаться ему. Бесы демонстрируют необыкновенную верность своим хозяевам, и могут быть довольно опасными, если хозяину что-то угрожает. У некоторых из таких бесов имеется следующая особенность:\n
**Фамильяр.** Бес может служить другому существу фамильяром, создав телепатическую связь с желающим того хозяином. Пока они связаны, хозяин может ощущать то же, что и бес, пока они находятся в пределах мили друг от друга. Пока бес находится в пределах 10 футов от хозяина, на хозяина распространяется особенность беса _Сопротивление магии_. Если хозяин нарушит условия договора с бесом, последний может прекратить службу, оборвав телепатическую связь. `),
        },
      ],
      featureList: [
        {
          name: 'Фамильяр',
          description: `Бес может служить другому существу фамильяром, создав телепатическую связь с желающим того хозяином. Пока они связаны, хозяин может ощущать то же, что и бес, пока они находятся в пределах мили друг от друга. Пока бес находится в пределах 10 футов от хозяина, на хозяина распространяется особенность беса Сопротивление магии. Если хозяин нарушит условия договора с бесом, последний может прекратить службу, оборвав телепатическую связь.`,
        },
      ],
    },

    editPropCollection: {
      name: ({ name }) => name.replace('Бес', 'Бес-фамильяр'),
    },
  },
  {
    templateName: 'Квазит-фамильяр',
    templateIcon: faUserFriends,

    templateLimitations: {
      include: {
        id: [
          CREATURE_QUASIT,
        ],
      },
    },
    extendPropCollection: {
      description: [
        {
          header: 'Вариант: Фамильяр квазит',
          text: generateTextLinks(`Смертные заклинатели, которые хотят фамильяра с другого плана, считают [квазита](CREATURE:${CREATURE_QUASIT}) лёгким для призыва и служения. Квазиты — раболепные слуги. Они великолепно служат своим хозяевам, подвигая смертных на всё большее зло и хаос. Такие квазиты обладают следующей особенностью:\n
**Фамильяр.** Квазит может служить другому существу фамильяром, создав телепатическую связь с желающим того хозяином. Пока они связаны, хозяин может ощущать то же, что и квазит, пока они находятся в пределах мили друг от друга. Пока квазит находится в пределах 10 футов от хозяина, на хозяина распространяется особенность квазита Сопротивление магии. В любое время и по любой причине квазит может прекратить службу, оборвав телепатическую связь.`),
        },
      ],
      featureList: [
        {
          name: 'Фамильяр',
          description: `Квазит может служить другому существу фамильяром, создав телепатическую связь с желающим того хозяином. Пока они связаны, хозяин может ощущать то же, что и квазит, пока они находятся в пределах мили друг от друга. Пока квазит находится в пределах 10 футов от хозяина, на хозяина распространяется особенность квазита _Сопротивление магии_. В любое время и по любой причине квазит может прекратить службу, оборвав телепатическую связь.`,
        },
      ],
    },

    editPropCollection: {
      name: ({ name }) => name.replace('Квазит', 'Квазит-фамильяр'),
    },
  },
  {
    templateName: 'Псевдодракон-фамильяр',
    templateIcon: faUserFriends,

    templateLimitations: {
      include: {
        id: [
          CREATURE_PSEUDODRAGON,
        ],
      },
    },
    extendPropCollection: {
      description: [
        {
          header: `Вариант: Фамильяр псевдодракон`,
          text: generateTextLinks(`Некоторые [псевдодраконы](CREATURE:${CREATURE_PSEUDODRAGON}) желают служить заклинателям в качестве фамильяра. Такие псевдодраконы обладают следующей особенностью:\n
  **Фамильяр.** Псевдодракон может служить другому существу фамильяром, создав магическую телепатическую связь с желающим того хозяином. Пока они связаны, хозяин может ощущать то же, что и псевдодракон, пока они находятся в пределах мили друг от друга. Пока псевдодракон находится в пределах 10 футов от хозяина, на хозяина распространяется особенность псевдодракона _Сопротивление магии_. В любое время и по любой причине псевдодракон может прекратить службу, оборвав телепатическую связь.`),
        }
      ],
      featureList: [
        {
          name: 'Фамильяр',
          description: `Псевдодракон может служить другому существу фамильяром, создав магическую телепатическую связь с желающим того хозяином. Пока они связаны, хозяин может ощущать то же, что и псевдодракон, пока они находятся в пределах мили друг от друга. Пока псевдодракон находится в пределах 10 футов от хозяина, на хозяина распространяется особенность псевдодракона _Сопротивление магии_. В любое время и по любой причине псевдодракон может прекратить службу, оборвав телепатическую связь.`,
        },
      ],
    },

    editPropCollection: {
      name: ({ name }) => name.replace('Псевдодракон', 'Псевдодракон-фамильяр'),
    },
  },
  {
    templateName: 'Карга в шабаше',
    templateIcon: faBroom,

    templateLimitations: {
      include: {
        id: [
          CREATURE_GREEN_HAG,
          CREATURE_SEA_HAG,
          CREATURE_NIGHT_HAG,
        ],
      },
    },

    extendPropCollection: {
      description: [
        {
          header: 'Шабаш карг',
          text: `Когда нужно работать сообща, несмотря на эгоизм, карги собираются в шабаши. В шабаш могут входить разные ведьмы, в нём они считаются равными. Тем не менее, каждая жаждет личной власти.\n
Шабаш — это три карги, и конфликт между двумя всегда может решить третья. Если встречается больше трёх карг, например, когда возникает конфликт между несколькими шабашами, всё погружается в хаос.`,
        },
      ],
      featureList: [
        {
          name: 'Глаз карги',
          description: `Шабаш может создать магический предмет, называемый _глазом карги_, который делают из настоящего глаза, покрытого лаком, подвешенного на манер кулона. Обычно глаз доверяют помощнику, для сохранения и переноски. Карга в шабаше может действием посмотреть через этот глаз, если он находится на одном с ней плане. У _глаза карги_ КД 10, 1 хит и тёмное зрение в радиусе 60 футов. Если его разрушить, все члены шабаша получают 3к10 психического урона и становятся ослеплёнными на 24 часа.\n
У шабаша может быть только один _глаз_ одновременно, и создание нового требует проведения ритуала всеми тремя участницами. Ритуал занимает 1 час, и карги не смогут совершить его, будучи слепыми. Если во время совершения ритуала какая-нибудь карга совершает любое лишнее действие, шабаш должен начинать ритуал заново.`,
        },
      ],
    },

    editPropCollection: {
      name: ({ name }) => name.replace('арга', `арга в шабаше`),
      cr: ({ id, cr }) => {
        switch (id) {
          case CREATURE_GREEN_HAG:
            return CR_5
          case CREATURE_SEA_HAG:
            return CR_4
          case CREATURE_NIGHT_HAG:
            return CR_7
          default:
            return cr
        }
      },
      spellCastTogether: ({ params }) => {
        const intBonus = calcParamBonus(params[PARAM_INT])
        const saveThrowDc = 12 + intBonus
        const spellAttackBonus = formatBonus(4 + intBonus)

        return {
          title: 'Совместное колдовство',
          preText: `Если все три представительницы шабаша находятся в пределах 30 футов друг от друга, каждая может накладывать следующие заклинания из списка волшебника, но ячейки заклинаний у них общие на всех.`,
          postText: `При накладывании этих заклинаний карга считается заклинателем 12 уровня, использующим Интеллект в качестве базовой характеристики. Её Сл спасброска от заклинания ${saveThrowDc}, ${spellAttackBonus} к попаданию атаками заклинаниями.`,
          spellIdList: [
            SPELL_BESTOW_CURSE,
            SPELL_CONTACT_OTHER_PLANE,
            SPELL_COUNTERSPELL,
            SPELL_EYEBITE,
            SPELL_HOLD_PERSON,
            SPELL_IDENTIFY,
            SPELL_LIGHTNING_BOLT,
            SPELL_LOCATE_OBJECT,
            SPELL_PHANTASMAL_KILLER,
            SPELL_POLYMORPH,
            SPELL_RAY_OF_SICKNESS,
            SPELL_SCRYING,
          ],
          slotCountList: [0, 4, 3, 3, 3, 2, 1],
        }
      },
    },
  },
  {
    templateName: 'Сатир с панфлейтой',
    templateIcon: faMusic,

    templateLimitations: {
      include: {
        id: [
          CREATURE_SATYR,
        ],
      },
    },
    extendPropCollection: {
      description: [
        {
          header: 'Вариант: Панфлейта сатира',
          text: generateTextLinks(`Сатир может носить панфлейту, на которой он может играть, чтобы создать магические воздействия. Обычно в группе один сатир носит такую флейту. Если у сатира есть такая, он получает следующее дополнительное действие:\n
**Панфлейта.** Сатир играет на панфлейте и выбирает один из следующих магических эффектов: нежная колыбельная, пугающий аккорд или чарующая мелодия. Все существа в пределах 60 футов от него, слышащие флейту, должны преуспеть в спасброске Мудрости со Сл 13, иначе они попадают под действие описанного ниже эффекта. Другие сатиры и существа, которых нельзя очаровать, не попадают под действие эффекта.\n
Попавшее под эффект существо может повторять спасбросок в конце каждого своего хода, оканчивая на себе эффект при успехе. Если спасбросок существа успешен, или эффект закончился для него, то оно получает иммунитет к этой панфлейте на 24 часа.\n
_Нежная колыбельная._ Существо засыпает и лишается сознания на 1 минуту. Эффект заканчивается, если существо получает урон, или если кто-то действием разбудит его.\n
_Пугающий аккорд._ Существо испугано в течение 1 минуты.\n
_Чарующая мелодия._ Существо становится очарованным сатиром на 1 минуту. Если сатир или кто-то из его спутников причиняет вред существу, эффект на нём немедленно заканчивается.`),
        },
      ],
      actionList: [
        {
          name: 'Панфлейта',
          description: `Сатир играет на панфлейте и выбирает один из следующих магических эффектов: нежная колыбельная, пугающий аккорд или чарующая мелодия. Все существа в пределах 60 футов от него, слышащие флейту, должны преуспеть в спасброске Мудрости со Сл 13, иначе они попадают под действие описанного ниже эффекта. Другие сатиры и существа, которых нельзя очаровать, не попадают под действие эффекта.\n
Попавшее под эффект существо может повторять спасбросок в конце каждого своего хода, оканчивая на себе эффект при успехе. Если спасбросок существа успешен, или эффект закончился для него, то оно получает иммунитет к этой панфлейте на 24 часа.\n
* _Нежная колыбельная._ Существо засыпает и лишается сознания на 1 минуту. Эффект заканчивается, если существо получает урон, или если кто-то действием разбудит его.\n
* _Пугающий аккорд._ Существо испугано в течение 1 минуты.\n
* _Чарующая мелодия._ Существо становится очарованным сатиром на 1 минуту. Если сатир или кто-то из его спутников причиняет вред существу, эффект на нём немедленно заканчивается.`,
        },
      ],
    },

    editPropCollection: {
      name: ({ name }) => name.replace('Сатир', 'Сатир c панфлейтой'),
    },
  },
  {
    templateName: 'Свежеватель разума заклинатель',
    templateIcon: faHatWizard,
    cr: CR_8,

    templateLimitations: {
      include: {
        id: [
          CREATURE_MIND_FLAYER,
        ],
      },
    },

    extendPropCollection: {
      description: [
        {
          header: 'Вариант: Свежеватель разума заклинатель',
          text: `Некоторые свежеватели разума дополняют свою псионическую силу магическими заклинаниями. Однако другие иллитиды воспринимают их как психически больных и стараются избегать. Свежеватель разума заклинатель обладает показателем опасности 8 (3900 опыта) и имеет следующую особенность:\n
**Использование заклинаний.** Свежеватель разума является заклинателем 10 уровня. Его базовой характеристикой является Интеллект (Сл спасброска от заклинания 15, +7 к попаданию атаками заклинаниями). У него подготовлены следующие заклинания волшебника:\n
Заговоры (неограниченно): _Волшебная рука_ (Mage hand), _Защита от оружия_ (Blade ward), _Пляшущие огоньки_ (Dancing lights), _Электрошок_ (Shocking grasp)\n
* 1 уровень (4 ячейки): _Маскировка_ (Disguise self), _Обнаружение магии_ (Detect magic), _Усыпление_ (Sleep), _Щит_ (Shield)\n
* 2 уровень (3 ячейки): _Размытый образ_ (Blur), _Луч слабости_ (Ray of enfeeblement), _Невидимость_ (Invisibility)\n
* 3 уровень (3 ячейки): _Молния_ (Lightning bolt), _Подсматривание_ (Clairvoyance), _Послание_ (Sending)\n
* 4 уровень (3 ячейки): _Мираж_ (Hallucinatory terrain), _Смятение_ (Confusion)\n
* 5 уровень (2 ячейки): _Силовая стена_ (Wall of force), _Телекинез_ (Telekinesis)`,
        },
      ],
      spellCast: [
        {
          spellCasterLevel: 10,
          spellCasterClass: PC_CLASS_WIZARD,
          baseStat: PARAM_INT,
          spellAttackBonus: 7,
          saveThrowDc: 15,
          spellIdList: [
            SPELL_MAGE_HAND,
            SPELL_BLADE_WARD,
            SPELL_DANCING_LIGHTS,
            SPELL_SHOCKING_GRASP,
            SPELL_DISGUISE_SELF,
            SPELL_DETECT_MAGIC,
            SPELL_SLEEP,
            SPELL_SHIELD,
            SPELL_BLUR,
            SPELL_RAY_OF_SICKNESS,
            SPELL_INVISIBILITY,
            SPELL_LIGHTNING_BOLT,
            SPELL_CLAIRVOYANCE,
            SPELL_SENDING,
            SPELL_HALLUCINATORY_TERRAIN,
            SPELL_CONFUSION,
            SPELL_WALL_OF_FORCE,
            SPELL_TELEKINESIS,
          ],
          slotCountList: [
            Infinity,
            4,
            3,
            3,
            3,
            2,
          ],
        },
      ],
    },

    editPropCollection: {
      name: ({ name }) => name.replace('Свежеватель разума', `Свежеватель разума заклинатель`),
    },
  },
  {
    templateName: 'Слаад с камнем управления',
    templateIcon: faGem,

    note: {
      text: `В мозгу слаада покоится магический камень. Завладейте им, и слаад окажется полностью в в вашем распоряжении`,
    },

    templateLimitations: {
      include: {
        id: [
          CREATURE_RED_SLAAD,
          CREATURE_GREEN_SLAAD,
          CREATURE_BLUE_SLAAD,
          CREATURE_GRAY_SLAAD,
          CREATURE_DEATH_SLAAD,
        ],
      },
    },
    extendPropCollection: {
      description: [
        {
          header: 'Вариант: Камни управления',
          text: generateTextLinks(`Слаады, родившиеся из Нерестильного камня, уже носят в голове магический камень, который является частичкой Нерестового камня. Этот камень принимает вид магического драгоценного камня, соизмеримого по размерам с кулаком ребёнка. Цвет камня такой же, как и цвет слаада. Другое существо может с помощью магии вытащить камень и использовать его для подчинения слаада. Слаад обязан подчинятся владельцу камня. Если камень уничтожить, этого слаада уже не подчинить таким способом.\n
Слаады, рождённые не от Нерестильного камня, не имеют камня в своём мозгу, но после контакта с Нерестильным камнем он появляется в их головах. Слаады, попавшие в Лимбо, притягиваются к Нерестильному камню, поэтому каждый из них рано или поздно получит его. Слаады с камнем управления в мозгу обладают дополнительной особенностью:\n
**Камень управления.** В мозгу этого слаада покоится магический камень управления. Слаад должен подчиняться тому, кто завладеет этим камнем, а также обладает иммунитетом к очарованию, когда находится под контролем.\n
Некоторые заклинания могут помочь заполучить этот камень. Если слаад провалил спасбросок от _Заточения_ (Imprisonment), заклинание переносит камень в открытую руку заклинателя, вместо того чтобы сковать слаада. Заклинание _Исполнение желаний_ (Wish), наложенное в присутствии слаада, тоже может дать возможность забрать камень.\n
Заклинание _Высшее восстановление_ (Greater restoration), наложенное на слаада, уничтожает камень, не причиняя вреда слааду.\n
Персонаж, владеющий навыком Мудрость (Медицина) может изъять камень из недееспособного слаада. Каждая попытка требует 1 минуту времени непрерывной работы и успешной проверки Мудрости (Медицина) со Сл 20. Каждый провал причиняет слааду урон психической энергией 22 (4к10).`),
        },
      ],
      featureList: [
        {
          name: 'Камень управления',
          description: generateTextLinks(`В мозгу этого слаада покоится магический камень управления. Слаад должен подчиняться тому, кто завладеет этим камнем, а также обладает иммунитетом к очарованию, когда находится под контролем.\n
Некоторые заклинания могут помочь заполучить этот камень. Если слаад провалил спасбросок от _Заточения_ (Imprisonment), заклинание переносит камень в открытую руку заклинателя, вместо того чтобы сковать слаада. Заклинание _Исполнение желаний_ (Wish), наложенное в присутствии слаада, тоже может дать возможность забрать камень.\n
Заклинание _Высшее восстановление_ (Greater restoration), наложенное на слаада, уничтожает камень, не причиняя вреда слааду.\n
Персонаж, владеющий навыком Мудрость (Медицина) может изъять камень из недееспособного слаада. Каждая попытка требует 1 минуту времени непрерывной работы и успешной проверки Мудрости (Медицина) со Сл 20. Каждый провал причиняет слааду урон психической энергией 22 (4к10).`),
        },
      ],
    },

    editPropCollection: {
      name: ({ name }) => name.replace('слаад', 'слаад c камнем управления'),
    },
  },
  {
    templateName: 'Психическая серая слизь',
    templateIcon: faBrain,

    templateLimitations: {
      include: {
        id: [
          CREATURE_GRAY_OOZE,
        ],
      },
    },
    extendPropCollection: {
      params: {
        [PARAM_INT]: 6,
      },
      description: [
        {
          header: 'Вариант: Психическая серая слизь',
          text: generateTextLinks(`[Серая слизь](CREATURE:${CREATURE_GRAY_OOZE}), прожившая достаточно долго, эволюционирует до более разумного состояния и развивает в себе ограниченные псионические способности. Чаще всего это происходит с серой слизью, живущей рядом с существами, обладающими псионическими способностями, такими как иллитиды, а это означает, что слизь чувствует и имитирует псионические способности.\n
Псионическая серая слизь имеет Интеллект 6 (−2) и следующее дополнительное действие:\n
**Психическое сдавливание (перезарядка 5–6).** Слизь нацеливается на одно существо, которое чувствует в пределах 60 футов от себя. Цель должна совершить спасбросок Интеллекта со Сл 10, получая урон психической энергией 10 (3к6) при провале или половину при успехе. `),
        },
      ],
      actionList: [
        {
          name: 'Психическое сдавливание',
          restore: {
            from: 5,
            to: 6,
          },
          description: `Слизь нацеливается на одно существо, которое чувствует в пределах 60 футов от себя. Цель должна совершить спасбросок Интеллекта со Сл 10, получая урон психической энергией 10 (3к6) при провале или половину при успехе.`,
        },
      ],
    },

    editPropCollection: {
      name: () => 'Психическая серая слизь',
    },
  },
  {
    templateName: 'Оживлённое дерево',
    templateIcon: faTree,
    templateLimitations: {
      include: {
        id: [
          CREATURE_TREANT,
        ],
      },
    },

    name: 'Оживлённое дерево',

    languageList: null,
    genderId: GENDER_MIDDLE,

    extendPropCollection: {
      params: {
        [PARAM_INT]: 1,
        [PARAM_CHA]: 1,
      },
      description: [
        {
          header: `Оживление деревьев`,
          text: generateTextLinks(`[Трент](CREATURE:${CREATURE_TREANT}) магическим образом оживляет до двух деревьев, которые видит в пределах 60 футов от себя. Деревья обладают статистикой трента, за исключением того, что у них Интеллект 1 и Харизма 1, они не могут говорить, и у них только один вариант действия — Размашистый удар. Оживлённые деревья действуют как союзники трента. Дерево перестаёт быть живым через 1 день, когда умирает, когда трент умирает или отдаляется от него более чем на 120 футов, а также когда трент бонусным действием снова делает его неживым. Став снова неживым, дерево, при возможности, пускает корни.`),
        },
      ],
    },

    editPropCollection: {
      actionList: ({actionList}) => actionList.filter(
        ({name}) => !['Мультиатака', 'Камень', 'Оживление деревьев'].includes(name)
      ),
    },
  },
  {
    templateName: 'Три-кин с оружием',
    templateIcon: faGavel,
    templateLimitations: {
      include: {
        id: [
          CREATURE_THRI_KREEN,
        ],
      },
    },

    name: 'Три-кин с оружием',

    extendPropCollection: {
      description: [
        {
          header: `Вариант: Оружие три-кринов`,
          text: generateTextLinks(`Некоторые [три-крины](CREATURE:${CREATURE_THRI_KREEN}) используют особое воинское оружие. Гитка это двуручное древковое оружие с клинками на каждом конце. Чаткча это плоское оружие с тремя треугольными лезвиями (лёгкое метательное оружие).\n
Три-крин, вооружённый гиткой и чаткчей, получает следующие варианты действий:\n
**Мультиатака.** Три-крин совершает две атаки гиткой или две атаки чаткчей.\n
**Гитка.** Рукопашная атака оружием: +3 к попаданию, досягаемость 5 фт., одна цель. Попадание: Рубящий урон 5 (1к8 + 1).\n
**Чаткча.** Дальнобойная атака оружием: +4 к попаданию, дистанция 30/120 фт., одна цель. Попадание: Рубящий урон 5 (1к6 + 2).`),
        },
      ],
      actionList: [
        {
          name: `Гитка`,
          attack: {
            type: ACTION_MELEE_WEAPON_ATTACK,
            bonus: 3,
            range: 5,
            target: 1,
            hit: {
              type: DAMAGE_SLASHING,
              cubeCount: 1,
              cubeType: 8,
              cubeBonus: 1,
            },
          },
        },
        {
          name: `Чаткча`,
          attack: {
            type: ACTION_RANGE_WEAPON_ATTACK,
            bonus: 4,
            range: {
              normal: 30,
              max: 120,
            },
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
    },

    editPropCollection: {
      actionList: ({actionList}) => actionList.map(
        item => item.name === 'Мультиатака'
          ? {
            ...item,
            description: `Три-крин совершает две атаки гиткой или две атаки чаткчей или одну укусом, и одну когтями.`,
          }
          : item
      ),
    },
  },
  {
    templateName: 'Три-кин с псионикой',
    templateIcon: faBrain,
    templateLimitations: {
      include: {
        id: [
          CREATURE_THRI_KREEN,
        ],
      },
    },

    name: 'Три-кин с псионикой',
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
            count: 2,
            period: 'день',
          },
          list: [
            SPELL_MAGIC_WEAPON,
            SPELL_BLUR,
          ],
        },
        {
          limit: {
            count: 2,
            period: 'день',
          },
          list: [
            {
              id: SPELL_INVISIBILITY,
              comment: 'только на себя',
            },
          ],
        },
      ],
    },

    extendPropCollection: {
      description: [
        {
          header: `Вариант: Псионика три-кринов`,
          text: generateTextLinks(`У некоторых [три-кринов](CREATURE:${CREATURE_THRI_KREEN}) есть псионические способности, помогающие им охотиться и общаться с чужаками.\n
У псионического три-крина есть телепатия с радиусом 60 футов и следующая дополнительная особенность:\n
**Врождённое колдовство (псионика).** Базовой характеристикой три-крина является Мудрость. Три-крин может накладывать следующие заклинания, не нуждаясь ни в каких компонентах:\n
* Неограниченно: _Волшебная рука_ (Mage hand) (рука невидима)\n
* 2/день каждое: _Магическое оружие_ (Magic weapon), _Размытый образ_ (Blur)\n
* 1/день: _Невидимость_ (Invisibility) (только на себя)`),
        },
      ],
      languageList: [
        {
          id: LANG_TELEPATHY,
          range: 60,
        },
      ],
    },
  },
  {
    templateName: 'Отвратительные конечности',
    templateIcon: faHandMiddleFinger,
    templateLimitations: {
      include: {
        id: [
          CREATURE_TROLL,
        ],
      },
    },

    name: 'Тролль с отвратительными конечностями',

    extendPropCollection: {
      featureList: [
        {
          name: `Отвратительные конечности`,
          description: `Если тролль получает за раз как минимум 15 рубящего урона, бросьте к20, чтобы определить дополнительный эффект:\n
* **1–10:** Ничего не происходит.\n
* **11–14:** У тролля отрублена одна нога, если у него оставалась хотя бы одна.\n
* **15–18:** У тролля отрублена одна рука, если у него оставалась хотя бы одна.\n
* **19–20:** Тролль обезглавлен, но умирает только если не может регенерировать. Если он умирает, то умирает и голова.\n
Если тролль совершает короткий или продолжительный отдых, не прикрепляя к себе отрубленную конечность или голову, то на её месте отрастает новая. Отрубленная при этом умирает. До тех пор отрубленная часть тролля действует с такой же инициативой как у тролля, и у неё есть собственное действие и собственное перемещение. У отрубленной части КД 13, 10 хитов и особенность Регенерация как у тролля.\n
**Отрубленная нога** не может атаковать, и у неё скорость 5 футов.\n
У **отрубленной руки** скорость 5 футов, и она может совершить одну атаку когтями в свой ход, причём с помехой, если только тролль не видит и эту руку и её цель. При потере троллем руки он также теряет одну атаку когтями.\n
Если **отрублена голова**, тролль теряет атаку укусом и его туловище считается ослеплённым, если только голова не видит его. У отрубленной головы скорость 0 футов и особенность тролля Тонкий нюх. Она может совершить атаку укусом, но только если цель находится в её клетке.\n
Если тролль потерял ногу, его скорость снижается вдвое. Если обе ноги — он падает ничком. Если при этом у него есть руки, он может ползти. Если рука при этом осталась только одна, он по-прежнему может ползти, но скорость уменьшается вдвое. Без рук и без ног его скорость становится равной 0, и тролль не получает никаких бонусов к скорости.`,
        },
      ],
      description: [
        {
          header: `Вариант: Отвратительные конечности`,
          text: `У некоторых троллей есть следующая особенность:\n
**Отвратительные конечности.** Если тролль получает за раз как минимум 15 рубящего урона, бросьте к20, чтобы определить дополнительный эффект:\n
* **1–10:** Ничего не происходит.\n
* **11–14:** У тролля отрублена одна нога, если у него оставалась хотя бы одна.\n
* **15–18:** У тролля отрублена одна рука, если у него оставалась хотя бы одна.\n
* **19–20:** Тролль обезглавлен, но умирает только если не может регенерировать. Если он умирает, то умирает и голова.\n
Если тролль совершает короткий или продолжительный отдых, не прикрепляя к себе отрубленную конечность или голову, то на её месте отрастает новая. Отрубленная при этом умирает. До тех пор отрубленная часть тролля действует с такой же инициативой как у тролля, и у неё есть собственное действие и собственное перемещение. У отрубленной части КД 13, 10 хитов и особенность Регенерация как у тролля.\n
**Отрубленная нога** не может атаковать, и у неё скорость 5 футов.\n
У **отрубленной руки** скорость 5 футов, и она может совершить одну атаку когтями в свой ход, причём с помехой, если только тролль не видит и эту руку и её цель. При потере троллем руки он также теряет одну атаку когтями.\n
Если **отрублена голова**, тролль теряет атаку укусом и его туловище считается ослеплённым, если только голова не видит его. У отрубленной головы скорость 0 футов и особенность тролля Тонкий нюх. Она может совершить атаку укусом, но только если цель находится в её клетке.\n
Если тролль потерял ногу, его скорость снижается вдвое. Если обе ноги — он падает ничком. Если при этом у него есть руки, он может ползти. Если рука при этом осталась только одна, он по-прежнему может ползти, но скорость уменьшается вдвое. Без рук и без ног его скорость становится равной 0, и тролль не получает никаких бонусов к скорости.`,
        },
      ],
    },
  },
  {
    templateName: 'Дроу с магическими доспехами и оружием',
    templateIcon: faMagic,
    templateLimitations: {
      include: {
        id: [
          CREATURE_DROW,
          CREATURE_DROW_ELITE_WARRIOR,
          CREATURE_DROW_PRIESTESS_OF_LOLTH,
        ],
      },
    },

    extendPropCollection: {
      description: [
        {
          header: `Вариант: Дроу с магическими доспехами и оружием`,
          text: `Дроу часто носят магические доспехи и магическое оружие, которые при длительном воздействии солнечного света (от 1 часа и дольше) теряют бонусы улучшения.\n
* У [дроу](CREATURE:${CREATURE_DROW}), носящего кольчугу +1 и короткий меч +1, КД 19 и бонус +1 к броскам атаки и урона коротким мечом.\n
* У [элитного воина дроу](CREATURE:${CREATURE_DROW_ELITE_WARRIOR}), носящего проклёпанный кожаный доспех +2 и короткий меч +2, КД 20 и бонус +2 к броскам атаки и урону коротким мечом.\n
* У [дроу жрицы Лолс](CREATURE:${CREATURE_DROW_PRIESTESS_OF_LOLTH}), носящей чешуйчатый доспех +3, КД 19.`,
        },
      ],
    },

    editPropCollection: {
      name: ({ name, id }) => {
        switch (id) {
          case CREATURE_DROW:
          case CREATURE_DROW_ELITE_WARRIOR:
            return `${name} с магическими доспехами и оружием`

          case CREATURE_DROW_PRIESTESS_OF_LOLTH:
            return `${name} с магическими доспехами`

          default:
            return name
        }
      },
      armor: ({ armor, id }) => {
        switch (id) {
          case CREATURE_DROW:
            return {
              ac: 19,
              type: 'кольчуга +1',
            }

          case CREATURE_DROW_ELITE_WARRIOR:
            return {
              ac: 20,
              type: 'проклёпанный кожаный доспех +2',
            }

          case CREATURE_DROW_PRIESTESS_OF_LOLTH:
            return {
              ac: 19,
              type: 'чешуйчатый доспех +3',
            }

          default:
            return armor
        }
      },
      actionList: ({ actionList, id }) => {
        switch (id) {
          case CREATURE_DROW:
            return enchantWeapon({weaponName: 'Короткий меч', enchantBonus: 1, actionList})

          case CREATURE_DROW_ELITE_WARRIOR:
            return enchantWeapon({weaponName: 'Короткий меч', enchantBonus: 2, actionList})

          default:
            return actionList
        }
      },
    },
  },
  {
    templateName: 'Разновидность: Паутинная удавка',
    templateIcon: faSpider,
    templateLimitations: {
      include: {
        id: [
          CREATURE_ETTERCAP,
        ],
      },
    },

    extendPropCollection: {
      description: [
        {
          header: `Разновидность: Паутинная удавка`,
          text: `Некоторые эттеркапы любят душить жертву, используя удавку, созданную из тонких нитей паутины. Эттеркап с таким оружием получает описанный ниже вариант действия, которое использует вместо атаки когтями.\n
**Паутинная удавка.** Рукопашная атака оружием: +4 к попаданию, досягаемость 5 фт., одно Среднее или Маленькое существо, бросок атаки по которому эттеркап совершает с преимуществом. Попадание: Дробящий урон 4 (1к4 + 2), и цель становится схваченной (Сл. высвобождения 12). Пока цель схвачена, она не может дышать, и эттеркап совершает броски атаки по ней с преимуществом.`,
        },
      ],
    },

    editPropCollection: {
      name: ({ name }) => `${name} с паутинной удавкой`,
      actionList: ({ actionList }) => actionList.map(
        action => action.name === 'Когти'
          ? {
            name: 'Паутинная удавка',
            description: `Цель становится схваченной (Сл. высвобождения 12). Пока цель схвачена, она не может дышать, и эттеркап совершает броски атаки по ней с преимуществом.`,
            attack: {
              type: ACTION_MELEE_WEAPON_ATTACK,
              bonus: 4,
              range: 5,
              target: {
                count: 1,
                limit: {
                  type: TARGET_CREATURE,
                  size: [
                    SIZE_SMALL,
                    SIZE_MEDIUM,
                  ],
                  comment: `, бросок атаки по которому эттеркап совершает с преимуществом`,
                },
              },
              hit: {
                type: DAMAGE_BLUDGEONING,
                cubeCount: 1,
                cubeType: 4,
                cubeBonus: 0,
              },
            },
          }
          : action,
      ),
    },
  },
  {
    templateName: 'Юголот-призыватель',
    templateIcon: faUserPlus,

    templateLimitations: {
      include: {
        id: [
          CREATURE_ARCANALOTH,
          CREATURE_MEZZOLOTH,
          CREATURE_NYCALOTH,
          CREATURE_ULTROLOTH,
        ],
      },
    },
    source: {
      id: 'MM',
      page: 317,
    },
    extendPropCollection: {
      description: [
        {
          header: 'Вариант: Призыв юголотов',
          text: generateTextLinks(`У некоторых юголотов может быть действие, позволяющее им призывать других юголотов.\n
**Призыв юголота (1/день).** Юголот выбирает, кого призвать, и пытается это сделать.\n
\n
* [Арканалот](CREATURE:${CREATURE_ARCANALOTH}) получает 40% шанс призыва одного [арканалота](CREATURE:${CREATURE_ARCANALOTH}).\n
* [Меззолот](CREATURE:${CREATURE_MEZZOLOTH}) получает 30% шанс призыва одного [меззолота](CREATURE:${CREATURE_MEZZOLOTH}).\n
* [Никалот](CREATURE:${CREATURE_NYCALOTH}) получает 50% шанс призыва одного 1к4 [меззолотов](CREATURE:${CREATURE_MEZZOLOTH}) или одного [никалота](CREATURE:${CREATURE_NYCALOTH}).\n
* [Ультролот](CREATURE:${CREATURE_ULTROLOTH}) шанс призыва 1к6 [меззолотов](CREATURE:${CREATURE_MEZZOLOTH}), 1к4 [никалотов](CREATURE:${CREATURE_NYCALOTH}) или одного [ультролота](CREATURE:${CREATURE_ULTROLOTH}).\n
\n
Призванный юголот появляется в свободном пространстве в пределах 60 футов от призывателя, действует самостоятельно (кроме случая, когда призывающим был ультролот, так как в этом случае призванный юголот действует как его союзник), и не имеет способности призывать других юголотов. Призванный юголот существует в течение 1 минуты, или пока призыватель не умрёт или бонусным действием его не отпустит.`),
        },
      ],
    },

    editPropCollection: {
      name: ({ name }) => `${name}-призыватель`,
      actionList: ({ id, name, actionList }) => {
        let preText = ``
        let actionWayText = 'самостоятельно'

        switch (id) {
          case CREATURE_ARCANALOTH:
            preText = `${name} пытается призвать одного [арканалота](CREATURE:${CREATURE_ARCANALOTH}) с шансом 40%.`
            break

          case CREATURE_MEZZOLOTH:
            preText = `${name} пытается призвать одного [меззолота](CREATURE:${CREATURE_MEZZOLOTH}) с шансом 30%.`
            break

          case CREATURE_NYCALOTH:
            preText = `${name} выбирает, кого призвать, и пытается это сделать с шансом 50%.\n
 * 1к4 [меззолотов](CREATURE:${CREATURE_MEZZOLOTH})
 * одного [никалота](CREATURE:${CREATURE_NYCALOTH})`
            break

          case CREATURE_ULTROLOTH:
            preText = `${name} выбирает, кого призвать, и пытается это сделать без шанса провала.\n
* 1к6 [меззолотов](CREATURE:${CREATURE_MEZZOLOTH})
* 1к4 [никалотов](CREATURE:${CREATURE_NYCALOTH})
* одного [ультролота](CREATURE:${CREATURE_ULTROLOTH})`
            actionWayText = 'как его союзник'
            break
        }

        return [
          ...actionList,
          {
            name: 'Призыв юголота',
            description: generateTextLinks(`${preText}\n
Призванный юголот появляется в свободном пространстве в пределах 60 футов от призывателя, действует ${actionWayText}, и не имеет способности призывать других юголотов. Призванный юголот существует в течение 1 минуты, или пока призыватель не умрёт или бонусным действием его не отпустит.`),
            limit: {
              count: 1,
              period: 'день',
            },
          },
        ]
      },
    },
  },
  ...warhorseTemplateList,
  {
    templateName: 'Больная гигантская крыса',
    templateIcon: faPills,

    templateLimitations: {
      include: {
        id: [
          CREATURE_GIANT_RAT,
        ],
      },
    },

    extendPropCollection: {
      description: [
        {
          header: 'Вариант: Больные гигантские крысы',
          text: generateTextLinks(`Некоторые [гигантские крысы](CREATURE:${CREATURE_GIANT_RAT}) переносят болезни, распространяющиеся через укус. У больной гигантской крысы показатель опасности 1/8 (25 опыта) и описанное ниже действие вместо обычной атаки укусом.\n
**Укус.** Рукопашная атака оружием: +4 к попаданию, досягаемость 5 фт., одна цель. Попадание: Колющий урон 4 (1к4 + 2). Если цель — существо, она должна преуспеть в спасброске Телосложения со Сл 10, иначе заболеет. Пока болезнь не вылечена, цель не может восстанавливать хиты кроме как магией, и максимум её хитов уменьшается на 3 (1к6) каждые 24 часа. Если из-за этой болезни максимум хитов цели уменьшается до 0, она умирает.`),
        },
      ],
    },

    editPropCollection: {
      name: ({name}) => `Больная ${name.toLowerCase()}`,
      actionList: ({ actionList }) => actionList.map(
        action => action.name === 'Укус'
          ? {
            ...action,
            description: `Если цель — существо, она должна преуспеть в спасброске Телосложения со Сл 10, иначе заболеет. Пока болезнь не вылечена, цель не может восстанавливать хиты кроме как магией, и максимум её хитов уменьшается на 3 (1к6) каждые 24 часа. Если из-за этой болезни максимум хитов цели уменьшается до 0, она умирает.`,
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
          }
          : action,
      ),
    },
  },
  {
    templateName: 'Плавающая гигантская ящерица',
    templateIcon: faSwimmer,

    templateLimitations: {
      include: {
        id: [
          CREATURE_GIANT_LIZARD,
        ],
      },
    },

    extendPropCollection: {
      description: giantLizardDescription,
      speed: {
        [SPEED_SWIM]: 30,
      },
      featureList: [
        {
          name: 'Задержка дыхания',
          description: `Ящерица может задержать дыхание на 15 минут.`,
        },
      ],
    },

    editPropCollection: {
      name: ({name}) => `Плавающая ${name.toLowerCase()}`,
    },
  },
  {
    templateName: 'Лазающая гигантская ящерица',
    templateIcon: faSpider,

    templateLimitations: {
      include: {
        id: [
          CREATURE_GIANT_LIZARD,
        ],
      },
    },

    extendPropCollection: {
      description: giantLizardDescription,
      featureList: [
        {
          name: 'Паучье лазание',
          description: `Ящерица может лазать по сложным поверхностям, включая потолки, без совершения проверок характеристик.`,
        },
      ],
    },

    editPropCollection: {
      name: ({name}) => `Лазающая ${name.toLowerCase()}`,
    },
  },
  {
    templateName: 'Рой жуков',
    templateIcon: faBug,

    templateLimitations: {
      include: {
        id: [
          CREATURE_SWARM_OF_INSECTS,
        ],
      },
    },

    name: 'Рой жуков',

    extendPropCollection: {
      description: insectSwarmDescription,
      speed: {
        [SPEED_DIG]: 5,
      },
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
  .map(
    ({templateName, templateLimitations = {}, extendPropCollection = {}, ...rest}) => ({
      ...rest,
      templateName,
      extendPropCollection: {
        ...extendPropCollection,
        templateName,
      },
      templateLimitations: {
        ...templateLimitations,
        exclude: {
          ...templateLimitations.exclude,
          templateName,
        },
      },
    })
  )
