import formatBonus from '@/utils/formatBonus'
import calcParamBonus from '@/utils/calcParamBonus'

export default value => formatBonus(calcParamBonus(value))
