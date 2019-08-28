import dndStatBaseValue from '@/constants/dnd/dndStatBaseValue'
import {dndAligmentCollection} from "@/constants/dnd/dndAligmentList"
import {dndCreatureTypeCollection} from '@/constants/dnd/dndCreatureTypeList'
import {dndLanguageCollection} from "@/constants/dnd/dndLanguageList"

import checkIfAligmentPossible from "@/utils/checkIfAligmentPossible"
import dndCalcStatBonus from "@/utils/dndCalcStatBonus"

import aligmentList from "./constants/aligmentList"
import bizzareList from "./constants/bizzareList"
import bondList from "./constants/bondList"
import charBadList from "./constants/charBadList"
import charGoodList from "./constants/charGoodList"
import communicationList from "./constants/communicationList"
import creatorList from "./constants/creatorList"
import creatureTypeList from "./constants/creatureTypeList"
import goalList from "./constants/goalList"
import idealList from "./constants/idealList"
import interactionTypeList from "./constants/interactionTypeList"
import itemTypeList from "./constants/itemTypeList"
import languageList, {withoutCommonLanguageList} from "./constants/languageList"
import lesserAbilityList from "./constants/lesserAbilityList"
import mannerList from "./constants/mannerList"
import senseTypeList from "./constants/senseTypeList"
import storyList from "./constants/storyList"
import weaknessList from "./constants/weaknessList"

import generateStats from "./utils/generateStats"
import generateName from "./utils/generateName"
import getRandomGod from "./utils/getRandomGod"
import getRandomKind from "./utils/getRandomKind"
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
    this.story = this.generateStory()
    this.lesserAbility = this.generateLesserAbility()
    this.bizzare = pickByPropability(bizzareList).description
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
          id => dndLanguageCollection[id].name.nominative
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

  generateStory = () => {
    let {id, description} = pickByPropability(storyList)

    switch (id) {
      case 'Zashchitneyk':
      case 'Pogibel': {
        const {plural: {nominative, accusative}} = getRandomKind()

        return description
          .replace(
            'какой-либо культуры или вида существ',
            `*${accusative}*`
          )
          .replace(
            'культура или существа',
            `*${nominative}*`
          )
      }

      case 'Religiia-require':
      case 'Religiia-steal':
      case 'Religiia-use': {
        const {short, full} = getRandomGod()

        return description
          .replace(
            'какому-либо богу',
            `*${full.dative}*`
          )
          .replace(
            'Последователи бога',
            `Последователи *${short.genitive}*`
          )
          .replace(
            'того же бога',
            `*${short.genitive}*`
          )
      }

      default:
        return description
    }
  }

  generateLesserAbility = () => {
    const {id, description} = pickByPropability(lesserAbilityList)

    switch (id) {
      case 'Iazyk': {
        const langId = pickByPropability(withoutCommonLanguageList).id
        const {name} = dndLanguageCollection[langId]

        return description.replace(
          'на одном дополнительном языке (по выбору Мастера)',
          `на одном дополнительном языке: *${name}*`
        )
      }

      case 'Chasovoi': {
        const creatureTypeId = pickByPropability(creatureTypeList).id
        const {name} = dndCreatureTypeCollection[creatureTypeId]

        return description
          .replace(
            'Выберите какой-либо вид существ — они были врагами создателя предмета',
            `Врагами создателя предмета были *${name.plural.nominative}*`
          )
          .replace(
            'такие существа',
            `*${name.plural.nominative}*`
          )
      }

      default:
        return description
    }
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
        const kind = getRandomKind()

        return kind
          ? goal.description.replace(
            'определённую расу или существ определённого вида',
            `*${kind.plural.accusative}*`
          )
          : goal.description
      }

      case 'crusader':
      case 'tamplier': {
        const god = getRandomGod()

        return goal.description.replace(
          'определённого божества',
          `*${god.full.genitive}*`
        )
      }

      default: {
        return goal.description
      }
    }
  }
}
