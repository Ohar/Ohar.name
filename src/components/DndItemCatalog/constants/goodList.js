import _ from "lodash";

import SEARCH_PROP_NAME from "@/constants/SEARCH_PROP_NAME";

const goodList = [
    {
        name: 'Стёганный доспех',
        nameEn: '',
        description: 'КД 11 + модификатор Лов. Мешает скрытности',
        cost: 500,
        weight: 8,
        source: 'PHB:145',
        category: 'Доспехи',
        subcategory: 'Лёгкие доспехи'
    },
    {
        name: 'Кожаный доспех',
        nameEn: '',
        description: 'КД 11 + модификатор Лов',
        cost: 1000,
        weight: 10,
        source: 'PHB:145',
        category: 'Доспехи',
        subcategory: 'Лёгкие доспехи'
    },
    {
        name: 'Доспех из проклёпанной кожи',
        nameEn: '',
        description: 'КД 12 + модификатор Лов',
        cost: 4500,
        weight: 13,
        source: 'PHB:145',
        category: 'Доспехи',
        subcategory: 'Лёгкие доспехи'
    },
    {
        name: 'Шкурный доспех',
        nameEn: '',
        description: 'КД 12 + модификатор Лов (макс. 2)',
        cost: 1000,
        weight: 12,
        source: 'PHB:145',
        category: 'Доспехи',
        subcategory: 'Средние доспехи'
    },
    {
        name: 'Кольчужная рубаха',
        nameEn: '',
        description: 'КД 13 + модификатор Лов (макс. 2)',
        cost: 5000,
        weight: 20,
        source: 'PHB:145',
        category: 'Доспехи',
        subcategory: 'Средние доспехи'
    },
    {
        name: 'Чешуйчатый доспех',
        nameEn: '',
        description: 'КД 14 + модификатор Лов (макс. 2). Мешает скрытности',
        cost: 5000,
        weight: 45,
        source: 'PHB:145',
        category: 'Доспехи',
        subcategory: 'Средние доспехи'
    },
    {
        name: 'Кираса',
        nameEn: '',
        description: 'КД 14 + модификатор Лов (макс. 2)',
        cost: 40000,
        weight: 20,
        source: 'PHB:145',
        category: 'Доспехи',
        subcategory: 'Средние доспехи'
    },
    {
        name: 'Полулаты',
        nameEn: '',
        description: 'КД 15 + модификатор Лов (макс. 2). Мешает скрытности',
        cost: 75000,
        weight: 40,
        source: 'PHB:145',
        category: 'Доспехи',
        subcategory: 'Средние доспехи'
    },
    {
        name: 'Колечный доспех',
        nameEn: '',
        description: 'КД 14. Мешает скрытности',
        cost: 3000,
        weight: 40,
        source: 'PHB:145',
        category: 'Доспехи',
        subcategory: 'Тяжёлые доспехи'
    },
    {
        name: 'Кольчуга',
        nameEn: '',
        description: 'КД 16; требует Сил 13. Мешает скрытности',
        cost: 7500,
        weight: 55,
        source: 'PHB:145',
        category: 'Доспехи',
        subcategory: 'Тяжёлые доспехи'
    },
    {
        name: 'Наборный доспех',
        nameEn: '',
        description: 'КД 17; требует Сил 15. Мешает скрытности',
        cost: 20000,
        weight: 60,
        source: 'PHB:145',
        category: 'Доспехи',
        subcategory: 'Тяжёлые доспехи'
    },
    {
        name: 'Латы',
        nameEn: '',
        description: 'КД 18. Требует Сил 15. Мешает скрытности',
        cost: 150000,
        weight: 65,
        source: 'PHB:145',
        category: 'Доспехи',
        subcategory: 'Тяжёлые доспехи'
    },
    {
        name: 'Щит',
        nameEn: '',
        description: 'КД +2',
        cost: 1000,
        weight: 6,
        source: 'PHB:145',
        category: 'Доспехи',
        subcategory: 'Щиты'
    },
    {
        name: 'Боевой посох',
        nameEn: '',
        description: 'Урон 1к6 дробящий. Универсальное (1к8)',
        damage: {
            cubeType: 6,
            cubeCount: 1,
        },
        cost: 20,
        damageType: 'bludgeoning',
        weight: 4,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Простое рукопашное оружие'
    },
    {
        name: 'Булава',
        nameEn: '',
        description: 'Урон 1к6 дробящий',
        damage: {
            cubeType: 6,
            cubeCount: 1,
        },
        cost: 500,
        damageType: 'bludgeoning',
        weight: 4,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Простое рукопашное оружие'
    },
    {
        name: 'Дубинка',
        nameEn: '',
        damage: {
            cubeType: 4,
            cubeCount: 1,
        },
        description: 'Урон 1к4 дробящий. Лёгкое',
        cost: 10,
        damageType: 'bludgeoning',
        weight: 2,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Простое рукопашное оружие'
    },
    {
        name: 'Кинжал',
        nameEn: '',
        description: 'Урон 1к4 колющий. Лёгкое, метательное (дис. 20/60), фехтовальное',
        damage: {
            cubeType: 4,
            cubeCount: 1,
        },
        cost: 200,
        damageType: 'piercing',
        weight: 1,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Простое рукопашное оружие'
    },
    {
        name: 'Копьё',
        nameEn: '',
        description: 'Урон 1к6 колющий. Метательное (дис. 20/60), универсальное (1к8)',
        damage: {
            cubeType: 6,
            cubeCount: 1,
        },
        cost: 100,
        damageType: 'piercing',
        weight: 3,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Простое рукопашное оружие'
    },
    {
        name: 'Лёгкий молот',
        nameEn: '',
        description: 'Урон 1к4 дробящий. Лёгкое, метательное (дис. 20/60)',
        damage: {
            cubeType: 4,
            cubeCount: 1,
        },
        cost: 200,
        damageType: 'bludgeoning',
        weight: 2,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Простое рукопашное оружие'
    },
    {
        name: 'Метательное копьё',
        nameEn: '',
        description: 'Урон 1к6 колющий. Метательное (дис. 30/120) ',
        damage: {
            cubeType: 6,
            cubeCount: 1,
        },
        cost: 50,
        damageType: 'piercing',
        weight: 2,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Простое рукопашное оружие'
    },
    {
        name: 'Палица',
        nameEn: '',
        description: 'Урон 1к8 колющий. Двуручное',
        damage: {
            cubeType: 8,
            cubeCount: 1,
        },
        cost: 20,
        damageType: 'piercing',
        weight: 10,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Простое рукопашное оружие'
    },
    {
        name: 'Ручной топор',
        nameEn: '',
        description: 'Урон 1к6 рубящий. Лёгкое, метательное (дис. 20/60) ',
        damage: {
            cubeType: 6,
            cubeCount: 1,
        },
        cost: 500,
        damageType: 'slashing',
        weight: 10,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Простое рукопашное оружие'
    },
    {
        name: 'Серп',
        nameEn: '',
        description: 'Урон 1к4 рубящий. Лёгкое',
        damage: {
            cubeType: 4,
            cubeCount: 1,
        },
        damageType: 'slashing',
        cost: 100,
        weight: 2,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Простое рукопашное оружие'
    },
    {
        name: 'Арбалет, лёгкий ',
        nameEn: '',
        description: 'Урон 1к8 колющий. Боеприпас (дис. 80/320), двуручное, перезарядка',
        damage: {
            cubeType: 8,
            cubeCount: 1,
        },
        cost: 2500,
        damageType: 'piercing',
        weight: 5,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Простое дальнобойное оружие'
    },
    {
        name: 'Дротик',
        nameEn: '',
        description: 'Урон 1к4 колющий. Метательное (дис. 20/60), фехтовальное',
        damage: {
            cubeType: 4,
            cubeCount: 1,
        },
        cost: 5,
        damageType: 'piercing',
        weight: '0.25',
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Простое дальнобойное оружие'
    },
    {
        name: 'Короткий лук',
        nameEn: '',
        description: 'Урон 1к6 колющий. Боеприпас (дис. 80/320), двуручное',
        damage: {
            cubeType: 6,
            cubeCount: 1,
        },
        cost: 2500,
        damageType: 'piercing',
        weight: 2,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Простое дальнобойное оружие'
    },
    {
        name: 'Праща',
        nameEn: '',
        description: 'Урон 1к4 дробящий. Боеприпас (дис. 30/120) ',
        damage: {
            cubeType: 4,
            cubeCount: 1,
        },
        cost: 10,
        damageType: 'bludgeoning',
        weight: 0,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Простое дальнобойное оружие'
    },
    {
        name: 'Алебарда',
        nameEn: '',
        description: 'Урон 1к10 рубящий. Двуручное, досягаемость, тяжёлое ',
        damage: {
            cubeType: 10,
            cubeCount: 1,
        },
        cost: 2000,
        damageType: 'slashing',
        weight: 6,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское рукопашное оружие'
    },
    {
        name: 'Боевая кирка ',
        nameEn: '',
        description: 'Урон 1к8 колющий',
        damage: {
            cubeType: 8,
            cubeCount: 1,
        },
        cost: 500,
        damageType: 'piercing',
        weight: 2,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское рукопашное оружие'
    },
    {
        name: 'Боевой молот  ',
        nameEn: '',
        description: 'Урон 1к8 дробящий; Универсальное (1к10) ',
        damage: {
            cubeType: 8,
            cubeCount: 1,
        },
        cost: 1500,
        damageType: 'bludgeoning',
        weight: 2,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское рукопашное оружие'
    },
    {
        name: 'Боевой топор ',
        nameEn: '',
        description: 'Урон 1к8 рубящий; Универсальное (1к10) ',
        damage: {
            cubeType: 8,
            cubeCount: 1,
        },
        cost: 1000,
        damageType: 'slashing',
        weight: 4,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское рукопашное оружие'
    },
    {
        name: 'Глефа',
        nameEn: '',
        description: 'Урон 1к10 рубящий; Двуручное, досягаемость, тяжёлое',
        damage: {
            cubeType: 10,
            cubeCount: 1,
        },
        cost: 2000,
        damageType: 'slashing',
        weight: 6,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское рукопашное оружие'
    },
    {
        name: 'Двуручный меч ',
        nameEn: '',
        description: 'Урон 2к6 рубящий; Двуручное, тяжёлое',
        damage: {
            cubeType: 6,
            cubeCount: 2,
        },
        cost: 5000,
        damageType: 'slashing',
        weight: 6,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское рукопашное оружие'
    },
    {
        name: 'Длинное копьё ',
        nameEn: '',
        description: 'Урон 1к12 колющий; Досягаемость, особое ',
        damage: {
            cubeType: 12,
            cubeCount: 1,
        },
        cost: 1000,
        damageType: 'piercing',
        weight: 6,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское рукопашное оружие'
    },
    {
        name: 'Длинный меч ',
        nameEn: '',
        description: 'Урон 1к8 рубящий; Универсальное (1к10)',
        damage: {
            cubeType: 8,
            cubeCount: 1,
        },
        cost: 1500,
        damageType: 'slashing',
        weight: 3,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское рукопашное оружие'
    },
    {
        name: 'Кнут',
        nameEn: '',
        description: 'Урон 1к4 рубящий; Досягаемость, фехтовальное ',
        damage: {
            cubeType: 4,
            cubeCount: 1,
        },
        cost: 200,
        damageType: 'slashing',
        weight: 3,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское рукопашное оружие'
    },
    {
        name: 'Короткий меч',
        nameEn: '',
        description: 'Урон 1к6 колющий; Лёгкое, фехтовальное ',
        damage: {
            cubeType: 6,
            cubeCount: 1,
        },
        cost: 1000,
        weight: 2,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское рукопашное оружие'
    },
    {
        name: 'Молот',
        nameEn: '',
        description: 'Урон 2к6 колющий; Двуручное, тяжёлое ',
        damage: {
            cubeType: 6,
            cubeCount: 2,
        },
        cost: 1000,
        damageType: 'piercing',
        weight: 10,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское рукопашное оружие'
    },
    {
        name: 'Моргенштерн',
        nameEn: '',
        description: 'Урон 1к8 колющий',
        damage: {
            cubeType: 8,
            cubeCount: 1,
        },
        cost: 1500,
        weight: 4,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское рукопашное оружие'
    },
    {
        name: 'Пика',
        nameEn: '',
        description: 'Урон 1к10 колющий; Двуручное, досягаемость, тяжёлое ',
        damage: {
            cubeType: 10,
            cubeCount: 1,
        },
        cost: 500,
        damageType: 'piercing',
        weight: 18,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское рукопашное оружие'
    },
    {
        name: 'Рапира',
        nameEn: '',
        description: 'Урон 1к8 колющий; Фехтовальное',
        damage: {
            cubeType: 8,
            cubeCount: 1,
        },
        cost: 2500,
        weight: 2,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское рукопашное оружие'
    },
    {
        name: 'Секира',
        nameEn: '',
        description: 'Урон 1к12 колющий; Двуручное, тяжёлое ',
        damage: {
            cubeType: 12,
            cubeCount: 1,
        },
        cost: 3000,
        damageType: 'piercing',
        weight: 7,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское рукопашное оружие'
    },
    {
        name: 'Скимитар',
        nameEn: '',
        description: 'Урон 1к6 колющий; Лёгкое, фехтовальное ',
        damage: {
            cubeType: 6,
            cubeCount: 1,
        },
        cost: 2500,
        damageType: 'piercing',
        weight: 3,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское рукопашное оружие'
    },
    {
        name: 'Трезубец',
        nameEn: '',
        description: 'Урон 1к6 колющий; Метательное (дис. 20/60), универсальное (1к8) ',
        damage: {
            cubeType: 6,
            cubeCount: 1,
        },
        cost: 500,
        damageType: 'piercing',
        weight: 4,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское рукопашное оружие'
    },
    {
        name: 'Цеп',
        nameEn: '',
        description: 'Урон 1к8 дробящий',
        damage: {
            cubeType: 8,
            cubeCount: 1,
        },
        cost: 1000,
        damageType: 'bludgeoning',
        weight: 2,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское рукопашное оружие'
    },
    {
        name: 'Арбалет, ручной ',
        nameEn: '',
        description: 'Урон 1к6 колющий; Боеприпас (дис. 30/120), лёгкое, перезарядка ',
        damage: {
            cubeType: 6,
            cubeCount: 1,
        },
        cost: 7500,
        damageType: 'piercing',
        weight: 3,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское дальнобойное оружие'
    },
    {
        name: 'Арбалет, тяжёлый ',
        nameEn: '',
        description: 'Урон 1к10 колющий; Боеприпас (дис. 100/400), двуручное, перезарядка, тяжёлое',
        damage: {
            cubeType: 10,
            cubeCount: 1,
        },
        cost: 5000,
        damageType: 'piercing',
        weight: 18,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское дальнобойное оружие'
    },
    {
        name: 'Длинный лук ',
        nameEn: '',
        description: 'Урон 1к8 колющий; Боеприпас (дис. 150/600), двуручное, тяжёлое',
        damage: {
            cubeType: 8,
            cubeCount: 1,
        },
        cost: 5000,
        damageType: 'piercing',
        weight: 2,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское дальнобойное оружие'
    },
    {
        name: 'Духовая трубка ',
        nameEn: '',
        description: 'Урон 1 колющий; Боеприпас (дис. 25/100), перезарядка ',
        damage: {
            cubeType: 0,
            cubeCount: 0,
            cubeBonus: 1,
        },
        cost: 1000,
        damageType: 'piercing',
        weight: 1,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское дальнобойное оружие'
    },
    {
        name: 'Сеть',
        nameEn: '',
        description: 'Метательное (дис. 5/15), особое',
        cost: 100,
        weight: 3,
        source: 'PHB:149',
        category: 'Оружие',
        subcategory: 'Воинское дальнобойное оружие'
    },
    {
        name: 'Абак',
        nameEn: '',
        cost: 200,
        weight: 2,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Алхимический огонь',
        nameEn: '',
        description: 'фляга',
        cost: 5000,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Блок и лебёдка',
        nameEn: '',
        cost: 100,
        weight: 5,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Арбалетные болт',
        nameEn: '',
        description: '20 шт.',
        cost: 100,
        weight: 1.5,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Боеприпасы'
    },
    {
        name: 'Иглы для трубки',
        nameEn: '',
        description: '50 шт.',
        cost: 100,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Боеприпасы '
    },
    {
        name: 'Снаряды для пращи',
        nameEn: '',
        description: '20 шт.',
        cost: 4,
        weight: 1.5,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Боеприпасы '
    },
    {
        name: 'Стрелы',
        nameEn: '',
        description: '20 шт.',
        cost: 100,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Боеприпасы '
    },
    {
        name: 'Бочка',
        nameEn: '',
        description: '40 галлонов, 4 кубических фута',
        cost: 200,
        weight: 70,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Бумага',
        nameEn: '',
        description: '1 лист',
        cost: 20,
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Бурдюк',
        nameEn: '',
        description: '4 пинты',
        cost: 20,
        weight: 5,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Бутылка, стеклянная',
        nameEn: '',
        description: '1,5 пинты',
        cost: 200,
        weight: 2,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Ведро',
        nameEn: '',
        description: '3 галлона, ½ кубического фута',
        cost: 5,
        weight: 2,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Верёвка пеньковая',
        nameEn: '',
        description: '50 футов. У верёвки 2 хита, и её можно порвать проверкой Силы со Сл 17',
        cost: 100,
        weight: 10,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Верёвка шёлковая',
        nameEn: '',
        description: '50 футов. У верёвки 2 хита, и её можно порвать проверкой Силы со Сл 17',
        cost: 1000,
        weight: 5,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Весы, торговые',
        nameEn: '',
        description: 'В набор входят рычажные весы, чашки и набор грузиков на 2 фунта. С их помощью можно точно измерять вес небольших предметов, таких как драгоценные металлы или товары.',
        cost: 500,
        weight: 3,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Воск',
        nameEn: '',
        cost: 50,
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Горшок, железный',
        nameEn: '',
        description: '1 галлон',
        cost: 200,
        weight: 10,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Графин',
        nameEn: '',
        description: '1 галлон',
        cost: 2,
        weight: 4,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Духи',
        nameEn: '',
        description: 'флакон',
        cost: 500,
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Замок',
        nameEn: '',
        description: 'Вместе с замком идёт и ключ. Без ключа существо, владеющее воровскими инструментами, может вскрыть замок успешной проверкой Ловкости со Сл 15. Мастер может решить, что есть более качественные замки, стоящие больше.',
        cost: 1000,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Зелье лечения',
        nameEn: '',
        description: 'Существо, выпившее магическую красную жидкость из этого флакона, восстанавливает 2к4 + 2 хита. Зелье выпивается или заливается в рот другому действием. ',
        cost: 5000,
        weight: 0.5,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Зеркало, стальное',
        nameEn: '',
        cost: 500,
        weight: 0.5,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Калтропы',
        nameEn: '',
        description: '20 штук в сумке. Вы можете действием рассыпать сумку калтропов по площади в 5 × 5 футов. Все существа, входящие в эту область, должны преуспеть в спасброске Ловкости со Сл 15, иначе они останавливаются и получают колющий урон 1. Пока это существо не восстановит как минимум 1 хит, его скорость ходьбы уменьшена на 10 футов. Существо, перемещающееся по этой области с уменьшенной вдвое скоростью, не обязано совершать спасбросок.',
        cost: 100,
        damageType: 'piercing',
        weight: 2,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Кандалы',
        nameEn: '',
        description: 'Эти металлические оковы удерживают существ Маленького и Среднего размера. Для того чтобы сбежать из кандалов, требуется успешная проверка Ловкости со Сл 20. Для того чтобы их сломать, требуется проверка Силы со Сл 20. Каждый набор кандалов идёт с одним ключом. Без ключа существо, владеющее воровскими инструментами, может вскрыть замок кандалов успешной проверкой Ловкости со Сл 15. У кандалов 15 хитов.',
        cost: 200,
        weight: 6,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Кислота',
        nameEn: '',
        description: 'Флакон. Вы можете действием выплеснуть содержимое этого сосуда на существо, находящееся в пределах 5 футов от вас, или метнуть сосуд на расстояние до 20 футов, чтобы он разбился от удара. В любом случае совершите дальнобойную атаку против существа или предмета, считая кислоту импровизированным оружием. При попадании цель получает урон кислотой 2к6.',
        damage: {
            cubeType: 6,
            cubeCount: 2,
        },
        cost: 2500,
        damageType: 'acid',
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Книга',
        nameEn: '',
        description: 'В книге могут быть стихи, документальные сведения, информация о чём-либо, диаграммы и заметки о гномьих приспособлениях, или что угодно другое, представленное текстом и картинками.',
        cost: 2500,
        weight: 5,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Книга заклинаний',
        nameEn: '',
        description: 'Книги заклинаний очень важны для волшебников. Это переплетённые кожей тома, содержащие 100 пустых пергаментных страниц, на которых можно записывать заклинания.',
        cost: 5000,
        weight: 3,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Колокольчик',
        nameEn: '',
        cost: 100,
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Колчан',
        nameEn: '',
        description: 'В колчан помещается 20 стрел.',
        cost: 100,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Кольцо-печатка',
        nameEn: '',
        cost: 500,
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Комплект для лазания',
        nameEn: '',
        description: 'В набор для лазания входят шлямбуры, накладные подошвы, перчатки и страховочная привязь. Вы можете действием использовать набор для лазания, чтобы закрепиться на высоте; если вы делаете это, вы не можете упасть более чем на 25 футов от того места, где закрепились, но и не можете подняться выше 25 футов от этого места, не открепившись.',
        cost: 2500,
        weight: 12,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Комплект для рыбалки',
        nameEn: '',
        description: 'В этот набор входит удилище, шёлковая леска, пробковый поплавок, стальные крючки, свинцовые грузила, приманки из ниток и мелкоячеистая сеть.',
        cost: 100,
        weight: 4,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Комплект целителя',
        nameEn: '',
        description: 'Это кожаный кошель с бинтами, мазями и шинами. Набор годится для 10 использований. Вы можете действием потратить одно использование набора для стабилизации существа, у которого 0 хитов, не совершая проверку Мудрости (Медицина).',
        cost: 500,
        weight: 3,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Контейнер для арбалетных болтов',
        nameEn: '',
        description: 'В этот деревянный контейнер помещаются 20 арбалетных болтов.',
        cost: 100,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Контейнер для карт и свитков',
        nameEn: '',
        description: 'В этом цилиндрическом кожаном тубусе может храниться до десяти скрученных листов бумаги или пять скрученных листов пергамента.',
        cost: 100,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Корзина',
        nameEn: '',
        description: '2 кубических фута/40 фунтов',
        cost: 40,
        weight: 2,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Кошель',
        nameEn: '',
        description: '0,2 кубических фута/6 фунтов. В кожаном или тканевом кошеле поместится 20 снарядов для пращи или 50 иголок для духовой трубки, а также другие вещи.',
        cost: 50,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Крюк-кошка',
        nameEn: '',
        cost: 200,
        weight: 4,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Кувшин',
        nameEn: '',
        description: '1 галлон',
        cost: 2,
        weight: 4,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Лампа',
        nameEn: '',
        description: 'Лампа испускает яркий свет в пределах 15 футов и тусклый свет в пределах ещё 30 футов. Зажжённая лампа горит 6 часов от одной фляги (1 пинта) масла.',
        cost: 50,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Лестница',
        nameEn: '',
        description: '10 футов',
        cost: 10,
        weight: 25,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Ломик',
        nameEn: '',
        description: 'Использование ломика позволяет совершать проверки Силы с преимуществом, если рычаг должен помочь.',
        cost: 200,
        weight: 5,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Лопата',
        nameEn: '',
        description: "",
        cost: 200,
        weight: 5,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Волшебная палочка',
        nameEn: '',
        description: 'Это особый предмет, созданный для проведения тайных заклинаний. Волшебники, колдуны и чародеи могут использовать эти предметы в качестве фокусировки для заклинаний, как описано в главе 10.',
        cost: 1000,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Магическая фокусировка'
    },
    {
        name: 'Жезл',
        nameEn: '',
        description: 'Это особый предмет, созданный для проведения тайных заклинаний. Волшебники, колдуны и чародеи могут использовать эти предметы в качестве фокусировки для заклинаний, как описано в главе 10.',
        cost: 1000,
        weight: 2,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Магическая фокусировка'
    },
    {
        name: 'Кристал',
        nameEn: '',
        description: 'Это особый предмет, созданный для проведения тайных заклинаний. Волшебники, колдуны и чародеи могут использовать эти предметы в качестве фокусировки для заклинаний, как описано в главе 10.',
        cost: 1000,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Магическая фокусировка'
    },
    {
        name: 'Посох',
        nameEn: '',
        description: 'Это особый предмет, созданный для проведения тайных заклинаний. Волшебники, колдуны и чародеи могут использовать эти предметы в качестве фокусировки для заклинаний, как описано в главе 10.',
        cost: 500,
        weight: 4,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Магическая фокусировка'
    },
    {
        name: 'Сфера',
        nameEn: '',
        description: 'Это особый предмет, созданный для проведения тайных заклинаний. Волшебники, колдуны и чародеи могут использовать эти предметы в качестве фокусировки для заклинаний, как описано в главе 10.',
        cost: 2000,
        weight: 3,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Магическая фокусировка'
    },
    {
        name: 'Масло',
        nameEn: '',
        description: 'Фляга. Обычно масло продаётся в глиняных флягах по 1 пинте (0,5 литра). Вы можете действием облить маслом из фляги существо, находящееся в пределах 5 футов, или кинуть её на 20 футов, ломая при ударе. Совершите дальнобойную атаку по целевому существу или предмету, считая масло импровизированным оружием. При попадании цель покрывается маслом. Если цель получает урон огнём, пока масло не высохло (1 минута), она получает дополнительный урон огнём 5 от горящего масла. Вы можете также вылить фляжку масла на землю, покрыв площадь 5 × 5 футов, при условии, что пол ровный. Если теперь масло поджечь, оно горит 2 раунда и причиняет урон огнём 5 всем существам, входящим в эту область или оканчивающим в ней ход. Существо может получить этот урон только один раз за ход. ',
        cost: 10,
        damage: {
            cubeBonus: 5,
        },
        damageType: 'fire',
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Мел',
        nameEn: '',
        description: '1 кусочек',
        cost: 1,
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Металлические шарики',
        nameEn: '',
        description: 'В сумке 1000 шт. Вы можете действием рассыпать из этого мешка крохотные металлические шарики, покрыв площадь 10 × 10 футов. Существа, перемещающиеся по этой области, должны преуспеть в спасброске Ловкости со Сл 10, иначе они падают ничком. Существо, перемещающееся по этой области с уменьшенной вдвое скоростью, не обязано совершать спасбросок',
        cost: 100,
        weight: 2,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Мешок',
        nameEn: '',
        description: '1 кубический фут/30 фунтов',
        cost: 1,
        weight: 0.5,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Мешочек с компонентами',
        nameEn: '',
        description: 'Мешочек с компонентами это маленький водонепроницаемый кожаный поясной кошель с отделениями для хранения материальных компонентов и других особых предметов, нужных для накладывания заклинаний, если только у этих компонентов не указана стоимость (смотрите описание заклинания). ',
        cost: 2500,
        weight: 2,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Молот, кузнечный ',
        nameEn: '',
        cost: 200,
        weight: 10,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Молоток',
        nameEn: '',
        cost: 100,
        weight: 3,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Мыло',
        nameEn: '',
        cost: 2,
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Дорожная одежда',
        nameEn: '',
        cost: 200,
        weight: 4,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Одежда'
    },
    {
        name: 'Костюм',
        nameEn: '',
        cost: 500,
        weight: 4,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Одежда'
    },
    {
        name: 'Обычная одежда',
        nameEn: '',
        cost: 50,
        weight: 3,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Одежда'
    },
    {
        name: 'Отличная одежда',
        nameEn: '',
        cost: 1500,
        weight: 6,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Одежда'
    },
    {
        name: 'Одеяло',
        nameEn: '',
        cost: 50,
        weight: 3,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Охотничий капкан',
        nameEn: '',
        description: 'Если вы действием установите эту ловушку, она образует стальное кольцо с зазубренными краями, которая захлопывается, когда в её центр наступает существо. Капкан привязывается толстой цепью к неподвижному предмету, такому как дерево или колышек, вбитый в землю. Существо, наступившее в центр, должно преуспеть в спасброске Ловкости со Сл 13, иначе оно получает колющий урон 1к4 и прекращает перемещение. Впоследствии, пока существо не высвободится из ловушки, его перемещения ограничены длиной цепи (обычно 3 фута). Любое существо может действием совершить проверку Силы со Сл 13, чтобы высвободить себя или другое существо, находящееся в пределах досягаемости. Каждая проваленная проверка причиняет пойманному существу колющий урон 1.',
        damage: {
            cubeType: 4,
            cubeCount: 1,
        },
        cost: 500,
        damageType: 'piercing',
        weight: 25,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Палатка',
        nameEn: '',
        description: 'В палатке, простом парусиновом жилище, могут спать двое.',
        cost: 200,
        weight: 20,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Пергамент ',
        nameEn: '',
        description: '1 лист',
        cost: 10,
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Песочные часы',
        nameEn: '',
        cost: 2500,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Писчее перо',
        nameEn: '',
        cost: 2,
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Подзорная труба',
        nameEn: '',
        description: 'Предметы, на которые смотрят в подзорную трубу, увеличиваются в два раза.',
        cost: 100000,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Противоядие',
        nameEn: '',
        description: 'Флакон. Существо, выпившее жидкость из этого флакона, в течение часа совершает спасброски от яда с преимуществом. Оно не предоставляет преимущества нежити и конструктам.',
        cost: 5000,
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Рацион',
        nameEn: '',
        description: 'На 1 день. Рационы состоят из обезвоженной пищи, подходящей для путешествий, включая вяленое мясо, сухофрукты, галеты и орехи.',
        cost: 50,
        weight: 2,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Рюкзак',
        nameEn: '',
        description: '1 кубический фут/30 фунтов',
        cost: 200,
        weight: 5,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Ряса',
        nameEn: '',
        cost: 100,
        weight: 4,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Свеча',
        nameEn: '',
        description: 'В течение 1 часа свеча испускает яркий свет в пределах радиуса 5 футов и тусклый свет в пределах ещё 5 футов.',
        cost: 1,
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Святая вода',
        nameEn: '',
        description: 'Вы можете действием облить содержимым этой фляги существо, находящееся в пределах 5 футов, или кинуть флягу на 20 футов, ломая при ударе. Совершите дальнобойную атаку по целевому существу, считая святую воду импровизированным оружием. Если цель — изверг или нежить, она получает урон излучением 2к6.\nЖрец или паладин может создать святую воду, исполнив особый ритуал. Этот ритуал исполняется 1 час, использует толчёное серебро на 25 зм и требует, чтобы заклинатель потратил ячейку заклинаний 1 уровня.',
        damage: {
            cubeType: 6,
            cubeCount: 2,
        },
        cost: 2500,
        damageType: 'radiant',
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Амулет',
        nameEn: '',
        description: 'Священный символ изображает божество или целый пантеон. Это амулет, изображающий символ божества. Жрец или паладин может использовать священный символ в качестве фокусировки для заклинаний. Для такого использования символа заклинатель должен держать его в руке, носить у всех на виду или нести на щите.',
        cost: 500,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Священный символ'
    },
    {
        name: 'Реликварий',
        nameEn: '',
        description: 'Священный символ изображает божество или целый пантеон. Это крохотная коробочка, в которой хранится священная реликвия. Жрец или паладин может использовать священный символ в качестве фокусировки для заклинаний. Для такого использования символа заклинатель должен держать его в руке, носить у всех на виду или нести на щите.',
        cost: 500,
        weight: 2,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Священный символ'
    },
    {
        name: 'Эмблема',
        nameEn: '',
        description: 'Священный символ изображает божество или целый пантеон. Это символ, выгравированный или выложенный камнями в качестве эмблемы на щите. Жрец или паладин может использовать священный символ в качестве фокусировки для заклинаний. Для такого использования символа заклинатель должен держать его в руке, носить у всех на виду или нести на щите.',
        cost: 500,
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Священный символ'
    },
    {
        name: 'Сигнальный свисток',
        nameEn: '',
        cost: 5,
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Спальник ',
        nameEn: '',
        cost: 100,
        weight: 7,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Столовый набор',
        nameEn: '',
        description: 'В этой небольшой коробке находится чашка и простые столовые приборы. Коробка раскрывается, и одна сторона может использоваться как сковорода, а другая — как тарелка или неглубокая миска.',
        cost: 20,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Сундук',
        nameEn: '',
        description: '12 кубических футов/300 фунтов',
        cost: 500,
        weight: 25,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Таран, портативный',
        nameEn: '',
        description: 'Вы можете вышибать портативным тараном двери. Вы получаете бонус +4 к проверкам Силы. Если другой персонаж помогает вам использовать таран, вы совершаете проверку с преимуществом.',
        cost: 400,
        weight: 35,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Точильный камень',
        nameEn: '',
        cost: 1,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Трутница',
        nameEn: '',
        description: ' В этом небольшом контейнере находится кремень, кресало и трут (обычно это сухая тряпка, вымоченная в масле), используемые для разжигания огня. Использование его для разжигания факела — или чего-нибудь другого, легковоспламеняющегося — требует одного действия. Разжигание другого огня требует 1 минуты.',
        cost: 50,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Увеличительное стекло',
        nameEn: '',
        description: 'Эта линза позволяет разглядывать маленькие предметы. Линзу также можно использовать для замены кремня и кресала. Разжигание огня увеличительным стеклом требует света, яркого как свет солнца, трута для розжига и примерно 5 минут. Увеличительное стекло позволяет совершать с преимуществом проверки характеристик, сделанных для оценки или исследования мелких и высокодетализированных предметов.',
        cost: 10000,
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Факел',
        nameEn: '',
        description: 'Факел горит 1 час, испуская яркий свет в пределах 20 футов и тусклый свет в пределах ещё 20 футов. Если вы совершаете рукопашную атаку горящим факелом и попадаете, он причиняет урон огнём 1.',
        damage: {
            cubeBonus: 1,
        },
        cost: 1,
        damageType: 'fire',
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Флакон',
        nameEn: '',
        description: '4 унции',
        cost: 100,
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Большая кружка',
        nameEn: '',
        description: '1 пинта',
        cost: 2,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Фляга',
        nameEn: '',
        description: '1 пинта',
        cost: 2,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Веточка омелы',
        nameEn: '',
        description: 'Друид может использовать этот предмет в качестве фокусировки для заклинаний.',
        cost: 100,
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Фокусировка друидов'
    },
    {
        name: 'Веточка падуба',
        nameEn: '',
        description: 'Друид может использовать этот предмет в качестве фокусировки для заклинаний.',
        cost: 100,
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Фокусировка друидов'
    },
    {
        name: 'Деревянная палочка',
        nameEn: '',
        description: 'Палочка из тиса или другого дерева. Друид может использовать этот предмет в качестве фокусировки для заклинаний.',
        cost: 1000,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Фокусировка друидов'
    },
    {
        name: 'Деревянный скипетр',
        nameEn: '',
        description: 'Скипетр из тиса или другого дерева. Друид может использовать этот предмет в качестве фокусировки для заклинаний.',
        cost: 1000,
        weight: 1,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Фокусировка друидов'
    },
    {
        name: 'Деревянный посох',
        nameEn: '',
        description: 'Посох, созданный из живого дерева. Друид может использовать этот предмет в качестве фокусировки для заклинаний.',
        cost: 500,
        weight: 4,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Фокусировка друидов'
    },
    {
        name: 'Тотем',
        nameEn: '',
        description: 'Тотем с перьями, мехом, костями и зубами священных животных. Друид может использовать этот предмет в качестве фокусировки для заклинаний.',
        cost: 100,
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Фокусировка друидов'
    },
    {
        name: 'Фонарь, закрытый',
        nameEn: '',
        description: 'Закрытый фонарь испускает яркий свет в пределах 30 футов и тусклый свет в  пределах ещё 30 футов. Зажжённый фонарь горит 6 часов от одной фляги (1 пинта) масла. Вы можете действием опустить козырёк, уменьшив освещение до тусклого света в пределах 5 футов.',
        cost: 500,
        weight: 2,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Фонарь, направленный',
        nameEn: '',
        description: 'Направленный фонарь испускает яркий свет 60-футовым конусом и тусклый свет в пределах ещё 60 футов. Зажжённый фонарь горит 6 часов от одной фляги (1 пинта [0,5 литра]) масла. ',
        cost: 1000,
        weight: 2,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Цепь',
        nameEn: '',
        description: 'Длина 10 футов. У цепи 10 хитов. Её можно порвать успешной проверкой Силы со Сл 20.',
        cost: 500,
        weight: 10,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Чернила',
        nameEn: '',
        description: 'Бутылочка, 1 унция',
        cost: 1000,
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Шест',
        nameEn: '',
        description: 'Длина 10 футов',
        cost: 5,
        weight: 7,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Шипы железные',
        nameEn: '',
        description: '10 штук',
        cost: 100,
        weight: 5,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Шлямбур',
        nameEn: '',
        cost: 5,
        weight: 0.25,
        source: 'PHB:150',
        category: 'Снаряжение'
    },
    {
        name: 'Яд, простой',
        nameEn: 'Basic Poison',
        description: 'Вы можете покрыть ядом из этого флакона одно рубящее или колющее оружие или три боеприпаса. Наносится яд одним действием. Существо, по которому попадёт отравленное оружие или боеприпас, должно совершить спасбросок Телосложения со Сл 10, получая в случае провала урон ядом 1к4. Нанесённый яд эффективен 1 минуту, после чего высыхает.',
        damage: {
            cubeType: 4,
            cubeCount: 1,
        },
        saveThrow: {
            type: 'con',
            dc: 10,
        },
        cost: 10000,
        poisonType: '',
        weight: 0,
        source: 'PHB:150',
        category: 'Снаряжение',
        subcategory: 'Яды'
    },
    {
        name: 'Набор артиста',
        nameEn: '',
        description: 'Включает рюкзак, спальник, 2 костюма, 5 свечек, рационы на 5 дней, бурдюк и набор для грима',
        cost: 4000,
        weight: 35,
        source: 'PHB:151',
        category: 'Снаряжение',
        subcategory: 'Набор'
    },
    {
        name: 'Набор взломщика',
        nameEn: '',
        description: 'Включает рюкзак, сумку с 1 000 металлических шариков, 10 футов лески, колокольчик, 5 свечек, ломик, молоток, 10 шлямбуров, закрытый фонарь, 2 фляги масла, рационы на 5 дней, трутницу и бурдюк. В набор также входит 50-футовая пеньковая верёвка, закреплённая сбоку.',
        cost: 1600,
        weight: 39,
        source: 'PHB:151',
        category: 'Снаряжение',
        subcategory: 'Набор'
    },
    {
        name: 'Набор дипломата ',
        nameEn: '',
        description: 'Включает сундук, 2 контейнера для карт и свитков, комплект отличной одежды, бутылочку чернил, писчее перо, лампу, 2 фляги масла, 5 листов бумаги, флакон духов, воск и мыло.',
        cost: 3900,
        weight: 36,
        source: 'PHB:151',
        category: 'Снаряжение',
        subcategory: 'Набор'
    },
    {
        name: 'Набор исследователя подземелий',
        nameEn: '',
        description: 'Включает рюкзак, ломик, молоток, 10 шлямбуров, 10 факелов, трутницу, рационы на 10 дней и бурдюк. В набор также входит 50-футовая пеньковая верёвка, закреплённая сбоку.',
        cost: 1200,
        weight: 43,
        source: 'PHB:151',
        category: 'Снаряжение',
        subcategory: 'Набор'
    },
    {
        name: 'Набор путешественника',
        nameEn: '',
        description: 'Включает рюкзак, спальник, столовый набор, трутницу, 10 факелов, рационы на 10 дней и бурдюк. В набор также входит 50-футовая пеньковая верёвка, закреплённая сбоку.',
        cost: 1000,
        weight: 59,
        source: 'PHB:151',
        category: 'Снаряжение',
        subcategory: 'Набор'
    },
    {
        name: 'Набор священника',
        nameEn: '',
        description: 'Включает рюкзак, одеяло, 10 свечек, трутницу, коробку для пожертвований, 2 упаковки благовоний, кадило, облачение, рационы на 2 дня и бурдюк.',
        cost: 1900,
        weight: 22,
        source: 'PHB:151',
        category: 'Снаряжение',
        subcategory: 'Набор'
    },
    {
        name: 'Набор учёного',
        nameEn: '',
        description: 'Включает рюкзак, научную книгу, бутылочку чернил, писчее перо, 10 листов пергамента, небольшую сумочку с песком и небольшой нож.',
        cost: 4000,
        weight: 11,
        source: 'PHB:151',
        category: 'Снаряжение',
        subcategory: 'Набор'
    },
    {
        name: 'Воровские инструменты',
        nameEn: '',
        description: 'В этот набор инструментов входят небольшой напильник, набор отмычек, небольшое зеркальце на длинной ручке, ножницы и пара щипчиков. Владение этими инструментами позволяет добавлять бонус мастерства ко всем проверкам характеристик, сделанным для отключения ловушек и взлома замков.',
        cost: 2500,
        weight: 1,
        source: 'PHB:154',
        category: 'Инструменты'
    },
    {
        name: 'Драконьи шахматы',
        nameEn: '',
        description: 'Игры могут состоять из разных предметов, включая кости и колоды карт. В таблице указаны примеры игр, но есть и другие наборы. Если вы владеете игровым набором, вы можете добавлять бонус мастерства к проверкам характеристик, совершаемым во время игры. Для каждой игры требуется отдельное владение.',
        cost: 100,
        weight: 0.5,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Игровой набор'
    },
    {
        name: 'Карты',
        nameEn: '',
        description: 'Игры могут состоять из разных предметов, включая кости и колоды карт. В таблице указаны примеры игр, но есть и другие наборы. Если вы владеете игровым набором, вы можете добавлять бонус мастерства к проверкам характеристик, совершаемым во время игры. Для каждой игры требуется отдельное владение.',
        cost: 50,
        weight: 0,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Игровой набор'
    },
    {
        name: 'Кости',
        nameEn: '',
        description: 'Игры могут состоять из разных предметов, включая кости и колоды карт. В таблице указаны примеры игр, но есть и другие наборы. Если вы владеете игровым набором, вы можете добавлять бонус мастерства к проверкам характеристик, совершаемым во время игры. Для каждой игры требуется отдельное владение.',
        cost: 10,
        weight: 0,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Игровой набор'
    },
    {
        name: 'Ставка трёх драконов',
        nameEn: '',
        description: 'Игры могут состоять из разных предметов, включая кости и колоды карт. В таблице указаны примеры игр, но есть и другие наборы. Если вы владеете игровым набором, вы можете добавлять бонус мастерства к проверкам характеристик, совершаемым во время игры. Для каждой игры требуется отдельное владение.',
        cost: 100,
        weight: 0,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Игровой набор'
    },
    {
        name: 'Инструменты навигатора',
        nameEn: '',
        description: 'Эти инструменты используются для навигации в море. Владение инструментами навигатора позволяет прокладывать курс корабля и пользоваться морскими картами. Кроме того, эти инструменты позволяют вам добавлять бонус мастерства к проверкам характеристик, совершённым, чтобы не потеряться в море.',
        cost: 2500,
        weight: 2,
        source: 'PHB:154',
        category: 'Инструменты'
    },
    {
        name: 'Инструменты отравителя',
        nameEn: '',
        description: 'В набор отравителя входят флаконы, химикаты и прочее снаряжение, необходимое для создания ядов. Владение этим набором позволяет вам добавлять бонус мастерства к проверкам характеристик, совершённым для создания и использования ядов.',
        cost: 5000,
        weight: 2,
        source: 'PHB:154',
        category: 'Инструменты'
    },
    {
        name: 'Инструменты алхимика',
        nameEn: '',
        description: 'В эти особые наборы входят инструменты, необходимые для ремесла и торговли. В таблице приведены примеры самых распространённых наборов, каждый из которых связан со своим ремеслом. Владение инструментами ремесленника позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при использовании инструментов в ремесле. Для каждого набора инструментов требуется отдельное владение.',
        cost: 5000,
        weight: 8,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Инструменты ремесленников'
    },
    {
        name: 'Инструменты гончара ',
        nameEn: '',
        description: 'В эти особые наборы входят инструменты, необходимые для ремесла и торговли. В таблице приведены примеры самых распространённых наборов, каждый из которых связан со своим ремеслом. Владение инструментами ремесленника позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при использовании инструментов в ремесле. Для каждого набора инструментов требуется отдельное владение.',
        cost: 1000,
        weight: 3,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Инструменты ремесленников'
    },
    {
        name: 'Инструменты жестянщика ',
        nameEn: '',
        description: 'В эти особые наборы входят инструменты, необходимые для ремесла и торговли. В таблице приведены примеры самых распространённых наборов, каждый из которых связан со своим ремеслом. Владение инструментами ремесленника позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при использовании инструментов в ремесле. Для каждого набора инструментов требуется отдельное владение.',
        cost: 5000,
        weight: 10,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Инструменты ремесленников'
    },
    {
        name: 'Инструменты каллиграфа',
        nameEn: '',
        description: 'В эти особые наборы входят инструменты, необходимые для ремесла и торговли. В таблице приведены примеры самых распространённых наборов, каждый из которых связан со своим ремеслом. Владение инструментами ремесленника позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при использовании инструментов в ремесле. Для каждого набора инструментов требуется отдельное владение.',
        cost: 1000,
        weight: 5,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Инструменты ремесленников'
    },
    {
        name: 'Инструменты каменщика',
        nameEn: '',
        description: 'В эти особые наборы входят инструменты, необходимые для ремесла и торговли. В таблице приведены примеры самых распространённых наборов, каждый из которых связан со своим ремеслом. Владение инструментами ремесленника позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при использовании инструментов в ремесле. Для каждого набора инструментов требуется отдельное владение.',
        cost: 1000,
        weight: 8,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Инструменты ремесленников'
    },
    {
        name: 'Инструменты картографа',
        nameEn: '',
        description: 'В эти особые наборы входят инструменты, необходимые для ремесла и торговли. В таблице приведены примеры самых распространённых наборов, каждый из которых связан со своим ремеслом. Владение инструментами ремесленника позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при использовании инструментов в ремесле. Для каждого набора инструментов требуется отдельное владение.',
        cost: 1500,
        weight: 6,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Инструменты ремесленников'
    },
    {
        name: 'Инструменты кожевника',
        nameEn: '',
        description: 'В эти особые наборы входят инструменты, необходимые для ремесла и торговли. В таблице приведены примеры самых распространённых наборов, каждый из которых связан со своим ремеслом. Владение инструментами ремесленника позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при использовании инструментов в ремесле. Для каждого набора инструментов требуется отдельное владение.',
        cost: 500,
        weight: 5,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Инструменты ремесленников'
    },
    {
        name: 'Инструменты кузнеца',
        nameEn: '',
        description: 'В эти особые наборы входят инструменты, необходимые для ремесла и торговли. В таблице приведены примеры самых распространённых наборов, каждый из которых связан со своим ремеслом. Владение инструментами ремесленника позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при использовании инструментов в ремесле. Для каждого набора инструментов требуется отдельное владение.',
        cost: 2000,
        weight: 8,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Инструменты ремесленников'
    },
    {
        name: 'Инструменты пивовара',
        nameEn: '',
        description: 'В эти особые наборы входят инструменты, необходимые для ремесла и торговли. В таблице приведены примеры самых распространённых наборов, каждый из которых связан со своим ремеслом. Владение инструментами ремесленника позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при использовании инструментов в ремесле. Для каждого набора инструментов требуется отдельное владение.',
        cost: 2000,
        weight: 9,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Инструменты ремесленников'
    },
    {
        name: 'Инструменты плотника',
        nameEn: '',
        description: 'В эти особые наборы входят инструменты, необходимые для ремесла и торговли. В таблице приведены примеры самых распространённых наборов, каждый из которых связан со своим ремеслом. Владение инструментами ремесленника позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при использовании инструментов в ремесле. Для каждого набора инструментов требуется отдельное владение.',
        cost: 800,
        weight: 6,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Инструменты ремесленников'
    },
    {
        name: 'Инструменты повара',
        nameEn: '',
        description: 'В эти особые наборы входят инструменты, необходимые для ремесла и торговли. В таблице приведены примеры самых распространённых наборов, каждый из которых связан со своим ремеслом. Владение инструментами ремесленника позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при использовании инструментов в ремесле. Для каждого набора инструментов требуется отдельное владение.',
        cost: 100,
        weight: 8,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Инструменты ремесленников'
    },
    {
        name: 'Инструменты резчика по дереву',
        nameEn: '',
        description: 'В эти особые наборы входят инструменты, необходимые для ремесла и торговли. В таблице приведены примеры самых распространённых наборов, каждый из которых связан со своим ремеслом. Владение инструментами ремесленника позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при использовании инструментов в ремесле. Для каждого набора инструментов требуется отдельное владение.',
        cost: 100,
        weight: 5,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Инструменты ремесленников'
    },
    {
        name: 'Инструменты сапожника',
        nameEn: '',
        description: 'В эти особые наборы входят инструменты, необходимые для ремесла и торговли. В таблице приведены примеры самых распространённых наборов, каждый из которых связан со своим ремеслом. Владение инструментами ремесленника позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при использовании инструментов в ремесле. Для каждого набора инструментов требуется отдельное владение.',
        cost: 500,
        weight: 5,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Инструменты ремесленников'
    },
    {
        name: 'Инструменты стеклодува',
        nameEn: '',
        description: 'В эти особые наборы входят инструменты, необходимые для ремесла и торговли. В таблице приведены примеры самых распространённых наборов, каждый из которых связан со своим ремеслом. Владение инструментами ремесленника позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при использовании инструментов в ремесле. Для каждого набора инструментов требуется отдельное владение.',
        cost: 3000,
        weight: 5,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Инструменты ремесленников'
    },
    {
        name: 'Инструменты ткача',
        nameEn: '',
        description: 'В эти особые наборы входят инструменты, необходимые для ремесла и торговли. В таблице приведены примеры самых распространённых наборов, каждый из которых связан со своим ремеслом. Владение инструментами ремесленника позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при использовании инструментов в ремесле. Для каждого набора инструментов требуется отдельное владение.',
        cost: 100,
        weight: 5,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Инструменты ремесленников'
    },
    {
        name: 'Инструменты художника',
        nameEn: '',
        description: 'В эти особые наборы входят инструменты, необходимые для ремесла и торговли. В таблице приведены примеры самых распространённых наборов, каждый из которых связан со своим ремеслом. Владение инструментами ремесленника позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при использовании инструментов в ремесле. Для каждого набора инструментов требуется отдельное владение.',
        cost: 1000,
        weight: 5,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Инструменты ремесленников'
    },
    {
        name: 'Инструменты ювелира',
        nameEn: '',
        description: 'В эти особые наборы входят инструменты, необходимые для ремесла и торговли. В таблице приведены примеры самых распространённых наборов, каждый из которых связан со своим ремеслом. Владение инструментами ремесленника позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при использовании инструментов в ремесле. Для каждого набора инструментов требуется отдельное владение.',
        cost: 2500,
        weight: 2,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Инструменты ремесленников'
    },
    {
        name: 'Барабан ',
        nameEn: '',
        description: 'Самые популярные музыкальные инструменты указаны в таблице. Если вы владеете определённым музыкальным инструментом, вы можете добавлять бонус мастерства к проверкам характеристик, совершённым во время игры на нём. Бард может использовать музыкальный инструмент в качестве фокусировки для заклинаний. Для каждого музыкального инструмента нужно отдельное владение.',
        cost: 600,
        weight: 3,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Музыкальные инструменты'
    },
    {
        name: 'Виола',
        nameEn: '',
        description: 'Самые популярные музыкальные инструменты указаны в таблице. Если вы владеете определённым музыкальным инструментом, вы можете добавлять бонус мастерства к проверкам характеристик, совершённым во время игры на нём. Бард может использовать музыкальный инструмент в качестве фокусировки для заклинаний. Для каждого музыкального инструмента нужно отдельное владение.',
        cost: 3000,
        weight: 1,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Музыкальные инструменты'
    },
    {
        name: 'Волынка',
        nameEn: '',
        description: 'Самые популярные музыкальные инструменты указаны в таблице. Если вы владеете определённым музыкальным инструментом, вы можете добавлять бонус мастерства к проверкам характеристик, совершённым во время игры на нём. Бард может использовать музыкальный инструмент в качестве фокусировки для заклинаний. Для каждого музыкального инструмента нужно отдельное владение.',
        cost: 3000,
        weight: 6,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Музыкальные инструменты'
    },
    {
        name: 'Лира',
        nameEn: '',
        description: 'Самые популярные музыкальные инструменты указаны в таблице. Если вы владеете определённым музыкальным инструментом, вы можете добавлять бонус мастерства к проверкам характеристик, совершённым во время игры на нём. Бард может использовать музыкальный инструмент в качестве фокусировки для заклинаний. Для каждого музыкального инструмента нужно отдельное владение.',
        cost: 3000,
        weight: 2,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Музыкальные инструменты'
    },
    {
        name: 'Лютня ',
        nameEn: '',
        description: 'Самые популярные музыкальные инструменты указаны в таблице. Если вы владеете определённым музыкальным инструментом, вы можете добавлять бонус мастерства к проверкам характеристик, совершённым во время игры на нём. Бард может использовать музыкальный инструмент в качестве фокусировки для заклинаний. Для каждого музыкального инструмента нужно отдельное владение.',
        cost: 3500,
        weight: 2,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Музыкальные инструменты'
    },
    {
        name: 'Рожок ',
        nameEn: '',
        description: 'Самые популярные музыкальные инструменты указаны в таблице. Если вы владеете определённым музыкальным инструментом, вы можете добавлять бонус мастерства к проверкам характеристик, совершённым во время игры на нём. Бард может использовать музыкальный инструмент в качестве фокусировки для заклинаний. Для каждого музыкального инструмента нужно отдельное владение.',
        cost: 300,
        weight: 2,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Музыкальные инструменты'
    },
    {
        name: 'Свирель ',
        nameEn: '',
        description: 'Самые популярные музыкальные инструменты указаны в таблице. Если вы владеете определённым музыкальным инструментом, вы можете добавлять бонус мастерства к проверкам характеристик, совершённым во время игры на нём. Бард может использовать музыкальный инструмент в качестве фокусировки для заклинаний. Для каждого музыкального инструмента нужно отдельное владение.',
        cost: 1200,
        weight: 2,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Музыкальные инструменты'
    },
    {
        name: 'Флейта',
        nameEn: '',
        description: 'Самые популярные музыкальные инструменты указаны в таблице. Если вы владеете определённым музыкальным инструментом, вы можете добавлять бонус мастерства к проверкам характеристик, совершённым во время игры на нём. Бард может использовать музыкальный инструмент в качестве фокусировки для заклинаний. Для каждого музыкального инструмента нужно отдельное владение.',
        cost: 200,
        weight: 1,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Музыкальные инструменты'
    },
    {
        name: 'Цимбалы ',
        nameEn: '',
        description: 'Самые популярные музыкальные инструменты указаны в таблице. Если вы владеете определённым музыкальным инструментом, вы можете добавлять бонус мастерства к проверкам характеристик, совершённым во время игры на нём. Бард может использовать музыкальный инструмент в качестве фокусировки для заклинаний. Для каждого музыкального инструмента нужно отдельное владение.',
        cost: 2500,
        weight: 10,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Музыкальные инструменты'
    },
    {
        name: 'Шалмей ',
        nameEn: '',
        description: 'Самые популярные музыкальные инструменты указаны в таблице. Если вы владеете определённым музыкальным инструментом, вы можете добавлять бонус мастерства к проверкам характеристик, совершённым во время игры на нём. Бард может использовать музыкальный инструмент в качестве фокусировки для заклинаний. Для каждого музыкального инструмента нужно отдельное владение.',
        cost: 200,
        weight: 1,
        source: 'PHB:154',
        category: 'Инструменты',
        subcategory: 'Музыкальные инструменты'
    },
    {
        name: 'Набор для грима',
        nameEn: '',
        description: ' Этот набор косметики, красителей для волос и бутафории позволяет изменять ваш внешний облик. Владение этим набором позволяет добавлять бонус мастерства к проверкам характеристик, совершённым для визуальной маскировки.',
        cost: 2500,
        weight: 3,
        source: 'PHB:154',
        category: 'Инструменты'
    },
    {
        name: 'Набор для фальсификации',
        nameEn: '',
        description: 'В этой небольшой коробке лежат разные бумаги и пергаменты, ручки и чернила, печати и куски воска, золотая и серебряная фольга, и прочие припасы, необходимые для создания убедительных подделок документов. Владение этим набором позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при создании поддельных документов.',
        cost: 1500,
        weight: 5,
        source: 'PHB:154',
        category: 'Инструменты'
    },
    {
        name: 'Набор травника',
        nameEn: '',
        description: 'В этот набор входят разнообразные инструменты, такие как ножницы, ступка и пестик, а также мешочки и флаконы, используемые травниками при создании снадобий и зелий. Владение этим набором позволяет добавлять бонус мастерства к проверкам характеристик, совершённым при опознании и использовании трав. Кроме того, владение этим набором требуется для создания противоядия и зелья лечения.',
        cost: 500,
        weight: 3,
        source: 'PHB:154',
        category: 'Инструменты'
    },
    {
        name: 'Боевой конь',
        nameEn: '',
        description: 'Скорость 60 футов. Грузоподъёмность 540 фунтов.',
        cost: 40000,
        source: 'PHB:157',
        category: 'Скакуны и другие животные'
    },
    {
        name: 'Верблюд',
        nameEn: '',
        description: 'Скорость 50 футов. Грузоподъёмность 480 фунтов.',
        cost: 5000,
        source: 'PHB:157',
        category: 'Скакуны и другие животные'
    },
    {
        name: 'Лошадь, ездовая',
        nameEn: '',
        description: 'Скорость 60 футов. Грузоподъёмность 480 фунтов.',
        cost: 7500,
        source: 'PHB:157',
        category: 'Скакуны и другие животные'
    },
    {
        name: 'Лошадь, тягловая',
        nameEn: '',
        description: 'Скорость 40 футов. Грузоподъёмность 540 фунтов.',
        cost: 5000,
        source: 'PHB:157',
        category: 'Скакуны и другие животные'
    },
    {
        name: 'Мастифф',
        nameEn: '',
        description: 'Скорость 4000 футов. Грузоподъёмность 195 фунтов.',
        cost: 2500,
        source: 'PHB:157',
        category: 'Скакуны и другие животные'
    },
    {
        name: 'Мул',
        nameEn: '',
        description: 'Скорость 40 футов. Грузоподъёмность 420 фунтов.',
        cost: 800,
        source: 'PHB:157',
        category: 'Скакуны и другие животные'
    },
    {
        name: 'Осёл',
        nameEn: '',
        description: 'Скорость 40 футов. Грузоподъёмность 420 фунтов.',
        cost: 800,
        source: 'PHB:157',
        category: 'Скакуны и другие животные'
    },
    {
        name: 'Пони',
        nameEn: '',
        description: 'Скорость 40 футов. Грузоподъёмность 225 фунтов.',
        cost: 3000,
        source: 'PHB:157',
        category: 'Скакуны и другие животные'
    },
    {
        name: 'Слон',
        nameEn: '',
        description: 'Скорость 40 футов. Грузоподъёмность 1320 фунтов.',
        cost: 20000,
        source: 'PHB:157',
        category: 'Скакуны и другие животные'
    },
    {
        name: 'Трицератопс',
        nameEn: '',
        description: 'Скорость 50 футов. Грузоподъёмность 1320 фунтов.',
        cost: 50000,
        source: 'PHB:157',
        category: 'Скакуны и другие животные'
    },
    {
        name: 'Карета',
        nameEn: '',
        cost: 25000,
        weight: 100,
        source: 'PHB:157',
        category: 'Сёдла, упряжь и транспорт'
    },
    {
        name: 'Коляска',
        nameEn: '',
        cost: 10000,
        weight: 600,
        source: 'PHB:157',
        category: 'Сёдла, упряжь и транспорт'
    },
    {
        name: 'Конюшня',
        nameEn: '',
        description: 'В день',
        cost: 50,
        source: 'PHB:157',
        category: 'Сёдла, упряжь и транспорт'
    },
    {
        name: 'Корм',
        nameEn: '',
        description: 'В день',
        cost: 5,
        weight: 10,
        source: 'PHB:157',
        category: 'Сёдла, упряжь и транспорт'
    },
    {
        name: 'Сани',
        nameEn: '',
        cost: 2000,
        weight: 300,
        source: 'PHB:157',
        category: 'Сёдла, упряжь и транспорт'
    },
    {
        name: 'Седельные сумки',
        nameEn: '',
        cost: 400,
        weight: 8,
        source: 'PHB:157',
        category: 'Сёдла, упряжь и транспорт'
    },
    {
        name: 'Военное седло',
        nameEn: '',
        cost: 2000,
        weight: 30,
        source: 'PHB:157',
        category: 'Сёдла, упряжь и транспорт',
        subcategory: 'Сёдла'
    },
    {
        name: 'Грузовое седло',
        nameEn: '',
        cost: 500,
        weight: 15,
        source: 'PHB:157',
        category: 'Сёдла, упряжь и транспорт',
        subcategory: 'Сёдла'
    },
    {
        name: 'Ездовое седло',
        nameEn: '',
        cost: 1000,
        weight: 25,
        source: 'PHB:157',
        category: 'Сёдла, упряжь и транспорт',
        subcategory: 'Сёдла'
    },
    {
        name: 'Экзотическое седло',
        nameEn: '',
        cost: 6000,
        weight: 40,
        source: 'PHB:157',
        category: 'Сёдла, упряжь и транспорт',
        subcategory: 'Сёдла'
    },
    {
        name: 'Телега',
        nameEn: '',
        cost: 1500,
        weight: 200,
        source: 'PHB:157',
        category: 'Сёдла, упряжь и транспорт'
    },
    {
        name: 'Упряжь и уздечка',
        nameEn: '',
        cost: 200,
        weight: 1,
        source: 'PHB:157',
        category: 'Сёдла, упряжь и транспорт'
    },
    {
        name: 'Фургон',
        nameEn: '',
        cost: 3500,
        weight: 400,
        source: 'PHB:157',
        category: 'Сёдла, упряжь и транспорт'
    },
    {
        name: 'Военный корабль',
        nameEn: '',
        description: 'Скорость: 2,5 узла',
        cost: 2500000,
        source: 'PHB:157',
        category: 'Водный транспорт'
    },
    {
        name: 'Галера',
        nameEn: '',
        description: 'Скорость: 4 узла',
        cost: 3000000,
        source: 'PHB:157',
        category: 'Водный транспорт'
    },
    {
        name: 'Килевая лодка',
        nameEn: '',
        description: 'Скорость: 1 узел',
        cost: 300000,
        source: 'PHB:157',
        category: 'Водный транспорт'
    },
    {
        name: 'Ладья',
        nameEn: '',
        description: 'Скорость: 3 узла',
        cost: 1000000,
        source: 'PHB:157',
        category: 'Водный транспорт'
    },
    {
        name: 'Парусный корабль',
        nameEn: '',
        description: 'Скорость: 2 узла',
        cost: 1000000,
        source: 'PHB:157',
        category: 'Водный транспорт'
    },
    {
        name: 'Шлюпка (вёсельная лодка)',
        nameEn: '',
        description: 'Скорость: 1,5 узла. Мест: 2',
        cost: 50,
        weight: 100,
        source: 'PHB:157',
        category: 'Водный транспорт'
    },
    {
        name: 'Каноэ',
        nameEn: '',
        description: 'Скорость: 1,5 узла. Мест: 6',
        cost: 50,
        weight: 100,
        source: 'PHB:157',
        category: 'Водный транспорт'
    },
    {
        name: 'Пшеница',
        nameEn: '',
        cost: 1,
        weight: 1,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Мука',
        nameEn: '',
        cost: 2,
        weight: 1,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Курица',
        nameEn: '',
        cost: 2,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Соль',
        nameEn: '',
        cost: 5,
        weight: 1,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Железо',
        nameEn: '',
        description: "",
        cost: 10,
        weight: 1,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Холст',
        nameEn: '',
        description: '10 квадратных футов',
        cost: 10,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Медь',
        nameEn: '',
        cost: 50,
        weight: 1,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Хлопчатобумажная ткань',
        nameEn: '',
        description: '10 квадратных футов',
        cost: 50,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Имбирь',
        nameEn: '',
        cost: 100,
        weight: 1,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Коза',
        nameEn: '',
        cost: 100,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Корица',
        nameEn: '',
        cost: 200,
        weight: 1,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Перец',
        nameEn: '',
        cost: 200,
        weight: 1,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Овца',
        nameEn: '',
        cost: 200,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Гвоздика',
        nameEn: '',
        cost: 300,
        weight: 1,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Свинья',
        nameEn: '',
        cost: 300,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Серебро',
        nameEn: '',
        cost: 500,
        weight: 1,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Льняная ткань',
        nameEn: '',
        description: '10 квадратных футов',
        cost: 300,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Шафран',
        nameEn: '',
        cost: 1500,
        weight: 1,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Вол',
        nameEn: '',
        cost: 1500,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Золото',
        nameEn: '',
        cost: 5000,
        weight: 1,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Платина',
        nameEn: '',
        cost: 50000,
        weight: 1,
        source: 'PHB:157',
        category: 'Товары'
    },
    {
        name: 'Вино, обычное',
        nameEn: '',
        description: 'кружка',
        cost: 20,
        source: 'PHB:158',
        category: 'Еда и напитки'
    },
    {
        name: 'Вино, обычное',
        nameEn: '',
        description: 'бутылка',
        cost: 50,
        source: 'PHB:158',
        category: 'Еда и напитки'
    },
    {
        name: 'Вино, отличное',
        nameEn: '',
        description: 'кружка',
        cost: 400,
        source: 'PHB:158',
        category: 'Еда и напитки'
    },
    {
        name: 'Вино, отличное',
        nameEn: '',
        description: 'бутылка',
        cost: 1000,
        source: 'PHB:158',
        category: 'Еда и напитки'
    },
    {
        name: 'Мясо',
        nameEn: '',
        description: 'кусок',
        cost: 300,
        source: 'PHB:158',
        category: 'Еда и напитки'
    },
    {
        name: 'Пиво',
        nameEn: '',
        description: 'кружка',
        cost: 4,
        source: 'PHB:158',
        category: 'Еда и напитки'
    },
    {
        name: 'Пиво',
        nameEn: '',
        description: 'галлон',
        cost: 20,
        source: 'PHB:158',
        category: 'Еда и напитки'
    },
    {
        name: 'Сыр',
        nameEn: '',
        description: 'кусок',
        cost: 10,
        source: 'PHB:158',
        category: 'Еда и напитки'
    },
    {
        name: 'Торжественный обед',
        nameEn: '',
        description: 'на 1 едока',
        cost: 1000,
        source: 'PHB:158',
        category: 'Еда и напитки'
    },
    {
        name: 'Хлеб',
        nameEn: '',
        description: 'ломоть',
        cost: 2,
        source: 'PHB:158',
        category: 'Еда и напитки'
    },
    {
        name: 'Кровь ассасина',
        nameEn: 'Assassin’s Blood',
        description: `Существо, подвергшееся действию этого яда, должно совершить спасбросок Телосложения со Сл 10. При провале оно получает урон ядом 6 (1к12) и становится отравленным на 24 часа. При успехе существо получает половину урона и не становится отравленным.`,
        damage: {
            cubeType: 12,
            cubeCount: 1,
        },
        saveThrow: {
            type: 'con',
            dc: 10,
        },
        cost: 15000,
        poisonType: 'ingested',
        source: 'DMG 257',
        category: 'Снаряжение',
        subcategory: 'Яды'
    },
    {
        name: 'Дым жжённого отура',
        nameEn: 'Burnt Othur Fumes',
        description: `Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 13, иначе оно получит урон ядом 10 (3к6) и будет должно повторять этот спасбросок в начале каждого своего хода. При каждом провале персонаж получит урон ядом 3 (1к6). После трёх успехов яд прекратит своё действие.`,
        damage: {
            cubeType: 6,
            cubeCount: 3,
        },
        saveThrow: {
            type: 'con',
            dc: 13,
        },
        cost: 50000,
        poisonType: 'inhaled',
        source: 'DMG:258',
        category: 'Снаряжение',
        subcategory: 'Яды'
    },
    {
        name: 'Слизь ползающего падальщика',
        nameEn: 'Crawler Mucus',
        description: `Этот яд собирают с мёртвого или недееспособного ползающего падальщика. Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 13, иначе оно станет отравленным на 1 минуту. Будучи отравленным, существо также парализовано. Существо может повторять спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.`,
        saveThrow: {
            type: 'con',
            dc: 13,
        },
        cost: 20000,
        poisonType: 'contact',
        source: 'DMG:258',
        category: 'Снаряжение',
        subcategory: 'Яды'
    },
    {
        name: 'Яд дроу',
        nameEn: 'Drow Poison',
        description: `Обычно этот яд изготавливают только дроу, к тому же в местах, где нет солнечного света. Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 13, иначе оно станет отравленным на 1 час. Если спасбросок провален на 5 или больше единиц, существо также лишено сознания, пока отравлено. Существо приходит в сознание, если получает урон или другое существо действием его потрясёт, чтобы разбудить.`,
        saveThrow: {
            type: 'con',
            dc: 13,
        },
        cost: 20000,
        poisonType: 'injury',
        source: 'DMG:258',
        category: 'Снаряжение',
        subcategory: 'Яды'
    },
    {
        name: 'Эссенция эфира',
        nameEn: 'Essence of Ether',
        description: `Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 15, иначе оно станет отравленным на 8 часов. Существо также лишено сознания, пока отравлено. Существо приходит в сознание, если получает урон или другое существо действием его потрясёт, чтобы разбудить.`,
        saveThrow: {
            type: 'con',
            dc: 15,
        },
        cost: 30000,
        poisonType: 'inhaled',
        source: 'DMG:258',
        category: 'Снаряжение',
        subcategory: 'Яды'
    },
    {
        name: 'Злоба',
        nameEn: 'Malice',
        description: `Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 15, иначе оно станет отравленным на 1 час. Существо ослеплено, пока отравлено.`,
        saveThrow: {
            type: 'con',
            dc: 15,
        },
        cost: 25000,
        poisonType: 'inhaled',
        source: 'DMG:258',
        category: 'Снаряжение',
        subcategory: 'Яды'
    },
    {
        name: 'Полуночные слёзы',
        nameEn: 'Midnight Tears',
        description: `Существо, проглотившее этот яд, до полуночи ни от чего не страдает. Если до этого момента яд не был нейтрализован, существо должно преуспеть в спасброске Телосложения со Сл 17, получая урон ядом 31 (9к6) при провале или половину этого урона при успехе.`,
        damage: {
            cubeType: 6,
            cubeCount: 9,
        },
        saveThrow: {
            type: 'con',
            dc: 17,
        },
        cost: 150000,
        poisonType: 'ingested',
        source: 'DMG:258',
        category: 'Снаряжение',
        subcategory: 'Яды'
    },
    {
        name: 'Масло таггита',
        nameEn: 'Oil of Taggit',
        description: `Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 13, иначе оно станет отравленным на 24 часа. Существо также лишено сознания, пока отравлено. Существо приходит в сознание, если получает урон.`,
        saveThrow: {
            type: 'con',
            dc: 13,
        },
        cost: 40000,
        poisonType: 'contact',
        source: 'DMG:258',
        category: 'Снаряжение',
        subcategory: 'Яды'
    },
    {
        name: 'Бледная настойка',
        nameEn: 'Pale Tincture',
        description: `Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 16, иначе получит урон ядом 3 (1к6) и станет отравленным. Отравленное существо должно повторять спасбросок каждые 24 часа, получая урон ядом 3 (1к6) при провале. Пока яд действует, урон, причинённый им, ничем не может быть вылечен. После семи успешных спасбросков эффект оканчивается, и существо может лечиться как обычно.`,
        damage: {
            cubeType: 6,
            cubeCount: 1,
        },
        saveThrow: {
            type: 'con',
            dc: 16,
        },
        cost: 25000,
        damageType: 'poison',
        poisonType: 'ingested',
        source: 'DMG:258',
        category: 'Снаряжение',
        subcategory: 'Яды'
    },
    {
        name: 'Яд лилового червя',
        nameEn: 'Purple Worm Poison',
        description: `Этот яд собирают с мёртвого или недееспособного лилового червя. Существо, подвергшееся действию этого яда, должно совершить спасбросок Телосложения со Сл 19, получая при провале урон ядом 42 (12к6), или половину этого урона при успехе.`,
        damage: {
            cubeType: 6,
            cubeCount: 12,
        },
        saveThrow: {
            type: 'con',
            dc: 19,
        },
        cost: 200000,
        damageType: 'poison',
        poisonType: 'injury',
        source: 'DMG:258',
        category: 'Снаряжение',
        subcategory: 'Яды'
    },
    {
        name: 'Змеиный яд',
        nameEn: 'Serpent Venom',
        description: `Этот яд собирают с мёртвой или недееспособной гигантской ядовитой змеи. Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 11, получая урон ядом 10 (3к6) при провале, или половину этого урона при успехе.`,
        damage: {
            cubeType: 6,
            cubeCount: 3,
        },
        saveThrow: {
            type: 'con',
            dc: 11,
        },
        cost: 20000,
        damageType: 'poison',
        poisonType: 'injury',
        source: 'DMG:258',
        category: 'Снаряжение',
        subcategory: 'Яды'
    },
    {
        name: 'Ступор',
        nameEn: 'Torpor',
        description: `Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 15, иначе оно станет отравленным на 4к6 часов. Существо также недееспособно, пока отравлено.`,
        saveThrow: {
            type: 'con',
            dc: 15,
        },
        cost: 60000,
        poisonType: 'ingested',
        source: 'DMG:258',
        category: 'Снаряжение',
        subcategory: 'Яды'
    },
    {
        name: 'Сыворотка правды',
        nameEn: 'Truth Serum',
        description: `Существо, подвергшееся действию этого яда, должно преуспеть в спасброске Телосложения со Сл 11, иначе станет отравленным на 1 час. Пока существо отравлено, оно не может сознательно говорить ложь, как если бы оно находилось под действием заклинания «Область истины».`,
        saveThrow: {
            type: 'con',
            dc: 11,
        },
        cost: 15000,
        poisonType: 'ingested',
        source: 'DMG:258',
        category: 'Снаряжение',
        subcategory: 'Яды'
    },
    {
        name: 'Яд виверны',
        nameEn: 'Wyvern Poison',
        description: `Этот яд собирают с мёртвой или недееспособной виверны. Существо, подвергшееся действию этого яда, должно совершить спасбросок Телосложения со Сл 15, получая при провале урон ядом 24 (7к6) или половину этого урона при успехе.`,
        damage: {
            cubeType: 6,
            cubeCount: 7,
        },
        saveThrow: {
            type: 'con',
            dc: 15,
        },
        cost: 120000,
        damageType: 'poison',
        poisonType: 'injury',
        source: 'DMG:258',
        category: 'Снаряжение',
        subcategory: 'Яды'
    },
]

const goodListPreparedForFullTextSearch = _.sortBy(
    goodList.map(
        (item, i) => ({
            ...item,
            id: i,
            [SEARCH_PROP_NAME]: [
                item.name,
                item.nameEn,
                item.description,
                item.category,
                item.subcategory,
            ]
                .filter(
                    e => e
                )
                .map(
                    e => String(e).toLowerCase()
                )
                .join(' ')
        })
    ),
    [
        'name',
        'description',
    ]
)

export default goodListPreparedForFullTextSearch
