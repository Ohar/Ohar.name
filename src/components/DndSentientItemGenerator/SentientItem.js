import {dndGodCollection} from "@/constants/dnd/dndGodList"
import {dndAligmentCollection} from "@/constants/dnd/dndAligmentList"
import {dndCreatureTypeCollection} from "@/constants/dnd/dndCreatureTypeList"
import {dndPcClassCollection} from "@/constants/dnd/dndPcClassList"

import aligmentList from "./constants/aligmentList"
import charBadList from "./constants/charBadList"
import charGoodList from "./constants/charGoodList"
import interactionTypeList from "./constants/interactionTypeList"
import goalList from "./constants/goalList"
import godList from "./constants/godList"
import senseTypeList from "./constants/senseTypeList"
import mannerList from "./constants/mannerList"
import communicationList from "./constants/communicationList"
import kindList from "./constants/kindList"

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
    this.goal = this.generateGoal()
    this.senses = pickByPropability(senseTypeList).description
    this.manner = pickByPropability(mannerList).description
    this.communication = pickByPropability(communicationList).description
  }

  generateGoal = () => {
    let goal = pickByPropability(goalList)

    while (goal.id === 'aligment' && this.aligmentId === 'n') {
      goal = pickByPropability(goalList)
    }

    switch (goal.id) {
      case 'aligment': {
        const {oppositeId} = dndAligmentCollection[this.aligmentId]
        const oppositeAligment = dndAligmentCollection[oppositeId]

        return goal.description.replace(
          'тех, чьё мировоззрение диаметрально противоположно его собственному (такой предмет не может быть нейтральным)',
          `существ с ${oppositeAligment.name.instrumental} мировоззрением`,
        )
      }

      case 'defender':
      case 'doom': {
        const {id, type} = pickByPropability(kindList)
        let kind = null

        switch (type) {
          case 'creatureType': {
            kind = dndCreatureTypeCollection[id]
            break;
          }

          case 'pcClass': {
            kind = dndPcClassCollection[id]
            break;
          }
        }

        return kind
          ? goal.description.replace(
            'определённую расу или существ определённого вида',
            kind.name.plural.accusative
          )
          : goal.description
      }

      case 'crusader':
      case 'tamplier': {
        const godId = pickByPropability(godList).id
        const god = dndGodCollection[godId]

        return goal.description.replace('определённого божества', god.name.full.genitive)
      }

      default: {
        return goal.description
      }
    }
  }
}
