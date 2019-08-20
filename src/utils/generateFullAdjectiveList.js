import {
  GENDER_MALE,
  GENDER_FEMALE,
  GENDER_MIDDLE,
} from '@/constants/genderList'

export default (
  item => {
    const hasName = Boolean(item.name)
    const {
      singular,
      singular: {
        [GENDER_FEMALE]: singularFemale,
        [GENDER_MALE]: singularMale,
        [GENDER_MIDDLE]: singularMiddle,
      },
      dualFemale,
      dualFemale: {
        genitive: dualGenitive,
      },
    } = hasName
      ? item.name
      : item

    const result = {
      singular: {
        ...singular,
        [GENDER_FEMALE]: {
          ...singularFemale,
          prepositional: singularFemale.genitive,
        },
        [GENDER_MIDDLE]: {
          ...singularMiddle,
          genitive: singularMale.genitive,
          prepositional: singularMale.prepositional,
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
