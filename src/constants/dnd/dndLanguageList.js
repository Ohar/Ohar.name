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
]

export const dndLanguageCollection = listToCollectionById(dndLanguageList)
