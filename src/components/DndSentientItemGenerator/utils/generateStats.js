import rollDice from '@/utils/rollDice'

const CUBE_TYPE = 6
const CUBE_ROLL_COUNT = 4
const CUBE_REMOVE_COUNT = 1

const roll = rollDice(CUBE_TYPE)

export default () => {
  const rollArr = []

  for (let i = 0; i < CUBE_ROLL_COUNT; i++) {
    rollArr.push(roll() + 1)
  }

  return rollArr
    .sort((a, b) => a - b)
    .slice(CUBE_REMOVE_COUNT)
    .reduce((summ, digit) => summ + digit)
}
