import generateChult from './subraces/chult/generateChult'
import generateDamar from './subraces/damar/generateDamar'
import generateIlluskan from './subraces/illuskan/generateIlluskan'
import generateKalishit from './subraces/kalishit/generateKalishit'
import generateMulan from './subraces/mulan/generateMulan'
import generateRashemi from './subraces/rashemi/generateRashemi'
import generateTyorami from './subraces/tyorami/generateTyorami'
import generateChondatan from './subraces/chondatan/generateChondatan'
import generateShu from './subraces/shu/generateShu'

const generateNameHuman = ({subrace, ...rest}) => {
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

export default generateNameHuman
