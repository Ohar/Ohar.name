import listToCollectionById from '@/utils/listToCollectionById'

const dndSpeedList = [
  {
    id: 'walk',
    name: {
      ru: 'скорость ходьбы',
      en: 'walk speed',
    }
  },
  {
    id: 'fly',
    name: {
      ru: 'скорость полёта',
      en: 'fly speed',
    }
  },
  {
    id: 'swim',
    name: {
      ru: 'скорость плавания',
      en: 'swim speed',
    }
  },
  {
    id: 'dig',
    name: {
      ru: 'скорость копания',
      en: 'dig speed',
    }
  },
  {
    id: 'crawl',
    name: {
      ru: 'скорость лазания',
      en: 'crawl speed',
    }
  },
]

export const dndSpeedCollection = listToCollectionById(dndSpeedList)
