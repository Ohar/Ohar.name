import dndCrList from '@/constants/dnd/dndCrList';
import dndSizeList from '@/constants/dnd/dndSizeList';
import dndAligmentList from '@/constants/dnd/dndAligmentList';
import dndLanguageList from '@/constants/dnd/dndLanguageList';
import dndCreatureTypeList from '@/constants/dnd/dndCreatureTypeList';
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
  },
  aligmentId: {
    label: 'Мировоззрение',
    type: 'select',
    value: '',
    list: [
      {
        value: '',
        text: 'Любое'
      },
      ...dndAligmentList
        .filter(
          ({ showInList }) => showInList
        )
        .map(
          ({ name: {nominative: text}, id: value }) => ({ value, text })
        )
        .sort(
          ({ text: A }, { text: B }) => A > B ? 1: -1
        )
    ]
  },
  creatureTypeIdList: {
    label: 'Тип',
    type: 'select',
    value: '',
    list: [
      {
        value: '',
        text: 'Любой'
      },
      ...dndCreatureTypeList.map(
        ({ name: {singular: {nominative: text}}, id: value }) => ({ value, text })
      )
    ]
  },
  languageList: {
    label: 'Язык',
    type: 'select',
    value: '',
    list: [
      {
        value: '',
        text: 'Любой'
      },
      ...dndLanguageList
        .filter(
          ({ isRealLang }) => isRealLang
        )
        .map(
          ({ name: {nominative: text}, id: value }) => ({ value, text })
        )
        .sort(
          ({ text: A }, { text: B }) => A > B ? 1: -1
        )
    ]
  },
};
