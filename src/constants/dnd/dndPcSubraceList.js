import listToCollectionById from '@/utils/listToCollectionById'

const dndPcSubraceList = [
  {
    id: 'grung_green',
    parentRaceId: 'grung',
    name: 'Зелёный грунг',
    source: 'Homebrew',
    paramBonuses: {
      con: 1,
    },
    featureList: [
      {
        name: 'Яд зелёного грунга',
        description: '',
      },
    ],
  },
  {
    id: 'grung_blue',
    parentRaceId: 'grung',
    name: 'Синий грунг',
    source: 'Homebrew',
    paramBonuses: {
      con: 1,
    },
    featureList: [
      {
        name: 'Яд синего грунга',
        description: 'Отравленное существо должно громко кричать (или шуметь, если оно не может кричать) в начале своего хода.',
      },
    ],
  },
  {
    id: 'grung_purple',
    parentRaceId: 'grung',
    name: 'Фиолетовый грунг',
    source: 'Homebrew',
    paramBonuses: {
      con: 1,
    },
    featureList: [
      {
        name: 'Яд фиолетового грунга',
        description: 'Отравленное существо чувствует непреодолимое желание погрузиться в жидкость или грязь. Оно не может совершать действия, кроме тех, которые помогут ему погрузиться в жидкость или грязь. Также оно не может двигаться не в сторону жидкости или грязи.',
      },
    ],
  },
  {
    id: 'grung_red',
    parentRaceId: 'grung',
    name: 'Красный грунг',
    source: 'Homebrew',
    paramBonuses: {
      wit: 1,
    },
    featureList: [
      {
        name: 'Яд красного грунга',
        description: 'Отравленное существо должно потратить свои действия на то, чтобы попытаться съесть всю доступную ему еду.',
      },
    ],
  },
  {
    id: 'grung_orange',
    parentRaceId: 'grung',
    name: 'Оранжевый грунг',
    source: 'Homebrew',
    paramBonuses: {
      cha: 1,
    },
    featureList: [
      {
        name: 'Яд оранжевого грунга',
        description: 'Отравленное существо боится своих союзников.',
      },
    ],
  },
  {
    id: 'grung_gold',
    parentRaceId: 'grung',
    name: 'Золотой грунг',
    source: 'Homebrew',
    paramBonuses: {
      cha: 1,
    },
    featureList: [
      {
        name: 'Яд золотого грунга',
        description: 'Отравленное существо очаровано вами и может говорить на грунгском',
      },
    ],
  },
]

export const dndPcSubraceCollection = listToCollectionById(dndPcSubraceList)
