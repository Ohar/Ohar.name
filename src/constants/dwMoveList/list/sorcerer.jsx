import React from 'react'

import DwMoveLink from '@/components/DwMoveLink'
import sortByName from '@/utils/sortByName'
import generateDwPcClassPathById from '@/utils/generateDwPcClassPathById'
import { Link } from 'gatsby'

export default [
  {
    id: 'sorcerer.capstone.archmage',
    name: 'Архимаг',
    text: (
      <>
        <p><strong>Освой</strong> ещё один <DwMoveLink id='sorcerer.special.domain_cantrips'>Домен</DwMoveLink>. Ты можешь выбрать этот ход дважды. <strong>Выбирая этот ход второй раз</strong>, освой ещё один <DwMoveLink id='sorcerer.special.domain_cantrips'>Домен</DwMoveLink>.</p>
        <p>Кроме того, <strong>проводя <DwMoveLink id='sorcerer.start.ritual'>Ритуал</DwMoveLink></strong>, ты можешь игнорировать одно из требований Ведущего.</p>
      </>
    ),
  },
  {
    id: 'sorcerer.capstone.ether_connection',
    name: 'Эфирная связь',
    text: (
      <p><strong>Около часа проводя магические манипуляции с добровольным или беспомощным существом</strong>, ты можешь создать с ним эфирную связь. Ты можешь воспринимать всё его чуствами и <DwMoveLink id='common.discern_realities'>Изучать обстановку</DwMoveLink> о нём или вокруг него, вне зависимости от расстояния между вами. С добровольно связанным этой связью существом можно общаться, как если бы вы были в одной комнате.</p>
    ),
  },
  {
    id: 'sorcerer.capstone.enchanter',
    name: 'Зачарователь',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='sorcerer.advanced.antiquarian'>Антиквар</DwMoveLink></p>
        <p><strong>Некоторое время работая в безопасном месте над волшебным предметом</strong>, ты можешь потратить использование Припасов, чтобы усилить его эффекты на одно следующее использование; Ведущий скажет — как именно.</p>
      </>
    ),
  },
  {
    id: 'sorcerer.capstone.great_empower',
    name: 'Великое усиление',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='sorcerer.advanced.empower'>Усиление</DwMoveLink></p>
        <p><strong><DwMoveLink id='sorcerer.start.cast_spell'>Плетя заклинания</DwMoveLink></strong>, на 12+ ты получаешь 3 <em>Мощи</em> вместо 2 и заклинание срабатывает лучше, чем ожидалось, или имеет какую-то полезную особенность; Ведущий опишет — какую.</p>
      </>
    ),
  },
  {
    id: 'sorcerer.advanced.polyglot',
    name: 'Полиглот',
    text: (
      <>
        <p><strong>Впервые встречая новый язык</strong>, расскажи — откуда ты его знаешь? Если Ведущий согласен, ты его знаешь. Если нет, брось +ИНТ. <strong>Если язык редкий</strong>, бросай с помехой.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— ты владеешь им на уровне носителя и у тебя нет акцента.</li>
          <li>На <strong>7–9</strong>&nbsp;— ты им владеешь, но общение или чтение занимает время на вспоминание слов и правил языка.</li>
          <li>
            <p>На <strong>6−</strong>&nbsp;— так же, как на 7–9, но выбери одно и не отмечай опыт.</p>
            <ul>
              <li>Ты умеешь читать и писать.</li>
              <li>Ты умеешь понимать и общаться.</li>
            </ul>
          </li>
        </ul>
        <p><strong>Если язык мёртвый, секретный или ты не можешь его знать по другим причинам</strong>, за несколько дней общения с носителем или изучения письменности, ты можешь выбрать соответствующий вариант на 6−. Если у тебя в доступе есть как носитель языка, так и письменность, то за несколько недель ты овладеешь им на уровне 7–9.</p>
      </>
    ),
  },
  {
    id: 'sorcerer.advanced.know-it-all',
    name: 'Всезнайка',
    text: (
      <>
        <p><strong><DwMoveLink id='common.spout_lore'>Копаясь в памяти</DwMoveLink></strong>, на 10+ ты можешь задать Ведущему ещё один вопрос на ту же тему, и он честно ответит.</p>
        <p><strong>Кроме того, <DwMoveLink id='common.spout_lore'>Копаясь в памяти</DwMoveLink></strong>, что бы у тебя ни выпало, ты можешь спросить Ведущего <em>«Как или где я могу узнать больше?»</em> (после того, как он ответит на твой изначальный вопрос) и получить честный ответ.</p>
      </>
    ),
  },
  {
    id: 'sorcerer.advanced.warmage',
    name: 'Боевой маг',
    text: (
      <>
        <p>Ты можешь выбрать этот ход дважды. <strong>Выбирая этот ход</strong>, выбери одно:</p>
        <ul>
          <li>Увеличь кость базового урона до к6.</li>
          <li>Получи ход <Link to={generateDwPcClassPathById('warrior')}>Воина</Link>, Паладина или Следопыта.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'sorcerer.advanced.dispel_magic',
    name: 'Рассеять магию',
    text: (
      <>
        <p><strong>Некоторое время расплетая длительный магический эффект</strong>, брось +ИНТ.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— у тебя всё получается.</li>
          <li>
            <p>На <strong>7–9</strong>&nbsp;— выбери два.</p>
            <ul>
              <li>Магия не вернётся через некоторое время.</li>
              <li>Ослабленная версия магии не продолжает существовать.</li>
              <li>Потревоженная магия не создаёт выброс и никому не вредит.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'sorcerer.advanced.counterspell',
    name: 'Контрзаклинание',
    text: (
      <>
        <p><strong>Пытаясь помешать другому заклинателю сплести заклинание</strong>, брось +ИНТ.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— выбери два.</li>
          <li>На <strong>7–9</strong>&nbsp;— выбери одно.</li>
        </ul>
        <p>Варианты</p>
        <ul>
          <li>Урон того заклинания уменьшается наполовину.</li>
          <li>Эффекты того заклинания ослабляются и действует намного меньшее время.</li>
          <li>У тебя преимущество на следующий ход против этого заклинателя.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'sorcerer.advanced.empower',
    name: 'Усиление',
    text: (
      <p><strong><DwMoveLink id='sorcerer.start.cast_spell'>Плетя заклинания</DwMoveLink></strong>, на 10+ ты можешь выбрать вариант из списка для 7–9. Делая так, ты получаешь 3 <em>Мощи</em> вместо 2.</p>
    ),
  },
  {
    id: 'sorcerer.advanced.magic_protection',
    name: 'Магический оберег',
    text: (
      <>
        <p><strong><DwMoveLink id='sorcerer.start.cast_spell'>Плетя заклинания</DwMoveLink></strong>, ты можешь потратить неиспользованную <em>Мощь</em> 1 к 1, получая столько же <em>Защиты</em> (максимум – ИНТ).</p>
        <p><strong>Получая урон</strong>, ты можешь потратить 1 <em>Защиту</em>, чтобы этот урон получил помеху.</p>
        <p><strong><DwMoveLink id='common.set_camp'>Разбивая лагерь</DwMoveLink></strong>, потеряй всю <em>Защиту</em>.</p>
      </>
    ),
  },
  {
    id: 'sorcerer.advanced.bookworm',
    name: 'Книжный червь',
    text: (
      <p><strong><DwMoveLink id='common.spout_lore'>Копаясь в памяти</DwMoveLink></strong>, ты можешь потратить использование Припасов, чтобы достать книгу, свиток или другой источник знания. <strong>Некоторое время изучая то, что ты достал</strong>, ты можешь считать 6− как 7–9, а 7–9 как 10+.</p>
    ),
  },
  {
    id: 'sorcerer.advanced.logic',
    name: 'Логика',
    text: (
      <p><strong>Анализируя окружающую среду с помощью тщательного наблюдения или логики</strong>, ты можешь <DwMoveLink id='common.discern_realities'>Изучать обстановку</DwMoveLink>, используя ИНТ, а не МДР.</p>
    ),
  },
  {
    id: 'sorcerer.advanced.equal_exchange',
    name: 'Равнозначный обмен',
    text: (
      <>
        <p><strong>Добавь этот вариант</strong> в список выборов 7–9 <DwMoveLink id='sorcerer.start.cast_spell'>Плетения заклинания</DwMoveLink>:</p>
        <ul>
          <li>Потеряй ОЗ, равные меньшей из выброшенных костей (не считается получением урона).</li>
        </ul>
      </>
    ),
  },
  {
    id: 'sorcerer.advanced.antiquarian',
    name: 'Антиквар',
    text: (
      <>
        <p><strong>Тратя время в безопасном месте на внимательное изучение волшебного предмета</strong>, задай Ведущему два вопроса из списка:</p>
        <ul>
          <li>Кто это создал и насколько давно?</li>
          <li>Что оно делает?</li>
          <li>Как я могу это активировать или отремонтировать?</li>
          <li>Что в нём не то, чем кажется?</li>
        </ul>
      </>
    ),
  },
  {
    id: 'sorcerer.advanced.expert',
    name: 'Эксперт',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='sorcerer.advanced.adept'>Адепт</DwMoveLink></p>
        <p><strong>Освой</strong> ещё один <DwMoveLink id='sorcerer.special.domain_cantrips'>Домен</DwMoveLink>.</p>
      </>
    ),
  },
  {
    id: 'sorcerer.advanced.adept',
    name: 'Адепт',
    text: (
      <p><strong>Освой</strong> ещё один <DwMoveLink id='sorcerer.special.domain_cantrips'>Домен</DwMoveLink>.</p>
    ),
  },
  {
    id: 'sorcerer.backstory.study',
    name: 'Обучение',
    text: (
      <>
        <p><strong>Выбери</strong> любимый <DwMoveLink id='sorcerer.special.domain_cantrips'>Домен</DwMoveLink> (из освоенных). <strong><DwMoveLink id='sorcerer.start.cast_spell'>Плетя заклинание</DwMoveLink> своего любимого <DwMoveLink id='sorcerer.special.domain_cantrips'>Домена</DwMoveLink></strong>, на 7–9 ты получаешь 2 <em>Мощи</em> вместо 1.</p>
        <p><strong>Ты можешь сменить свой любимый <DwMoveLink id='sorcerer.special.domain_cantrips'>Домен</DwMoveLink></strong>, но это займёт дни или даже недели изысканий и тренировок.</p>
      </>
    ),
  },
  {
    id: 'sorcerer.backstory.lineage',
    name: 'Родословная',
    text: (
      <>
        <p><strong>Опиши</strong> свою родословную, источник твоей внутренней магической силы.</p>
        <p><strong><DwMoveLink id='common.recover'>Восстанавливаясь</DwMoveLink></strong>, избавься от всех <em>Штрафов</em> к <DwMoveLink id='sorcerer.start.cast_spell'>Плетению заклинания</DwMoveLink> (кроме одного).</p>
        <p>Когда ты <strong>встречаешь существ, с которыми у тебя общая родословная</strong>, — они не будут изначально к тебе враждебны, пока ты сами их не спровоцируешь.</p>
      </>
    ),
  },
  {
    id: 'sorcerer.backstory.pact',
    name: 'Сделка',
    text: (
      <>
        <p><strong>Опиши</strong> внеземного <em>Покровителя</em>, который даёт тебе магическую силу.</p>
        <p><strong><DwMoveLink id='sorcerer.start.cast_spell'>Плетя заклинание</DwMoveLink></strong>, ты можешь получить 1 <em>Долг</em> (максимум 3) чтобы считать 7–9 как 10+.</p>
        <p><strong>Проводя <DwMoveLink id='sorcerer.start.ritual'>Ритуал</DwMoveLink></strong>, ты можешь получить 1 <em>Долг</em>, чтобы игнорировать одно из требований Ведущего.</p>
        <p><strong>Когда накопится 3 <em>Долга</em></strong>, <em>Покровитель</em> проявит себя и даст тебе задачу. Выполнив её, потеряй весь <em>Долг</em>.</p>
      </>
    ),
  },
  {
    id: 'sorcerer.start.ritual',
    name: 'Ритуал',
    text: (
      <>
        <p><strong>Когда ты желаешь сотворить магию</strong>, скажи Ведущему: чего ты хочешь добиться и каким образом. Ведущий поставит перед тобой от 1 до 4 требований из списка ниже. Когда ты их выполнишь, проведи <em>Ритуал</em> и магия возымеет эффект.</p>
        <ul>
          <li>Это займёт несколько минут/часов/дней/недель/месяцев.</li>
          <li>Ты должен почерпнуть магии в Месте силы (например _____).</li>
          <li>Ты должен сделать это в определённое время (например _____).</li>
          <li>Сначала ты должен _____________.</li>
          <li>Тебе нужна помощь от ___________.</li>
          <li>Ты сможешь добиться лишь _____________.</li>
          <li>Вы с союзниками рискуете из-за _____________.</li>
          <li>Тебе нужно пожертвовать или потратить ____________.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'sorcerer.start.cast_spell',
    name: 'Плести заклинание',
    text: (
      <>
        <p>Ты уже владеешь <DwMoveLink id='sorcerer.special.domain_cantrips'>Доменом Заговоров</DwMoveLink>. Освой ещё один <DwMoveLink id='sorcerer.special.domain_cantrips'>Домен</DwMoveLink>.</p>
        <p><strong>Плетя заклинание одного из освоенных <DwMoveLink id='sorcerer.special.domain_cantrips'>Доменов</DwMoveLink></strong>, брось +ИНТ.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— ты получаешь 2 <em>Мощи</em>, которые можешь потратить на заклинание.</li>
          <li>
            <p>На <strong>7–9</strong>&nbsp;— ты получаешь 1 <em>Мощи</em>, но также выбираешь один из вариантов:</p>
            <ul>
              <li>Заклинание имеет нежелательные эффекты или ограничения.</li>
              <li>Ты привлекаешь нежелательное внимание или оказываешься в сложном положении.</li>
              <li>
                <p>Заклинание искажает ткань реальности вокруг тебя (расскажи — как?). Получи <em>Штраф</em> −1 (накапливается, максимум −3) на <em>Плетение заклинаний</em>.</p>
                <p><DwMoveLink id='common.recover'>Восстанавливаясь</DwMoveLink>, убери один <em>Штраф</em>.</p>
                <p><DwMoveLink id='common.set_camp'>Разбивая лагерь</DwMoveLink>, убери все <em>Штрафы</em>.</p>
              </li>
            </ul>
          </li>
        </ul>
        <p><em>Мощь</em>, оставшаяся после <em>Плетения заклинания</em>, пропадает, её нельзя сохранить на потом.</p>
      </>
    ),
  },
  {
    id: 'sorcerer.start.flaw',
    name: 'Изъян',
    text: (
      <>
        <p>Ты не можешь <DwMoveLink id='sorcerer.start.cast_spell'>Плести заклинания</DwMoveLink> или проводить <DwMoveLink id='sorcerer.start.ritual'>Ритуал</DwMoveLink> (выбери одно из списка ниже)…</p>
        <ul>
          <li>…если не можешь ясно говорить.</li>
          <li>…если одна из рук чем-то занята.</li>
          <li>…если несёшь или носишь что-то металлическое.</li>
          <li>…против кого-то, кто несёт, носит или ограждён ________________.</li>
          <li>…пока у тебя нет своего _____________. Ты можешь изготовить замену с помощью <DwMoveLink id='sorcerer.start.ritual'>Ритуала</DwMoveLink> (такой <DwMoveLink id='sorcerer.start.ritual'>Ритуал</DwMoveLink> всегда можно провести), но это будет трудоёмко и дорого.</li>
          <li>____________________________ (твой вариант, обсуди с Ведущим).</li>
        </ul>
      </>
    ),
  },
  {
    id: 'sorcerer.special.domain_cantrips',
    name: 'Домен Заговоров',
    text: (
      <>
        <p><strong>Ты создаёшь небольшой магический эффект</strong>. Выбери одно (игнорируй <em>Мощь</em>).</p>
        <ul>
          <li>Вещь, которой ты касаешься, начинает светиться магическим светом с яркостью факела и продолжает светиться, пока ты не развеешь эффект или она не окажется далеко.</li>
          <li>Ведущий скажет, что вокруг есть магического.</li>
          <li>Ты вносишь косметические изменения в предмет, к которому прикасаешься: очищаешь его, пачкаешь, охлаждаешь, нагреваешь, меняешь его запах или цвет.</li>
          <li>Ты восстанавливаешь одну трещину или разрыв в предмете, который держишь.</li>
          <li>Ты медленно телекинетически поднимаешь или перемещаешь видимый тобой лёгкий предмет, который никто не несёт и не носит.</li>
          <li>Ты ненадолго создаёшь безвредный эффект, вроде снопа искр из пальцев, лёгкого порыва ветра, тихой мелодии и т. п.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'sorcerer.special.domain_divination',
    name: 'Домен Прорицания',
    text: (
      <>
        <p><strong>Ты вызываешь видение через пространство, время и разум</strong>, раскрывая секреты, знание и даже, может быть, собственную судьбу.</p>
        <p>Выбери один эффект, дополнительную цель, более чёткое видение или большую длительность за каждую <em>Мощь</em>.</p>
        <ul>
          <li>Ты формируешь телепатическую связь с видимым тобой существом.</li>
          <li>Ты смотришь в зеркальную поверхность и узнаёшь о Тёмном Знамении, которое произойдёт. Это редко что-то хорошее.</li>
          <li>Ты касаешься предмета и узнаёшь — кто касался его последним.</li>
          <li>Ты считываешь поверхностные мысли видимого тобой разумного существа.</li>
          <li>Ты можешь понимать языки всех смертных существ (но не говорить) или понимать любой письменный язык (но не писать).</li>
        </ul>
        <p>Пока это Прорицание действует, <strong>ты <DwMoveLink id='sorcerer.start.cast_spell'>Плетёшь заклинания</DwMoveLink> с помехой</strong>.</p>
      </>
    ),
  },
  {
    id: 'sorcerer.special.domain_evocation',
    name: 'Домен Воплощения',
    text: (
      <>
        <p><strong>Ты формируешь снаряд магической энергии</strong>, который попадает в видимую тобой цель, нанося 2к4 урона с одним из следующих свойств: <em>огонь</em>, <em>холод</em> или <em>электричество</em>.</p>
        <p>Затем выбери одно за каждую <em>Мощь</em>.</p>
        <ul>
          <li>Заклинание становится <em>Мощным</em>.</li>
          <li>Заклинание получает свойство <em>По Области</em>.</li>
          <li>Урон игнорирует броню.</li>
          <li>Заклинание наносит +1 урона.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'sorcerer.special.domain_illusion',
    name: 'Домен Иллюзии',
    text: (
      <>
        <p><strong>Ты создаешь иллюзию</strong> на ком-то или чём-то, к чему можешь прикоснуться, изменяя его внешний вид или делая невидимым до тех пор, пока концентрируешься на заклинании, или пока кто-то не повзаимодействует с ним, чтобы доказать, что это иллюзия.</p>
        <p><strong>Выбери один дополнительный эффект</strong> за каждую <em>Мощь</em>.</p>
        <ul>
          <li>Иллюзия может двигаться (ты должен выбрать этот вариант если цель иллюзии — существо, иначе она развеется, если оно сдвинется с места).</li>
          <li>Вместо этого иллюзия покрывает небольшую, недвижимую область вокруг видимого тобой места.</li>
          <li>Иллюзия может включать в себя звуки, запахи или вкусы.</li>
          <li>Иллюзия излучает свет или создаёт тьму.</li>
          <li>Иллюзия существует некоторое время после того, как ты перестаёшь на ней концентрироваться.</li>
        </ul>
        <p>Пока эта Иллюзия действует, <strong>ты <DwMoveLink id='sorcerer.start.cast_spell'>Плетёшь заклинания</DwMoveLink> с помехой</strong>.</p>
      </>
    ),
  },
  {
    id: 'sorcerer.special.domain_protection',
    name: 'Домен Ограждения',
    text: (
      <>
        <p><strong>Ты ставишь оберег на небольшую область, предмет или нарисованный тобой круг</strong>.</p>
        <p>Выбери одно за каждую <em>Мощь</em>.</p>
        <ul>
          <li>Никакая магия, кроме твоей, не может пересечь оберег.</li>
          <li>Выбери тип существа: такие существа не могут пересечь оберег.</li>
          <li>Первое существо, которое пересечёт или потревожит оберег, получит 1к10 урона.</li>
          <li>Когда до оберега кто-то дотрагивается или пересекает его, ты узнаёшь об этом, где бы ты ни был.</li>
          <li>Твои союзники в защищённой оберегом области получают +1 к броне.</li>
        </ul>
        <p><strong>Оберег существует до тех пор</strong>, пока ты не прекратишь его, что-то не нарушит его, или он не будет развеян.</p>
      </>
    ),
  },
  {
    id: 'sorcerer.special.domain_summon',
    name: 'Домен Призыва',
    text: (
      <>
        <p><strong>Ты вызываешь магическое существо или конструкцию себе на помощь</strong>. Опиши его внешний вид, отталкиваясь от выбранных свойств и ходов.</p>
        <p><strong>Призванное существо</strong></p>
        <ul>
          <li>Не очень умно и может говорить, если позволяет форма.</li>
          <li>Его свойства: <em>Безрассудный</em> и ещё одно на твой выбор.</li>
          <li>У него 6 ОЗ.</li>
          <li>Его кость урона к4.</li>
        </ul>
        <p><strong>Выбери одно из списка за каждую <em>Мощь</em></strong> (можно выбирать один и тот же вариант несколько раз).</p>
        <ul>
          <li>Убери ему свойство <em>Безрассудный.</em></li>
          <li>Добавь ему свойство или ход, подходящие его природе.</li>
          <li>Увеличь ему кость урона (например с к4 до к6).</li>
        </ul>
        <p>Призванное существо существует, пока <strong>не будет уничтожено или ты его не отпустишь</strong>.</p>
        <p>Пока этот Призыв действует, <strong>ты <DwMoveLink id='sorcerer.start.cast_spell'>Плетёшь заклинания</DwMoveLink> с помехой</strong>.</p>
      </>
    ),
  },
  {
    id: 'sorcerer.special.domain_charm',
    name: 'Домен Зачарования',
    text: (
      <>
        <p>Ты насылаешь чары на видимое тобой существо.</p>
        <p><strong>Выбери один эффект или дополнительную цель</strong> за&nbsp;каждую <em>Мощь</em>.</p>
        <ul>
          <li>Оно не может тебе навредить, кроме как защищая себя.</li>
          <li>Оно должно бездумно действовать на основании сильной эмоции, которую уже ощущает.</li>
          <li>Оно впадает в лёгкий сон или стоит, заколдованное, пока кто-нибудь не приведёт его в чувство.</li>
          <li>Оно честно ответит на один заданный тобой вопрос.</li>
          <li>Оно глохнет или слепнет на несколько мгновений.</li>
          <li>Оно забывает всё о последних нескольких минутах.</li>
        </ul>
        <p><strong>Зачарование длится, пока</strong> цель не окажется далеко, выбранный эффект не завершится, выбранный эффект не будет нарушен, либо пока ты не решишь его прекратить.</p>
        <p>Пока это Зачарование действует, <strong>ты <DwMoveLink id='sorcerer.start.cast_spell'>Плетёшь заклинания</DwMoveLink> с помехой</strong>.</p>
      </>
    ),
  },
  {
    id: 'sorcerer.special.domain_necromancy',
    name: 'Домен Некромантии',
    text: (
      <>
        <p><strong>Ты сплетаешь энергии жизни и смерти, что окружают всех существ</strong>. Выбери один эффект или дополнительную цель за каждую <em>Мощь</em>.</p>
        <ul>
          <li>Мертвец, которого ты касаешься, ответит на один твой вопрос так хорошо, как сможет, исходя из своих знаний при жизни.</li>
          <li>Видимое тобой существо наполняется сверхъестественным ужасом и выбирает: бежать от тебя, паниковать, прятаться, или драться в отчаянии, до тех пор, пока ты не <DwMoveLink id='sorcerer.start.cast_spell'>Сплетёшь другое заклинание</DwMoveLink>.</li>
          <li>Ты вытягиваешь жизнь из существа, находящегося <em>Близко</em>; нанеси ему 1к6 урона и восстанови себе ОЗ в половину нанесённого урона, округляя вниз.</li>
          <li>Ты касанием передаёшь свою жизненную энергию кому-то. Цель восстанавливает 1к6 хитов, а ты теряешь половину от восстановленного количества.</li>
          <li>Ты или кто-то, кого ты касаешься, ненадолго становится нематериальной тенью (всё ещё видимой) до тех пор, пока не сделает какой-либо ход или не пройдёт немного времени.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'sorcerer.special.domain_transmutation',
    name: 'Домен Преобразования',
    text: (
      <>
        <p><strong>Ты физически изменяешь предмет, себя, или других существ</strong>. Выбери один эффект или дополнительную цель за&nbsp;каждую <em>Мощь</em>.</p>
        <ul>
          <li>Твоё касание медленно изменяет форму не очень большого объёма земли, воды, камня или дерева, так, как Ты хотите.</li>
          <li>Видимый тобой предмет открывается, отпирается или распутывается с характерным громким звуком.</li>
          <li>Не очень большой предмет, которого ты касаешься, оживает и будет подчиняться твоим командам. Поработай с Ведущим над его характеристиками в зависимости от того, что это за предмет.</li>
          <li>Цель может дышать под водой.</li>
          <li>Цель может ясно видеть в темноте.</li>
          <li>Цель может карабкаться по стенам, как паук.</li>
        </ul>
        <p>Эффекты длятся, пока ты не откажешься от них.</p>
        <p>Пока это Преобразование действует, <strong>ты <DwMoveLink id='sorcerer.start.cast_spell'>Плетёшь заклинания</DwMoveLink> с помехой</strong>.</p>
      </>
    ),
  },
  {
    id: 'sorcerer.special.domain_creation',
    name: 'Домен Сотворения',
    text: (
      <>
        <p><strong>Ты создаёшь материальные вещи из ничего</strong>. Выбери один эффект, дополнительную цель или добавь свойство за каждую <em>Мощь</em>.</p>
        <ul>
          <li>Ты призываешь обыденный предмет, оружие или щит.</li>
          <li>Ты призываешь препятствие, которое замедляет или сдерживает 1к4 видимых тобой существ. Опиши — как? Ведущий скажет, насколько это эффективно.</li>
          <li>Ты призываешь достаточно еды, чтобы небольшая группа могла <DwMoveLink id='common.set_camp'>Разбить лагерь</DwMoveLink>.</li>
          <li>Ты призываешь туман или дымку, которая заслоняет область вокруг тебя.</li>
          <li>Ты призываешь в руку пламя, которым можешь поджигать предметы, освещать путь или согреваться.</li>
        </ul>
        <p>Все призванные вещи исчезают через несколько часов, или если они ломаются или иначе становятся бесполезны.</p>
      </>
    ),
  },
]
  .map(
    move => ({
      ...move,
      classId: 'sorcerer',
    }),
  )
  .sort(sortByName)
