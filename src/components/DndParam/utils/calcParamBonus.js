const NORMAL_PARAM = 10
const KOEF_STEP = 2

const calcParamBonus = val => Math.floor((val - NORMAL_PARAM) / KOEF_STEP)

export default calcParamBonus
