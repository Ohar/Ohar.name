const listToCollectionById = require('./../../utils/listToCollectionById')
const generateFullAdjectiveList = require('./../../utils/generateFullAdjectiveList')

const {GENDER_FEMALE, GENDER_MALE, GENDER_MIDDLE} = require('./../../constants/genderList')

const CONDITION_BLINDED = 'blinded'
const CONDITION_CHARMED = 'charmed'
const CONDITION_DEAFENED = 'deafened'
const CONDITION_EXHAUSTION = 'exhaustion'
const CONDITION_FRIGHTENED = 'frightened'
const CONDITION_GRAPPLED = 'grappled'
const CONDITION_INCAPACITATED = 'incapacitated'
const CONDITION_INVISIBLE = 'invisible'
const CONDITION_PARALYZED = 'paralyzed'
const CONDITION_PETRIFIED = 'petrified'
const CONDITION_POISONED = 'poisoned'
const CONDITION_PRONE = 'prone'
const CONDITION_RESTRAINED = 'restrained'
const CONDITION_STUNNED = 'stunned'
const CONDITION_UNCONSCIOUS = 'unconscious'

const dndConditionList = [
  {
    id: CONDITION_UNCONSCIOUS,
    name: 'Бессознательность',
    nameEn: 'Unconscious',
    targetName: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'бессознательная',
          genitive: 'бессознательной'
        },
        [GENDER_MALE]: {
          nominative: 'бессознательный',
          genitive: 'бессознательного',
          prepositional: 'бессознательном'
        },
        [GENDER_MIDDLE]: {
          nominative: 'бессознательное'
        }
      },
      dualFemale: {
        nominative: 'бессознательные',
        genitive: 'бессознательных'
      }
    },
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
    targetName: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'испуганная',
          genitive: 'испуганной'
        },
        [GENDER_MALE]: {
          nominative: 'испуганный',
          genitive: 'испуганного',
          prepositional: 'испуганном'
        },
        [GENDER_MIDDLE]: {
          nominative: 'испуганное'
        }
      },
      dualFemale: {
        nominative: 'испуганные',
        genitive: 'испуганных'
      }
    },
    description: `
* Испуганное существо совершает с помехой проверки характеристик и броски атаки, пока источник его страха находится в пределах его линии обзора.
* Существо не способно добровольно приблизиться к источнику своего страха.
`,
  },
  {
    id: CONDITION_INVISIBLE,
    name: 'Невидимость',
    nameEn: 'Invisible',
    targetName: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'невидимая',
          genitive: 'невидимой'
        },
        [GENDER_MALE]: {
          nominative: 'невидимый',
          genitive: 'невидимого',
          prepositional: 'невидимом'
        },
        [GENDER_MIDDLE]: {
          nominative: 'невидимое'
        }
      },
      dualFemale: {
        nominative: 'невидимые',
        genitive: 'невидимых'
      }
    },
    description: `
* Невидимое существо невозможно увидеть без помощи магии или особого чувства. С точки зрения скрытности существо считается сильно заслонённым. Местонахождение существа можно определить по шуму, который оно издаёт, или по оставленным им следам.
* Броски атаки по невидимому существу совершаются с помехой, а его броски атаки — с преимуществом.`,
  },
  {
    id: CONDITION_INCAPACITATED,
    name: 'Недееспособность',
    nameEn: 'Incapacitated',
    targetName: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'недееспособная',
          genitive: 'недееспособной'
        },
        [GENDER_MALE]: {
          nominative: 'недееспособный',
          genitive: 'недееспособного',
          prepositional: 'недееспособном'
        },
        [GENDER_MIDDLE]: {
          nominative: 'недееспособное'
        }
      },
      dualFemale: {
        nominative: 'недееспособные',
        genitive: 'недееспособных'
      }
    },
    description: `* Недееспособное существо не может совершать действия и реакции.`,
  },
  {
    id: CONDITION_DEAFENED,
    name: 'Глухота',
    nameEn: 'Deafened',
    targetName: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'глухая',
          genitive: 'глухой'
        },
        [GENDER_MALE]: {
          nominative: 'глухой',
          genitive: 'глухого',
          prepositional: 'глухом'
        },
        [GENDER_MIDDLE]: {
          nominative: 'глухое'
        }
      },
      dualFemale: {
        nominative: 'глухие',
        genitive: 'глухих'
      }
    },
    description: `* Оглохшее существо ничего не слышит и автоматически проваливает все проверки характеристик, связанные со слухом.`,
  },
  {
    id: CONDITION_PETRIFIED,
    name: 'Окаменение',
    nameEn: 'Petrified',
    targetName: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'окаменевшая',
          genitive: 'окаменевшей'
        },
        [GENDER_MALE]: {
          nominative: 'окаменевший',
          genitive: 'окаменевшего',
          prepositional: 'окаменевшем'
        },
        [GENDER_MIDDLE]: {
          nominative: 'окаменевшее'
        }
      },
      dualFemale: {
        nominative: 'окаменевшие',
        genitive: 'окаменевших'
      }
    },
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
    targetName: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'опутанная',
          genitive: 'опутанной'
        },
        [GENDER_MALE]: {
          nominative: 'опутанный',
          genitive: 'опутанного',
          prepositional: 'опутанном'
        },
        [GENDER_MIDDLE]: {
          nominative: 'опутанное'
        }
      },
      dualFemale: {
        nominative: 'опутанные',
        genitive: 'опутанных'
      }
    },
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
    targetName: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'слепая',
          genitive: 'слепой'
        },
        [GENDER_MALE]: {
          nominative: 'слепой',
          genitive: 'слепого',
          prepositional: 'слепом'
        },
        [GENDER_MIDDLE]: {
          nominative: 'слепое'
        }
      },
      dualFemale: {
        nominative: 'слепые',
        genitive: 'слепых'
      }
    },
    description: `
* Ослеплённое существо ничего не видит и автоматически проваливает все проверки характеристик, связанные со зрением.
* Броски атаки по такому существу совершаются с преимуществом, а его броски атаки совершаются с помехой.
`,
  },
  {
    id: CONDITION_POISONED,
    name: 'Отравление',
    nameEn: 'Poisoned',
    targetName: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'отравленая',
          genitive: 'отравленой'
        },
        [GENDER_MALE]: {
          nominative: 'отравленый',
          genitive: 'отравленого',
          prepositional: 'отравленом'
        },
        [GENDER_MIDDLE]: {
          nominative: 'отравленое'
        }
      },
      dualFemale: {
        nominative: 'отравленые',
        genitive: 'отравленых'
      }
    },
    description: `* Отравленное существо совершает с помехой броски атаки и проверки характеристик.`,
  },
  {
    id: CONDITION_EXHAUSTION,
    name: 'Истощение',
    nameEn: 'Exhaustion',
    targetName: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'истощенная',
          genitive: 'истощенной'
        },
        [GENDER_MALE]: {
          nominative: 'истощенный',
          genitive: 'истощенного',
          prepositional: 'истощенном'
        },
        [GENDER_MIDDLE]: {
          nominative: 'истощенное'
        }
      },
      dualFemale: {
        nominative: 'истощенные',
        genitive: 'истощенных'
      }
    },
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
    targetName: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'очарованная',
          genitive: 'очарованной'
        },
        [GENDER_MALE]: {
          nominative: 'очарованный',
          genitive: 'очарованного',
          prepositional: 'очарованном'
        },
        [GENDER_MIDDLE]: {
          nominative: 'очарованное'
        }
      },
      dualFemale: {
        nominative: 'очарованные',
        genitive: 'очарованных'
      }
    },
    description: `
* Очарованное существо не может атаковать того, кто его очаровал, а также делать его целью умения или магического эффекта, причиняющего вред.
* Искуситель совершает с преимуществом все проверки характеристик при социальном взаимодействии с очарованным существом.`,
  },
  {
    id: CONDITION_STUNNED,
    name: 'Ошеломлёние',
    nameEn: 'Stunned',
    targetName: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'ошеломлённая',
          genitive: 'ошеломлённой'
        },
        [GENDER_MALE]: {
          nominative: 'ошеломлённый',
          genitive: 'ошеломлённого',
          prepositional: 'ошеломлённом'
        },
        [GENDER_MIDDLE]: {
          nominative: 'ошеломлённое'
        }
      },
      dualFemale: {
        nominative: 'ошеломлённые',
        genitive: 'ошеломлённых'
      }
    },
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
    targetName: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'парализованная',
          genitive: 'парализованной'
        },
        [GENDER_MALE]: {
          nominative: 'парализованный',
          genitive: 'парализованного',
          prepositional: 'парализованном'
        },
        [GENDER_MIDDLE]: {
          nominative: 'парализованное'
        }
      },
      dualFemale: {
        nominative: 'парализованные',
        genitive: 'парализованных'
      }
    },
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
    targetName: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'лежащая',
          genitive: 'лежащей',
        },
        [GENDER_MALE]: {
          nominative: 'лежащий',
          genitive: 'лежащего',
          prepositional: 'лежащем',
        },
        [GENDER_MIDDLE]: {
          nominative: 'лежащее',
        }
      },
      dualFemale: {
        nominative: 'лежащие',
        genitive: 'лежащих',
      }
    },
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
    targetName: {
      singular: {
        [GENDER_FEMALE]: {
          nominative: 'захваченная',
          genitive: 'захваченной'
        },
        [GENDER_MALE]: {
          nominative: 'захваченный',
          genitive: 'захваченного',
          prepositional: 'захваченном'
        },
        [GENDER_MIDDLE]: {
          nominative: 'захваченное'
        }
      },
      dualFemale: {
        nominative: 'захваченные',
        genitive: 'захваченных'
      }
    },
    description: `
* Скорость схваченного существа равна 0, и оно не получает выгоды ни от каких бонусов к скорости.
* Состояние оканчивается, если схвативший становится недееспособен (см. состояние).
* Это состояние также оканчивается, если какой-либо эффект выводит схваченное существо из зоны досягаемости того, кто его удерживает, или из зоны удерживающего эффекта. Например, когда существо отбрасывается заклинанием _Волна грома_.
`,
  },
].map(
  item => ({
    ...item,
    targetName: generateFullAdjectiveList(item.targetName),
  })
)

module.exports = dndConditionList

module.exports.dndConditionCollection = listToCollectionById(dndConditionList)

module.exports.CONDITION_BLINDED = CONDITION_BLINDED
module.exports.CONDITION_CHARMED = CONDITION_CHARMED
module.exports.CONDITION_DEAFENED = CONDITION_DEAFENED
module.exports.CONDITION_EXHAUSTION = CONDITION_EXHAUSTION
module.exports.CONDITION_FRIGHTENED = CONDITION_FRIGHTENED
module.exports.CONDITION_GRAPPLED = CONDITION_GRAPPLED
module.exports.CONDITION_INCAPACITATED = CONDITION_INCAPACITATED
module.exports.CONDITION_INVISIBLE = CONDITION_INVISIBLE
module.exports.CONDITION_PARALYZED = CONDITION_PARALYZED
module.exports.CONDITION_PETRIFIED = CONDITION_PETRIFIED
module.exports.CONDITION_POISONED = CONDITION_POISONED
module.exports.CONDITION_PRONE = CONDITION_PRONE
module.exports.CONDITION_RESTRAINED = CONDITION_RESTRAINED
module.exports.CONDITION_STUNNED = CONDITION_STUNNED
module.exports.CONDITION_UNCONSCIOUS = CONDITION_UNCONSCIOUS
