import listToCollectionById from '@/utils/listToCollectionById'

const dndCreatureTypeList = [
  {
    id: 'any_race',
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
    id: 'humanoid',
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
    id: 'goblinoid',
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
    id: 'shapeshifter',
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
    id: 'beast',
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
    id: 'fiend',
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
    id: 'celestial',
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
    id: 'monster',
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
    id: 'plant',
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
    id: 'construct',
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
    id: 'undead',
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
    id: 'dragon',
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
    id: 'aberration',
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
    id: 'devil',
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
    id: 'demon',
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
    id: 'kobold',
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
]

export default dndCreatureTypeList

export const dndCreatureTypeCollection = listToCollectionById(dndCreatureTypeList)
