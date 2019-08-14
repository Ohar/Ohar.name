import { dndDamageTypeCollection } from '@/constants/dnd/dndDamageTypeList'

export default ({type, typeList}) => {
  if (type) {
    return dndDamageTypeCollection[type].fullName
  }

  if (typeList) {
    return typeList
      .map(
        item => dndDamageTypeCollection[item].fullName
      )
      .join(' или ')
  }

  return ''
}
