const listToCollectionById = require('./../../utils/listToCollectionById')
const { GENDER_MALE, GENDER_FEMALE, GENDER_MIDDLE, GENDER_ANY } = require('./../../constants/genderList')

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
      [GENDER_ANY]: {
        nominative: 'без мировоззрения',
        genitive: 'без мировоззрения',
        dative: 'без мировоззрения',
        accusative: 'без мировоззрения',
        instrumental: 'без мировоззрения',
        prepositional: 'без мировоззрения',
      },
    },
  },
  {
    id: ALIGMENT_ANY,
    name: {
      [GENDER_ANY]: {
        nominative: 'любое мировоззрение',
        genitive: 'любого мировоззрения',
        dative: 'любому мировоззрению',
        accusative: 'любое мировоззрение',
        instrumental: 'любым мировоззрением',
        prepositional: 'любом мировоззрении',
      },
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
      [GENDER_MIDDLE]: {
        nominative: 'любое доброе',
        genitive: 'любого доброго',
        dative: 'любому доброму',
        accusative: 'любое доброе',
        instrumental: 'любым добрым',
        prepositional: 'любом добром',
      },
      [GENDER_MALE]: {
        nominative: 'любой добрый',
        genitive: 'любого доброго',
        dative: 'любому доброму',
        accusative: 'любого доброго',
        instrumental: 'любым добрым',
        prepositional: 'любом добром',
      },
      [GENDER_FEMALE]: {
        nominative: 'любая добрая',
        genitive: 'любой доброй',
        dative: 'любой доброй',
        accusative: 'любую добрую',
        instrumental: 'любой доброй',
        prepositional: 'любой доброй',
      },
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
      [GENDER_MIDDLE]: {
        nominative: 'любое злое',
        genitive: 'любого злого',
        dative: 'любому злому',
        accusative: 'любое злое',
        instrumental: 'любым злым',
        prepositional: 'любом злом',
      },
      [GENDER_MALE]: {
        nominative: 'любой злой',
        genitive: 'любого злого',
        dative: 'любому злому',
        accusative: 'любого злого',
        instrumental: 'любым злым',
        prepositional: 'любом злом',
      },
      [GENDER_FEMALE]: {
        nominative: 'любая злая',
        genitive: 'любой злой',
        dative: 'любой злой',
        accusative: 'любую злую',
        instrumental: 'любой злой',
        prepositional: 'любой злой',
      },
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
      [GENDER_MIDDLE]: {
        nominative: 'любое принципиальное',
        genitive: 'любого принципиального',
        dative: 'любому принципиальному',
        accusative: 'любое принципиальное',
        instrumental: 'любым принципиальным',
        prepositional: 'любом принципиальном',
      },
      [GENDER_MALE]: {
        nominative: 'любой принципиальный',
        genitive: 'любого принципиального',
        dative: 'любому принципиальному',
        accusative: 'любого принципиального',
        instrumental: 'любым принципиальным',
        prepositional: 'любом принципиальном',
      },
      [GENDER_FEMALE]: {
        nominative: 'любая принципиальная',
        genitive: 'любой принципиальной',
        dative: 'любой принципиальной',
        accusative: 'любую принципиальную',
        instrumental: 'любой принципиальной',
        prepositional: 'любой принципиальной',
      },
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
      [GENDER_MIDDLE]: {
        nominative: 'любое хаотичное',
        genitive: 'любого хаотичного',
        dative: 'любому хаотичному',
        accusative: 'любое хаотичное',
        instrumental: 'любым хаотичным',
        prepositional: 'любом хаотичном',
      },
      [GENDER_MALE]: {
        nominative: 'любой хаотичный',
        genitive: 'любого хаотичного',
        dative: 'любому хаотичному',
        accusative: 'любого хаотичного',
        instrumental: 'любым хаотичным',
        prepositional: 'любом хаотичном',
      },
      [GENDER_FEMALE]: {
        nominative: 'любая хаотичная',
        genitive: 'любой хаотичной',
        dative: 'любой хаотичной',
        accusative: 'любую хаотичную',
        instrumental: 'любой хаотичной',
        prepositional: 'любой хаотичной',
      },
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
      [GENDER_MIDDLE]: {
        nominative: 'любое не нейтральное',
        genitive: 'любого не нейтрального',
        dative: 'любому не нейтральному',
        accusative: 'любое не нейтральное',
        instrumental: 'любым не нейтральным',
        prepositional: 'любом не нейтральном',
      },
      [GENDER_MALE]: {
        nominative: 'любой не нейтральный',
        genitive: 'любого не нейтрального',
        dative: 'любому не нейтральному',
        accusative: 'любого не нейтрального',
        instrumental: 'любым не нейтральным',
        prepositional: 'любом не нейтральном',
      },
      [GENDER_FEMALE]: {
        nominative: 'любая не нейтральная',
        genitive: 'любой не нейтральной',
        dative: 'любой не нейтральной',
        accusative: 'любую не нейтральную',
        instrumental: 'любой не нейтральной',
        prepositional: 'любой не нейтральной',
      },
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
      [GENDER_MIDDLE]: {
        nominative: 'любое недоброе',
        genitive: 'любого недоброго',
        dative: 'любому недоброму',
        accusative: 'любое недоброе',
        instrumental: 'любым недобрым',
        prepositional: 'любом недобром',
      },
      [GENDER_MALE]: {
        nominative: 'любой недобрый',
        genitive: 'любого недоброго',
        dative: 'любому недоброму',
        accusative: 'любого недоброго',
        instrumental: 'любым недобрым',
        prepositional: 'любом недобром',
      },
      [GENDER_FEMALE]: {
        nominative: 'любая недобрая',
        genitive: 'любой недоброй',
        dative: 'любой недоброй',
        accusative: 'любую недобрую',
        instrumental: 'любой недоброй',
        prepositional: 'любой недоброй',
      },
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
      [GENDER_MIDDLE]: {
        nominative: 'любое незлое',
        genitive: 'любого незлого',
        dative: 'любому незлому',
        accusative: 'любое незлое',
        instrumental: 'любым незлым',
        prepositional: 'любом незлом',
      },
      [GENDER_MALE]: {
        nominative: 'любой незлой',
        genitive: 'любого незлого',
        dative: 'любому незлому',
        accusative: 'любого незлого',
        instrumental: 'любым незлым',
        prepositional: 'любом незлом',
      },
      [GENDER_FEMALE]: {
        nominative: 'любая незлая',
        genitive: 'любой незлой',
        dative: 'любой незлой',
        accusative: 'любую незлую',
        instrumental: 'любой незлой',
        prepositional: 'любой незлой',
      },
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
      [GENDER_MIDDLE]: {
        nominative: 'любое непринципиальное',
        genitive: 'любого непринципиального',
        dative: 'любому непринципиальному',
        accusative: 'любое непринципиальное',
        instrumental: 'любым непринципиальным',
        prepositional: 'любом непринципиальном',
      },
      [GENDER_MALE]: {
        nominative: 'любой непринципиальный',
        genitive: 'любого непринципиального',
        dative: 'любому непринципиальному',
        accusative: 'любого непринципиального',
        instrumental: 'любым непринципиальным',
        prepositional: 'любом непринципиальном',
      },
      [GENDER_FEMALE]: {
        nominative: 'любая непринципиальная',
        genitive: 'любой непринципиальной',
        dative: 'любой непринципиальной',
        accusative: 'любую непринципиальную',
        instrumental: 'любой непринципиальной',
        prepositional: 'любой непринципиальной',
      },
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
      [GENDER_MIDDLE]: {
        nominative: 'любое нехаотичное',
        genitive: 'любого нехаотичного',
        dative: 'любому нехаотичному',
        accusative: 'любое нехаотичное',
        instrumental: 'любым нехаотичным',
        prepositional: 'любом нехаотичном',
      },
      [GENDER_MALE]: {
        nominative: 'любой нехаотичный',
        genitive: 'любого нехаотичного',
        dative: 'любому нехаотичному',
        accusative: 'любого нехаотичного',
        instrumental: 'любым нехаотичным',
        prepositional: 'любом нехаотичном',
      },
      [GENDER_FEMALE]: {
        nominative: 'любая нехаотичная',
        genitive: 'любой нехаотичной',
        dative: 'любой нехаотичной',
        accusative: 'любую нехаотичную',
        instrumental: 'любой нехаотичной',
        prepositional: 'любой нехаотичной',
      },
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
      [GENDER_MIDDLE]: {
        nominative: 'любое нейтральное',
        genitive: 'любого нейтрального',
        dative: 'любому нейтральному',
        accusative: 'любое нейтральное',
        instrumental: 'любым нейтральным',
        prepositional: 'любом нейтральном',
      },
      [GENDER_MALE]: {
        nominative: 'любой нейтральный',
        genitive: 'любого нейтрального',
        dative: 'любому нейтральному',
        accusative: 'любого нейтрального',
        instrumental: 'любым нейтральным',
        prepositional: 'любом нейтральном',
      },
      [GENDER_FEMALE]: {
        nominative: 'любая нейтральная',
        genitive: 'любой нейтральной',
        dative: 'любой нейтральной',
        accusative: 'любую нейтральную',
        instrumental: 'любой нейтральной',
        prepositional: 'любой нейтральной',
      },
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
      [GENDER_MIDDLE]: {
        nominative: 'принципиально-доброе',
        genitive: 'принципиально-доброго',
        dative: 'принципиально-доброму',
        accusative: 'принципиально-доброе',
        instrumental: 'принципиально-добрым',
        prepositional: 'принципиально-добром',
      },
      [GENDER_MALE]: {
        nominative: 'принципиально-добрый',
        genitive: 'принципиально-доброго',
        dative: 'принципиально-доброму',
        accusative: 'принципиально-доброго',
        instrumental: 'принципиально-добрым',
        prepositional: 'принципиально-добром',
      },
      [GENDER_FEMALE]: {
        nominative: 'принципиально-добрая',
        genitive: 'принципиально-доброй',
        dative: 'принципиально-доброй',
        accusative: 'принципиально-добрую',
        instrumental: 'принципиально-доброй',
        prepositional: 'принципиально-доброй',
      },
    },
  },
  {
    id: ALIGMENT_NG,
    showInList: true,
    oppositeId: ALIGMENT_NE,
    name: {
      [GENDER_MIDDLE]: {
        nominative: 'нейтрально-доброе',
        genitive: 'нейтрально-доброго',
        dative: 'нейтрально-доброму',
        accusative: 'нейтрально-доброе',
        instrumental: 'нейтрально-добрым',
        prepositional: 'нейтрально-добром',
      },
      [GENDER_MALE]: {
        nominative: 'нейтрально-добрый',
        genitive: 'нейтрально-доброго',
        dative: 'нейтрально-доброму',
        accusative: 'нейтрально-доброго',
        instrumental: 'нейтрально-добрым',
        prepositional: 'нейтрально-добром',
      },
      [GENDER_FEMALE]: {
        nominative: 'нейтрально-добрая',
        genitive: 'нейтрально-доброй',
        dative: 'нейтрально-доброй',
        accusative: 'нейтрально-добрую',
        instrumental: 'нейтрально-доброй',
        prepositional: 'нейтрально-доброй',
      },
    },
  },
  {
    id: ALIGMENT_CG,
    showInList: true,
    oppositeId: ALIGMENT_LE,
    name: {
      [GENDER_MIDDLE]: {
        nominative: 'хаотично-доброе',
        genitive: 'хаотично-доброго',
        dative: 'хаотично-доброму',
        accusative: 'хаотично-доброе',
        instrumental: 'хаотично-добрым',
        prepositional: 'хаотично-добром',
      },
      [GENDER_MALE]: {
        nominative: 'хаотично-добрый',
        genitive: 'хаотично-доброго',
        dative: 'хаотично-доброму',
        accusative: 'хаотично-доброго',
        instrumental: 'хаотично-добрым',
        prepositional: 'хаотично-добром',
      },
      [GENDER_FEMALE]: {
        nominative: 'хаотично-добрая',
        genitive: 'хаотично-доброй',
        dative: 'хаотично-доброй',
        accusative: 'хаотично-добрую',
        instrumental: 'хаотично-доброй',
        prepositional: 'хаотично-доброй',
      },
    },
  },
  {
    id: ALIGMENT_LN,
    showInList: true,
    oppositeId: ALIGMENT_CN,
    name: {
      [GENDER_MIDDLE]: {
        nominative: 'принципиально-нейтральное',
        genitive: 'принципиально-нейтрального',
        dative: 'принципиально-нейтральному',
        accusative: 'принципиально-нейтральное',
        instrumental: 'принципиально-нейтральным',
        prepositional: 'принципиально-нейтральном',
      },
      [GENDER_MALE]: {
        nominative: 'принципиально-нейтральный',
        genitive: 'принципиально-нейтрального',
        dative: 'принципиально-нейтральному',
        accusative: 'принципиально-нейтрального',
        instrumental: 'принципиально-нейтральным',
        prepositional: 'принципиально-нейтральном',
      },
      [GENDER_FEMALE]: {
        nominative: 'принципиально-нейтральная',
        genitive: 'принципиально-нейтральной',
        dative: 'принципиально-нейтральной',
        accusative: 'принципиально-нейтральную',
        instrumental: 'принципиально-нейтральной',
        prepositional: 'принципиально-нейтральной',
      },
    },
  },
  {
    id: ALIGMENT_N,
    showInList: true,
    oppositeId: null,
    name: {
      [GENDER_MIDDLE]: {
        nominative: 'нейтральное',
        genitive: 'нейтрального',
        dative: 'нейтральному',
        accusative: 'нейтральное',
        instrumental: 'нейтральным',
        prepositional: 'нейтральном',
      },
      [GENDER_MALE]: {
        nominative: 'нейтральный',
        genitive: 'нейтрального',
        dative: 'нейтральному',
        accusative: 'нейтрального',
        instrumental: 'нейтральным',
        prepositional: 'нейтральном',
      },
      [GENDER_FEMALE]: {
        nominative: 'нейтральная',
        genitive: 'нейтральной',
        dative: 'нейтральной',
        accusative: 'нейтральную',
        instrumental: 'нейтральной',
        prepositional: 'нейтральной',
      },
    },
  },
  {
    id: ALIGMENT_CN,
    showInList: true,
    oppositeId: ALIGMENT_LN,
    name: {
      [GENDER_MIDDLE]: {
        nominative: 'хаотично-нейтральное',
        genitive: 'хаотично-нейтрального',
        dative: 'хаотично-нейтральному',
        accusative: 'хаотично-нейтральное',
        instrumental: 'хаотично-нейтральным',
        prepositional: 'хаотично-нейтральном',
      },
      [GENDER_MALE]: {
        nominative: 'хаотично-нейтральный',
        genitive: 'хаотично-нейтрального',
        dative: 'хаотично-нейтральному',
        accusative: 'хаотично-нейтрального',
        instrumental: 'хаотично-нейтральным',
        prepositional: 'хаотично-нейтральном',
      },
      [GENDER_FEMALE]: {
        nominative: 'хаотично-нейтральная',
        genitive: 'хаотично-нейтральной',
        dative: 'хаотично-нейтральной',
        accusative: 'хаотично-нейтральную',
        instrumental: 'хаотично-нейтральной',
        prepositional: 'хаотично-нейтральной',
      },
    },
  },
  {
    id: ALIGMENT_LE,
    showInList: true,
    oppositeId: ALIGMENT_CG,
    name: {
      [GENDER_MIDDLE]: {
        nominative: 'принципиально-злое',
        genitive: 'принципиально-злого',
        dative: 'принципиально-злому',
        accusative: 'принципиально-злое',
        instrumental: 'принципиально-злым',
        prepositional: 'принципиально-злом',
      },
      [GENDER_MALE]: {
        nominative: 'принципиально-злой',
        genitive: 'принципиально-злого',
        dative: 'принципиально-злому',
        accusative: 'принципиально-злого',
        instrumental: 'принципиально-злым',
        prepositional: 'принципиально-злом',
      },
      [GENDER_FEMALE]: {
        nominative: 'принципиально-злая',
        genitive: 'принципиально-злой',
        dative: 'принципиально-злой',
        accusative: 'принципиально-злую',
        instrumental: 'принципиально-злой',
        prepositional: 'принципиально-злой',
      },
    },
  },
  {
    id: ALIGMENT_NE,
    showInList: true,
    oppositeId: ALIGMENT_NG,
    name: {
      [GENDER_MIDDLE]: {
        nominative: 'нейтрально-злое',
        genitive: 'нейтрально-злого',
        dative: 'нейтрально-злому',
        accusative: 'нейтрально-злое',
        instrumental: 'нейтрально-злым',
        prepositional: 'нейтрально-злом',
      },
      [GENDER_MALE]: {
        nominative: 'нейтрально-злой',
        genitive: 'нейтрально-злого',
        dative: 'нейтрально-злому',
        accusative: 'нейтрально-злого',
        instrumental: 'нейтрально-злым',
        prepositional: 'нейтрально-злом',
      },
      [GENDER_FEMALE]: {
        nominative: 'нейтрально-злая',
        genitive: 'нейтрально-злой',
        dative: 'нейтрально-злой',
        accusative: 'нейтрально-злую',
        instrumental: 'нейтрально-злой',
        prepositional: 'нейтрально-злой',
      },
    },
  },
  {
    id: ALIGMENT_CE,
    showInList: true,
    oppositeId: ALIGMENT_LG,
    name: {
      [GENDER_MIDDLE]: {
        nominative: 'хаотично-злое',
        genitive: 'хаотично-злого',
        dative: 'хаотично-злому',
        accusative: 'хаотично-злое',
        instrumental: 'хаотично-злым',
        prepositional: 'хаотично-злом',
      },
      [GENDER_MALE]: {
        nominative: 'хаотично-злой',
        genitive: 'хаотично-злого',
        dative: 'хаотично-злому',
        accusative: 'хаотично-злого',
        instrumental: 'хаотично-злым',
        prepositional: 'хаотично-злом',
      },
      [GENDER_FEMALE]: {
        nominative: 'хаотично-злая',
        genitive: 'хаотично-злой',
        dative: 'хаотично-злой',
        accusative: 'хаотично-злую',
        instrumental: 'хаотично-злой',
        prepositional: 'хаотично-злой',
      },
    },
  },
  {
    id: ALIGMENT_NOT_LN,
    oppositeId: null,
    name: {
      [GENDER_ANY]: {
        nominative: 'любое мировоззрение, кроме принципиально-нейтрального',
        genitive: 'любого мировоззрения, кроме принципиально-нейтрального',
        dative: 'любому мировоззрению, кроме принципиально-нейтрального',
        accusative: 'любое мировоззрение, кроме принципиально-нейтрального',
        instrumental: 'любым мировоззрением, кроме принципиально-нейтрального',
        prepositional: 'любом мировоззрении, кроме принципиально-нейтрального',
      },
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

function concatChildAligmentIds(aligment) {
  const { children } = aligment

  if (children && children.length) {
    return children.reduce(
      (list, id) => [
        ...list,
        ...concatChildAligmentIds(dndAligmentRawCollection[id]),
      ],
      children,
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
  [],
)

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
