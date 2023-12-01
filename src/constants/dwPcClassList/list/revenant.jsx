const React = require('react')

module.exports = {
  id: 'revenant',
  name: 'Ревенант',
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

<p><strong>Умирая, но всё равно упрямо цепляясь за своё тело, отказываясь пересечь Чёрные Врата</strong>, замените своё
    Стремление, выберите свою Ужасную цель, получите стартовые ходы и сразу выберите 1 Последствие (см. ниже).</p>

<h1>Стремление мертвеца</h1>
<p>Вы теряете все свои Стремления и заменяете его одним из нижеперечисленных:</p>
<h3><strong>Отрицание</strong></h3>
<p>Откажитесь принять тот факт что вы умерли</p>
<h3><strong>Одержимость</strong></h3>
<p>Преследовать свою Ужасную цель несмотря ни на что.</p>
<h3><strong>Одержимость</strong></h3>
<p>Причиняйте неприятности своим союзникам, преследуя свою Ужасную цель.</p>

<h1>Ужасная цель</h1><h2>Выберите одно:</h2>

<h3><strong>Привязанность</strong></h3>
<p>Назовите человека или группу которых вы отказались отпускать.</p>
<ul>
    <li><strong>Проводя ночь наблюдая за ними,</strong>&nbsp;восстановите все свои ОЗ или избавьтесь от всех Травм.</li>
    <li>Когда они<strong>&nbsp;отшатываются или дают вам отпор</strong>, выберите&nbsp;Последствие.</li>
    <li>Когда они&nbsp;<strong>мирно умирают и проходят через Чёрные Врата</strong>, также делаете и вы.</li>
    <li>Если их&nbsp;<strong>забирают у вас силой</strong>,
        отметьте&nbsp;<span><span>Финальное последствие.</span></span></li>
</ul>

<h3><strong>Месть</strong></h3>
<p><strong>Назовите</strong> человека или группу&nbsp;которые должны заплатить.</p>
<ul>
    <li><strong>Заставляя одного из них заплатить и давая ему понять за что</strong>, восстановите все ОЗ или избавьтесь
        от всех Травм.
    </li>
    <li>Когда они<strong>&nbsp;побеждают или сбегают от вас</strong>,&nbsp;выберите&nbsp;Последствие.</li>
    <li>Когда вы&nbsp;<strong>убиваете последнего из них</strong>, вы проходите через Чёрные Врата.</li>
    <li>Если они&nbsp;<strong>умрут до того как вы с ними закончили</strong>, отметьте&nbsp;<span><span>Финальное последствие.</span></span>
    </li>
</ul>

<h3><strong>Дело</strong></h3>
<p>Назовите дело которые вы отказались оставлять незаконченным.</p>
<ul>
    <li><strong>Проводя всю ночь работая над своим делом или достигая важного этапа,</strong>&nbsp;восстановите все свои
        ОЗ или избавьтесь от всех Травм.
    </li>
    <li><strong>Когда вы не справляетесь со своей задачей или претерпеваете ощутимую неудачу</strong>, выберите&nbsp;Последствие.
    </li>
    <li>Когда вы&nbsp;<strong>заканчиваете своё дело</strong>, вы проходите через Чёрные Врата.</li>
    <li><strong>Если дело станет невыполнимым</strong>, отметьте&nbsp;<span><span>Финальное последствие.</span></span>
    </li>
</ul>

<h2>Вы получаете все эти ходы:</h2><h3><strong>Ни живой</strong></h3>
<p>Вы не дышите. Вам не нужно есть, пить и спать. Вы не лечитесь обычными методами. Вы не получаете никакой пользы от
    магического исцеления, ходов Разбить лагерь, Восстановиться и подобных.</p>

<h3><strong>Ни мёртвый</strong></h3>
<p>Ни яды, ни болезни не могут вам навредить. Вы почти не чувствуете
    боли.&nbsp;<strong>Получая&nbsp;</strong><em><strong>рубящие</strong></em><strong>,&nbsp;</strong><em><strong>колющие&nbsp;</strong></em><strong>или&nbsp;</strong><em><strong>дробящие&nbsp;</strong></em><strong>повреждения</strong>,
    ополовиньте урон (после применения брони, округляя вверх).</p>
<p><strong>Когда ваше ОЗ падает до 0</strong>, бросьте+ТЕЛ:</p>
<p><strong>На 10+</strong>&nbsp;восстановите половину ОЗ и выберите одно из списка ниже.</p>
<p><strong>На 7-9</strong>&nbsp;восстановите половину ОЗ и выберите два.</p>
<p><strong>На 6-</strong>&nbsp;либо восстановите 1 ОЗ и получите все три, либо перестаньте быть Ревенантом и вместо
    этого станьте Призраком.&nbsp;</p>
<ul>
    <li>Отметьте&nbsp;Последствие</li>
    <li>Вы выбываете из действия до следующего восхода солнца</li>
    <li>Ваше тело навсегда искалечено каким-то образом по выбору Ведущего</li>
</ul>
<p><strong>Если ваше тело полностью уничтожено</strong> (сожжено, расплавлено в жижу, съедено и т. п.), считайте что у
    вас стало 0 ОЗ и вы выбросили 6-.</p>

<h3><strong> Неумолимый</strong></h3>
<p><strong>Испытывая своё неживое тело на прочность</strong>, потеряйте 1к4 ОЗ и выберите одно:</p>
<ul>
    <li>Сделайте что-то, что требует нечеловеческой силы</li>
    <li>Действуйте с неестественной скоростью и грацией</li>
    <li>Не дайте сдвинуть себя с места, задержать себя или сбить с пути</li>
</ul>


<h1>Последствия</h1>

<h3><strong>Срыв</strong></h3>
<p><strong>Вы впадаете в бездумную, бесчувственную ярость</strong> которая длится до следующего восхода. Спросите
    Ведущего какие мгновения вы можете вспомнить.</p>

<h3><strong>Нестабильный</strong></h3>
<p><em>Требуется:&nbsp;Срыв</em><br>Вы склонны к эпизодам бездумной, бесчувственной ярости (как в Срыве). <strong>Каждый
    раз когда у вас выпадает 6-</strong>, Ведущий может решить что вы впадаете в такую ярость.</p>
<h3><strong>Запах смерти</strong></h3>
<p>За вами всегда стелется ужасный запах. <strong>Естественные звери будут избегать вас</strong>, и даже хищники будут
    держаться подальше от вас и ваших компаньонов.</p>

<h3><strong>Облик смерти</strong></h3>
<p>Для всех, кто на вас посмотрит, очевидно что вы ходячий труп.&nbsp;<strong>Используя угрозы и вашу зловещую внешность
    в качестве агрумента чтобы Договориться</strong>, бросайте с преимуществом.</p>

<h3><strong>Дом для вредителей</strong></h3>
<p><strong>Насекомые, моль и прочие вредители</strong> стали жить в вашем трупе. Они будут оказывать вам небольшие
    услуги, если вы попросите. Считайте их Последователем: <em>группа, крохотные, отвратительные, покорные,
        скрытные</em>, 1 ОЗ каждый, Инстинкт: Отвлекаться и Ценой: Искренняя симпатия.</p>
<h3><strong>Обитатель ночи</strong></h3>
<p><span><strong>Вы можете ясно видеть даже в абсолютной тьме</strong>, но из цветов в ней вы видите только белый, чёрный и красный</span>.
    В свою очередь, солнечный свет слепит вас, а прямые солнечные лучи обжигают вашу кожу.</p>
<h3><strong>Добыча</strong></h3>
<p><strong>Бледный Охотник</strong> учуял ваш запах. Ожидайте скорого визита.</p>

<h3><strong>Странные аппетиты</strong></h3>
<p><strong>Выберите</strong> одно:</p>
<ul>
    <li>Кости и костный мозг</li>
    <li>Мозги</li>
    <li>Глаза</li>
    <li>Предсмертные вздохи</li>
    <li>Гниющее мясо</li>
    <li>Всё ещё тёплая кровь.</li>
</ul>
<p><strong>Поедая то что вы выбрали</strong>, восстановите ОЗ равное половине ваших максимальных ОЗ или избавьтесь от
    Травмы.</p>

<h3><strong>Прожорливый</strong></h3>
<p><em>Требуется: Странные аппетиты</em></p>
<p>Когда у <strong>вас есть возможность удовлетворить свои Странные аппетиты</strong>, получите преимущество на
    следующий ход если вы это сделаете или Спасайтесь от угрозы если вы этого не сделаете (опасностью являются ваш
    ненасытный голод).</p>
<h2><strong>Финальное последствие</strong></h2>
<p>Ваша непрочная связь с человечеством разрывается и вы становитесь монстром под контролем Ведущего.</p>

`