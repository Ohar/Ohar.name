import listToCollectionById from '@/utils/listToCollectionById'

export const CAST_VERBAL = 'verbal'
export const CAST_SOMATIC = 'somatic'
export const CAST_MATERIAL = 'material'
export const CAST_NONE = 'none'

const dndCastComponentList = [
  {
    id: CAST_VERBAL,
    name: {
      singular:  {
        nominative: 'вербальный',
        genitive: 'вербального',
        dative: 'вербальному',
        accusative: 'вербального',
        instrumental: 'вербальным',
        prepositional: 'вербальном'
      },
      plural:  {
        nominative: 'вербальные',
        genitive: 'вербальных',
        dative: 'вербальным',
        accusative: 'вербальных',
        instrumental: 'вербальными',
        prepositional: 'вербальных'
      },
    },
    shortName: 'В',
    description: `Большинство заклинаний требуют произношения таинственных слов. Сами по себе слова не являются источником силы заклинания просто комбинация звуков с особой тональностью вызывает резонанс в прядях магии, приводя их в движение.\n
Таким образом, персонаж с кляпом во рту или в области заклинания _Тишина_, не может активировать заклинания с вербальным компонентом.`
  },
  {
    id: CAST_SOMATIC,
    name: {
      singular:  {
        nominative: 'соматический',
        genitive: 'соматического',
        dative: 'соматическому',
        accusative: 'соматического',
        instrumental: 'соматическим',
        prepositional: 'соматическом'
      },
      plural:  {
        nominative: 'соматические',
        genitive: 'соматических',
        dative: 'соматическим',
        accusative: 'соматических',
        instrumental: 'соматическими',
        prepositional: 'соматических'
      },
    },
    shortName: 'С',
    description: `Заклинание может требовать энергичной жестикуляции или замысловатой последовательности телодвижений. Если у заклинания есть соматический компонент, у заклинателя должна быть свободной хотя бы одна рука для исполнения этих жестов.`
  },
  {
    id: CAST_MATERIAL,
    name: {
      singular:  {
        nominative: 'материальный',
        genitive: 'материального',
        dative: 'материальному',
        accusative: 'материального',
        instrumental: 'материальным',
        prepositional: 'материальном'
      },
      plural:  {
        nominative: 'материальные',
        genitive: 'материальных',
        dative: 'материальным',
        accusative: 'материальных',
        instrumental: 'материальными',
        prepositional: 'материальных'
      },
    },
    shortName: 'М',
    description: `Накладывание некоторых заклинаний требует наличия особых предметов, указанных в скобках в описании заклинания. Персонаж может использовать мешочек с компонентами или заклинательную фокусировку вместо указанных компонентов. Однако, если для компонента указана цена, у персонажа для накладывания заклинания должен быть именно такой компонент.\n
Если в заклинании сказано, что материальные компоненты расходуются, заклинатель должен предоставить компоненты для каждого использования этого заклинания.\n
У заклинателя должна быть одна свободная рука для доступа к материальным компонентам, но это может быть та же самая рука, что используется для выполнения соматического компонента.`
  }
]

export default dndCastComponentList
export const dndCastComponentCollection = listToCollectionById(dndCastComponentList)
