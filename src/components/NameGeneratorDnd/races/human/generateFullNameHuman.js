import generateFullNameHumanChult from './chult/utils/generateFullNameHumanChult'
import generateFullNameHumanDamar from './damar/utils/generateFullNameHumanDamar'
import generateFullNameHumanIlluskan from './illuskan/utils/generateFullNameHumanIlluskan'
import generateFullNameHumanKalishit from './kalishit/utils/generateFullNameHumanKalishit'

const generateFullNameHuman = ({subrace, ...rest}) => {
  switch (subrace) {
    case 'human:chult':
      return generateFullNameHumanChult(rest)

    case 'human:damar':
      return generateFullNameHumanDamar(rest)

    case 'human:illuskan':
      return generateFullNameHumanIlluskan(rest)

    case 'human:kalishit':
      return generateFullNameHumanKalishit(rest)

    default:
      return 'NOT READY'
  }
}

export default generateFullNameHuman
