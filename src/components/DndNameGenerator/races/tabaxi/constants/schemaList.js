export const ADJECTIVE_NOUN = 'adjective_noun'
export const NOUN_AT_NOUN = 'noun_at_noun'
export const NOUN_OF_ADJECTIVE_NOUN = 'noun_of_adjective_noun'
export const NOUN_OF_NOUN = 'noun_of_noun'
export const NOUN_OF_NUMBER_ADJECTIVE_NOUN = 'noun_of_number_adjective_noun'
export const NOUN_OF_NUMBER_NOUN = 'noun_of_number_noun'
export const NUMBER_ADJECTIVE_NOUN = 'number_adjective_noun'
export const NUMBER_NOUN_AT_NOUN = 'number_noun_at_noun'
export const NUMBER_NOUN_OF_ADJECTIVE_NOUN = 'number_noun_of_adjective_noun'
export const NUMBER_NOUN_OF_NOUN = 'number_noun_of_noun'

const schemaList = [
  {
    text: 'Любая',
    value: 'any',
    show: {
      race: 'tabaxi',
    },
  },
  {
    text: 'Какое-то что-то',
    value: ADJECTIVE_NOUN,
    show: {
      race: 'tabaxi',
    },
  },
  {
    text: 'Сколько-то какого-то чего-то',
    value: NUMBER_ADJECTIVE_NOUN,
    show: {
      race: 'tabaxi',
    },
  },
  {
    text: 'Что-то на чём-то',
    value: NOUN_AT_NOUN,
    show: {
      race: 'tabaxi',
    },
  },
  {
    text: 'Сколько-то чего-то на чём-то',
    value: NUMBER_NOUN_AT_NOUN,
    show: {
      race: 'tabaxi',
    },
  },
  {
    text: 'Что-то чего-то',
    value: NOUN_OF_NOUN,
    show: {
      race: 'tabaxi',
    },
  },
  {
    text: 'Что-то скольки-то чего-то',
    value: NOUN_OF_NUMBER_NOUN,
    show: {
      race: 'tabaxi',
    },
  },
  {
    text: 'Сколько-то чего-то чего-то',
    value: NUMBER_NOUN_OF_NOUN,
    show: {
      race: 'tabaxi',
    },
  },
  {
    text: 'Что-то какого-то чего-то',
    value: NOUN_OF_ADJECTIVE_NOUN,
    show: {
      race: 'tabaxi',
    },
  },
  {
    text: 'Что-то скольки-то какого-то чего-то',
    value: NOUN_OF_NUMBER_ADJECTIVE_NOUN,
    show: {
      race: 'tabaxi',
    },
  },
  {
    text: 'Сколько-то чего-то какого-то чего-то',
    value: NUMBER_NOUN_OF_ADJECTIVE_NOUN,
    show: {
      race: 'tabaxi',
    },
  },
]

export default schemaList