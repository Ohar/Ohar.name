const listToCollectionById = require('./../../utils/listToCollectionById')

const SKILL_ACROBATICS = 'acrobatics'
const SKILL_ANIMAL_HANDLING = 'animal_handling'
const SKILL_ARCANA = 'arcana'
const SKILL_ATHLETICS = 'athletics'
const SKILL_DECEPTION = 'deception'
const SKILL_HISTORY = 'history'
const SKILL_INSIGHT = 'insight'
const SKILL_INTIMIDATION = 'intimidation'
const SKILL_INVESTIGATION = 'investigation'
const SKILL_MEDICINE = 'medicine'
const SKILL_NATURE = 'nature'
const SKILL_PERCEPTION = 'perception'
const SKILL_PERFORMANCE = 'performance'
const SKILL_PERSUASION = 'persuasion'
const SKILL_RELIGION = 'religion'
const SKILL_SLEIGHT_OF_HAND = 'sleight_of_hand'
const SKILL_STEALTH = 'stealth'
const SKILL_SURVIVAL = 'survival'

const dndSkillList = [
  {
    id: SKILL_ATHLETICS,
    name: 'Атлетика',
  },
  {
    id: SKILL_ACROBATICS,
    name: 'Акробатика',
  },
  {
    id: SKILL_SLEIGHT_OF_HAND,
    name: 'Ловкость рук',
  },
  {
    id: SKILL_STEALTH,
    name: 'Скрытность',
  },
  {
    id: SKILL_ARCANA,
    name: 'Магия',
  },
  {
    id: SKILL_HISTORY,
    name: 'История',
  },
  {
    id: SKILL_INVESTIGATION,
    name: 'Анализ',
  },
  {
    id: SKILL_NATURE,
    name: 'Природа',
  },
  {
    id: SKILL_RELIGION,
    name: 'Религия',
  },
  {
    id: SKILL_ANIMAL_HANDLING,
    name: 'Обращение с животными',
  },
  {
    id: SKILL_INSIGHT,
    name: 'Проницательность',
  },
  {
    id: SKILL_MEDICINE,
    name: 'Медицина',
  },
  {
    id: SKILL_PERCEPTION,
    name: 'Внимательность',
  },
  {
    id: SKILL_SURVIVAL,
    name: 'Выживание',
  },
  {
    id: SKILL_DECEPTION,
    name: 'Обман',
  },
  {
    id: SKILL_INTIMIDATION,
    name: 'Запугивание',
  },
  {
    id: SKILL_PERFORMANCE,
    name: 'Выступление',
  },
  {
    id: SKILL_PERSUASION,
    name: 'Убеждение',
  },
]

module.exports = dndSkillList

module.exports.dndSkillCollection = listToCollectionById(dndSkillList)

module.exports.SKILL_ACROBATICS = SKILL_ACROBATICS
module.exports.SKILL_ANIMAL_HANDLING = SKILL_ANIMAL_HANDLING
module.exports.SKILL_ARCANA = SKILL_ARCANA
module.exports.SKILL_ATHLETICS = SKILL_ATHLETICS
module.exports.SKILL_DECEPTION = SKILL_DECEPTION
module.exports.SKILL_HISTORY = SKILL_HISTORY
module.exports.SKILL_INSIGHT = SKILL_INSIGHT
module.exports.SKILL_INTIMIDATION = SKILL_INTIMIDATION
module.exports.SKILL_INVESTIGATION = SKILL_INVESTIGATION
module.exports.SKILL_MEDICINE = SKILL_MEDICINE
module.exports.SKILL_NATURE = SKILL_NATURE
module.exports.SKILL_PERCEPTION = SKILL_PERCEPTION
module.exports.SKILL_PERFORMANCE = SKILL_PERFORMANCE
module.exports.SKILL_PERSUASION = SKILL_PERSUASION
module.exports.SKILL_RELIGION = SKILL_RELIGION
module.exports.SKILL_SLEIGHT_OF_HAND = SKILL_SLEIGHT_OF_HAND
module.exports.SKILL_STEALTH = SKILL_STEALTH
module.exports.SKILL_SURVIVAL = SKILL_SURVIVAL
