import communicationTypeList from "./constants/communicationTypeList"
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
  }
}
