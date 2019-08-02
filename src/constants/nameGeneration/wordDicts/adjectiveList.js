import adjectiveRawList from './adjectiveRawList'

export default adjectiveRawList.map(
  (
    {
      single,
      single: {
        female: singleFemale,
        male: singleMale,
        middle: singleMiddle,
      },
      dualFemale,
      dualFemale: {
        genitive: dualGenitive,
      },
      ...rest
    },
  ) => ({
    ...rest,
    single: {
      ...single,
      female: {
        ...singleFemale,
        prepositional: singleFemale.genitive,
      },
      middle: {
        ...singleMiddle,
        genitive: singleMale.genitive,
        prepositional: singleMale.prepositional,
      },
    },
    dual: {
      female: {
        ...dualFemale,
        prepositional: dualGenitive,
      },
      male: {
        nominative: dualGenitive,
        genitive: dualGenitive,
        prepositional: dualGenitive,
      },
      middle: {
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
  }),
)
