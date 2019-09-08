const listToCollectionById = require('./../../utils/listToCollectionById')

const CR_0 = '0'
const CR_1_8 = '1/8'
const CR_1_4 = '1/4'
const CR_1_2 = '1/2'
const CR_1 = '1'
const CR_2 = '2'
const CR_3 = '3'
const CR_4 = '4'
const CR_5 = '5'
const CR_6 = '6'
const CR_7 = '7'
const CR_8 = '8'
const CR_9 = '9'
const CR_10 = '10'
const CR_11 = '11'
const CR_12 = '12'
const CR_13 = '13'
const CR_14 = '14'
const CR_15 = '15'
const CR_16 = '16'
const CR_17 = '17'
const CR_18 = '18'
const CR_19 = '19'
const CR_20 = '20'
const CR_21 = '21'
const CR_22 = '22'
const CR_23 = '23'
const CR_24 = '24'
const CR_25 = '25'
const CR_26 = '26'
const CR_27 = '27'
const CR_28 = '28'
const CR_29 = '29'
const CR_30 = '30'

const dndCrList = [
  {
    name: '0',
    id: CR_0,
    exp: 10,
    profBonus: 2,
  },
  {
    name: '1/8',
    id: CR_1_8,
    exp: 25,
    profBonus: 2,
  },
  {
    name: '1/4',
    id: CR_1_4,
    exp: 50,
    profBonus: 2,
  },
  {
    name: '1/2',
    id: CR_1_2,
    exp: 100,
    profBonus: 2,
  },
  {
    name: '1',
    id: CR_1,
    exp: 200,
    profBonus: 2,
  },
  {
    name: '2',
    id: CR_2,
    exp: 450,
    profBonus: 2,
  },
  {
    name: '3',
    id: CR_3,
    exp: 700,
    profBonus: 2,
  },
  {
    name: '4',
    id: CR_4,
    exp: 1100,
    profBonus: 2,
  },
  {
    name: '5',
    id: CR_5,
    exp: 1800,
    profBonus: 3,
  },
  {
    name: '6',
    id: CR_6,
    exp: 2300,
    profBonus: 3,
  },
  {
    name: '7',
    id: CR_7,
    exp: 2900,
    profBonus: 3,
  },
  {
    name: '8',
    id: CR_8,
    exp: 3900,
    profBonus: 3,
  },
  {
    name: '9',
    id: CR_9,
    exp: 5000,
    profBonus: 4,
  },
  {
    name: '10',
    id: CR_10,
    exp: 5900,
    profBonus: 4,
  },
  {
    name: '11',
    id: CR_11,
    exp: 7200,
    profBonus: 4,
  },
  {
    name: '12',
    id: CR_12,
    exp: 8400,
    profBonus: 4,
  },
  {
    name: '13',
    id: CR_13,
    exp: 10000,
    profBonus: 5,
  },
  {
    name: '14',
    id: CR_14,
    exp: 11500,
    profBonus: 5,
  },
  {
    name: '15',
    id: CR_15,
    exp: 13000,
    profBonus: 5,
  },
  {
    name: '16',
    id: CR_16,
    exp: 15000,
    profBonus: 5,
  },
  {
    name: '17',
    id: CR_17,
    exp: 18000,
    profBonus: 6,
  },
  {
    name: '18',
    id: CR_18,
    exp: 20000,
    profBonus: 6,
  },
  {
    name: '19',
    id: CR_19,
    exp: 22000,
    profBonus: 6,
  },
  {
    name: '20',
    id: CR_20,
    exp: 25000,
    profBonus: 6,
  },
  {
    name: '21',
    id: CR_21,
    exp: 33000,
    profBonus: 7,
  },
  {
    name: '22',
    id: CR_22,
    exp: 41000,
    profBonus: 7,
  },
  {
    name: '23',
    id: CR_23,
    exp: 50000,
    profBonus: 7,
  },
  {
    name: '24',
    id: CR_24,
    exp: 62000,
    profBonus: 7,
  },
  {
    name: '25',
    id: CR_25,
    exp: 0,
    profBonus: 8,
  },
  {
    name: '26',
    id: CR_26,
    exp: 0,
    profBonus: 8,
  },
  {
    name: '27',
    id: CR_27,
    exp: 0,
    profBonus: 8,
  },
  {
    name: '28',
    id: CR_28,
    exp: 0,
    profBonus: 8,
  },
  {
    name: '29',
    id: CR_29,
    exp: 0,
    profBonus: 9,
  },
  {
    name: '30',
    id: CR_30,
    exp: 155000,
    profBonus: 9,
  },
]

module.exports = dndCrList

module.exports.dndCrCollection = listToCollectionById(dndCrList)

module.exports.CR_0 = CR_0
module.exports.CR_1_8 = CR_1_8
module.exports.CR_1_4 = CR_1_4
module.exports.CR_1_2 = CR_1_2
module.exports.CR_1 = CR_1
module.exports.CR_2 = CR_2
module.exports.CR_3 = CR_3
module.exports.CR_4 = CR_4
module.exports.CR_5 = CR_5
module.exports.CR_6 = CR_6
module.exports.CR_7 = CR_7
module.exports.CR_8 = CR_8
module.exports.CR_9 = CR_9
module.exports.CR_10 = CR_10
module.exports.CR_11 = CR_11
module.exports.CR_12 = CR_12
module.exports.CR_13 = CR_13
module.exports.CR_14 = CR_14
module.exports.CR_15 = CR_15
module.exports.CR_16 = CR_16
module.exports.CR_17 = CR_17
module.exports.CR_18 = CR_18
module.exports.CR_19 = CR_19
module.exports.CR_20 = CR_20
module.exports.CR_21 = CR_21
module.exports.CR_22 = CR_22
module.exports.CR_23 = CR_23
module.exports.CR_24 = CR_24
module.exports.CR_25 = CR_25
module.exports.CR_26 = CR_26
module.exports.CR_27 = CR_27
module.exports.CR_28 = CR_28
module.exports.CR_29 = CR_29
module.exports.CR_30 = CR_30
