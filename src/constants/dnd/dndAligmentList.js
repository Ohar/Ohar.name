import listToCollectionById from '@/utils/listToCollectionById'

const dndAligmentList = [
  {
    id: 'no',
    oppositeId: null,
    name: 'без мировоззрения',
  },
  {
    id: 'any',
    oppositeId: null,
    name: 'любое мировоззрение',
  },
  {
    id: 'any_good',
    oppositeId: 'any_evil',
    name: 'любое доброе мировоззрение',
  },
  {
    id: 'any_evil',
    oppositeId: 'any_good',
    name: 'любое злое мировоззрение',
  },
  {
    id: 'any_lawfull',
    oppositeId: 'any_chaotic',
    name: 'любое законопослушное мировоззрение',
  },
  {
    id: 'any_chaotic',
    oppositeId: 'any_lawfull',
    name: 'любое хаотичное мировоззрение',
  },
  {
    id: 'any_neutral',
    oppositeId: null,
    name: 'любое нейтральное мировоззрение',
  },
  {
    id: 'lg',
    oppositeId: 'ce',
    name: 'Законопослушный добрый',
  },
  {
    id: 'ng',
    oppositeId: 'ne',
    name: 'Нейтральный добрый',
  },
  {
    id: 'cg',
    oppositeId: 'le',
    name: 'Хаотичный добрый',
  },
  {
    id: 'ln',
    oppositeId: 'cn',
    name: 'Законопослушный нейтральный',
  },
  {
    id: 'n',
    oppositeId: null,
    name: 'Нейтральный',
  },
  {
    id: 'cn',
    oppositeId: 'ln',
    name: 'Хаотичный нейтральный',
  },
  {
    id: 'le',
    oppositeId: 'cg',
    name: 'Законопослушный злой',
  },
  {
    id: 'ne',
    oppositeId: 'ng',
    name: 'Нейтральный злой',
  },
  {
    id: 'ce',
    oppositeId: 'lg',
    name: 'Хаотичный злой',
  },
]

export const dndAligmentCollection = listToCollectionById(dndAligmentList)
