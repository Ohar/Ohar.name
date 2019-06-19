import calcListProbabilitySumm from '@/utils/calcListProbabilitySumm'
import listToCollectionById from '@/utils/listToCollectionById'
import listToIdListToPick from '@/utils/listToIdListToPick'
import rollDice from '@/utils/rollDice'

export default list => {
  const collection = listToCollectionById(list)
  const idListToPick = listToIdListToPick(list)
  const probabilitySumm = calcListProbabilitySumm(list)
  const diceRoll = rollDice(probabilitySumm)()
  const treasureId = idListToPick[diceRoll]

  return collection[treasureId]
}
