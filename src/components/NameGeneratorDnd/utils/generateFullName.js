import generateFullNameHuman from '../races/human/generateFullNameHuman'
import generateNameTabaxi from "../races/tabaxi/generateNameTabaxi"

const generateFullName = ({race, ...rest}) => {
  switch (race) {
    case 'human':
      return generateFullNameHuman(rest)

    case 'tabaxi':
      return generateNameTabaxi(rest)

    default:
      return 'NOT READY'
  }
}

export default generateFullName
