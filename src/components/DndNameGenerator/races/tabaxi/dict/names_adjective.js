import adjectiveList from './adjectiveList'

export default adjectiveList.map(
  (
    {
      single,
      single: {
        female: singleFemale,
        male: singleMale,
        undefined: singleUndefined,
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
      undefined: {
        ...singleUndefined,
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
      undefined: {
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
