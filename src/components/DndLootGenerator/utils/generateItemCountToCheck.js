import rollDice from '@/utils/rollDice'

const ITEM_COUNT_MAX = 4
const ITEM_COUNT_BONUS = 1

export default () => rollDice(ITEM_COUNT_MAX)() + ITEM_COUNT_BONUS
