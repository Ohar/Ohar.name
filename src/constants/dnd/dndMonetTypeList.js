import listToCollectionById from '@/utils/listToCollectionById'

export const MONET_COPPER = 'copper'
export const MONET_ELECTRUM = 'electrum'
export const MONET_GOLD = 'gold'
export const MONET_PLATINUM = 'platinum'
export const MONET_SILVER = 'silver'

const dndMonetTypeList = [
  {
    id: MONET_COPPER,
    koef: 1,
    name: 'мм',
    fullName: {
      singular: {
        nominative: 'медная монета',
        genitive: 'медной монеты',
        dative: 'медной монете',
        accusative: 'медную монету',
        instrumental: 'медной монетой',
        prepositional: 'медной монете',
      },
      dual: {
        nominative: 'медные монеты',
        genitive: 'медные монеты',
        dative: 'медным монетам',
        accusative: 'медные монеты',
        instrumental: 'медными монетами',
        prepositional: 'медных монетах',
      },
      plural: {
        nominative: 'медных монет',
        genitive: 'медных монет',
        dative: 'медным монетам',
        accusative: 'медных монет',
        instrumental: 'медными монетами',
        prepositional: 'медных монетах',
      },
    },
  },
  {
    id: MONET_SILVER,
    koef: 10,
    name: 'см',
    fullName: {
      singular: {
        nominative: 'серебряная монета',
        genitive: 'серебряной монеты',
        dative: 'серебряной монете',
        accusative: 'серебряную монету',
        instrumental: 'серебряной монетой',
        prepositional: 'серебряной монете',
      },
      dual: {
        nominative: 'серебряные монеты',
        genitive: 'серебряные монеты',
        dative: 'серебряным монетам',
        accusative: 'серебряные монеты',
        instrumental: 'серебряными монетами',
        prepositional: 'серебряных монетах',
      },
      plural: {
        nominative: 'серебряных монет',
        genitive: 'серебряных монет',
        dative: 'серебряным монетам',
        accusative: 'серебряных монет',
        instrumental: 'серебряными монетами',
        prepositional: 'серебряных монетах',
      },
    },
  },
  {
    id: MONET_ELECTRUM,
    koef: 20,
    name: 'эм',
    fullName: {
      singular: {
        nominative: 'электрумовая монета',
        genitive: 'электрумовой монеты',
        dative: 'электрумовой монете',
        accusative: 'электрумовую монету',
        instrumental: 'электрумовой монетой',
        prepositional: 'электрумовой монете',
      },
      dual: {
        nominative: 'электрумовые монеты',
        genitive: 'электрумовые монеты',
        dative: 'электрумовым монетам',
        accusative: 'электрумовые монеты',
        instrumental: 'электрумовыми монетами',
        prepositional: 'электрумовых монетах',
      },
      plural: {
        nominative: 'электрумовых монет',
        genitive: 'электрумовых монет',
        dative: 'электрумовым монетам',
        accusative: 'электрумовых монет',
        instrumental: 'электрумовыми монетами',
        prepositional: 'электрумовых монетах',
      },
    },
  },
  {
    id: MONET_GOLD,
    koef: 100,
    name: 'зм',
    fullName: {
      singular: {
        nominative: 'золотая монета',
        genitive: 'золотой монеты',
        dative: 'золотой монете',
        accusative: 'золотую монету',
        instrumental: 'золотой монетой',
        prepositional: 'золотой монете',
      },
      dual: {
        nominative: 'золотые монеты',
        genitive: 'золотые монеты',
        dative: 'золотым монетам',
        accusative: 'золотые монеты',
        instrumental: 'золотыми монетами',
        prepositional: 'золотых монетах',
      },
      plural: {
        nominative: 'золотых монет',
        genitive: 'золотых монет',
        dative: 'золотым монетам',
        accusative: 'золотых монет',
        instrumental: 'золотыми монетами',
        prepositional: 'золотых монетах',
      },
    },
  },
  {
    id: MONET_PLATINUM,
    koef: 1000,
    name: 'пм',
    fullName: {
      singular: {
        nominative: 'платиновая монета',
        genitive: 'платиновой монеты',
        dative: 'платиновой монете',
        accusative: 'платиновую монету',
        instrumental: 'платиновой монетой',
        prepositional: 'платиновой монете',
      },
      dual: {
        nominative: 'платиновые монеты',
        genitive: 'платиновые монеты',
        dative: 'платиновым монетам',
        accusative: 'платиновые монеты',
        instrumental: 'платиновыми монетами',
        prepositional: 'платиновых монетах',
      },
      plural: {
        nominative: 'платиновых монет',
        genitive: 'платиновых монет',
        dative: 'платиновым монетам',
        accusative: 'платиновых монет',
        instrumental: 'платиновыми монетами',
        prepositional: 'платиновых монетах',
      },
    },
  },
]

export default dndMonetTypeList

export const dndMonetCollection = listToCollectionById(dndMonetTypeList)
