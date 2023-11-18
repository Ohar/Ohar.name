const React = require('react')

module.exports = {
  id: 'savage',
  name: 'Дикарь',
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
  equipmentHtml: `
`,
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



   
    <div style="text-align:center"><img src="systems/dungeonworld/assets/icons/skills/yellow_42.webp"></div><p></p><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><em style="box-sizing:border-box;user-select:text">Вы пришли сюда из неизвестных земель. С мечом в руке — грабитель. Убийца.</em></span></p><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><em style="box-sizing:border-box;user-select:text">Пусть маг колдует свои заклятия. Чем хороша магия, когда железо прорезает плоть и кости ничуть не хуже? Паладин клянётся в верности своему божку. Она может оставить эти сказки про бога при себе — вы сам себе хозяин.</em></span></p><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><em style="box-sizing:border-box;user-select:text">Вы пришли из далёких земель этого мира в поисках… чего? Славы? Богатства? Пролитой крови? В конце концов, это неважно. Они называют тебя варваром. Нецивилизованным. Пусть называют. Вам лучше знать. Их мир дворян и законов мимолётен.</em></span></p><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><em style="box-sizing:border-box;user-select:text">Вы знаете как брать от жизни всё.</em></span></p><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">&nbsp;</span></p><h2 data-anchor="imena"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Имена</span></h2><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Горм, Си-Йи, Присцилла, Сэн, Ксиа, Аннэйра, Хаефа, Люр, Шар, Коррин, Нкоси, Фафнир, Куа, Сацер, Верцингетто, Барбозар, Кловис, Фраель, Тра-раксес, Силлиус, Ша-Шенна, Кхамизи</span></p><h2 data-anchor="tituly"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Титулы</span></h2><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Славный, Жаждущий, Неистребимый, Непобедимый, Прожорливый, Проклятый, Костяной, Веселый, Меланхоличный, Всемогущий, Гигантский, Победоносный</span></p><h2 data-anchor="vneshnostь"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Внешность</span></h2><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Выберите одну черту по каждому пункту:</span></p><ul><li style="box-sizing:border-box;user-select:text"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Мускулистая, долговязая, худощавая или гибкая внешность</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Измученный, отчаянный, дикий, мрачный взгляд</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Татуировки, драгоценности или ухоженный вид</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Обноски, шелка, или трофейная (не по погоде) одежда</span></li></ul><h2 data-anchor="harakteristiki"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Характеристики</span></h2><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Ваши максимальные хиты <strong>20+ТЕЛ</strong></span></p><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Ваш базовый урон равен <a class="inline-roll roll" data-mode="roll" data-flavor="" data-formula="d10"><i class="fas fa-dice-d20"></i>d10</a>.</span></p><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Распределите эти модификаторы по характеристикам <strong>+2, +1, +1, +0, +0, -1</strong></span></p><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">&nbsp;</span></p><h1 data-anchor="lichnostь-personazha"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Личность персонажа</span></h1><h3 data-anchor="aspekty"><strong>Аспекты</strong></h3><p>Аспекты описывают важные особенности вашего персонажа, его жизненный опыт, происхождение и родословную и социальные отношения. В игре это проявляется в качестве механических бонусов. Подробнее вы можете прочитать <a class="content-link" draggable="true" data-uuid="Compendium.world.gm-screen.JournalEntry.ZLYUyWP6kSJrNmat" data-id="ZLYUyWP6kSJrNmat" data-type="JournalEntry" data-pack="world.gm-screen" data-tooltip="Журнал"><i class="fas fa-book-open"></i>здесь</a>.</p><p>Придумайте персонажу три <a class="content-link" draggable="true" data-uuid="Compendium.world.gm-screen.JournalEntry.ZLYUyWP6kSJrNmat" data-id="ZLYUyWP6kSJrNmat" data-type="JournalEntry" data-pack="world.gm-screen" data-tooltip="Журнал"><i class="fas fa-book-open"></i>аспекта</a>: <strong>Концепцию</strong> и два обычных аспекта.</p><p>Для начала хватит только Концепции, остальные аспекты вы можете заполнить по мере игры.</p><p></p><h3 data-anchor="stremlenie"><span style="font-family:Arial, sans-serif"><strong style="box-sizing:border-box;user-select:text">Стремление</strong></span></h3><p><span style="font-family:Arial, sans-serif">Выберите до трёх Стремлений своего персонажа. Выбирайте из вариантов ниже, придумайте своё собственное или воспользуйтесь <a class="content-link" draggable="true" data-uuid="Compendium.world.gm-screen.JournalEntry.PLhAByHQsTL4cZQU" data-id="PLhAByHQsTL4cZQU" data-type="JournalEntry" data-pack="world.gm-screen" data-tooltip="Журнал"><i class="fas fa-book-open"></i>списком Стремлений</a>.</span></p><p>Стремления олицетворяют то как персонаж взаимодействует с миром и следование или иначе использование их в игре награждается опытом в <a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.aGbaj6PeLdm3H4zc" data-id="aGbaj6PeLdm3H4zc" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>конце сессии</a>.</p><p></p><blockquote><h3 style="box-sizing:border-box;user-select:text" data-anchor="prezrenie"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong style="box-sizing:border-box;user-select:text">Презрение</strong></span></h3><p style="box-sizing:border-box;user-select:text"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Оскорбите персонажа Ведущего своим неотёсанным поведением.</span></p></blockquote><blockquote><h3 style="box-sizing:border-box;user-select:text" data-anchor="tradiciya"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong style="box-sizing:border-box;user-select:text">Традиция</strong></span></h3><p style="box-sizing:border-box;user-select:text"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Научите кого-то путям или обычаям своего народа.</span></p></blockquote><blockquote><h3 style="box-sizing:border-box;user-select:text" data-anchor="veselьe"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong style="box-sizing:border-box;user-select:text">Веселье</strong></span></h3><p style="box-sizing:border-box;user-select:text"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Создавайте проблемы потакая своим желаниям</span></p></blockquote><blockquote><h3 style="box-sizing:border-box;user-select:text" data-anchor="chestь"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong style="box-sizing:border-box;user-select:text">Честь</strong></span></h3><p style="box-sizing:border-box;user-select:text">Сдержите обещание данное персонажу Ведущего.</p></blockquote><blockquote><h3 style="box-sizing:border-box;user-select:text" data-anchor="zhestokostь"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong style="box-sizing:border-box;user-select:text">Жестокость</strong></span></h3><p style="box-sizing:border-box;user-select:text">Бросьте кого-то слабее вас на произвол судьбы</p></blockquote><p></p><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong style="box-sizing:border-box;user-select:text">Опциональные вопросы чтобы лучше понимать своего персонажа:</strong></span></p><blockquote><ul style="box-sizing:border-box;user-select:text"><li style="box-sizing:border-box;user-select:text"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Какие манеры ярче всего показывают что вы чужак в этих землях?</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Что вам больше всего нравится в этих «цивилизованных землях»?</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Какая культурная норма «цивилизованных людей» вам противна?</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Как люди этой страны реагируют на ваш вид?</span></li></ul></blockquote><p></p><h3 data-anchor="teperь-vyberite-predystoriyu-i-poluchite-sootvetstvuyushij-hod:"><strong>Теперь выберите предысторию и получите соответствующий ход:</strong></h3><p></p><blockquote><h3 data-anchor="skitalec"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-zhreca.Item.VK34CGznJHZBYxHd" data-id="VK34CGznJHZBYxHd" data-type="Item" data-pack="world.hody-zhreca" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Скиталец</a></strong></h3><p>Многие могут считать вас странным бродягой, который приходит и уходит, говорит загадками и подозрительно себя ведёт. Конечно, они знают что вы делаете это не просто так, но ваше причудливое поведение не может же быть оправдано?</p><p><strong>Отправляясь бродить сами по себе</strong>, получите 1 Загадку если вы отсутствуете день, 2 если несколько дней и 3 если неделю и более. Создавая персонажа, получите сразу 3 Загадки.</p><p>Вы можете потратить 1 Загадку чтобы:</p><ul><li><p>Вернуться из своих блужданий как раз в том месте и в то время, когда вы нужны, с подходящим снаряжением (как если бы вы заранее готовились в городе)</p></li><li><p><a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.feNkp70TAI9vpPkq" data-id="feNkp70TAI9vpPkq" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Покопаться в памяти</a> и считать что у вас выпало 10+, черпая знания из ваших странствий</p></li><li><p>Достать очень специфичный, но обыденный предмет стоимость в Ценность или менее.</p></li></ul></blockquote><p style="box-sizing:border-box;user-select:text">&nbsp;</p><blockquote><h3 style="box-sizing:border-box;user-select:text" data-anchor="poslednij-iz-vymirayushego-naroda"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.c2okw0sY2bfVUxhq" data-id="c2okw0sY2bfVUxhq" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Последний из вымирающего народа</a></strong></span></h3><p style="box-sizing:border-box;user-select:text">Ваш народ/племя/раса давно известны своим… <strong>(выберите 3):</strong></p><ul><li><p>Изобретательностью</p></li><li><p>Красотой</p></li><li><p>Тёмными сделками</p></li><li><p>Упадком</p></li><li><p>Жадностью</p></li><li><p>Свирепостью</p></li><li><p>Долгожительством</p></li><li><p>Магией</p></li><li><p>Благородством</p></li><li><p>Отвагой</p></li><li><p>Размером</p></li><li><p>Песнями</p></li><li><p>Силой</p></li><li><p>Злодеяниями</p></li><li><p>_______________</p></li></ul><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.zqcVmuzrfua8v6Hy" data-id="zqcVmuzrfua8v6Hy" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Договариваясь</a> и используя репутацию своего народа/племени/расы</strong>, бросайте с преимуществом.</p><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.feNkp70TAI9vpPkq" data-id="feNkp70TAI9vpPkq" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Копаясь в памяти</a> о своём народе/племени/расе</strong>, считайте 6- как 7-9.</p></blockquote><p>&nbsp;</p><blockquote><h3 style="box-sizing:border-box;user-select:text" data-anchor="iz-naroda,-znavshego-tolьko-vojnu"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.0y1wPJrAxURfL0Ao" data-id="0y1wPJrAxURfL0Ao" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Из народа, знавшего только войну</a></strong></h3><p style="box-sizing:border-box;user-select:text"><strong>В первый раз оценивая врага или союзника</strong>, вы можете задать Ведущему один вопрос из списка и получить честный ответ:</p><ul><li><p>Какую самую большую опасность он представляет?</p></li><li><p>Чем он слаб или уязвим?</p></li></ul><p>Кроме того, <strong>удивляя врага маленьким оружием спрятанным у себя,</strong> потратьте использование Припасов и получите преимущество на первый ход против этого врага.</p></blockquote><p></p><h1 data-anchor="osnova-klassa-personazha"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Основа класса персонажа&nbsp;</span></h1><h2 data-anchor="vy-nachinaete-s-etim-hodom:"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Вы начинаете с этим ходом:</span></h2><p></p><h3 data-anchor="gerkulesovy-appetity"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong style="box-sizing:border-box;user-select:text"><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.dPZOqPlowp3CvLRY" data-id="dPZOqPlowp3CvLRY" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Геркулесовы аппетиты</a></strong></span></h3><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong>Выберите</strong> из списка два аппетита — это то, чего вы жаждете больше всего:&nbsp;</span></p><ul><li style="box-sizing:border-box;user-select:text"><span style="font-family:Arial, sans-serif">Знание</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Arial, sans-serif">Месть</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Arial, sans-serif">Слава</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Arial, sans-serif">Разрушение</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Arial, sans-serif">Открытия</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Arial, sans-serif">Удовольствия</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Arial, sans-serif">Завоевание</span></li><li>Богатство</li><li>___________</li></ul><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong style="box-sizing:border-box;user-select:text">Совершая бросок, преследуя один из ваших аппетитов</strong>, бросайте 1к6 + 1к8 вместо 2к6. Если результат кубика к6 больше результата к8, Ведущий опишет вам сложность или опасность возникшую из-за бездумного преследования своих аппетитов.</span></p><p></p><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">&nbsp;</span><em>Этот ход создан чтобы отобразить импульсивную природу Варвара и как его непомерные желания могут как помочь ему, так и стать огромными проблемами. «Преследование аппетитов» — это что-то непосредственное, а не абстрактное понятие. Использовать этот ход чтобы унизить главаря бандитов перед его соратниками потому что у вас аппетит «Завоевание»?&nbsp;Конечно. Использовать ход на протяжении всей экспедиции потому что вам в конце заплатят и у вас аппетит «Богатство»? Нет. Своровать ветхий том из-под лапы дракона потому что у вас аппетит «Открытия»? Да.</em></p><p></p><h3 data-anchor="shiroko-shagaya"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.Ft9WqLLmvbOJBWdY" data-id="Ft9WqLLmvbOJBWdY" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Широко шагая</a></strong></h3><p><strong>Вы можете носить</strong> до 4 лёгкой нагрузки, 7 средней и 10 тяжёлой.</p><p></p><p></p><h2 data-anchor="zatem,-vyberite-dva:">Затем, выберите два:</h2><p><em>Вы также можете выбирать эти ходы как обычные Сложные ходы.</em></p><p></p><h3 data-anchor="vnushitelьnyj"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.KQLf98OwyKwauAPc" data-id="KQLf98OwyKwauAPc" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Внушительный</a></strong></h3><p><strong>Неустрашимо и непоколебимо вступая в бой</strong>, вы можете решить бросить +ТЕЛ</p><p><strong>На 10+</strong> выберите два.</p><p><strong>На 7-9</strong> выберите одно:</p><ul><li><p>Меньшие враги будут колебаться, самозабвенно атаковать или убегать от вас.</p></li><li><p>Более могущественные враги сосредоточат свое внимание на вас, видя в вас самую большую угрозу.</p></li><li><p>Ваш урон получает преимущество либо пока битва не закончится, либо пока вы не падёте.</p></li></ul><p></p><h3 data-anchor="nepreklonnyj-i-neuyazvimyj"><strong style="box-sizing:border-box;user-select:text"><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.it1qWQP3xQmtnoIB" data-id="it1qWQP3xQmtnoIB" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Непреклонный и неуязвимый</a></strong></h3><p><strong>Если вы не перегружены и не носите доспехи</strong>, у вас +1 брони.</p><p><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-armor.Item.FkfxRU6NiOzEzkIy" data-id="FkfxRU6NiOzEzkIy" data-type="Item" data-pack="world.equipment-armor" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Щит</a> не мешает получить этот бонус.</p><p></p><h3 data-anchor="bezrassudnyj"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.ZYM6QjIgvvwddWVG" data-id="ZYM6QjIgvvwddWVG" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Безрассудный</a></strong></h3><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.IpwyWNBmD0IeAHSa" data-id="IpwyWNBmD0IeAHSa" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Рубя и кромсая</a> и на 10+ решая пострадать от атаки врага чтобы нанести дополнительный урон</strong>, вы наносите +2к4 урона вместо +1к6.</p><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">&nbsp;</span></p><h3 data-anchor="gora-myshc"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.TtnDKuVcXwYI66gV" data-id="TtnDKuVcXwYI66gV" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Гора мыщц</a></strong></h3><p><strong>Рукопашное и метательное оружие</strong>, в ваших руках получает свойства <em>мощное</em> (раскидывает врагов) и <em>месиво</em> (кровавое и разрушительное). Если оно уже было <em>мощным</em> или с <em>месивом</em>, оно становится ещё более мощным или разрушительным.</p><p></p><h3 data-anchor="horoshij-denь,-chtoby-umeretь"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.hfLsBnPI2qFCMkFE" data-id="hfLsBnPI2qFCMkFE" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Хороший день, чтобы умереть</a></strong></span></h3><p><strong>Когда у вас 5 или меньше ОЗ, </strong>любой получаемый вами урон получает помеху.</p><p><strong>Один раз в сессию</strong>, когда вы должны бросить на <a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.Axs3Kh7n6VbmO4Ev" data-id="Axs3Kh7n6VbmO4Ev" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Последний Вздох</a>, не бросайте. Вы получаете 10+.</p><p></p><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">&nbsp;&nbsp;</span></p><p style="text-align:center"><em>Ты что, собираешься жить вечно?</em></p><p style="text-align:center"><em>— Конан Варвар</em></p><p></p><h2 data-anchor="snaryazhenie"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Снаряжение</span></h2><p><span style="font-family:Arial, sans-serif">Ваша <a class="content-link" draggable="true" data-uuid="Compendium.world.prochie-hody.Item.gi2k50hOxPuXcqau" data-id="gi2k50hOxPuXcqau" data-type="Item" data-pack="world.prochie-hody" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>нагрузка</a> равна <strong>9. </strong>Каждый предмет, включая <a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-gear.Item.a7VgXUQQ3pERhyPy" data-id="a7VgXUQQ3pERhyPy" data-type="Item" data-pack="world.equipment-gear" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Неопределённые</a>, исключая мелкие, добавляет свой вес к общей нагрузке.</span></p><ul><li><p><span style="font-family:Arial, sans-serif"><strong>1-4 </strong>веса это лёгкая нагрузка (вы <em>быстры</em> и <em>тихи</em>)</span></p></li><li><p><span style="font-family:Arial, sans-serif"><strong>5-7 </strong>нормальная нагрузка</span></p></li><li><p><span style="font-family:Arial, sans-serif"><strong>8-10 </strong>тяжёлая (вы <em>медленны</em>, <em>шумны, вам жарко</em> и <em>быстро устаёте</em>)</span></p></li></ul><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong style="box-sizing:border-box;user-select:text">Вы начинаете игру с:</strong></span></p><ul><li style="box-sizing:border-box;user-select:text"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-gear.Item.CDnPMKvFLdWlRFxb" data-id="CDnPMKvFLdWlRFxb" data-type="Item" data-pack="world.equipment-gear" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Припасами</a> (3 исп., вес 1)</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-weapons.Item.nMag6sXXRqc6SC4Q" data-id="nMag6sXXRqc6SC4Q" data-type="Item" data-pack="world.equipment-weapons" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Кинжалом</a> (рука,&nbsp;мал. предмет)</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-class.Item.1YuCznJbmL9wFSjk" data-id="1YuCznJbmL9wFSjk" data-type="Item" data-pack="world.equipment-class" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Какой-то знак того, где вы путешествовали или откуда вы родом</a>, опишите его! (мал. предмет)</span></li></ul><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong style="box-sizing:border-box;user-select:text">Выберите оружие:</strong></span></p><ul><li style="box-sizing:border-box;user-select:text"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-weapons.Item.NKIo4WZMF7cWgpAi" data-id="NKIo4WZMF7cWgpAi" data-type="Item" data-pack="world.equipment-weapons" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Любое простое одноручное оружие</a> (взмах меча, вес 1) и <a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-armor.Item.FkfxRU6NiOzEzkIy" data-id="FkfxRU6NiOzEzkIy" data-type="Item" data-pack="world.equipment-armor" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Щит</a> (вес 2)</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-weapons.Item.2h22wHFX0FIbHXZc" data-id="2h22wHFX0FIbHXZc" data-type="Item" data-pack="world.equipment-weapons" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Любое простое двуручное оружие</a> (+1 урона, взмах меча, <em>двуручное</em>, вес 2)</span></li></ul><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong style="box-sizing:border-box;user-select:text">Выберите одно:</strong></span></p><ul><li style="box-sizing:border-box;user-select:text"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-gear.Item.CDnPMKvFLdWlRFxb" data-id="CDnPMKvFLdWlRFxb" data-type="Item" data-pack="world.equipment-gear" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Припасы</a> (3 исп., вес 1)</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><a class="content-link" draggable="true" data-uuid="Compendium.world.snaryazhenie--zelya.Item.VYEkUIR0riLt8xU8" data-id="VYEkUIR0riLt8xU8" data-type="Item" data-pack="world.snaryazhenie--zelya" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Зелье исцеления</a> (мал. предмет)</span></li><li style="box-sizing:border-box;user-select:text"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-weapons.Item.jSFKrGehEa3y26cO" data-id="jSFKrGehEa3y26cO" data-type="Item" data-pack="world.equipment-weapons" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Лук</a> (<em style="box-sizing:border-box;user-select:text">близко</em>, вес 1)</span></li></ul><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">&nbsp;</span></p><h1 data-anchor="slozhnye-hody"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Сложные ходы</span></h1><p></p><h3 data-anchor="zhazhda-krovi"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.ze1Uuq14nIarCuRU" data-id="ze1Uuq14nIarCuRU" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Жажда крови</a></strong></h3><p><strong>Проливая кровь, свою или чужую и теряя себя в битве</strong>, вы игнорируете боль, страх, контроль над разумом и эффекты Травм до тех пор пока вы продолжаете сражаться.</p><p><strong>Когда действо прекращается</strong>, бросьте+ТЕЛ.</p><p><strong>На 10+</strong> это была хорошая встряска, восстановите 1к4 ОЗ.</p><p><strong>На 7-9</strong> вы устали, но всего несколько минут отдыха и вы будете в порядке.</p><p><strong>На 6-</strong> не отмечайте опыт и отметьте Травму.</p><p></p><h3 data-anchor="beshenstvo"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.tAJEDz3VC5j2fgZl" data-id="tAJEDz3VC5j2fgZl" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Бешенство</a></strong></h3><p><em>Требуется: <a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.ze1Uuq14nIarCuRU" data-id="ze1Uuq14nIarCuRU" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Жажда крови</a></em></p><p><strong>Пока вы ощущаете <a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.ze1Uuq14nIarCuRU" data-id="ze1Uuq14nIarCuRU" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Жажду крови</a></strong>, добавьте свойство <em>по области</em> к своим атакам ближнего боя, поскольку вы бросаетесь на всех поблизости (на друзей и врагов). Бросайте урон по каждой цели отдельно.</p><p></p><h3 data-anchor="neutomimyj,-neslomimyj,-nesgibaemyj"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong style="box-sizing:border-box;user-select:text"><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.6qiEVtyKyIcOLWcP" data-id="6qiEVtyKyIcOLWcP" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Неутомимый, Несломимый, Несгибаемый</a></strong></span></h3><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong>К</strong><strong style="box-sizing:border-box;user-select:text">огда вы физически или психологически скованы</strong>, вы можете получить Травму, чтобы немедленно вырваться из оков.</span></p><p></p><h3 data-anchor="moj-cheryod"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.7qo3l0XdK7ZJbhlH" data-id="7qo3l0XdK7ZJbhlH" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Мой черёд</a></strong></h3><p><strong>Нанося урон врагу который навредил вам или одному из ваших союзников</strong>, наносите +1к4 урона.</p><p></p><h3 data-anchor="krovь-bogu-krovi"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.k0ftwBR19WaIUOIz" data-id="k0ftwBR19WaIUOIz" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Кровь богу крови</a></strong></h3><p><strong>Выполняя ритуал жертвоприношения чтобы получить совет от духов своих предков</strong> (тотемов, богов, и т. п.), потратьте Припасы и бросьте +МУД.</p><p><strong>На 10+</strong> вы получаете полезную информацию о вашей текущей проблеме или дар чтобы помочь с ней справиться.</p><p><strong>На 7-9</strong> жертвы недостаточно и боги возьмут в качестве платы часть вашей плоти, но вы всё равно получите информацию или дар.</p><p></p><h3 data-anchor="neuderzhimyj"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.Mbjbo9cpbTZnYf4O" data-id="Mbjbo9cpbTZnYf4O" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Неудержимый</a></strong></h3><p><strong>Когда вы <a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.VSXqSaGwsAPTBROO" data-id="VSXqSaGwsAPTBROO" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Спасаетесь от угрозы</a> дико прорываясь через препятствия на своём пути (стены, барьеры, людей и т. п.)</strong>, вы не можете провалиться, считайте 6- как 7-9 и всё ваше тело получает свойство <em>мощное</em>.</p><p></p><h3 data-anchor="chto-pod-ruku-popadyotsya"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.sHqDPKBAq1JKeqJ9" data-id="sHqDPKBAq1JKeqJ9" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Что под руку попадётся</a></strong></h3><p><strong>Вы можете <a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.cEQ9h9gsCZqRghQC" data-id="cEQ9h9gsCZqRghQC" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Давать залп</a> метая всё что вы можете поднять</strong>. Если оно неприспособлено для метания, в ваших руках оно получает свойство <em>метательное</em> (Давайте залп либо СИЛ либо ЛОВ).</p><p></p><h3 data-anchor="vsyo-eshyo-goloden"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.UucTNgb8UeYQsD5f" data-id="UucTNgb8UeYQsD5f" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Всё ещё голоден</a></strong></h3><p><strong>Выберите</strong> ещё один аппетит.</p><p>Вы можете выбирать этот ход дважды.</p><p></p><h3 data-anchor="han-hanov"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong style="box-sizing:border-box;user-select:text"><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.gVW31kMFfT6EZAOZ" data-id="gVW31kMFfT6EZAOZ" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Хан Ханов</a></strong></span></h3><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong style="box-sizing:border-box;user-select:text">Когда вы <a class="content-link" draggable="true" data-uuid="Compendium.world.prochie-hody.Item.fe2UJ9c2NfGk75bm" data-id="fe2UJ9c2NfGk75bm" data-type="Item" data-pack="world.prochie-hody" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Нанимаете</a>, собирая воинов под свой флаг</strong>, добавьте ТЕЛ к броску.</span></p><p><span style="font-family:Arial, sans-serif">Кроме того, все Последователи которых вы нанимаете, получают свойство&nbsp;<em style="box-sizing:border-box;user-select:text;font-family:Arial, sans-serif">Воин&nbsp;</em>пока вы их ведёте.</span></p><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">&nbsp;</span></p><p></p><h2 data-anchor="poluchaya-urovni-6-10,-vy-mozhete-vybiratь-i-eti-hody-tozhe:"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Получая уровни 6-10, вы можете выбирать и эти ходы тоже:</span></h2><p></p><h3 data-anchor="simvol-mogushestva"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong style="box-sizing:border-box;user-select:text"><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.MfxyTq3pv08BEOTw" data-id="MfxyTq3pv08BEOTw" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Символ могущества</a></strong></span></h3><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif"><strong style="box-sizing:border-box;user-select:text">Когда вы отмечаете себя символом могущества </strong>(татуировка, шрамирование, и т. п.), любое разумное смертное существо, увидев этот символ, инстинктивно поймёт, что имеет дело с силой, с которой нужно считаться, и будет относится к вам с соответствующим уважением, страхом или ненавистью.</span></p><p><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">&nbsp;</span></p><h3 data-anchor="nesushij-razorenie"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.13e0oMsOsUutyMIi" data-id="13e0oMsOsUutyMIi" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Несущий разорение</a></strong></h3><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.IpwyWNBmD0IeAHSa" data-id="IpwyWNBmD0IeAHSa" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Рубя и кромсая</a>,</strong> на 12+, и если ваш враг выжил, назовите что-то, чем он владеет (его меч, позиция, конечность, честь и т. п.), но не то что сразу его убьёт. Чтобы бы вы ни назвали, оно раскалывается, разламывается или он это теряет. Скажите как это происходит.</p><p></p><h3 data-anchor="boevoj-klich"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.uAQif79UmM5g0LwJ" data-id="uAQif79UmM5g0LwJ" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Боевой клич</a></strong></h3><p><em>Требуется: <a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.KQLf98OwyKwauAPc" data-id="KQLf98OwyKwauAPc" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Внушительный</a></em></p><p><strong>Добавьте</strong> эти варианты в список хода Внушительный:</p><ul><li><p>Ваши союзники воодушевляются и они все получают преимущество на следующий ход.</p></li><li><p>Один враг колеблется или вздрагивает, давая вам мгновение чтобы свободно действовать.</p></li></ul><p></p><h3 data-anchor="tot,-kto-stuchit"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.O4mvgHsHvUfLzvpv" data-id="O4mvgHsHvUfLzvpv" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Тот, кто стучит</a></strong></h3><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.VSXqSaGwsAPTBROO" data-id="VSXqSaGwsAPTBROO" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Спасаясь от угрозы</a> от чего-то, что пытается навредить вам или сковать вас</strong>, на 12+ вы оборачиваете угрозу против неё самой (Ведущий расскажет как или попросить рассказать вас).</p><p></p><h3 data-anchor="zdorovoe-nedoverie"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.XeiqhsSH6xRcK58z" data-id="XeiqhsSH6xRcK58z" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Здоровое недоверие</a></strong></h3><p><strong>Когда нечистая магия смертных заставляет вас <a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.VSXqSaGwsAPTBROO" data-id="VSXqSaGwsAPTBROO" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Спасаться от угрозы</a></strong>, считайте 6- как 7-9.</p><p></p><h3 data-anchor="oderzhimostь"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-varvara.Item.JeYUjSfaAUwe8ysc" data-id="JeYUjSfaAUwe8ysc" data-type="Item" data-pack="world.hody-varvara" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Одержимость</a></strong></h3><p><strong>Вы всегда можете спросить Ведущего</strong> «Могу ли я здесь насытить свои Аппетиты?» и он честно вам ответит и если можете, скажет как это сделать.</p><p></p><p>&nbsp;</p><p style="text-align:center"><em>Чем ярче будет сиять его&nbsp;свет, тем мрачнее будут тени за его спиной.</em></p><p style="text-align:center"><em>— Берсерк</em></p>



`