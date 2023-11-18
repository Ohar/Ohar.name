const React = require('react')

module.exports = {
  id: 'sorcerer',
  name: 'Заклинатель',
  description: [
    `Одетая в серебристые одежды, обозначающие ее положение, эльфийка закрывает глаза, чтобы не отвлекаться на поле боя, и начинает свое тихое пение. Сплетя пальцы перед собой, она завершает свое заклинание и запускает крошечную огненную бусинку во вражеские ряды, где она превращается в пожар, охватывающий солдат.`,
    `Проверяя и перепроверяя свою работу, человек чертит мелом замысловатый магический круг на голом каменном полу, затем посыпает железным порошком каждую линию и изящный изгиб. Когда круг замкнут, он произносит длинное заклинание. В пространстве внутри круга открывается дыра, принося запах металла и пепла из потустороннего мира.`,
    `Скорчившись на полу на перекрестке подземелий, орк бросает горсть маленьких костей, исписанных мистическими символами, бормоча над ними несколько слов власти. Закрыв глаза, прислушиваясь к воле своего покровителя, он медленно кивает, затем открывает глаза и указывает на проход слева от себя.`,
  ],
  nameList: ['Альдра', 'Витус', 'Галадийр', 'Зено', 'Изольда', 'Лиллиейстр', 'Морган', 'Овид', 'Рет', 'Ури', 'Фенферил', 'Фиросейл', 'Эйвон', 'Эльвир', 'Энкираш'],
  featureList: [
    {
      name: 'Взгляд',
      variantList: ['бегающий взгляд', 'пронзительный взгляд', 'безумный взгляд'],
    },
    {
      name: 'Причёска',
      variantList: ['аккуратная причёска', 'растрёпанные волосы', 'остроконечная шляпа'],
    },
    {
      name: 'Одежда',
      variantList: ['поношенная мантия', 'модная мантия', 'странная мантия'],
    },
    {
      name: 'Тело',
      variantList: ['приземистый', 'худой', 'пугающая фигура'],
    },
  ],
  hpBonus: 14,
  damageDice: 4,
  striveList: [
    {
      name: 'Благосклонность',
      text: 'Используй магию, чтобы кому-то помочь.',
    },
    {
      name: 'Власть',
      text: 'Используй магию, чтобы завоевать уважение окружающих или повысить свой престиж.',
    },
    {
      name: 'Знания',
      text: 'Открой что-нибудь о волшебной тайне.',
    },
    {
      name: 'Любопытство',
      text: 'Создай проблему, касаясь, открывая или ковыряясь с чем-то интересным.',
    },
    {
      name: 'Эксцентричность',
      text: 'Отторгни персонажа Ведущего своим странным поведением.',
    },
  ],
  backgroundIdList: [
    'sorcerer.backstory.study',
    'sorcerer.backstory.lineage',
    'sorcerer.backstory.pact',
  ],
  startMoveIdList: [
    'sorcerer.start.ritual',
    'sorcerer.start.flaw',
    'sorcerer.start.cast_spell',
  ],
  equipmentHtml: `
  <p><strong>Ты начинаешь игру с:</strong></p>
  <ul>
      <li>припасами (3 использования, вес 1);</li>
      <li>кинжалом (<em>Рука</em>, <em>Мелкий</em>).</li>
  </ul>
  <p><em>Выбери, если это подходит твоему Изъяну:</em></p>
  <ul>
      <li>волшебная вещица (<em>Мелкая</em>), через которую ты проводишь магию (навершие посоха, амулет и т. п.), опиши её.</li>
  </ul>
  <p><strong>Выбери три:</strong></p>
  <ul>
      <li>посох (<em>Двуручный</em>, <em>Взмах меча</em>, вес 1);</li>
      <li>зачарованные робы (1 брони, вес 1);</li>
      <li>припасы (3 использования, вес 1);</li>
      <li>зелье исцеления (<em>Мелкое</em>);</li>
      <li>зелье невидимости (<em>Мелкое</em>);</li>
      <li>волшебная вещица (<em>Мелкая</em>) — интересная, но не очень полезная. Что она делает?</li>
  </ul>
`,
  advancedMoveIdList: [
    'sorcerer.advanced.adept',
    'sorcerer.advanced.antiquarian',
    'sorcerer.advanced.bookworm',
    'sorcerer.advanced.counterspell',
    'sorcerer.advanced.dispel_magic',
    'sorcerer.advanced.empower',
    'sorcerer.advanced.equal_exchange',
    'sorcerer.advanced.expert',
    'sorcerer.advanced.know-it-all',
    'sorcerer.advanced.logic',
    'sorcerer.advanced.magic_protection',
    'sorcerer.advanced.polyglot',
    'sorcerer.advanced.warmage',
  ],
  capstoneMoveIdList: [
    'sorcerer.capstone.archmage',
    'sorcerer.capstone.enchanter',
    'sorcerer.capstone.ether_connection',
    'sorcerer.capstone.great_empower',
  ],
  specialMoves: {
    title: 'Домены',
    list: [
      'sorcerer.special.domain_cantrips',
      'sorcerer.special.domain_charm',
      'sorcerer.special.domain_creation',
      'sorcerer.special.domain_divination',
      'sorcerer.special.domain_evocation',
      'sorcerer.special.domain_illusion',
      'sorcerer.special.domain_necromancy',
      'sorcerer.special.domain_protection',
      'sorcerer.special.domain_summon',
      'sorcerer.special.domain_transmutation',
    ]
  },
}
