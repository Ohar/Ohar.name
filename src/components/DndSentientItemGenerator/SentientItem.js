import {dndGodCollection} from "@/constants/dnd/dndGodList"
import {dndAligmentCollection} from "@/constants/dnd/dndAligmentList"
import {dndCreatureTypeCollection} from "@/constants/dnd/dndCreatureTypeList"
import {dndPcClassCollection} from "@/constants/dnd/dndPcClassList"
import {dndLanguageCollection} from "@/constants/dnd/dndLanguageList"
import dndStatBaseValue from '@/constants/dnd/dndStatBaseValue'

import dndCalcStatBonus from "@/utils/dndCalcStatBonus"
import checkIfAligmentPossible from "@/utils/checkIfAligmentPossible"

import aligmentList from "./constants/aligmentList"
import charBadList from "./constants/charBadList"
import charGoodList from "./constants/charGoodList"
import creatorList from "./constants/creatorList"
import interactionTypeList from "./constants/interactionTypeList"
import goalList from "./constants/goalList"
import godList from "./constants/godList"
import senseTypeList from "./constants/senseTypeList"
import mannerList from "./constants/mannerList"
import communicationList from "./constants/communicationList"
import kindList from "./constants/kindList"
import languageList from "./constants/languageList"
import itemTypeList from "./constants/itemTypeList"
import idealList from "./constants/idealList"
import bondList from "./constants/bondList"
import weaknessList from "./constants/weaknessList"

import generateStats from "./utils/generateStats"
import generateName from "./utils/generateName"
import pickByPropability from "./utils/pickByPropability"

const MAX_LANG_BASE = 2
const ADDITIONAL_LANG_PROBABILITY_BASE = 0.7

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

    this.type = pickByPropability(itemTypeList).id
    this.aligmentId = pickByPropability(aligmentList).id
    this.interactions = this.generateInteractions()
    this.goal = this.generateGoal()
    this.senses = pickByPropability(senseTypeList).description
    this.manner = this.generateManner()
    this.communication = pickByPropability(communicationList).description
    this.ideal = this.generateIdeal()
    this.bond = pickByPropability(bondList).description
    this.weakness = pickByPropability(weaknessList).description
    this.creator = pickByPropability(creatorList).description
    this.name = generateName()
  }

  generateIdeal = () => {
    const idealListFiltered = idealList.filter(({aligmentId}) => checkIfAligmentPossible(this.aligmentId, aligmentId))

    return pickByPropability(idealListFiltered).description
  }

  generateInteractions = () => {
    const interaction = pickByPropability(interactionTypeList)
    const {isAbleToSpeak} = interaction
    let {description} = interaction

    if (isAbleToSpeak) {
      const langIdList = this.generateLanguageList()
      const langStr = langIdList
        .map(
          id => dndLanguageCollection[id].name
        )
        .join('*, *')

      description = description.replace(
        'одном или нескольких языках',
        `языках: *${langStr}*`
      )
    }

    return {
      ...interaction,
      description,
    }
  }

  generateLanguageList = () => {
    const int = this.stats.find(({id}) => id === 'int').value
    const intBonus = dndCalcStatBonus(int)
    const generatedLanguageList = []
    const maxLangCount = Math.max(intBonus * MAX_LANG_BASE, 1)
    let addMoreLang = true

    for (let i = 1; i <= maxLangCount && addMoreLang; i++) {
      const additionalLangProbability = ((int + intBonus) / dndStatBaseValue) * ADDITIONAL_LANG_PROBABILITY_BASE / generatedLanguageList.length
      const pickedLangId = pickByPropability(languageList).id

      if (generatedLanguageList.includes(pickedLangId)) {
        i--
      } else {
        generatedLanguageList.push(pickedLangId)
      }

      if (Math.random() >= additionalLangProbability) {
        addMoreLang = false
      }
    }

    return generatedLanguageList
  }

  generateManner = () => {
    const {isAbleToSpeak} = this.interactions
    const availablemannerList = isAbleToSpeak
      ? mannerList
      : mannerList.filter(({shouldAbleToSpeak}) => !shouldAbleToSpeak)

    return pickByPropability(availablemannerList).description
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
          `существ с *${oppositeAligment.name.instrumental}* мировоззрением`,
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
            `*${kind.name.plural.accusative}*`
          )
          : goal.description
      }

      case 'crusader':
      case 'tamplier': {
        const godId = pickByPropability(godList).id
        const god = dndGodCollection[godId]

        return goal.description.replace(
          'определённого божества',
          `*${god.name.full.genitive}*`
        )
      }

      default: {
        return goal.description
      }
    }
  }
}
