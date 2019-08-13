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
      single: {
        [GENDER_FEMALE]: {
          nominative: 'Крошечная',
          genitive: 'Крошечной'
        },
        [GENDER_MALE]: {
          nominative: 'Крошечный',
          genitive: 'Крошечного',
          prepositional: 'Крошечном'
        },
        [GENDER_MIDDLE]: {
          nominative: 'Крошечное'
        }
      },
      dualFemale: {
        nominative: 'Крошечные',
        genitive: 'Крошечных'
      }
    },
  },
  {
    id: SIZE_SMALL,
    name: {
      single: {
        [GENDER_FEMALE]: {
          nominative: 'Маленькая',
          genitive: 'Маленькой'
        },
        [GENDER_MALE]: {
          nominative: 'Маленький',
          genitive: 'Маленького',
          prepositional: 'Маленьком'
        },
        [GENDER_MIDDLE]: {
          nominative: 'Маленькое'
        }
      },
      dualFemale: {
        nominative: 'Маленькие',
        genitive: 'Маленьких'
      }
    },
  },
  {
    id: SIZE_MEDIUM,
    name: {
      single: {
        [GENDER_FEMALE]: {
          nominative: 'Средняя',
          genitive: 'Средней'
        },
        [GENDER_MALE]: {
          nominative: 'Средний',
          genitive: 'Среднего',
          prepositional: 'Среднем'
        },
        [GENDER_MIDDLE]: {
          nominative: 'Среднее'
        }
      },
      dualFemale: {
        nominative: 'Средние',
        genitive: 'Средних'
      }
    },
  },
  {
    id: SIZE_LARGE,
    name: {
      single: {
        [GENDER_FEMALE]: {
          nominative: 'Большая',
          genitive: 'Большой'
        },
        [GENDER_MALE]: {
          nominative: 'Большой',
          genitive: 'Большого',
          prepositional: 'Большом'
        },
        [GENDER_MIDDLE]: {
          nominative: 'Большое'
        }
      },
      dualFemale: {
        nominative: 'Большие',
        genitive: 'Больших'
      }
    },
  },
  {
    id: SIZE_HUGE,
    name: {
      single: {
        [GENDER_FEMALE]: {
          nominative: 'Огромная',
          genitive: 'Огромной'
        },
        [GENDER_MALE]: {
          nominative: 'Огромный',
          genitive: 'Огромного',
          prepositional: 'Огромном'
        },
        [GENDER_MIDDLE]: {
          nominative: 'Огромное'
        }
      },
      dualFemale: {
        nominative: 'Огромные',
        genitive: 'Огромных'
      }
    },
  },
  {
    id: SIZE_GARGANTUA,
    name: {
      single: {
        [GENDER_FEMALE]: {
          nominative: 'Громадная',
          genitive: 'Громадной'
        },
        [GENDER_MALE]: {
          nominative: 'Громадный',
          genitive: 'Громадного',
          prepositional: 'Громадном'
        },
        [GENDER_MIDDLE]: {
          nominative: 'Громадное'
        }
      },
      dualFemale: {
        nominative: 'Громадные',
        genitive: 'Громадных'
      }
    },
  }
];

export default dndSizeList;

export const dndSizeCollection = listToCollectionById(dndSizeList);
