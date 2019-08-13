import generateFullAdjectiveList from '@/utils/generateFullAdjectiveList'

import adjectiveRawList from './adjectiveRawList'

export default adjectiveRawList.map(generateFullAdjectiveList)
