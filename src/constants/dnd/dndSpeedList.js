const listToCollectionById = require('./../../utils/listToCollectionById')

const SPEED_CLIMB = 'climb'
const SPEED_DIG = 'dig'
const SPEED_FLY = 'fly'
const SPEED_SWIM = 'swim'
const SPEED_WALK = 'walk'

const dndSpeedList = [
  {
    id: SPEED_CLIMB,
    name: 'лазая',
  },
  {
    id: SPEED_DIG,
    name: 'копая',
  },
  {
    id: SPEED_FLY,
    name: 'летая',
  },
  {
    id: SPEED_SWIM,
    name: 'плавая',
  },
  {
    id: SPEED_WALK,
    name: '',
  },
]

module.exports = dndSpeedList

module.exports.dndSpeedCollection = listToCollectionById(dndSpeedList)

module.exports.SPEED_CLIMB = SPEED_CLIMB
module.exports.SPEED_DIG = SPEED_DIG
module.exports.SPEED_FLY = SPEED_FLY
module.exports.SPEED_SWIM = SPEED_SWIM
module.exports.SPEED_WALK = SPEED_WALK
