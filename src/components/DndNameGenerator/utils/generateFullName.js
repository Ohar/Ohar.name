import generateNameDwarf from "../races/dwarf/generateNameDwarf"
import generateNameElf from "../races/elf/generateNameElf"
import generateNameHuman from '../races/human/generateNameHuman'
import generateNameTabaxi from "../races/tabaxi/generateNameTabaxi"
import generateNameGrung from "../races/grung/generateNameGrung"

const generateFullName = ({race, ...rest}) => {
  switch (race) {
    case 'dwarf':
      return generateNameDwarf(rest)

    case 'elf':
      return generateNameElf(rest)

    case 'human':
      return generateNameHuman(rest)

    case 'tabaxi':
      return generateNameTabaxi(rest)

    case 'grung':
      return generateNameGrung(rest)

    default:
      return 'NOT READY'
  }
}

export default generateFullName
