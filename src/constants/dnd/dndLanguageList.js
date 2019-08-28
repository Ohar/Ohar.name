const listToCollectionById = require('./../../utils/listToCollectionById')

const LANG_AARAKOCRA = 'aarakocra'
const LANG_ABYSSAL = 'abyssal'
const LANG_ALL = 'all'
const LANG_ALL_KNOWN_AT_LIFE = 'all_known_at_life'
const LANG_ANY_ONE = 'any_one'
const LANG_ANY_TWO = 'any_two'
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
const LANG_ORC = 'orc'
const LANG_OTYUGH = 'otyugh'
const LANG_PRIMORDIAL = 'primordial'
const LANG_SAHUAGIN = 'sahuagin'
const LANG_SLAAD = 'slaad'
const LANG_SPHINX = 'sphinx'
const LANG_SYLVAN = 'sylvan'
const LANG_TELEPATHY = 'telepaty'
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
    name: {
      nominative: 'Общий',
      instrumental: 'Общий',
    },
  },
  {
    id: LANG_ANY_ONE,
    name: {
      nominative: 'Любой один язык (обычно — Общий)',
      instrumental: 'Любой один язык (обычно — Общий)',
    },
  },
  {
    id: LANG_ANY_TWO,
    name: {
      nominative: 'Любые два языка',
      instrumental: 'Любые два языка',
    },
  },
  {
    id: LANG_ALL_KNOWN_AT_LIFE,
    name: {
      nominative: 'Все языки, известные при жизни',
      instrumental: 'Все языки, известные при жизни',
    },
  },
  {
    id: LANG_ITS_CREATOR,
    name: {
      nominative: 'Язык своего создателя',
      instrumental: 'Язык своего создателя',
    },
  },
  {
    id: LANG_ALL,
    name: {
      nominative: 'Все',
      instrumental: 'Все',
    },
  },
  {
    id: LANG_PRIMORDIAL,
    name: {
      nominative: 'Первичный',
      instrumental: 'Первичный',
    },
  },
  {
    id: LANG_ELVEN,
    name: {
      nominative: 'Эльфийский',
      instrumental: 'Эльфийский',
    },
  },
  {
    id: LANG_SYLVAN,
    name: {
      nominative: 'Сильван',
      instrumental: 'Сильван',
    },
  },
  {
    id: LANG_ABYSSAL,
    name: {
      nominative: 'язык Бездны',
      instrumental: 'язык Бездны',
    },
  },
  {
    id: LANG_INFERNAL,
    name: {
      nominative: 'Инфернальный',
      instrumental: 'Инфернальный',
    },
  },
  {
    id: LANG_AQUAN,
    name: {
      nominative: 'Акван',
      instrumental: 'Акван',
    },
  },
  {
    id: LANG_DWARVISH,
    name: {
      nominative: 'Дварфийский',
      instrumental: 'Дварфийский',
    },
  },
  {
    id: LANG_GIANT,
    name: {
      nominative: 'Великаний',
      instrumental: 'Великаний',
    },
  },
  {
    id: LANG_AURAN,
    name: {
      nominative: 'Ауран',
      instrumental: 'Ауран',
    },
  },
  {
    id: LANG_CELESTIAL,
    name: {
      nominative: 'Небесный',
      instrumental: 'Небесный',
    },
  },
  {
    id: LANG_DEEP_SPEECH,
    name: {
      nominative: 'Глубинная речь',
      instrumental: 'Глубинную речь',
    },
    isFemale: true,
  },
  {
    id: LANG_UNDERCOMMON,
    name: {
      nominative: 'Подземный',
      instrumental: 'Подземный',
    },
  },
  {
    id: LANG_DRACONIC,
    name: {
      nominative: 'Драконий',
      instrumental: 'Драконий',
    },
  },
  {
    id: LANG_DRUIDIC,
    name: {
      nominative: 'Друидский',
      instrumental: 'Друидский',
    },
  },
  {
    id: LANG_GNOMISH,
    name: {
      nominative: 'Гномий',
      instrumental: 'Гномий',
    },
  },
  {
    id: LANG_GOBLIN,
    name: {
      nominative: 'Гоблинский',
      instrumental: 'Гоблинский',
    },
  },
  {
    id: LANG_GNOLL,
    name: {
      nominative: 'Гноллий',
      instrumental: 'Гноллий',
    },
  },
  {
    id: LANG_HALFLING,
    name: {
      nominative: 'Язык полуросликов',
      instrumental: 'Язык полуросликов',
    },
  },
  {
    id: LANG_UMBER_HULK,
    name: {
      nominative: 'Язык бурых увальней',
      instrumental: 'Язык бурых увальней',
    },
  },
  {
    id: LANG_IGNAN,
    name: {
      nominative: 'Игнан',
      instrumental: 'Игнан',
    },
  },
  {
    id: LANG_ORC,
    name: {
      nominative: 'Орочий',
      instrumental: 'Орочий',
    },
  },
  {
    id: LANG_TERRAN,
    name: {
      nominative: 'Терран',
      instrumental: 'Терран',
    },
  },
  {
    id: LANG_THUG_JARGON,
    name: {
      nominative: 'Воровской жаргон',
      instrumental: 'Воровской жаргон',
    },
  },
  {
    id: LANG_TELEPATHY,
    name: {
      nominative: 'Телепатия',
      instrumental: 'Телепатию',
    },
    isFemale: true,
  },
  {
    id: LANG_SAHUAGIN,
    name: {
      nominative: 'Сахуагинский',
      instrumental: 'Сахуагинский',
    },
  },
  {
    id: LANG_VEGEPYGMY,
    name: {
      nominative: 'Вегепигмейский',
      instrumental: 'Вегепигмейский',
    },
  },
  {
    id: LANG_WORGEN,
    name: {
      nominative: 'Язык воргов',
      instrumental: 'Язык воргов',
    },
  },
  {
    id: LANG_GIANT_OWL,
    name: {
      nominative: 'Язык гигантских сов',
      instrumental: 'Язык гигантских сов',
    },
  },
  {
    id: LANG_GIANT_EAGLE,
    name: {
      nominative: 'Язык гигантских орлов',
      instrumental: 'Язык гигантских орлов',
    },
  },
  {
    id: LANG_SPHINX,
    name: {
      nominative: 'Язык сфинксов',
      instrumental: 'Язык сфинксов',
    },
  },
  {
    id: LANG_GITH,
    name: {
      nominative: 'Гитский',
      instrumental: 'Гитский',
    },
  },
  {
    id: LANG_GRELL,
    name: {
      nominative: 'Грелльский',
      instrumental: 'Грелльский',
    },
  },
  {
    id: LANG_GRUNG,
    name: {
      nominative: 'Грунгский',
      instrumental: 'Грунгский',
    },
  },
  {
    id: LANG_MODRONE,
    name: {
      nominative: 'Модронский',
      instrumental: 'Модронский',
    },
  },
  {
    id: LANG_BULLYWUG,
    name: {
      nominative: 'Жаболюдский',
      instrumental: 'Жаболюдский',
    },
  },
  {
    id: LANG_SLAAD,
    name: {
      nominative: 'Слаадский',
      instrumental: 'Слаадский',
    },
  },
  {
    id: LANG_YETI,
    name: {
      nominative: 'Язык йети',
      instrumental: 'Язык йети',
    },
  },
  {
    id: LANG_HOOK_HORROR,
    name: {
      nominative: 'Язык крюкастых ужасов',
      instrumental: 'Язык крюкастых ужасов',
    },
  },
  {
    id: LANG_ICE_TOAD,
    name: {
      nominative: 'Язык ледяных жаб',
      instrumental: 'Язык ледяных жаб',
    },
  },
  {
    id: LANG_BLINK_DOG,
    name: {
      nominative: 'Язык мерцающих псов',
      instrumental: 'Язык мерцающих псов',
    },
  },
  {
    id: LANG_OTYUGH,
    name: {
      nominative: 'Отиджский',
      instrumental: 'Отиджский',
    },
  },
  {
    id: LANG_WINTER_WOLF,
    name: {
      nominative: 'Язык полярных волков',
      instrumental: 'Язык полярных волков',
    },
  },
  {
    id: LANG_THAY,
    name: {
      nominative: 'Тэйский',
      instrumental: 'Тэйский',
    },
  },
  {
    id: LANG_TLINCALLI,
    name: {
      nominative: 'Язык тлинкалли',
      instrumental: 'Язык тлинкалли',
    },
  },
  {
    id: LANG_THRI_KREEN,
    name: {
      nominative: 'Три-кринский',
      instrumental: 'Три-кринский',
    },
  },
  {
    id: LANG_TROGLODYTE,
    name: {
      nominative: 'Троглодитский',
      instrumental: 'Троглодитский',
    },
  },
  {
    id: LANG_IXITXACHITL,
    name: {
      nominative: 'Язык икситксачитлов',
      instrumental: 'Язык икситксачитлов',
    },
  },
  {
    id: LANG_AARAKOCRA,
    name: {
      nominative: 'Язык ааракокр',
      instrumental: 'Язык ааракокр',
    },
  },
]

module.exports = dndLanguageList

module.exports.dndLanguageCollection = listToCollectionById(dndLanguageList)

module.exports.LANG_AARAKOCRA = LANG_AARAKOCRA
module.exports.LANG_ABYSSAL = LANG_ABYSSAL
module.exports.LANG_ALL = LANG_ALL
module.exports.LANG_ALL_KNOWN_AT_LIFE = LANG_ALL_KNOWN_AT_LIFE
module.exports.LANG_ANY_ONE = LANG_ANY_ONE
module.exports.LANG_ANY_TWO = LANG_ANY_TWO
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
