import generateFullNameHumanChult from './chult/utils/generateFullNameHumanChult'
import generateFullNameHumanDamar from './damar/utils/generateFullNameHumanDamar'

const generateFullNameHuman = ({subrace, ...rest}) => {
  switch (subrace) {
    case 'human:chult':
      return generateFullNameHumanChult(rest)

    case 'human:damar':
      return generateFullNameHumanDamar(rest)

    default:
      return 'NOT READY'
  }
}

export default generateFullNameHuman
