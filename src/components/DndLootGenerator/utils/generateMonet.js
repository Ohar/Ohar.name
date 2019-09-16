import rollDice from '@/utils/rollDice'

export default ({ monetId, multiplier, dice: { count, type } }) => {
  const roll = rollDice(type)
  let money = 0

  while (count) {
    money += ((roll() + 1) * multiplier)
    count--
  }

  return {
    monetId,
    count: money,
  }
}
