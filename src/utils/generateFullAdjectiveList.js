import {
  GENDER_MALE,
  GENDER_FEMALE,
  GENDER_MIDDLE,
} from '@/constants/genderList'

export default (
  item => {
    const hasName = Boolean(item.name)
    const {
      single,
      single: {
        [GENDER_FEMALE]: singleFemale,
        [GENDER_MALE]: singleMale,
        [GENDER_MIDDLE]: singleMiddle,
      },
      dualFemale,
      dualFemale: {
        genitive: dualGenitive,
      },
    } = hasName
      ? item.name
      : item

    const result = {
      single: {
        ...single,
        [GENDER_FEMALE]: {
          ...singleFemale,
          prepositional: singleFemale.genitive,
        },
        [GENDER_MIDDLE]: {
          ...singleMiddle,
          genitive: singleMale.genitive,
          prepositional: singleMale.prepositional,
        },
      },
      dual: {
        [GENDER_FEMALE]: {
          ...dualFemale,
          prepositional: dualGenitive,
        },
        [GENDER_MALE]: {
          nominative: dualGenitive,
          genitive: dualGenitive,
          prepositional: dualGenitive,
        },
        [GENDER_MIDDLE]: {
          nominative: dualGenitive,
          genitive: dualGenitive,
          prepositional: dualGenitive,
        },
      },
      plural: {
        nominative: dualGenitive,
        genitive: dualGenitive,
        prepositional: dualGenitive,
      },
    }

    return hasName
      ? {
        ...item,
        name: {
          ...item.name,
          ...result
        }
      }
      : {
        ...item,
        ...result
      }
  }
)
