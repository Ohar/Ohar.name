import listToCollectionById from '@/utils/listToCollectionById';

export const SIZE_TINY = 'tiny';
export const SIZE_SMALL = 'small';
export const SIZE_MEDIUM = 'medium';
export const SIZE_LARGE = 'large';
export const SIZE_HUGE = 'huge';
export const SIZE_GARGANTUA = 'gargantua';

const dndSizeList = [
  {
    id: SIZE_TINY,
    name: {
      male: 'Крошечный',
      female: 'Крошечная',
      medium: 'Крошечное',
    },
  },
  {
    id: SIZE_SMALL,
    name: {
      male: 'Маленький',
      female: 'Маленькая',
      medium: 'Маленькое',
    },
  },
  {
    id: SIZE_MEDIUM,
    name: {
      male: 'Средний',
      female: 'Средняя',
      medium: 'Среднее',
    },
  },
  {
    id: SIZE_LARGE,
    name: {
      male: 'Большой',
      female: 'Большая',
      medium: 'Большое',
    },
  },
  {
    id: SIZE_HUGE,
    name: {
      male: 'Огромный',
      female: 'Огромная',
      medium: 'Огромное',
    },
  },
  {
    id: SIZE_GARGANTUA,
    name: {
      male: 'Громадный',
      female: 'Громадная',
      medium: 'Громадное',
    },
  }
];

export default dndSizeList;

export const dndSizeCollection = listToCollectionById(dndSizeList);
