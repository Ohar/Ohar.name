import aligmentList from "./constants/aligmentList"
import charBadList from "./constants/charBadList"
import charGoodList from "./constants/charGoodList"
import interactionTypeList from "./constants/interactionTypeList"
import goalList from "./constants/goalList"
import senseTypeList from "./constants/senseTypeList"
import mannerList from "./constants/mannerList"
import communicationList from "./constants/communicationList"

import generateStats from "./utils/generateStats"
import pickByPropability from "./utils/pickByPropability"

export default class SentientItem {
  constructor () {
    this.stats = [
      {
        id: 'int',
        value: generateStats(),
      },
      {
        id: 'wit',
        value: generateStats(),
      },
      {
        id: 'cha',
        value: generateStats(),
      },
    ]

    this.char = {
      bad: pickByPropability(charBadList).description,
      good: pickByPropability(charGoodList).description,
    }

    this.aligmentId = pickByPropability(aligmentList).id
    this.interactions = pickByPropability(interactionTypeList).description
    this.goal = pickByPropability(goalList).description
    this.senses = pickByPropability(senseTypeList).description
    this.manner = pickByPropability(mannerList).description
    this.communication = pickByPropability(communicationList).description
  }
}
