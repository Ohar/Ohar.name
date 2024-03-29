const React = require('react')

module.exports = {
  id: 'thrall',
  name: 'Раб',
  description: [
    ``,
  ],
  nameList: [''],
  featureList: [
    {
      name: 'Взгляд',
      variantList: ['', ''],
    },
    {
      name: 'Причёска',
      variantList: ['', ''],
    },
    {
      name: 'Одежда',
      variantList: ['', ''],
    },
    {
      name: 'Тело',
      variantList: ['', '', ''],
    },
  ],
  hpBonus: 0,
  damageDice: 0,
  striveList: [
    {
      name: '',
      text: '',
    },
  ],
  backgroundIdList: [
    '',
  ],
  startMoveIdList: [
    '',
  ],
  advancedMoveIdList: [
    '',
  ],
  capstoneMoveIdList: [
    '',
  ],
  specialMoves: {
    title: '',
    list: [
      '',
    ]
  },
}

const foo = `

<p><strong>Когда вы умираете и взываете по имени к Тому Что Живёт Внизу и молите чтобы оно вмешалось</strong>, оно это
    делает. Смерть отпускает вас; назовите своего Повелителя, замените своё Стремление, получите стартовые ходы и
    выберите 1 Отметину.</p>

<h3><strong>Ваш повелитель</strong></h3>
<p>Один из Тех Кто Живёт Внизу которого вы молили? Тот, который вытащил вашу душу с порога Чёрных Врат и который
    укрывает вас от Бледного Охотника? Вы теперь его собственность.</p>
<p><strong>Назовите</strong> своего Повелителя, вместе со всеми известными вам титулами: __________________________</p>
<p>Например:</p>
<ul>
    <li>Хек'тумель, Бледный Змей! Ползающий в темноте! Смерть в его очах!</li>
    <li>Эл'раш-Орра, Властелин Сфер, Властелин Глаз</li>
    <li>Даагон, Который Ждёт в Тёмных Водах</li>
    <li>Хлад, Пожиратель, Вечная Пасть</li>
    <li>Я'ав'кара, Заввывающий Ветер, Освежовывающий Плоть</li>
</ul>

<h1>Стремление Тралла</h1><h3><strong>Увлечение</strong></h3>
<p>Изучать свои силы, вашего Повелителя, ваше новое существование</p>
<h3><strong>Сопротивление</strong></h3>
<p>Бороться против своего Повелителя и цепляться за человечность</p>
<h3><strong>Позор</strong></h3>
<p>Скрывать и отрицать свою истинную природу</p>

<h2>Вы получаете все эти ходы:</h2>

<h3><strong>Одобрение</strong></h3>
<p>Ваше Одобрение начинается на 0 и не может стать больше 3. <strong>Когда у вас 3 Одобрения и вы должны получить ещё
    одно</strong>, уменьшите своё Одобрение до 0 и выберите одно:</p>
<ul>
    <li>
        <p>Задайте вопрос своему Повелителю и получите преимущество на следующий ход чтобы действовать на основании
            ответа</p>
    </li>
    <li>
        <p>Получите новую Отметину по вашему выбору, затем попросите Ведущего выбрать Отметину которой у вас ещё нет —
            вы никогда не сможете её получить.</p>
    </li>
</ul>

<h3><strong>Импульс</strong></h3>
<p>Попросите Ведущего выбрать одно чтобы отразить природу и волю своего Повелителя:</p>
<ul>
    <li>
        <p>Разжигать конфликты, путаницу, недоверие</p>
    </li>
    <li>
        <p>Разрушать надежду/веру/честь/представление о себе</p>
    </li>
    <li>
        <p>Прятать/хоронить/душить вещи или идеи</p>
    </li>
    <li>
        <p>Лишать других того, в чём они нуждаются</p>
    </li>
    <li>
        <p>Причинять вред, жестоко и без необходимости</p>
    </li>
    <li>
        <p>Осквернять/портить/приводить в негодность ценные вещи</p>
    </li>
    <li>
        <p>Шокировать/наводить ужас/пугать на других</p>
    </li>
    <li>
        <p>____________________________</p>
    </li>
</ul>

<p><strong>Когда Ведущий навязывает вам действовать в соответствии с вашим Импульсом</strong>, получите 1 Одобрения если
    вы делаете как велено. Если вы сопротивляетесь, бросьте+МДР.</p>
<p><strong>На 10+</strong> действуйте как хотите</p>
<p><strong>На 7-9</strong> выберите одно:</p>
<ul>
    <li>
        <p>Стойте в ошеломлении, борясь за контроль</p>
    </li>
    <li>
        <p>Начните действовать как велено, но остановите себя прежде чем зайти слишком далеко</p>
    </li>
    <li>
        <p>Навредите себе (получите к6 игнорирующего броню урона) чтобы вернуть контроль.</p>
    </li>
</ul>
<p><strong>На 6-</strong> вы придёте в себя позже, делая бог-весть-что.</p>
<p><strong>Когда вы действуете на основе Импульса без навязывания и ваши действия создают проблемы для вас или
    союзников</strong>, получите 1 Одобрения.</p>

<h3><strong>Тёмная помощь</strong></h3>
<p><strong>Когда вы умираете или вас убивают на месте</strong>, ваш Повелитель вступается за вас. Вы восстановитесь,
    здесь и сейчас, или в выбранном Ведущем времени и месте.</p>
<p>Затем, бросьте +Одобрение.</p>
<p><strong>На 10+</strong> выберите одно.</p>
<p><strong>На 7-9</strong> выберите два.</p>
<p><strong>На 6-</strong> получите все три.</p>
<ul>
    <li>
        <p>Получите новую Отметину по выбору Ведущего</p>
    </li>
    <li>
        <p>Выберите Отметину которой у вас ещё нет — вы никогда не сможете её получить</p>
    </li>
    <li>
        <p>Ваш Повелитель даёт вам задание — пока вы его не выполните, ваше Одобрение останется на 0.</p>
    </li>
</ul>
<p>Вне зависимости от результата, потеряйте всё Одобрение.</p>

<h3><strong>Нечестивый сосуд</strong></h3>
<p><strong>Когда вы должны получить Отметину, но вы больше не можете их получать</strong>, ваше человечность полностью
    потеряна. Вы становиться Угрозой под контролем Ведущего. Создайте нового персонажа.</p>

<h1>Отметины</h1>

<h3><strong>Ходячая гниль</strong></h3>
<p>Вы не подвержены воздействию ядов, болезней, едких субстанций и укусов насекомых или вредителей. Вещи в вашем
    присутствии гниют, трескаются, разлагаются и портятся.</p>
<p><strong>Когда вы выбрасываете дубли (например 4 и 4)</strong>, что-то что у вас есть, приходит в негодность. Ведущий
    скажет что и как.</p>

<h3><strong>Дитя глубин</strong></h3>
<p>Уменьшите своё максимальное ОЗ на 2.</p>
<p>Вы можете дышать под водой и не страдаете от холода или давления. Ваша кожа покрывается чешуёй. <strong>Если вы целый
    день не окатывали себя водой</strong>, получите Травму.</p>
<p><strong>Находясь у водоёма</strong>, вы можете потратить 1 Одобрения чтобы призвать склизкое щупальце которое будет
    делать то что вы скажете. Считайте его как Последователя: <em>скрытное</em>, <em>неумолимое</em>, 6 ОЗ, урон к10
    (<em>удар копья, мощное, хватает</em>); Инстинкт: выжимать жизнь из чего-то; Цена: утопленные жизни.</p>

<h3><strong>Маска смерти</strong></h3>
<p>Вы находите или создаёте ужасающую маску. Когда вы <strong>не носите свою маску</strong>, у вас помеха на все ходы.
</p>
<p>Когда вы <strong>носите свою маску</strong>, нежить считает вас одним из своих.</p>
<p>Когда вы <strong>носите свою маску</strong>, вы можете потратить 1 Одобрения чтобы наполнить любое живое существо,
    которое вы видите, ужасом. Оно должно выбрать: бежать, съёжиться или устоять. Если оно выбирает устоять, вы
    получаете преимущество на свой следующий бросок против него.</p>

<h3><strong>Ртутные сны</strong></h3>
<p>Уменьшите своё максимальное ОЗ на 2.</p>
<p><strong>Разбивая лагерь</strong>, всем кто разделяет с вами отдых, снятся кошмары и они получают помеху на следующий
    ход.</p>
<p>Вы можете потратить 1 Одобрения чтобы вызвать у кого-то ложные ощущения, до тех пор, пока вы можете его видеть.</p>

<h3><strong>Ненасытный</strong></h3>
<p>Вы ощущаете неутолимый голод. <strong>Получите</strong> ещё один Импульс «Бессмысленно пожирать плоть».</p>
<p><strong>Разбивая лагерь</strong>, вы тратите дополнительное использование Припасов.</p>
<p>Вы можете потратить 1 Одобрение чтобы:</p>
<ul>
    <li>
        <p>Коснуться чего-то. Пока продолжаете касаться, любой, кто может видеть то, чего вы касаетесь, желают это.</p>
    </li>
    <li>
        <p>Получить ужасающую, рвущую металл, пасть (рука, пробивание 3, месиво) настолько долго, насколько вы захотите,
            и способность есть и переваривать всё что угодно.</p>
    </li>
</ul>

<h3><strong>Красный гнев</strong></h3>
<p>Уменьшите своё максимальное ОЗ на 2.</p>
<p>Когда Ведущий навязывает вам что-то, связанное с насилием, у вас помеха на то чтобы сопротивляться.</p>
<p><strong>Давая своей ярости волю и набрасываясь на кого-то</strong> (рука, взмах меча), потратьте 1-3 Одобрения и
    бросьте +количество потраченного Одобрения.</p>
<p><strong>На 10+</strong> нанесите 2к8 урона (месиво, мощный) и шокируйте, приведите в ужас или впечатлите
    наблюдателей.</p>
<p><strong>На 7-9</strong> также как на 10+, но вы продолжите атаковать свою жертву (или её труп) в бездумной ярости, не
    считаясь с другими опасностями.</p>

<h3><strong>Холодные объятия тени</strong></h3>
<p>Уменьшите своё максимальное ОЗ на 2. Вы не отбрасываете тени и не имеете отражения.</p>
<p><strong>Когда на вас падает солнечный или священный свет</strong>, вы не можете тратить Одобрение (по любой причине).
</p>
<p>Иначе, вы можете тратить Одобрение чтобы:</p>
<ul>
    <li>
        <p>Остаться незамеченным, даже если вас ищут или после того как вы сделали что-то привлекающее внимание</p>
    </li>
    <li>
        <p>Не оставить следов своего присутствия или прохода</p>
    </li>
    <li>
        <p>Заставить поверить в ложь, как если бы она была очевидной истиной.</p>
    </li>
</ul>

<h3><strong>Говорить правду, нашёптывать секреты</strong></h3>
<p>Уменьшите своё максимальное ОЗ на 2. Вы не отбрасываете тени и не имеете отражения.</p>
<p><strong>Вы можете потратить 1 Одобрения чтобы посмотреть кому-то в глаза и узнать…</strong> (выберите одно):</p>
<ul>
    <li>
        <p>Что он хочет превыше всего?</p>
    </li>
    <li>
        <p>Какой у него тайный стыд?</p>
    </li>
    <li>
        <p>Чего он больше всего боится?</p>
    </li>
    <li>
        <p>Какое его самое плохое воспоминание?</p>
    </li>
</ul>
<p><strong>Используя ответ против этого собеседника</strong> бросайте с преимуществом.</p>

<h3><strong>Мучительное благословение</strong></h3>
<p>Ваши раны медленно заживают. Когда вы восстанавливаете ОЗ, вы восстанавливаете только половину от того количества
    которое должны. Но, вам никогда не нужно Спасаться от угрозы из-за боли, потери крови или слабости из-за ран.</p>
<p><strong>Произнося слово причиняющее мучения</strong>, назовите кого-то поблизости, потратьте 1-3 Одобрения и бросьте
    +количество потраченного Одобрения.</p>
<p><strong>На 10+</strong> он получает 2к4 игнорирующего броню урона и его корёжит от боли&nbsp;— слабые жертвы
    выводятся из строя, сильные же корчатся всего несколько мгновений.</p>
<p><strong>На 7-9</strong> он получает 1к6 игнорирующего броню урона и слабые жертвы корчатся несколько мгновений.</p>


        
`