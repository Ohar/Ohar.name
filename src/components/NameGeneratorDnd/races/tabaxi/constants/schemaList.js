export const ADJECTIVE_NOUN = 'adjective_noun'
export const NOUN_AT_NOUN = 'noun_at_noun'
export const NOUN_OF_NOUN = 'noun_of_noun'
export const NOUN_OF_ADJECTIVE_NOUN = 'noun_of_adjective_noun'

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
    text: 'Что-то на чём-то',
    value: NOUN_AT_NOUN,
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
    text: 'Что-то какого-то чего-то',
    value: NOUN_OF_ADJECTIVE_NOUN,
    show: {
      race: 'tabaxi',
    },
  },
]

export default schemaList
