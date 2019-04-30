import generateFullNameHuman from './../human/generateFullNameHuman'

const generateFullName = ({race, ...rest}) => {
  switch (race) {
    case 'human':
      return generateFullNameHuman(rest)

    default:
      return 'NOT READY'
  }
}

export default generateFullName
