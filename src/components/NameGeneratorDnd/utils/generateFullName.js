import generateNameHuman from '../races/human/generateNameHuman'
import generateNameTabaxi from "../races/tabaxi/generateNameTabaxi"

const generateFullName = ({race, ...rest}) => {
  switch (race) {
    case 'human':
      return generateNameHuman(rest)

    case 'tabaxi':
      return generateNameTabaxi(rest)

    default:
      return 'NOT READY'
  }
}

export default generateFullName
