import listToCollectionById from '@/utils/listToCollectionById'

export const LANG_AARAKOCRA = 'aarakocra'
export const LANG_ABYSSAL = 'abyssal'
export const LANG_ALL = 'all'
export const LANG_ALL_KNOWN_AT_LIFE = 'all_known_at_life'
export const LANG_ANY_ONE = 'any_one'
export const LANG_ANY_TWO = 'any_two'
export const LANG_AQUAN = 'aquan'
export const LANG_AURAN = 'auran'
export const LANG_BLINK_DOG = 'blink_dog'
export const LANG_BULLYWUG = 'bullywug'
export const LANG_CELESTIAL = 'celestial'
export const LANG_COMMON = 'common'
export const LANG_DEEP_SPEECH = 'deep_speech'
export const LANG_DRACONIC = 'draconic'
export const LANG_DRUIDIC = 'druidic'
export const LANG_DWARVISH = 'dwarvish'
export const LANG_ELVEN = 'elven'
export const LANG_GIANT = 'giant'
export const LANG_GIANT_EAGLE = 'giant_eagle'
export const LANG_GIANT_OWL = 'giant_owl'
export const LANG_GITH = 'gith'
export const LANG_GNOLL = 'gnoll'
export const LANG_GNOMISH = 'gnomish'
export const LANG_GOBLIN = 'goblin'
export const LANG_GRELL = 'grell'
export const LANG_GRUNG = 'grung'
export const LANG_HALFLING = 'halfling'
export const LANG_HOOK_HORROR = 'hook_horror'
export const LANG_ICE_TOAD = 'ice_toad'
export const LANG_IGNAN = 'ignan'
export const LANG_INFERNAL = 'infernal'
export const LANG_ITS_CREATOR = 'its_creator'
export const LANG_IXITXACHITL = 'ixitxachitl'
export const LANG_MODRONE = 'modrone'
export const LANG_ORC = 'orc'
export const LANG_OTYUGH = 'otyugh'
export const LANG_PRIMORDIAL = 'primordial'
export const LANG_SAHUAGIN = 'sahuagin'
export const LANG_SLAAD = 'slaad'
export const LANG_SPHINX = 'sphinx'
export const LANG_SYLVAN = 'sylvan'
export const LANG_TELEPATHY = 'telepaty'
export const LANG_TERRAN = 'terran'
export const LANG_THAY = 'thay'
export const LANG_THRI_KREEN = 'thri_kreen'
export const LANG_THUG_JARGON = 'thug_jargon'
export const LANG_TLINCALLI = 'tlincalli'
export const LANG_TROGLODYTE = 'troglodyte'
export const LANG_UMBER_HULK = 'umber_hulk'
export const LANG_UNDERCOMMON = 'undercommon'
export const LANG_VEGEPYGMY = 'vegepygmy'
export const LANG_WINTER_WOLF = 'winter_wolf'
export const LANG_WORGEN = 'worgen'
export const LANG_YETI = 'yeti'

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

export default dndLanguageList
export const dndLanguageCollection = listToCollectionById(dndLanguageList)
