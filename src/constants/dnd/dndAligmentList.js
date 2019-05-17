import listToCollectionById from '@/utils/listToCollectionById'

const dndAligmentList = [
  {
    id: 'no',
    name: 'без мировоззрения',
  },
  {
    id: 'lg',
    name: 'Законопослушный добрый',
  },
  {
    id: 'ng',
    name: 'Нейтральный добрый',
  },
  {
    id: 'cg',
    name: 'Хаотичный добрый',
  },
  {
    id: 'ln',
    name: 'Законопослушный нейтральный',
  },
  {
    id: 'n',
    name: 'Нейтральный',
  },
  {
    id: 'cn',
    name: 'Хаотичный нейтральный',
  },
  {
    id: 'le',
    name: 'Законопослушный злой',
  },
  {
    id: 'ne',
    name: 'Нейтральный злой',
  },
  {
    id: 'ce',
    name: 'Хаотичный злой',
  },
]

export const dndAligmentCollection = listToCollectionById(dndAligmentList)
