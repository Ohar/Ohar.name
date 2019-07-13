import _ from 'lodash'

const generateSurnameHumanCommon = surnameList => useSurname => {
    switch (useSurname) {
        case 'no_family':
            return '';

        case 'any':
            return Math.random() > 0.5
                ? _.sample(surnameList)
                : ''

        default:
            return _.sample(surnameList)
    }
}

export default generateSurnameHumanCommon
