import genderFieldList from "@/constants/genderFieldList"

import typeFieldList from "./typeFieldList"

const commonTypeList = [
  {
    type: 'gender',
    title: 'Пол',
    list: genderFieldList,
  },
  {
    type: 'type',
    title: 'Тип',
    list: typeFieldList,
  },
]

export default commonTypeList
