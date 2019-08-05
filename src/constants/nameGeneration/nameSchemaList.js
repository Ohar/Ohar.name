export const ADJECTIVE_NOUN = 'adjective_noun'
export const NOUN_OF_NOUN = 'noun_of_noun'
export const NOUN_OF_NUMBER_NOUN = 'noun_of_number_noun'
export const NUMBER_ADJECTIVE_NOUN = 'number_adjective_noun'

export default [
  {
    text: 'Любая',
    value: 'any',
  },
  {
    text: 'Какое-то что-то',
    value: ADJECTIVE_NOUN,
  },
  {
    text: 'Сколько-то какого-то чего-то',
    value: NUMBER_ADJECTIVE_NOUN,
  },
  {
    text: 'Что-то чего-то',
    value: NOUN_OF_NOUN,
  },
  {
    text: 'Что-то скольки-то чего-то',
    value: NOUN_OF_NUMBER_NOUN,
  },
]
