import dndCrList from '@/constants/dnd/dndCrList';
import dndSizeList from '@/constants/dnd/dndSizeList';
import SEARCH_PROP_NAME from '@/constants/SEARCH_PROP_NAME';
import { GENDER_MALE } from '@/constants/genderList';

export default {
  [SEARCH_PROP_NAME]: {
    label: 'Введите имя существа на русском или английском',
    type: 'input',
    value: ''
  },
  sizeType: {
    label: 'Размер',
    type: 'select',
    value: '',
    list: [
      {
        value: '',
        text: 'Любой'
      },
      ...dndSizeList
        .slice(1)
        .map(
          ({ name: { singular }, id: value }) => ({
            value,
            text: singular[GENDER_MALE].nominative
          })
        )
    ]
  },
  cr: {
    label: 'Опасность',
    type: 'select',
    value: '',
    list: [
      {
        value: '',
        text: 'Любая'
      },
      ...dndCrList.map(({ name: text, id: value }) => ({ value, text }))
    ]
  }
};
