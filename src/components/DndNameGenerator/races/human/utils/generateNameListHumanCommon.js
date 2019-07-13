const generateNameListHumanCommon = (NAMES_FEMALE, NAMES_MALE) => gender => {
  switch (gender) {
    case 'any': {
      return [
        ...NAMES_FEMALE,
        ...NAMES_MALE,
      ]
    }

    case 'female': {
      return NAMES_FEMALE
    }

    case 'male': {
      return NAMES_MALE
    }
  }
}

export default generateNameListHumanCommon
