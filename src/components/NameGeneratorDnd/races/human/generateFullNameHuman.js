import generateChult from './chult/utils/generateFullNameHumanChult'
import generateDamar from './damar/utils/generateFullNameHumanDamar'
import generateIlluskan from './illuskan/utils/generateFullNameHumanIlluskan'
import generateKalishit from './kalishit/utils/generateFullNameHumanKalishit'
import generateMulan from './mulan/utils/generateFullNameHumanMulan'
import generateRashemi from './rashemi/utils/generateFullNameHumanRashemi'
import generateTyorami from './tyorami/utils/generateFullNameHumanTyorami'
import generateChondatan from './chondatan/utils/generateFullNameHumanChondatan'

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
      return generateChondatan(rest)

    default:
      return 'NOT READY'
  }
}

export default generateFullNameHuman
