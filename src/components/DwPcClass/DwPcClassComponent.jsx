import React from 'react'
import declint from 'declint-ru'

import DwMoveList from '@/components/DwMoveList'
import DwMoveLink from '@/components/DwMoveLink'

import './DwPcClassStyles.less'

const DwPcClassComponent = (
  {
    advancedMoveIdList,
    advancedMoveToPickOnStart,
    backgroundIdList,
    capstoneMoveIdList,
    damageDice,
    description,
    equipmentHtml,
    featureList,
    hpBonus,
    nameList,
    optionalQuestionList,
    quoteEnd,
    specialMoves,
    startMoveIdList,
    striveList,
  },
) => (
  <section className='DwPcClass'>
    <blockquote className='DwPcClass__quote'>
      {description.map(
        (text, index) => (
          <p key={index}>{text}</p>
        ),
      )}
    </blockquote>

    <section className='DwPcClass__name'>
      <h2>Имена</h2>
      <p>Выберите имя персонажа или придумайте своё.</p>
      <p>Примеры имён: <span className='DwPcClass__nameExamples'>{nameList.join(', ')}</span>.</p>

    </section>

    <section className='DwPcClass__appearance'>
      <h2>Внешность</h2>
      <p>Выберите по одной черте внешности:</p>
      <ul>
        {featureList.map(
          ({ name, variantList }) => (
            <li key={name}>
              <b>{name}</b>: {variantList.join(', ')}
            </li>
          ),
        )}
      </ul>
    </section>

    <section className='DwPcClass__params'>
      <h2>Характеристики</h2>
      <p>Распределите эти значения по характеристикам <strong>+2, +1, +1, +0, +0, −1</strong></p>
      <p>Ваши максимальные хиты: <strong>{hpBonus} + ТЕЛ</strong></p>
      <p>Ваш базовый урон: <strong>к{damageDice}</strong>.</p>
    </section>

    <section className='DwPcClass__personality'>
      <h2>Личность персонажа</h2>

      <section className='DwPcClass__strives'>
        <h3>Стремление</h3>
        <p>Выберите до трёх Стремлений своего персонажа. Выбирайте из вариантов ниже, или придумайте собственное.</p>
        <p>Стремления олицетворяют то, как персонаж взаимодействует с миром. Следование стремлениям или иное их
          использование в игре награждается опытом в <DwMoveLink id='common.session_end'>Конце сессии</DwMoveLink>.</p>
        <ul>
          {striveList.map(
            ({ name, text }) => (
              <li key={name}>
                <b>Стремление: {name}</b>
                <p>{text}</p>
              </li>
            ),
          )}
        </ul>
      </section>

      {optionalQuestionList && optionalQuestionList.length ? (
        <section className='DwPcClass__optionalQuestions'>
          <h3>Опциональные вопросы</h3>
          <p>Эти вопросы помогут Вам лучше понимать своего персонажа:</p>
          <ul>
            {optionalQuestionList.map(
              (text, index) => (
                <li key={index}>{text}</li>
              ),
            )}
          </ul>
        </section>
      ) : null}

      <section className='DwPcClass__backgrounds'>
        <h2>Предыстория</h2>
        <p>Теперь выберите предысторию и получите соответствующий ход:</p>
        <DwMoveList idList={backgroundIdList}/>
      </section>
    </section>

    <section className='DwPcClass__moves'>
      <h2>Стартовые ходы</h2>

      <section className='DwPcClass__startMoves'>
        <h3>Вы начинаете игру со следующими стартовыми ходами:</h3>
        <DwMoveList idList={startMoveIdList}/>
      </section>

      {(
        advancedMoveToPickOnStart
        && advancedMoveToPickOnStart.limit
        && advancedMoveToPickOnStart.list
        && advancedMoveToPickOnStart.list.length
      ) ? (
        <section className='DwPcClass__startAdvancedMoves'>
          <h2>Стартовые сложные ходы</h2>
          <p>Сразу выберите
            дополнительно {advancedMoveToPickOnStart.limit} {declint(advancedMoveToPickOnStart.limit, ['сложный ход', 'сложных хода', 'сложных ходов'])} из
            списка ниже <em>(начиная со 2 уровня Вы сможете выбирать эти ходы как обычные Сложные ходы)</em>.</p>
          <DwMoveList idList={advancedMoveToPickOnStart.list}/>
        </section>
      ) : null}

      <section className='DwPcClass__equipment'>
        <h2>Снаряжение</h2>
        <section className='DwPcClass__capacity'>
          <p>Ваша нагрузка равна <strong>9. </strong>Каждый предмет, исключая <em>мелкие</em>, добавляет свой вес к общей
            нагрузке.</p>
          <ul>
            <li><strong>1–3</strong> веса — это лёгкая нагрузка (вы <em>быстры</em> и <em>тихи</em>)</li>
            <li><strong>4–6</strong> нормальная нагрузка</li>
            <li><strong>7–9</strong> тяжёлая (Вы <em>медленны</em>, <em>шумны</em>, Вам <em>жарко</em> и Вы <em>быстро
              устаёте</em>)
            </li>
          </ul>
        </section>
        <section
          className='DwPcClass__startItems'
          dangerouslySetInnerHTML={{__html: equipmentHtml}}
        />
      </section>

      <section className='DwPcClass__advancedMoves'>
        <h2>Сложные ходы</h2>
        <p>{advancedMoveToPickOnStart ? '' : 'Сразу выберите один сложный ход. '} <DwMoveLink id='common.level_up'>Начиная со 2 уровня</DwMoveLink>, Вы каждый уровень можете выбирать {advancedMoveToPickOnStart ? '' : ' ещё'} один сложный ход из списка ниже, либо увеличить один из параметров на +1 (максимум +2).</p>
        <DwMoveList idList={advancedMoveIdList}/>
      </section>

      <section className='DwPcClass__capstoneMoves'>
        <h2>Высшие ходы</h2>
        <p><DwMoveLink id='common.level_up'>Получая уровни</DwMoveLink> 6–10, Вы можете выбирать и из этих ходов тоже, либо увеличивать один из параметров на +1 (максимум +3, только один раз на персонажа).</p>
        <DwMoveList idList={capstoneMoveIdList}/>
      </section>

      {(
        specialMoves
        && specialMoves.list
        && specialMoves.list.length
      ) ? (
        <section className='DwPcClass__startAdvancedMoves'>
          <h2>{specialMoves.title}</h2>
          {specialMoves.text ? (
            <section
              className='DwPcClass__startItems'
              dangerouslySetInnerHTML={{__html: specialMoves.text}}
            />
          ) : null}
          <DwMoveList idList={specialMoves.list}/>
        </section>
      ) : null}

      {quoteEnd ? (
        <blockquote className='DwPcClass__quote'>
          {quoteEnd.text}
          <cite className='DwPcClass__quoteAuthor'>— {quoteEnd.author}</cite>
        </blockquote>
      ) : null}
    </section>
  </section>
)

export default DwPcClassComponent
