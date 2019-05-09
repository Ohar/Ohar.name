import generateChult from './subraces/chult/utils/generateChult'
import generateDamar from './subraces/damar/utils/generateDamar'
import generateIlluskan from './subraces/illuskan/utils/generateIlluskan'
import generateKalishit from './subraces/kalishit/utils/generateKalishit'
import generateMulan from './subraces/mulan/utils/generateMulan'
import generateRashemi from './subraces/rashemi/utils/generateRashemi'
import generateTyorami from './subraces/tyorami/utils/generateTyorami'
import generateChondatan from './subraces/chondatan/utils/generateChondatan'
import generateShu from './subraces/shu/utils/generateShu'

const generateFullNameHuman = ({subrace, ...rest}) => {
  switch (subrace) {
    case 'human:chult':
      return generateChult(rest)

    case 'human:damar':
      return generateDamar(rest)

    case 'human:illuskan':
      return generateIlluskan(rest)

    case 'human:kalishit':
      return generateKalishit(rest)

    case 'human:mulan':
      return generateMulan(rest)

    case 'human:rashemi':
      return generateRashemi(rest)

    case 'human:tyorami':
      return generateTyorami(rest)

    case 'human:chondatan':
    case 'human:tetir':
      return generateChondatan(rest)

    case 'human:shu':
      return generateShu(rest)

    default:
      return 'NOT READY'
  }
}

export default generateFullNameHuman
