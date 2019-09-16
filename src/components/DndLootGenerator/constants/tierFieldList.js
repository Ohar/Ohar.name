import tierList from './tierList'

const tierFieldList = tierList.map(
  ({id: value, name: text}) => ({text, value})
)

export default tierFieldList
