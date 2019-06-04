const list = [
  {
    id: 'paralyze',
    probabilityWeight: 20,
    description:'Персонаж уходит в себя и становится парализованным. Эффект оканчивается, если персонаж получает урон.',
  },
  {
    id: 'incapable',
    probabilityWeight: 10,
    description:'Персонаж становится недееспособным и всё время, пока безумен, кричит, смеётся или плачет.',
  },
  {
    id: 'fear',
    probabilityWeight: 10,
    description:'Персонаж становится испуганным и в каждом раунде должен тратить и действие и перемещение на то, чтобы бежать от источника страха.',
  },
  {
    id: 'mumble',
    probabilityWeight: 10,
    description:'Персонаж начинает что-то невнятно бормотать и не может ни нормально общаться, ни накладывать заклинания.',
  },
  {
    id: 'attack',
    probabilityWeight: 10,
    description:'Персонаж должен в каждом раунде действием атаковать ближайшее существо.',
  },
  {
    id: 'hallucinogen',
    probabilityWeight: 10,
    description:'Персонаж видит яркие галлюцинации и совершает с помехой проверки характеристик.',
  },
  {
    id: 'obey',
    probabilityWeight: 5,
    description:'Персонаж выполняет всё, что ему говорят, если это не суицидальный приказ.',
  },
  {
    id: 'eat',
    probabilityWeight: 5,
    description:'Персонаж испытывает непреодолимое желание есть что-то странное, такое как грязь, слизь или отбросы.',
  },
  {
    id: 'stun',
    probabilityWeight: 10,
    description:'Персонаж ошеломлён.',
  },
  {
    id: 'unconsciousness',
    probabilityWeight: 10,
    description:'Персонаж теряет сознание.',
  },
]

export default list
