import React from 'react'

import DwMoveLink from '@/components/DwMoveLink'
import sortByName from '@/utils/sortByName'
import generateDwPcClassPathById from '@/utils/generateDwPcClassPathById'
import { Link } from 'gatsby'

export default [
  {
    id: 'incinerator.background.dragon_blood',
    name: 'Драконья кровь',
    text: (
      <>
        <p><em><strong>Сражаясь со свирепостью древних драконов</strong>, увеличь свою кость урона до к10.</em></p>
        <p><em>Кроме того, <strong><DwMoveLink id='common.defy_danger'>Спасаясь от угрозы</DwMoveLink> с помощью своего внутреннего огня, чтобы выдержать или запугать</strong>, бросай с преимуществом.</em></p>
      </>
    ),
  },
  {
    id: 'incinerator.background.infernal_link',
    name: 'Инфернальная связь',
    text: (
      <>
        <p><strong>Твоё <DwMoveLink id='incinerator.start.fire_brand'>Огненное клеймо</DwMoveLink> обжигает как тело, так и душу</strong>&nbsp;— оно имеет <em>Пробивание 2</em> против всех смертных существ.</p>
        <p>Кроме того, <strong>когда ты убиваешь смертное существо</strong>, пламя забирает его душу и ты получаешь 1 <DwMoveLink id='incinerator.start.flame_fuel'>Топлива</DwMoveLink>.</p>
      </>
    ),
  },
  {
    id: 'incinerator.background.phoenix_soul',
    name: 'Душа феникса',
    text: (
      <>
        <p><strong>Просыпаясь после полноценного ночного отдыха</strong>, получи 2 <DwMoveLink id='incinerator.start.flame_fuel'>Топлива</DwMoveLink>.</p>
        <p><strong>Делая <DwMoveLink id='common.last_breathe'>Последний вздох</DwMoveLink></strong>, ты можешь потратить <DwMoveLink id='incinerator.start.flame_fuel'>Топливо</DwMoveLink> чтобы добавить +1 к броску за каждое потраченное <DwMoveLink id='incinerator.start.flame_fuel'>Топливо</DwMoveLink>.</p>
      </>
    ),
  },
  {
    id: 'incinerator.start.fire_brand',
    name: 'Огненное клеймо',
    text: (
      <>
        <p><strong>Призывая оружие из чистого пламени</strong>, брось +МДР. Это оружие всегда обладает свойствами <em>Огненное</em>, <em>Рука</em> и <em>Опасное</em>.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— выбери два свойства из списка, добавь их к оружию и опиши итоговую форму твоего <em>Клейма</em>.</li>
          <li>На <strong>7–9</strong>&nbsp;— одно.</li>
          <li>На <strong>6−</strong>&nbsp;— ты не выбираешь свойств. Ты всё равно получаешь оружие, но оно получает свойство <em>Голодное</em>. Корми его, или иначе…</li>
        </ul>
        <p>Возможные свойства <em>Огненного клейма</em></p>
        <ul>
          <li><em>Взмах меча</em>.</li>
          <li><em>Точное</em>.</li>
          <li>Удали свойство <em>Опасное</em>.</li>
          <li><em>Метательное</em> и <em>Близко</em>.</li>
        </ul>
        <p><em>Огненное клеймо</em> существует, пока не будет погашено.</p>
      </>
    ),
  },
  {
    id: 'incinerator.start.flame_fuel',
    name: 'Топливо для пламени',
    text: (
      <>
        <p><strong>Если ты не носишь броню и получаешь урон</strong>, пламя внутри тебя приходит на помощь. Получи 1 <em>Топлива</em> (максимум 3).</p>
        <p>Ты можешь потратить 1 <em>Топливо</em> (когда угодно, не обязательно сразу после получения урона), чтобы:</p>
        <ul>
          <li>Восстановить <em>1к4</em> ОЗ.</li>
          <li>Получить преимущество на следующий вызов <DwMoveLink id='incinerator.start.fire_brand'>Огненного клейма</DwMoveLink>.</li>
          <li>Нанести +1 урона <DwMoveLink id='incinerator.start.fire_brand'>Огненным клеймом</DwMoveLink>.</li>
        </ul>
        <p>Когда ты <DwMoveLink id='common.set_camp'>Разбиваешь лагерь</DwMoveLink> или получаешь исцеление из любого источника (кроме этого хода), <strong>потеряй всё <em>Топливо</em>.</strong></p>
      </>
    ),
  },
  {
    id: 'incinerator.start.flame_marked',
    name: 'Отмеченный пламенем',
    text: (
      <p><strong>Опиши, что ты пожертвовал пламени</strong>. Взамен, естественный огонь и жар больше не вредит тебе и ты всегда имеешь свойство <em>Тёплый</em>, находясь на холоде или морозе.</p>
    ),
  },
  {
    id: 'incinerator.start.fire_up',
    name: 'Дай огня',
    text: (
      <p><strong>Пристально вглядываясь кому-то в глаза</strong>, ты можешь спросить у игрока, отвечающего за этого персонажа: <em>«Что питает огонь твоих желаний?»</em>. Игрок (или Ведущий) должен ответить честно, даже если персонаж сам не осознаёт ответа или пытался его скрыть.</p>
    ),
  },
  {
    id: 'incinerator.advanced.hand_made',
    name: 'Ручное изготовление',
    text: (
      <>
        <p><strong>Ты можешь использовать свои руки вместо инструментов, чтобы придавать металлу форму</strong>. Касаясь металла, ты можешь, хоть и не мгновенно, но довольно быстро разогревать его докрасна вокруг точки касания. Обычное оружие, броня и металлические украшения&nbsp;— всё может быть создано или переделано из сырья. Без спокойной обстановки и времени, возможно, придётся <DwMoveLink id='common.defy_danger'>Спастись от угрозы</DwMoveLink>.</p>
        <p><em>Чтобы было проще представить и понять этот ход&nbsp;— представь, что у тебя есть портативная кузница с инструментами. Ты можешь раскалять металл, твои руки заменяют инструменты, вроде молотка, клещей и так далее. Например, так ты можешь раздвинуть прутья, но это займёт время,&nbsp;— сначала нужно подержаться за них, чтобы раскалить, а потом гнуть ударами, просто у тебя вместо молотка — руки. Если ты хочешь быстро — придётся <DwMoveLink id='common.defy_danger'>Спасаться от угрозы</DwMoveLink>.</em></p>
      </>
    ),
  },
  {
    id: 'incinerator.advanced.candle_in_the_dark',
    name: 'Свеча во тьме',
    text: (
      <p><strong>Находясь в темноте, густом тумане или дыму</strong>, ты ясно видишь всё вокруг благодаря свету своего внутреннего пламени. Факела, лампы, свечи и прочие обыденные источники огня никогда не погаснут в твоём присутствии, и, даже если их потушить, они тут же загорятся вновь при первой же возможности.</p>
    ),
  },
  {
    id: 'incinerator.advanced.zuko_style',
    name: 'Стиль Зуко',
    text: (
      <>
        <p><strong>Пытаясь подчинить пламя своей воле</strong>, брось +МДР</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— оно подчиняется, принимая угодную тебе форму, и двигается согласно твоему желанию, пока есть чему гореть.</li>
          <li>На <strong>7–9</strong>&nbsp;— эффект длится лишь несколько мгновений.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'incinerator.advanced.wisdom_of_the_flame',
    name: 'Мудрость пламени',
    text: (
      <p><strong>Когда ты пристально смотришь в огонь в поисках видений</strong>, Ведущий раскроет тебе Тёмное Знамение — мрачное событие, которое произойдёт без твоего вмешательства. Если ты желаешь более подробное или конкретное видение, ты должен принести жертву огню&nbsp;— Ведущий скажет, чем тебе нужно пожертвовать.</p>
    ),
  },
  {
    id: 'incinerator.advanced.consuming_flame',
    name: 'Всепожирающее пламя',
    text: (
      <>
        <p>Ты можешь выбирать и следующие возможные свойства при вызове <DwMoveLink id='incinerator.start.fire_brand'>Огненного клейма</DwMoveLink>:</p>
        <ul>
          <li><em>Мощное</em></li>
          <li><em>Месиво</em></li>
          <li><em>Удар копья</em></li>
        </ul>
      </>
    ),
  },
  {
    id: 'incinerator.advanced.wildfire',
    name: 'Дикий огонь',
    text: (
      <p><strong>Когда ты отбрасываешь осторожность и принимаешь хаос</strong>, любой урон, наносимый <DwMoveLink id='incinerator.start.fire_brand'>Огненным клеймом</DwMoveLink> или управляемым тобой огнём, получает преимущество.</p>
    ),
  },
  {
    id: 'incinerator.advanced.alike_moths',
    name: 'Словно мотыльки на огонь',
    text: (
      <>
        <p><strong>Искушая своим внутренним пламенем чужой слабый разум</strong>, брось +ХАР.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— его воля подавлена и он будет действовать так, как ты хочешь, пока его что-то не испугает или удивит.</li>
          <li>На <strong>7–9</strong>&nbsp;— эффекта хватает только на то, чтобы отвлечь или сбить его с толку.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'incinerator.advanced.burns_twice',
    name: 'Горит вдвое ярче, сгорает вдвое быстрее',
    text: (
      <>
        <p><strong>Взывая к пламени судьбы</strong>, ты можешь считать бросок 6− как 7–9 или 7–9 как 10+.</p>
        <p>Делая это, опиши Ведущему — <strong>что ты пожертвовал, чтобы это случилось: воспоминание, эмоцию, или какую-то часть себя?</strong> Это исчезает навсегда. Ты не можешь сделать так снова, пока не выполнишь нижеописанное условие.</p>
        <p><strong>Выбрасывая 10+ на любой ход</strong>, ты можешь посчитать его как 6− (не отмечай опыт) и тогда снова сможешь пользоваться вышеописанной способностью.</p>
      </>
    ),
  },
  {
    id: 'incinerator.advanced.unquenchable',
    name: 'Неугасимый',
    text: (
      <p><strong>Вызывая <DwMoveLink id='incinerator.start.fire_brand'>Огненное клеймо</DwMoveLink></strong>, выбери ещё одно свойство, даже на 6−.</p>
    ),
  },
  {
    id: 'incinerator.advanced.firestarter',
    name: 'Разжигатель',
    text: (
      <>
        <p><strong>Укрепляя мужество в других</strong>, брось +ХАР.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— они стряхивают любой страх или сомнения, мгновенно становясь храбрыми.</li>
          <li>На <strong>7–9</strong>&nbsp;— эффект мимолётен&nbsp;— они понимают что он искусственен и очень быстро вернутся к своему обычному поведению.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'incinerator.capstone.burn_at_two_ends',
    name: 'Горя с двух концов',
    text: (
      <>
        <p><strong>Увеличь максимум <DwMoveLink id='incinerator.start.flame_fuel'>Топлива</DwMoveLink></strong> до 4.</p>
        <p><strong>Когда угодно</strong> ты можешь решить получить 1к4 урона (игнорируя броню и любые сопротивления) и получить 1 <DwMoveLink id='incinerator.start.flame_fuel'>Топлива</DwMoveLink>.</p>
      </>
    ),
  },
  {
    id: 'incinerator.capstone.walking_torch',
    name: 'Ходячий факел',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='incinerator.advanced.zuko_style'>Стиль Зуко</DwMoveLink></p>
        <p><strong>Используя <DwMoveLink id='incinerator.advanced.zuko_style'>Стиль Зуко</DwMoveLink></strong>, ты можешь потратить 1 <DwMoveLink id='incinerator.start.flame_fuel'>Топливо</DwMoveLink>, чтобы получить преимущество на бросок.</p>
        <p>Когда ты получаешь <strong>10+</strong> на <DwMoveLink id='incinerator.advanced.zuko_style'>Стиль Зуко</DwMoveLink>, пламя будет существовать несколько минут даже если гореть уже нечему.</p>
      </>
    ),
  },
  {
    id: 'incinerator.capstone.burn_with_me',
    name: 'Гори вместе со мной',
    text: (
      <>
        <p><strong>Союзники в дальности <em>Близко</em></strong> получают все преимущества хода <DwMoveLink id='incinerator.start.flame_marked'>Отмеченный пламенем</DwMoveLink>.</p>
        <p><strong>Касаясь обычного оружия</strong>, ты можешь потратить 1 <DwMoveLink id='incinerator.start.flame_fuel'>Топлива</DwMoveLink> и дать ему свойства <em>Огненное</em> и <em>Урон +1</em> на несколько часов.</p>
      </>
    ),
  },
  {
    id: 'incinerator.capstone.inferno',
    name: 'Инферно',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='incinerator.advanced.consuming_flame'>Всепожирающее пламя</DwMoveLink> или <DwMoveLink id='incinerator.advanced.wildfire'>Дикий огонь</DwMoveLink></p>
        <p><strong>Призывая <DwMoveLink id='incinerator.start.fire_brand'>Огненное клеймо</DwMoveLink></strong>, на 10+, в дополнение к обычным вариантам, выбери один из эффектов:</p>
        <ul>
          <li><DwMoveLink id='incinerator.start.fire_brand'>Огненное клеймо</DwMoveLink> горит белым пламенем, <em>Игнорируя броню.</em></li>
          <li><DwMoveLink id='incinerator.start.fire_brand'>Огненное клеймо</DwMoveLink> взрывается при попадании, получая свойство <em>По Области</em>.</li>
          <li><DwMoveLink id='incinerator.start.fire_brand'>Огненное клеймо</DwMoveLink> всегда возвращается в твою открытую руку (если оно <em>Метательное</em>).</li>
        </ul>
      </>
    ),
  },
  {
    id: 'incinerator.capstone.purifying_flame',
    name: 'Очищающее пламя',
    text: (
      <>
        <p><strong>Добавь</strong> следующие варианты в <DwMoveLink id='incinerator.start.flame_fuel'>Топливо для пламени</DwMoveLink>:</p>
        <ul>
          <li>Восстанови 1к6 ОЗ.</li>
          <li>Очистись от смертного яда или болезни.</li>
          <li>Союзник, которого ты касаешься, восстанавливает 1к4 ОЗ.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'incinerator.capstone.see_the_heart',
    name: 'Глядеть в очаг',
    text: (
      <>
        <p><strong>Ища в пламени ответы о ком-то, кого ты знаешь</strong>, брось +МДР:</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— задай два вопроса из списка и Ведущий тебе честно ответит.</li>
          <li>На <strong>7–9</strong>&nbsp;— задай один вопрос.</li>
        </ul>
        <p>Вопросы</p>
        <ul>
          <li>Как у него дела?</li>
          <li>Кого он лучше всего знает, больше всего любит и кому больше всех доверяет?</li>
          <li>Когда я могу рассчитывать увидеться с ним в следующий раз?</li>
          <li>Как мне добраться до него, физически или эмоционально?</li>
        </ul>
      </>
    ),
  },
  {
    id: 'incinerator.capstone.let_it_fire',
    name: 'Гори оно всё огнём',
    text: (
      <>
        <p><strong>Открывая брешь на План Огня и вызывая из его недр бурю</strong>, скажи Ведущему, чем ты жертвуешь, и брось +МДР. Небо разверзается, и огонь льется, как дождь, в пределах области и в течение времени, пропорционального твоей жертве; всё и вся в этой области получает соответствующий урон.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— ты в любой момент можете прекратить шторм и погасить огонь без особых усилий.</li>
          <li>На <strong>7–9</strong>&nbsp;— огонь вырывается из-под твоего контроля, подхватываемый ветрами и погодой.</li>
        </ul>
      </>
    ),
  },
]
  .map(
    move => ({
      ...move,
      classId: 'incinerator',
    }),
  )
  .sort(sortByName)
