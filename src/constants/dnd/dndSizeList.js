const listToCollectionById = require('./../../utils/listToCollectionById')
const {
  GENDER_MALE,
  GENDER_FEMALE,
  GENDER_MIDDLE,
} = require('./../genderList')

const SIZE_ANY = 'any'
const SIZE_TINY = 'tiny'
const SIZE_SMALL = 'small'
const SIZE_MEDIUM = 'medium'
const SIZE_LARGE = 'large'
const SIZE_HUGE = 'huge'
const SIZE_GARGANTUA = 'gargantua'

const dndSizeList = [
  {
    id: SIZE_ANY,
    name: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'Любая',
          genitive: 'Любой'
        },
        [GENDER_MALE]: {
          nominative: 'Любой',
          genitive: 'Любого',
          prepositional: 'Любом'
        },
        [GENDER_MIDDLE]: {
          nominative: 'Любое'
        }
      },
      dualFemale: {
        nominative: 'Любые',
        genitive: 'Любых'
      }
    },
  },
  {
    id: SIZE_TINY,
    name: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'Крошечная',
          genitive: 'Крошечной'
        },
        [GENDER_MALE]: {
          nominative: 'Крошечный',
          genitive: 'Крошечного',
          prepositional: 'Крошечном'
        },
        [GENDER_MIDDLE]: {
          nominative: 'Крошечное'
        }
      },
      dualFemale: {
        nominative: 'Крошечные',
        genitive: 'Крошечных'
      }
    },
  },
  {
    id: SIZE_SMALL,
    name: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'Маленькая',
          genitive: 'Маленькой'
        },
        [GENDER_MALE]: {
          nominative: 'Маленький',
          genitive: 'Маленького',
          prepositional: 'Маленьком'
        },
        [GENDER_MIDDLE]: {
          nominative: 'Маленькое'
        }
      },
      dualFemale: {
        nominative: 'Маленькие',
        genitive: 'Маленьких'
      }
    },
  },
  {
    id: SIZE_MEDIUM,
    name: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'Средняя',
          genitive: 'Средней'
        },
        [GENDER_MALE]: {
          nominative: 'Средний',
          genitive: 'Среднего',
          prepositional: 'Среднем'
        },
        [GENDER_MIDDLE]: {
          nominative: 'Среднее'
        }
      },
      dualFemale: {
        nominative: 'Средние',
        genitive: 'Средних'
      }
    },
  },
  {
    id: SIZE_LARGE,
    name: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'Большая',
          genitive: 'Большой'
        },
        [GENDER_MALE]: {
          nominative: 'Большой',
          genitive: 'Большого',
          prepositional: 'Большом'
        },
        [GENDER_MIDDLE]: {
          nominative: 'Большое'
        }
      },
      dualFemale: {
        nominative: 'Большие',
        genitive: 'Больших'
      }
    },
  },
  {
    id: SIZE_HUGE,
    name: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'Огромная',
          genitive: 'Огромной'
        },
        [GENDER_MALE]: {
          nominative: 'Огромный',
          genitive: 'Огромного',
          prepositional: 'Огромном'
        },
        [GENDER_MIDDLE]: {
          nominative: 'Огромное'
        }
      },
      dualFemale: {
        nominative: 'Огромные',
        genitive: 'Огромных'
      }
    },
  },
  {
    id: SIZE_GARGANTUA,
    name: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'Громадная',
          genitive: 'Громадной'
        },
        [GENDER_MALE]: {
          nominative: 'Громадный',
          genitive: 'Громадного',
          prepositional: 'Громадном'
        },
        [GENDER_MIDDLE]: {
          nominative: 'Громадное'
        }
      },
      dualFemale: {
        nominative: 'Громадные',
        genitive: 'Громадных'
      }
    },
  }
]

module.exports = dndSizeList

module.exports.dndSizeCollection = listToCollectionById(dndSizeList)

module.exports.SIZE_ANY = SIZE_ANY
module.exports.SIZE_TINY = SIZE_TINY
module.exports.SIZE_SMALL = SIZE_SMALL
module.exports.SIZE_MEDIUM = SIZE_MEDIUM
module.exports.SIZE_LARGE = SIZE_LARGE
module.exports.SIZE_HUGE = SIZE_HUGE
module.exports.SIZE_GARGANTUA = SIZE_GARGANTUA
