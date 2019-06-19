import aligmentList from "./constants/aligmentList"
import charBadList from "./constants/charBadList"
import charGoodList from "./constants/charGoodList"
import communicationTypeList from "./constants/communicationTypeList"
import goalList from "./constants/goalList"
import senseTypeList from "./constants/senseTypeList"
import mannerList from "./constants/mannerList"

import generateStats from "./utils/generateStats"
import pickByPropability from "./utils/pickByPropability"

export default class SentientItem {
  constructor () {
    this.stats = {
      cha: generateStats(),
      int: generateStats(),
      wit: generateStats(),
    }

    this.char = {
      bad: pickByPropability(charBadList),
      good: pickByPropability(charGoodList),
    }

    this.aligment = pickByPropability(aligmentList)
    this.communication = pickByPropability(communicationTypeList)
    this.goal = pickByPropability(goalList)
    this.senses = pickByPropability(senseTypeList)
    this.manner = pickByPropability(mannerList)
  }
}
