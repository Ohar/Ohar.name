import dndParamCollection from "@/constants/dnd/dndParamList"

import generateStats from "./utils/generateStats"

export default class SentientItem {
  constructor () {
    console.log('SentientItem generateStats', generateStats());
    this.stats = {
      int: generateStats(),
      wit: generateStats(),
      cha: generateStats(),
    }

    console.log('SentientItem', this.stats);
  }
}
