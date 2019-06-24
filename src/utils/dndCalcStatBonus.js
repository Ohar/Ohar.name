import dndStatBaseValue from '@/constants/dnd/dndStatBaseValue'

const BONUS_COEF = 2

export default stat => Math.floor((stat - dndStatBaseValue) / BONUS_COEF)
