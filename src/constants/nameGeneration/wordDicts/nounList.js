import mapGender from '@/utils/nameGeneration/mapGender'

import nounFemaleList from './nounFemaleList'
import nounMaleList from './nounMaleList'
import nounMiddleList from './nounMiddleList'

export default [
  ...nounFemaleList.map(mapGender('female')),
  ...nounMaleList.map(mapGender('male')),
  ...nounMiddleList.map(mapGender('middle')),
].map(
  ({ single, plural, ...rest }) => ({
    ...rest,
    single,
    dual: {
      nominative: single.genitive,
      genitive: plural.genitive,
      prepositional: plural.prepositional,
    },
    plural,
  }),
)
