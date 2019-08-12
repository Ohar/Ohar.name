import listToCollectionById from '@/utils/listToCollectionById'

export const CONDITION_BLINDED = 'blinded'
export const CONDITION_CHARMED = 'charmed'
export const CONDITION_DEAFENED = 'deafened'
export const CONDITION_EXHAUSTION = 'exhaustion'
export const CONDITION_FRIGHTENED = 'frightened'
export const CONDITION_GRAPPLED = 'grappled'
export const CONDITION_INCAPACITATED = 'incapacitated'
export const CONDITION_INVISIBLE = 'invisible'
export const CONDITION_PARALYZED = 'paralyzed'
export const CONDITION_PETRIFIED = 'petrified'
export const CONDITION_POISONED = 'poisoned'
export const CONDITION_PRONE = 'prone'
export const CONDITION_RESTRAINED = 'restrained'
export const CONDITION_STUNNED = 'stunned'
export const CONDITION_UNCONSCIOUS = 'unconscious'

const dndConditionList = [
  {
    id: CONDITION_UNCONSCIOUS,
    name: 'Бессознательность',
    nameEn: 'Unconscious',
    description: `
* Находящееся без сознания существо «недееспособно» (см. состояние), не способно перемещаться и говорить, а также не осознаёт своё окружение.
* Существо роняет всё, что держит, и падает ничком.
* Существо автоматически проваливает спасброски Силы и Ловкости.
* Броски атаки по существу совершаются с преимуществом.
* Любая атака, попавшая по такому существу, считается критическим попаданием, если нападающий находится в пределах 5 футов от него.`,
  },
  {
    id: CONDITION_FRIGHTENED,
    name: 'Испуг',
    nameEn: 'Frightened',
    description: `
* Испуганное существо совершает с помехой проверки характеристик и броски атаки, пока источник его страха находится в пределах его линии обзора.
* Существо не способно добровольно приблизиться к источнику своего страха.
`,
  },
  {
    id: CONDITION_INVISIBLE,
    name: 'Невидимость',
    nameEn: 'Invisible',
    description: `
* Невидимое существо невозможно увидеть без помощи магии или особого чувства. С точки зрения скрытности существо считается сильно заслонённым. Местонахождение существа можно определить по шуму, который оно издаёт, или по оставленным им следам.
* Броски атаки по невидимому существу совершаются с помехой, а его броски атаки — с преимуществом.`,
  },
  {
    id: CONDITION_INCAPACITATED,
    name: 'Недееспособность',
    nameEn: 'Incapacitated',
    description: `* Недееспособное существо не может совершать действия и реакции.`,
  },
  {
    id: CONDITION_DEAFENED,
    name: 'Глухота',
    nameEn: 'Deafened',
    description: `* Оглохшее существо ничего не слышит и автоматически проваливает все проверки характеристик, связанные со слухом.`,
  },
  {
    id: CONDITION_PETRIFIED,
    name: 'Окаменение',
    nameEn: 'Petrified',
    description: `
* Окаменевшее существо, а также все немагические предметы, которые оно несёт или носит, трансформируется в твёрдое инертное вещество (как правило, в камень). Его вес увеличивается в 10 раз, и оно перестаёт стареть.
* Существо «недееспособно» (см. состояние), не способно двигаться и говорить, а также не осознаёт своё окружение.
* Броски атаки по существу совершаются с преимуществом.
* Существо автоматически проваливает спасброски Силы и Ловкости.
* Существо получает сопротивление ко всем видам урона.
* Существо получает иммунитет к ядам и болезням. Если яд или болезнь уже действовали на существо, их действие приостанавливается, но не исчезает.
`,
  },
  {
    id: CONDITION_RESTRAINED,
    name: 'Опутывание',
    nameEn: 'Restrained',
    description: `
* Скорость опутанного существа равна 0, и оно не получает выгоды ни от каких бонусов к скорости.
* Броски атаки по такому существу совершаются с преимуществом, а его броски атаки — с помехой.
* Существо совершает с помехой спасброски Ловкости.
`,
  },
  {
    id: CONDITION_BLINDED,
    name: 'Слепота',
    nameEn: 'Blinded',
    description: `
* Ослеплённое существо ничего не видит и автоматически проваливает все проверки характеристик, связанные со зрением.
* Броски атаки по такому существу совершаются с преимуществом, а его броски атаки совершаются с помехой.
`,
  },
  {
    id: CONDITION_POISONED,
    name: 'Отравление',
    nameEn: 'Poisoned',
    description: `* Отравленное существо совершает с помехой броски атаки и проверки характеристик.`,
  },
  {
    id: CONDITION_EXHAUSTION,
    name: 'Истощение',
    nameEn: 'Exhaustion',
    description: `Некоторые особые способности и опасности окружающей среды, такие как недоедание и длительное воздействие очень низких или высоких температур, могут стать причиной состояния, называемого истощением.\n
Истощение делится на шесть степеней. Эффект даёт существу ту или иную степень истощения, согласно описанию.

1. Помеха при проверках характеристик
2. Скорость уменьшается вдвое
3. Помеха при бросках атаки и спасбросках
4. Максимум хитов уменьшается вдвое
5. Скорость снижается до 0
6. Смерть

Если существо, уже находящееся в состоянии истощения, подвергается воздействию другого эффекта, вызывающего истощение, его текущая степень истощения повышается на значение, указанное в описании эффекта.\n
На существо воздействуют эффекты не только текущей степени истощения, но и более слабых степеней. Например, существо на 2 степени истощения
перемещается в два раза медленнее и совершает с помехой проверки характеристик.\n
Эффект, снимающий истощение, понижает его степень согласно описанию эффекта, вплоть до окончания действия истощения, если степень истощения существа становится ниже 1.\n
Продолжительный отдых снижает степень истощения на 1, при условии, что существо что-нибудь съесть и выпьет.`,
  },
  {
    id: CONDITION_CHARMED,
    name: 'Очарование',
    nameEn: 'Charmed',
    description: `
* Очарованное существо не может атаковать того, кто его очаровал, а также делать его целью умения или магического эффекта, причиняющего вред.
* Искуситель совершает с преимуществом все проверки характеристик при социальном взаимодействии с очарованным существом.`,
  },
  {
    id: CONDITION_STUNNED,
    name: 'Ошеломлёние',
    nameEn: 'Stunned',
    description: `
* Ошеломлённое существо «недееспособно» (см. состояние), не способно перемещаться и говорит, запинаясь.
* Существо автоматически проваливает спасброски Силы и Ловкости.
* Броски атаки по существу совершаются с преимуществом.
`,
  },
  {
    id: CONDITION_PARALYZED,
    name: 'Паралич',
    nameEn: 'Paralyzed',
    description: `
* Парализованное существо «недееспособно» (см. состояние) и не способно перемещаться и говорить.
* Существо автоматически проваливает спасброски Силы и Ловкости.
* Броски атаки по парализованному существу совершаются с преимуществом. 
* Любая атака, попавшая по такому существу, считается критическим попаданием, если нападающий находится в пределах 5 футов от существа.`,
  },
  {
    id: CONDITION_PRONE,
    name: 'Сбивание с ног',
    nameEn: 'Prone',
    description: `
* Сбитое с ног существо способно перемещаться только ползком, пока не встанет, прервав тем самым это состояние.
* Существо совершает с помехой броски атаки.
* Броски атаки по существу совершаются с преимуществом, если нападающий находится в пределах 5 футов от него. В противном случае броски атаки совершаются с помехой.
`,
  },
  {
    id: CONDITION_GRAPPLED,
    name: 'Захват',
    nameEn: 'Grappled',
    description: `
* Скорость схваченного существа равна 0, и оно не получает выгоды ни от каких бонусов к скорости.
* Состояние оканчивается, если схвативший становится недееспособен (см. состояние).
* Это состояние также оканчивается, если какой-либо эффект выводит схваченное существо из зоны досягаемости того, кто его удерживает, или из зоны удерживающего эффекта. Например, когда существо отбрасывается заклинанием _Волна грома_.
`,
  },
]

export default dndConditionList
export const dndConditionCollection = listToCollectionById(dndConditionList)
