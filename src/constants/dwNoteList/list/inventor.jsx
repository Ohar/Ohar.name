import React from 'react'

import DwMoveLink from '@/components/DwMoveLink'

export default {
  id: 'inventor_note',
  text: (
    <section>
      <h2>Гаджеты изобретателя и их свойства</h2>
      <p>Ход Изобретателя <DwMoveLink id='inventor.start.gadget_belt'>Пояс гаджетов</DwMoveLink> даёт ему много крутых <DwMoveLink id='inventor.start.gadget_belt'>Гаджетов</DwMoveLink>, созданных путём присоединения трёх слов друг к другу и добавления свойства. Некоторые из свойств довольно простые&nbsp;— вроде <em>Пробивание 2</em> и <em>Мощное</em>, которые уже покрыты правилами Dungeon World. Но что значит <em>Стихийный</em>? Какие виды <em>Альтернативного передвижения</em> нормальные? Эта часть отвечает на эти вопросы.</p>

      <h3>Свойства: <em>Мощное</em> и <em>Пробивание 2</em></h3>
      <p>Просто для полноты, эти свойства будут описаны здесь. И <em>Мощные</em> и <em>Пробивающие</em> <DwMoveLink id='inventor.start.gadget_belt'>Гаджеты</DwMoveLink> <strong>должны быть оружием</strong>&nbsp;— у них есть одно свойство дальности, ими можно <DwMoveLink id='common.hack_n_slash'>Рубить и кромсать</DwMoveLink> и <DwMoveLink id='common.volley'>Давать залп</DwMoveLink>, и они наносят к8 урона.</p>
      <p><em>Мощный</em> <DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> посылает свою цель в недолгий полёт при попадании. <em>Мощные</em> <DwMoveLink id='inventor.start.gadget_belt'>Гаджеты</DwMoveLink> либо сильно бьют, либо взрываются, либо толкают существ могучей силой.</p>
      <p><strong>Примеры <em>Мощных</em> <DwMoveLink id='inventor.start.gadget_belt'>Гаджетов</DwMoveLink></strong>: Механические взрывные безделушки, Магнитная излучающая палочка, Алхимическая усиливающая перчатка, Паровое излучающее сопло, Алхимический лучевой голем.</p>
      <p><em>Пробивающий</em> <DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> это тот, который игнорирует 2 брони при нанесении урона. Обычно у <em>Пробивающих</em> <DwMoveLink id='inventor.start.gadget_belt'>Гаджетов</DwMoveLink> необычные или странные способы обходить обычные формы защиты.</p>
      <p><sub><strong>Примеры пробивающих гаджетов</strong>: эктоплазмическое лучевое устройство, электрическая полевая перчатка, магнитная пропульсивная палочка, паровое излучающее сопло.</sub></p>

      <h3>Свойство: <em>Броня +2 против ________</em></h3>
      <p><DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> со свойством <em>Броня +2 против ________</em> требует, чтобы ты назвал конкретную вещь или воздействие, от которого он защищает&nbsp;— его броня не универсальна. Из-за своей защитной природы, такие <DwMoveLink id='inventor.start.gadget_belt'>Гаджеты</DwMoveLink> редко являются оружием, хоть они и могут быть им. Если это оружие, то оно редко имеет дальность дальше чем <em>Рука</em>.</p>
      <p>Не обязательно выбирать из списка защит ниже, это просто примеры.</p>
      <ul>
        <li>
          <p><strong><em>Броня +2 против Огня</em></strong></p>
          <p><DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> очевиден&nbsp;— он защищает от огненного урона. Магический огонь, поджигание тебя, проход через очень жаркую комнату: урон от подобных источников уменьшается на 2. Другие возможные стихии: <em>Холод</em>, <em>Электричество</em>, <em>Химикаты</em>, <em>Призраки</em>.</p>
          <p><strong>Примеры таких гаджетов:</strong> пироматическая ослабляющая перчатка, алхимический реверсивный костюм.</p>
        </li>
        <li>
          <p><strong><em>Броня +2 против Боеприпасов</em></strong></p>
          <p>Такой <DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> защищает от большинства дальнобойных атак&nbsp;— стрел, метательного оружия, и всего, что использует Боеприпасы. Он защитит тебя от боеприпасов небольших размеров, но не от летящих булыжников или падающих потолков.</p>
          <p><strong>Примеры таких гаджетов:</strong> электрический защитный голем, магнитный полевой пояс.</p>
        </li>
        <li>
          <p><strong><em>Броня +2 против Окружения</em></strong></p>
          <p>Такой <DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> не защитит тебя от топора или оружия, но убережёт от самых разных опасностей. Он смягчит падение, замедлит падающие на тебя обломки и поможет пересечь лужу едкой кислоты.</p>
          <p><strong>Примеры таких гаджетов:</strong> эктоплазмический усиливающий костюм, механический ослабляющий голем.</p>
        </li>
      </ul>

      <h3>Свойство: Стихия (_________)</h3>
      <p>Стихийный <DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> это, в первую очередь, оружие. Выбирая это свойство, ты собираешься вредить людям. Свойство <em>Стихия</em> — это именно то, что даёт твоему <DwMoveLink id='inventor.start.gadget_belt'>Гаджету</DwMoveLink> стихийные свойства&nbsp;— без него твоя пироматическая лучевая пушка не будет ничего поджигать.</p>
      <p>Не обязательно выбирать стихии из списка ниже, но если ты хочешь использовать другую стихию, обязательно обсуди это с Ведущим.</p>

      <ul>
        <li>
          <p><strong>Стихия (Огонь)</strong></p>
          <p><DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> сжигает и поджигает. Враги, задетые таким <DwMoveLink id='inventor.start.gadget_belt'>Гаджетом</DwMoveLink>, загораются. Ты можешь уничтожать им бумагу или дерево, разводить костёр или уничтожать деревянные здания, если у тебя достаточно времени.</p>
          <p><strong>Примеры таких гаджетов:</strong> пироматическая лучевая пушка, пироматическая взрывная перчатка.</p>
        </li>
        <li>
          <p><strong>Стихия (Холод)</strong></p>
          <p><DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> замораживает. Враги, задетые таким <DwMoveLink id='inventor.start.gadget_belt'>Гаджетом</DwMoveLink>, примерзают к месту. Ты можешь замораживать им воду, тушить пожары или создавать скользкие поверхности.</p>
          <p><strong>Примеры таких гаджетов:</strong> криогенные взрывные склянки, криогенный излучающий жезл.</p>
        </li>
        <li>
          <p><strong>Стихия (Электричество)</strong></p>
          <p><DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> шокирует. Враги, задетые таким <DwMoveLink id='inventor.start.gadget_belt'>Гаджетом</DwMoveLink>, оглушены. Ты можешь им отбрасывать вещи, создавать свет и запитывать древние технологии.</p>
          <p><strong>Примеры таких гаджетов:</strong> электрическая усиливающая перчатка, электрическое проецирующее устройство.</p>
        </li>
      </ul>

      <h3>Свойство: Альтернативное передвижение (_________)</h3>
      <p>Такой <DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> почти никогда не является оружием. <DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> с <em>Альтернативным передвижением</em> позволяет тебе передвигаться со стилем. Тебе не нужно использовать ход <DwMoveLink id='inventor.start.field_test'>Полевое испытание</DwMoveLink> чтобы использовать такой <DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> для указанного способа передвижения. Единственное ограничение на такие <DwMoveLink id='inventor.start.gadget_belt'>Гаджеты</DwMoveLink>&nbsp;— нельзя выбрать любую форму прямого полёта. Если ты хочешь летать, выбери <em>Парение</em> или <em>Прыжок</em> и используй <DwMoveLink id='inventor.start.field_test'>Полевое испытание</DwMoveLink> чтобы попробовать полетать</p>
      <p>Можно выбирать и не указанные здесь методы передвижения, но обязательно обсуди это с Ведущим.</p>
      <ul>
        <li>
          <p><strong>Альтернативное передвижение (Парение)</strong></p>
          <p>Такой гаджет оставит чистыми твои ноги. Он немного поднимет тебя над землёй, позволяя ходить по любой твёрдой поверхности, даже если пол наэлектризован или залит кислотой. Также такой гаджет замедлит твоё падение, если ты падаете в контролируемой манере&nbsp;— и никак не поможет при неконтролируемом.</p>
          <p><strong>Примеры таких гаджетов:</strong></p>
        </li>
        <li>
          <p><strong>Альтернативное передвижение (Прыжок)</strong></p>
          <p>Такой гаджет усиливает твои прыжки. Он оттолкнёт тебя от земли с большой силой, позволяя преодолевать большие расстояния или большие расщелины на невероятных скоростях.</p>
          <p><strong>Примеры таких гаджетов:</strong> механический пропульсивный голем, алхимический усиливающий костюм.</p>
        </li>
        <li>
          <p><strong>Альтернативное передвижение (Карабканье)</strong></p>
          <p>Такой гаджет позволит держаться на стене, не занимая руки. Он будет держаться за стену за тебя, оставляя твои руки свободными для занятия другими вещами &nbsp;— например для прицеливания или взбиранием выше. Просто будьте внимательны и постарайтесь не дать ничему повредить твой гаджет.</p>
          <p><strong>Примеры таких гаджетов:</strong> механический полевой пояс, магнитный излучающий голем.</p>
        </li>
        <li>
          <p><strong>Альтернативное передвижение (Плаванье)</strong></p>
          <p>Такой гаджет позволит тебе плавать под водой. Он даст тебе дышать под водой и двигаться под водой с хорошей скоростью.</p>
          <p><strong>Примеры таких гаджетов:</strong> эктоплазменные полевые очки, паровые инверсивные безделушки.</p>
        </li>
        <li>
          <p><strong>Альтернативное передвижение (Бесплотное)</strong></p>
          <p>Такой гаджет позволит тебе стать чем-то вроде призрака. Он позволит тебе проходить через тонкие стены или двери, но ты не можете никого взять с собой. Использование такого гаджета может привлечь внимание призраков.</p>
          <p><strong>Примеры таких гаджетов:</strong> эктоплазменный усиливающий пояс, эктоплазменный лучевой костюм.</p>
        </li>
      </ul>
    </section>
  ),
}

const foo = `

`