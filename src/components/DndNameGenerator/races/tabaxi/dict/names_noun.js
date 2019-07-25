import nounFemaleList from './nounFemaleList'
import nounMaleList from './nounMaleList'
import nounUndefinedList from './nounUndefinedList'

export default [
  ...nounFemaleList,
  ...nounMaleList,
  ...nounUndefinedList,
].map(
  ({ single, plural, ...rest }) => ({
    ...rest,
    single,
    dual: {
      nominative: single.genitive,
      genitive: plural.nominative,
      prepositional: plural.prepositional,
    },
    plural: {
      ...plural,
      genitive: plural.nominative,
    },
  }),
)
