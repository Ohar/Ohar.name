import listToCollectionById from '@/utils/listToCollectionById'

export const SENSE_PASSIVE_PERCEPTION = 'passive_perception'
export const SENSE_BLIND_VISION = 'blind_vision'
export const SENSE_DARK_VISION = 'dark_vision'
export const SENSE_TRUE_VISION = 'true_vision'
export const SENSE_VIBRATION_SENSE = 'vibration_sense'

const dndSenseList = [
  {
    id: SENSE_PASSIVE_PERCEPTION,
    name: 'пассивная Внимательность',
    noUnits: true,
  },
  {
    id: SENSE_BLIND_VISION,
    name: 'слепое зрение',
  },
  {
    id: SENSE_DARK_VISION,
    name: 'тёмное зрение',
  },
  {
    id: SENSE_TRUE_VISION,
    name: 'истинное зрение',
  },
  {
    id: SENSE_VIBRATION_SENSE,
    name: 'чувство вибрации',
  },
]

export default dndSenseList

export const dndSenseCollection = listToCollectionById(dndSenseList)
