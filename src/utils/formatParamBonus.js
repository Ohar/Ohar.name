import formatBonus from '@/utils/formatBonus'

const NORMAL_PARAM = 10
const KOEF_STEP = 2

export default value => formatBonus(
  Math.floor((value - NORMAL_PARAM) / KOEF_STEP)
)
