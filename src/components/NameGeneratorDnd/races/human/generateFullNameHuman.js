import generateFullNameHumanChult from './chult/utils/generateFullNameHumanChult'

const generateFullNameHuman = ({subrace, ...rest}) => {
  switch (subrace) {
    case 'human:chult':
      return generateFullNameHumanChult(rest)

    default:
      return 'NOT READY'
  }
}

export default generateFullNameHuman
