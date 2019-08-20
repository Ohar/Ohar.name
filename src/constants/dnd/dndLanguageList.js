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
    name: 'Общий',
  },
  {
    id: LANG_ANY_ONE,
    name: 'Любой один язык (обычно — Общий)',
  },
  {
    id: LANG_ANY_TWO,
    name: 'Любые два языка',
  },
  {
    id: LANG_ALL_KNOWN_AT_LIFE,
    name: 'Все языки, известные при жизни',
  },
  {
    id: LANG_ITS_CREATOR,
    name: 'Язык своего создателя',
  },
  {
    id: LANG_ALL,
    name: 'Все',
  },
  {
    id: LANG_PRIMORDIAL,
    name: 'Первичный',
  },
  {
    id: LANG_ELVEN,
    name: 'Эльфийский',
  },
  {
    id: LANG_SYLVAN,
    name: 'Сильван',
  },
  {
    id: LANG_ABYSSAL,
    name: 'Бездны',
  },
  {
    id: LANG_INFERNAL,
    name: 'Инфернальный',
  },
  {
    id: LANG_AQUAN,
    name: 'Акван',
  },
  {
    id: LANG_DWARVISH,
    name: 'Дварфийский',
  },
  {
    id: LANG_GIANT,
    name: 'Великаний',
  },
  {
    id: LANG_AURAN,
    name: 'Ауран',
  },
  {
    id: LANG_CELESTIAL,
    name: 'Небесный',
  },
  {
    id: LANG_DEEP_SPEECH,
    name: 'Глубинная речь',
  },
  {
    id: LANG_UNDERCOMMON,
    name: 'Подземный',
  },
  {
    id: LANG_DRACONIC,
    name: 'Драконий',
  },
  {
    id: LANG_DRUIDIC,
    name: 'Друидский',
  },
  {
    id: LANG_GNOMISH,
    name: 'Гномий',
  },
  {
    id: LANG_GOBLIN,
    name: 'Гоблинский',
  },
  {
    id: LANG_GNOLL,
    name: 'Гноллий',
  },
  {
    id: LANG_HALFLING,
    name: 'Язык полуросликов',
  },
  {
    id: LANG_UMBER_HULK,
    name: 'Язык бурых увальней',
  },
  {
    id: LANG_IGNAN,
    name: 'Игнан',
  },
  {
    id: LANG_ORC,
    name: 'Орочий',
  },
  {
    id: LANG_TERRAN,
    name: 'Терран',
  },
  {
    id: LANG_THUG_JARGON,
    name: 'Воровской жаргон',
  },
  {
    id: LANG_TELEPATHY,
    name: 'Телепатия',
  },
  {
    id: LANG_SAHUAGIN,
    name: 'Сахуагинский',
  },
  {
    id: LANG_VEGEPYGMY,
    name: 'Вегепигмейский',
  },
  {
    id: LANG_WORGEN,
    name: 'Язык воргов',
  },
  {
    id: LANG_GIANT_OWL,
    name: 'Язык гигантских сов',
  },
  {
    id: LANG_GIANT_EAGLE,
    name: 'Язык гигантских орлов',
  },
  {
    id: LANG_SPHINX,
    name: 'Язык сфинксов',
  },
  {
    id: LANG_GITH,
    name: 'Гитский',
  },
  {
    id: LANG_GRELL,
    name: 'Грелльский',
  },
  {
    id: LANG_GRUNG,
    name: 'Грунгский',
  },
  {
    id: LANG_MODRONE,
    name: 'Модронский',
  },
  {
    id: LANG_BULLYWUG,
    name: 'Жаболюдский',
  },
  {
    id: LANG_SLAAD,
    name: 'Слаадский',
  },
  {
    id: LANG_YETI,
    name: 'Язык йети',
  },
  {
    id: LANG_HOOK_HORROR,
    name: 'Язык крюкастых ужасов',
  },
  {
    id: LANG_ICE_TOAD,
    name: 'Язык ледяных жаб',
  },
  {
    id: LANG_BLINK_DOG,
    name: 'Язык мерцающих псов',
  },
  {
    id: LANG_OTYUGH,
    name: 'Отиджский',
  },
  {
    id: LANG_WINTER_WOLF,
    name: 'Язык полярных волков',
  },
  {
    id: LANG_THAY,
    name: 'Тэйский',
  },
  {
    id: LANG_TLINCALLI,
    name: 'Язык тлинкалли',
  },
  {
    id: LANG_THRI_KREEN,
    name: 'Три-кринский',
  },
  {
    id: LANG_TROGLODYTE,
    name: 'Троглодитский',
  },
  {
    id: LANG_IXITXACHITL,
    name: 'Язык икситксачитлов',
  },
  {
    id: LANG_AARAKOCRA,
    name: 'Язык ааракокр',
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
