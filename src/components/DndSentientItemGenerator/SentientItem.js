import aligmentList from "./constants/aligmentList"
import communicationTypeList from "./constants/communicationTypeList"
import goalList from "./constants/goalList"
import senseTypeList from "./constants/senseTypeList"

import generateStats from "./utils/generateStats"
import pickByPropability from "./utils/pickByPropability"

export default class SentientItem {
  constructor () {
    this.stats = {
      int: generateStats(),
      wit: generateStats(),
      cha: generateStats(),
    }

    this.communication = pickByPropability(communicationTypeList)
    this.senses = pickByPropability(senseTypeList)
    this.aligment = pickByPropability(aligmentList)
    this.goal = pickByPropability(goalList)
  }
}
