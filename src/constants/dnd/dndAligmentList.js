import listToCollectionById from '@/utils/listToCollectionById'

const dndAligmentList = [
  {
    id: 'no',
    name: 'без мировоззрения',
  },
  {
    id: 'any',
    name: 'любое мировоззрение',
  },
  {
    id: 'any_good',
    name: 'любое доброе мировоззрение',
  },
  {
    id: 'any_evil',
    name: 'любое злое мировоззрение',
  },
  {
    id: 'any_lawfull',
    name: 'любое законопослушное мировоззрение',
  },
  {
    id: 'any_chaotic',
    name: 'любое хаотичное мировоззрение',
  },
  {
    id: 'any_neutral',
    name: 'любое нейтральное мировоззрение',
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
