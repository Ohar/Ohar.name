const NORMAL_PARAM = 10
const KOEF_STEP = 2

const calcParamBonus = value => Math.floor((value - NORMAL_PARAM) / KOEF_STEP)

module.exports = calcParamBonus
