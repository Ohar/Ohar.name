import listToCollectionById from '@/utils/listToCollectionById'

const dndCrList = [
  {
    cr: '0',
    id: '0',
    exp: 10,
  },
  {
    cr: '1/8',
    id: '1/8',
    exp: 25,
  },
  {
    cr: '1/4',
    id: '1/4',
    exp: 50,
  },
  {
    cr: '1/2',
    id: '1/2',
    exp: 100,
  },
  {
    cr: '1',
    id: '1',
    exp: 200,
  },
  {
    cr: '2',
    id: '2',
    exp: 450,
  },
  {
    cr: '3',
    id: '3',
    exp: 700,
  },
  {
    cr: '4',
    id: '4',
    exp: 1100,
  },
  {
    cr: '5',
    id: '5',
    exp: 1800,
  },
  {
    cr: '6',
    id: '6',
    exp: 2300,
  },
  {
    cr: '7',
    id: '7',
    exp: 2900,
  },
  {
    cr: '8',
    id: '8',
    exp: 3900,
  },
  {
    cr: '9',
    id: '9',
    exp: 5000,
  },
  {
    cr: '10',
    id: '10',
    exp: 5900,
  },
  {
    cr: '11',
    id: '11',
    exp: 7200,
  },
  {
    cr: '12',
    id: '12',
    exp: 8400,
  },
  {
    cr: '13',
    id: '13',
    exp: 10000,
  },
  {
    cr: '14',
    id: '14',
    exp: 11500,
  },
  {
    cr: '15',
    id: '15',
    exp: 13000,
  },
  {
    cr: '16',
    id: '16',
    exp: 15000,
  },
  {
    cr: '17',
    id: '17',
    exp: 18000,
  },
  {
    cr: '18',
    id: '18',
    exp: 20000,
  },
  {
    cr: '19',
    id: '19',
    exp: 22000,
  },
  {
    cr: '20',
    id: '20',
    exp: 25000,
  },
  {
    cr: '21',
    id: '21',
    exp: 33000,
  },
  {
    cr: '22',
    id: '22',
    exp: 41000,
  },
  {
    cr: '23',
    id: '23',
    exp: 50000,
  },
  {
    cr: '24',
    id: '24',
    exp: 62000,
  },
  {
    cr: '30',
    id: '30',
    exp: 155000,
  },
]

export default dndCrList

export const dndCrCollection = listToCollectionById(dndCrList)
