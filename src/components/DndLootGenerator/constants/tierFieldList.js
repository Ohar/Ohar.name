import tierList from './tierList'

export default tierList.map(
  ({id: value, name: text}) => ({text, value})
)
