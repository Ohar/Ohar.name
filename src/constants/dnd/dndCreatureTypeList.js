const listToCollectionById = require('./../../utils/listToCollectionById')
const {
  GENDER_MALE,
  GENDER_FEMALE,
  GENDER_MIDDLE,
} = require('./../genderList')

const CREATURE_TYPE_AARAKOCRA = 'aarakocra'
const CREATURE_TYPE_ABERRATION = 'aberration'
const CREATURE_TYPE_ANY_RACE = 'any_race'
const CREATURE_TYPE_BEAST = 'beast'
const CREATURE_TYPE_BULLYWUG = 'bullywug'
const CREATURE_TYPE_CELESTIAL = 'celestial'
const CREATURE_TYPE_CONSTRUCT = 'construct'
const CREATURE_TYPE_DEMON = 'demon'
const CREATURE_TYPE_DEVIL = 'devil'
const CREATURE_TYPE_DRAGON = 'dragon'
const CREATURE_TYPE_DWARF = 'dwarf'
const CREATURE_TYPE_ELEMENTAL = 'elemental'
const CREATURE_TYPE_ELF = 'elf'
const CREATURE_TYPE_FEY = 'fey'
const CREATURE_TYPE_FIEND = 'fiend'
const CREATURE_TYPE_FIRENEWT = 'firenewt'
const CREATURE_TYPE_GIANT = 'giant'
const CREATURE_TYPE_GITH = 'gith'
const CREATURE_TYPE_GNOLL = 'gnoll'
const CREATURE_TYPE_GNOME = 'gnome'
const CREATURE_TYPE_GOBLINOID = 'goblinoid'
const CREATURE_TYPE_GRIMLOCK = 'grimlock'
const CREATURE_TYPE_GRUNG = 'grung'
const CREATURE_TYPE_HUMAN = 'human'
const CREATURE_TYPE_HUMANOID = 'humanoid'
const CREATURE_TYPE_KENKU = 'kenku'
const CREATURE_TYPE_KOBOLD = 'kobold'
const CREATURE_TYPE_KUO_TOA = 'kuo_toa'
const CREATURE_TYPE_LIZARDFOLK = 'lizardfolk'
const CREATURE_TYPE_MERFOLK = 'merfolk'
const CREATURE_TYPE_MONSTER = 'monster'
const CREATURE_TYPE_OOZE = 'ooze'
const CREATURE_TYPE_ORC = 'orc'
const CREATURE_TYPE_PLANT = 'plant'
const CREATURE_TYPE_QUAGGOTH = 'quaggoth'
const CREATURE_TYPE_SAHUAGIN = 'sahuagin'
const CREATURE_TYPE_SHAPESHIFTER = 'shapeshifter'
const CREATURE_TYPE_THRI_KREEN = 'thri_kreen'
const CREATURE_TYPE_TITAN = 'titan'
const CREATURE_TYPE_TROGLODYTE = 'troglodyte'
const CREATURE_TYPE_UNDEAD = 'undead'
const CREATURE_TYPE_XVART = 'xvart'
const CREATURE_TYPE_YOAN_TI = 'yoan_ti'
const CREATURE_TYPE_YUGOLOT = 'yugolot'

const dndCreatureTypeList = [
  {
    id: CREATURE_TYPE_ANY_RACE,
    genderId: GENDER_MIDDLE,
    name: {
      singular: {
        nominative: 'любая раса',
        genitive: 'любой расы',
        dative: 'любой расе',
        accusative: 'любую расу',
        instrumental: 'любой расой',
        prepositional: 'любой расе',
      },
      plural: {
        nominative: 'любые расы',
        genitive: 'любых рас',
        dative: 'любым расам',
        accusative: 'любые расы',
        instrumental: 'любыми расами',
        prepositional: 'любых расах',
      },
    },
  },
  {
    id: CREATURE_TYPE_HUMANOID,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'гуманоид',
        genitive: 'гуманоида',
        dative: 'гуманоиду',
        accusative: 'гуманоида',
        instrumental: 'гуманоидом',
        prepositional: 'гуманоиде',
      },
      plural: {
        nominative: 'гуманоиды',
        genitive: 'гуманоидов',
        dative: 'гуманоидам',
        accusative: 'гуманоидов',
        instrumental: 'гуманоидами',
        prepositional: 'гуманоидах',
      },
    },
  },
  {
    id: CREATURE_TYPE_GOBLINOID,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'гоблиноид',
        genitive: 'гоблиноида',
        dative: 'гоблиноиду',
        accusative: 'гоблиноида',
        instrumental: 'гоблиноидом',
        prepositional: 'гоблиноиде',
      },
      plural: {
        nominative: 'гоблиноиды',
        genitive: 'гоблиноидов',
        dative: 'гоблиноидам',
        accusative: 'гоблиноидов',
        instrumental: 'гоблиноидами',
        prepositional: 'гоблиноидах',
      },
    },
  },
  {
    id: CREATURE_TYPE_SHAPESHIFTER,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'перевёртыш',
        genitive: 'перевёртыша',
        dative: 'перевёртышу',
        accusative: 'перевёртыша',
        instrumental: 'перевёртышом',
        prepositional: 'перевёртыше',
      },
      plural: {
        nominative: 'перевёртыши',
        genitive: 'перевёртышей',
        dative: 'перевёртышам',
        accusative: 'перевёртышей',
        instrumental: 'перевёртышами',
        prepositional: 'перевёртышах',
      },
    },
  },
  {
    id: CREATURE_TYPE_BEAST,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'зверь',
        genitive: 'зверя',
        dative: 'зверю',
        accusative: 'зверя',
        instrumental: 'зверем',
        prepositional: 'звере',
      },
      plural: {
        nominative: 'звери',
        genitive: 'зверей',
        dative: 'зверям',
        accusative: 'зверей',
        instrumental: 'зверями',
        prepositional: 'зверях',
      },
    },
  },
  {
    id: CREATURE_TYPE_FIEND,
    genderId: GENDER_MIDDLE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'исчадие',
        genitive: 'исчадия',
        dative: 'исчадию',
        accusative: 'исчадие',
        instrumental: 'исчадием',
        prepositional: 'исчадии',
      },
      plural: {
        nominative: 'исчадия',
        genitive: 'исчадий',
        dative: 'исчадиям',
        accusative: 'исчадий',
        instrumental: 'исчадиями',
        prepositional: 'исчадиях',
      },
    },
  },
  {
    id: CREATURE_TYPE_CELESTIAL,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'небожитель',
        genitive: 'небожителя',
        dative: 'небожителю',
        accusative: 'небожителя',
        instrumental: 'небожителем',
        prepositional: 'небожителе',
      },
      plural: {
        nominative: 'небожители',
        genitive: 'небожителей',
        dative: 'небожителям',
        accusative: 'небожителей',
        instrumental: 'небожителями',
        prepositional: 'небожителях',
      },
    },
  },
  {
    id: CREATURE_TYPE_MONSTER,
    genderId: GENDER_MIDDLE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'чудовище',
        genitive: 'чудовища',
        dative: 'чудовищу',
        accusative: 'чудовище',
        instrumental: 'чудовищем',
        prepositional: 'чудовище',
      },
      plural: {
        nominative: 'чудовища',
        genitive: 'чудовищ',
        dative: 'чудовищам',
        accusative: 'чудовищ',
        instrumental: 'чудовищами',
        prepositional: 'чудовищах',
      },
    },
  },
  {
    id: CREATURE_TYPE_PLANT,
    genderId: GENDER_MIDDLE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'растение',
        genitive: 'растения',
        dative: 'растению',
        accusative: 'растение',
        instrumental: 'растением',
        prepositional: 'растении',
      },
      plural: {
        nominative: 'растения',
        genitive: 'растений',
        dative: 'растениям',
        accusative: 'растения',
        instrumental: 'растениями',
        prepositional: 'растениях',
      },
    },
  },
  {
    id: CREATURE_TYPE_CONSTRUCT,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'конструкт',
        genitive: 'конструкта',
        dative: 'конструкту',
        accusative: 'конструкта',
        instrumental: 'конструктом',
        prepositional: 'конструкте',
      },
      plural: {
        nominative: 'конструкты',
        genitive: 'конструктов',
        dative: 'конструктам',
        accusative: 'конструктов',
        instrumental: 'конструктами',
        prepositional: 'конструктах',
      },
    },
  },
  {
    id: CREATURE_TYPE_UNDEAD,
    genderId: GENDER_FEMALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'нежить',
        genitive: 'нежити',
        dative: 'нежити',
        accusative: 'нежить',
        instrumental: 'нежитью',
        prepositional: 'нежити',
      },
      plural: {
        nominative: 'нежить',
        genitive: 'нежити',
        dative: 'нежити',
        accusative: 'нежить',
        instrumental: 'нежитью',
        prepositional: 'нежити',
      },
    },
  },
  {
    id: CREATURE_TYPE_DRAGON,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'дракон',
        genitive: 'дракона',
        dative: 'дракону',
        accusative: 'дракона',
        instrumental: 'драконом',
        prepositional: 'драконе',
      },
      plural: {
        nominative: 'драконы',
        genitive: 'драконов',
        dative: 'драконам',
        accusative: 'драконов',
        instrumental: 'драконами',
        prepositional: 'драконах',
      },
    },
  },
  {
    id: CREATURE_TYPE_ABERRATION,
    genderId: GENDER_FEMALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'аберрация',
        genitive: 'аберрации',
        dative: 'аберрации',
        accusative: 'аберрацию',
        instrumental: 'аберрацией',
        prepositional: 'аберрации',
      },
      plural: {
        nominative: 'аберрации',
        genitive: 'аберраций',
        dative: 'аберрациям',
        accusative: 'аберраций',
        instrumental: 'аберрациями',
        prepositional: 'аберрациях',
      },
    },
  },
  {
    id: CREATURE_TYPE_DEVIL,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'дьявол',
        genitive: 'дьявола',
        dative: 'дьяволу',
        accusative: 'дьявола',
        instrumental: 'дьяволом',
        prepositional: 'дьяволе',
      },
      plural: {
        nominative: 'дьяволы',
        genitive: 'дьяволов',
        dative: 'дьяволам',
        accusative: 'дьяволов',
        instrumental: 'дьяволами',
        prepositional: 'дьяволах',
      },
    },
  },
  {
    id: CREATURE_TYPE_DEMON,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'демон',
        genitive: 'демона',
        dative: 'демону',
        accusative: 'демона',
        instrumental: 'демоном',
        prepositional: 'демоне',
      },
      plural: {
        nominative: 'демоны',
        genitive: 'демонов',
        dative: 'демонам',
        accusative: 'демонов',
        instrumental: 'демонами',
        prepositional: 'демонах',
      },
    },
  },
  {
    id: CREATURE_TYPE_KOBOLD,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'кобольд',
        genitive: 'кобольда',
        dative: 'кобольду',
        accusative: 'кобольда',
        instrumental: 'кобольдом',
        prepositional: 'кобольде',
      },
      plural: {
        nominative: 'кобольды',
        genitive: 'кобольдов',
        dative: 'кобольдам',
        accusative: 'кобольдов',
        instrumental: 'кобольдами',
        prepositional: 'кобольдах',
      },
    },
  },
  {
    id: CREATURE_TYPE_TITAN,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'титан',
        genitive: 'титана',
        dative: 'титану',
        accusative: 'титана',
        instrumental: 'титаном',
        prepositional: 'титане',
      },
      plural: {
        nominative: 'титаны',
        genitive: 'титанов',
        dative: 'титанам',
        accusative: 'титанов',
        instrumental: 'титанами',
        prepositional: 'титанах',
      },
    },
  },
  {
    id: CREATURE_TYPE_BULLYWUG,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'жаболюд',
        genitive: 'жаболюда',
        dative: 'жаболюду',
        accusative: 'жаболюда',
        instrumental: 'жаболюдом',
        prepositional: 'жаболюде',
      },
      plural: {
        nominative: 'жаболюды',
        genitive: 'жаболюдов',
        dative: 'жаболюдам',
        accusative: 'жаболюдов',
        instrumental: 'жаболюдами',
        prepositional: 'жаболюдах',
      },
    },
  },
  {
    id: CREATURE_TYPE_GNOLL,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'гнолл',
        genitive: 'гнолла',
        dative: 'гноллу',
        accusative: 'гнолла',
        instrumental: 'гноллом',
        prepositional: 'гнолле',
      },
      plural: {
        nominative: 'гноллы',
        genitive: 'гноллов',
        dative: 'гноллам',
        accusative: 'гноллов',
        instrumental: 'гноллами',
        prepositional: 'гноллах',
      },
    },
  },
  {
    id: CREATURE_TYPE_GITH,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'гит',
        genitive: 'гита',
        dative: 'гиту',
        accusative: 'гита',
        instrumental: 'гитом',
        prepositional: 'гите',
      },
      plural: {
        nominative: 'гиты',
        genitive: 'гитов',
        dative: 'гитам',
        accusative: 'гитов',
        instrumental: 'гитами',
        prepositional: 'гитах',
      },
    },
  },
  {
    id: CREATURE_TYPE_GNOME,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'гном',
        genitive: 'гнома',
        dative: 'гному',
        accusative: 'гнома',
        instrumental: 'гномом',
        prepositional: 'гноме',
      },
      plural: {
        nominative: 'гномы',
        genitive: 'гномов',
        dative: 'гномам',
        accusative: 'гномов',
        instrumental: 'гномами',
        prepositional: 'гномах',
      },
    },
  },
  {
    id: CREATURE_TYPE_GRIMLOCK,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'гримлок',
        genitive: 'гримлока',
        dative: 'гримлоку',
        accusative: 'гримлока',
        instrumental: 'гримлоком',
        prepositional: 'гримлоке',
      },
      plural: {
        nominative: 'гримлоки',
        genitive: 'гримлоков',
        dative: 'гримлокам',
        accusative: 'гримлоков',
        instrumental: 'гримлоками',
        prepositional: 'гримлоках',
      },
    },
  },
  {
    id: CREATURE_TYPE_ORC,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'орк',
        genitive: 'орка',
        dative: 'орку',
        accusative: 'орка',
        instrumental: 'орком',
        prepositional: 'орке',
      },
      plural: {
        nominative: 'орки',
        genitive: 'орков',
        dative: 'оркам',
        accusative: 'орков',
        instrumental: 'орками',
        prepositional: 'орках',
      },
    },
  },
  {
    id: CREATURE_TYPE_GRUNG,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'грунг',
        genitive: 'грунга',
        dative: 'грунгу',
        accusative: 'грунга',
        instrumental: 'грунгом',
        prepositional: 'грунге',
      },
      plural: {
        nominative: 'грунги',
        genitive: 'грунгов',
        dative: 'грунгам',
        accusative: 'грунгов',
        instrumental: 'грунгами',
        prepositional: 'грунгах',
      },
    },
  },
  {
    id: CREATURE_TYPE_YUGOLOT,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'юголот',
        genitive: 'юголота',
        dative: 'юголоту',
        accusative: 'юголота',
        instrumental: 'юголотом',
        prepositional: 'юголоте',
      },
      plural: {
        nominative: 'юголоты',
        genitive: 'юголотов',
        dative: 'юголотам',
        accusative: 'юголотов',
        instrumental: 'юголотами',
        prepositional: 'юголотах',
      },
    },
  },
  {
    id: CREATURE_TYPE_DWARF,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'дварф',
        genitive: 'дварфа',
        dative: 'дварфу',
        accusative: 'дварфа',
        instrumental: 'дварфом',
        prepositional: 'дварфе',
      },
      plural: {
        nominative: 'дварфы',
        genitive: 'дварфов',
        dative: 'дварфам',
        accusative: 'дварфов',
        instrumental: 'дварфами',
        prepositional: 'дварфах',
      },
    },
  },
  {
    id: CREATURE_TYPE_SAHUAGIN,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'сахуагин',
        genitive: 'сахуагина',
        dative: 'сахуагину',
        accusative: 'сахуагина',
        instrumental: 'сахуагином',
        prepositional: 'сахуагине',
      },
      plural: {
        nominative: 'сахуагины',
        genitive: 'сахуагинов',
        dative: 'сахуагинам',
        accusative: 'сахуагинов',
        instrumental: 'сахуагинами',
        prepositional: 'сахуагинах',
      },
    },
  },
  {
    id: CREATURE_TYPE_ELF,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'эльф',
        genitive: 'эльфа',
        dative: 'эльфу',
        accusative: 'эльфа',
        instrumental: 'эльфом',
        prepositional: 'эльфе',
      },
      plural: {
        nominative: 'эльфы',
        genitive: 'эльфов',
        dative: 'эльфам',
        accusative: 'эльфов',
        instrumental: 'эльфами',
        prepositional: 'эльфах',
      },
    },
  },
  {
    id: CREATURE_TYPE_QUAGGOTH,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'кваггот',
        genitive: 'кваггота',
        dative: 'квагготу',
        accusative: 'кваггота',
        instrumental: 'квагготом',
        prepositional: 'квагготе',
      },
      plural: {
        nominative: 'квагготы',
        genitive: 'квагготов',
        dative: 'квагготам',
        accusative: 'квагготов',
        instrumental: 'квагготами',
        prepositional: 'квагготах',
      },
    },
  },
  {
    id: CREATURE_TYPE_LIZARDFOLK,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'людоящер',
        genitive: 'людоящера',
        dative: 'людоящеру',
        accusative: 'людоящера',
        instrumental: 'людоящером',
        prepositional: 'людоящере',
      },
      plural: {
        nominative: 'людоящеры',
        genitive: 'людоящеров',
        dative: 'людоящерам',
        accusative: 'людоящеров',
        instrumental: 'людоящерами',
        prepositional: 'людоящерах',
      },
    },
  },
  {
    id: CREATURE_TYPE_XVART,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'ксварт',
        genitive: 'ксварта',
        dative: 'ксварту',
        accusative: 'ксварта',
        instrumental: 'ксвартом',
        prepositional: 'ксварте',
      },
      plural: {
        nominative: 'ксварты',
        genitive: 'ксвартов',
        dative: 'ксвартам',
        accusative: 'ксвартов',
        instrumental: 'ксвартами',
        prepositional: 'ксвартах',
      },
    },
  },
  {
    id: CREATURE_TYPE_THRI_KREEN,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'три-крин',
        genitive: 'три-крина',
        dative: 'три-крину',
        accusative: 'три-крина',
        instrumental: 'три-крином',
        prepositional: 'три-крине',
      },
      plural: {
        nominative: 'три-крины',
        genitive: 'три-кринов',
        dative: 'три-кринам',
        accusative: 'три-кринов',
        instrumental: 'три-кринами',
        prepositional: 'три-кринах',
      },
    },
  },
  {
    id: CREATURE_TYPE_TROGLODYTE,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'троглодит',
        genitive: 'троглодита',
        dative: 'троглодиту',
        accusative: 'троглодита',
        instrumental: 'троглодитом',
        prepositional: 'троглодите',
      },
      plural: {
        nominative: 'троглодиты',
        genitive: 'троглодитов',
        dative: 'троглодитам',
        accusative: 'троглодитов',
        instrumental: 'троглодитами',
        prepositional: 'троглодитах',
      },
    },
  },
  {
    id: CREATURE_TYPE_GIANT,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'великан',
        genitive: 'великана',
        dative: 'великану',
        accusative: 'великана',
        instrumental: 'великаном',
        prepositional: 'великане',
      },
      plural: {
        nominative: 'великаны',
        genitive: 'великанов',
        dative: 'великанам',
        accusative: 'великанов',
        instrumental: 'великанами',
        prepositional: 'великанах',
      },
    },
  },
  {
    id: CREATURE_TYPE_FIRENEWT,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'огненный тритон',
        genitive: 'огненного тритона',
        dative: 'огненному тритону',
        accusative: 'огненного тритона',
        instrumental: 'огненным тритоном',
        prepositional: 'огненном тритоне',
      },
      plural: {
        nominative: 'огненные тритоны',
        genitive: 'огненных тритонов',
        dative: 'огненным тритонам',
        accusative: 'огненных тритонов',
        instrumental: 'огненными тритонами',
        prepositional: 'огненных тритонах',
      },
    },
  },
  {
    id: CREATURE_TYPE_FEY,
    genderId: GENDER_FEMALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'фея',
        genitive: 'феи',
        dative: 'фее',
        accusative: 'фею',
        instrumental: 'феей',
        prepositional: 'фее',
      },
      plural: {
        nominative: 'феи',
        genitive: 'фей',
        dative: 'феям',
        accusative: 'фей',
        instrumental: 'феями',
        prepositional: 'феях',
      },
    },
  },
  {
    id: CREATURE_TYPE_AARAKOCRA,
    genderId: GENDER_FEMALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'ааракокра',
        genitive: 'ааракокры',
        dative: 'ааракокре',
        accusative: 'ааракокру',
        instrumental: 'ааракокрой',
        prepositional: 'ааракокре',
      },
      plural: {
        nominative: 'ааракокры',
        genitive: 'ааракокр',
        dative: 'ааракокрам',
        accusative: 'ааракокр',
        instrumental: 'ааракокрами',
        prepositional: 'ааракокрах',
      },
    },
  },
  {
    id: CREATURE_TYPE_HUMAN,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'человек',
        genitive: 'человека',
        dative: 'человеку',
        accusative: 'человека',
        instrumental: 'человеком',
        prepositional: 'человеке',
      },
      plural: {
        nominative: 'люди',
        genitive: 'людей',
        dative: 'людям',
        accusative: 'людей',
        instrumental: 'людьми',
        prepositional: 'людях',
      },
    },
  },
  {
    id: CREATURE_TYPE_KUO_TOA,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'куо-тоа',
        genitive: 'куо-тоа',
        dative: 'куо-тоа',
        accusative: 'куо-тоа',
        instrumental: 'куо-тоа',
        prepositional: 'куо-тоа',
      },
      plural: {
        nominative: 'куо-тоа',
        genitive: 'куо-тоа',
        dative: 'куо-тоа',
        accusative: 'куо-тоа',
        instrumental: 'куо-тоа',
        prepositional: 'куо-тоа',
      },
    },
  },
  {
    id: CREATURE_TYPE_KENKU,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'кенку',
        genitive: 'кенку',
        dative: 'кенку',
        accusative: 'кенку',
        instrumental: 'кенку',
        prepositional: 'кенку',
      },
      plural: {
        nominative: 'кенку',
        genitive: 'кенку',
        dative: 'кенку',
        accusative: 'кенку',
        instrumental: 'кенку',
        prepositional: 'кенку',
      },
    },
  },
  {
    id: CREATURE_TYPE_YOAN_TI,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'юань-ти',
        genitive: 'юань-ти',
        dative: 'юань-ти',
        accusative: 'юань-ти',
        instrumental: 'юань-ти',
        prepositional: 'юань-ти',
      },
      plural: {
        nominative: 'юань-ти',
        genitive: 'юань-ти',
        dative: 'юань-ти',
        accusative: 'юань-ти',
        instrumental: 'юань-ти',
        prepositional: 'юань-ти',
      },
    },
  },
  {
    id: CREATURE_TYPE_ELEMENTAL,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'элементаль',
        genitive: 'элементаля',
        dative: 'элементалю',
        accusative: 'элементаля',
        instrumental: 'элементалем',
        prepositional: 'элементале',
      },
      plural: {
        nominative: 'элементали',
        genitive: 'элементалей',
        dative: 'элементалям',
        accusative: 'элементалей',
        instrumental: 'элементалями',
        prepositional: 'элементалях',
      },
    },
  },
  {
    id: CREATURE_TYPE_OOZE,
    genderId: GENDER_FEMALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'слизь',
        genitive: 'слизи',
        dative: 'слизи',
        accusative: 'слизь',
        instrumental: 'слизью',
        prepositional: 'слизи',
      },
      plural: {
        nominative: 'слизи',
        genitive: 'слизей',
        dative: 'слизям',
        accusative: 'слизей',
        instrumental: 'слизями',
        prepositional: 'слизях',
      },
    },
  },
  {
    id: CREATURE_TYPE_MERFOLK,
    genderId: GENDER_MALE,
    isRealRace: true,
    name: {
      singular: {
        nominative: 'мерфолк',
        genitive: 'мерфолка',
        dative: 'мерфолку',
        accusative: 'мерфолка',
        instrumental: 'мерфолком',
        prepositional: 'мерфолке',
      },
      plural: {
        nominative: 'мерфолки',
        genitive: 'мерфолков',
        dative: 'мерфолкам',
        accusative: 'мерфолков',
        instrumental: 'мерфолками',
        prepositional: 'мерфолках',
      },
    },
  },
]
  .sort(
    (
      {
        name: {
          singular: {
            nominative: A,
          },
        },
      },
      {
        name: {
          singular: {
            nominative: B,
          },
        },
      },
    ) => A > B
  )

module.exports = dndCreatureTypeList

module.exports.dndCreatureTypeCollection = listToCollectionById(dndCreatureTypeList)

module.exports.CREATURE_TYPE_AARAKOCRA = CREATURE_TYPE_AARAKOCRA
module.exports.CREATURE_TYPE_ABERRATION = CREATURE_TYPE_ABERRATION
module.exports.CREATURE_TYPE_ANY_RACE = CREATURE_TYPE_ANY_RACE
module.exports.CREATURE_TYPE_BEAST = CREATURE_TYPE_BEAST
module.exports.CREATURE_TYPE_BULLYWUG = CREATURE_TYPE_BULLYWUG
module.exports.CREATURE_TYPE_CELESTIAL = CREATURE_TYPE_CELESTIAL
module.exports.CREATURE_TYPE_CONSTRUCT = CREATURE_TYPE_CONSTRUCT
module.exports.CREATURE_TYPE_DEMON = CREATURE_TYPE_DEMON
module.exports.CREATURE_TYPE_DEVIL = CREATURE_TYPE_DEVIL
module.exports.CREATURE_TYPE_DRAGON = CREATURE_TYPE_DRAGON
module.exports.CREATURE_TYPE_DWARF = CREATURE_TYPE_DWARF
module.exports.CREATURE_TYPE_ELEMENTAL = CREATURE_TYPE_ELEMENTAL
module.exports.CREATURE_TYPE_ELF = CREATURE_TYPE_ELF
module.exports.CREATURE_TYPE_FEY = CREATURE_TYPE_FEY
module.exports.CREATURE_TYPE_FIEND = CREATURE_TYPE_FIEND
module.exports.CREATURE_TYPE_FIRENEWT = CREATURE_TYPE_FIRENEWT
module.exports.CREATURE_TYPE_GIANT = CREATURE_TYPE_GIANT
module.exports.CREATURE_TYPE_GITH = CREATURE_TYPE_GITH
module.exports.CREATURE_TYPE_GNOLL = CREATURE_TYPE_GNOLL
module.exports.CREATURE_TYPE_GNOME = CREATURE_TYPE_GNOME
module.exports.CREATURE_TYPE_GOBLINOID = CREATURE_TYPE_GOBLINOID
module.exports.CREATURE_TYPE_GRIMLOCK = CREATURE_TYPE_GRIMLOCK
module.exports.CREATURE_TYPE_GRUNG = CREATURE_TYPE_GRUNG
module.exports.CREATURE_TYPE_HUMAN = CREATURE_TYPE_HUMAN
module.exports.CREATURE_TYPE_HUMANOID = CREATURE_TYPE_HUMANOID
module.exports.CREATURE_TYPE_KENKU = CREATURE_TYPE_KENKU
module.exports.CREATURE_TYPE_KOBOLD = CREATURE_TYPE_KOBOLD
module.exports.CREATURE_TYPE_KUO_TOA = CREATURE_TYPE_KUO_TOA
module.exports.CREATURE_TYPE_LIZARDFOLK = CREATURE_TYPE_LIZARDFOLK
module.exports.CREATURE_TYPE_MERFOLK = CREATURE_TYPE_MERFOLK
module.exports.CREATURE_TYPE_MONSTER = CREATURE_TYPE_MONSTER
module.exports.CREATURE_TYPE_OOZE = CREATURE_TYPE_OOZE
module.exports.CREATURE_TYPE_ORC = CREATURE_TYPE_ORC
module.exports.CREATURE_TYPE_PLANT = CREATURE_TYPE_PLANT
module.exports.CREATURE_TYPE_QUAGGOTH = CREATURE_TYPE_QUAGGOTH
module.exports.CREATURE_TYPE_SAHUAGIN = CREATURE_TYPE_SAHUAGIN
module.exports.CREATURE_TYPE_SHAPESHIFTER = CREATURE_TYPE_SHAPESHIFTER
module.exports.CREATURE_TYPE_THRI_KREEN = CREATURE_TYPE_THRI_KREEN
module.exports.CREATURE_TYPE_TITAN = CREATURE_TYPE_TITAN
module.exports.CREATURE_TYPE_TROGLODYTE = CREATURE_TYPE_TROGLODYTE
module.exports.CREATURE_TYPE_UNDEAD = CREATURE_TYPE_UNDEAD
module.exports.CREATURE_TYPE_XVART = CREATURE_TYPE_XVART
module.exports.CREATURE_TYPE_YOAN_TI = CREATURE_TYPE_YOAN_TI
module.exports.CREATURE_TYPE_YUGOLOT = CREATURE_TYPE_YUGOLOT
