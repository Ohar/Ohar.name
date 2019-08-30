const listToCollectionById = require('./../../utils/listToCollectionById')

const {
  MAGIC_ABJURATION,
  MAGIC_CONJURATION,
  MAGIC_DIVINATION,
  MAGIC_ENCHANTMENT,
  MAGIC_EVOCATION,
  MAGIC_ILLUSION,
  MAGIC_NECROMANCY,
  MAGIC_TRANSMUTATION,
} = require( './dndMagicList')
const {
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
} = require( './dndPcClassList')
const {
  CAST_VERBAL,
  CAST_SOMATIC,
  CAST_MATERIAL,
} = require( './dndCastComponentList')

const SPELL_ALTER_SELF = 'alter_self'
const SPELL_ANIMATE_DEAD = 'animate_dead'
const SPELL_BANE = 'bane'
const SPELL_BARKSKIN = 'barkskin'
const SPELL_BESTOW_CURSE = 'bestow_curse'
const SPELL_BLADE_BARRIER = 'blade_barrier'
const SPELL_BLESS = 'bless'
const SPELL_BLIGHT = 'blight'
const SPELL_BLINDNESS_DEAFNESS = 'blindness_deafness'
const SPELL_BLUR = 'blur'
const SPELL_CLAIRVOYANCE = 'clairvoyance'
const SPELL_COLOR_SPRAY = 'color_spray'
const SPELL_COMMAND = 'command'
const SPELL_COMMUNE = 'commune'
const SPELL_COMPREHEND_LANGUAGES = 'comprehend_languages'
const SPELL_CONFUSION = 'confusion'
const SPELL_CONJURE_ELEMENTAL = 'conjure_elemental'
const SPELL_CONTACT_OTHER_PLANE = 'contact_other_plane'
const SPELL_CONTROL_WEATHER = 'control_weather'
const SPELL_COUNTERSPELL = 'counterspell'
const SPELL_CREATE_FOOD_AND_WATER = 'create_food_and_water'
const SPELL_CREATE_OR_DESTROY_WATER = 'create_or_destroy_water'
const SPELL_CREATION = 'creation'
const SPELL_CURE_WOUNDS = 'cure_wounds'
const SPELL_DANCING_LIGHTS = 'dancing_lights'
const SPELL_DARKNESS = 'darkness'
const SPELL_DETECT_EVIL_AND_GOOD = 'detect_evil_and_good'
const SPELL_DETECT_MAGIC = 'detect_magic'
const SPELL_DETECT_THOUGHTS = 'detect_thoughts'
const SPELL_DISGUISE_SELF = 'disguise_self'
const SPELL_DISPEL_EVIL_AND_GOOD = 'dispel_evil_and_good'
const SPELL_DISPEL_MAGIC = 'dispel_magic'
const SPELL_DIVINATION = 'divination'
const SPELL_DOMINATE_PERSON = 'dominate_person'
const SPELL_DREAM = 'dream'
const SPELL_DRUIDCRAFT = 'druidcraft'
const SPELL_ENLARGE_REDUCE = 'enlarge_reduce'
const SPELL_ENTANGLE = 'entangle'
const SPELL_EYEBITE = 'eyebite'
const SPELL_FAERIE_FIRE = 'faerie_fire'
const SPELL_FEATHER_FALL = 'feather_fall'
const SPELL_FIREBALL = 'fireball'
const SPELL_FLAME_STRIKE = 'flame_strike'
const SPELL_FLY = 'fly'
const SPELL_FOG_CLOUD = 'fog_cloud'
const SPELL_FREEDOM_OF_MOVEMENT = 'freedom_of_movement'
const SPELL_GASEOUS_FORM = 'gaseous_form'
const SPELL_GOODBERRY = 'goodberry'
const SPELL_GREATER_INVISIBILITY = 'greater_invisibility'
const SPELL_GREATER_RESTORATION = 'greater_restoration'
const SPELL_GUIDANCE = 'guidance'
const SPELL_GUST_OF_WIND = 'gust_of_wind'
const SPELL_HALLUCINATORY_TERRAIN = 'hallucinatory_terrain'
const SPELL_HEAT_METAL = 'heat_metal'
const SPELL_HOLD_MONSTER = 'hold_monster'
const SPELL_HOLD_PERSON = 'hold_person'
const SPELL_IDENTIFY = 'identify'
const SPELL_INSECT_PLAGUE = 'insect_plague'
const SPELL_INVISIBILITY = 'invisibility'
const SPELL_JUMP = 'jump'
const SPELL_LESSER_RESTORATION = 'lesser_restoration'
const SPELL_LEVITATE = 'levitate'
const SPELL_LIGHT = 'light'
const SPELL_LIGHTNING_BOLT = 'lightning_bolt'
const SPELL_LOCATE_OBJECT = 'locate_object'
const SPELL_MAGE_HAND = 'mage_hand'
const SPELL_MAGIC_MISSILE = 'magic_missile'
const SPELL_MAJOR_IMAGE = 'major_image'
const SPELL_MASS_CURE_WOUNDS = 'mass_cure_wounds'
const SPELL_MINOR_ILLUSION = 'minor_illusion'
const SPELL_MIRROR_IMAGE = 'mirror_image'
const SPELL_MISTY_STEP = 'misty_step'
const SPELL_MOVE_EARTH = 'move_earth'
const SPELL_NONDETECTION = 'nondetection'
const SPELL_PASS_WITHOUT_TRACE = 'pass_without_trace'
const SPELL_PASSWALL = 'passwall'
const SPELL_PHANTASMAL_FORCE = 'phantasmal_force'
const SPELL_PHANTASMAL_KILLER = 'phantasmal_killer'
const SPELL_PLANE_SHIFT = 'plane_shift'
const SPELL_POISON_SPRAY = 'poison_spray'
const SPELL_POLYMORPH = 'polymorph'
const SPELL_POWER_WORD_STUN = 'power_word_stun'
const SPELL_PRESTIDIGITATION = 'prestidigitation'
const SPELL_PROTECTION_FROM_POISON = 'protection_from_poison'
const SPELL_PURIFY_FOOD_AND_DRINK = 'purify_food_and_drink'
const SPELL_RAISE_DEAD = 'raise_dead'
const SPELL_RAY_OF_ENFEEBLEMENT = 'ray_of_enfeeblement'
const SPELL_RAY_OF_FROST = 'ray_of_frost'
const SPELL_RAY_OF_SICKNESS = 'ray_of_sickness'
const SPELL_RESSURECTION = 'ressurection'
const SPELL_SACRED_FLAME = 'sacred_flame'
const SPELL_SANCTUARY = 'sanctuary'
const SPELL_SCRYING = 'scrying'
const SPELL_SEE_INVISIBILITY = 'see_invisibility'
const SPELL_SHIELD = 'shield'
const SPELL_SHIELD_OF_FAITH = 'shield_of_faith'
const SPELL_SHILLELAGH = 'shillelagh'
const SPELL_SILENCE = 'silence'
const SPELL_SLEEP = 'sleep'
const SPELL_SPIRIT_GUARDIANS = 'spirit_guardians'
const SPELL_SPIRITUAL_WEAPON = 'spiritual_weapon'
const SPELL_STONE_SHAPE = 'stone_shape'
const SPELL_SUGGESTION = 'suggestion'
const SPELL_TELEKINESIS = 'telekinesis'
const SPELL_THAUMATURGY = 'thaumaturgy'
const SPELL_THUNDERWAVE = 'thunderwave'
const SPELL_TONGUES = 'tongues'
const SPELL_VICIOUS_MOCKERY = 'vicious_mockery'
const SPELL_WALL_OF_FIRE = 'wall_of_fire'
const SPELL_WALL_OF_STONE = 'wall_of_stone'
const SPELL_WATER_BREATHING = 'water_breathing'
const SPELL_WATER_WALK = 'water_walk'
const SPELL_WEB = 'web'
const SPELL_WIND_WALK = 'wind_walk'

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
**На больших уровнях:** Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, вы можете сделать целью одно дополнительное существо за каждый уровень ячейки выше первого.`,
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
**На больших уровнях:** Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, лечение увеличивается на 1к8 за каждый уровень ячейки выше первого.`,
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
  {
    id: SPELL_INVISIBILITY,
    name: 'Невидимость',
    nameEn: 'Invisibility',
    description: `Существо, которого вы касаетесь, становится невидимым до окончания действия заклинания. Все, что цель несет или носит, становится невидимым, пока остается у нее. Заклинание оканчивается на цели, если она совершает атаку или накладывает заклинание.\n
**На больших уровнях:** Если вы накладываете это заклинание, используя ячейку 3 уровня или выше, вы можете сделать целью одно дополнительное существо за каждый уровень ячейки выше второго.`,
    lvl: 2,
    magicSchool: MAGIC_ILLUSION,
    range: 0,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'ресница в смоле',
    duration: 'вплоть до 1 часа',
    needConcentration: true,
    source: 'PHB:243',
    classList: [PC_CLASS_BARD, PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WARLOCK, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_FLAME_STRIKE,
    name: 'Небесный огонь',
    nameEn: 'Flame strike',
    description: `В указанном вами месте возникает вертикальная колонна божественного пламени. Все существа в цилиндре с радиусом 10 фт. и высотой 40 фт. с центром на точке в пределах дистанции должны совершить спасбросок Ловкости. Существо получает урон излучением 4к6 и урон огнём 4к6 при провале и половину урона при успехе.\n
**На больших уровнях:** Если вы накладываете это заклинание, используя ячейку 6 уровня или выше, урон излучением или урон огнём (на ваш выбор) увеличивается на 1к6 за каждый уровень ячейки выше пятого.`,
    lvl: 5,
    magicSchool: MAGIC_EVOCATION,
    range: 60,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'щепотка серы',
    source: 'PHB:243',
    classList: [PC_CLASS_PRIEST],
  },
  {
    id: SPELL_DISPEL_EVIL_AND_GOOD,
    name: 'Рассеивание добра и зла',
    nameEn: 'Dispel evil and good',
    description: `Вас окружает мерцающая энергия, защищающая от фей, нежити и существ, происходящих не с Материального Плана.\n
Пока заклинание активно, исчадия, небожители, нежить, феи и элементали совершают по вам броски атаки с помехой. Вы можете закончить заклинание преждевременно, выбрав один из представленных ниже вариантов:\n
**Изгнание.** Вы совершаете действием рукопашную атаку заклинанием по исчадию, небожителю, нежити, фее или элементалю в пределах досягаемости. При попадании вы пытаетесь изгнать существо на его родной план. Существо должно преуспеть в спасброске Харизмы, иначе оно будет отправлено на свой родной план (если только оно уже не находится там). Нежить отправляется в Царство Теней, а феи в Страну Фей.\n
**Поломка чар.** Вы касаетесь действием существа, до которого можете дотянуться, и которое очаровано, испугано или одержимо исчадием, небожителем, нежитью, феей или элементалем. Это существо перестаёт быть очарованным, испуганным или одержимым такими существами.`,
    lvl: 5,
    magicSchool: MAGIC_ABJURATION,
    range: -1,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'святая вода или порошок серебра и железа',
    duration: 'вплоть до 1 минуты',
    needConcentration: true,
    source: 'PHB:274',
    classList: [PC_CLASS_PRIEST, PC_CLASS_PALADIN],
  },
  {
    id: SPELL_BLADE_BARRIER,
    name: 'Стена клинков',
    nameEn: 'Blade barrier',
    description: `Вы создаёте вертикальную стену из крутящихся бритвенно-острых клинков из магической энергии. Стена появляется в пределах дистанции и существует столько, сколько активно это заклинание. Вы можете создать прямую стену длиной 100 фт., высотой 20 фт. и толщиной 5 фт., или закольцованную стену диаметром 60 фт., высотой 20 фт. и толщиной 5 фт. Стена предоставляет существам, находящимся за ней, укрытие на три четверти, и её пространство является труднопроходимой местностью.\n
Когда существо впервые за ход входит в пространство стены или начинает там ход, оно должно совершить спасбросок Ловкости. При провале существо получает рубящий урон 6к10. При успешном спасброске существо получает половину урона.`,
    lvl: 6,
    magicSchool: MAGIC_EVOCATION,
    range: 90,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    duration: 'вплоть до 10 минут',
    needConcentration: true,
    source: 'PHB:282',
    classList: [PC_CLASS_PRIEST],
  },
  {
    id: SPELL_CONTROL_WEATHER,
    name: 'Власть над погодой',
    nameEn: 'Control weather',
    description: `Вы получаете на время длительности контроль над погодой в пределах 5 миль от себя. Для накладывания этого заклинания вы должны находиться на открытом воздухе. Если вы переместитесь в место, где над головой не будет неба, заклинание тут же закончится. Когда вы накладываете это заклинание, вы изменяете текущую погоду, которую определяет Мастер в зависимости от климата и времени года. Вы можете изменить осадки, температуру и ветер. Требуется 1к4 × 10 минут, чтобы новые условия вступили в силу. Когда новые условия вступят в силу, вы можете создать новые условия. Когда заклинание оканчивается, погода постепенно возвращается к нормальной. Изменяя погоду, найдите текущее состояние в таблицах и измените их на 1 позицию выше или ниже. Изменяя ветер, можете изменить его направление.

**Осадки**
1. Чистое небо
2. Небольшая облачность
3. Пасмурно или густой туман
4. Дождь, град или снег
5. Проливной дождь, сильный град или метель

**Температура**
1. Невыносимая жара
2. Жара
3. Тепло 
4. Прохлада
5. Холод
6. Арктическая стужа

**Ветер**
1. Штиль
2. Умеренный ветер
3. Сильный ветер
4. Буря
5. Шторм
`,
    lvl: 8,
    magicSchool: MAGIC_TRANSMUTATION,
    castTime: '10 минут',
    range: -1,
    rangeComment: 'пятьмильный радиус',
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'горящее благовоние и кусочки земли и дерева, смешанные с водой',
    duration: 'вплоть до 8 часов',
    needConcentration: true,
    source: 'PHB:216',
    classList: [PC_CLASS_PRIEST, PC_CLASS_WIZARD, PC_CLASS_DRUID],
  },
  {
    id: SPELL_INSECT_PLAGUE,
    name: 'Нашествие насекомых',
    nameEn: 'Insect plague',
    description: `Рой кусачей саранчи заполняет сферу с радиусом 20 фт. с центром на точке, выбранной вами в пределах дистанции. Сфера огибает углы. Сфера существует, пока активно заклинание, и её местность слабо заслонена. Пространство сферы является труднопроходимой местностью. Когда сфера появляется, все находящиеся в ней существа должны совершить спасбросок Телосложения. Существо получает колющий урон 4к10 при провале, или половину урона при успехе. Существа должны также совершать этот спасбросок когда впервые за ход входят в область заклинания или оканчивают там ход.\n
**На больших уровнях:** Если вы накладываете это заклинание, используя ячейку 6 уровня или выше, урон увеличивается на 1к10 за каждый уровень ячейки выше пятого.`,
    lvl: 5,
    magicSchool: MAGIC_CONJURATION,
    range: 300,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'несколько крупинок сахара, немного зёрнышек и капля жира',
    duration: 'вплоть до 10 минут',
    needConcentration: true,
    source: 'PHB:243',
    classList: [PC_CLASS_PRIEST, PC_CLASS_SORCERER, PC_CLASS_DRUID],
  },
  {
    id: SPELL_RESSURECTION,
    name: 'Воскрешение',
    nameEn: 'Ressurection',
    description: `Вы касаетесь существа, мёртвого не больше ста лет, умершего не от старости, и не являющегося нежитью. Если его душа свободна и согласна, цель возвращается к жизни с полными хитами.\n
Это заклинание нейтрализует все яды и исцеляет немагические болезни, бывшие у существа в момент смерти. Однако это заклинание не снимает магические болезни, проклятья и подобные эффекты; если их не снять до накладывания этого заклинания, они снова начнут действовать, когда существо оживёт.\n
Это заклинание исцеляет все раны и восстанавливает отсутствующие части тела.\n
Возвращение к жизни — тяжёлое испытание. Цель получает штраф −4 ко всем броскам атаки, спасброскам и проверкам характеристик. Каждый раз, когда цель заканчивает длительный отдых, штраф уменьшается на 1, пока не исчезнет полностью.\n
Накладывание этого заклинания для оживления существа, мёртвого больше года, сильно выматывает вас. Пока вы не окончите продолжительный отдых, вы не можете накладывать заклинания, и совершаете с помехой все броски атаки, проверки характеристик и спасброски.`,
    lvl: 7,
    magicSchool: MAGIC_NECROMANCY,
    castTime: '1 час',
    range: 0,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'бриллиант, стоящий как минимум 1 000 зм, расходуемый заклинанием',
    source: 'PHB:218',
    classList: [PC_CLASS_PRIEST, PC_CLASS_BARD],
  },
  {
    id: SPELL_MAGE_HAND,
    name: 'Волшебная рука',
    nameEn: 'Mage hand',
    description: `В точке, выбранной вами в пределах дистанции, появляется призрачная парящая рука. Рука существует, пока заклинание активно, или пока вы не отпустите ее действием. Рука исчезает, если окажется более чем в 30 футах от вас, или если вы повторно используете это заклинание.\n
Вы можете действием контролировать руку. Вы можете с ее помощью манипулировать предметами, открывать незапертые двери и контейнеры, убирать предметы в открытые контейнеры и доставать их оттуда, или выливать содержимое флаконов. При каждом использовании руки вы можете переместить ее на 30 фт.\n
Рука не может совершать атаки, активировать магические предметы и переносить более 10 фунтов.`,
    lvl: 0,
    magicSchool: MAGIC_CONJURATION,
    range: 30,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    source: 'PHB:216',
    classList: [PC_CLASS_BARD, PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WARLOCK, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_RAY_OF_FROST,
    name: 'Луч холода',
    nameEn: 'Ray of frost',
    description: `Холодный сине-белый луч устремляется к существу, находящемуся в пределах дистанции. Совершите по цели дальнобойную атаку заклинанием. При попадании она получает урон холодом 1к8, а скорость до начала вашего следующего хода уменьшается на 10 фт.\n
На больших уровнях: Урон от заклинания увеличивается на 1к8, когда вы достигаете 5 уровня (2к8), 11 уровня (3к8) и 17 уровня (4к8).`,
    lvl: 0,
    magicSchool: MAGIC_EVOCATION,
    range: 60,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    source: 'PHB:236',
    classList: [PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_PRESTIDIGITATION,
    name: 'Фокусы',
    nameEn: 'Prestidigitation',
    description: `Это заклинание — небольшой магический трюк, на котором практикуются начинающие заклинатели.
* Вы создаёте один из следующих магических эффектов в пределах дистанции:
* Вы создаёте мгновенный безвредный сенсорный эффект, такой как сноп искр, порыв ветра, тихую мелодию, или необычный запах.
* Вы мгновенно зажигаете или тушите свечу, факел или небольшой костёр.
* Вы мгновенно чистите или мараете предмет, размерами не превышающий 1 кубического фута.
* Вы остужаете, нагреваете или придаёте запах 1 кубическому футу неживой материи на 1 час.
* Вы создаёте на поверхности или предмете маленькую цветную метку или символ, существующую 1 час.
* Вы создаёте немагическую безделушку или иллюзорный предмет, помещающийся в вашу ладонь, и существующий до конца вашего следующего хода.
Если вы накладываете это заклинание несколько раз, вы можете иметь не более трёх немгновенных эффектов одновременно, и можете действием окончить один любой из этих эффектов.`,
    lvl: 0,
    magicSchool: MAGIC_TRANSMUTATION,
    range: 10,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    duration: 'Вплоть до 1 часа',
    source: 'PHB:287',
    classList: [PC_CLASS_BARD, PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WARLOCK, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_COMPREHEND_LANGUAGES,
    name: 'Понимание языков',
    nameEn: 'Сomprehend languages',
    description: `Пока заклинание активно, вы понимаете буквальный смысл всех услышанных речей на любых языках. Вы также понимаете письмена на любых языках, но вы должны касаться поверхности, на которой записаны слова. Требуется примерно 1 минута для чтения одной страницы текста.\n
Это заклинание не расшифровывает тайные послания в текстах и символы, такие как магические знаки, не являющиеся частью текста.`,
    lvl: 1,
    magicSchool: MAGIC_DIVINATION,
    ritual: true,
    range: -1,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'щепотка сажи и соли',
    duration: '1 час',
    source: 'PHB:262',
    classList: [PC_CLASS_BARD, PC_CLASS_FIGHTER, PC_CLASS_SORCERER, PC_CLASS_WARLOCK, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_FOG_CLOUD,
    name: 'Туманное облако',
    nameEn: 'Fog cloud',
    description: `Вы создаете сферу с радиусом 20 фт. из тумана с центром на точке в пределах дистанции. Сфера обходит углы, и ее пространство — сильно заслоненная местность. Она существует до окончания действия заклинания, или пока ее не рассеет ветер (со скоростью как минимум 10 миль в час).\n
На больших уровнях: Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, радиус тумана увеличивается на 20 фт. за каждый уровень ячейки выше первого.`,
    lvl: 1,
    magicSchool: MAGIC_CONJURATION,
    needConcentration: true,
    range: 120,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    duration: 'вплоть до 1 часа',
    source: 'PHB:284',
    classList: [PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WIZARD, PC_CLASS_DRUID],
  },
  {
    id: SPELL_SLEEP,
    name: 'Усыпление',
    nameEn: 'Sleep',
    description: `Это заклинание посылает существ в магический сон. Бросьте 5к8; результат будет количеством хитов существ, на которых это заклинание может подействовать. Существа в пределах 20 фт. от точки, выбранной вами в пределах дистанции, попадают под действие в порядке увеличения их текущих хитов (игнорируя тех, что находятся без сознания).\n
Начиная с существа с наименьшим количеством текущих хитов все существа, попадающие под действие этого заклинания, теряют сознание до окончания действия заклинания, пока не получат урон, или пока кто-нибудь другой не разбудит их, потратив действие на тряску или пощечину. Вычитайте хиты каждого существа из общей суммы, после чего переходите к следующему существу с наименьшим числом хитов. Для того чтобы существо попало под действие заклинания, нужно чтобы количество ее текущих хитов не превышало оставшуюся сумму.\n
Нежить и существа, обладающие иммунитетом к очарованию, не попадают под действие этого заклинания.\n
На больших уровнях: Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, бросайте дополнительно 2к8 за каждый уровень ячейки выше первого.`,
    lvl: 1,
    magicSchool: MAGIC_ENCHANTMENT,
    range: 90,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'щепотка мелкого песка, лепестки розы или сверчок',
    duration: '1 минута',
    source: 'PHB:286',
    classList: [PC_CLASS_BARD, PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_DETECT_THOUGHTS,
    name: 'Обнаружение мыслей',
    nameEn: 'Detect thoughts',
    description: `Пока заклинание активно, вы можете читать мысли некоторых существ. Если вы сотворили это заклинание, и в свой ход совершаете действие, вы можете сосредоточиться на одном существе, которое видите в пределах 30 фт. Если у выбранного существа Интеллект равен 3 или ниже, или если оно не может говорить ни на одном языке, оно не попадает под действие заклинания.\n
Вначале вы знаете поверхностные мысли существа — то, что находится в его сознании на текущий момент. Вы можете действием либо перенести внимание на мысли другого существа, либо попытаться углубиться в мысли текущего существа. Если вы погружаетесь глубже, цель должна совершить спасбросок Мудрости. В случае провала вы получаете понимание ее мыслей (если есть), ее эмоционального состояния, и того, что ее больше всего заботит (а также то, что она любит и ненавидит). Если существо преуспеет, заклинание оканчивается. В любом случае, цель знает, что вы прощупывали ее сознание, и если вы не перевели внимание на мысли другого существа, предыдущее существо может в свой ход действием совершить проверку Интеллекта, противопоставленную вашей проверке Интеллекта; в случае успеха заклинание оканчивается.\n
Вопросы, задаваемые устно цели, влияют на ход ее мыслей, поэтому это заклинание чрезвычайно эффективно во время допросов.\n
Вы можете также использовать это заклинание для обнаружения присутствия мыслящих существ, которых вы не видите. Когда вы накладываете это заклинание, или позже, пока оно активно, потратив действие, вы можете поискать мысли существ в пределах 30 фт. Заклинание проницает большую часть барьеров, но блокируется 2 футами камня, 2 дюймами обычного металла или тонким листом свинца. Вы не можете обнаружить существ с Интеллектом 3 и ниже, а также тех, кто не говорят ни на одном языке.\n
Обнаружив таким методом присутствие существа, вы можете до окончания действия заклинания читать его мысли, как описано выше, даже если вы его не видите, но оно должно находиться в пределах дистанции.`,
    lvl: 2,
    magicSchool: MAGIC_DIVINATION,
    needConcentration: true,
    range: -1,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'медная монетка',
    duration: 'вплоть до 1 минуты',
    source: 'PHB:246',
    classList: [PC_CLASS_BARD, PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_MIRROR_IMAGE,
    name: 'Отражения',
    nameEn: 'Mirror image',
    description: `В вашем пространстве появляются три ваших иллюзорных копии. Пока заклинание активно, копии перемещаются вместе с вами и подражают вашим действиям, двигаясь так, что невозможно понять, кто из вас настоящий. Вы можете действием распустить свои копии.\n
Каждый раз, когда существо нацеливается на вас атакой, пока заклинание активно, бросайте к20, чтобы определить, не попала ли атака вместо вас по одной из ваших копий.\n
Если у вас три копии, вы должны выбросить «6» или больше, чтобы сделать целью копию. Если копий две, выбросить нужно «8» или больше. Если копия одна, вы должны выбросить «11» или больше.\n
КД копии равен 10 + ваш модификатор Ловкости. Если атака попала по копии, она уничтожается. Копию может уничтожить только атака, попавшая по ней. Она игнорирует остальной урон и эффекты. Заклинание оканчивается, если все три копии будут уничтожены.\n
Существо не попадает под действие этого заклинания, если не может видеть, если полагается на другие чувства кроме зрения, например, на слепое зрение, или если может видеть сквозь иллюзию, например, при помощи истинного зрения.`,
    lvl: 2,
    magicSchool: MAGIC_ILLUSION,
    range: -1,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    duration: '1 минута',
    source: 'PHB:252',
    classList: [PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WARLOCK, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_GUST_OF_WIND,
    name: 'Порыв ветра',
    nameEn: 'Gust of wind',
    description: `Порыв сильного ветра длиной 60 фт. и шириной 10 фт. исходит от вас в выбранном направлении, пока заклинание активно. Все существа, начинающие ход в этой линии, должны преуспеть в спасброске Силы, иначе их оттолкнет на 15 фт. от вас в направлении движения ветра.\n
Все существа в линии должны тратить 2 фута перемещения за каждый 1 фут, на который они перемещаются в вашу сторону.\n
Ветер рассеивает газы и испарения, а также тушит свечи, факелы и другие незащищенные источники огня. Защищенный огонь, например, в фонарях, он заставляет трепетать, и существует 50% шанс, что потухнут и они.\n
Пока заклинание активно, вы можете в каждом своем ходу бонусным действием менять направление, в котором дует ветер.`,
    lvl: 2,
    magicSchool: MAGIC_EVOCATION,
    needConcentration: true,
    range: 'На себя (60-футовая линия)',
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'семя гороха',
    duration: 'вплоть до 1 минуты',
    source: 'PHB:263',
    classList: [],
  },
  {
    id: SPELL_ANIMATE_DEAD,
    name: 'Восставший труп',
    nameEn: 'Animate dead',
    description: `Это заклинание создает прислуживающую нежить. Выберите груду костей или труп гуманоида Среднего или Маленького размера в пределах дистанции. Ваше заклинание наделяет цель мерзким подобием жизни, делая из него существо-нежить. Цель становится скелетом, если вы выбирали кости или зомби, если вы выбрали труп (параметры есть у Мастера).\n
В каждый свой ход вы можете бонусным действием мысленно приказать существу, созданному этим заклинанием, если оно находится в пределах 60 фт. от вас (если вы контролируете несколько существ, вы можете отдавать один и тот же приказ любому количеству из них одновременно). Вы решаете, какое действие совершит это существо, и куда оно переместится в следующем ходу, или вы можете отдать общий приказ, например, охранять комнату или коридор. Если вы не отдадите команду, существо будет всего лишь защищаться от врагов. Получив приказ, существо продолжает его выполнять, пока задача не будет выполнена.\n
Существо находится под вашим контролем 24 часа, после чего перестает слушаться команд. Для поддержания контроля еще на 24 часа вы должны наложить это заклинание на него еще раз до окончания 24-часового периода. Такое использование заклинания только поддерживает контроль над уже созданными существами, количество которых не может быть больше четырех, и не оживляет новых.\n
На больших уровнях: Если вы накладываете это заклинание, используя ячейку 4 уровня или выше, вы оживляете или продлеваете контроль над двумя дополнительными существами за каждый уровень ячейки выше третьего. Для каждого создаваемого существа требуется отдельная куча костей или труп.`,
    lvl: 3,
    magicSchool: MAGIC_NECROMANCY,
    castTime: '1 минута',
    range: 10,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'капля крови, кусочек плоти и щепотка костной пыли',
    source: 'PHB:218',
    classList: [PC_CLASS_PRIEST, PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_NONDETECTION,
    name: 'Необнаружимость',
    nameEn: 'Nondetection',
    description: `Пока заклинание активно, цель, которой вы коснулись, сокрыта от заклинаний школой Прорицания. Целью может быть согласное существо, место или предмет, не превышающий 10 фт. ни по одному из линейных размеров. Цель не может стать целью магии школы Прорицания, и ее не воспринимают магические наблюдательные сенсоры.`,
    lvl: 3,
    magicSchool: MAGIC_ABJURATION,
    range: 0,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'щепотка алмазной пыли, стоящая 25 зм, которой посыпается цель, расходуемая заклинанием',
    duration: '8 часов',
    source: 'PHB:244',
    classList: [PC_CLASS_BARD, PC_CLASS_FIGHTER, PC_CLASS_RANGER, PC_CLASS_ROGUE, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_BESTOW_CURSE,
    name: 'Проклятие',
    nameEn: 'Bestow curse',
    description: `Вы касаетесь существа, и оно должно преуспеть в спасброске Мудрости, иначе станет проклятым на период действия заклинания. Накладывая это заклинание, выберите характер проклятья из следующего списка:\n
* Выберите одну характеристику. Будучи проклятой, цель совершает проверки и спасброски этой характеристики с помехой.
* Будучи проклятой, цель совершает с помехой броски атаки по вам.
* Будучи проклятой, цель должна в начале каждого своего хода совершать спасбросок Мудрости. В случае провала она впустую тратит свое действие.
* Пока цель проклята, ваши атаки и заклинания причиняют ей дополнительный урон некротической энергией 1к8.\n
Заклинание снятие проклятья оканчивает этот эффект. С разрешения Мастера, вы можете создать альтернативный эффект проклятья, но он не должен быть сильнее тех, что представлены выше. Финальное решение об эффекте проклятья остается за Мастером.\n
На больших уровнях: Если вы накладываете это заклинание, используя ячейку 4 уровня или выше, длительность будет «Концентрация, вплоть до 10 минут». Если вы использовали ячейку 5 уровня или выше, длительность будет «8 часов». Если вы использовали ячейку 7 уровня или выше, длительность будет «24 часа». Если вы использовали ячейку 9 уровня, заклинание действует, пока не рассеется. При использовании ячейки как минимум 5 уровня концентрация не требуется.`,
    lvl: 3,
    magicSchool: MAGIC_NECROMANCY,
    castTime: '1 час',
    needConcentration: true,
    range: 0,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    duration: 'вплоть до 1 минуты',
    source: 'PHB:269',
    classList: [PC_CLASS_BARD, PC_CLASS_PRIEST, PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_GREATER_INVISIBILITY,
    name: 'Высшая невидимость',
    nameEn: 'Greater invisibility',
    description: `Вы или существо, которого вы касаетесь, становитесь невидимым, пока активно заклинание. Всё, что цель носит и несёт, становится невидимым, пока находится у этой личности.`,
    lvl: 4,
    magicSchool: MAGIC_ILLUSION,
    needConcentration: true,
    range: 0,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    duration: 'вплоть до 1 минуты',
    source: 'PHB:219',
    classList: [PC_CLASS_BARD, PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_BLIGHT,
    name: 'Усыхание',
    nameEn: 'Blight',
    description: `Некротическая энергия омывает выбранное вами существо, которое вы видите в пределах дистанции, забирая из него жидкость и жизненные силы. Цель должна совершить спасбросок Телосложения. Цель получает урон некротической энергией 8к8 в случае провала или половину этого урона в случае успеха. Это заклинание не оказывает никакого эффекта на нежить и конструктов. Если цель — растительное существо или магическое растение, оно совершает спасбросок с помехой, и заклинание причиняет ему максимальный урон. Если цель — немагическое растение, не являющееся существом, например, дерево или куст, оно не совершает спасбросок; а просто засыхает и умирает.\n
На больших уровнях: Если вы накладываете это заклинание, используя ячейку 5 уровня или выше, урон увеличивается на 1к8 за каждый уровень ячейки выше четвертого.`,
    lvl: 4,
    magicSchool: MAGIC_NECROMANCY,
    range: 30,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    source: 'PHB:287',
    classList: [PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WARLOCK, PC_CLASS_WIZARD, PC_CLASS_DRUID],
  },
  {
    id: SPELL_DOMINATE_PERSON,
    name: 'Подчинение личности',
    nameEn: 'Dominate person',
    description: `Вы пытаетесь взять под контроль гуманоида, которого видите в пределах дистанции. Он должен преуспеть в спасброске Мудрости, иначе станет очарованным вами на время действия заклинания. Если вы или дружественные вам существа сражаются с ним, он совершает спасбросок с преимуществом.\n
Пока существо очаровано, вы обладаете телепатической связью с ним, пока вы оба находитесь на одном плане существования. При помощи этой связи вы можете отдавать ему команды, пока находитесь в сознании (действие не требуется), и оно должно будет их выполнять. Вы можете указать общее действие, такое как «атакуй вон то существо», «беги отсюда» или «принеси вот это». Если существо выполняет приказ и не получает дальнейших указаний от вас, оно в меру своих сил обороняется и защищает себя.\n
Вы можете действием захватить полный контроль над целью. До конца вашего следующего хода существо совершает только выбранные вами действия, и не делает ничего, что вы ему не позволяете. В это время вы можете заставлять существо совершать реакции, но при этом вы тратите и свою реакцию тоже.\n
Каждый раз, когда цель получает урон, она совершает новый спасбросок Мудрости от этого заклинания. В случае успеха заклинание оканчивается.\n
На больших уровнях: Если вы накладываете это заклинание с уровнем ячейки 6, концентрацию можно поддерживать до 10 минут. Если вы накладываете это заклинание с уровнем ячейки 7, концентрацию можно поддерживать до 1 часа. Если вы накладываете это заклинание с уровнем ячейки 8 или выше, концентрацию можно поддерживать до 8 часов.`,
    lvl: 5,
    magicSchool: MAGIC_ENCHANTMENT,
    needConcentration: true,
    range: 60,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    duration: 'вплоть до 1 минуты',
    source: 'PHB:260',
    classList: [PC_CLASS_BARD, PC_CLASS_SORCERER, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_DETECT_MAGIC,
    name: 'Обнаружение магии',
    nameEn: 'Detect magic',
    description: `Пока заклинание активно, вы чувствуете присутствие магии в пределах 30 фт. Если вы почувствовали за счет этого заклинания присутствие магии, вы можете действием увидеть слабую ауру вокруг видимого существа или предмета, несущего на себе магию, а также узнать школу этой магии, если она есть.\n
Заклинание проницает большую часть барьеров, но блокируется 1 футом камня, 1 дюймом обычного металла, тонким листом свинца или 3 футами дерева или земли.`,
    lvl: 1,
    magicSchool: MAGIC_DIVINATION,
    ritual: true,
    needConcentration: true,
    range: -1,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    duration: 'вплоть до 10 минут',
    source: 'PHB:245',
    classList: [PC_CLASS_BARD, PC_CLASS_PRIEST, PC_CLASS_FIGHTER, PC_CLASS_PALADIN, PC_CLASS_RANGER, PC_CLASS_SORCERER, PC_CLASS_WIZARD, PC_CLASS_DRUID],
  },
  {
    id: SPELL_FEATHER_FALL,
    name: 'Падение пёрышком',
    nameEn: 'Feather fall',
    description: `Выберите до пяти падающих существ в пределах дистанции. До окончания действия заклинания их скорость падения уменьшается на 60 фт. в раунд. Если такое существо приземлится до окончания заклинания, оно не получает урон от падения и может приземлиться на ноги, и тогда заклинание оканчивает действие на него.`,
    castTime: `1 реакция, совершаемая вами, когда вы или существо в пределах 60 фт. от вас начинаете падать`,
    lvl: 1,
    magicSchool: MAGIC_TRANSMUTATION,
    range: 60,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'небольшое перо или кусочек пуха',
    duration: '1 минута',
    source: 'PHB:254',
    classList: [PC_CLASS_BARD, PC_CLASS_FIGHTER, PC_CLASS_SORCERER, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_FLY,
    name: 'Полёт',
    nameEn: 'Fly',
    description: `Вы касаетесь согласного существа. Цель получает на время длительности заклинания скорость полета 60 фт. Когда заклинание оканчивается, цель падает, если все еще находится в полете и ничем не может остановить падение.\n
На больших уровнях: Если вы накладываете это заклинание, используя ячейку 4 уровня или выше, вы можете сделать целью одно дополнительное существо за каждый уровень ячейки выше 3.`,
    lvl: 3,
    magicSchool: MAGIC_TRANSMUTATION,
    needConcentration: true,
    range: 0,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'перо из крыла любой птицы',
    duration: 'вплоть до 10 минут',
    source: 'PHB:262',
    classList: [PC_CLASS_FIGHTER, PC_CLASS_MONK, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WARLOCK, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_TELEKINESIS,
    name: 'Телекинез',
    nameEn: 'Telekinesis',
    description: `Вы получаете способность перемещать силой мысли существ и предметы, а также манипулировать ими. Когда вы накладываете это заклинание, а также в каждом последующем раунде, новым действием, вы можете воздействовать на одно существо или предмет, видимый в пределах дистанции, вызывая один из описанных ниже эффектов. Вы можете действовать на одну и ту же цель, а можете каждый раз выбирать новую. Если вы меняете цель, предыдущая перестаёт быть под действием этого заклинания.\n
**Предмет.** Вы можете попытаться переместить предмет, весящий до 1 000 фунтов. Если предмет не несут и не носят, вы автоматически перемещаете его на 30 фт. в любом направлении, но не за пределы дистанции заклинания.\n
Если предмет несёт или носит существо, вы должны совершить проверку базовой характеристики, противопоставив её проверке Силы существа. Если вы выиграете проверку, вы вырываете предмет у этого существа, и можете переместить его на 30 фт. в любом направлении, но не за пределы дистанции заклинания.\n
Вы очень хорошо контролируете предмет телекинетической хваткой, так что можете манипулировать простыми инструментами, открывать двери и контейнеры, доставать и убирать предметы из открытых контейнеров, а также выливать содержимое сосудов.\n
**Существо.** Вы можете попытаться переместить существо с размером не больше Огромного. Совершите проверку своей базовой характеристики, противопоставив её проверке Силы существа. Если вы выиграете проверку, вы перемещаете существо на 30 фт. в любом направлении, включая вверх, но не за пределы дистанции заклинания. До конца вашего следующего хода существо становится опутанным телекинетической хваткой. Существо, поднятое вверх, висит в воздухе.\n
В последующих раундах вы можете действием пытаться поддерживать телекинетический захват существа, повторяя встречную проверку.`,
    lvl: 5,
    magicSchool: MAGIC_TRANSMUTATION,
    needConcentration: true,
    range: 60,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    duration: 'вплоть до 10 минут',
    source: 'PHB:282',
    classList: [PC_CLASS_SORCERER, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_MISTY_STEP,
    name: 'Туманный шаг',
    nameEn: 'Misty step',
    description: `Окутавшись серебристым туманом, вы телепортируетесь на 30 футов в свободное пространство, видимое вами.`,
    lvl: 2,
    magicSchool: MAGIC_CONJURATION,
    castTime: '1 бонусное действие',
    range: -1,
    componentList: [CAST_VERBAL],
    source: 'PHB:285',
    classList: [PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WARLOCK, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_GASEOUS_FORM,
    name: 'Газообразная форма',
    nameEn: 'Gaseous form',
    description: `Вы превращаете на время действия заклинания согласное существо, которого касаетесь, а также все, что оно носит и несет, в туманное облако. Заклинание оканчивается, если хиты существа опускаются до 0. Бестелесные существа не попадают под действие этого заклинания.\n
Пока цель находится в этой форме, единственной ее скоростью перемещения становится скорость полета 10 фт. Цель может входить в пространство других существ и оставаться там. Существо получает сопротивление к немагическому урону, и совершает с преимуществом спасброски Силы, Ловкости и Телосложения. Цель может проходить через небольшие отверстия, узкие щели, но жидкости для нее считаются твердыми поверхностями. Цель не может упасть и остается парить, даже если становится ошеломленной или недееспособной.\n
Находясь в форме туманного облака, цель не может говорить и манипулировать предметами, и все предметы, которые она несет или носит, нельзя ронять, использовать и вообще как-либо с ними взаимодействовать. Цель не может атаковать и накладывать заклинания.`,
    lvl: 3,
    magicSchool: MAGIC_TRANSMUTATION,
    needConcentration: true,
    range: 0,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'кусок марли и клуб дыма',
    duration: 'вплоть до 1 часа',
    source: 'PHB:220',
    classList: [PC_CLASS_FIGHTER, PC_CLASS_MONK, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WARLOCK, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_LEVITATE,
    name: 'Левитация',
    nameEn: 'Levitate',
    description: `Одно выбранное вами существо или предмет, видимые в пределах дистанции, поднимается вертикально на расстояние до 20 фт., и остается висеть там на время действия заклинания. Заклинание может заставить левитировать цель, весящую до 500 фунтов. Несогласное существо, преуспевшее в спасброске Телосложения, не попадает под действие этого заклинания.\n
Цель может перемещаться только отталкиваясь от твердых предметов и поверхностей (таких как стены и потолок), а также подтягиваясь за них, что позволяет перемещаться так, как если бы они лазали. В свой ход вы можете изменить высоту цели на 20 фт. в любом направлении. Если целью являетесь вы сами, вы можете частью перемещения двигаться вверх или вниз. В противном случае, вы можете действием переместить цель, которая должна оставаться при этом в пределах досягаемости заклинания.\n
Когда заклинание оканчивается, если цель все еще находится в воздухе, она плавно опускается на землю.`,
    lvl: 2,
    magicSchool: MAGIC_TRANSMUTATION,
    needConcentration: true,
    range: 60,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'либо маленькая кожаная петля, либо кусочек золотой проволоки, согнутый в форме кубка с длинной ножкой',
    duration: 'вплоть до 10 минут',
    source: 'PHB:235',
    classList: [PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_WATER_BREATHING,
    name: 'Подводное дыхание',
    nameEn: 'Water breathing',
    description: `Это заклинание дарует на время своего действия до десяти существам, видимым вами в пределах дистанции, способность дышать под водой. Эти существа сохраняют и обычное дыхание.`,
    lvl: 3,
    magicSchool: MAGIC_TRANSMUTATION,
    ritual: true,
    range: 30,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'камыш или соломинка',
    duration: '24 часа',
    source: 'PHB:258',
    classList: [PC_CLASS_FIGHTER, PC_CLASS_RANGER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WIZARD, PC_CLASS_DRUID],
  },
  {
    id: SPELL_MINOR_ILLUSION,
    name: 'Малая иллюзия',
    nameEn: 'Minor illusion',
    description: `Вы создаете звук или образ предмета в пределах дистанции, существующий, пока активно заклинание. Иллюзия также оканчивается, если вы отпустите ее действием или используете это заклинание еще раз.\n
Если вы создаете звук, его громкость может быть как шепотом, так и криком. Это может быть ваш голос, чей-то другой голос, львиный рык, бой барабанов или любой другой звук. Звук звучит всю длительность заклинания, или вы можете создавать отдельные звуки в разное время, пока заклинание активно.\n
Если вы создаете образ предмета — например, стул, отпечаток в грязи, или небольшой сундук — он должен помещаться в куб с длиной ребра 5 фт. Образ не может издавать звуки, свет, запах или прочие сенсорные эффекты. Физическое взаимодействие с образом дает понять, что это иллюзия, потому что сквозь него все проходит.\n
Если существо действием исследует звук или образ, оно может понять, что это иллюзия, совершив успешную проверку Интеллекта (Анализ) против Сл ваших заклинаний. Если существо распознает иллюзию, она для него становится нечеткой.`,
    lvl: 0,
    magicSchool: MAGIC_ILLUSION,
    range: 30,
    componentList: [CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'кусок овечьей шерсти',
    duration: '1 минута',
    source: 'PHB:238',
    classList: [PC_CLASS_BARD, PC_CLASS_FIGHTER, PC_CLASS_MONK, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WARLOCK, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_DANCING_LIGHTS,
    name: 'Пляшущие огоньки',
    nameEn: 'Dancing lights',
    description: `Вы создаете до четырех огоньков размером с факел в пределах дистанции, делая их похожими на факелы, фонари или светящиеся сферы, парящие в воздухе. Вы можете также объединить четыре огонька в одну светящуюся человекоподобную фигуру Среднего размера. Какую бы форму вы не выбрали, каждый огонек излучает тусклый свет в радиусе 10 фт.\n
Вы можете бонусным действием в свой ход переместить огоньки на 60 фт. в новое место в пределах дистанции. Каждый огонек должен находиться в пределах 20 фт. от другого огонька, созданного этим заклинанием, и огонек тухнет, если оказывается за пределами дистанции заклинания.`,
    lvl: 0,
    magicSchool: MAGIC_EVOCATION,
    needConcentration: true,
    range: 120,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'кусочек фосфора, гнилушка или светлячок',
    duration: 'вплоть до 1 минуты',
    source: 'PHB:258',
    classList: [PC_CLASS_BARD, PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_COLOR_SPRAY,
    name: 'Сверкающие брызги',
    nameEn: 'Color spray',
    description: `Из вашей руки вылетают яркие разноцветные лучи. Бросьте 6к10; результат покажет, сколько хитов существ попадает под эффект. Существа в 15-футовом конусе, исходящем от вас, попадают под эффект в порядке увеличения текущих хитов (игнорируя тех, кто без сознания и не может видеть). Начиная с существа с наименьшим числом текущих хитов, все существа, попавшие под действие заклинания, становятся ослепленными до конца действия заклинания. Вычитайте из остатка хиты уже ослепленных существ и переходите к следующим. Хиты существа не должны превышать остаток, чтобы это существо попало под действие заклинания.\n
На больших уровнях: Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, бросайте дополнительно 2к10 за каждый уровень ячейки выше первого.`,
    lvl: 1,
    magicSchool: MAGIC_ILLUSION,
    range: 'На себя (15-футовый конус)',
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'щепотка порошка или песка, окрашенного в красный, желтый и синий цвет',
    duration: '1 раунд',
    source: 'PHB:275',
    classList: [PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_SUGGESTION,
    name: 'Внушение',
    nameEn: 'Suggestion',
    description: `Вы внушаете определенный курс действий (ограниченный одной-двумя фразами) существу, видимому в пределах дистанции, способному слышать и понимать вас. Существа, которые не могут быть очарованы, обладают иммунитетом к этому эффекту. Внушение должно быть сформировано так, чтобы действие звучало разумным. Просьбы ударить себя мечом, броситься на копье, сжечь себя, или как-то иначе причинить себе вред оканчивают заклинание. Цель должна совершить спасбросок Мудрости. При провале она следует заданному курсу действий. Внушенные действия могут продолжаться всю длительность заклинания. Если внушенную деятельность можно выполнить за меньший срок, заклинание оканчивается, когда субъект оканчивает порученную задачу. Вы можете также указать условие, которое запустит особое действие во время действия заклинания. Например, вы можете внушить рыцарю, чтобы он отдал своего боевого коня первому встреченному нищему. Если до окончания действия условие не будет выполнено, деятельность не совершается. Если вы или кто-то из ваших спутников причиняете урон цели, заклинание оканчивается.`,
    lvl: 2,
    magicSchool: MAGIC_ENCHANTMENT,
    needConcentration: true,
    range: 30,
    componentList: [CAST_VERBAL, CAST_MATERIAL],
    materialText: 'язык змеи и либо кусочек медовых сот, либо капля сладкого масла',
    duration: 'вплоть до 8 часов',
    source: 'PHB:216',
    classList: [PC_CLASS_BARD, PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WARLOCK, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_MAJOR_IMAGE,
    name: 'Образ',
    nameEn: 'Major image',
    description: `Вы создаете образ предмета, существа или другого видимого явления, помещающийся в объеме в куб с длиной ребра 20 фт. Образ появляется в точке, которую вы видите в пределах дистанции, и существует, пока активно заклинание. Он выглядит абсолютно реальным, включая звук, запах и температуру, соответствующую этому предмету. Вы не можете создать жар или холод, достаточный для получения урона, звук, громкость которого может причинить урон звуком или оглушить существо, или запах, способный вызвать тошноту (такую как вонь троглодита).\n
Пока вы находитесь в пределах дистанции от иллюзии, вы можете действием заставить образ переместиться в любое место в пределах дистанции. Пока образ меняет местоположение, вы можете изменять его внешность, чтобы перемещение выглядело естественным. Например, если вы создаете образ существа и перемещаете его, вы можете изменить образ, чтобы казалось, что оно идет. Точно так же, вы можете заставить иллюзию издавать в разное время разные звуки, и даже заставлять ее принимать участие в беседе, например.\n
Физическое взаимодействие с образом дает понять, что это иллюзия, потому что сквозь него все проходит. Существа, исследующие образ действием, могут определить, что это иллюзия, совершив успешную проверку Интеллекта (Анализ) против Сл ваших заклинаний. Если существо распознает иллюзию, оно может видеть сквозь нее, и все прочие сенсорные эффекты иллюзии тоже притупляются.\n
На больших уровнях: Если вы накладываете это заклинание, используя ячейку 6 уровня или выше, оно длится, пока не рассеется, не требуя от вас концентрацию`,
    lvl: 3,
    magicSchool: MAGIC_ILLUSION,
    needConcentration: true,
    range: 120,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'кусок овечьей шерсти',
    duration: 'вплоть до 10 минут',
    source: 'PHB:246',
    classList: [PC_CLASS_BARD, PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WARLOCK, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_HALLUCINATORY_TERRAIN,
    name: 'Мираж',
    nameEn: 'Hallucinatory terrain',
    description: `Вы заставляете природную местность в пределах куба с длиной ребра 150 фт., находящегося в пределах дистанции, выглядеть, звучать и пахнуть как другая природная местность. Таким образом, поле или дорогу можно сделать похожей на болото, холм, расселину или другую труднопроходимую или непроходимую местность. Пруд можно сделать похожим на травяную лужайку, пропасть сделать пологим спуском, а каменистый овраг — широкой и ровной дорогой. Рукотворные строения, снаряжение и существа в области не меняют облик.\n
Тактильные ощущения местности не меняются, поэтому существа, входящие в нее, скорее всего, поймут обман. Если на прикосновение разница не очевидна, существо, тщательно исследующее иллюзию, может предпринять проверку Интеллекта (Анализ) против Сл ваших заклинаний, чтобы не поверить. Существо, способное распознавать иллюзии, видит полупрозрачный образ, наложенный на местность.`,
    lvl: 4,
    magicSchool: MAGIC_ILLUSION,
    range: 300,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'камень, ветка, и кусочек зеленого растения',
    duration: '24 часа',
    source: 'PHB:240',
    classList: [PC_CLASS_BARD, PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_WARLOCK, PC_CLASS_WIZARD, PC_CLASS_DRUID],
  },
  {
    id: SPELL_POLYMORPH,
    name: 'Превращение',
    nameEn: 'Polymorph',
    description: `Это заклинание придает новый облик существу, которое вы видите в пределах дистанции. Несогласное существо должно совершить спасбросок Мудрости, чтобы избежать эффекта. Перевертыши автоматически преуспевают в этом спасброске. Это заклинание не может подействовать на цель, у которой 0 хитов.\n
Превращение длится, пока активно заклинание, или пока хиты цели не опустятся до 0, или она не умрет. Новый облик может принадлежать зверю, чей ПО не превышает ПО цели (или уровень цели, если у нее нет показателя опасности). Игровые характеристики цели, включая значения ментальных характеристик, заменяются характеристиками выбранного зверя. У цели остается мировоззрение и характер.\n
Цель принимает хиты нового облика. При возвращении в естественный облик количество ее хитов будет как до превращения. Если она возвращается в свой облик от того, что хиты опустились до 0, весь излишний урон перенесется на естественный облик. Если излишний урон не опускает хиты естественного облика существа до 0, оно не теряет сознание. \n
Действия существа в новом облике ограничены теми, что доступны ей, и она не может говорить, накладывать заклинания и совершать другие действия, требующие рук или речи.\n
Снаряжение цели сливается с ее новым обликом. Существо не может активировать, использовать, надевать или получать какие-то иные преимущества от своего снаряжения.`,
    lvl: 4,
    magicSchool: MAGIC_TRANSMUTATION,
    needConcentration: true,
    range: 60,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'кокон гусеницы',
    duration: 'вплоть до 1 часа',
    source: 'PHB:264',
    classList: [PC_CLASS_BARD, PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WIZARD, PC_CLASS_DRUID],
  },
  {
    id: SPELL_STONE_SHAPE,
    name: 'Изменение формы камня',
    nameEn: 'Stone shape',
    description: `Вы касаетесь каменного предмета с размером не больше Среднего, или камня, не превышающего ни по одному из измерений более 5 фт., и придаете ему любую форму. Так, например, вы можете превратить большой камень в оружие, статую или гроб, или создать небольшой проход в стене, если эта стена толщиной меньше 5 фт. Вы можете также скорректировать каменную дверь или ее обрамление, чтобы запереть наглухо. У создаваемого вами предмета могут быть две дверные петли и щеколда, но более мелкие механические детали невозможны.`,
    lvl: 4,
    magicSchool: MAGIC_TRANSMUTATION,
    range: 0,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'мягкая глина, из которой делается грубая копия желаемого каменного предмета',
    source: 'PHB:231',
    classList: [PC_CLASS_PRIEST, PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_WIZARD, PC_CLASS_DRUID],
  },
  {
    id: SPELL_MOVE_EARTH,
    name: 'Движение почвы',
    nameEn: 'Move earth',
    description: `Выберите в пределах дистанции область с длиной стороны не больше 40 фт. Пока заклинание активно, вы можете менять поверхность земли, песка или глины. Вы можете увеличить или уменьшить высоту, создать или засыпать ров, поднять или сравнять стены, и даже формировать колонны. Высота таких изменений не может превышать половины самой большой стороны области. Таким образом, если вы воздействуете на квадрат с длиной стороны 40 фт., вы можете создать колонну высотой до 20 фт., поднять или опустить землю на расстояние до 20 фт., выкопать траншею глубиной до 20 фт., и так далее. Изменения вступают в силу в течение 10 минут.\n
В конце каждых 10 минут концентрации на этом заклинании вы можете выбрать новую область, чтобы подействовать на неё.\n
Из-за того, что трансформация местности происходит медленно, обычно, существа не могут попасть в плен или получить урон из-за движений почвы.\n
Это заклинание не может манипулировать естественным камнем и каменными строениями. Камни и строения сдвигаются, приспосабливаясь к новой местности. Если изменение местности сделает строение неустойчивым, оно может разрушиться.\n
Это заклинание также не действует на растения. Перемещаемая почва уносит с собой и растения.`,
    lvl: 6,
    magicSchool: MAGIC_TRANSMUTATION,
    needConcentration: true,
    range: 120,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'железный клинок и небольшая сумка со смесью из глины, перегноя и песка',
    duration: 'вплоть до 2 часов',
    source: 'PHB:222',
    classList: [PC_CLASS_SORCERER, PC_CLASS_WIZARD, PC_CLASS_DRUID],
  },
  {
    id: SPELL_PASSWALL,
    name: 'Создание прохода',
    nameEn: 'Passwall',
    description: `В точке, которую вы видите в пределах дистанции на деревянной, оштукатуренной или каменной поверхности (такой как стена, потолок или пол) появляется проход, существующий, пока активно заклинание. Вы сами определяете габариты прохода: до 5 фт. в ширину, до 8 фт. в высоту и до 20 фт. в глубину. Этот проход не дестабилизирует само строение.\n
Когда проход исчезает, все существа и предметы, всё ещё находящиеся в нём, безопасно выталкиваются в свободное пространство, ближайшее к поверхности, на которой вы активировали это заклинание.`,
    lvl: 5,
    magicSchool: MAGIC_TRANSMUTATION,
    range: 30,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'щепотка кунжутного семени',
    duration: '1 час',
    source: 'PHB:279',
    classList: [PC_CLASS_WIZARD],
  },
  {
    id: SPELL_TONGUES,
    name: 'Языки',
    nameEn: 'Tongues',
    description: `Это заклинание дарует существу, которого вы касаетесь, способность понимать все языки, которые оно слышит. Более того, когда цель говорит, все существа, знающие хотя бы один язык, и слышащие цель, понимают, что она сказала.`,
    lvl: 3,
    magicSchool: MAGIC_DIVINATION,
    range: 0,
    componentList: [CAST_VERBAL, CAST_MATERIAL],
    materialText: 'маленькая глиняная модель зиккурата',
    duration: '1 час',
    source: 'PHB:290',
    classList: [PC_CLASS_BARD, PC_CLASS_PRIEST, PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WARLOCK, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_PHANTASMAL_KILLER,
    name: 'Воображаемый убийца',
    nameEn: 'Phantasmal killer',
    description: `Вы заглядываете в кошмары существа, видимого в пределах дистанции, и создаете иллюзорное проявление его страхов, видимое только ему. Цель должна совершить спасбросок Мудрости. При провале цель становится испуганной до конца действия заклинания. В конце каждого своего хода, пока заклинание активно, цель должна преуспевать в спасброске Мудрости, иначе она получает урон психической энергией 4к10. При успехе заклинание заканчивается.\n
На больших уровнях: Если вы накладываете это заклинание, используя ячейку 5 уровня или выше, урон увеличивается на 1к10 за каждый уровень ячейки выше четвертого.`,
    lvl: 4,
    magicSchool: MAGIC_ILLUSION,
    needConcentration: true,
    range: 120,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    duration: 'вплоть до 1 минуты',
    source: 'PHB:218',
    classList: [PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_WALL_OF_STONE,
    name: 'Каменная стена',
    nameEn: 'Wall of stone',
    description: `В точке, выбранной вами в пределах дистанции, появляется немагическая стена из камня. Стена толщиной 6 дюймов (15 сантиметров) и составлена из десяти плит 10 × 10 фт. Каждая плита должна соседствовать как минимум с одной другой плитой. В качестве альтернативы, вы можете создать плиты 10 × 20 фт., но толщиной только 3 дюйма (7,5 сантиметров).\n
Если стена при появлении проходит по пространству существа, это существо выталкивается по одну из сторон стены (на ваш выбор). Если существо со всех сторон окружается стеной (или стеной и другой сплошной поверхностью), это существо может совершить спасбросок Ловкости. При успехе оно может реакцией переместиться на расстояние, равное своей скорости, чтобы не быть окружённым стеной.\n
Стена может иметь любую форму, хотя и не может занимать одно пространство с существами и предметами. Стена не обязана быть вертикальной, и не обязана целиком покоиться на твёрдом основании. Однако, она должна сливаться с существующим камнем, опираясь на него. Таким образом, вы можете создать этим заклинанием мост через пропасть или наклонный спуск.\n
Если вы создаёте пролёт длиной больше 20 фт., вы должны уменьшить вдвое размер каждой плиты, чтобы создать поддержку. Вы можете придавать стене грубую форму, создавая бойницы, зубцы, и так далее.\n
Стена является предметом, изготовленным из камня, которому можно причинить урон и, тем самым, пробить. У каждой плиты КД 15 и по 30 хитов за каждый 1 дюйм (2,5 сантиметра) толщины. Уменьшение хитов плиты до 0 уничтожает её, и по решению Мастера, может вызвать обвал смежных плит.\n
Если вы поддерживаете концентрацию на этом заклинании в течение всей длительности, стена становится постоянной, и с этого момента её уже нельзя будет рассеять. В противном случае стена исчезает, когда заклинание будет окончено.`,
    lvl: 5,
    magicSchool: MAGIC_EVOCATION,
    needConcentration: true,
    range: 120,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'небольшой кусочек гранита',
    duration: 'вплоть до 10 минут',
    source: 'PHB:233',
    classList: [PC_CLASS_MONK, PC_CLASS_SORCERER, PC_CLASS_WIZARD, PC_CLASS_DRUID],
  },
  {
    id: SPELL_CONJURE_ELEMENTAL,
    name: 'Призыв элементаля',
    nameEn: 'Conjure elemental',
    description: `Вы вызываете прислуживающего элементаля. Выберите область воды, воздуха, земли или огня, помещающуюся в куб с длиной ребра 10 фт. В свободном пространство в пределах 10 клеток от выбранной области появляется соответствующий местности элементаль с показателем опасности 5 или меньше. Например, из костра выходит огненный элементаль, а земляной элементаль выбирается из-под земли. Элементаль исчезает, когда его хиты опускаются до 0, или когда заклинание оканчивается.\n
Элементаль дружественен к вам и вашим спутникам, пока заклинание активно. Совершите проверку инициативы за элементаля, и он будет совершать свои собственные ходы. Он подчиняется отданным вами устно командам (действие не требуется). Если вы не отдаёте команду, он защищается от враждебных существ, но действий не совершает.\n
Если ваша концентрация нарушена, элементаль не исчезает. Вместо этого вы теряете над ним контроль, и он становится враждебным к вам и вашим спутникам, и может напасть. Неуправляемый элементаль не может быть отпущен вами, но он исчезает через 1 час после того, как был призван.\n
Параметры элементаля есть у Мастера.\n
На больших уровнях: Если вы накладываете это заклинание, используя ячейку 6 уровня или выше, показатель опасности увеличивается на 1 за каждый уровень ячейки выше пятого.`,
    lvl: 5,
    magicSchool: MAGIC_CONJURATION,
    castTime: '1 минута',
    needConcentration: true,
    range: 90,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'вода и песок для водяного, горящее благовоние для воздушного, мягкая глина для земляного или сера и фосфор для огненного',
    duration: 'вплоть до 1 часа',
    source: 'PHB:267',
    classList: [PC_CLASS_WIZARD, PC_CLASS_DRUID],
  },
  {
    id: SPELL_PLANE_SHIFT,
    name: 'Уход в иной мир',
    nameEn: 'Plane shift',
    description: `Вы и до восьми согласных существ, взявшиеся за руки кругом, перемещаетесь на другой план существования. Вы можете указать в общих чертах точку прибытия, например, Медный город на Стихийном Плане Огня или дворец Диспатера на втором уровне Девяти Преисподних, и вы появитесь возле этого места. Например, если вы хотели оказаться в Медном городе, вы можете прибыть на Стальную улицу, перед Вратами Пепла, или оказаться посреди Моря Огня, на выбор Мастера.\n
В качестве альтернативы, если вы знаете последовательность знаков телепортационного круга на другом плане существования, это заклинание может перенести вас в этот круг. Если круг телепортации слишком мал для переносимого количества существ, они появляются в ближайшем свободном пространстве рядом с кругом.\n
Вы можете использовать это заклинание, чтобы изгонять несогласных существ на другой план. Выберите существо в пределах досягаемости и совершите по нему рукопашную атаку заклинанием. При попадании существо должно совершить спасбросок Харизмы. Если существо его проваливает, оно переносится в случайным образом выбранное место на выбранном вами плане существования. Перенесённое таким образом существо должно будет самостоятельно найти дорогу на ваш текущий план существования.`,
    lvl: 7,
    magicSchool: MAGIC_CONJURATION,
    range: 0,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'раздвоенный металлический прут, стоящий как минимум 250 зм, настроенный на конкретный план существования',
    source: 'PHB:287',
    classList: [PC_CLASS_SORCERER, PC_CLASS_PRIEST, PC_CLASS_WARLOCK, PC_CLASS_WIZARD, PC_CLASS_DRUID],
  },
  {
    id: SPELL_THUNDERWAVE,
    name: 'Волна грома',
    nameEn: 'Thunderwave',
    description: `От вас исходит волна громовой силы. Все существа в кубе с длиной ребра 15 фт., исходящего от вас, должны совершить спасбросок Телосложения. При провале существо получает урон звуком 2к8 и толкается на 10 фт. от вас. При успехе существо получает половину урона и не толкается.\n
Кроме того, незакрепленные предметы, оказавшиеся полностью в области эффекта, автоматически толкаются на 10 фт. от вас эффектом заклинания, и заклинание издает громовой рокот, слышимый на расстоянии 300 фт.\n
На больших уровнях: Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, урон увеличивается на 1к8 за каждый уровень ячейки выше первого.`,
    lvl: 1,
    magicSchool: MAGIC_EVOCATION,
    range: 'На себя (15-фт. куб)',
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    source: 'PHB:216',
    classList: [PC_CLASS_BARD, PC_CLASS_FIGHTER, PC_CLASS_MONK, PC_CLASS_SORCERER, PC_CLASS_WIZARD, PC_CLASS_DRUID],
  },
  {
    id: SPELL_CREATE_FOOD_AND_WATER,
    name: 'Сотворение пищи и воды',
    nameEn: 'Create food and water',
    description: `Вы создаёте 45 фунтов еды и 30 галлонов (100 литров) воды на земле или в контейнере в пределах дистанции, которых достаточно для питания пятнадцати гуманоидов или пятерых скакунов на 24 часа. Еда безвкусная, но сытная, и портится, если её не съесть за 24 часа. Вода чистая, и она не портится.`,
    lvl: 3,
    magicSchool: MAGIC_CONJURATION,
    range: 30,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    source: 'PHB:280',
    classList: [PC_CLASS_PRIEST, PC_CLASS_PALADIN],
  },
  {
    id: SPELL_WIND_WALK,
    name: 'Хождение по ветру',
    nameEn: 'Wind walk',
    description: `Вы и до десяти согласных существ, видимых вами в пределах дистанции, на время длительности заклинания принимаете газообразную форму, становясь лёгкими облачками. Находясь в форме облака, существо получает скорость полёта 300 фт. и сопротивление к урону от немагического оружия. Единственное действие, которое существо может совершать в этой форме, это Рывок или возвращение в естественную форму. Возврат занимает 1 минуту, во время которой существо недееспособно и не может перемещаться. Пока заклинание активно, существо может вернуться в форму облака, для чего снова требуется преображение в течение 1 минуты.\n
Если существо находится в форме облака и летит, когда оканчивается эффект, существо в течение 1 минуты снижается на 60 фт. в раунд, пока не приземлится безопасно. Если через 1 минуту оно не сможет приземлиться, оно падает на оставшуюся дистанцию.`,
    lvl: 6,
    magicSchool: MAGIC_TRANSMUTATION,
    castTime: '1 минута',
    range: 30,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'огонь и святая вода',
    source: 'PHB:288',
    classList: [PC_CLASS_DRUID],
  },
  {
    id: SPELL_CREATION,
    name: 'Сотворение',
    nameEn: 'Creation',
    description: `Вы зачерпываете теневую материю в Царстве Теней и создаёте в пределах дистанции неживой предмет из растительной материи: ткань, верёвку, дерево, или что-то подобное. Вы также можете этим заклинанием создавать минеральную материю, такую как камни, кристаллы и металлы. Создаваемый предмет должен помещаться в куб с длиной ребра 5 фт., и должен иметь форму и материю, которые вы раньше видели.\n
Длительность зависит от создаваемого материала. Если предмет составлен из нескольких материалов, используется самая короткая длительность.\n

| Материал             | Длительность |
|----------------------|--------------|
| Драгоценные камни    | 10 минут     |
| Адамантин или мифрил | 1 минута     |
| Растительная материя | 1 день       |
| Камень или кристалл  | 12 часов     |
| Драгоценные металлы  | 1 час        |

Использование материи, созданной этим заклинанием, в качестве материального компонента для другого заклинания, вызывает провал того заклинания.
На больших уровнях: Если вы накладываете это заклинание, используя ячейку 6 уровня или выше, длина ребра куба увеличивается на 5 фт. за каждый уровень ячейки выше пятого. `,
    lvl: 5,
    magicSchool: MAGIC_ILLUSION,
    castTime: '1 минута',
    range: 30,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'крошечный кусочек материи того же вида, из которого вы планируете создать предмет',
    duration: 'Особая',
    source: 'PHB:280',
    classList: [PC_CLASS_SORCERER, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_ENLARGE_REDUCE,
    name: 'Увеличение/уменьшение',
    nameEn: 'Enlarge reduce',
    description: `Вы увеличиваете или уменьшаете существо или предмет, видимый вами в пределах дистанции, на время действия заклинания. Выберите или существо или предмет, который никто не несет и не носит. Если цель хочет, она может совершить спасбросок Телосложения. В случае успеха заклинание не оказывает на нее никакого влияния. Если цель — существо, все, что она носит и несет, изменяет размер вместе с ней. Все, что это существо бросит, тут же обретает свой естественный размер.\n
**Увеличение.** Размеры цели удваиваются по всем измерениям, а вес увеличивается в восемь раз. Это увеличивает размер на одну категорию — от Среднего до Большого, например. Если для цели не хватает пространства, она приобретает максимально возможный размер. Пока заклинание активно, цель совершает с преимуществом проверки и спасброски Силы. Оружие цели тоже увеличивается. Атаки увеличенным оружием причиняют дополнительный урон 1к4.\n
**Уменьшение.** Размеры цели уменьшаются вдвое по всем измерениям, а вес уменьшается до одной восьмой от обычного. Это уменьшает размер на одну категорию — от Среднего до Маленького, например. Пока заклинание активно, цель совершает с помехой проверки и спасброски Силы. Оружие цели тоже уменьшается. Атаки уменьшенным оружием причиняют на 1к4 меньше урона (урон не может быть меньше 1).`,
    lvl: 2,
    magicSchool: MAGIC_TRANSMUTATION,
    range: 30,
    needConcentration: true,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'щепотка толченого железа',
    duration: 'вплоть до 1 минуты',
    source: 'PHB:285',
    classList: [PC_CLASS_FIGHTER, PC_CLASS_ROGUE, PC_CLASS_SORCERER, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_WALL_OF_FIRE,
    name: 'Огненная стена',
    nameEn: 'Wall of fire',
    description: `Вы создаёте стену из огня на твёрдой поверхности в пределах дистанции. Вы можете создать стену до 60 футов в длину, 20 футов в высоту и 1 фут толщиной, или замкнутой кольцом стеной до 20 футов диаметром, 20 футов высотой и толщиной 1 фут. Стена непрозрачная и существует, пока активно заклинание.\n
Когда стена появляется, все существа в её области должны совершить спасбросок Ловкости. При провале они получают урон огнём 5к8 или половину этого урона при успехе.\n
Одна сторона стены, выбранная при накладывании заклинания, причиняет урон огнём 5к8 всем существам, оканчивающим ход в пределах 10 футов от этой стороны или внутри стены. Существа получают такой же урон когда впервые за ход входят в стену или оканчивают там ход. Другая сторона стены не причиняет урон.\n
На больших уровнях: Если вы накладываете это заклинание, используя ячейку 5 уровня или выше, урон увеличивается на 1к8 за каждый уровень ячейки выше четвёртого.`,
    lvl: 4,
    magicSchool: MAGIC_EVOCATION,
    range: 120,
    needConcentration: true,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'небольшой кусочек фосфора',
    duration: 'вплоть до 1 минуты',
    source: 'PHB:147',
    classList: [PC_CLASS_DRUID, PC_CLASS_SORCERER, PC_CLASS_WIZARD],
  },
  {
    id: SPELL_PURIFY_FOOD_AND_DRINK,
    name: 'Очищение пищи и питья',
    nameEn: 'Purify food and drink',
    description: `Вся немагическая еда и питьё в пределах сферы с радиусом 5 фт. с центром на точке, выбранной вами в пределах дистанции, очищается и избавляется от ядов и болезней.`,
    lvl: 1,
    magicSchool: MAGIC_TRANSMUTATION,
    ritual: true,
    range: 10,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    source: 'PHB:254',
    classList: [PC_CLASS_PRIEST, PC_CLASS_PALADIN, PC_CLASS_DRUID],
  },
  {
    id: SPELL_CREATE_OR_DESTROY_WATER,
    name: 'Сотворение или уничтожение воды',
    nameEn: 'Create or destroy water',
    description: `Вы либо создаёте, либо уничтожаете воду.\n
**Сотворение воды**. Вы создаёте до 10 галлонов (40 литров) чистой воды в пределах дистанции в открытом контейнере. В качестве альтернативы, вода выпадает дождём в кубе с длиной ребра 30 фт. в пределах дальности, туша открытое пламя.\n
**Уничтожение воды**. Вы уничтожаете до 10 галлонов (40 литров) воды в открытом контейнере в пределах дистанции. В качестве альтернативы, вы уничтожаете туман в кубе с длиной ребра 30 фт. в пределах дистанции.\n
На больших уровнях: Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, вы создаёте или уничтожаете 10 дополнительных галлонов (40 литров) воды, и длина ребра куба увеличивается на 5 фт. за каждый уровень ячейки выше первого.`,
    lvl: 1,
    magicSchool: MAGIC_TRANSMUTATION,
    range: 30,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'капля воды, если вода создаётся, или несколько песчинок, если вода уничтожается',
    source: 'PHB:280',
    classList: [PC_CLASS_PRIEST, PC_CLASS_DRUID],
  },
  {
    id: SPELL_WATER_WALK,
    name: 'Хождение по воде',
    nameEn: 'Water walk',
    description: `Это заклинание дарует способность перемещаться по жидкой поверхности — такой как вода, кислота, грязь, снег, зыбучий песок или лава — как если бы это была безвредная твёрдая поверхность (существа, идущие по жидкой лаве, всё равно получают урон от жара). До десяти согласных существ, видимых вами в пределах дистанции, получают эту же способность на время действия заклинания.\n
Если вы делаете целью существо, погружённое в жидкость, заклинание поднимает его на поверхность со скоростью 60 фт. в раунд. `,
    lvl: 3,
    magicSchool: MAGIC_TRANSMUTATION,
    range: 30,
    ritual: true,
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL],
    materialText: 'кусочек пробки',
    duration: '1 час',
    source: 'PHB:288',
    classList: [PC_CLASS_PRIEST, PC_CLASS_RANGER, PC_CLASS_SORCERER, PC_CLASS_DRUID],
  },
  {
    id: SPELL_SEE_INVISIBILITY,
    name: 'Видеть невидимое',
    nameEn: 'See invisibility',
    description: ``, // TODO
    lvl: 2,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_JUMP,
    name: 'Прыжок',
    nameEn: 'Jump',
    description: ``, // TODO
    lvl: 1,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_SHIELD,
    name: 'Щит',
    nameEn: 'Shield',
    description: ``, // TODO
    lvl: 1,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_BLINDNESS_DEAFNESS,
    name: 'Глухота/Слепота',
    nameEn: 'Blindness/Deafness',
    description: ``, // TODO
    lvl: 2,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_DISGUISE_SELF,
    name: 'Маскировка',
    nameEn: 'Disguise self',
    description: ``, // TODO
    lvl: 1,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_BLUR,
    name: 'Размытый образ',
    nameEn: 'Blur',
    description: ``, // TODO
    lvl: 2,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_PHANTASMAL_FORCE,
    name: 'Воображаемая сила',
    nameEn: 'Phantasmal force',
    description: ``, // TODO
    lvl: 2,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_ENTANGLE,
    name: 'Опутывание',
    nameEn: 'Entangle',
    description: ``, // TODO
    lvl: 1,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_DISPEL_MAGIC,
    name: 'Рассеивание магии',
    nameEn: 'Dispel magic',
    description: ``, // TODO
    lvl: 3,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_DARKNESS,
    name: 'Тьма',
    nameEn: 'Darkness',
    description: ``, // TODO
    lvl: 2,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_POWER_WORD_STUN,
    name: 'Слово силы: оглушение',
    nameEn: 'Power word stun',
    description: ``, // TODO
    lvl: 8,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_CONFUSION,
    name: 'Смятение',
    nameEn: 'Confusion',
    description: ``, // TODO
    lvl: 4,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_WEB,
    name: 'Паутина',
    nameEn: 'Web',
    description: ``, // TODO
    lvl: 2,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_FAERIE_FIRE,
    name: 'Огонь фей',
    nameEn: 'Faerie fire',
    description: ``, // TODO
    lvl: 1,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_SILENCE,
    name: 'Тишина',
    nameEn: 'Silence',
    description: ``, // TODO
    lvl: 2,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_BANE,
    name: 'Порча',
    nameEn: 'Bane',
    description: ``, // TODO
    lvl: 1,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_CLAIRVOYANCE,
    name: 'Подсматривание',
    nameEn: 'Clairvoyance',
    description: ``, // TODO
    lvl: 3,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_POISON_SPRAY,
    name: 'Ядовитые брызги',
    nameEn: 'Poison spray',
    description: ``, // TODO
    lvl: 0,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_HOLD_PERSON,
    name: 'Удержание личности',
    nameEn: 'Hold Person',
    description: ``, // TODO
    lvl: 2,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_DIVINATION,
    name: 'Предсказание',
    nameEn: 'Divination',
    description: ``, // TODO
    lvl: 4,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_FREEDOM_OF_MOVEMENT,
    name: 'Свобода перемещения',
    nameEn: 'Freedom of Movement',
    description: ``, // TODO
    lvl: 4,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_DRUIDCRAFT,
    name: 'Искусство друидов',
    nameEn: 'Druidcraft',
    description: ``, // TODO
    lvl: 0,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_GOODBERRY,
    name: 'Чудо-ягоды',
    nameEn: 'Goodberry',
    description: ``, // TODO
    lvl: 1,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_PASS_WITHOUT_TRACE,
    name: 'Бесследное передвижение',
    nameEn: 'Pass Without Trace',
    description: ``, // TODO
    lvl: 2,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_SHILLELAGH,
    name: 'Дубинка',
    nameEn: 'Shillelagh',
    description: ``, // TODO
    lvl: 0,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_BARKSKIN,
    name: 'Дубовая кора',
    nameEn: 'Barkskin',
    description: ``, // TODO
    lvl: 2,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_FIREBALL,
    name: 'Огненный шар',
    nameEn: 'Fireball',
    description: ``, // TODO
    lvl: 3,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_HOLD_MONSTER,
    name: 'Удержание чудовища',
    nameEn: 'Hold monster',
    description: ``, // TODO
    lvl: 5,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_ALTER_SELF,
    name: 'Смена обличья',
    nameEn: 'Alter self',
    description: ``, // TODO
    lvl: 2,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_COMMAND,
    name: 'Приказ',
    nameEn: 'Command',
    description: ``, // TODO
    lvl: 1,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_VICIOUS_MOCKERY,
    name: 'Злая насмешка',
    nameEn: 'Vicious mockery',
    description: ``, // TODO
    lvl: 0,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_RAY_OF_ENFEEBLEMENT,
    name: 'Луч слабости',
    nameEn: 'Ray of enfeeblement',
    description: ``, // TODO
    lvl: 2,
    magicSchool: MAGIC_NECROMANCY,
    range: 60,
    ritual: false,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_MAGIC_MISSILE,
    name: 'Волшебная стрела ',
    nameEn: 'Magic missile',
    description: ``, // TODO
    lvl: 1,
    magicSchool: MAGIC_NECROMANCY,
    range: 60,
    ritual: false,
    componentList: [CAST_VERBAL, CAST_SOMATIC],
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_RAY_OF_SICKNESS,
    name: 'Луч болезни',
    nameEn: 'Ray of sickness',
    description: ``, // TODO
    lvl: 1,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_IDENTIFY,
    name: 'Опознание',
    nameEn: 'Identify',
    description: ``, // TODO
    lvl: 1,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_LOCATE_OBJECT,
    name: 'Поиск предмета',
    nameEn: 'Locate object',
    description: ``, // TODO
    lvl: 2,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_COUNTERSPELL,
    name: 'Контрзаклинание',
    nameEn: 'Counterspell',
    description: ``, // TODO
    lvl: 3,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_LIGHTNING_BOLT,
    name: 'Молния',
    nameEn: 'Lightning bolt',
    description: ``, // TODO
    lvl: 3,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_SCRYING,
    name: 'Наблюдение',
    nameEn: 'Scrying',
    description: ``, // TODO
    lvl: 5,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_CONTACT_OTHER_PLANE,
    name: 'Связь с иным миром',
    nameEn: 'Contact other plane',
    description: ``, // TODO
    lvl: 5,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_EYEBITE,
    name: 'Разящее око',
    nameEn: 'Eyebite',
    description: ``, // TODO
    lvl: 6,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_HEAT_METAL,
    name: 'Раскалённый металл',
    nameEn: 'Heat metal',
    description: ``, // TODO
    lvl: 2,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_PROTECTION_FROM_POISON,
    name: 'Защита от яда',
    nameEn: 'Protection from poison',
    description: ``, // TODO
    lvl: 2,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_LESSER_RESTORATION,
    name: 'Малое восстановление',
    nameEn: 'Lesser restoration',
    description: ``, // TODO
    lvl: 2,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_GREATER_RESTORATION,
    name: 'Высшее восстановление',
    nameEn: 'Greater restoration',
    description: ``, // TODO
    lvl: 5,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_DREAM,
    name: 'Вещий сон',
    nameEn: 'dream',
    description: ``, // TODO
    lvl: 5,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_SHIELD_OF_FAITH,
    name: 'Щит веры',
    nameEn: 'Shield of faith',
    description: ``, // TODO
    lvl: 1,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_SPIRIT_GUARDIANS,
    name: 'Духовные стражи',
    nameEn: 'Spirit guardians',
    description: ``, // TODO
    lvl: 3,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_SPIRITUAL_WEAPON,
    name: 'Божественное оружие',
    nameEn: 'Spiritual weapon',
    description: ``, // TODO
    lvl: 2,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_GUIDANCE,
    name: 'Указание',
    nameEn: 'Guidance',
    description: ``, // TODO
    lvl: 0,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
  },
  {
    id: SPELL_MASS_CURE_WOUNDS,
    name: 'Множественное лечение ран',
    nameEn: 'Mass cure wounds',
    description: ``, // TODO
    lvl: 5,
    magicSchool: MAGIC_TRANSMUTATION, // TODO
    range: 0, // TODO
    ritual: false, // TODO
    componentList: [CAST_VERBAL, CAST_SOMATIC, CAST_MATERIAL], // TODO
    materialText: '', // TODO
    source: 'PHB:', // TODO
    classList: [], // TODO
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

module.exports = dndSpellList

module.exports.dndSpellCollection = listToCollectionById(dndSpellList)

module.exports.SPELL_ALTER_SELF = SPELL_ALTER_SELF
module.exports.SPELL_ANIMATE_DEAD = SPELL_ANIMATE_DEAD
module.exports.SPELL_BANE = SPELL_BANE
module.exports.SPELL_BARKSKIN = SPELL_BARKSKIN
module.exports.SPELL_BESTOW_CURSE = SPELL_BESTOW_CURSE
module.exports.SPELL_BLADE_BARRIER = SPELL_BLADE_BARRIER
module.exports.SPELL_BLESS = SPELL_BLESS
module.exports.SPELL_BLIGHT = SPELL_BLIGHT
module.exports.SPELL_BLINDNESS_DEAFNESS = SPELL_BLINDNESS_DEAFNESS
module.exports.SPELL_BLUR = SPELL_BLUR
module.exports.SPELL_CLAIRVOYANCE = SPELL_CLAIRVOYANCE
module.exports.SPELL_COLOR_SPRAY = SPELL_COLOR_SPRAY
module.exports.SPELL_COMMAND = SPELL_COMMAND
module.exports.SPELL_COMMUNE = SPELL_COMMUNE
module.exports.SPELL_COMPREHEND_LANGUAGES = SPELL_COMPREHEND_LANGUAGES
module.exports.SPELL_CONFUSION = SPELL_CONFUSION
module.exports.SPELL_CONJURE_ELEMENTAL = SPELL_CONJURE_ELEMENTAL
module.exports.SPELL_CONTACT_OTHER_PLANE = SPELL_CONTACT_OTHER_PLANE
module.exports.SPELL_CONTROL_WEATHER = SPELL_CONTROL_WEATHER
module.exports.SPELL_COUNTERSPELL = SPELL_COUNTERSPELL
module.exports.SPELL_CREATE_FOOD_AND_WATER = SPELL_CREATE_FOOD_AND_WATER
module.exports.SPELL_CREATE_OR_DESTROY_WATER = SPELL_CREATE_OR_DESTROY_WATER
module.exports.SPELL_CREATION = SPELL_CREATION
module.exports.SPELL_CURE_WOUNDS = SPELL_CURE_WOUNDS
module.exports.SPELL_DANCING_LIGHTS = SPELL_DANCING_LIGHTS
module.exports.SPELL_DARKNESS = SPELL_DARKNESS
module.exports.SPELL_DETECT_EVIL_AND_GOOD = SPELL_DETECT_EVIL_AND_GOOD
module.exports.SPELL_DETECT_MAGIC = SPELL_DETECT_MAGIC
module.exports.SPELL_DETECT_THOUGHTS = SPELL_DETECT_THOUGHTS
module.exports.SPELL_DISGUISE_SELF = SPELL_DISGUISE_SELF
module.exports.SPELL_DISPEL_EVIL_AND_GOOD = SPELL_DISPEL_EVIL_AND_GOOD
module.exports.SPELL_DISPEL_MAGIC = SPELL_DISPEL_MAGIC
module.exports.SPELL_DIVINATION = SPELL_DIVINATION
module.exports.SPELL_DOMINATE_PERSON = SPELL_DOMINATE_PERSON
module.exports.SPELL_DREAM = SPELL_DREAM
module.exports.SPELL_DRUIDCRAFT = SPELL_DRUIDCRAFT
module.exports.SPELL_ENLARGE_REDUCE = SPELL_ENLARGE_REDUCE
module.exports.SPELL_ENTANGLE = SPELL_ENTANGLE
module.exports.SPELL_EYEBITE = SPELL_EYEBITE
module.exports.SPELL_FAERIE_FIRE = SPELL_FAERIE_FIRE
module.exports.SPELL_FEATHER_FALL = SPELL_FEATHER_FALL
module.exports.SPELL_FIREBALL = SPELL_FIREBALL
module.exports.SPELL_FLAME_STRIKE = SPELL_FLAME_STRIKE
module.exports.SPELL_FLY = SPELL_FLY
module.exports.SPELL_FOG_CLOUD = SPELL_FOG_CLOUD
module.exports.SPELL_FREEDOM_OF_MOVEMENT = SPELL_FREEDOM_OF_MOVEMENT
module.exports.SPELL_GASEOUS_FORM = SPELL_GASEOUS_FORM
module.exports.SPELL_GOODBERRY = SPELL_GOODBERRY
module.exports.SPELL_GREATER_INVISIBILITY = SPELL_GREATER_INVISIBILITY
module.exports.SPELL_GREATER_RESTORATION = SPELL_GREATER_RESTORATION
module.exports.SPELL_GUIDANCE = SPELL_GUIDANCE
module.exports.SPELL_GUST_OF_WIND = SPELL_GUST_OF_WIND
module.exports.SPELL_HALLUCINATORY_TERRAIN = SPELL_HALLUCINATORY_TERRAIN
module.exports.SPELL_HEAT_METAL = SPELL_HEAT_METAL
module.exports.SPELL_HOLD_MONSTER = SPELL_HOLD_MONSTER
module.exports.SPELL_HOLD_PERSON = SPELL_HOLD_PERSON
module.exports.SPELL_IDENTIFY = SPELL_IDENTIFY
module.exports.SPELL_INSECT_PLAGUE = SPELL_INSECT_PLAGUE
module.exports.SPELL_INVISIBILITY = SPELL_INVISIBILITY
module.exports.SPELL_JUMP = SPELL_JUMP
module.exports.SPELL_LESSER_RESTORATION = SPELL_LESSER_RESTORATION
module.exports.SPELL_LEVITATE = SPELL_LEVITATE
module.exports.SPELL_LIGHT = SPELL_LIGHT
module.exports.SPELL_LIGHTNING_BOLT = SPELL_LIGHTNING_BOLT
module.exports.SPELL_LOCATE_OBJECT = SPELL_LOCATE_OBJECT
module.exports.SPELL_MAGE_HAND = SPELL_MAGE_HAND
module.exports.SPELL_MAGIC_MISSILE = SPELL_MAGIC_MISSILE
module.exports.SPELL_MAJOR_IMAGE = SPELL_MAJOR_IMAGE
module.exports.SPELL_MASS_CURE_WOUNDS = SPELL_MASS_CURE_WOUNDS
module.exports.SPELL_MINOR_ILLUSION = SPELL_MINOR_ILLUSION
module.exports.SPELL_MIRROR_IMAGE = SPELL_MIRROR_IMAGE
module.exports.SPELL_MISTY_STEP = SPELL_MISTY_STEP
module.exports.SPELL_MOVE_EARTH = SPELL_MOVE_EARTH
module.exports.SPELL_NONDETECTION = SPELL_NONDETECTION
module.exports.SPELL_PASS_WITHOUT_TRACE = SPELL_PASS_WITHOUT_TRACE
module.exports.SPELL_PASSWALL = SPELL_PASSWALL
module.exports.SPELL_PHANTASMAL_FORCE = SPELL_PHANTASMAL_FORCE
module.exports.SPELL_PHANTASMAL_KILLER = SPELL_PHANTASMAL_KILLER
module.exports.SPELL_PLANE_SHIFT = SPELL_PLANE_SHIFT
module.exports.SPELL_POISON_SPRAY = SPELL_POISON_SPRAY
module.exports.SPELL_POLYMORPH = SPELL_POLYMORPH
module.exports.SPELL_POWER_WORD_STUN = SPELL_POWER_WORD_STUN
module.exports.SPELL_PRESTIDIGITATION = SPELL_PRESTIDIGITATION
module.exports.SPELL_PROTECTION_FROM_POISON = SPELL_PROTECTION_FROM_POISON
module.exports.SPELL_PURIFY_FOOD_AND_DRINK = SPELL_PURIFY_FOOD_AND_DRINK
module.exports.SPELL_RAISE_DEAD = SPELL_RAISE_DEAD
module.exports.SPELL_RAY_OF_ENFEEBLEMENT = SPELL_RAY_OF_ENFEEBLEMENT
module.exports.SPELL_RAY_OF_FROST = SPELL_RAY_OF_FROST
module.exports.SPELL_RAY_OF_SICKNESS = SPELL_RAY_OF_SICKNESS
module.exports.SPELL_RESSURECTION = SPELL_RESSURECTION
module.exports.SPELL_SACRED_FLAME = SPELL_SACRED_FLAME
module.exports.SPELL_SANCTUARY = SPELL_SANCTUARY
module.exports.SPELL_SCRYING = SPELL_SCRYING
module.exports.SPELL_SEE_INVISIBILITY = SPELL_SEE_INVISIBILITY
module.exports.SPELL_SHIELD = SPELL_SHIELD
module.exports.SPELL_SHIELD_OF_FAITH = SPELL_SHIELD_OF_FAITH
module.exports.SPELL_SHILLELAGH = SPELL_SHILLELAGH
module.exports.SPELL_SILENCE = SPELL_SILENCE
module.exports.SPELL_SLEEP = SPELL_SLEEP
module.exports.SPELL_SPIRIT_GUARDIANS = SPELL_SPIRIT_GUARDIANS
module.exports.SPELL_SPIRITUAL_WEAPON = SPELL_SPIRITUAL_WEAPON
module.exports.SPELL_STONE_SHAPE = SPELL_STONE_SHAPE
module.exports.SPELL_SUGGESTION = SPELL_SUGGESTION
module.exports.SPELL_TELEKINESIS = SPELL_TELEKINESIS
module.exports.SPELL_THAUMATURGY = SPELL_THAUMATURGY
module.exports.SPELL_THUNDERWAVE = SPELL_THUNDERWAVE
module.exports.SPELL_TONGUES = SPELL_TONGUES
module.exports.SPELL_VICIOUS_MOCKERY = SPELL_VICIOUS_MOCKERY
module.exports.SPELL_WALL_OF_FIRE = SPELL_WALL_OF_FIRE
module.exports.SPELL_WALL_OF_STONE = SPELL_WALL_OF_STONE
module.exports.SPELL_WATER_BREATHING = SPELL_WATER_BREATHING
module.exports.SPELL_WATER_WALK = SPELL_WATER_WALK
module.exports.SPELL_WEB = SPELL_WEB
module.exports.SPELL_WIND_WALK = SPELL_WIND_WALK
