const listToCollectionById = require('./../../utils/listToCollectionById')

const SENSE_PASSIVE_PERCEPTION = 'passive_perception'
const SENSE_BLIND_VISION = 'blind_vision'
const SENSE_DARK_VISION = 'dark_vision'
const SENSE_TRUE_VISION = 'true_vision'
const SENSE_VIBRATION_SENSE = 'vibration_sense'

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

module.exports = dndSenseList

module.exports.dndSenseCollection = listToCollectionById(dndSenseList)

module.exports.SENSE_PASSIVE_PERCEPTION = SENSE_PASSIVE_PERCEPTION
module.exports.SENSE_BLIND_VISION = SENSE_BLIND_VISION
module.exports.SENSE_DARK_VISION = SENSE_DARK_VISION
module.exports.SENSE_TRUE_VISION = SENSE_TRUE_VISION
module.exports.SENSE_VIBRATION_SENSE = SENSE_VIBRATION_SENSE
