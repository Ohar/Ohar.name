const listToCollectionById = require('./../../utils/listToCollectionById')

const ALIGMENT_NO = 'no'
const ALIGMENT_ANY = 'any'
const ALIGMENT_ANY_GOOD = 'any_good'
const ALIGMENT_ANY_EVIL = 'any_evil'
const ALIGMENT_ANY_LAWFUL = 'any_lawful'
const ALIGMENT_ANY_CHAOTIC = 'any_chaotic'
const ALIGMENT_NOT_NEUTRAL = 'not_neutral'
const ALIGMENT_NOT_GOOD = 'not_good'
const ALIGMENT_NOT_EVIL = 'not_evil'
const ALIGMENT_NOT_LAWFUL = 'not_lawful'
const ALIGMENT_NOT_LN = 'not_ln'
const ALIGMENT_NOT_CHAOTIC = 'not_chaotic'
const ALIGMENT_ANY_NEUTRAL = 'any_neutral'
const ALIGMENT_LG = 'lg'
const ALIGMENT_NG = 'ng'
const ALIGMENT_CG = 'cg'
const ALIGMENT_LN = 'ln'
const ALIGMENT_N = 'n'
const ALIGMENT_CN = 'cn'
const ALIGMENT_LE = 'le'
const ALIGMENT_NE = 'ne'
const ALIGMENT_CE = 'ce'

const dndAligmentRawList = [
  {
    id: ALIGMENT_NO,
    showInList: true,
    oppositeId: null,
    name: {
        nominative: 'без мировоззрения',
        genitive: 'без мировоззрения',
        dative: 'без мировоззрения',
        accusative: 'без мировоззрения',
        instrumental: 'без мировоззрения',
        prepositional: 'без мировоззрения',
    },
  },
  {
    id: ALIGMENT_ANY,
    oppositeId: null,
    name: {
        nominative: 'любое мировоззрение',
        genitive: 'любого мировоззрения',
        dative: 'любому мировоззрению',
        accusative: 'любое мировоззрение',
        instrumental: 'любым мировоззрением',
        prepositional: 'любом мировоззрении',
    },
    children: [
      ALIGMENT_ANY_GOOD,
      ALIGMENT_ANY_EVIL,
      ALIGMENT_ANY_LAWFUL,
      ALIGMENT_ANY_CHAOTIC,
      ALIGMENT_NOT_NEUTRAL,
    ],
  },
  {
    id: ALIGMENT_ANY_GOOD,
    showInList: true,
    oppositeId: ALIGMENT_ANY_EVIL,
    name: {
        nominative: 'любое доброе',
        genitive: 'любого доброго',
        dative: 'любому доброму',
        accusative: 'любое доброе',
        instrumental: 'любым добрым',
        prepositional: 'любом добром',
    },
    children: [
      ALIGMENT_LG,
      ALIGMENT_NG,
      ALIGMENT_CG,
    ],
  },
  {
    id: ALIGMENT_ANY_EVIL,
    showInList: true,
    oppositeId: ALIGMENT_ANY_GOOD,
    name: {
        nominative: 'любое злое',
        genitive: 'любого злого',
        dative: 'любому злому',
        accusative: 'любое злое',
        instrumental: 'любым злым',
        prepositional: 'любом злом',
    },
    children: [
      ALIGMENT_LE,
      ALIGMENT_NE,
      ALIGMENT_CE,
    ],
  },
  {
    id: ALIGMENT_ANY_LAWFUL,
    showInList: true,
    oppositeId: ALIGMENT_ANY_CHAOTIC,
    name: {
        nominative: 'любое принципиальное',
        genitive: 'любого принципиального',
        dative: 'любому принципиальному',
        accusative: 'любое принципиальное',
        instrumental: 'любым принципиальным',
        prepositional: 'любом принципиальном',
    },
    children: [
      ALIGMENT_LG,
      ALIGMENT_LN,
      ALIGMENT_LE,
    ],
  },
  {
    id: ALIGMENT_ANY_CHAOTIC,
    showInList: true,
    oppositeId: ALIGMENT_ANY_LAWFUL,
    name: {
        nominative: 'любое хаотичное',
        genitive: 'любого хаотичного',
        dative: 'любому хаотичному',
        accusative: 'любое хаотичное',
        instrumental: 'любым хаотичным',
        prepositional: 'любом хаотичном',
    },
    children: [
      ALIGMENT_CG,
      ALIGMENT_CN,
      ALIGMENT_CE,
    ],
  },
  {
    id: ALIGMENT_NOT_NEUTRAL,
    showInList: true,
    oppositeId: ALIGMENT_NOT_NEUTRAL,
    name: {
      nominative: 'любое не нейтральное',
      genitive: 'любого не нейтрального',
      dative: 'любому не нейтральному',
      accusative: 'любое не нейтральное',
      instrumental: 'любым не нейтральным',
      prepositional: 'любом не нейтральном',
    },
    children: [
      ALIGMENT_LG,
      ALIGMENT_LE,
      ALIGMENT_CG,
      ALIGMENT_CE,
    ],
  },
  {
    id: ALIGMENT_NOT_GOOD,
    showInList: true,
    oppositeId: ALIGMENT_NOT_EVIL,
    name: {
        nominative: 'любое недоброе',
        genitive: 'любого недоброго',
        dative: 'любому недоброму',
        accusative: 'любое недоброе',
        instrumental: 'любым недобрым',
        prepositional: 'любом недобром',
    },
    children: [
      ALIGMENT_LN,
      ALIGMENT_N,
      ALIGMENT_CN,
      ALIGMENT_ANY_EVIL,
    ],
  },
  {
    id: ALIGMENT_NOT_EVIL,
    showInList: true,
    oppositeId: ALIGMENT_NOT_GOOD,
    name: {
        nominative: 'любое незлое',
        genitive: 'любого незлого',
        dative: 'любому незлому',
        accusative: 'любое незлое',
        instrumental: 'любым незлым',
        prepositional: 'любом незлом',
    },
    children: [
      ALIGMENT_LN,
      ALIGMENT_N,
      ALIGMENT_CN,
      ALIGMENT_ANY_GOOD,
    ],
  },
  {
    id: ALIGMENT_NOT_LAWFUL,
    showInList: true,
    oppositeId: ALIGMENT_NOT_CHAOTIC,
    name: {
        nominative: 'любое непринципиальное',
        genitive: 'любого непринципиального',
        dative: 'любому непринципиальному',
        accusative: 'любое непринципиальное',
        instrumental: 'любым непринципиальным',
        prepositional: 'любом непринципиальном',
    },
    children: [
      ALIGMENT_NG,
      ALIGMENT_N,
      ALIGMENT_NE,
      ALIGMENT_ANY_CHAOTIC,
    ],
  },
  {
    id: ALIGMENT_NOT_CHAOTIC,
    showInList: true,
    oppositeId: ALIGMENT_NOT_LAWFUL,
    name: {
        nominative: 'любое нехаотичное',
        genitive: 'любого нехаотичного',
        dative: 'любому нехаотичному',
        accusative: 'любое нехаотичное',
        instrumental: 'любым нехаотичным',
        prepositional: 'любом нехаотичном',
    },
    children: [
      ALIGMENT_NG,
      ALIGMENT_N,
      ALIGMENT_NE,
      ALIGMENT_ANY_LAWFUL,
    ],
  },
  {
    id: ALIGMENT_ANY_NEUTRAL,
    showInList: true,
    oppositeId: ALIGMENT_NOT_NEUTRAL,
    name: {
        nominative: 'любое нейтральное',
        genitive: 'любого нейтрального',
        dative: 'любому нейтральному',
        accusative: 'любое нейтральное',
        instrumental: 'любым нейтральным',
        prepositional: 'любом нейтральном',
    },
    children: [
      ALIGMENT_NG,
      ALIGMENT_LN,
      ALIGMENT_N,
      ALIGMENT_CN,
      ALIGMENT_NE,
    ],
  },
  {
    id: ALIGMENT_LG,
    showInList: true,
    oppositeId: ALIGMENT_CE,
    name: {
        nominative: 'принципиально-доброе',
        genitive: 'принципиально-доброго',
        dative: 'принципиально-доброму',
        accusative: 'принципиально-доброе',
        instrumental: 'принципиально-добрым',
        prepositional: 'принципиально-добром',
    },
  },
  {
    id: ALIGMENT_NG,
    showInList: true,
    oppositeId: ALIGMENT_NE,
    name: {
        nominative: 'нейтрально-доброе',
        genitive: 'нейтрально-доброго',
        dative: 'нейтрально-доброму',
        accusative: 'нейтрально-доброе',
        instrumental: 'нейтрально-добрым',
        prepositional: 'нейтрально-добром',
    },
  },
  {
    id: ALIGMENT_CG,
    showInList: true,
    oppositeId: ALIGMENT_LE,
    name: {
        nominative: 'хаотично-доброе',
        genitive: 'хаотично-доброго',
        dative: 'хаотично-доброму',
        accusative: 'хаотично-доброе',
        instrumental: 'хаотично-добрым',
        prepositional: 'хаотично-добром',
    },
  },
  {
    id: ALIGMENT_LN,
    showInList: true,
    oppositeId: ALIGMENT_CN,
    name: {
        nominative: 'принципиально-нейтральное',
        genitive: 'принципиально-нейтрального',
        dative: 'принципиально-нейтральному',
        accusative: 'принципиально-нейтральное',
        instrumental: 'принципиально-нейтральным',
        prepositional: 'принципиально-нейтральном',
    },
  },
  {
    id: ALIGMENT_N,
    showInList: true,
    oppositeId: null,
    name: {
        nominative: 'нейтральное',
        genitive: 'нейтрального',
        dative: 'нейтральному',
        accusative: 'нейтральное',
        instrumental: 'нейтральным',
        prepositional: 'нейтральном',
    },
  },
  {
    id: ALIGMENT_CN,
    showInList: true,
    oppositeId: ALIGMENT_LN,
    name: {
        nominative: 'хаотично-нейтральное',
        genitive: 'хаотично-нейтрального',
        dative: 'хаотично-нейтральному',
        accusative: 'хаотично-нейтральное',
        instrumental: 'хаотично-нейтральным',
        prepositional: 'хаотично-нейтральном',
    },
  },
  {
    id: ALIGMENT_LE,
    showInList: true,
    oppositeId: ALIGMENT_CG,
    name: {
        nominative: 'принципиально-злое',
        genitive: 'принципиально-злого',
        dative: 'принципиально-злому',
        accusative: 'принципиально-злое',
        instrumental: 'принципиально-злым',
        prepositional: 'принципиально-злом',
    },
  },
  {
    id: ALIGMENT_NE,
    showInList: true,
    oppositeId: ALIGMENT_NG,
    name: {
        nominative: 'нейтрально-злое',
        genitive: 'нейтрально-злого',
        dative: 'нейтрально-злому',
        accusative: 'нейтрально-злое',
        instrumental: 'нейтрально-злым',
        prepositional: 'нейтрально-злом',
    },
  },
  {
    id: ALIGMENT_CE,
    showInList: true,
    oppositeId: ALIGMENT_LG,
    name: {
        nominative: 'хаотично-злое',
        genitive: 'хаотично-злого',
        dative: 'хаотично-злому',
        accusative: 'хаотично-злое',
        instrumental: 'хаотично-злым',
        prepositional: 'хаотично-злом',
    },
  },
  {
    id: ALIGMENT_NOT_LN,
    oppositeId: null,
    name: {
      nominative: 'любое мировоззрение, кроме принципиально-нейтрального',
      genitive: 'любого мировоззрения, кроме принципиально-нейтрального',
      dative: 'любому мировоззрению, кроме принципиально-нейтрального',
      accusative: 'любое мировоззрение, кроме принципиально-нейтрального',
      instrumental: 'любым мировоззрением, кроме принципиально-нейтрального',
      prepositional: 'любом мировоззрении, кроме принципиально-нейтрального',
    },
    children: [
      ALIGMENT_ANY_GOOD,
      ALIGMENT_ANY_EVIL,
      ALIGMENT_ANY_CHAOTIC,
      ALIGMENT_N,
    ],
  },
]

const dndAligmentRawCollection = listToCollectionById(dndAligmentRawList)

function concatChildAligmentIds (aligment) {
  const { children } = aligment

  if (children && children.length) {
    return children.reduce(
      (list, id) => [
        ...list,
        ...concatChildAligmentIds(dndAligmentRawCollection[id]),
      ],
      children
    )
  }

  return []
}

const dndAligmentList = dndAligmentRawList.reduce(
  (list, aligment) => [
    ...list,
    {
      ...aligment,
      children: concatChildAligmentIds(aligment),
    },
  ],
  []
)

console.log('dndAligmentRawList', dndAligmentRawList);
console.log('dndAligmentList', dndAligmentList);

module.exports = dndAligmentList

module.exports.dndAligmentCollection = listToCollectionById(dndAligmentList)

module.exports.ALIGMENT_NO = ALIGMENT_NO
module.exports.ALIGMENT_ANY = ALIGMENT_ANY
module.exports.ALIGMENT_ANY_GOOD = ALIGMENT_ANY_GOOD
module.exports.ALIGMENT_ANY_EVIL = ALIGMENT_ANY_EVIL
module.exports.ALIGMENT_ANY_LAWFUL = ALIGMENT_ANY_LAWFUL
module.exports.ALIGMENT_ANY_CHAOTIC = ALIGMENT_ANY_CHAOTIC
module.exports.ALIGMENT_NOT_LN = ALIGMENT_NOT_LN
module.exports.ALIGMENT_NOT_NEUTRAL = ALIGMENT_NOT_NEUTRAL
module.exports.ALIGMENT_NOT_GOOD = ALIGMENT_NOT_GOOD
module.exports.ALIGMENT_NOT_EVIL = ALIGMENT_NOT_EVIL
module.exports.ALIGMENT_NOT_LAWFUL = ALIGMENT_NOT_LAWFUL
module.exports.ALIGMENT_NOT_CHAOTIC = ALIGMENT_NOT_CHAOTIC
module.exports.ALIGMENT_ANY_NEUTRAL = ALIGMENT_ANY_NEUTRAL
module.exports.ALIGMENT_LG = ALIGMENT_LG
module.exports.ALIGMENT_NG = ALIGMENT_NG
module.exports.ALIGMENT_CG = ALIGMENT_CG
module.exports.ALIGMENT_LN = ALIGMENT_LN
module.exports.ALIGMENT_N = ALIGMENT_N
module.exports.ALIGMENT_CN = ALIGMENT_CN
module.exports.ALIGMENT_LE = ALIGMENT_LE
module.exports.ALIGMENT_NE = ALIGMENT_NE
module.exports.ALIGMENT_CE = ALIGMENT_CE
