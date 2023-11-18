module.exports = {
  id: 'thief',
  name: 'Вор',
  description: [
    `Ты знаешь, о чём они болтают, сидя у костра. О драке какой-нибудь. О богах, которые улыбаются вашей весёлой компании с небес. А ты в это время улыбаешься самому себе, считая монеты — вот что действительно важно! Ты один знаешь главную мировую тайну: денежки не пахнут.`,
    `Конечно, они будут возмущаться каждый раз, когда ты втихую куда-нибудь ускользаешь, но без тебя их быстренько разрежет на две половинки упавшая с потолка гильотина или к чертям отравит какая-нибудь древняя ловушка с иголками. Так что пусть ворчат. Покончив со всей этой нудной работёнкой, ты вспомнишь их героическую смерть и осушишь за них бокал…`,
    `…сидя в собственном замке. Полном золота.`,
    `Ты же мошенник, как-никак.`,
  ],
  nameList: ['Бринн', 'Весельчак', 'Воробей', 'Джек', 'Жук', 'Крыса', 'Марло', 'Мышь', 'Омар', 'Прыщ', 'Робин', 'Скромник', 'Сорока', 'Трикси', 'Фарли', 'Феликс', 'Хитрюга', 'Шило'],
  featureList: [
    {
      name: 'Взгляд',
      variantList: ['бегающие глаза', 'взгляд преступника'],
    },
    {
      name: 'Причёска',
      variantList: ['капюшон', 'растрёпанные волосы', 'короткая стрижка'],
    },
    {
      name: 'Одежда',
      variantList: ['тёмная одежда', 'модная одежда', 'обычная одежда'],
    },
    {
      name: 'Тело',
      variantList: ['гибкое', 'жилистое', 'дряблое'],
    },
  ],
  hpBonus: 18,
  damageDice: 8,
  striveList: [
    {
      name: 'Алчность',
      text: 'Улучши своё материальное положение или стань сильнее за чей-то счёт.',
    },
    {
      name: 'Сорвиголова',
      text: 'Бросься навстречу опасности безо всякого плана.',
    },
    {
      name: 'Принципиальность',
      text: 'Откажись от комфорта или преимущества, чтобы сделать то, что правильно.',
    },
    {
      name: 'Бунтарь',
      text: 'Выступи против хулигана, тирана или диктатора.',
    },
    {
      name: 'Обманщик',
      text: 'Заставь кого-то действовать на основе лжи.',
    },
  ],
  optionalQuestionList: [
    'Что заставило тебя обратиться к жизни вора?',
    'Каков был твой самый большой куш?',
    'Какой у тебя туз в рукаве? Как ты его получил?',
    'Что заставляет тебя доверять своим спутникам? Почему они должны доверять тебе?',
  ],
  backgroundIdList: [
    'thief.backstory.innate_talent',
    'thief.backstory.operative',
    'thief.backstory.vagabond',
  ],
  startMoveIdList: [
    'thief.start.nimble_fingers',
  ],
  advancedMoveToPickOnStart: {
    limit: 2,
    list: [
      'thief.advanced.cat_s_grace',
      'thief.advanced.light_feet',
      'thief.advanced.special_technic',
      'thief.advanced.sense_of_danger',
      'thief.advanced.perceptive',
      'thief.advanced.ambush',
    ],
  },
  equipmentHtml: `
    <p><strong>Ты начинаешь игру с:</strong></p>
    <ul>
        <li>Припасами (3 использования, вес 1);</li>
        <li>воровскими инструментами (вес 1).</li>
    </ul>
    <p>Выбери одно:</p>
    <ul>
        <li>кинжал (<em>Рука</em>, <em>Точный</em>, <em>Мелкий</em>) и короткий меч (<em>Взмах меча</em>, вес 1);</li>
        <li>рапира (<em>Взмах меча</em>, <em>Точная</em>, вес 1).</li>
    </ul>
    <p>Выбери одно:</p>
    <ul>
        <li>3 метательных ножа (<em>Метательные</em>, <em>Близко</em>, <em>Мелкие</em>);</li>
        <li>лук (<em>Близко</em>, вес 1).</li>
    </ul>
    <p>Выбери одно:</p>
    <ul>
        <li>Припасы (3 использования, вес 1) и противоядие (<em>Мелкое</em>);</li>
        <li>бутыль яда (<em>мелкий</em>), опиши его;</li>
        <li>зелье исцеления (<em>мелкий</em>);</li>
        <li>лёгкий доспех (броня 1, вес 1).</li>
    </ul>
  `,
  advancedMoveIdList: [
    'thief.advanced.back_eyes',
    'thief.advanced.lets_dance',
    'thief.advanced.incredible_reflexes',
    'thief.advanced.robbery',
    'thief.advanced.deep_pockets',
    'thief.advanced.infinite_knives',
    'thief.advanced.dirty_tricks',
    'thief.advanced.flexible_morale',
    'thief.advanced.get_under_skin',
    'thief.advanced.poisoner',
    'thief.advanced.thief_arsenal',
  ],
  capstoneMoveIdList: [
    'thief.capstone.alibi',
    'thief.capstone.eyes_at_door',
    'thief.capstone.kidney_blow',
    'thief.capstone.pants_on_fire',
    'thief.capstone.slick',
    'thief.capstone.tricky_blow',
  ],
}
