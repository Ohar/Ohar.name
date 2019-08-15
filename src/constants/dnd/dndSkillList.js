import listToCollectionById from '@/utils/listToCollectionById'

export const SKILL_ACROBATICS = 'acrobatics'
export const SKILL_ANIMAL_HANDLING = 'animal_handling'
export const SKILL_ARCANA = 'arcana'
export const SKILL_ATHLETICS = 'athletics'
export const SKILL_DECEPTION = 'deception'
export const SKILL_HISTORY = 'history'
export const SKILL_INSIGHT = 'insight'
export const SKILL_INTIMIDATION = 'intimidation'
export const SKILL_INVESTIGATION = 'investigation'
export const SKILL_MEDICINE = 'medicine'
export const SKILL_NATURE = 'nature'
export const SKILL_PERCEPTION = 'perception'
export const SKILL_PERFORMANCE = 'performance'
export const SKILL_PERSUASION = 'persuasion'
export const SKILL_RELIGION = 'religion'
export const SKILL_SLEIGHT_OF_HAND = 'sleight_of_hand'
export const SKILL_STEALTH = 'stealth'
export const SKILL_SURVIVAL = 'survival'

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
    name: 'Наложение рук',
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

export default dndSkillList

export const dndSkillCollection = listToCollectionById(dndSkillList)
