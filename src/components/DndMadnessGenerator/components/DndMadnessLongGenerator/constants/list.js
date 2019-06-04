const list = [
  {
    id: 'repeat',
    probabilityWeight: 10,
    description: 'Персонаж чувствует непреодолимое желание повторять одни и те же действия, например, мыть руки, трогать вещи, молиться или считать монеты.',
  },
  {
    id: 'hallucinogen',
    probabilityWeight: 10,
    description: 'Персонаж видит яркие галлюцинации и совершает с помехой проверки характеристик.',
  },
  {
    id: 'paranoya',
    probabilityWeight: 10,
    description: 'Персонаж страдает от сильной паранойи. Он совершает с помехой проверки Мудрости и Харизмы.',
  },
  {
    id: 'sympatic',
    probabilityWeight: 10,
    description: 'Персонаж считает нечто (обычно, источник безумия) ужасно отвратительным, как если бы он находился под эффектом «антипатия» заклинания Антипатия/Симпатия.',
  },
  {
    id: 'delusion',
    probabilityWeight: 5,
    description: 'Персонаж испытывает сильное заблуждение. Выберите зелье. Персонаж считает, что находится под действием этого зелья.',
  },
  {
    id: 'talisman',
    probabilityWeight: 10,
    description: 'Персонаж становится привязанным к «талисману» — персоне или предмету — и совершает с помехой броски атаки, проверки характеристик и спасброски, когда находится более чем в 30 футах от него.',
  },
  {
    id: 'blind',
    probabilityWeight: 3,
    description: 'Персонаж становится слепым.',
  },
  {
    id: 'deaf',
    probabilityWeight: 7,
    description: 'Персонаж становится глухим.',
  },
  {
    id: 'tremor',
    probabilityWeight: 10,
    description: 'Персонаж испытывает неконтролируемую дрожь или тик, из-за чего совершает с помехой броски атаки, проверки характеристик и спасброски, зависящие от Силы или Ловкости.',
  },
  {
    id: 'amnesia',
    probabilityWeight: 10,
    description: 'Персонаж страдает от частичной амнезии. Персонаж помнит, кем он является, и сохраняет расовые особенности и классовые умения, но не узнаёт других существ или ничего не помнит до момента наступления сумасшествия.',
  },
  {
    id: 'confusion',
    probabilityWeight: 5,
    description: 'Каждый раз, когда персонаж получает урон, он должен преуспеть в спасброске Мудрости со Сл 15, иначе он попадёт под действие заклинания Смятение, как будто провалив спасбросок от него. Эффект смятения длится 1 минуту.',
  },
  {
    id: 'mute',
    probabilityWeight: 5,
    description: 'Персонаж теряет способность говорить.',
  },
  {
    id: 'unconsciousness',
    probabilityWeight: 5,
    description: 'Персонаж теряет сознание. Ни тряска, ни урон не могут его привести в чувство.',
  },
]

export default list
