const React = require('react')

module.exports = {
  id: 'monk',
  name: 'Монах',
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

            <div class="scrollable">
                <article class="journal-entry-page text level1" data-page-id="4e9lyQc4la5jICXu"><section class="journal-page-content">
    <div style="text-align:center"><img src="systems/dungeonworld/assets/icons/equipment/wrist/wrap-cloth-brown.webp"></div><p><em style="box-sizing:border-box;user-select:text">Тишина родного монастыря, усердные тренировки и долгие медитации, вкупе с отказом от некоторых земных слабостей, позволили вам открыть в себе невиданный потенциал. Вы не служите высшей силе и не пытаетесь изменить законы мироздания — вы настроились на ритм этого мира и стали его частью.&nbsp;</em></p><p><em style="box-sizing:border-box;user-select:text">Выйдя в мир, вы повидали множество людей — бродяг, убитых жизнью, богачей, купающихся в благах цивилизации, рыцарей, идущих на подвиг и подонков, готовых убить за красивую побрякушку. Но вы знаете что всё это мелочи, песок, сыплющийся сквозь пальцы. Они живут не замечая гармонии мира и не слышат его ритма, словно идут против бурного потока, силой прокладывая себе путь.&nbsp;</em></p><p><em style="box-sizing:border-box;user-select:text">Вы же, словно вода, можете течь, а можете разрушать. Может, с вашим советом, и они поймут это.</em></p><p>&nbsp;</p><h2 data-anchor="imena">Имена</h2><p>Куа-Чин, ЛиЛи, Летящая Ладонь, Утренний Ветер, Уйгуна, Тускул, Дохсун, Бэйбэй, Саяра, Ми-Йонг</p><p>&nbsp;</p><h2 data-anchor="vneshnostь">Внешность</h2><p>Выберите одну черту по каждому пункту:</p><ul><li style="box-sizing:border-box;user-select:text">Мудрые глаза, Жадные глаза или Глубокие глаза</li><li style="box-sizing:border-box;user-select:text">Бритая голова, Длинная коса или Повязка на голову</li><li style="box-sizing:border-box;user-select:text">Монашеская мантия, Униформа боевых искусств или Свободная одежда</li><li style="box-sizing:border-box;user-select:text">Подтянутое тело, Татуированное тело или Изящное тело</li></ul><h2 data-anchor="harakteristiki">Характеристики</h2><p>Ваши максимальные хиты: <strong>18+ТЕЛ</strong></p><p>Ваш базовый урон равен <a class="inline-roll roll" data-mode="roll" data-flavor="" data-formula="d8"><i class="fas fa-dice-d20"></i>d8</a>.</p><p>Распределите эти модификаторы по характеристикам <strong>+2, +1, +1, +0, +0, -1</strong></p><p>&nbsp;</p><h1 data-anchor="lichnostь-personazha"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Личность персонажа</span></h1><h3 data-anchor="aspekty"><strong>Аспекты</strong></h3><p>Аспекты описывают важные особенности вашего персонажа, его жизненный опыт, происхождение и родословную и социальные отношения. В игре это проявляется в качестве механических бонусов. Подробнее вы можете прочитать <a class="content-link" draggable="true" data-uuid="Compendium.world.gm-screen.JournalEntry.ZLYUyWP6kSJrNmat" data-id="ZLYUyWP6kSJrNmat" data-type="JournalEntry" data-pack="world.gm-screen" data-tooltip="Журнал"><i class="fas fa-book-open"></i>здесь</a>.</p><p>Придумайте персонажу три <a class="content-link" draggable="true" data-uuid="Compendium.world.gm-screen.JournalEntry.ZLYUyWP6kSJrNmat" data-id="ZLYUyWP6kSJrNmat" data-type="JournalEntry" data-pack="world.gm-screen" data-tooltip="Журнал"><i class="fas fa-book-open"></i>аспекта</a>: <strong>Концепцию</strong> и два обычных аспекта.</p><p>Для начала хватит только Концепции, остальные аспекты вы можете заполнить по мере игры.</p><p></p><h3 data-anchor="stremlenie"><span style="font-family:Arial, sans-serif"><strong style="box-sizing:border-box;user-select:text">Стремление</strong></span></h3><p><span style="font-family:Arial, sans-serif">Выберите до трёх Стремлений своего персонажа. Выбирайте из вариантов ниже, придумайте своё собственное или воспользуйтесь <a class="content-link" draggable="true" data-uuid="Compendium.world.gm-screen.JournalEntry.PLhAByHQsTL4cZQU" data-id="PLhAByHQsTL4cZQU" data-type="JournalEntry" data-pack="world.gm-screen" data-tooltip="Журнал"><i class="fas fa-book-open"></i>списком Стремлений</a>.</span></p><p>Стремления олицетворяют то как персонаж взаимодействует с миром и следование или иначе использование их в игре награждается опытом в <a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.aGbaj6PeLdm3H4zc" data-id="aGbaj6PeLdm3H4zc" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>конце сессии</a>.</p><p></p><blockquote><h3 style="box-sizing:border-box;user-select:text" data-anchor="masterstvo"><strong style="box-sizing:border-box;user-select:text">Мастерство</strong></h3><p style="box-sizing:border-box;user-select:text">Победите достойного противника своими боевыми искусствами, без оружия</p></blockquote><blockquote><h3 style="box-sizing:border-box;user-select:text" data-anchor="prosvetlenie"><strong style="box-sizing:border-box;user-select:text">Просветление</strong></h3><p style="box-sizing:border-box;user-select:text">Разоблачить или раскрыть истинную причину проблемы в мире.</p></blockquote><blockquote><h3 style="box-sizing:border-box;user-select:text" data-anchor="piligrim"><strong style="box-sizing:border-box;user-select:text">Пилигрим</strong></h3><p style="box-sizing:border-box;user-select:text">Путешествуйте или откройте для себя духовно значимое место.</p></blockquote><p>&nbsp;</p><p></p><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong style="box-sizing:border-box;user-select:text">Опциональные вопросы чтобы лучше понимать своего персонажа:</strong></span><span style="font-family:Arial, sans-serif"><strong style="box-sizing:border-box;user-select:text;font-family:Arial, sans-serif">:</strong></span></p><blockquote><ul style="box-sizing:border-box;user-select:text"><li style="box-sizing:border-box;user-select:text"><span style="font-family:Arial, sans-serif">Каково было место, где вы тренировали свои навыки? Кто был&nbsp;вашим учителем?</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Arial, sans-serif">Как обычно относятся к монахам другие люди?</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Arial, sans-serif">Как насчет вашей внешности или имущества, символизирующего ваши обеты?</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Arial, sans-serif">Что больше всего искушает вас нарушить, предать или отказаться от своих обетов?</span></li></ul></blockquote><p></p><p></p><h3 data-anchor="teperь-vyberite-predystoriyu-i-poluchite-sootvetstvuyushij-hod:"><strong>Теперь выберите предысторию и получите соответствующий ход:</strong></h3><blockquote><h3 style="box-sizing:border-box;user-select:text" data-anchor="otshelьnik"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.cRNwnnCZDlKnS8la" data-id="cRNwnnCZDlKnS8la" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Отшельник</a></strong></h3><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.9m6r1jwhrt1u4qYz" data-id="9m6r1jwhrt1u4qYz" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Медитируя</a> в тишине природы, </strong>бросайте с преимуществом.</p><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.IFAcgBsxriir9o5n" data-id="IFAcgBsxriir9o5n" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Разбивая лагерь</a></strong>, вы можете потратить Течение вместо сна или Припасов.</p></blockquote><p>&nbsp;</p><blockquote><h3 style="box-sizing:border-box;user-select:text" data-anchor="drachun"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.wswxz9nGWtmVYXYb" data-id="wswxz9nGWtmVYXYb" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Драчун</a></strong></h3><p><strong>Сражаясь с силой великого тайфуна</strong>, ваши безоружные атаки становятся <span style="text-decoration:underline"><span style="text-decoration:underline">мощными</span></span> вместо <span style="text-decoration:underline"><span style="text-decoration:underline">точных</span></span>.</p><p><strong>Вступая в битву</strong>, получите 1 Течения.</p></blockquote><p>&nbsp;</p><blockquote><h3 style="box-sizing:border-box;user-select:text" data-anchor="pacifist"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.8Wx550fAPuI66kTA" data-id="8Wx550fAPuI66kTA" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Пацифист</a></strong></h3><p style="box-sizing:border-box;user-select:text"><strong>Когда вы отказываетесь отвечать насилием</strong>, и ваш следующий ход это <a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.zqcVmuzrfua8v6Hy" data-id="zqcVmuzrfua8v6Hy" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Договориться</a> или <a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.JTPkvgW4b25aK43U" data-id="JTPkvgW4b25aK43U" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Встать на защиту</a>, бросайте его с преимуществом.</p><p><strong>Касаясь кого-то чтобы вернуть его к миру</strong>, вы можете потратить Течение чтобы успокоить его, избавляя его от страха и сомнений и восстанавливая ему 1к4 ОЗ.</p></blockquote><p><span style="font-family:Arial, sans-serif">&nbsp;</span></p><p></p><h1 data-anchor="osnova-klassa-personazha"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Основа класса персонажа&nbsp;</span></h1><h2 data-anchor="vy-nachinaete-igru-so-sleduyushimi-hodami:">Вы начинаете игру со следующими ходами:</h2><p></p><h3 data-anchor="meditaciya"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.9m6r1jwhrt1u4qYz" data-id="9m6r1jwhrt1u4qYz" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Медитация</a></strong></h3><p><strong>Тратя несколько минут в мирной обстановке чтобы очистить свои мысли</strong>, потеряйте свой Фокус который у вас есть и бросьте+МУД.</p><p><strong>На 10+</strong> получите 3 Фокуса.</p><p><strong>На 7-9</strong> получите 2 Фокуса.</p><p><strong>На 6-</strong> всё равно получите 1 Фокуса, но Ведущий также делает ход.</p><p><em>Вы не можете медитировать снова, пока не потратите весь Фокус.</em></p><p><em>Вы не можете иметь Фокус пока вы носите броню или щит.</em></p><p></p><h3 data-anchor="putь:__________________"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.shDE1KozwtBEXXTs" data-id="shDE1KozwtBEXXTs" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Путь:__________________</a></strong></h3><p><strong>Ваше тело это оружие само по себе</strong>. Назовите и опишите свой стиль боевых искусств. Ваши безоружные удары имеют дальность <em>рука</em> и <em>точные</em> и вы можете тратить Течение чтобы:</p><ul><li><p>Ваш следующий безоружный удар наносит +1к4 урона.</p></li><li><p>Избегите препятствия на своём пути чтобы оказаться в радиусе досягаемости ваших атак.</p></li></ul><p><strong>Выберите два обета</strong> которым вы поклялись следовать в своей жизни.</p><p><strong>Придерживаясь своих обетов несмотря на опасность, проблемы или неудобства</strong>, получите 1 Фокус.</p><ul><li><p>Бедность</p></li><li><p>Честность</p></li><li><p>Мир</p></li><li><p>Чистота</p></li><li><p>Сострадание</p></li><li><p>Милосердие</p></li><li><p>Честь</p></li><li><p>Секретность</p></li><li><p>Храбрость</p></li><li><p>Веселье</p></li><li><p>Дружба</p></li><li><p>Знания</p></li><li><p>_____________</p></li><li><p>_____________</p></li></ul><p></p><p></p><h2 data-anchor="zatem,-vyberite-dva:">Затем, выберите два:</h2><p><em>Вы также можете выбирать эти ходы как обычные Сложные ходы.</em></p><p></p><h3 data-anchor="stojka-gory"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.NjGrGkXDmO0LP5tE" data-id="NjGrGkXDmO0LP5tE" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Стойка горы</a></strong></h3><p><strong>Удерживая свою позицию</strong>, вы можете тратить Течение чтобы:</p><ul><li><p>Закрепиться на этом месте, вас не смогут сдвинуть назад, поднять или иначе сдвинуть пока вы сами не сдвинетесь.</p></li><li><p>Следующий бросок урона против вас получит помеху</p></li></ul><p></p><h3 data-anchor="lapa-drakona"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.gdrn9CgEl9ree9u8" data-id="gdrn9CgEl9ree9u8" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Лапа дракона</a></strong></h3><p><strong>Когда вы бьёте с силой ревущего огня</strong>, вы можете потратить Течение чтобы:</p><ul><li><p>Получить преимущество на свой урон и добавить свойство <em>мощная</em> к своей атаке.</p></li><li><p>Мгновенно проломить, сломать или уничтожить обычный предмет.</p></li></ul><p></p><h3 data-anchor="lapa-obezьyany"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.C9LqgOPzXx4ttKkg" data-id="C9LqgOPzXx4ttKkg" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Лапа обезьяны</a></strong></h3><p><strong>Ударяя врага открытыми ладонями</strong>, вы можете потратить Течение чтобы:</p><ul><li><p>Сдвинуть его куда-то в области вашей досягаемости, сбить его с ног или прижать его к стене.</p></li><li><p>Разоружить врага — заберите его оружие, сломайте конечность, выбейте зубы и т. п.</p></li></ul><p></p><h3 data-anchor="udar-zmei"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.ESsvrN19qxMEvbf7" data-id="ESsvrN19qxMEvbf7" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Удар змеи</a></strong></h3><p><strong>Нанося быстрые удары своими пальцами</strong>, вы можете потратить Течение чтобы:</p><ul><li><p>Получить преимущество на урон и игнорировать броню</p></li><li><p>Отказаться от урона чтобы оглушить или искалечить — сильные враги страдают лишь несколько мгновений, а слабые враги страдают очень долгое время.</p></li></ul><p></p><h3 data-anchor="master-oruzhiya"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.BEIR64q7mWHftko6" data-id="BEIR64q7mWHftko6" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Мастер оружия</a></strong></h3><p>Вы можете выбирать этот ход три раза.</p><p><strong>Каждый раз выбирая этот ход</strong>, выберите тип оружия. Выбранный вами тип оружия получает те же свойства что и ваши безоружные атаки, и вы можете совершать ходы, требующие Течения, с помощью этого оружия.</p><ul><li><p>Дубинки и посохи</p></li><li><p>Мечи</p></li><li><p>Древковое оружие и копья</p></li><li><p>Топоры</p></li></ul><p></p><h2 data-anchor="snaryazhenie">Снаряжение</h2><p><span style="font-family:Arial, sans-serif">Ваша <a class="content-link" draggable="true" data-uuid="Compendium.world.prochie-hody.Item.gi2k50hOxPuXcqau" data-id="gi2k50hOxPuXcqau" data-type="Item" data-pack="world.prochie-hody" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>нагрузка</a> равна <strong>9. </strong>Каждый предмет, включая <a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-gear.Item.a7VgXUQQ3pERhyPy" data-id="a7VgXUQQ3pERhyPy" data-type="Item" data-pack="world.equipment-gear" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Неопределённые</a>, исключая маленькие, добавляет свой вес к общей нагрузке.</span></p><ul><li><p><span style="font-family:Arial, sans-serif"><strong>1-3 </strong>веса это лёгкая нагрузка (вы <em>быстры</em> и <em>тихи</em>)</span></p></li><li><p><span style="font-family:Arial, sans-serif"><strong>4-6 </strong>нормальная нагрузка</span></p></li><li><p><span style="font-family:Arial, sans-serif"><strong>7-9 </strong>тяжёлая (вы <em>медленны</em>, <em>шумны, вам жарко</em> и <em>быстро устаёте</em>)</span></p></li></ul><p><strong style="box-sizing:border-box;user-select:text">Вы начинаете игру с:</strong></p><ul><li style="box-sizing:border-box;user-select:text"><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-gear.Item.CDnPMKvFLdWlRFxb" data-id="CDnPMKvFLdWlRFxb" data-type="Item" data-pack="world.equipment-gear" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Припасами</a> (3 исп, вес 1)</li><li style="box-sizing:border-box;user-select:text"><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-class.Item.v4RjW4hKHSn5sWhR" data-id="v4RjW4hKHSn5sWhR" data-type="Item" data-pack="world.equipment-class" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Знаком или отметиной</a> вашего ордена, монастыря, или учителя, опишите его.  (мал. предмет)</li></ul><p><strong style="box-sizing:border-box;user-select:text">Выберите одно:</strong></p><ul><li style="box-sizing:border-box;user-select:text"><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-class.Item.vMKdNQ3YRhpHPNBo" data-id="vMKdNQ3YRhpHPNBo" data-type="Item" data-pack="world.equipment-class" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Монашеский посох</a> (удар копья, двуручное, точное, вес 1)</li><li style="box-sizing:border-box;user-select:text">3 <a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-class.Item.Qeu3D9DdsWF79b9f" data-id="Qeu3D9DdsWF79b9f" data-type="Item" data-pack="world.equipment-class" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Сюрикена</a> (метательное, близко,  (мал. предмет))</li><li><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-weapons.Item.Bj8EezgO0DZ9OhVQ" data-id="Bj8EezgO0DZ9OhVQ" data-type="Item" data-pack="world.equipment-weapons" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Меч</a> (взмах меча, вес 1)</li></ul><p></p><p></p><h1 data-anchor="slozhnye-hody">Сложные ходы</h1><p></p><h3 data-anchor="pokoj-uma"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.92juH4HHBBmjBELX" data-id="92juH4HHBBmjBELX" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Покой ума</a></strong></h3><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.9m6r1jwhrt1u4qYz" data-id="9m6r1jwhrt1u4qYz" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Медитируя</a></strong>, на 7+ выберите одно:</p><ul><li><p>Получите 1 Течения.</p></li><li><p>Избавьтесь от ментальной Травмы.</p></li><li><p>Союзник который присоединяется к вашей медитации избавляется от ментальной Травмы.</p></li></ul><p></p><h3 data-anchor="razum-prezhde-materii"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.Ubruk6DZFjfJr9rr" data-id="Ubruk6DZFjfJr9rr" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Разум прежде материи</a></strong></h3><p><em>Требуется: <a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.92juH4HHBBmjBELX" data-id="92juH4HHBBmjBELX" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Покой ума</a></em></p><p><strong>Добавьте</strong> ещё и эти варианты в список:</p><ul><li><p>Избавьтесь от физической Травмы</p></li><li><p>Восстановите 1к4 ОЗ</p></li></ul><p></p><h3 data-anchor="idyot-mudrec"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.v3THuaVjSjf9VqnP" data-id="v3THuaVjSjf9VqnP" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Идёт мудрец</a></strong></h3><p><strong>Приходя в мирное поселение</strong>, любой местный мудрец или учёный примет вас как своего гостя и поможет советом, но взамен но может попросить о вашей помощи с какой-то проблемой, Ведущий скажет что.</p><p></p><h3 data-anchor="uroki-uchitelya"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.GrIQSkC2ebGzk4QZ" data-id="GrIQSkC2ebGzk4QZ" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Уроки учителя</a></strong></h3><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.feNkp70TAI9vpPkq" data-id="feNkp70TAI9vpPkq" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Копаясь в памяти</a> и вспоминая слова вашего учителя</strong>, скажите как его мудрость помогает вам в текущей ситуации и бросайте +МУД вместо +ИНТ.</p><p></p><h3 data-anchor="chakra"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.2mRq7ot7CI6Kf2yV" data-id="2mRq7ot7CI6Kf2yV" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Чакра</a></strong></h3><p><strong>Манипулируя балансом внутри себя</strong>, вы можете получить Травму по вашему выбору чтобы получить 1 Течения.</p><p></p><h3 data-anchor="lyogkij-kak-veter"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.hlIf3dW02sWIz2gH" data-id="hlIf3dW02sWIz2gH" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Лёгкий как ветер</a></strong></h3><p><strong>Совершая акт сверхъестественной ловкости, равновесия или координации</strong>, бросьте+ЛОВ.</p><p><strong>На 10+</strong> выберите одно.</p><p><strong>На 7-9</strong> выберите два.</p><ul><li><p>Потратьте 1 Течения (вы можете выбрать этот вариант дважды)</p></li><li><p>Вы оказываетесь где-то где вы не рассчитывали</p></li><li><p>Вы перенапрягаетесь, отметьте физическую Травму.</p></li></ul><p></p><h3 data-anchor="zashita-bystroj-reki"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.5tB5z2IbAwHDV8F2" data-id="5tB5z2IbAwHDV8F2" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Защита быстрой реки</a></strong></h3><p><strong>Двигаясь быстро как текущая река</strong>, вы можете потратить Течение чтобы:</p><ul><li><p>Мгновенно вырваться из физических оков</p></li><li><p>Остановить, отразить, уклониться или даже поймать летящий снаряд когда он достигает вас.</p></li></ul><p></p><h3 data-anchor="vetrennaya-ladonь"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.Q39C90YtTxDCXRcE" data-id="Q39C90YtTxDCXRcE" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Ветренная ладонь</a></strong></h3><p><strong>Когда ваши кулаки двигаются со скоростью ветра</strong>, вы можете потратить Течение чтобы:</p><ul><li><p>Дать своей атаке свойство область, бросить урон единожды и применить его ко всем задетым врагам.</p></li><li><p>Блокировать атаку которая предназначалась вам или кому-то ещё (ополовиньте урон).</p></li></ul><p></p><h3 data-anchor="telo-slovno-kamenь"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.Ki4BeuwdBp5MOoqW" data-id="Ki4BeuwdBp5MOoqW" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Тело словно камень</a></strong></h3><p><strong>Пока у вас есть Течение</strong>, получите +1 брони.</p><p><strong>Когда ваша броня уменьшает урон до 0</strong>, оружие нападавшего раскалывается или ломается о ваше тело.</p><p></p><p>&nbsp;</p><h2 data-anchor="poluchaya-urovni-6-10,-vy-mozhete-vybratь-i-iz-etih-hodov:"><span style="font-family:Arial, sans-serif">Получая уровни 6-10, вы можете выбрать и из этих ходов:</span></h2><p></p><h3 data-anchor="dostigatь-za-zavesu"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.RnB8PwbSUuy6J3nz" data-id="RnB8PwbSUuy6J3nz" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Достигать за завесу</a></strong></h3><p><strong>Пока у вас есть Течение</strong>, ваши атаки могут воздействовать на нематериальных существ.</p><p><strong>Ударяя врага</strong>, вы можете потратить Течение чтобы временно пошатнуть его контроль над магической или сверхъестественной способностью.</p><p></p><h3 data-anchor="izuchennaya-tehnika"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.6Bpj8uewJpOAQL0I" data-id="6Bpj8uewJpOAQL0I" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Изученная техника</a></strong></h3><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.IpwyWNBmD0IeAHSa" data-id="IpwyWNBmD0IeAHSa" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Рубя и кромсая</a> или <a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.VSXqSaGwsAPTBROO" data-id="VSXqSaGwsAPTBROO" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Спасаясь от угрозы</a></strong>, на 12+ вы можете выполнить один из ваших подходящих ходов не тратя Течение. Вы исполняете этот ход более мастерски, идеально и безупречно.</p><p></p><h3 data-anchor="zashita-tekushej-reki"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.KeSCRpp2MHlP18yd" data-id="KeSCRpp2MHlP18yd" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Защита текущей реки</a></strong></h3><p><em>Требуется: <a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.5tB5z2IbAwHDV8F2" data-id="5tB5z2IbAwHDV8F2" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Защита быстрой реки</a></em></p><p><strong>Используя свои текучие движения и быстрые рефлексы чтобы обернуть атаку на атакующего</strong>, вы можете <a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.JTPkvgW4b25aK43U" data-id="JTPkvgW4b25aK43U" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Вставать на защиту</a> с помощью ЛОВ вместо ТЕЛ.</p><p></p><h3 data-anchor="vnutrennij-mir"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.76JeWFyMq6mRcEml" data-id="76JeWFyMq6mRcEml" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Внутренний мир</a></strong></h3><p><em>Требуется: <a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.92juH4HHBBmjBELX" data-id="92juH4HHBBmjBELX" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Покой ума</a></em></p><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.9m6r1jwhrt1u4qYz" data-id="9m6r1jwhrt1u4qYz" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Медитируя</a></strong>, на 10+ выберите два из списка <a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.92juH4HHBBmjBELX" data-id="92juH4HHBBmjBELX" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Покоя ума</a> вместо одного и вы можете выбрать одно и то же дважды.</p><p></p><h3 data-anchor="telo-iz-stali"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.m3O6OjR23f8E610h" data-id="m3O6OjR23f8E610h" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Тело из стали</a></strong></h3><p><em>Требуется: </em><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-monaha.Item.Ki4BeuwdBp5MOoqW" data-id="Ki4BeuwdBp5MOoqW" data-type="Item" data-pack="world.hody-monaha" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Тело словно камень</a></p><p><strong>Пока у вас есть Течение</strong>, получите +2 брони.</p><p></p><p></p><p></p>
</section></article>
            </div>
              
`