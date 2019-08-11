import listToCollectionById from '@/utils/listToCollectionById'
import {
  MAGIC_ABJURATION,
  MAGIC_CONJURATION,
  MAGIC_DIVINATION,
  MAGIC_ENCHANTMENT,
  MAGIC_EVOCATION,
  MAGIC_ILLUSION,
  MAGIC_NECROMANCY,
  MAGIC_TRANSMUTATION,
} from '@/constants/dnd/dndMagicList'
import {
  PC_CLASS_BARBARIAN,
  PC_CLASS_BARD,
  PC_CLASS_DRUID,
  PC_CLASS_FIGHTER,
  PC_CLASS_MONK,
  PC_CLASS_PALADIN,
  PC_CLASS_PRIEST,
  PC_CLASS_RANGER,
  PC_CLASS_ROGUE,
  PC_CLASS_SORCERER,
  PC_CLASS_WARLOCK,
  PC_CLASS_WIZARD,
} from '@/constants/dnd/dndPcClassList'
import {
  CAST_VERBAL,
  CAST_SOMATIC,
  CAST_MATERIAL,
} from '@/constants/dnd/dndCastComponentList'

export const SPELL_BLESS = 'bless'
export const SPELL_COMMUNE = 'commune'
export const SPELL_CURE_WOUNDS = 'cure_wounds'
export const SPELL_DETECT_EVIL_AND_GOOD = 'detect_evil_and_good'
export const SPELL_LIGHT = 'light'
export const SPELL_RAISE_DEAD = 'raise_dead'
export const SPELL_SACRED_FLAME = 'sacred_flame'
export const SPELL_SANCTUARY = 'sanctuary'
export const SPELL_THAUMATURGY = 'thaumaturgy'

const defaultCastTime = '1 действие'
const defaultDuration = 'мгновенная'

const dndSpellList = [
  {
    id: SPELL_LIGHT,
    name: 'Свет',
    nameEn: 'Light',
    description: `Вы касаетесь одного предмета, длина которого ни по одному из измерений не превышает 10 футов. Пока заклинание активно, предмет испускает яркий свет в радиусе 20 футов и тусклый свет в пределах ещё 20 футов. Свет может быть любого выбранного вами цвета. Полное покрытие предмета чем-то непрозрачным блокирует свет. Заклинание оканчивается, если вы наложите его ещё раз или окончите действием.\n 
Если вы нацелились на предмет, несомый или носимый враждебным существом, это существо должно преуспеть в спасброске Ловкости, чтобы увернуться от заклинания.`,
    lvl: 0,
    magicSchool: MAGIC_EVOCATION,
    range: 0,
    componentList: [CAST_VERBAL, CAST_MATERIAL],
    materialText: 'светлячок или фосфоресцирующий мох',
    duration: '1 час',
    source: 'PHB:275',
    classList: [
      PC_CLASS_PRIEST,
      PC_CLASS_BARD,
      PC_CLASS_FIGHTER,
      PC_CLASS_ROGUE,
      PC_CLASS_SORCERER,
      PC_CLASS_WIZARD,
    ],
  },
  {
    id: SPELL_SACRED_FLAME,
    name: 'Священное пламя',
    nameEn: 'Sacred flame',
    description: `Похожее на огонь сияние нисходит на существо, которое вы видите в пределах дистанции. Цель должна преуспеть в спасброске Ловкости, иначе она получает урон излучением 1к8. Для этого спасброска цель не получает преимуществ от укрытия.\n
Урон этого заклинания увеличивается на 1к8, когда вы достигаете 5 уровня (2к8), 11 уровня (3к8) и 17 уровня (4к8).
`,
    lvl: 0,
    magicSchool: MAGIC_EVOCATION,
    range: 60,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    source: 'PHB:276',
    classList: [PC_CLASS_PRIEST],
  },
  {
    id: SPELL_THAUMATURGY,
    name: 'Чудотворство',
    nameEn: 'Thaumaturgy',
    description: `Вы создаёте небольшое чудо, знак сверхъестественной силы. Вы создаёте один из следующих магических эффектов в пределах дистанции:\n 
* Ваш голос в течение 1 минуты звучит в три раза громче.
* Вы заставляете пламя в течение 1 минуты мерцать, светить ярче или тусклее, или изменять цвет.
* Вы вызываете безвредную дрожь в полу в течение 1 минуты.
* Вы создаёте мгновенный звук, исходящий из выбранной вами точки в пределах дистанции, такой как раскат грома, крик ворона или зловещий шёпот.
* Вы мгновенно заставляете незапертое окно или дверь распахнуться или захлопнуться.
* Вы на 1 минуту изменяете внешний вид своих глаз.\n
Если вы накладываете это заклинание несколько раз, у вас может быть до трёх активных эффектов с длительностью в 1 минуту, и вы можете оканчивать такие эффекты действием.`,
    lvl: 0,
    magicSchool: MAGIC_TRANSMUTATION,
    range: 30,
    componentList: [CAST_VERBAL],
    duration: 'вплоть до 1 минуты',
    source: 'PHB:289',
    classList: [PC_CLASS_PRIEST],
  },
  {
    id: SPELL_BLESS,
    name: 'Благословение',
    nameEn: 'Bless',
    description: `Вы благословляете до трёх существ на свой выбор в пределах дистанции. Каждый раз, когда до окончания заклинания цель совершает бросок атаки или спасбросок, она может бросить к4 и добавить выпавшее число к результату.\n
На больших уровнях: Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, вы можете сделать целью одно дополнительное существо за каждый уровень ячейки выше первого.`,
    lvl: 1,
    magicSchool: MAGIC_ENCHANTMENT,
    range: 30,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'капля святой воды',
    duration: 'вплоть до 1 минуты',
    needConcentration: true,
    source: 'PHB:213',
    classList: [PC_CLASS_PRIEST, PC_CLASS_PALADIN],
  },
  {
    id: SPELL_CURE_WOUNDS,
    name: 'Лечение ран',
    nameEn: 'Cure wounds',
    description: `Существо, которого вы касаетесь, восстанавливает количество хитов, равное 1к8 + ваш модификатор базовой характеристики. Это заклинание не оказывает никакого эффекта на нежить и конструктов.\n
На больших уровнях: Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, лечение увеличивается на 1к8 за каждый уровень ячейки выше первого.`,
    lvl: 1,
    magicSchool: MAGIC_EVOCATION,
    range: 0,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    source: 'PHB:236',
    classList: [PC_CLASS_PRIEST, PC_CLASS_BARD, PC_CLASS_PALADIN, PC_CLASS_RANGER, PC_CLASS_DRUID],
  },
  {
    id: SPELL_SANCTUARY,
    name: 'Убежище',
    nameEn: 'Sanctuary',
    description: `Вы защищаете одно существо в пределах дистанции от атаки. Пока заклинание активно, все существа, нацеливающиеся на защищённое существо атаками или вредоносными заклинаниями, должны вначале совершить спасбросок Мудрости. При провале существо должно выбрать новую цель или потеряет атаку или заклинание. Это заклинание не защищает от эффектов, действующих на площадь, таких как взрыв огненного шара.\n
Если защищённое существо совершает атаку или накладывает заклинание, оказывающее действие на враждебное существо, это заклинание оканчивается.`,
    lvl: 1,
    magicSchool: MAGIC_ABJURATION,
    castTime: '1 бонусное действие',
    range: 30,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'маленькое серебряное зеркало',
    duration: '1 минута',
    source: 'PHB:285',
    classList: [PC_CLASS_PRIEST, PC_CLASS_MONK],
  },
  {
    id: SPELL_COMMUNE,
    name: 'Общение',
    nameEn: 'Commune',
    description: `Вы связываетесь со своим божеством или божественным посредником и задаёте три вопроса, на которые можно ответить «да» или «нет». Вы должны задать вопросы пока заклинание активно. На каждый вопрос вы получаете правильный ответ.\n
Божественные создания не всегда всеведущи, поэтому вы можете получить ответ «неясно», если вопрос находится вне компетенции божества. Если односложный ответ может ввести в заблуждение или противоречит интересам божества, Мастер может выдать короткую фразу.\n
Если вы накладываете это заклинание несколько раз до завершения продолжительного отдыха, существует накопительный шанс 25 процентов за каждое использование, начиная со второго, что вы не получите ответ. Мастер совершает этот бросок скрытно.`,
    lvl: 5,
    magicSchool: MAGIC_DIVINATION,
    castTime: '1 минута',
    range: -1,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'благовоние и флакон святой или нечестивой воды',
    duration: '1 минута',
    ritual: true,
    source: 'PHB:247',
    classList: [PC_CLASS_PRIEST],
  },
  {
    id: SPELL_RAISE_DEAD,
    name: 'Оживление',
    nameEn: 'Raise dead',
    description: `Вы возвращаете к жизни мёртвое существо, которого касаетесь, при условии, что оно мертво не более 10 дней. Если душа этого существа может воссоединиться с телом и хочет этого, существо воскрешается с 1 хитом.\n
Это заклинание также нейтрализует все яды и исцеляет немагические болезни, бывшие у существа в момент смерти. Однако это заклинание не снимает магические болезни, проклятья и подобные эффекты; если их не снять до накладывания этого заклинания, они снова начнут действовать, когда существо оживёт. Это заклинание не может оживить нежить.\n
Это заклинание исцеляет все раны, но не восстанавливает отсутствующие части тела. Если у существа отсутствуют жизненно важные части тела — например, голова — заклинание автоматически проваливается.\n
Возвращение к жизни — тяжёлое испытание. Цель получает штраф −4 ко всем броскам атаки, спасброскам и проверкам характеристик. Каждый раз, когда цель заканчивает длительный отдых, штраф уменьшается на 1, пока не исчезнет полностью.`,
    lvl: 5,
    magicSchool: MAGIC_NECROMANCY,
    castTime: '1 час',
    range: 0,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'бриллиант, стоящий как минимум 500 зм, расходуемый заклинанием',
    source: 'PHB:250',
    classList: [PC_CLASS_BARD, PC_CLASS_PRIEST, PC_CLASS_PALADIN],
  },
  {
    id: SPELL_DETECT_EVIL_AND_GOOD,
    name: 'Обнаружение добра и зла',
    nameEn: 'Detect evil and good',
    description: `Пока заклинание активно, вы знаете, есть ли в пределах 30 фт. от вас аберрации, исчадия, небожители, нежить, феи или элементали, а также их местоположение. Кроме того, вы знаете, есть ли в пределах 30 фт. от вас место или предмет, который был магически освящён или осквернён.\n
Заклинание проницает большую часть барьеров, но блокируется 1 футом камня, 1 дюймом обычного металла, тонким листом свинца или 3 футами дерева или земли.`,
    lvl: 1,
    magicSchool: MAGIC_DIVINATION,
    range: -1,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    duration: 'вплоть до 10 минут',
    needConcentration: true,
    source: 'PHB:245',
    classList: [PC_CLASS_PRIEST, PC_CLASS_PALADIN],
  },
].map(
  spell => ({
    ...spell,
    castTime: spell.castTime || defaultCastTime,
    duration: spell.duration || defaultDuration,
    needConcentration: Boolean(spell.needConcentration),
    ritual: Boolean(spell.ritual),
  })
)

export default dndSpellList
export const dndSpellCollection = listToCollectionById(dndSpellList)
