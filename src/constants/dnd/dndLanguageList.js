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
export const LANG_TELEPATY = 'telepaty'
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
    name: 'общий',
  },
  {
    id: LANG_ANY_ONE,
    name: 'любой один язык (обычно — Общий)',
  },
  {
    id: LANG_ANY_TWO,
    name: 'любые два языка',
  },
  {
    id: LANG_ALL_KNOWN_AT_LIFE,
    name: 'все языки, известные при жизни',
  },
  {
    id: LANG_ITS_CREATOR,
    name: 'язык своего создателя',
  },
  {
    id: LANG_ALL,
    name: 'все',
  },
  {
    id: LANG_PRIMORDIAL,
    name: 'первичный',
  },
  {
    id: LANG_ELVEN,
    name: 'эльфийский',
  },
  {
    id: LANG_SYLVAN,
    name: 'сильван',
  },
  {
    id: LANG_ABYSSAL,
    name: 'бездны',
  },
  {
    id: LANG_INFERNAL,
    name: 'инфернальный',
  },
  {
    id: LANG_AQUAN,
    name: 'акван',
  },
  {
    id: LANG_DWARVISH,
    name: 'дварфийский',
  },
  {
    id: LANG_GIANT,
    name: 'великаний',
  },
  {
    id: LANG_AURAN,
    name: 'ауран',
  },
  {
    id: LANG_CELESTIAL,
    name: 'небесный',
  },
  {
    id: LANG_DEEP_SPEECH,
    name: 'глубинная речь',
  },
  {
    id: LANG_UNDERCOMMON,
    name: 'подземный',
  },
  {
    id: LANG_DRACONIC,
    name: 'драконий',
  },
  {
    id: LANG_DRUIDIC,
    name: 'друидский',
  },
  {
    id: LANG_GNOMISH,
    name: 'гномий',
  },
  {
    id: LANG_GOBLIN,
    name: 'гоблинский',
  },
  {
    id: LANG_GNOLL,
    name: 'гноллий',
  },
  {
    id: LANG_HALFLING,
    name: 'язык полуросликов',
  },
  {
    id: LANG_UMBER_HULK,
    name: 'язык бурых увальней',
  },
  {
    id: LANG_IGNAN,
    name: 'игнан',
  },
  {
    id: LANG_ORC,
    name: 'орочий',
  },
  {
    id: LANG_TERRAN,
    name: 'терран',
  },
  {
    id: LANG_THUG_JARGON,
    name: 'воровской жаргон',
  },
  {
    id: LANG_TELEPATY,
    name: 'телепатия',
  },
  {
    id: LANG_SAHUAGIN,
    name: 'сахуагинский',
  },
  {
    id: LANG_VEGEPYGMY,
    name: 'вегепигмейский',
  },
  {
    id: LANG_WORGEN,
    name: 'язык воргов',
  },
  {
    id: LANG_GIANT_OWL,
    name: 'язык гигантских сов',
  },
  {
    id: LANG_GIANT_EAGLE,
    name: 'язык гигантских орлов',
  },
  {
    id: LANG_SPHINX,
    name: 'язык сфинксов',
  },
  {
    id: LANG_GITH,
    name: 'гитский',
  },
  {
    id: LANG_GRELL,
    name: 'грелльский',
  },
  {
    id: LANG_GRUNG,
    name: 'грунгский',
  },
  {
    id: LANG_MODRONE,
    name: 'модронский',
  },
  {
    id: LANG_BULLYWUG,
    name: 'жаболюдский',
  },
  {
    id: LANG_SLAAD,
    name: 'слаадский',
  },
  {
    id: LANG_YETI,
    name: 'язык йети',
  },
  {
    id: LANG_HOOK_HORROR,
    name: 'язык крюкастых ужасов',
  },
  {
    id: LANG_ICE_TOAD,
    name: 'язык ледяных жаб',
  },
  {
    id: LANG_BLINK_DOG,
    name: 'язык мерцающих псов',
  },
  {
    id: LANG_OTYUGH,
    name: 'отиджский',
  },
  {
    id: LANG_WINTER_WOLF,
    name: 'язык полярных волков',
  },
  {
    id: LANG_THAY,
    name: 'тэйский',
  },
  {
    id: LANG_TLINCALLI,
    name: 'язык тлинкалли',
  },
  {
    id: LANG_THRI_KREEN,
    name: 'три-кринский',
  },
  {
    id: LANG_TROGLODYTE,
    name: 'троглодитский',
  },
  {
    id: LANG_IXITXACHITL,
    name: 'язык икситксачитлов',
  },
  {
    id: LANG_AARAKOCRA,
    name: 'язык ааракокр',
  },
]

export default dndLanguageList
export const dndLanguageCollection = listToCollectionById(dndLanguageList)
