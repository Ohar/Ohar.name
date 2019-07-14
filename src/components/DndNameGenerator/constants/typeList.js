import genderFieldList from "@/constants/genderFieldList"

import useSurnameList from "../races/human/useSurnameList"
import schemaList from "../races/tabaxi/constants/schemaList"
import raceList from "./raceList"
import subRaceList from "./subRaceList"
import ageList from "./ageList"

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
    show: {
      race: 'human',
    },
  },
  {
    type: 'age',
    title: 'Возраст',
    list: ageList,
    show: {
      race: 'elf',
    },
  },
  {
    type: 'gender',
    title: 'Пол',
    list: genderFieldList,
    hide: {
      age: 'child',
    },
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
    type: 'useSurname',
    title: 'Использование фамилии',
    list: useSurnameList,
    show: {
      race: 'human',
    },
  },
]

export default typeList
