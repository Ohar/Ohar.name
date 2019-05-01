import genderFieldList from "@/constants/genderFieldList"

import typeFieldList from "../races/human/chult/typeFieldList"
import schemaList from "../races/tabaxi/constants/schemaList"
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
  },
  {
    type: 'schema',
    title: 'Схема построения имени',
    list: schemaList,
    show: {
      race: 'tabaxi',
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
