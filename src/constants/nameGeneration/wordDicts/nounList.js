import mapGender from '@/utils/nameGeneration/mapGender'

import nounFemaleList from './nounFemaleList'
import nounMaleList from './nounMaleList'
import nounMiddleList from './nounMiddleList'

const nounList = [
  ...nounFemaleList.map(mapGender('female')),
  ...nounMaleList.map(mapGender('male')),
  ...nounMiddleList.map(mapGender('middle')),
].map(
  ({ single, plural, isLocation, ...rest }) => ({
    ...rest,
    single,
    dual: {
      nominative: single.genitive,
      genitive: plural.genitive,
      prepositional: plural.prepositional,
    },
    plural,
    isLocation: isLocation || false,
  }),
)

export const nounLocationList = nounList.filter(
  ({isLocation}) => isLocation
)

export default nounList
