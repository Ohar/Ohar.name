const {
  SPELL_BESTOW_CURSE,
  SPELL_CONTACT_OTHER_PLANE,
  SPELL_COUNTERSPELL,
  SPELL_EYEBITE,
  SPELL_HOLD_PERSON,
  SPELL_IDENTIFY,
  SPELL_LIGHTNING_BOLT,
  SPELL_LOCATE_OBJECT,
  SPELL_PHANTASMAL_KILLER,
  SPELL_POLYMORPH,
  SPELL_RAY_OF_SICKNESS,
  SPELL_SCRYING
} = require('./dndSpellList')

const coven = {
  description: `Когда нужно работать сообща, несмотря на эгоизм, карги собираются в шабаши. В шабаш могут входить разные ведьмы, в нём они считаются равными. Тем не менее, каждая жаждет личной власти.\n
Шабаш — это три карги, и конфликт между двумя всегда может решить третья. Если встречается больше трёх карг, например, когда возникает конфликт между несколькими шабашами, всё погружается в хаос.`,
  featureList: [
    {
      name: 'Глаз карги',
      description: `Шабаш может создать магический предмет, называемый _глазом карги_, который делают из настоящего глаза, покрытого лаком, подвешенного на манер кулона. Обычно глаз доверяют помощнику, для сохранения и переноски. Карга в шабаше может действием посмотреть через этот глаз, если он находится на одном с ней плане. У _глаза карги_ КД 10, 1 хит и тёмное зрение в радиусе 60 футов. Если его разрушить, все члены шабаша получают урон психической энергией 3к10 психического урона и становятся ослеплёнными на 24 часа.\n
У шабаша может быть только один глаз одновременно, и создание нового требует проведения ритуала всеми тремя участницами. Ритуал занимает 1 час, и карги не смогут совершить его, будучи слепыми. Если во время совершения ритуала какая-нибудь карга совершает любое лишнее действие, шабаш должен начинать ритуал заново.`,
    },
  ],
  spellCastTogether: {
    title: 'Совместное колдовство',
    preText: `Если все три представительницы шабаша находятся в пределах 30 футов друг от друга, каждая может накладывать следующие заклинания из списка волшебника, но ячейки заклинаний у них общие на всех.`,
    postText: `При накладывании этих заклинаний каждая карга считается заклинателем 12 уровня, использующим Интеллект в качестве базовой характеристики. Сл спасброска от заклинаний равна 12 + модификатор Интеллекта карги, а бонус атаки заклинанием равен 4 + модификатор Интеллекта.`,
    spellIdList: [
      SPELL_HOLD_PERSON,
      SPELL_BESTOW_CURSE,
      SPELL_PHANTASMAL_KILLER,
      SPELL_POLYMORPH,
      SPELL_RAY_OF_SICKNESS,
      SPELL_IDENTIFY,
      SPELL_LOCATE_OBJECT,
      SPELL_COUNTERSPELL,
      SPELL_LIGHTNING_BOLT,
      SPELL_SCRYING,
      SPELL_CONTACT_OTHER_PLANE,
      SPELL_EYEBITE
    ],
    slotCountList: [0, 4, 3, 3, 3, 2, 1]
  },
}

const boneDevilSummoner = {
  actionList: [
    {
      name: 'Призыв дьявола',
      description: `Дьявол выбирает, кого призвать, и пытается это сделать с шансом 30%.\n
 * 2к6 игольчатых дьяволов
 * одного костяного дьявола\n
Призванные дьяволы появляются в свободном пространстве в пределах 60 футов от призывателя, и действуют как его союзники, не имеющие способности призывать дьяволов. Они помогают в течение 1 минуты или пока призыватель не умрёт или действием их не отпустит.`,
      limit: {
        count: 1,
        period: 'день',
      },
    },
  ]
}

const iceDevilSummoner = {
  actionList: [
    {
      name: 'Призыв дьявола',
      description: `Дьявол пытается призвать одного ледяного дьявола с шансом 60%.\n
Призванный дьявол появляется в свободном пространстве в пределах 60 футов от призывателя, и действует как его союзник, не имеющий способности призывать дьяволов. Он помогает в течение 1 минуты или пока призыватель не умрёт или действием его не отпустит.`,
      limit: {
        count: 1,
        period: 'день',
      },
    },
  ],
}

const silverDragonDescription = `Дружелюбные и наиболее социальные из всех металлических драконов, серебряные драконы с радостью помогают добрым существа, которые нуждаются в этом.\n
Серебряный дракон переливается, как будто отлит из чистого металла, высокие глаза и шипастая окладистая борода делает его лицо благородным. Колючий венец поднимается высоко над головой, уходя вниз по шее до самого кончика хвоста. Сине-серая чешуя ящера переливаются серебряными бликами. С годами его цвет постепенно светлеет, до едва различимого серебряного оттенка. У старейших драконов совсем исчезают зрачки, а глаза становятся похожими на шары ртути.\n
**Драконья добродетель.** Серебряные драконы считают, что нравственная жизнь предполагает совершение добрых дел и непричинение незаслуженного вреда другим разумным созданиям. Они не берут на себя ответственность искоренить зло, как это делают золотые и бронзовые драконы, но они с удовольствием выступают против существ, которые осмеливаются совершать дурные поступки или вредить невинным.\n
**Друзья маленьких народов.** Серебряные драконы любят компанию других серебряных драконов. Но помимо сородичей, настоящие дружеские отношения развиваются и с гуманоидами, и многие серебряные драконы пребывают в гуманоидном облике столько же, сколько и в драконьем. Серебряный дракон принимает человеческое обличье мудрого старца или молодого странника, и с ним часто ходят смертные товарищи, с которыми он развил крепкие дружеские отношения.\n
Серебряные драконы вынуждены регулярно отходить от жизни среди людей, возвращаясь к своему истинному облику для спаривания и создания потомства, или же при необходимости защиты сокровищ и по личным делам. Поскольку многие теряют счёт времени, находясь вдали, они, по возвращению, могу обнаружить, что их друзья постарели или умерли. В итоге серебряные драконы часто поддерживают нескольких поколений гуманоидов в пределах одной семьи.\n
**Уважение к человечеству.** Серебряные драконы дружны с гуманоидами всех рас, но те, что живут недолго, такие как люди, более интересны для них, чем долгоживущие эльфы и дварфы. У людей есть стремления и жизнерадостность, что серебряные драконы находят увлекательным.`
const copperDragonDescription = `Медные драконы, обожающие розыгрыши, шутки и загадки, живут среди холмов и на каменистых возвышенностях. Несмотря на общительную и уравновешенную натуру, они очень жадные, и могут стать опасными, если их сокровищам угрожает опасность. У медных драконов есть сегментированные надбровные пластины, которые выступают над глазами и идут назад к длинным рогам. Изогнутые скулы и челюстные оборки придают им задумчивый вид. При рождении медный дракон покрыт ярко-коричневой с металлическим оттенком чешуёй. По мере взросления, чешуя принимает более медный цвет, а затем покрывается зеленоватым налётом. Зрачки у медных драконов исчезают с возрастом, и глаза старейших драконов выглядят как светящиеся бирюзовые сферы.\n
**Гостеприимность.** Медный дракон ценит умные, хорошие шутки, истории и загадки с чувством юмора. Его раздражают существа, которые не смеются над его шутками или не веселятся над его розыгрышами.\n
Медные драконы особенно любят бардов. Дракон может выделить часть своего логова в качестве временного места жительства для барда, желая вкусить его истории, загадки и музыку. Для медного дракона такое соседство — желанное сокровище.\n
**Хитрый и осмотрительный.** Для создания своего клада медный дракон предпочитает сокровища недр. Металлы и драгоценные камни приоритетны для этих существ.\n
Медный дракон осторожен, когда дело доходит до хвастовства богатствами. Если он знает, что кто-либо ищет конкретно часть его сокровищ, он не станет раскрывать детали. Вместо этого он отправит искателей сокровищ на ложные поиски и будет, потешаясь, наблюдать за ними издалека.`
const brassDragonDescription = `Самые общительные из истинных драконов, латунные драконы обожают разговоры, солнечный свет и горячий, сухой климат.\n
Голова латунного дракона окаймляется широкой защитной пластиной, отходящей от его лба и шипами, выступающими из его подбородка. Перепончатый гребень бежит вдоль всей его шеи, а его сужающиеся крылья простираются до самого кончика хвоста. Чешуя вирмлингов латунных драконов тускло-коричневая с пятнами. По мере роста дракона чешуйки приобретают тёплый оттенок и начинают блестеть, будто полированные. Его крылья и перепонки, покрытые зелёными точками на краях, темнеют с возрастом. Когда латунный дракон становится старше, его зрачки постепенно исчезают, пока глаза не становятся похожи на расплавленные металлические шары.\n
**Отчаянный болтун.** Латунный дракон общается с тысячами существ на протяжении своей долгой жизни, накапливая полезную информацию, которой он с удовольствием поделится в обмен на подарок в сокровищницу. Если разумное существо попытается сбежать от латунного дракона, не вступая в диалог, дракон последует за ним. Если существо пытается сбежать, используя магию или силу, дракон в порыве досады может использовать усыпляющий газ, чтобы обездвижить существо. Когда оно просыпается, существо осознает себя прижатым к земле гигантскими когтями или закопанным в песок по шею, в то время пока дракон удовлетворяет свою жажду небольшой беседы.\n
Латунный дракон доверяет существам, которые наслаждаются беседой так же, как и он, но он достаточно умён, чтобы заметить, когда им пытаются манипулировать. Когда это происходит, дракон, как правило, отвечает по-доброму, расценивая попытки обмануть друг друга как игру.\n
**Ценные сокровища.** Латунные драконы любят магические предметы, которые позволяют им общаться с интересными личностями. Разумное телепатическое оружие или волшебная лампа с джинном, заточённым внутри, являются одними из самых величайших сокровищ, которыми может обладать латунный дракон.\n
Латунные драконы скрывают свои сокровища под насыпями песка или в тайных закромах вдали от своего основного логова. У них не возникает никаких проблем с запоминанием места, где спрятаны их сокровища, а потому нет никакой необходимости в картах. Искатели приключений и странники должны быть осторожны, если они находят скрытый сундук в оазисе или сокровища, спрятанные в наполовину поглощённых пустыней руинах, ибо это может быть частью клада латунного дракона.`
const goldDragonDescription = `Самые могущественные и величественные из металлических драконов, золотые драконы являются убеждёнными противниками зла.\n
На лице золотого дракона, окружённом гибкими шипами, напоминающими усы, всегда проницательное выражение. Его рога направлены назад, от его носа и лба, а за ними идёт двойной гребень, украшающий длинную драконью шею. Парусообразные крылья золотого дракона начинаются от плеч и идут вплоть до кончика хвоста, позволяя ему летать с характерным волнистым движением, как будто плавая по воздуху. Чешуя вирмлинга золотого дракона темно-жёлтая с металлическими пятнами. Эти пятна растут в размерах, пока дракон взрослеет. У взрослого золотого дракона зрачки исчезают и глаза становятся похожи на лужи расплавленного золота.\n
**Поедание богатств.** Золотые драконы могут питаться чем угодно, но предпочитают рацион, состоящий из жемчуга и драгоценных камней. К счастью, золотой дракон не обязан насыщать себя только таким богатством, чтобы почувствовать себя удовлетворённым. Сокровища в дар, которые могут быть съедены, хорошо воспринимаются золотым драконом, если он не воспринимает их как взятку.\n
**Сдержанные перевёртыши.** Золотые драконы уважают других металлических драконов за их мудрость и справедливость, но они являются самыми мрачными и отчуждёнными из добрых драконов. Они настолько ценят свою личную жизнь, что редко тесно общаются с другими драконами, исключая своих супругов и потомство.\n
Старые золотые драконы могут принимать обличья **гуманоидов или животных.** Редко происходит так, что золотой дракон в маскировке раскрывает свою истинную форму. Под видом разносчика он может регулярно посещать город, чтобы послушать местные слухи, поддержать честных предпринимателей и протянуть невидимую руку помощи. В облике животного дракон может подружиться с потерявшимся ребёнком, бродячим менестрелем или трактирщиком, выступая в качестве спутника несколько дней или недель подряд.\n
**Мастер накопительства.** Золотой дракон копит свои сокровища в хорошо защищённом хранилище глубоко в логове. Волшебная защита, размещающаяся в логове, сделают практически невозможной любую попытку взять что-либо из сокровищ без ведома дракона.`
const bronzeDragonDescription = `Бронзовые драконы это обитатели побережий, в основном питающиеся водными растениями и рыбой. Они принимают облик дружелюбных животных и с интересом наблюдают за другими существами. Также они восхищаются военными действиями и с готовностью вступают в армию, борющуюся за правое дело.\n
Форма головы бронзового дракона определяется пластинами, покрытыми сетью рёбер и канавок. Изгибающиеся рога, отходящие от этих пластин, уравновешиваются шипами, расположенными на его нижней челюсти и подбородке. В плавании бронзовым драконам помогают перепончатые лапы и гладкая чешуя. Вирмлинги бронзовых драконов жёлтые, с зелёным отливом; однако, по мере взросления дракона, цвет его чешуи становится более глубокого, насыщенного бронзового оттенка. Зрачки в глазах бронзовых драконов исчезают с годами, пока глаза не становятся похожи на светящиеся зелёные шары.\n
**Драконы побережья.** Бронзовые драконы любят наблюдать за кораблями, путешествующими вдоль береговой линии мимо их логова, и иногда принимают облик дельфина или чайки, чтобы детально рассмотреть эти корабли и их команду. Отважные бронзовые драконы могут проскользнуть на борт корабля под видом птицы или крысы, осматривая трюм на предмет сокровищ. Если дракон найдёт достойное пополнение для своей коллекции, он будет торговаться с капитаном корабля за эту вещь.\n
**Машины войны.** Бронзовые драконы активно выступают против тирании, и многие бронзовые драконы стремятся испытать свой характер, используя свой размер и силу во благо.\n
Если конфликт разворачивается возле его логова, бронзовый дракон удостоверятся в понимании причины, а после предлагает свои услуги стороне, сражающейся за добро. После того как бронзовый дракон принимает одну из сторон, он остаётся верным союзником.\n
**Хорошо организованное богатство.** Бронзовые драконы собирают сокровища затонувших судов, а также красочные кораллы и жемчуг с рифов и морского дна, вблизи своего логова. Когда бронзовый дракон обещает помочь армии вести войну против тирании, он просит символической оплаты. Если даже такой запрос не по карману союзникам, он может согласиться на коллекцию старых книг по военной истории или безделушку в память о союзе. Бронзовый дракон может также претендовать на сокровище, принадлежавшее врагу, если чувствует, что сокровище будет в большей сохранности под его защитой.`
const blackDragonDescription = `Наиболее злобные и подлые из цветных драконов, чёрные драконы собирают сокровища погибших народов. Этим драконам отвратительно видеть, как слабые процветают, и они упиваются моментами краха королевств гуманоидов. Они располагают свои логова в смрадных болотах и ветхих руинах, там, где когда-то были такие царства.\n
Морда чёрного дракона, с глубоко посаженными глазами и широкими ноздрями, очень напоминает череп. Его изогнутые, составные рога меняют свой цвет от костного у основания до мёртвенно-чёрного у кончиков. С возрастом плоть чёрного дракона у его рогов и на скулах портится, становясь будто бы проеденной кислотой, оставляя лишь тонкий слой шкуры, которая лишь подчёркивает его схожесть с черепом. Голова чёрного дракона покрыта шипами и рогами. Его язык плоский и раздвоенный, а изо рта течёт слюна, чей кислотный запах дополняет вонь гнилых растений и тухлой воды, исходящую от дракона.\n
Когда чёрный дракон вылупляется, его чешуя глянцево-чёрная, но со временем она тускнеет и толстеет, помогая сливаться с трясиной и руинами, служащими ему домом.\n
**Грубые и жестокие.** Все цветные драконы злы, но чёрные драконы особо выделяются садизмом. Они живут моментами, когда жертва умоляет о пощаде, и часто предлагает иллюзию спасения или побега, прежде чем покончить с врагом.\n
Чёрный дракон нападает в первую очередь на самых слабых, обеспечивая себе скорую и жестокую победу, которая подогревает его эго и ужасает остальных противников. На грани поражения чёрный дракон сделает что угодно, чтобы спастись самому, но предпочтёт смерть, не давая другому существу получить над собой власть.\n
**Противники и слуги.** Чёрные драконы ненавидят и боятся других драконов. Они шпионят за своими драконьими соперниками издали, выискивая возможность убить более слабых и избежать более сильных. Если более сильный дракон будет ему угрожать, чёрный дракон покинет своё логово и отправится на поиски новой территории.\n
Злые людоящеры почитают чёрных драконов и служат им, устраивая набеги на поселения гуманоидов ради сокровищ и еды, которые они преподносят драконам в качестве дани. Они также возводят грубые подобия дракона на границах владений своего драконьего хозяина.\n
Злобное влияние чёрного дракона может также привести к спонтанным появлениям ползающих насыпей, которые ищут и убивают добрых существ, приближающихся к логову чёрного дракона.\n
Кобольды населяют логова многих чёрных драконов, как паразиты. Они становятся жестокими, как их тёмные хозяева, и часто пытают и мучают пленных укусами многоножек и скорпионьими жалами, прежде чем подать несчастных в качестве блюда для драконьего пиршества.\n
**Богатства древних.** Чёрные драконы создают клады из сокровищ и магических предметов рухнувших империй и завоёванных королевств, чтобы напомнить себе о собственном величии. Чем больше прошлых цивилизаций дракон переживает, тем больше заявляет он прав на богатства нынешней.`
const blueDragonDescription = `Тщеславные и территориальные, синие драконы парят в небесах над пустынями, охотясь на караваны, разоряя стада и поселения в плодородных землях за границами пустыни. Эти драконы также живут в сухих степях, раскалённых пустошах и на каменистых побережьях, и ревностно охраняют свои границы от возможных соперников, особенно от латунных драконов.\n
Синего дракона можно узнать по крупным перепончатым ушам и массивному рогу, возвышающемуся на его сплюснутой голове. Шипы рядами поднимаются от его ноздрей к бровям и густо растут на его выдающейся нижней челюсти.\n
Чешуя синих драконов варьируется от светло-голубого до тёмно-синего, и обычно отполирована до блеска песками пустынь. По мере старения дракона, его чешуя становится толще и крепче, и его шкура гудит и потрескивает от статического электричества. Эти эффекты усиливаются, когда дракон становится злее или вот-вот набросится, создавая запах озона в пыльном воздухе.\n
**Тщеславные и смертоносные.** Синий дракон не потерпит каких-либо замечаний или намёков на его слабость или унижающих его, получая огромное удовольствие от господства над низшими и человекоподобными созданиями.\n
Синий дракон — терпеливый и методичный боец. Сражаясь на своих условиях, он превращает бой в длительную дуэль, которая может затянуться на часы или даже дни, атакуя с расстояния залпами молний и улетая на значительное расстояние, лишь чтобы дождаться выгодного момента для новой атаки.\n
**Пустынные хищники.** Синие драконы плотоядны, и хотя они могут есть кактусы и другие пустынные растения, чтобы утолить свой голод, они предпочитают лакомиться стадными животными, поджаривая их с помощью своего молниевого дыхания, прежде чем проглотить их. Гастрономические предпочтения и привычки синих драконов угрожают пустынным караванам и кочевым племенам, которых драконы рассматривают как удобные наборы еды и сокровищ.\n
Охотясь, синие драконы закапываются в песок так, что на поверхности остаётся только рог на его голове, выглядящий торчащим из песка камнем. Когда добыча подходит достаточно близко, дракон вырывается из своего укрытия в туче песка, который лавиной разлетается от его крыльев.\n
**Владыки и приспешники.** Синие драконы стараются привлечь ценных и талантливых существ, чья служба укрепит их чувство превосходства. Барды, мудрецы, художники, волшебники и убийцы становятся ценными агентами синих драконов, которые щедро вознаграждают за верную службу.\n
Синий дракон держит местонахождение своего логова в тайне, и хорошо охраняет его. Даже самые верные его слуги редко допускаются туда. Он позволяет анхегам, гигантским скорпионам и другим пустынным существам обитать рядом со своим логовом для большей безопасности. Старшие синие драконы иногда привлекают к себе на службу воздушных элементалей и других существ.\n
**Коллекционеры самоцветов.** Синие драконы особенно ценят самоцветы, хотя и собирают всё, что кажется им ценным. Считая синий цвет наиболее благородным и прекрасным, они выше других камней ценят сапфиры и предпочитают ювелирные украшения и магические предметы, украшенные именно этими камнями. \n
Синие драконы закапывают наиболее ценные из своих сокровищ глубоко в песок, а менее ценные украшения разбрасывают на видных местах, которые на самом деле являются скрытыми ямами, чтобы покарать и уничтожить возможных воров.`
const redDragonDescription = `Наиболее алчные из истинных драконов, красные драконы безустанно ищут способ пополнить свои сокровищ. Они исключительно тщеславны, даже по драконьим меркам. Их самомнение отражается в надменном обращении и презрении к другим существам.\n
Запах серы и пемзы окутывает красного дракона, которого легко узнать по изогнутым назад рогам и перепончатому гребню вдоль хребта. Из его ноздрей на похожей на клюв морде постоянно исходит дым, а в глазах вспыхивают огоньки, когда он злится. Размах крыльев красных драконов больше, чем у любого другого вида цветных драконов, а цвет их переходит от красного к иссиня-чёрному цвету пережжённого металла у края крыльев.\n
Чешуя вирмлинга красного дракона блестящая и ярко-алая, но темнеет и тускнеет с возрастом, становясь всё толще и крепче. Также их зрачки с возрастом исчезают, и глаза старейших красных драконов становятся похожи на колодцы расплавленной лавы.\n
**Хозяева гор.** Красные драконы предпочитают селиться в гористой местности, каменистых пустошах и других местах, где они смогли бы забраться достаточно высоко, чтобы осматривать свои владения. Время от времени это приводит их к конфликту с обитающими на холмах медными драконами.\n
**Высокомерные тираны.** Красные драконы часто впадают в разрушительную ярость и действуют импульсивно, если их разозлить. Многие культуры считают их классическими представителями злых драконов.\n
Ни один другой драконий вид даже отдалённо не сравнится с красными драконами по высокомерию. Эти существа считают себя не менее, чем королями и императорами, а другие драконьи виды ставят себе в подчинение. Веря в то, что они помазаны Тиамат править от её имени, красные драконы считают всех существ в мире своими подчинёнными.\n
**Рабы и статус.** Красные драконы — изоляционисты, и яростно защищают свою территорию. Впрочем, они стремятся узнать о событиях в мире, используя низших существ в качестве информаторов, посыльных и шпионов. Они наиболее заинтересованы в новостях о других красных драконах, с которыми они постоянно соревнуются.\n
Когда им необходимы слуги, красные драконы требуют верности от хаотично-злых гуманоидов. Если те отказывают им в преданности, драконы убивают лидеров племени и заявляют свою власть над выжившими. Существа, служащие красным драконам, живут в постоянном страхе быть испепелёнными или сожранными за то, что не угодили дракону. Большую часть времени они проводят в попытках задобрить владыку, чтобы остаться в живых.\n
**Одержимые коллекционеры.** Красные драконы ценят богатство более всего, а их клады поистине легендарны. Они присваивают всё, что имеет какую-то ценность и часто могут на глаз определить ценность вещицы, ошибаясь лишь на пару медяков. Красные драконы особенно любят сокровища, отобранные у убитых ими могучих врагов, выставляя такие вещи напоказ, как доказательство своего превосходства.\n
Красный дракон отлично помнит ценность и происхождение каждого предмета в своей сокровищнице, также как и его точное место. Он может заметить пропажу одной монеты и впасть от этого в ярость, бросаясь в погоню за вором, чтобы безжалостно расправиться с ним. Не обнаружив вора, дракон будет бушевать, разрушая города и деревни в попытке утолить свой гнев. `
const greenDragonDescription = `Наиболее изворотливые и коварные из истинных драконов, зелёные драконы используют хитрость и обман, чтобы получить преимущество над врагом. Вредные по натуре и злые до глубины души, они испытывают особое удовольствие, расстраивая планы и совращая добросердечных. В древних лесах, в которых они бродят, зелёные драконы демонстрируют агрессию скорее, чтобы заполучить больше власти и богатств с наименьшими усилиями, чем ради территории.\n
Зелёного дракона можно узнать по изогнутой линии челюсти и хохолку, начинающемуся у глаз и спускающемуся вдоль хребта и достигающего наибольшей высоты у основания черепа. У зелёного дракона нет внешних ушей, вместо которых у него располагаются кожистые пластины, спускающиеся по обеим сторонам к шее.\n
Тонкая чешуя вирмлингов зелёных драконов настолько тёмная, что кажется чёрной. С возрастом их чешуйки увеличиваются и светлеют, окрашиваясь в цвета леса, изумрудные и оливковые оттенки зелёного, что помогает им скрываться в окружающем лесу. Крылья их покрыты пятнистым узором, тёмным у передней кромки и более светлым у задней.\n
Лапы зелёных драконов длиннее, чем у других видов драконов, что позволяет им легко проходить над подлеском и тем, что лежит на земле. С помощью такой же длинной шеи более старые зелёные драконы могут смотреть над деревьями, не приподнимаясь на задних лапах.\n
**Прихотливые охотники.** Зелёные драконы охотятся, патрулируя территорию леса по воздуху и земле, пожирая всех увиденных существ. Они могут есть кустарники и маленькие деревца, если сильно проголодаются, но их излюбленная добыча — эльфы.\n
Зелёные драконы — законченные лжецы и мастера двусмысленных речей. Они предпочитают запугивать меньших существ, но действуют более тонко, общаясь с другими драконами. Зелёные драконы нападают на животных и чудовищ без повода, особенно когда речь идёт об угрозе его территории. Имея дело с разумными существами, зелёные драконы демонстрируют жажду власти, которая идёт вразрез с драконьей тягой к сокровищам, и всегда ищут существ, которые могут помочь им претворить их амбиции в жизнь.\n
Зелёный дракон преследует своих жертв, пока планирует своё нападение, иногда скрываясь по нескольку дней. Если цель достаточно слаба, дракон смакует ужас, который внушает его внешность, прежде чем наброситься. Он никогда не убивает всех своих жертв, предпочитая использовать запугивание, чтобы установить контроль над выжившими. Так он узнаёт всё, что может, о деятельности существ близ его территории, в особенности о сокровищах неподалёку. Зелёные драконы иногда отпускают своих пленников, если за них можно получить выкуп. В противном случае существо должно доказать свою повседневную ценность для дракона или стать его жертвой.\n
**Великие комбинаторы.** Коварные и подлые существа, зелёные драконы подчиняют других существ своей воле, узнавая их самые потаённые желания и позже пользуясь этим. Тот, кто достаточно глуп, чтобы взять зелёного дракона в подчинённые, рано или поздно узнает, что тот лишь притворялся слугой, чтобы узнать больше о своём «хозяине».\n
При манипулировании другими существами речи зелёных драконов сладки, гладки и изысканны. Среди своих собратьев же они горласты, грубы и нахальны, особенно когда общаются с драконами равного им возраста и статуса.\n
**Конфликт и развращение.** Зелёные драконы иногда конфликтуют с другими драконами за территорию там, где их леса заходят на другие местности. Тогда зелёный дракон обычно притворяется, что отступает, с тем лишь, чтобы понаблюдать и выждать — иногда несколько десятилетий — когда представится шанс убить другого дракона и завладеть его логовом и кладом.\n
Зелёные драконы приемлют услужение разумных существ, таких как гоблиноиды, эттеркапы, эттины, кобольды, орки и юань-ти. Они также получают особое удовольствие, развращая и подчиняя эльфов своей воле. Зелёные драконы иногда с помощью страха подтачивают разум своих подручных до почти безумного состояния, распространяя туман из их кошмаров по всему лесу.\n
**Живые сокровища.** Излюбленные сокровища зелёного дракона — это разумные существа, подчинённые его воле, такие как прославленные герои, известные мудрецы и популярные барды. Из материальных сокровищ зелёные драконы предпочитают изумруды, резьбу по дереву, музыкальные инструменты и скульптуры гуманоидов.`
const whiteDragonDescription = `Меньшие, менее разумные и наиболее звероподобные из цветных драконов, белые драконы обитают в холодных условиях, предпочитая снежные области и ледяные горы. Эти драконы злобны, жестоки и ведомы голодом и жадностью.\n
Белые драконы отличаются диким взглядом, обтекаемой формой тела и острым хохолком. Чешуя вирмлингов белых драконов сверкает идеальной белизной. С возрастом их блеск исчезает, и некоторые из чешуек темнеют, к старости создавая бледно-голубые и светло-серые пятна. Такая расцветка помогает драконам во время охоты спрятаться среди льдов и камней или затеряться на фоне затянутого тучами неба.\n
**Дикие и мстительные.** Белым драконам не хватает хитрости и тактики, присущей другим драконам. Но их звериная природа делает их лучшими охотниками среди драконьего племени, полностью сосредоточенными на выживании и уничтожении врагов. Белые драконы питаются только замороженной пищей, поглощая существ, убитых их дыханием, пока те всё ещё твёрдые и замороженные. Не съеденных убитых они заключают в лёд или закапывают в снег у логова. Обнаружение такого «запаса» служит верным знаком того, что белый дракон обитает поблизости.\n
Белые драконы также держат тела своих величайших врагов в качестве трофеев, замораживая их трупы на видных местах, чтобы после, глядя на них, злорадствовать. Останки великанов, реморазов и других драконов часто располагаются на виду в логове белого дракона, как предупреждение нарушителям.\n
Белые драконы, хотя и не наделены выдающимся интеллектом, но обладают экстраординарной памятью. Они помнят каждую мельчайшую обиду и поражение, которое они познали, и вершат зловещие расправы ради мести своим противникам. Ими часто оказываются серебряные драконы, чьи логова располагаются на схожих территориях. Белые драконы, как и другие драконы, могут говорить, но делают это с неохотой и лишь когда это крайне необходимо.\n
**Одиночки.** Белые драконы избегают других драконов, кроме белых драконов противоположного пола. Но даже найдя себе пару, белые драконы держатся вместе лишь до тех пор, пока не зачнут потомков, и после опять отправляются в изоляцию.\n
Белые драконы не терпят соперников возле своего логова. Вследствие этого, белый дракон нападает на других существ без предупреждения, считая их либо слишком слабыми, либо слишком сильными, чтобы жить. Единственные существа, которые обычно служат белым драконам — это разумные гуманоиды, которые достаточно сильны, чтобы пережить гнев дракона, и смириться с регулярными потерями из-за его голода. Обычно это поклоняющиеся дракону кобольды, которые часто встречаются в драконьих логовах.\n
Могучие существа иногда подчиняют белых драконов с помощью физической или волшебной силы. Ледяные великаны выходят на бой с белыми драконами, чтобы доказать свою силу и упрочить своё положение в клане. Обломки их костей устилают логова многих белых драконов. Тем не менее, белый дракон, побеждённый ледяным великаном, часто становится его слугой, принимая более могучее существо своим хозяином в обмен на утверждение своего собственного господства над другими существами, которые служат великану или выступают против него.\n
**Сокровища во льдах.** Белые драконы любят холодный блеск льда и предпочитают сокровища, обладающие схожими свойствами, в частности — бриллианты. Однако в логовах, расположенных в ледяных удалённых местах, сокровища чаще состоят из бивней моржей и мамонтов, скульптур из китовых костей, носовых украшений кораблей, шкур и волшебных предметов, захваченных у излишне смелых искателей приключений.\n
Монеты и драгоценные камни лежат, разбросанными по всему логову белого дракона, сверкая, как звезды, когда свет падает на них. Большие сокровища и сундуки покрыты слоями инея от дыхания белого дракона или находятся в безопасности под толстым слоем прозрачного льда. Огромная сила дракона позволяет ему легко добраться до своего богатства, в то время как более слабые существа должны будут потратить многие часы, раскалывая или растапливая лёд, чтобы добраться до основных сокровищ дракона.\n
Безупречная память белого дракона даёт ему возможность вспомнить, как он получил каждую монету, самоцвет и каждый магический предмет в своей сокровищнице, что связывает каждый предмет с определённой победой. Белых драконов, как известно, очень сложно подкупить, поскольку любые такие предложения воспринимаются как сомнение в их способности просто убить предлагающего откуп и присвоить его сокровища.`

module.exports.blackDragonDescription = blackDragonDescription
module.exports.blueDragonDescription = blueDragonDescription
module.exports.boneDevilSummoner = boneDevilSummoner
module.exports.brassDragonDescription = brassDragonDescription
module.exports.bronzeDragonDescription = bronzeDragonDescription
module.exports.copperDragonDescription = copperDragonDescription
module.exports.coven = coven
module.exports.goldDragonDescription = goldDragonDescription
module.exports.greenDragonDescription = greenDragonDescription
module.exports.iceDevilSummoner = iceDevilSummoner
module.exports.redDragonDescription = redDragonDescription
module.exports.silverDragonDescription = silverDragonDescription
module.exports.whiteDragonDescription = whiteDragonDescription

module.exports = {
  blackDragonDescription,
  blueDragonDescription,
  boneDevilSummoner,
  brassDragonDescription,
  bronzeDragonDescription,
  copperDragonDescription,
  coven,
  goldDragonDescription,
  greenDragonDescription,
  iceDevilSummoner,
  redDragonDescription,
  silverDragonDescription,
  whiteDragonDescription,
}
