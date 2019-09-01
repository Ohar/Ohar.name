import {
  SIZE_MEDIUM,
  SIZE_LARGE,
  SIZE_SMALL,
  SIZE_TINY
} from '@/constants/dnd/dndSizeList'
import {
  CREATURE_TYPE_AARAKOCRA,
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
  CREATURE_TYPE_XVART,
  CREATURE_TYPE_YOAN_TI,
  CREATURE_TYPE_YUGOLOT
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
  ACTION_MELEE_OR_RANGE_WEAPON_ATTACK,
  ACTION_MELEE_SPELL_ATTACK,
  ACTION_RANGE_WEAPON_ATTACK,
  ACTION_RANGE_SPELL_ATTACK
} from '@/constants/dnd/dndActionTypeList'
import {
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
  PARAM_INT,
  PARAM_WIT,
  PARAM_CHA
} from '@/constants/dnd/dndParamList'
import {
  CONDITION_BLINDED,
  CONDITION_CHARMED,
  CONDITION_FRIGHTENED,
  CONDITION_PARALYZED
} from '@/constants/dnd/dndConditionList'

// TODO
// Он теряет все действия кроме
// Мультиатаки и рукопашных атак оружием, причиня-
// ющих дробящий, колющий или рубящий урон. Если
// у него есть действие или рукопашная атака оружи-
// ем, которая причиняет урон другого вида, он теряет
// способность причинять урон этого вида, если только
// урон не исходит от какого-то снаряжения, например,
// магического предмета
// Атаки. Если слуга не обладает иными возмож-
// ностями причинения урона, он может использовать
// свои кулаки и конечности для совершения невоору-
// жённых ударов. При попадании невооружённый удар
// причиняет дробящий урон 1к4 + модификатор Силы
// слуги, или, если слуга Большого размера, то 2к4 + его
// модификатор Силы.

export default [
  {
    templateName: 'Споровый слуга',
    templateCreatureName: 'NAME споровый слуга',
    templateTitle: 'Превратить NAME в спорового слугу',

    creatureTypeIdList: [CREATURE_TYPE_PLANT],
    aligmentId: ALIGMENT_NO,
    source: 'MM:209',
    saveThrowCollection: null,
    skillCollection: null,
    immunityConditionList: [
      CONDITION_FRIGHTENED,
      CONDITION_BLINDED,
      CONDITION_CHARMED,
      CONDITION_PARALYZED
    ],
    featureList: [],
    // actionList: [],
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

    extendLimitations: {
      sizeTypeList: [
        SIZE_TINY,
        SIZE_SMALL,
        SIZE_MEDIUM,
        SIZE_LARGE
      ],
      creatureTypeIdList: [
        CREATURE_TYPE_AARAKOCRA,
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
      ]
    },
    editPropCollection: {
      name: 'Споровый слуга NAME',
      speed: {
        [SPEED_WALK]: {
          value: -10,
          changeBy: true,
          min: 5
        },
        [SPEED_DIG]: {
          value: -10,
          changeBy: true,
          min: 5
        },
        [SPEED_FLY]: {
          value: -10,
          changeBy: true,
          min: 5
        },
        [SPEED_SWIM]: {
          value: -10,
          changeBy: true,
          min: 5
        },
        [SPEED_CLIMB]: {
          value: -10,
          changeBy: true,
          min: 5
        }
      }
    },
    extendPropCollection: {
      params: {
        [PARAM_INT]: 2,
        [PARAM_WIT]: 6,
        [PARAM_CHA]: 1
      }
    }
  }
]
