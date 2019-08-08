import listToCollectionById from '@/utils/listToCollectionById'

const dndLanguageList = [
  {
    id: 'common',
    name: 'общий',
    script: 'common',
  },
  {
    id: 'any_one',
    name: 'любой один язык (обычно — Общий)',
    script: null,
  },
  {
    id: 'any_two',
    name: 'любые два языка',
    script: null,
  },
  {
    id: 'all_known_at_life',
    name: 'все языки, известные при жизни',
    script: null,
  },
  {
    id: 'its_creator',
    name: 'язык своего создателя',
    script: null,
  },
  {
    id: 'all',
    name: 'все',
    script: 'all',
  },
  {
    id: 'primordial',
    name: 'первичный',
    script: 'dwarvish',
  },
  {
    id: 'elven',
    name: 'эльфийский',
    script: 'elven',
  },
  {
    id: 'sylvan',
    name: 'сильван',
    script: 'elven',
  },
  {
    id: 'abyssal',
    name: 'бездны',
    script: 'infernal',
  },
  {
    id: 'infernal',
    name: 'инфернальный',
    script: 'infernal',
  },
  {
    id: 'aquan',
    name: 'акван',
    script: 'elven',
  },
  {
    id: 'dwarvish',
    name: 'дварфийский',
    script: 'dwarvish',
  },
  {
    id: 'giant',
    name: 'великаний',
    script: 'dwarvish',
  },
  {
    id: 'auran',
    name: 'ауран',
    script: 'draconic',
  },
  {
    id: 'celestial',
    name: 'небесный',
    script: 'celestial',
  },
  {
    id: 'deep_speech',
    name: 'глубинная речь',
    script: null,
  },
  {
    id: 'undercommon',
    name: 'подземный',
    script: 'elven',
  },
  {
    id: 'draconic',
    name: 'драконий',
    script: 'draconic',
  },
  {
    id: 'druidic',
    name: 'друидский',
    script: 'druidic',
  },
  {
    id: 'gnomish',
    name: 'гномий',
    script: 'dwarvish',
  },
  {
    id: 'goblin',
    name: 'гоблинский',
    script: 'dwarvish',
  },
  {
    id: 'gnoll',
    name: 'гноллий',
    script: 'common',
  },
  {
    id: 'halfling',
    name: 'язык полуросликов',
    script: 'common',
  },
  {
    id: 'umber_hulk',
    name: 'язык бурых увальней',
    script: null,
  },
  {
    id: 'ignan',
    name: 'игнан',
    script: 'draconic',
  },
  {
    id: 'orc',
    name: 'орочий',
    script: 'dwarvish',
  },
  {
    id: 'terran',
    name: 'терран',
    script: 'dwarvish',
  },
  {
    id: 'vorovskoi_zhargon',
    name: 'воровской жаргон',
    script: null,
  },
  {
    id: 'telepatiia',
    name: 'телепатия',
    script: null,
  },
  {
    id: 'sahuagin',
    name: 'сахуагинский',
    script: null,
  },
  {
    id: 'vegepygmy',
    name: 'вегепигмейский',
    script: null,
  },
  {
    id: 'worgen',
    name: 'язык воргов',
    script: null,
  },
  {
    id: 'giant_owl',
    name: 'язык гигантских сов',
    script: null,
  },
  {
    id: 'giant_eagle',
    name: 'язык гигантских орлов',
    script: null,
  },
  {
    id: 'sphinx',
    name: 'язык сфинксов',
    script: null,
  },
  {
    id: 'gith',
    name: 'гитский',
    script: 'gith',
  },
  {
    id: 'grell',
    name: 'грелльский',
    script: 'grell',
  },
  {
    id: 'grung',
    name: 'грунгский',
    script: null,
  },
  {
    id: 'modrone',
    name: 'модронский',
    script: null,
  },
  {
    id: 'bullywug',
    name: 'жаболюдский',
    script: null,
  },
  {
    id: 'slaad',
    name: 'слаадский',
    script: null,
  },
  {
    id: 'yeti',
    name: 'язык йети',
    script: null,
  },
  {
    id: 'hook_horror',
    name: 'язык крюкастых ужасов',
    script: null,
  },
  {
    id: 'ice_toad',
    name: 'язык ледяных жаб',
    script: null,
  },
  {
    id: 'blink_dog',
    name: 'язык мерцающих псов',
    script: null,
  },
  {
    id: 'otyugh',
    name: 'отиджский',
    script: null,
  },
  {
    id: 'winter_wolf',
    name: 'язык полярных волков',
    script: null,
  },
  {
    id: 'thay',
    name: 'тэйский',
    script: ['infernal', 'common'],
  },
  {
    id: 'tlincalli',
    name: 'язык тлинкалли',
    script: null,
  },
  {
    id: 'thri_kreen',
    name: 'три-кринский',
    script: null,
  },
  {
    id: 'troglodyte',
    name: 'троглодитский',
    script: null,
  },
  {
    id: 'ixitxachitl',
    name: 'язык икситксачитлов',
    script: null,
  },
]

export const dndLanguageCollection = listToCollectionById(dndLanguageList)
