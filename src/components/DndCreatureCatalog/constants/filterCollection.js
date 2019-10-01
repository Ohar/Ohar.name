import dndCrList from '@/constants/dnd/dndCrList';
import dndSizeList from '@/constants/dnd/dndSizeList';
import dndAligmentList from '@/constants/dnd/dndAligmentList';
import dndLanguageList from '@/constants/dnd/dndLanguageList';
import dndCreatureTypeList from '@/constants/dnd/dndCreatureTypeList';
import dndDamageTypeList from '@/constants/dnd/dndDamageTypeList';
import dndConditionList from '@/constants/dnd/dndConditionList';
import SEARCH_PROP_NAME from '@/constants/SEARCH_PROP_NAME';
import { GENDER_MALE, GENDER_ANY } from '@/constants/genderList';

const sortByText = ({ text: A }, { text: B }) => A > B ? 1: -1

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
          ({ name, id, children }) => {
            const {nominative: text} = (name[GENDER_MALE] || name[GENDER_ANY])

            return {
              text,
              value: [id, ...children],
            }
          }
        )
        .sort(sortByText)
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
      ...dndCreatureTypeList
        .filter(
          ({ isRealRace }) => isRealRace
        )
        .map(
          ({ name: {singular: {nominative: str}}, id: value }) => {
            const start = str.slice(0, 1).toUpperCase()
            const end = str.slice(1)

            const text = `${start}${end}`

            return { value, text }
          }
        )
        .sort(sortByText)
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
        .sort(sortByText)
    ]
  },
  resistanceList: {
    label: 'Сопротивление',
    type: 'select',
    value: '',
    list: [
      {
        value: '',
        text: 'Любое'
      },
      ...dndDamageTypeList
        .map(
          ({ fullName, id: value }) => ({ value, text: fullName })
        )
        .sort(sortByText)
    ],
  },
  immunityList: {
    label: 'Иммунитет',
    type: 'select',
    value: '',
    list: [
      {
        value: '',
        text: 'Любой'
      },
      ...dndDamageTypeList
        .map(
          ({ fullName, id: value }) => ({ value, text: fullName })
        )
        .sort(sortByText)
    ],
  },
  immunityConditionList: {
    label: 'Иммунитет к состоянию',
    type: 'select',
    value: '',
    list: [
      {
        value: '',
        text: 'Любой'
      },
      ...dndConditionList
        .map(
          ({ name, id: value }) => ({ value, text: name })
        )
        .sort(sortByText)
    ],
  },
};
