import listToCollectionById from '@/utils/listToCollectionById'

export const CREATURE_AARAKOCRA = 'aarakocra'
export const CREATURE_ABERRATION = 'aberration'
export const CREATURE_ANY_RACE = 'any_race'
export const CREATURE_BEAST = 'beast'
export const CREATURE_BULLYWUG = 'bullywug'
export const CREATURE_CELESTIAL = 'celestial'
export const CREATURE_CONSTRUCT = 'construct'
export const CREATURE_DEMON = 'demon'
export const CREATURE_DEVIL = 'devil'
export const CREATURE_DRAGON = 'dragon'
export const CREATURE_DWARF = 'dwarf'
export const CREATURE_ELEMENTAL = 'elemental'
export const CREATURE_ELF = 'elf'
export const CREATURE_FEY = 'fey'
export const CREATURE_FIEND = 'fiend'
export const CREATURE_FIRE_GIANT = 'fire_giant'
export const CREATURE_FIRENEWT = 'firenewt'
export const CREATURE_GIANT = 'giant'
export const CREATURE_GITH = 'gith'
export const CREATURE_GNOLL = 'gnoll'
export const CREATURE_GNOME = 'gnome'
export const CREATURE_GOBLINOID = 'goblinoid'
export const CREATURE_GRIMLOCK = 'grimlock'
export const CREATURE_GRUNG = 'grung'
export const CREATURE_HUMAN = 'human'
export const CREATURE_HUMANOID = 'humanoid'
export const CREATURE_JELLY = 'jelly'
export const CREATURE_KENKU = 'kenku'
export const CREATURE_KOBOLD = 'kobold'
export const CREATURE_KUO_TOA = 'kuo_toa'
export const CREATURE_LIZARDFOLK = 'lizardfolk'
export const CREATURE_MONSTER = 'monster'
export const CREATURE_ORC = 'orc'
export const CREATURE_PLANT = 'plant'
export const CREATURE_QUAGGOTH = 'quaggoth'
export const CREATURE_SAHUAGIN = 'sahuagin'
export const CREATURE_SHAPESHIFTER = 'shapeshifter'
export const CREATURE_THRI_KREEN = 'thri_kreen'
export const CREATURE_TITAN = 'titan'
export const CREATURE_TROGLODYTE = 'troglodyte'
export const CREATURE_UNDEAD = 'undead'
export const CREATURE_XVART = 'xvart'
export const CREATURE_YOAN_TI = 'yoan_ti'
export const CREATURE_YUGOLOT = 'yugolot'

const dndCreatureTypeList = [
  {
    id: CREATURE_ANY_RACE,
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
    id: CREATURE_HUMANOID,
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
    id: CREATURE_GOBLINOID,
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
    id: CREATURE_SHAPESHIFTER,
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
    id: CREATURE_BEAST,
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
    id: CREATURE_FIEND,
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
    id: CREATURE_CELESTIAL,
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
    id: CREATURE_MONSTER,
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
    id: CREATURE_PLANT,
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
    id: CREATURE_CONSTRUCT,
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
    id: CREATURE_UNDEAD,
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
    id: CREATURE_DRAGON,
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
    id: CREATURE_ABERRATION,
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
    id: CREATURE_DEVIL,
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
    id: CREATURE_DEMON,
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
    id: CREATURE_KOBOLD,
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
    id: CREATURE_TITAN,
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
    id: CREATURE_BULLYWUG,
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
    id: CREATURE_GNOLL,
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
    id: CREATURE_GITH,
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
    id: CREATURE_GNOME,
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
    id: CREATURE_GRIMLOCK,
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
    id: CREATURE_ORC,
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
    id: CREATURE_GRUNG,
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
    id: CREATURE_YUGOLOT,
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
    id: CREATURE_DWARF,
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
    id: CREATURE_SAHUAGIN,
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
    id: CREATURE_ELF,
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
    id: CREATURE_QUAGGOTH,
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
    id: CREATURE_LIZARDFOLK,
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
    id: CREATURE_XVART,
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
    id: CREATURE_THRI_KREEN,
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
    id: CREATURE_TROGLODYTE,
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
    id: CREATURE_GIANT,
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
    id: CREATURE_FIRE_GIANT,
    name: {
      singular: {
        nominative: 'огненный великан',
        genitive: 'огненного великана',
        dative: 'огненному великану',
        accusative: 'огненного великана',
        instrumental: 'огненным великаном',
        prepositional: 'огненном великане',
      },
      plural: {
        nominative: 'огненные великаны',
        genitive: 'огненных великанов',
        dative: 'огненным великанам',
        accusative: 'огненных великанов',
        instrumental: 'огненными великанами',
        prepositional: 'огненных великанах',
      },
    },
  },
  {
    id: CREATURE_FIRENEWT,
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
    id: CREATURE_FEY,
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
    id: CREATURE_AARAKOCRA,
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
    id: CREATURE_HUMAN,
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
    id: CREATURE_KUO_TOA,
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
    id: CREATURE_KENKU,
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
    id: CREATURE_YOAN_TI,
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
    id: CREATURE_ELEMENTAL,
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
    id: CREATURE_JELLY,
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
]

export default dndCreatureTypeList

export const dndCreatureTypeCollection = listToCollectionById(dndCreatureTypeList)
