import getRandomAdjective from '@/utils/nameGeneration/getRandomAdjective'
import getRandomNounByNumber from '@/utils/nameGeneration/getRandomNounByNumber'
import getRandomNumber from '@/utils/nameGeneration/getRandomNumber'
import getRandomNumberType from '@/utils/nameGeneration/getRandomNumberType'

export default ({gender}) => {
    const numberType = getRandomNumberType()

    const number = getRandomNumber({gender, numberType}).nominative
    const adjective = getRandomAdjective({gender, numberType}).nominative
    const noun = getRandomNounByNumber({gender, numberType})

    return `${number} ${adjective} ${noun}`
}
