import listToCollectionById from '@/utils/listToCollectionById';
import {
  GENDER_MALE,
  GENDER_FEMALE,
  GENDER_MIDDLE,
} from '@/constants/genderList'

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
      [GENDER_MALE]: 'Крошечный',
      [GENDER_FEMALE]: 'Крошечная',
      [GENDER_MIDDLE]: 'Крошечное',
    },
  },
  {
    id: SIZE_SMALL,
    name: {
      [GENDER_MALE]: 'Маленький',
      [GENDER_FEMALE]: 'Маленькая',
      [GENDER_MIDDLE]: 'Маленькое',
    },
  },
  {
    id: SIZE_MEDIUM,
    name: {
      [GENDER_MALE]: 'Средний',
      [GENDER_FEMALE]: 'Средняя',
      [GENDER_MIDDLE]: 'Среднее',
    },
  },
  {
    id: SIZE_LARGE,
    name: {
      [GENDER_MALE]: 'Большой',
      [GENDER_FEMALE]: 'Большая',
      [GENDER_MIDDLE]: 'Большое',
    },
  },
  {
    id: SIZE_HUGE,
    name: {
      [GENDER_MALE]: 'Огромный',
      [GENDER_FEMALE]: 'Огромная',
      [GENDER_MIDDLE]: 'Огромное',
    },
  },
  {
    id: SIZE_GARGANTUA,
    name: {
      [GENDER_MALE]: 'Громадный',
      [GENDER_FEMALE]: 'Громадная',
      [GENDER_MIDDLE]: 'Громадное',
    },
  }
];

export default dndSizeList;

export const dndSizeCollection = listToCollectionById(dndSizeList);
