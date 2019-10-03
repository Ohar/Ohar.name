const listToCollectionById = require('./../../utils/listToCollectionById')
const {
  GENDER_MALE,
  GENDER_FEMALE,
} = require('./../genderList')
const {
  LANG_TYPE_EXOTIC,
  LANG_TYPE_HIDDEN,
  LANG_TYPE_STANDARD,
} = require('./dndLanguageTypeList')

const LANG_AARAKOCRA = 'aarakocra'
const LANG_ABYSSAL = 'abyssal'
const LANG_ALL = 'all'
const LANG_ALL_KNOWN_AT_LIFE = 'all_known_at_life'
const LANG_ANY_ONE = 'any_one'
const LANG_ANY_TWO = 'any_two'
const LANG_ANY_UP_TO_FIVE = 'any_up_to_five'
const LANG_AQUAN = 'aquan'
const LANG_AURAN = 'auran'
const LANG_BLINK_DOG = 'blink_dog'
const LANG_BULLYWUG = 'bullywug'
const LANG_CELESTIAL = 'celestial'
const LANG_COMMON = 'common'
const LANG_DEEP_SPEECH = 'deep_speech'
const LANG_DRACONIC = 'draconic'
const LANG_DRUIDIC = 'druidic'
const LANG_DWARVISH = 'dwarvish'
const LANG_ELVEN = 'elven'
const LANG_GIANT = 'giant'
const LANG_GIANT_EAGLE = 'giant_eagle'
const LANG_GIANT_ELK = 'giant_elk'
const LANG_GIANT_OWL = 'giant_owl'
const LANG_GITH = 'gith'
const LANG_GNOLL = 'gnoll'
const LANG_GNOMISH = 'gnomish'
const LANG_GOBLIN = 'goblin'
const LANG_GRELL = 'grell'
const LANG_GRUNG = 'grung'
const LANG_HALFLING = 'halfling'
const LANG_HOOK_HORROR = 'hook_horror'
const LANG_ICE_TOAD = 'ice_toad'
const LANG_IGNAN = 'ignan'
const LANG_INFERNAL = 'infernal'
const LANG_ITS_CREATOR = 'its_creator'
const LANG_IXITXACHITL = 'ixitxachitl'
const LANG_MODRONE = 'modrone'
const LANG_ONE_OF_ITS_CREATOR = 'one_of_its_creator'
const LANG_ORC = 'orc'
const LANG_OTYUGH = 'otyugh'
const LANG_PRIMORDIAL = 'primordial'
const LANG_SAHUAGIN = 'sahuagin'
const LANG_SLAAD = 'slaad'
const LANG_SPHINX = 'sphinx'
const LANG_SYLVAN = 'sylvan'
const LANG_TELEPATHY = 'telepathy'
const LANG_TERRAN = 'terran'
const LANG_THAY = 'thay'
const LANG_THRI_KREEN = 'thri_kreen'
const LANG_THUG_JARGON = 'thug_jargon'
const LANG_TLINCALLI = 'tlincalli'
const LANG_TROGLODYTE = 'troglodyte'
const LANG_UMBER_HULK = 'umber_hulk'
const LANG_UNDERCOMMON = 'undercommon'
const LANG_VEGEPYGMY = 'vegepygmy'
const LANG_WINTER_WOLF = 'winter_wolf'
const LANG_WORGEN = 'worgen'
const LANG_YETI = 'yeti'

const dndLanguageList = [
  {
    id: LANG_COMMON,
    scriptId: LANG_COMMON,
    type: LANG_TYPE_STANDARD,
    name: {
      nominative: 'Всеобщий',
      instrumental: 'Всеобщий',
      prepositional: 'Всеобщем',
    },
    isRealLang: true,
  },
  {
    id: LANG_ANY_ONE,
    name: {
      nominative: 'Любой один язык',
      instrumental: 'Любой один язык',
      prepositional: 'Любом одном языке',
    },
  },
  {
    id: LANG_ANY_TWO,
    name: {
      nominative: 'Любые два языка',
      instrumental: 'Любые два языка',
      prepositional: 'Любых двух языках',
    },
  },
  {
    id: LANG_ANY_UP_TO_FIVE,
    name: {
      nominative: 'до пяти других языков',
      instrumental: 'до пяти других языков',
      prepositional: 'до пяти других языков',
    },
  },
  {
    id: LANG_ALL_KNOWN_AT_LIFE,
    name: {
      nominative: 'Все языки, известные при жизни',
      instrumental: 'Все языки, известные при жизни',
      prepositional: 'Всех языках, известных при жизни',
    },
  },
  {
    id: LANG_ITS_CREATOR,
    type: LANG_TYPE_STANDARD,
    name: {
      nominative: 'Языки своего создателя',
      instrumental: 'Языки своего создателя',
      prepositional: 'Языках своего создателя',
    },
  },
  {
    id: LANG_ONE_OF_ITS_CREATOR,
    name: {
      nominative: 'Один из языков создателя',
      instrumental: 'Одним из языков создателя',
      prepositional: 'Одном из языков создателя',
    },
  },
  {
    id: LANG_ALL,
    scriptId: LANG_ALL,
    name: {
      nominative: 'Все языки',
      instrumental: 'Все языками',
      prepositional: 'Всех языках',
    },
  },
  {
    id: LANG_PRIMORDIAL,
    scriptId: LANG_DWARVISH,
    type: LANG_TYPE_EXOTIC,
    name: {
      nominative: 'Первичный',
      instrumental: 'Первичный',
      prepositional: 'Первичном',
    },
    isRealLang: true,
  },
  {
    id: LANG_ELVEN,
    scriptId: LANG_ELVEN,
    type: LANG_TYPE_STANDARD,
    name: {
      nominative: 'Эльфийский',
      instrumental: 'Эльфийский',
      prepositional: 'Эльфийском',
    },
    isRealLang: true,
  },
  {
    id: LANG_SYLVAN,
    scriptId: LANG_ELVEN,
    type: LANG_TYPE_EXOTIC,
    name: {
      nominative: 'Сильван',
      instrumental: 'Сильван',
      prepositional: 'Сильване',
    },
    isRealLang: true,
  },
  {
    id: LANG_ABYSSAL,
    scriptId: LANG_INFERNAL,
    type: LANG_TYPE_EXOTIC,
    name: {
      nominative: 'Язык Бездны',
      instrumental: 'Язык Бездны',
      prepositional: 'Языке Бездны',
    },
    isRealLang: true,
  },
  {
    id: LANG_INFERNAL,
    scriptId: LANG_INFERNAL,
    type: LANG_TYPE_EXOTIC,
    name: {
      nominative: 'Инфернальный',
      instrumental: 'Инфернальный',
      prepositional: 'Инфернальном',
    },
    isRealLang: true,
  },
  {
    id: LANG_AQUAN,
    scriptId: LANG_DWARVISH,
    type: LANG_TYPE_EXOTIC,
    name: {
      nominative: 'Акван',
      instrumental: 'Акван',
      prepositional: 'Акване',
    },
    isRealLang: true,
  },
  {
    id: LANG_DWARVISH,
    scriptId: LANG_DWARVISH,
    type: LANG_TYPE_STANDARD,
    name: {
      nominative: 'Дварфийский',
      instrumental: 'Дварфийский',
      prepositional: 'Дварфийском',
    },
    isRealLang: true,
  },
  {
    id: LANG_GIANT,
    scriptId: LANG_DWARVISH,
    type: LANG_TYPE_STANDARD,
    name: {
      nominative: 'Великаний',
      instrumental: 'Великаний',
      prepositional: 'Великаньем',
    },
    isRealLang: true,
  },
  {
    id: LANG_AURAN,
    scriptId: LANG_DWARVISH,
    type: LANG_TYPE_EXOTIC,
    name: {
      nominative: 'Ауран',
      instrumental: 'Ауран',
      prepositional: 'Ауране',
    },
    isRealLang: true,
  },
  {
    id: LANG_CELESTIAL,
    scriptId: LANG_CELESTIAL,
    type: LANG_TYPE_EXOTIC,
    name: {
      nominative: 'Небесный',
      instrumental: 'Небесный',
      prepositional: 'Небесном',
    },
    isRealLang: true,
  },
  {
    id: LANG_DEEP_SPEECH,
    type: LANG_TYPE_EXOTIC,
    name: {
      nominative: 'Глубинная речь',
      instrumental: 'Глубинную речь',
      prepositional: 'Глубинной речи',
    },
    isRealLang: true,
    genderId: GENDER_FEMALE,
  },
  {
    id: LANG_UNDERCOMMON,
    scriptId: LANG_ELVEN,
    type: LANG_TYPE_EXOTIC,
    name: {
      nominative: 'Подземный',
      instrumental: 'Подземный',
      prepositional: 'Подземном',
    },
    isRealLang: true,
  },
  {
    id: LANG_DRACONIC,
    scriptId: LANG_DRACONIC,
    type: LANG_TYPE_EXOTIC,
    name: {
      nominative: 'Драконий',
      instrumental: 'Драконий',
      prepositional: 'Драконьем',
    },
    isRealLang: true,
  },
  {
    id: LANG_DRUIDIC,
    scriptId: LANG_DRUIDIC,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Друидский',
      instrumental: 'Друидский',
      prepositional: 'Друидском',
    },
    isRealLang: true,
  },
  {
    id: LANG_GNOMISH,
    scriptId: LANG_DWARVISH,
    type: LANG_TYPE_STANDARD,
    name: {
      nominative: 'Гномий',
      instrumental: 'Гномий',
      prepositional: 'Гномьем',
    },
    isRealLang: true,
  },
  {
    id: LANG_GOBLIN,
    scriptId: LANG_DWARVISH,
    type: LANG_TYPE_STANDARD,
    name: {
      nominative: 'Гоблинский',
      instrumental: 'Гоблинский',
      prepositional: 'Гоблинском',
    },
    isRealLang: true,
  },
  {
    id: LANG_GNOLL,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Гноллий',
      instrumental: 'Гноллий',
      prepositional: 'Гнолльем',
    },
    isRealLang: true,
  },
  {
    id: LANG_HALFLING,
    scriptId: LANG_COMMON,
    type: LANG_TYPE_STANDARD,
    name: {
      nominative: 'Язык полуросликов',
      instrumental: 'Язык полуросликов',
      prepositional: 'Языке полуросликов',
    },
    isRealLang: true,
  },
  {
    id: LANG_UMBER_HULK,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Язык бурых увальней',
      instrumental: 'Язык бурых увальней',
      prepositional: 'Языке бурых увальней',
    },
    isRealLang: true,
  },
  {
    id: LANG_IGNAN,
    scriptId: LANG_DWARVISH,
    type: LANG_TYPE_EXOTIC,
    name: {
      nominative: 'Игнан',
      instrumental: 'Игнан',
      prepositional: 'Игнане',
    },
    isRealLang: true,
  },
  {
    id: LANG_ORC,
    scriptId: LANG_DWARVISH,
    type: LANG_TYPE_STANDARD,
    name: {
      nominative: 'Орочий',
      instrumental: 'Орочий',
      prepositional: 'Орочьем',
    },
    isRealLang: true,
  },
  {
    id: LANG_TERRAN,
    scriptId: LANG_DWARVISH,
    type: LANG_TYPE_EXOTIC,
    name: {
      nominative: 'Терран',
      instrumental: 'Терран',
      prepositional: 'Терране',
    },
    isRealLang: true,
  },
  {
    id: LANG_THUG_JARGON,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Воровской жаргон',
      instrumental: 'Воровской жаргон',
      prepositional: 'Воровском жаргоне',
    },
    isRealLang: true,
  },
  {
    id: LANG_TELEPATHY,
    name: {
      nominative: 'Телепатия',
      instrumental: 'Телепатию',
      prepositional: 'Телепатии',
    },
    isRealLang: true,
    genderId: GENDER_FEMALE,
  },
  {
    id: LANG_SAHUAGIN,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Сахуагинский',
      instrumental: 'Сахуагинский',
      prepositional: 'Сахуагинском',
    },
    isRealLang: true,
  },
  {
    id: LANG_VEGEPYGMY,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Вегепигмейский',
      instrumental: 'Вегепигмейский',
      prepositional: 'Вегепигмейском',
    },
    isRealLang: true,
  },
  {
    id: LANG_WORGEN,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Язык воргов',
      instrumental: 'Язык воргов',
      prepositional: 'Языке воргов',
    },
    isRealLang: true,
  },
  {
    id: LANG_GIANT_OWL,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Язык гигантских сов',
      instrumental: 'Язык гигантских сов',
      prepositional: 'Языке гигантских сов',
    },
    isRealLang: true,
  },
  {
    id: LANG_GIANT_EAGLE,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Язык гигантских орлов',
      instrumental: 'Язык гигантских орлов',
      prepositional: 'Языке гигантских орлов',
    },
    isRealLang: true,
  },
  {
    id: LANG_GIANT_ELK,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Язык гигантских лосей',
      instrumental: 'Язык гигантских лосей',
      prepositional: 'Языке гигантских лосей',
    },
    isRealLang: true,
  },
  {
    id: LANG_SPHINX,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Язык сфинксов',
      instrumental: 'Язык сфинксов',
      prepositional: 'Языке сфинксов',
    },
    isRealLang: true,
  },
  {
    id: LANG_GITH,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Гитский',
      instrumental: 'Гитский',
      prepositional: 'Гитском',
    },
    isRealLang: true,
  },
  {
    id: LANG_GRELL,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Грелльский',
      instrumental: 'Грелльский',
      prepositional: 'Грелльском',
    },
    isRealLang: true,
  },
  {
    id: LANG_GRUNG,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Грунгский',
      instrumental: 'Грунгский',
      prepositional: 'Грунгском',
    },
    isRealLang: true,
  },
  {
    id: LANG_MODRONE,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Модронский',
      instrumental: 'Модронский',
      prepositional: 'Модронском',
    },
    isRealLang: true,
  },
  {
    id: LANG_BULLYWUG,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Жаболюдский',
      instrumental: 'Жаболюдский',
      prepositional: 'Жаболюдском',
    },
    isRealLang: true,
  },
  {
    id: LANG_SLAAD,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Слаадский',
      instrumental: 'Слаадский',
      prepositional: 'Слаадском',
    },
    isRealLang: true,
  },
  {
    id: LANG_YETI,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Язык йети',
      instrumental: 'Язык йети',
      prepositional: 'Языке йети',
    },
    isRealLang: true,
  },
  {
    id: LANG_HOOK_HORROR,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Язык крюкастых ужасов',
      instrumental: 'Язык крюкастых ужасов',
      prepositional: 'Языке крюкастых ужасов',
    },
    isRealLang: true,
  },
  {
    id: LANG_ICE_TOAD,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Язык ледяных жаб',
      instrumental: 'Язык ледяных жаб',
      prepositional: 'Языке ледяных жаб',
    },
    isRealLang: true,
  },
  {
    id: LANG_BLINK_DOG,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Язык мерцающих псов',
      instrumental: 'Язык мерцающих псов',
      prepositional: 'Языке мерцающих псов',
    },
    isRealLang: true,
  },
  {
    id: LANG_OTYUGH,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Отиджский',
      instrumental: 'Отиджский',
      prepositional: 'Отиджском',
    },
    isRealLang: true,
  },
  {
    id: LANG_WINTER_WOLF,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Язык полярных волков',
      instrumental: 'Язык полярных волков',
      prepositional: 'Языке полярных волков',
    },
    isRealLang: true,
  },
  {
    id: LANG_THAY,
    scriptId: LANG_INFERNAL,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Тэйский',
      instrumental: 'Тэйский',
      prepositional: 'Тэйском',
    },
    isRealLang: true,
  },
  {
    id: LANG_TLINCALLI,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Язык тлинкалли',
      instrumental: 'Язык тлинкалли',
      prepositional: 'Языке тлинкалли',
    },
    isRealLang: true,
  },
  {
    id: LANG_THRI_KREEN,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Три-кринский',
      instrumental: 'Три-кринский',
      prepositional: 'Три-кринском',
    },
    isRealLang: true,
  },
  {
    id: LANG_TROGLODYTE,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Троглодитский',
      instrumental: 'Троглодитский',
      prepositional: 'Троглодитском',
    },
    isRealLang: true,
  },
  {
    id: LANG_IXITXACHITL,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Язык икситксачитлов',
      instrumental: 'Язык икситксачитлов',
      prepositional: 'Языке икситксачитлов',
    },
    isRealLang: true,
  },
  {
    id: LANG_AARAKOCRA,
    type: LANG_TYPE_HIDDEN,
    name: {
      nominative: 'Язык ааракокр',
      instrumental: 'Язык ааракокр',
      prepositional: 'Языке ааракокр',
    },
    isRealLang: true,
  },
]
  .map(
    ({genderId = GENDER_MALE, ...rest}) => ({
      ...rest,
      genderId,
    })
  )

module.exports = dndLanguageList

module.exports.dndLanguageCollection = listToCollectionById(dndLanguageList)

module.exports.LANG_AARAKOCRA = LANG_AARAKOCRA
module.exports.LANG_ABYSSAL = LANG_ABYSSAL
module.exports.LANG_ALL = LANG_ALL
module.exports.LANG_ALL_KNOWN_AT_LIFE = LANG_ALL_KNOWN_AT_LIFE
module.exports.LANG_ANY_ONE = LANG_ANY_ONE
module.exports.LANG_ANY_TWO = LANG_ANY_TWO
module.exports.LANG_ANY_UP_TO_FIVE = LANG_ANY_UP_TO_FIVE
module.exports.LANG_AQUAN = LANG_AQUAN
module.exports.LANG_AURAN = LANG_AURAN
module.exports.LANG_BLINK_DOG = LANG_BLINK_DOG
module.exports.LANG_BULLYWUG = LANG_BULLYWUG
module.exports.LANG_CELESTIAL = LANG_CELESTIAL
module.exports.LANG_COMMON = LANG_COMMON
module.exports.LANG_DEEP_SPEECH = LANG_DEEP_SPEECH
module.exports.LANG_DRACONIC = LANG_DRACONIC
module.exports.LANG_DRUIDIC = LANG_DRUIDIC
module.exports.LANG_DWARVISH = LANG_DWARVISH
module.exports.LANG_ELVEN = LANG_ELVEN
module.exports.LANG_GIANT = LANG_GIANT
module.exports.LANG_GIANT_EAGLE = LANG_GIANT_EAGLE
module.exports.LANG_GIANT_ELK = LANG_GIANT_ELK
module.exports.LANG_GIANT_OWL = LANG_GIANT_OWL
module.exports.LANG_GITH = LANG_GITH
module.exports.LANG_GNOLL = LANG_GNOLL
module.exports.LANG_GNOMISH = LANG_GNOMISH
module.exports.LANG_GOBLIN = LANG_GOBLIN
module.exports.LANG_GRELL = LANG_GRELL
module.exports.LANG_GRUNG = LANG_GRUNG
module.exports.LANG_HALFLING = LANG_HALFLING
module.exports.LANG_HOOK_HORROR = LANG_HOOK_HORROR
module.exports.LANG_ICE_TOAD = LANG_ICE_TOAD
module.exports.LANG_IGNAN = LANG_IGNAN
module.exports.LANG_INFERNAL = LANG_INFERNAL
module.exports.LANG_ITS_CREATOR = LANG_ITS_CREATOR
module.exports.LANG_IXITXACHITL = LANG_IXITXACHITL
module.exports.LANG_MODRONE = LANG_MODRONE
module.exports.LANG_ONE_OF_ITS_CREATOR = LANG_ONE_OF_ITS_CREATOR
module.exports.LANG_ORC = LANG_ORC
module.exports.LANG_OTYUGH = LANG_OTYUGH
module.exports.LANG_PRIMORDIAL = LANG_PRIMORDIAL
module.exports.LANG_SAHUAGIN = LANG_SAHUAGIN
module.exports.LANG_SLAAD = LANG_SLAAD
module.exports.LANG_SPHINX = LANG_SPHINX
module.exports.LANG_SYLVAN = LANG_SYLVAN
module.exports.LANG_TELEPATHY = LANG_TELEPATHY
module.exports.LANG_TERRAN = LANG_TERRAN
module.exports.LANG_THAY = LANG_THAY
module.exports.LANG_THRI_KREEN = LANG_THRI_KREEN
module.exports.LANG_THUG_JARGON = LANG_THUG_JARGON
module.exports.LANG_TLINCALLI = LANG_TLINCALLI
module.exports.LANG_TROGLODYTE = LANG_TROGLODYTE
module.exports.LANG_UMBER_HULK = LANG_UMBER_HULK
module.exports.LANG_UNDERCOMMON = LANG_UNDERCOMMON
module.exports.LANG_VEGEPYGMY = LANG_VEGEPYGMY
module.exports.LANG_WINTER_WOLF = LANG_WINTER_WOLF
module.exports.LANG_WORGEN = LANG_WORGEN
module.exports.LANG_YETI = LANG_YETI
