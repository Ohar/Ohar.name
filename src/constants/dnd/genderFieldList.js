import { faGenderless } from '@fortawesome/free-solid-svg-icons'

export default [
  {
    text: 'Любой',
    value: 'any',
  },
  {
    icon: 'icon-male',
    text: 'Мужской',
    value: 'male',
  },
  {
    icon: 'icon-female',
    text: 'Женский',
    value: 'female',
  },
  {
    icon: faGenderless,
    text: 'Средний',
    value: 'undefined',
    show: {
      race: 'tabaxi',
    },
  },
]
