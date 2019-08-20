const listToCollectionById = require('./../../utils/listToCollectionById')

const PC_CLASS_BARBARIAN = 'barbarian'
const PC_CLASS_BARD = 'bard'
const PC_CLASS_DRUID = 'druid'
const PC_CLASS_FIGHTER = 'fighter'
const PC_CLASS_MONK = 'monk'
const PC_CLASS_PALADIN = 'paladin'
const PC_CLASS_PRIEST = 'priest'
const PC_CLASS_RANGER = 'ranger'
const PC_CLASS_ROGUE = 'rogue'
const PC_CLASS_SORCERER = 'sorcerer'
const PC_CLASS_WARLOCK = 'warlock'
const PC_CLASS_WIZARD = 'wizard'

const dndPcClassList = [
  {
    id: PC_CLASS_BARBARIAN,
    name: {
      singular: {
        nominative: 'варвар',
        genitive: 'варвара',
        dative: 'варвару',
        accusative: 'варвара',
        instrumental: 'варваром',
        prepositional: 'варваре',
      },
      plural: {
        nominative: 'варвары',
        genitive: 'варваров',
        dative: 'варварам',
        accusative: 'варваров',
        instrumental: 'варварами',
        prepositional: 'варварах',
      },
    },
  },
  {
    id: PC_CLASS_BARD,
    name: {
      singular: {
        nominative: 'бард',
        genitive: 'барда',
        dative: 'барду',
        accusative: 'барда',
        instrumental: 'бардом',
        prepositional: 'барде',
      },
      plural: {
        nominative: 'барды',
        genitive: 'бардов',
        dative: 'бардам',
        accusative: 'бардов',
        instrumental: 'бардами',
        prepositional: 'бардах',
      },
    },
  },
  {
    id: PC_CLASS_PRIEST,
    name: {
      singular: {
        nominative: 'жрец',
        genitive: 'жреца',
        dative: 'жрецу',
        accusative: 'жреца',
        instrumental: 'жрецом',
        prepositional: 'жреце',
      },
      plural: {
        nominative: 'жрецы',
        genitive: 'жрецов',
        dative: 'жрецам',
        accusative: 'жрецов',
        instrumental: 'жрецами',
        prepositional: 'жрецах',
      },
    },
  },
  {
    id: PC_CLASS_DRUID,
    name: {
      singular: {
        nominative: 'друид',
        genitive: 'друида',
        dative: 'друиду',
        accusative: 'друида',
        instrumental: 'друидом',
        prepositional: 'друиде',
      },
      plural: {
        nominative: 'друиды',
        genitive: 'друидов',
        dative: 'друидам',
        accusative: 'друидов',
        instrumental: 'друидами',
        prepositional: 'друидах',
      },
    },
  },
  {
    id: PC_CLASS_FIGHTER,
    name: {
      singular: {
        nominative: 'воин',
        genitive: 'воина',
        dative: 'воину',
        accusative: 'воина',
        instrumental: 'воином',
        prepositional: 'воине',
      },
      plural: {
        nominative: 'воины',
        genitive: 'воинов',
        dative: 'воинам',
        accusative: 'воинов',
        instrumental: 'воинами',
        prepositional: 'воинах',
      },
    },
  },
  {
    id: PC_CLASS_MONK,
    name: {
      singular: {
        nominative: 'монах',
        genitive: 'монаха',
        dative: 'монаху',
        accusative: 'монаха',
        instrumental: 'монахом',
        prepositional: 'монахе',
      },
      plural: {
        nominative: 'монахы',
        genitive: 'монахов',
        dative: 'монахам',
        accusative: 'монахов',
        instrumental: 'монахами',
        prepositional: 'монахах',
      },
    },
  },
  {
    id: PC_CLASS_PALADIN,
    name: {
      singular: {
        nominative: 'паладин',
        genitive: 'паладина',
        dative: 'паладину',
        accusative: 'паладина',
        instrumental: 'паладином',
        prepositional: 'паладине',
      },
      plural: {
        nominative: 'паладины',
        genitive: 'паладинов',
        dative: 'паладинам',
        accusative: 'паладинов',
        instrumental: 'паладинами',
        prepositional: 'паладинах',
      },
    },
  },
  {
    id: PC_CLASS_RANGER,
    name: {
      singular: {
        nominative: 'следопыт',
        genitive: 'следопыта',
        dative: 'следопыту',
        accusative: 'следопыта',
        instrumental: 'следопытом',
        prepositional: 'следопыте',
      },
      plural: {
        nominative: 'следопыты',
        genitive: 'следопытов',
        dative: 'следопытам',
        accusative: 'следопытов',
        instrumental: 'следопытами',
        prepositional: 'следопытах',
      },
    },
  },
  {
    id: PC_CLASS_ROGUE,
    name: {
      singular: {
        nominative: 'плут',
        genitive: 'плута',
        dative: 'плуту',
        accusative: 'плута',
        instrumental: 'плутом',
        prepositional: 'плуте',
      },
      plural: {
        nominative: 'плуты',
        genitive: 'плутов',
        dative: 'плутам',
        accusative: 'плутов',
        instrumental: 'плутами',
        prepositional: 'плутах',
      },
    },
  },
  {
    id: PC_CLASS_SORCERER,
    name: {
      singular: {
        nominative: 'чародей',
        genitive: 'чародея',
        dative: 'чароде.',
        accusative: 'чародеz',
        instrumental: 'чародеем',
        prepositional: 'чародее',
      },
      plural: {
        nominative: 'чародеи',
        genitive: 'чародеев',
        dative: 'чародеям',
        accusative: 'чародеев',
        instrumental: 'чародеями',
        prepositional: 'чародеях',
      },
    },
  },
  {
    id: PC_CLASS_WARLOCK,
    name: {
      singular: {
        nominative: 'колдун',
        genitive: 'колдуна',
        dative: 'колдуну',
        accusative: 'колдуна',
        instrumental: 'колдуном',
        prepositional: 'колдуне',
      },
      plural: {
        nominative: 'колдуны',
        genitive: 'колдунов',
        dative: 'колдунам',
        accusative: 'колдунов',
        instrumental: 'колдунами',
        prepositional: 'колдунах',
      },
    },
  },
  {
    id: PC_CLASS_WIZARD,
    name: {
      singular: {
        nominative: 'волшебник',
        genitive: 'волшебника',
        dative: 'волшебнику',
        accusative: 'волшебника',
        instrumental: 'волшебником',
        prepositional: 'волшебнике',
      },
      plural: {
        nominative: 'волшебникы',
        genitive: 'волшебников',
        dative: 'волшебникам',
        accusative: 'волшебников',
        instrumental: 'волшебниками',
        prepositional: 'волшебниках',
      },
    },
  },
]

module.exports = dndPcClassList

module.exports.dndPcClassCollection = listToCollectionById(dndPcClassList)

module.exports.PC_CLASS_BARBARIAN = PC_CLASS_BARBARIAN
module.exports.PC_CLASS_BARD = PC_CLASS_BARD
module.exports.PC_CLASS_DRUID = PC_CLASS_DRUID
module.exports.PC_CLASS_FIGHTER = PC_CLASS_FIGHTER
module.exports.PC_CLASS_MONK = PC_CLASS_MONK
module.exports.PC_CLASS_PALADIN = PC_CLASS_PALADIN
module.exports.PC_CLASS_PRIEST = PC_CLASS_PRIEST
module.exports.PC_CLASS_RANGER = PC_CLASS_RANGER
module.exports.PC_CLASS_ROGUE = PC_CLASS_ROGUE
module.exports.PC_CLASS_SORCERER = PC_CLASS_SORCERER
module.exports.PC_CLASS_WARLOCK = PC_CLASS_WARLOCK
module.exports.PC_CLASS_WIZARD = PC_CLASS_WIZARD
