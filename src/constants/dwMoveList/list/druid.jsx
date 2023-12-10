import React from 'react'

import DwMoveLink from '@/components/DwMoveLink'
import DwTag from '@/components/DwTag'
import sortByName from '@/utils/sortByName'

export default [
  {
    id: 'druid.background.ancient',
    name: 'Древний',
    text: (
      <>
        <p><strong><DwMoveLink id='common.spout_lore'>Копаясь в памяти</DwMoveLink> о мире природы или давно забытом</strong>, бросай с преимуществом.</p>
        <p><strong><DwMoveLink id='common.recover'>Восстанавливаясь</DwMoveLink> или <DwMoveLink id='common.set_camp'>Разбивая лагерь</DwMoveLink> в дикой местности</strong>, ты избавляешься от ментальной <DwTag id='trauma'>Травмы</DwTag> и очищаешься от любых обычных ядов и обычных болезней в начальных стадиях.</p>
      </>
    ),
  },
  {
    id: 'druid.background.totemist',
    name: 'Тотемист',
    text: (
      <>
        <p><strong>Выбери животное</strong>, с которым у тебя уже есть связь. Теперь это твой тотем.</p>
        <p><strong><em>Превращаясь</em> в свой тотем</strong>, ты получаешь +1 <DwMoveLink id='druid.start.transformation'>Инстинкт</DwMoveLink>.</p>
        <p><strong>Когда ты встречаешь в дикой местности своё тотемное животное или ему подобных</strong>, они всегда дружелюбны к тебе, пока ты не сделаете что-то, что изменит их мнение.</p>
      </>
    ),
  },
  {
    id: 'druid.background.shapeshifter',
    name: 'Перевёртыш',
    text: (
      <>
        <p><strong>Выбери вторую землю</strong> из списка <DwMoveLink id='druid.start.earth_child'>Родной земли</DwMoveLink>.</p>
        <p><strong><DwMoveLink id='common.recover'>Восстанавливаясь</DwMoveLink> или <DwMoveLink id='common.set_camp'>Разбивая лагерь</DwMoveLink></strong>, ты можешь <DwMoveLink id='druid.start.transformation'>Превратиться</DwMoveLink> без броска, но получишь только 1 <DwMoveLink id='druid.start.transformation'>Инстинкт</DwMoveLink>.</p>
      </>
    ),
  },
  {
    id: 'druid.start.earth_child',
    name: 'Дитя земли',
    text: (
      <>
        <p><strong>Ты черпаешь силу из земли и обитающих в ней духов</strong>. Выбери <em>Родную землю</em>, с которой ты связан.</p>
        <ul>
          <li>Великие леса.</li>
          <li>Выжженная пустошь.</li>
          <li>Глубины земли.</li>
          <li>Городские улицы.</li>
          <li>Громадные горы.</li>
          <li>Дельта реки.</li>
          <li>Зловонные топи.</li>
          <li>Морозный север.</li>
          <li>Открытое море.</li>
          <li>Просторная пустыня.</li>
          <li>Сапфировые острова.</li>
          <li>Фермы и поля.</li>
          <li>Шепчущие равнины.</li>
          <li>________________ (свой вариант, обсуди с Ведущим).</li>
        </ul>
        <p><strong>Затем, выбери <em>Отметину</em></strong>: метку, которая выдаёт в тебе дитя земли и говорит о связи с духами. Это может быть черта, присущая животному, вроде пятен леопарда или рогов, или что-то иное: волосы, похожие на листья, блестящие как лёд глаза. Метка остаётся на тебе в любом твоём облике.</p>
      </>
    ),
  },
  {
    id: 'druid.start.transformation',
    name: 'Превращение',
    text: (
      <>
        <p><strong>Призывая духов земли изменить твою форму</strong>, ты превращаетесь в естественное животное своей <DwMoveLink id='druid.start.earth_child'>Родной земли</DwMoveLink>, и брось +МДР.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— получи 3 <em>Инстинкта</em>.</li>
          <li>На <strong>7–9</strong>&nbsp;— получи 2 <em>Инстинкта</em>.</li>
          <li>На <strong>6−</strong>&nbsp;— всё равно получи 1 <em>Инстинкт</em>, но Ведущий делает ход.</li>
        </ul>
        <p>Твои вещи сливаются с формой животного. У тебя есть все его врождённые способности и слабости: когти, крылья, жабры, дыхание водой вместо воздуха. Ты всё ещё используете свои обычные характеристики, но некоторые ходы будет сложнее выполнить&nbsp;— коту будет трудно сражаться с огром.</p>
        <p>Если, <strong>будучи <em>Превращённым</em>, ты делаешь ход и у тебя выпадает 9−</strong>, то ты должен потратить <em>Инстинкт</em> или вернуться к своей нормальной форме. Ты можешь добровольно вернуться к своей нормальной форме в любое время; когда ты это сделаешь, потеряй любой оставшийся <em>Инстинкт</em>.</p>
      </>
    ),
  },
  {
    id: 'druid.start.spirit_language',
    name: 'Язык духов',
    text: (
      <>
        <p><strong>Ты можешь разговаривать с животными, зверями и духами природы</strong>.</p>
        <p>Ты всегда можете спросить Ведущего <em>«Какие духи здесь обитают?»</em> и получить честный ответ.</p>
      </>
    ),
  },
  {
    id: 'druid.start.old_faith_rite',
    name: 'Обряды старой веры',
    text: (
      <>
        <p><strong>Проводя обряд и призывая духов и силы природы себе на помощь</strong>, скажи Ведущему: чего ты хочешь добиться и каким образом. Ведущий поставит перед тобой от 1 до 4 требований из списка ниже. Когда ты их выполнишь, проведи <em>Обряд</em> и твоя просьба будет исполнена.</p>
        <ul>
          <li>Это займёт несколько минут / часов / дней / недель / месяцев.</li>
          <li>Ты должен делать это в важном для своей <DwMoveLink id='druid.start.earth_child'>Родной земли</DwMoveLink> месте (например _____).</li>
          <li>Ты должен сделать это в определённое время (например _____).</li>
          <li>Сначала ты должен _____________</li>
          <li>Тебе нужна помощь от ___________</li>
          <li>Ты сможете добиться лишь _____________</li>
          <li>Ты и твои союзники рискуете из-за _____________</li>
          <li>Тебе нужно пожертвовать или потратить ____________, чтобы сделать это.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'druid.advanced.summon_spirit',
    name: 'Призыв духа',
    text: (
      <p><strong>Проводя небольшой обряд, чтобы призвать духов места или предмета</strong>, сделай подношение, потратив <DwTag id='supplies'>Припасы</DwTag>. Духи появятся перед тобой — они не всегда дружелюбные, но по меньшей мере любопытные и готовые тебя выслушать.</p>
    ),
  },
  {
    id: 'druid.advanced.shepherd_step',
    name: 'Поступь пастыря',
    text: (
      <p><strong>Двигаясь через природное окружение с осторожностью и терпением</strong>, ты не шумишь, не оставляешь следов и можешь игнорировать любую опасную местность (шипастые растения, трясину, болото и т. п).</p>
    ),
  },
  {
    id: 'druid.advanced.balance',
    name: 'Равновесие',
    text: (
      <>
        <p><strong>Нанося урон</strong>, получи 1 <em>Равновесие</em> (максимум — ТЕЛ).</p>
        <p><strong>Касаясь кого-то и взывая к духам жизни</strong>, ты можешь потратить <em>Равновесие</em>, чтобы исцелить его. За каждое 1 <em>Равновесия</em> цель восстанавливает 1к6 <DwTag id='hp'>ОЗ</DwTag>.</p>
      </>
    ),
  },
  {
    id: 'druid.advanced.borrowed_power',
    name: 'Заимствованная сила',
    text: (
      <>
        <p><strong>Проводя несколько часов, общаясь с духом животного</strong>, ты можешь создать связь с этим животным. Создав связь, ты сможешь <DwMoveLink id='druid.start.transformation'>Превращаться</DwMoveLink> в это животное.</p>
        <p><strong>Дух может потребовать от тебя что-то взамен</strong>. Ведущий скажет — что он потребует (если потребует вообще).</p>
      </>
    ),
  },
  {
    id: 'druid.advanced.rock_n_vine',
    name: 'Камень и лоза',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='druid.advanced.borrowed_power'>Заимствованная сила</DwMoveLink></p>
        <p><strong>Теперь ты можешь создавать связь и с неживыми природными предметами</strong> (растениями, камнями и т. п.) или существами из них. Эти формы могут быть точными копиями или подвижными существами неопределенной гуманоидной формы.</p>
      </>
    ),
  },
  {
    id: 'druid.advanced.barkskin',
    name: 'Дубовая кожа',
    text: (
      <p><strong>Покуда ты касаешься земли</strong>, ты получаешь +1 брони.</p>
    ),
  },
  {
    id: 'druid.advanced.shedding',
    name: 'Линька',
    text: (
      <p><strong>Получая урон, будучи <DwMoveLink id='druid.start.transformation'>Превращённым</DwMoveLink></strong>, ты можешь потратить <DwMoveLink id='druid.start.transformation'>Инстинкт</DwMoveLink>, чтобы этот урон получил помеху.</p>
    ),
  },
  {
    id: 'druid.advanced.transformation_master',
    name: 'Мастер превращений',
    text: (
      <>
        <p><strong><DwMoveLink id='druid.start.transformation'>Превращаясь</DwMoveLink>, выбери характеристику</strong>. Пока ты превращён, ты бросаешь её с преимуществом.</p>
        <p>Ведущий тоже выбирает характеристику: пока ты <DwMoveLink id='druid.start.transformation'>превращён</DwMoveLink>, ты бросаешь её с помехой.</p>
        <p>Этот эффект длится, пока ты находишься в форме животного.</p>
      </>
    ),
  },
  {
    id: 'druid.advanced.elemental_lord',
    name: 'Властелин стихий',
    text: (
      <>
        <p><strong>Взывая к первородным духам стихий огня, воды, земли или воздуха, чтобы они исполнили твоё поручение</strong>, опиши — что ты хочешь, чтобы произошло и брось +ТЕЛ.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— выбери два.</li>
          <li>
            <p>На <strong>7–9</strong>&nbsp;— выбери одно.</p>
            <ul>
              <li>Эффект происходит именно так, как ты его представлял.</li>
              <li>Ты не платишь цену, которую требует природа.</li>
              <li>Ты сохраняешь контроль над действиями духов.</li>
            </ul>
          </li>
        </ul>
        <p>Чем больше твоё поручение, тем больше будет цена, и тем больше будут последствия от потери контроля.</p>
      </>
    ),
  },
  {
    id: 'druid.advanced.paw_n_fang',
    name: 'Мощная лапа, острый клык',
    text: (
      <p><strong><DwMoveLink id='druid.start.transformation'>Превращаясь</DwMoveLink> в страшное и опасное животное</strong>, твой урон увеличивается до к8 и твои атаки получают свойство <DwTag id='messy'>Месиво</DwTag>.</p>
    ),
  },
  {
    id: 'druid.advanced.natures_touch',
    name: 'Касание природы',
    text: (
      <>
        <p>Ты можешь создавать небольшие, но заметные чудеса&nbsp;— например, заставить расти лозу, двигать песок, гнуть или сращивать деревья. <strong>Концентрируя свою волю на окружающий мир, чтобы сотворить небольшое чудо</strong>, брось +МДР.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— происходит то, что ты хотел.</li>
          <li>На <strong>7–9</strong>&nbsp;— эффект всё равно срабатывает, но тебе придётся либо оплатить цену природы либо потерять контроль.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'druid.advanced.restore_balance',
    name: 'Восстановление баланса',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='druid.advanced.balance'>Равновесие</DwMoveLink></p>
        <p><strong>Ты можешь тратить <DwMoveLink id='druid.advanced.balance'>Равновесие</DwMoveLink></strong>, чтобы:</p>
        <ul>
          <li>Избавить цель от одной <DwTag id='trauma'>Травмы</DwTag>.</li>
          <li>Исцелить цель от обычного яда. Действие мощных или сверхъестественных ядов как минимум замедляется.</li>
          <li>Исцелить цель от обычной болезни в первых стадиях. Сильные болезни или болезни в поздних стадиях исцеляются лишь частично и потребуют традиционных методов лечения для полного избавления. Течение сверхъестественных болезней как минимум замедляется.</li>
          <li>Стабилизировать состояние цели, если она страдает от <DwTag id='hard_wound'>Проблемной Раны</DwTag> (хотя бы на время).</li>
        </ul>
      </>
    ),
  },
  {
    id: 'druid.capstone.primal_wild',
    name: 'Первобытная дикость',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='druid.advanced.transformation_master'>Мастер превращений</DwMoveLink></p>
        <p><strong>Превращаясь</strong>, ты можешь отметить <DwTag id='trauma'>Травмы</DwTag>. За каждую отмеченную <DwTag id='trauma'>Травму</DwTag> выбери два из списка:</p>
        <ul>
          <li>Твой урон получает преимущество.</li>
          <li>Ты игнорируете страх и все физические <DwTag id='trauma'>Травмы</DwTag>.</li>
          <li>Получи 1к4 <DwMoveLink id='druid.start.transformation'>Инстинкта</DwMoveLink>.</li>
          <li>Получи +1 брони.</li>
        </ul>
        <p>Эти бонусы длятся до окончания твоего <DwMoveLink id='druid.start.transformation'>Превращения</DwMoveLink>.</p>
      </>
    ),
  },
  {
    id: 'druid.capstone.soulmate',
    name: 'Близкие души',
    text: (
      <>
        <p><strong>Нанося метку или иначе отмечая зверя</strong>, потрать <DwTag id='supplies'>Припасы</DwTag> и ты сможешь воспринимать мир его чувствами вне зависимости от расстояния между вами. Ты также можешь направлять его действия: считай его <em>Последователем</em> с Верностью, равной твоей МДР.</p>
        <p>Таким образом ты можешь отметить только одного зверя одновременно.</p>
      </>
    ),
  },
  {
    id: 'druid.capstone.blood_n_thunder',
    name: 'Кровь и Гром',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='druid.advanced.paw_n_fang'>Мощная лапа, острый клык</DwMoveLink></p>
        <p><strong>Превращаясь в страшное и опасное животное</strong>, твой урон увеличивается до к10 и твои атаки получают свойства <DwTag id='forceful'>Мощные</DwTag> и <DwTag id='messy'>Месиво</DwTag>.</p>
      </>
    ),
  },
  {
    id: 'druid.capstone.elemental_form',
    name: 'Стихийная форма',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='druid.advanced.elemental_lord'>Властелин стихий</DwMoveLink></p>
        <p><strong>Получая этот ход</strong>, выбери одну из стихий:</p>
        <ul>
          <li>Огонь</li>
          <li>Вода</li>
          <li>Воздух</li>
          <li>Земля</li>
        </ul>
        <p><DwMoveLink id='druid.start.transformation'>Превращаясь</DwMoveLink>, теперь ты можешь принимать форму подвижного существа неопределенной гуманоидной формы выбранной тобой стихии.</p>
        <p><strong>Ты можешь выбирать этот ход дважды</strong>, выбирая новую стихию при каждом выборе.</p>
      </>
    ),
  },
  {
    id: 'druid.capstone.chimera',
    name: 'Химера',
    text: (
      <>
        <p><DwMoveLink id='druid.start.transformation'>Превращаясь</DwMoveLink>, ты можешь создать полностью новую форму, состоящую из трёх или менее частей уже известных тебе форм.</p>
        <p>Имея ходы <DwMoveLink id='druid.advanced.borrowed_power'>Заимствованная сила</DwMoveLink>, <DwMoveLink id='druid.advanced.rock_n_vine'>Камень и лоза</DwMoveLink> или <DwMoveLink id='druid.capstone.elemental_form'>Стихийная форма</DwMoveLink>, ты можешь использовать доступные формы и из них тоже.</p>
      </>
    ),
  },
  {
    id: 'druid.capstone.doppelganger_dance',
    name: 'Танец оборотня',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='druid.advanced.borrowed_power'>Заимствованная сила</DwMoveLink></p>
        <p><strong>Ты получаешь возможность создавать связь с конкретными личностями</strong> чтобы получить возможность <DwMoveLink id='druid.start.transformation'>Превращаться</DwMoveLink> в их точную форму, включая людей, эльфов и т. п.</p>
        <p><strong>Ты можешь подавить проявление своей <em>Отметины</em> в этой форме</strong>, но, если ты это делаешь, то получаешь помеху на все ходы, пока не вернёшься в свою истинную форму.</p>
      </>
    ),
  },
]
  .map(
    move => ({
      ...move,
      classId: 'druid',
    }),
  )
  .sort(sortByName)
