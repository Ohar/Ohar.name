import listToCollectionById from '@/utils/listToCollectionById'

export const ALIGMENT_NO = 'no'
export const ALIGMENT_ANY = 'any'
export const ALIGMENT_ANY_GOOD = 'any_good'
export const ALIGMENT_ANY_EVIL = 'any_evil'
export const ALIGMENT_ANY_LAWFUL = 'any_lawful'
export const ALIGMENT_ANY_CHAOTIC = 'any_chaotic'
export const ALIGMENT_NOT_NEUTRAL = 'not_neutral'
export const ALIGMENT_NOT_GOOD = 'not_good'
export const ALIGMENT_NOT_EVIL = 'not_evil'
export const ALIGMENT_NOT_LAWFUL = 'not_lawful'
export const ALIGMENT_NOT_CHAOTIC = 'not_chaotic'
export const ALIGMENT_ANY_NEUTRAL = 'any_neutral'
export const ALIGMENT_LG = 'lg'
export const ALIGMENT_NG = 'ng'
export const ALIGMENT_CG = 'cg'
export const ALIGMENT_LN = 'ln'
export const ALIGMENT_N = 'n'
export const ALIGMENT_CN = 'cn'
export const ALIGMENT_LE = 'le'
export const ALIGMENT_NE = 'ne'
export const ALIGMENT_CE = 'ce'

const dndAligmentList = [
  {
    id: ALIGMENT_NO,
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
    oppositeId: ALIGMENT_ANY_CHAOTIC,
    name: {
        nominative: 'любое законопослушное',
        genitive: 'любого законопослушного',
        dative: 'любому законопослушному',
        accusative: 'любое законопослушное',
        instrumental: 'любым законопослушным',
        prepositional: 'любом законопослушном',
    },
    children: [
      ALIGMENT_LG,
      ALIGMENT_LN,
      ALIGMENT_LE,
    ],
  },
  {
    id: ALIGMENT_ANY_CHAOTIC,
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
    oppositeId: ALIGMENT_NOT_CHAOTIC,
    name: {
        nominative: 'любое незаконопослушное',
        genitive: 'любого незаконопослушного',
        dative: 'любому незаконопослушному',
        accusative: 'любое незаконопослушное',
        instrumental: 'любым незаконопослушным',
        prepositional: 'любом незаконопослушном',
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
    oppositeId: ALIGMENT_CE,
    name: {
        nominative: 'законопослушно-доброе',
        genitive: 'законопослушно-доброго',
        dative: 'законопослушно-доброму',
        accusative: 'законопослушно-доброе',
        instrumental: 'законопослушно-добрым',
        prepositional: 'законопослушно-добром',
    },
  },
  {
    id: ALIGMENT_NG,
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
    oppositeId: ALIGMENT_CN,
    name: {
        nominative: 'законопослушно-нейтральное',
        genitive: 'законопослушно-нейтрального',
        dative: 'законопослушно-нейтральному',
        accusative: 'законопослушно-нейтральное',
        instrumental: 'законопослушно-нейтральным',
        prepositional: 'законопослушно-нейтральном',
    },
  },
  {
    id: ALIGMENT_N,
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
    oppositeId: ALIGMENT_CG,
    name: {
        nominative: 'законопослушно-злое',
        genitive: 'законопослушно-злого',
        dative: 'законопослушно-злому',
        accusative: 'законопослушно-злое',
        instrumental: 'законопослушно-злым',
        prepositional: 'законопослушно-злом',
    },
  },
  {
    id: ALIGMENT_NE,
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
]

export const dndAligmentCollection = listToCollectionById(dndAligmentList)
