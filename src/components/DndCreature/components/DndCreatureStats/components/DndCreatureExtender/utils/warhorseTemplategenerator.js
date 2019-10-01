import { faShieldAlt } from '@fortawesome/free-solid-svg-icons'

import { CREATURE_WARHORSE } from '@/constants/dnd/dndCreatureIdList'

import generateTextLinks from '@/utils/generateTextLinks'

export default ({templateName, armor}) => ({
  templateName,
  templateIcon: faShieldAlt,

  templateLimitations: {
    include: {
      id: [
        CREATURE_WARHORSE,
      ],
    },
  },

  source: {
    id: 'MM',
    page: 320,
  },

  armor,

  extendPropCollection: {
    description: [
      {
        header: 'Вариант: Доспехи боевого коня',
        text: generateTextLinks(`У [боевого коня](CREATURE:${CREATURE_WARHORSE}) в доспехах КД зависит от того, какие именно доспехи на него надеты. В КД коня уже включён модификатор Ловкости, если он применим. Доспехи не меняют показатель опасности коня.\n
\n
| КД | Доспех           |
|----|------------------|
| 12 | Кожаный          |
| 13 | Проклёпаная кожа |
| 14 | Колечный         |
| 15 | Чешуйчатый       |
| 16 | Кольчужный       |
| 17 | Наборный         |
| 18 | Латный           |
`),
      },
    ],
  },
})
