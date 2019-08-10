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
    name: 'атлетика',
  },
  {
    id: SKILL_ACROBATICS,
    name: 'акробатика',
  },
  {
    id: SKILL_SLEIGHT_OF_HAND,
    name: 'наложение рук',
  },
  {
    id: SKILL_STEALTH,
    name: 'скрытность',
  },
  {
    id: SKILL_ARCANA,
    name: 'магия',
  },
  {
    id: SKILL_HISTORY,
    name: 'история',
  },
  {
    id: SKILL_INVESTIGATION,
    name: 'расследование',
  },
  {
    id: SKILL_NATURE,
    name: 'природа',
  },
  {
    id: SKILL_RELIGION,
    name: 'религия',
  },
  {
    id: SKILL_ANIMAL_HANDLING,
    name: 'обращение с животными',
  },
  {
    id: SKILL_INSIGHT,
    name: 'проницательность',
  },
  {
    id: SKILL_MEDICINE,
    name: 'медицина',
  },
  {
    id: SKILL_PERCEPTION,
    name: 'внимательность',
  },
  {
    id: SKILL_SURVIVAL,
    name: 'выживание',
  },
  {
    id: SKILL_DECEPTION,
    name: 'обман',
  },
  {
    id: SKILL_INTIMIDATION,
    name: 'запугивание',
  },
  {
    id: SKILL_PERFORMANCE,
    name: 'выступление',
  },
  {
    id: SKILL_PERSUASION,
    name: 'убеждение',
  },
]

export default dndSkillList

export const dndSkillCollection = listToCollectionById(dndSkillList)
