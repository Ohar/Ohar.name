import React from 'react'

import DwMoveLink from '@/components/DwMoveLink'
import sortByName from '@/utils/sortByName'

export default [
  {
    id: 'common.fight_as_one',
    name: 'Бороться как один',
    text: (
      <>
        <p><strong>Преодолевая опасность всей группой</strong>, определите подход группы и все бросают + то, что скажет Ведущий (как если бы вы все <DwMoveLink id='common.defy_danger'>Спасались от угрозы</DwMoveLink>).</p>
        <ul>
          <li>На <strong>10+</strong> Ты без особого труда преодолеваешь опасность, и можешь помочь менее удачливому товарищу, попавшему в неприятность (если, конечно, расскажешь, как именно ты ему помогаешь).</li>
          <li>На <strong>7–9</strong> — ты с трудом преодолеваешь опасность.</li>
          <li>На <strong>6−</strong> – ты попал в неприятности. Ведущий опишет, что произойдёт. Если кто-то тебя спас, не отмечай опыт.</li>
        </ul>
        <p>«Бороться как один» — это способ разрешить «групповые проверки», например когда группа пробирается в лагерь бандитов или пытается залезть по скалам. Если у всех выпадает успех или неудачники были спасены, то ситуация может быть быстро разрешена и описана на основе результатов бросков, а затем вы можете двигаться дальше. Если кто-то проваливается и его никто не спасает, это приводит группу в напряжённую ситуацию, которая развивается как обычно.</p>
      </>
    ),
  },
  {
    id: 'common.defy_danger',
    name: 'Спастись от угрозы',
    text: (
      <>
        <p>Когда <strong>ставки высоки, опасность близится и ты всё равно решаешь действовать</strong>, брось…</p>
        <ul>
          <li>…+СИЛ, чтобы прорваться напролом или испытать свою силу;</li>
          <li>…+ЛОВ, используя скорость, ловкость или изящество;</li>
          <li>…+ТЕЛ, чтобы крепко держаться или стойко выдержать;</li>
          <li>…+ИНТ, чтобы применить знания или привести в действие хитрый план;</li>
          <li>…+МДР, чтобы крепиться волей или чтобы положиться на свои чувства;</li>
          <li>…+ХАР, чтобы очаровать, обмануть, впечатлить или влиться в компанию;</li>
        </ul>
        <p>Результаты:</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— тебе удаётся осуществить задуманное так хорошо, как можно было надеяться.</li>
          <li>На <strong>7–9</strong>&nbsp;— ты можешь это сделать, но Ведущий предложит результат похуже, успех за цену, последствие, или выбор между ними (или шанс отказаться от затеи).</li>
        </ul>
      </>
    ),
  },
  {
    id: 'common.defend',
    name: 'Встать на защиту',
    text: (
      <>
        <p><strong>Вставая в защитную стойку</strong> или <strong>бросаясь защищать кого-то или что-то</strong>, брось +ТЕЛ.</p>
        <p><strong>Когда ты идёшь в атаку, перестаёшь фокусироваться на защите или угроза проходит</strong>, ты теряешь всю оставшуюся <em>Готовность</em>.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— получи 3 <em>Готовности</em> (4, если носишь щит).</li>
          <li>На <strong>7–9</strong>&nbsp;— получи 1 <em>Готовности</em> (2, если носишь щит).</li>
        </ul>
        <p>Трать <em>Готовность</em>, чтобы:</p>
        <ul>
          <li>Заслонить то, что ты защищаешь и принять атаку или эффект на себя.</li>
          <li>Ополовинить эффект или урон от атаки (до применения брони).</li>
          <li>Ударить атакующего в ответ (если он в пределах досягаемости). Нанеси урон с помехой.</li>
          <li>Отвлечь внимание атакующего на себя.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'common.parley',
    name: 'Договориться',
    text: (
      <>
        <p><strong>Убеждая или давя на персонажа Ведущего</strong>, расскажи, что ты хочешь, чтобы он сделал (или не делал) и, если у него есть причина сопротивляться, брось +ХАР.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— он либо делает, как ты хотите, либо раскрывают самый лёгкий способ себя убедить.</li>
          <li>На <strong>7–9</strong>&nbsp;— он раскрывает способ себя убедить, но он будет сложным, дорогим или неприятным.</li>
        </ul>
        <p><em>«Самый простой способ» не значит что его легко достичь. Убедить королевского стражника пропустить тебя всё равно будет сложно. Например, На 10+ он попросит тебя принести ему бутылку редкого виски, а на 7–9 вытащить его семью из долговой ямы.</em></p>
        <p><em>«Договориться» — это не очарование, но и не простая вежливая просьба. Если у тебя есть рычаг воздействия на собеседника (компромат или его расположение), Ведущий должен учитывать это, раскрывая цену убеждения.</em></p>
        <p>Примеры того, что может убедить персонажа Ведущего:</p>
        <ul>
          <li>Обещание / клятва / обет.</li>
          <li>Что-то, чего он хочет или в чём нуждается.</li>
          <li>Конкретные гарантии / доказательства / сотрудничество.</li>
          <li>Давление / разрешение / помощь от кого-то.</li>
          <li>Убедительный обман.</li>
          <li>Призыв или обращение к его эго/чести/совести/страхам.</li>
          <li>Лучшее / справедливое / чрезмерное предложение.</li>
          <li>Помощь / выполнение просьбы вместе с ним.</li>
          <li>Насилие (или реальная угроза его применения).</li>
        </ul>
      </>
    ),
  },
  {
    id: 'common.discern_realities',
    name: 'Изучить обстановку',
    text: (
      <>
        <p><strong>Изучая человека или ситуацию</strong> и обращаясь к Ведущему за подробностями, брось +МДР.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— задай Ведущему до трёх вопросов из списка</li>
          <li>На <strong>7–9</strong>&nbsp;— задай один вопрос.</li>
        </ul>
        <p>В любом случае, <strong>в первый раз используя полученные сведения для совершения хода</strong>, бросай с преимуществом.</p>
        <ul>
          <li>Что здесь недавно произошло?</li>
          <li>Что вот-вот случится?</li>
          <li>Чего мне стоит остерегаться/опасаться?</li>
          <li>Что здесь есть полезного или ценного для меня?</li>
          <li>Кто или что здесь на самом деле контролирует ситуацию?</li>
          <li>Что здесь не то, чем кажется?</li>
        </ul>
      </>
    ),
  },
  {
    id: 'common.session_end',
    name: 'Конец сессии',
    text: (
      <>
        <p><strong>В конце игровой сессии:</strong></p>
        <ul>
          <li>Приведи пример того, <strong>как ты следовал, выполнил, нажил проблем или боролся из-за хотя бы одного своего Стремления</strong>. Если все согласны, запишите опыт.</li>
          <li>Опиши, как изменились твоё мнение или отношения с другим персонажем игрока или Ведущего. Если все согласны, запишите опыт.</li>
        </ul>
        <p><strong>Затем совместно ответьте на следующие вопросы:</strong></p>
        <ul>
          <li>Узнали ли мы о мире что-то новое и важное?</li>
          <li>Преодолели ли мы значительного врага или опасность?</li>
          <li>Нашли ли мы что-то ценное или создали прочные отношения?</li>
        </ul>
        <p>За каждый ответ <em>«Да»</em> все записывают себе опыт.</p>
        <p><strong>Кроме того, не забудь:</strong></p>
        <ul>
          <li>Рассказать, что тебе понравилось на сессии.</li>
          <li>Пожелать, что бы ты хотел видеть на следующей сессии — больше ___, меньше ____, разрешать ____ по-другому и так далее. Ведущему это важно.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'common.spout_lore',
    name: 'Копаться в памяти',
    text: (
      <>
        <p>Когда <strong>ты&nbsp;пытаешься найти в своих залежах памяти сведения о чём-либо</strong>, брось +ИНТ.</p>
        <p><strong>В любом случае</strong>, Ведущий может спросить <em>«А откуда ты это знаешь?»</em></p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— Ведущий сообщит тебе что-то интересное и полезное о том, что связано с текущей ситуацией.</li>
          <li>На <strong>7–9</strong>&nbsp;— Ведущий сообщит тебе только что-то интересное. А как сделать это полезным — уже твои проблемы.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'common.help',
    name: 'Помощь',
    text: (
      <>
        <p>Когда <strong>ты помогаешь кому-то, кто совершает ход, но кости ещё не были брошены</strong>, Ведущий выбирает одно:</p>
        <ul>
          <li>Тот, кому ты помогаешь, достигает большего, чем мог бы в одиночку.</li>
          <li>Тот, кому ты помогаешь, получает преимущество на бросок.</li>
        </ul>
        <p>В любом случае, ты подвергаешься любому риску, затратам или последствиям, связанными с тем ходом.</p>
      </>
    ),
  },
  {
    id: 'common.last_breathe',
    name: 'Последний вздох',
    text: (
      <>
        <p><strong>Умирая</strong>, на мгновение ты видишь Чёрные Врата и саму Смерть (опиши их). Затем брось +ничего.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— ты выкарабкиваешься обратно в мир живых. Ты приходишь в себя с 1 ОЗ, но опиши: как столкновение со смертью отметило тебя.</li>
          <li>
            <p>На <strong>7–9</strong>&nbsp;— Ведущий выбирает одно:</p>
            <ul>
              <li>Смерть считает, что твоё время ещё не пришло — ты больше не умираешь, но выбываешь из сцены.</li>
              <li>Тебе придётся пойти на сделку со Смертью. Прими её предложение, и твоё состояние стабилизируется. Откажешься — и шагнёшь за Чёрные Врата навстречу своей судьбе.</li>
            </ul>
          </li>
          <li>
            <p>На <strong>6−</strong>&nbsp;— твоё время пришло. Выбери одно:</p>
            <ul>
              <li>Сделай свой последний ход, словно бы ты выбросил 12+ и затем шагни через Чёрные Врата.</li>
              <li>Смерть отмечает тебя как своего: ты выбываешь из сцены и остаёшься в живых на время, но скоро Смерть неизбежно заберёт тебя — Ведущий скажет, когда.</li>
              <li>Откажись уходить — стань Ревенантом или Призраком.</li>
              <li>Взови по имени к одному из Тех, Кто Живёт Внизу, взмоли его вмешаться и стань его Траллом.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'common.set_camp',
    name: 'Разбить лагерь',
    text: (
      <>
        <p><strong>Устраивая привал в опасной местности</strong>, ответьте на вопросы Ведущего о своём лагере. Кто-нибудь в группе должен потратить одно использование Припасов.</p>
        <p><strong>Если ты поел, попил и спал хотя бы несколько часов без перерыва</strong>, выбери одно:</p>
        <ul>
          <li>Восстанови половину от своих максимальных ОЗ, округляя вверх.</li>
          <li>Избавься от одной <em>Травмы</em>.</li>
        </ul>
        <p><strong>Если твой отдых был особенно спокойным, комфортным или приятным</strong>, ты также получаешь преимущество на следующий ход. Для получения этого преимущества отдых должен быть <em>отличным</em>, а не просто приемлемым. Это исключение, а не правило.</p>
      </>
    ),
  },
  {
    id: 'common.hack_n_slash',
    name: 'Руби и кромсай',
    text: (
      <>
        <p><strong>Сражаясь в ближнем бою или в рукопашной</strong>, брось +СИЛ.</p>
        <ul>
          <li>
            <p>На <strong>10+</strong>&nbsp;— твой манёвр работает, как и ожидалось (нанеси урон) и выбери одно:</p>
            <ul>
              <li>Ты уклоняешься, предотвращаешь или отбиваешь вражескую атаку.</li>
              <li>Ты наносишь сильный и быстрый удар, нанося +1к6 урона, но получаешь контратаку противника.</li>
            </ul>
          </li>
          <li>На <strong>7–9</strong>&nbsp;— твой манёвр по большей части удаётся (нанеси свой урон), но ты страдаешь от атаки противника.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'common.volley',
    name: 'Дать залп',
    text: (
      <>
        <p><strong>Делая несложный выстрел из дальнобойного оружия</strong>, нанеси свой урон.</p>
        <p><strong>Если выстрел сложный или ты находишься под давлением</strong>, сначала брось +ЛОВ.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— ты попадаешь, нанеси свой урон.</li>
          <li>
            <p>На <strong>7–9</strong>&nbsp;— выбери одно.</p>
            <ul>
              <li>Нанеси урон, но это стоит боеприпасов, потрать использование Припасов (недоступно для <em>Метательного</em> оружия).</li>
              <li>Тебе придётся выждать некоторое время для точного выстрела; когда время настанет (по решению Ведущего), нанеси урон.</li>
              <li>Смени позицию, чтобы сделать удачный выстрел — ты рискуешь раскрыть себя опасности или потерять какое-то преимущество (Ведущий скажет что именно) — затем нанеси свой урон.</li>
              <li>Поторопись с выстрелом и нанеси урон, но это будет стоить цену или приведёт к последствиям.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'common.level_up',
    name: 'Повысить уровень',
    text: (
      <>
        <p>Когда у тебя <strong>появляется свободное время</strong> (от нескольких часов до нескольких дней), а <strong>опыт равен (или выше) текущему уровню + 10</strong>, ты можешь потратить опыт, чтобы обдумать недавние события и отточить свои навыки. Сделай всё это:</p>
        <ol>
          <li>Вычти из опыта текущий уровень + 10.</li>
          <li>Подними уровень на 1.</li>
          <li>
            <p>Выбери одно</p>
            <ul>
              <li>Выбери новый сложный ход своего класса.</li>
              <li>Увеличь модификатор характеристики на 1, с максимумом +2.</li>
              <li>
                <p><strong>Достигая уровня 6 или выше</strong>, ты также можешь выбрать из вариантов ниже.</p>
                <ul>
                  <li>Получи высший ход своего класса.</li>
                  <li>Получи сложный или высший (не стартовый) ход другого класса. Ты можешь сделать это лишь один раз.</li>
                  <li>Увеличь один из параметров на +1 (максимум +3). Ты можешь сделать это лишь один раз.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'common.recover',
    name: 'Восстановиться',
    text: (
      <>
        <p><strong>Некоторое время переводя дух и заботясь о здоровье</strong>, потрать использование Припасов и восстанови 1к6 ОЗ (если кто-то заботится о тебе, то кидает кость и тратит Припасы он). Ты не можешь снова исцеляться таким образом до тех пор, пока снова не получишь урон.</p>
        <p><strong>Профилактически ухаживая за <em>Травмами</em> или <em>Проблемными Ранами</em></strong>, расскажи: как ты это делаешь и брось +ТЕЛ (если ухаживаешь за собой) или +МДР (если ухаживаешь за другим).</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— ты позаботился о недуге настолько хорошо, насколько это возможно (опишет Ведущий).</li>
          <li>На <strong>7–9</strong>&nbsp;— для этого потребуются дополнительные усилия (<DwMoveLink id='common.defy_danger'>Спастись от угрозы</DwMoveLink>, <DwMoveLink id='common.set_camp'>Разбить лагерь</DwMoveLink>) или ресурсы (потратить использование Припасов, найти _____).</li>
        </ul>
      </>
    ),
  },
  {
    id: 'common.keep_company',
    name: 'Составить компанию',
    text: (
      <>
        <p><strong>Проводя большое количество времени вместе (в дороге, в лагере и т.п.)&nbsp; спросите остальных — хотят ли они составить компанию?</strong> Если хотят, то&nbsp;по очереди задайте друг другу по одному вопросу из списка — игроку или персонажу Ведущего.</p>
        <p>Эти вопросы задаются не напрямую, а для описания повествования на протяжении времени. Например, на вопрос&nbsp; <em>«Что такого ты делаешь, что раздражает/мило?»</em> ответ примерно такой <em>«По ночам Ульфрик громко храпит и ворочается во сне»</em> или <em>«Когда есть время, Ульфрик часто отходит в сторону, чтобы недолго помолиться».</em></p>
        <ul>
          <li>Что такого ты делаешь, что раздражает/мило?</li>
          <li>Что я такого делаю что ты считаешь раздражающим/милым?</li>
          <li>Кто или что у тебя на уме?</li>
          <li>О чём мы сейчас говорили или ещё говорим?</li>
          <li>Как ты (или мы) проводишь/убиваешь (проводим/убиваем) время?</li>
          <li>Что нового ты раскрываешь о себе?</li>
        </ul>
      </>
    ),
  },
  {
    id: 'common.mental_fortress',
    name: 'Крепиться разумом',
    text: (
      <>
        <p>Когда<strong> тебя&nbsp;пытаются заставить действовать против своей воли</strong>, отметь опыт, если делаешь как велено. <strong>Если ты противишься</strong>, брось +МУД.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— ты стряхиваешь наваждение и действуешь как хочешь.</li>
          <li>
            <p>На <strong>7–9</strong>&nbsp;— выбери одно:</p>
            <ul>
              <li>Ты пытаешься сопротивляться контролю над своим разумом и больше ничего не можешь делать.</li>
              <li>Начни делать как велено, но остановись в самый последний момент.</li>
              <li>Сделай себе больно, чтобы немедленно высвободиться (нанеси себе урон сквозь броню).</li>
            </ul>
          </li>
          <li>
            <p>На <strong>6−</strong>&nbsp;— выбери одно:</p>
            <ul>
              <li>Отметь <em>Травму</em>, нанеси себе урон сквозь броню и сделай что-то радикальное, чтобы вернуть себе контроль.</li>
              <li>Делай как велено. Ты очнёшься потом, делая чёрт-знает-что.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'common.make_a_plan',
    name: 'Придумать план',
    text: (
      <>
        <p><strong>Когда ты хочешь разработать хитрый план или выполнить какой-то проект</strong>, расскажи, чего ты хочешь добиться. Затем Ведущий поставит тебе от 1 до 4 из требований ниже, соединяя их между собой с помощью «и» и «или».</p>
        <ul>
          <li>Нужно узнать / понять как _______.</li>
          <li>Нужно найти / обнаружить / получить __________.</li>
          <li>Нужно расшифровать / починить / найти решение для __________.</li>
          <li>Нужно создать / разработать / установить ____________.</li>
          <li>Нужно подождать, пока _____________.</li>
          <li>Понадобится помощь / поддержка / одобрение от&nbsp;_________.</li>
          <li>Это займёт ___ часов / дней / недель / месяцев / лет.</li>
          <li>Это будет стоить ___________.</li>
          <li>Ты рискуешь ___________.</li>
        </ul>
        <p><strong>Если тебе непонятно, как можно выполнить какое-либо поставленных требований</strong>, Ведущий разобьёт его ещё на 1–4 требования из списка выше.</p>
      </>
    ),
  },
]
  .map(
    move => ({
      ...move,
      classId: 'common',
    }),
  )
  .sort(sortByName)
