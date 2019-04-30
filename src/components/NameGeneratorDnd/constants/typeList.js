import genderFieldList from "@/constants/genderFieldList"

import typeFieldList from "../human/chult/typeFieldList"
import raceList from "./raceList"
import subRaceList from "./subRaceList"

const typeList = [
  {
    type: 'race',
    title: 'Раса',
    list: raceList,
  },
  {
    type: 'subrace',
    title: 'Подраса',
    list: subRaceList,
  },
  {
    type: 'gender',
    title: 'Пол',
    list: genderFieldList,
    show: {
      race: 'human',
    },
  },
  {
    type: 'type',
    title: 'Тип',
    list: typeFieldList,
    show: {
      subrace: 'human:chult',
    },
  },
]

export default typeList
