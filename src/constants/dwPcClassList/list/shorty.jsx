const React = require('react')

module.exports = {
  id: 'shorty',
  name: 'Малый народ',
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



    
    <img src="systems/dungeonworld/assets/icons/environment/settlement/wagon.webp" class=" centered"><p><em>Не все народы велики и могучи, с огромными городами и историей, уходящей в древность, героями в блестящих доспехах, и сотрясающими мир событиями. Много народов живут сами для себя, небольшими, пусть и разбросанными по свету, общинами, не оставляя значимого следа в истории. О них не пишут легенды и не слагают песен, их предки не сразили драконов и не изгнали древнее зло, но они — такая же часть мира как и все остальные.</em></p><p><em>Из-за этого и небольшого роста их могут недооценивать или вовсе не воспринимать всерьёз. Кто вообще может себе представить себе крысолюда-дворянина? Абсурд. Такого просто не бывает.</em> <em>Так скажут многие, и будут почти всегда правы. Но истории о героях, пусть и приукрашены, но учат что предугадать все повороты судьбы не дано никому.</em></p><p>&nbsp;</p><h2 data-anchor="imena">Имена</h2><p>Придира, Гэди, Лазам Камненорка, Ядокус Брукхаус, Кролик, Жмых, Коррин, Освальд, Хик Тихоспин, Сникч Тёмная Кость</p><h2 data-anchor="vneshnostь">Внешность</h2><p>Выберите одну черту по каждому пункту:</p><ul><li><span class="JLqJ4b ChMk0b" data-language-for-alternatives="ru" data-language-to-translate-into="en" data-phrase-index="0">Хитрые глаза, Умные глаза или Пронзительные глаза</span></li><li><span class="JLqJ4b ChMk0b" data-language-for-alternatives="ru" data-language-to-translate-into="en" data-phrase-index="2">Звериная мордочка, Вьющиеся волосы или Закрытое капюшоном лицо</span></li><li><span class="JLqJ4b ChMk0b" data-language-for-alternatives="ru" data-language-to-translate-into="en" data-phrase-index="4">Повседневная одежда, Дорожная одежда или Чужая одежда</span></li><li><span class="JLqJ4b ChMk0b" data-language-for-alternatives="ru" data-language-to-translate-into="en" data-phrase-index="6">Пухлое тело, Жилистое тело или Покрытое шерстью тело</span>&nbsp;</li></ul><h2 data-anchor="harakteristiki">Характеристики</h2><p>Ваши максимальные хиты: <strong>16+ТЕЛ</strong></p><p>Ваш базовый урон равен <a class="inline-roll roll" data-mode="roll" data-flavor="" data-formula="d6"><i class="fas fa-dice-d20"></i>d6</a>.</p><p>Распределите эти модификаторы по характеристикам <strong>+2, +1, +1, +0, +0, -1</strong></p><p>&nbsp;</p><h1 data-anchor="lichnostь-personazha"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Личность персонажа</span></h1><h3 data-anchor="aspekty"><strong>Аспекты</strong></h3><p>Аспекты описывают важные особенности вашего персонажа, его жизненный опыт, происхождение и родословную и социальные отношения. В игре это проявляется в качестве механических бонусов. Подробнее вы можете прочитать <a class="content-link" draggable="true" data-uuid="Compendium.world.gm-screen.JournalEntry.ZLYUyWP6kSJrNmat" data-id="ZLYUyWP6kSJrNmat" data-type="JournalEntry" data-pack="world.gm-screen" data-tooltip="Журнал"><i class="fas fa-book-open"></i>здесь</a>.</p><p>Придумайте персонажу три <a class="content-link" draggable="true" data-uuid="Compendium.world.gm-screen.JournalEntry.ZLYUyWP6kSJrNmat" data-id="ZLYUyWP6kSJrNmat" data-type="JournalEntry" data-pack="world.gm-screen" data-tooltip="Журнал"><i class="fas fa-book-open"></i>аспекта</a>: <strong>Концепцию</strong> и два обычных аспекта.</p><p>Для начала хватит только Концепции, остальные аспекты вы можете заполнить по мере игры.</p><p></p><h3 data-anchor="stremlenie"><span style="font-family:Arial, sans-serif"><strong style="box-sizing:border-box;user-select:text">Стремление</strong></span></h3><p><span style="font-family:Arial, sans-serif">Выберите до трёх Стремлений своего персонажа. Выбирайте из вариантов ниже, придумайте своё собственное или воспользуйтесь <a class="content-link" draggable="true" data-uuid="Compendium.world.gm-screen.JournalEntry.PLhAByHQsTL4cZQU" data-id="PLhAByHQsTL4cZQU" data-type="JournalEntry" data-pack="world.gm-screen" data-tooltip="Журнал"><i class="fas fa-book-open"></i>списком Стремлений</a>.</span></p><p>Стремления олицетворяют то как персонаж взаимодействует с миром и следование или иначе использование их в игре награждается опытом в <a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.aGbaj6PeLdm3H4zc" data-id="aGbaj6PeLdm3H4zc" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>конце сессии</a>.</p><p></p><blockquote><h3 data-anchor="nadezhda"><strong>Надежда</strong></h3><p>Подбодрите или дайте надежду том, кто в этом нуждается</p></blockquote><blockquote><h3 data-anchor="strastь-k-puteshestviyam"><strong>Страсть к путешествиям</strong></h3><p>Переживите что-то, о чём вы сможете написать увлекательную историю, и возьмите с собой сувенир чтобы доказать что это действительно произошло.</p></blockquote><blockquote><h3 data-anchor="ozornik"><strong>Озорник</strong></h3><p>Уклонитесь от ответственности или последствий ваших действий.</p></blockquote><blockquote><h3 data-anchor="bolьshoe-serdce"><strong>Большое сердце</strong></h3><p>Подвергните себя опасности чтобы кому-то помочь.</p></blockquote><blockquote><h3 data-anchor="porok"><strong>Порок</strong></h3><p>Создайте проблемы из-за потакания своим капризам или праздности.</p></blockquote><p></p><p></p><h3 data-anchor="teperь-vyberite-predystoriyu-i-poluchite-sootvetstvuyushij-hod:"><strong>Теперь выберите предысторию и получите соответствующий ход:</strong></h3><blockquote><h3 data-anchor="dyuzhie-telom"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.Rpzde3v44R0xzDCq" data-id="Rpzde3v44R0xzDCq" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Дюжие телом</a></strong></h3><p><strong>Увеличьте</strong> свой максимум ОЗ на 2.</p><p><strong>Один раз в сессию, получая Травму</strong>, вы можете решить не получать её, <strong>а обычные яды и болезни</strong> вы переносите легче и быстрее.</p></blockquote><p>&nbsp;</p><blockquote><h3 data-anchor="ne-robkie-serdcem"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.RZLpWrZZGlCUTBoQ" data-id="RZLpWrZZGlCUTBoQ" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Не робкие сердцем</a></strong></h3><p><strong>Вступая в бой с </strong><span style="text-decoration:underline"><strong><span style="text-decoration:underline">ужасающим</span></strong></span><strong> врагом или врагом который больше вас</strong>, получите 1 Смекалки перед началом конфликта и +1 брони пока вы сражаетесь.</p></blockquote><p>&nbsp;</p><blockquote><h3 data-anchor="melkie-sredi-melkih"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.fLZCnGkisiGxvGvv" data-id="fLZCnGkisiGxvGvv" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Мелкие среди мелких</a></strong></h3><p>Ваш народ меньше и легче чем даже другие мелкие народы. <strong>Вас можно</strong> без проблем носить или бросать.</p><p><strong>Двигаясь осторожно и неспеша</strong>, вы не не произоводите шума и можете ходить по нестабильным поверхностям не <a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.VSXqSaGwsAPTBROO" data-id="VSXqSaGwsAPTBROO" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Спасаясь от угрозы</a></p></blockquote><p><span style="font-family:Arial, sans-serif">&nbsp;</span></p><p></p><h1 data-anchor="osnova-klassa-personazha"><span style="font-family:Roboto, Arial, 'Helvetica Neue', sans-serif">Основа класса персонажа&nbsp;</span></h1><h2 data-anchor="vy-nachinaete-igru-so-sleduyushimi-hodami:">Вы начинаете игру со следующими ходами:</h2><p></p><h3 data-anchor="malaya-chastь-bolьshogo-mira"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.zEkfuWsq1e3TScPT" data-id="zEkfuWsq1e3TScPT" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Малая часть большого мира</a></strong></h3><p><strong>Вы — часть небольшого народа</strong>, который ведёт довольно скромное существование. <strong>Назовите и опишите</strong> свой народ и, <strong>заполните все пустые пробелы в списке ниже</strong>.<strong> </strong>В любом случае вы, и ваш народ, небольшого роста, примерно <strong>от полуметра до метра высотой</strong>. Это может быть как проблемой, так и благом. Некоторое снаряжение других рас может попросту быть вам слишком большим, но, вместе с тем, мало кто увидит в вас угрозу, а ваша смекалка и прыткость, возможно, позволят вам вписать имя своего народа в большую историю.</p><ul><li><p><strong>Внешность вашего народа можно описать как</strong>… ______________ (толстые низкие люди, крысолюды, двуногие лисицы и т. п.)</p></li><li><p><strong>Ваш народ называет себя</strong>… ________________ (Завране, Хины, Гарионцы, Дети леса и т. п.)</p></li><li><p>(необязательно) <strong>Распространённое разговорное название вашего народа это…</strong> ___________________ (полурослики, ушастые, бегунцы, златовники и т. п. )</p></li></ul><p><strong>Опишите две особенности или традиции вашего народа которыми он известен</strong> — одной хорошей и одной плохой и запишите их в пропуски ниже. Например: <em>добротой и неблагонадёжностью,</em> <em>умом и коварством</em>, <em>навыками выживания и ужасными манерами</em>, <em>боевой выучкой и поеданием плоти врагов</em> и т. п.</p><ul><li><p><strong>Среди других рас ваш народ известен</strong>… ___________ и ____________</p></li></ul><p><strong>Один раз в сессию когда вы совершаете ход и обстоятельства подходят под то, в чём ваш народ хорош</strong>, считайте 6- как 7-9, а 7-9 как 10+.</p><p><strong>Один раз в сессию, когда дурная молва о вашем народе оправдывает себя</strong>, запишите опыт.</p><p></p><h3 data-anchor="provorstvo-malyh"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.j1OynenASdEhsMgL" data-id="j1OynenASdEhsMgL" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Проворство малых</a></strong></h3><p><strong>Когда вас превосходят числом или враг больше вас</strong>, вы получаете преимущество на любой ход чтобы спрятаться, сбежать или прокрасться мимо него/них.</p><p></p><h3 data-anchor="smeklivostь"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.YZjvZZT639JqAvrp" data-id="YZjvZZT639JqAvrp" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Смекливость</a></strong></h3><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.IFAcgBsxriir9o5n" data-id="IFAcgBsxriir9o5n" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Разбивая лагерь</a> или <a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.VsHKhhFboblvysG1" data-id="VsHKhhFboblvysG1" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Восстанавливая силы</a>, вы можете рассказать кому-то о том как выпутались из передряги в прошлом, байку о родном доме или из вашей культуры, или попросить это сделать собеседника</strong>. Если вы это делаете, потеряйте всю Смекалку и бросьте +ТЕЛ или +ХАР.</p><p><strong>На 10+</strong> получите 3 Смекалки.</p><p><strong>На 7-9</strong> получите 2 Смекалки.</p><p><strong>На 6-</strong> всё равно получите 1 Смекалки, но Ведущий делает ход.</p><p><strong>Вы можете тратить Смекалку</strong>, 1 к 1, чтобы:</p><ul><li><p>Вы или ваш союзник неподалёку избавился от страха, сомнений или порчи (даже самая сильная как минимум ослабнет на время)</p></li><li>Выбросьте осторожность куда подальше: вы получаете преимущество на любой ход, но считайте 10+ как 7-9.</li><li><p>Действуйте неожиданно, захватывая врага врасплох.</p></li></ul><p></p><p></p><p></p><h2 data-anchor="zatem,-vyberite-dva:">Затем, выберите два:</h2><p><em>Вы также можете выбирать эти ходы как обычные Сложные ходы.</em></p><p></p><h3 data-anchor="smutьyan"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.DqKdiFNiKXxbjSAM" data-id="DqKdiFNiKXxbjSAM" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Смутьян</a></strong></h3><p><strong>Когда вы делаете что-то настолько невероятно глупое, что все просто смотрят на вас в неверии</strong>, вы получаете +1 Смекалки. Поверьте, она вам понадобится.</p><p></p><h3 data-anchor="spletni-v-taverne"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.CRKAdSQGk2YIRis4" data-id="CRKAdSQGk2YIRis4" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Сплетни в таверне</a></strong></h3><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.feNkp70TAI9vpPkq" data-id="feNkp70TAI9vpPkq" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Копаясь в памяти</a> о чём-то, что вы никогда не видели</strong>, бросайте с преимуществом, и расскажите о том кто рассказал вам эту любопытную и невероятную историю.</p><p></p><h3 data-anchor="malenьkij-mir"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.cayFfzQtYDbPHWEX" data-id="cayFfzQtYDbPHWEX" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Маленький мир</a></strong></h3><p><strong>Ища свой народ в местах, где его логично было бы найти</strong>, вы всегда найдёте хоть кого-нибудь и они всегда готовы оказать вам помощь, но могут попросить что-то взамен.</p><p></p><h3 data-anchor="lovkie-nogi"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.rNCIpnxDk2MqJMsx" data-id="rNCIpnxDk2MqJMsx" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Ловкие ноги</a></strong></h3><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.VSXqSaGwsAPTBROO" data-id="VSXqSaGwsAPTBROO" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Спасаясь от угрозы</a>, убираясь с её пути</strong>, на 7+ вы можете спрятаться или избегать обнаружения обычными средствами от кого-то, кто больше вас, до тех пор, пока он/они могут отвлечься на кого-то ещё.</p><p></p><h2 data-anchor="snaryazhenie">Снаряжение</h2><p><span style="font-family:Arial, sans-serif">Ваша <a class="content-link" draggable="true" data-uuid="Compendium.world.prochie-hody.Item.gi2k50hOxPuXcqau" data-id="gi2k50hOxPuXcqau" data-type="Item" data-pack="world.prochie-hody" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>нагрузка</a> равна <strong>9. </strong>Каждый предмет, включая <a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-gear.Item.a7VgXUQQ3pERhyPy" data-id="a7VgXUQQ3pERhyPy" data-type="Item" data-pack="world.equipment-gear" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Неопределённые</a>, исключая маленькие, добавляет свой вес к общей нагрузке.</span></p><ul><li><p><span style="font-family:Arial, sans-serif"><strong>1-3 </strong>веса это лёгкая нагрузка (вы <em>быстры</em> и <em>тихи</em>)</span></p></li><li><p><span style="font-family:Arial, sans-serif"><strong>4-6 </strong>нормальная нагрузка</span></p></li><li><p><span style="font-family:Arial, sans-serif"><strong>7-9 </strong>тяжёлая (вы <em>медленны</em>, <em>шумны, вам жарко</em> и <em>быстро устаёте</em>)</span></p></li></ul><p><strong>Вы начинаете игру с:</strong></p><ul><li><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-gear.Item.CDnPMKvFLdWlRFxb" data-id="CDnPMKvFLdWlRFxb" data-type="Item" data-pack="world.equipment-gear" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Припасы</a> (3 исп, вес 1)</li><li><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-weapons.Item.nMag6sXXRqc6SC4Q" data-id="nMag6sXXRqc6SC4Q" data-type="Item" data-pack="world.equipment-weapons" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Кинжалом</a> (рука, мал. предмет)</li></ul><p><strong>Выберите одно:</strong></p><ul><li><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-weapons.Item.YHnoyCylsxDbIURU" data-id="YHnoyCylsxDbIURU" data-type="Item" data-pack="world.equipment-weapons" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Праща</a> (близко, перезарядка, неудобное, мал. предмет)</li><li><p><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-weapons.Item.Bj8EezgO0DZ9OhVQ" data-id="Bj8EezgO0DZ9OhVQ" data-type="Item" data-pack="world.equipment-weapons" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Короткий (не для вас) меч</a> (взмах меча, вес 1)</p></li></ul><p><strong>Выберите два:</strong></p><ul><li><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-class.Item.tGrQVcHs6yORnDxo" data-id="tGrQVcHs6yORnDxo" data-type="Item" data-pack="world.equipment-class" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Безделушка</a>, которую недавно достали каким-то образом, опишите где и как. (<em>блестяшка, </em>мал. предмет)</li><li><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-gear.Item.CDnPMKvFLdWlRFxb" data-id="CDnPMKvFLdWlRFxb" data-type="Item" data-pack="world.equipment-gear" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Припасы</a> (3 исп., вес 1)</li><li><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-armor.Item.oGiXIqNQbukIjf06" data-id="oGiXIqNQbukIjf06" data-type="Item" data-pack="world.equipment-armor" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Лёгкий доспех</a>, как раз вашего размера (1 брони, вес 1)</li><li><a class="content-link" draggable="true" data-uuid="Compendium.world.snaryazhenie--zelya.Item.VYEkUIR0riLt8xU8" data-id="VYEkUIR0riLt8xU8" data-type="Item" data-pack="world.snaryazhenie--zelya" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Зелье исцеления</a> (мал. предмет)</li></ul><p>&nbsp;</p><p></p><h1 data-anchor="slozhnye-hody">Сложные ходы</h1><p></p><h3 data-anchor="lomatь-komediyu"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.FRcGFtDa9APaL7IF" data-id="FRcGFtDa9APaL7IF" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Ломать комедию</a></strong></h3><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.zqcVmuzrfua8v6Hy" data-id="zqcVmuzrfua8v6Hy" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Договариваясь</a> и давя на жалость или пресмыкаясь</strong>, бросайте с преимуществом.</p><p></p><h3 data-anchor="krepche-chem-kazhetsya"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.BDdprhjV8mr1HNUk" data-id="BDdprhjV8mr1HNUk" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Крепче чем кажется</a></strong></h3><p><strong>Пока у вас есть Смекалка</strong>, у вас +1 брони.</p><p><strong>Совершая <a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.Axs3Kh7n6VbmO4Ev" data-id="Axs3Kh7n6VbmO4Ev" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Последний вздох</a></strong>, потратьте всю Смекалку чтобы получить преимущество.</p><p></p><h3 data-anchor="nedoocenyonnyj"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.6Bp0FNgZR6BwJuUb" data-id="6Bp0FNgZR6BwJuUb" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Недооценённый</a></strong></h3><p><strong>До тех пор, пока вы избегаете открытой враждебности</strong>, враги не будут считать вас угрозой или опасностью.</p><p><strong>Первый раз совершая ход против врага который недооценивает вас</strong>, бросайте с преимуществом.</p><p></p><h3 data-anchor="ukol"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.nsTcXeSuWjaqsJjW" data-id="nsTcXeSuWjaqsJjW" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Укол</a></strong></h3><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.IpwyWNBmD0IeAHSa" data-id="IpwyWNBmD0IeAHSa" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Рубя и кромсая</a></strong>, на 7+ вы можете потратить 1 Смекалку и выбрать одно из списка:</p><ul><li>Ваш враг спотыкается или падает</li><li>Пользуясь замешательством и хаосом, вы воруете у врага что-то небольшое&nbsp;</li><li>Ваш бросок урона получает преимущество</li></ul><p></p><h3 data-anchor="upal,-no-ne-vybyl"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.FLEO9X0fuRWx8zzd" data-id="FLEO9X0fuRWx8zzd" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Упал, но не выбыл</a></strong></h3><p><strong>Получая урон несмотря на свои лучшие попытки его избежать</strong>, вы можете решить получить лишь половину урона (округляя вниз), но если вы это делаете, выберите одно:</p><ul><li><p>Потеряйте 1 Смекалки</p></li><li><p>Вы что-то теряете (хватку, позицию, время и т. п.)</p></li><li><p>Что-то что у вас есть ломается</p></li><li><p>Вы выбываете из сцены на несколько мгновений</p></li></ul><p><strong>Чтобы вы ни выбрали</strong>, Ведущий опишет что происходит.</p><p></p><h3 data-anchor="sobratьsya-s-silami"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.xNj0PLm4CNphEHQV" data-id="xNj0PLm4CNphEHQV" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Собраться с силами</a></strong></h3><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.211SOIrKRp2TyhLz" data-id="211SOIrKRp2TyhLz" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Восстанавливаясь</a></strong>, вы можете потратить 1 Смекалки вместо того чтобы использовать Припасы.</p><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.211SOIrKRp2TyhLz" data-id="211SOIrKRp2TyhLz" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Восстанавливаясь</a>, вы также можете</strong> решить получить 1 Смекалки вместо восстановления ОЗ.</p><p></p><h3 data-anchor="kulьturnyj-obmen"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.roBiYrRbgBQq1EYh" data-id="roBiYrRbgBQq1EYh" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Культурный обмен</a></strong></h3><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.IFAcgBsxriir9o5n" data-id="IFAcgBsxriir9o5n" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Разбивая лагерь</a> и занимаясь готовкой</strong>, вы можете потратить дополнительное использование Припасов или 1 Смекалки чтобы приготовить блюдо своей культуры или народа на всю группу — опишите что вы приготовили. <strong>Любой кто его отведает</strong>, восстанавливает дополнительные 1к6 ОЗ.</p><p></p><h3 data-anchor="pomogite!"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.Vxpc0QSCwl2kPCxf" data-id="Vxpc0QSCwl2kPCxf" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Помогите!</a></strong></h3><p><strong>Когда союзник спасает вас от опасности</strong>, отметьте опыт.</p><p></p><h3 data-anchor="vtoroj-zavtrak"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.rKjLoQl1N26nG4tx" data-id="rKjLoQl1N26nG4tx" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Второй завтрак</a></strong></h3><p><strong>Покидая поселение после того как вы провели в нём некоторое время</strong>, вы можете «неожиданно» обнаружить у себя 1к3 Припасов — скажите откуда вы их достали и каким образом.</p><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.211SOIrKRp2TyhLz" data-id="211SOIrKRp2TyhLz" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Восстанавливаясь</a></strong>, вы можете потратить дополнительные Припасы чтобы восстановить +1к4 ОЗ.</p><p></p><p></p><h2 data-anchor="poluchaya-urovni-6-10,-vy-mozhete-vybiratь-i-eti-hody:">Получая уровни 6-10, вы можете выбирать и эти ходы:</h2><p></p><h3 data-anchor="malenьkij-geroj"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.Qiy5444t2rnjJ5QY" data-id="Qiy5444t2rnjJ5QY" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Маленький герой</a></strong></h3><p><strong>Бросаясь в опасность чтобы <a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.JTPkvgW4b25aK43U" data-id="JTPkvgW4b25aK43U" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Защитить</a> кого-то</strong>, считайте 6- как 7-9, а 7-9 как 10+. <strong>Кроме того</strong> вы можете использовать Смекалку вместо Готовности.</p><p></p><h3 data-anchor="ya-mogu-delatь-eto-vesь-denь"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.KYJQjLLyShLl4kpw" data-id="KYJQjLLyShLl4kpw" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Я могу делать это весь день</a></strong></h3><p><em>Требуется: <a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.FLEO9X0fuRWx8zzd" data-id="FLEO9X0fuRWx8zzd" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Упал, но не выбыл</a></em></p><p><strong>Когда вы используете ход Упал, но не выбыл</strong>, получите преимущество на следующий ход против источника урона и ваша следующая атака нанесёт +1к4 урона.</p><p></p><h3 data-anchor="skolьzkij-kak-uzh"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.EAJlCeiHHvEaSNNg" data-id="EAJlCeiHHvEaSNNg" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Скользкий как уж</a></strong></h3><p><strong>Если вас схватили, сковали (связали и т. п.) или вы застряли</strong>, вы можете потратить Смекалку чтобы автоматически высвободиться.</p><p></p><h3 data-anchor="milaya-mordochka-mordashka!"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.mM2HzH2KPuhTjm1t" data-id="mM2HzH2KPuhTjm1t" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Милая мордочка-мордашка!</a></strong></h3><p><em>Требуется: <a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.cayFfzQtYDbPHWEX" data-id="cayFfzQtYDbPHWEX" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Маленький мир</a></em></p><p><strong>Находясь в поселении и ведя себя дружелюбно</strong>, вашей улыбки будет достаточно чтобы получать хорошие сделки, бесплатную еду и комфортабельное проживание. Местные всегда будут к вам открыты, дружелюбны, и постараются помочь пока вы не дадите им повода перестать это делать.</p><p></p><h3 data-anchor="zarazitelьnyj-zapal"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.ItANo0oGqSv90Yte" data-id="ItANo0oGqSv90Yte" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Заразительный запал</a></strong></h3><p><strong>Используя <a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.YZjvZZT639JqAvrp" data-id="YZjvZZT639JqAvrp" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Смекливость</a>,</strong> на 12+ ваши союзники также получают 1 Храбрости и могут тратить её так же как и вы.</p><p></p><h3 data-anchor="mal,-da-udal"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.DQwo8S9JsMdLJcIA" data-id="DQwo8S9JsMdLJcIA" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Мал, да удал</a></strong></h3><p><strong>Когда вы страдаете от магического очарования, страха или контроля разума</strong>, до тех пор пока у вас есть Смекалка, игнорируйте эти эффекты, и даже самые мощные чары будут значительно ослаблены.</p><p></p><h3 data-anchor="narodnyj-geroj"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.RTLW1SwYWUpBWsHg" data-id="RTLW1SwYWUpBWsHg" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Народный герой</a></strong></h3><p><em>Требуется: <a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.cayFfzQtYDbPHWEX" data-id="cayFfzQtYDbPHWEX" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Маленький мир</a></em></p><p><strong>При первой же возможности встретить представителей своего народа после того как вы взяли этот ход</strong>, вы будете ритуально отмечены (особой раскраской, татуировкой, шрамированием, особыми знаками на одежде или снаряжении и т. п.) как чемпион вашего народа. <strong>Любой</strong> представитель вашего народа будет относится к вам с большим уважением, и, <strong>если вы того захотите,</strong> вы можете заявить о своём титуле перед теми кто больше вас и они станут относиться к вам как к ровне (но они больше не будут вас недооценивать); немногие, разбирающиеся в вашей культуре, могут сразу распознать вас как героя своего народа, и относиться соответствующе.</p><p><strong>Если у вас есть ход <a class="content-link" draggable="true" data-uuid="Compendium.world.hody-malogo-naroda.Item.FRcGFtDa9APaL7IF" data-id="FRcGFtDa9APaL7IF" data-type="Item" data-pack="world.hody-malogo-naroda" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Ломать комедию</a></strong>, теперь вы можете получать преимущество в том числе и объявляя себя чемпионом своего народа, однако когда вы это сделаете, к вам станут относиться как к ровне (присутствующие больше не будут вас недооценивать).</p><p></p><p></p><p></p>



`