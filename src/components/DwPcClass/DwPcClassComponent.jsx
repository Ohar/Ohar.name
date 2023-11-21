import React from 'react'
import declint from 'declint-ru'

import DwMoveList from '@/components/DwMoveList'
import DwMoveLink from '@/components/DwMoveLink'
import DwNote from '@/components/DwNote'
import DwQuote from '@/components/DwQuote'

import sortByName from '@/utils/sortByName'

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
    noteId,
    optionalQuestionList,
    quoteEnd,
    specialMoves,
    startMoveIdList,
    striveList,
  },
) => (
  <section className='DwPcClass'>
    {description && description.length ? (
      <DwQuote>{description}</DwQuote>
    ) : null}

    <section className='DwPcClass__name'>
      <h2>Имена</h2>
      <p>Выбери имя персонажа или придумай своё.</p>
      <p>Примеры имён: <span className='DwPcClass__nameExamples'>{nameList.join(', ')}</span>.</p>

    </section>

    <section className='DwPcClass__appearance'>
      <h2>Внешность</h2>
      <p>Выбери по одной черте внешности:</p>
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
      <p>Распредели эти значения по характеристикам <strong>+2, +1, +1, +0, +0, −1</strong></p>
      <p>Твои максимальные хиты: <strong>{hpBonus} + ТЕЛ</strong></p>
      <p>Твой базовый урон: <strong>к{damageDice}</strong>.</p>
    </section>

    <section className='DwPcClass__personality'>
      <h2>Личность персонажа</h2>

      <section
        className='DwPcClass__strives'
        id='strives'
      >
        <h3>Стремление</h3>
        <p>Выбери до трёх Стремлений своего персонажа. Выбирай из вариантов ниже, или придумай собственное.</p>
        <p>Стремления олицетворяют то, как персонаж взаимодействует с миром. Следование стремлениям или иное их использование в игре награждается опытом в <DwMoveLink id='common.session_end'>Конце сессии</DwMoveLink>.</p>
        <ul>
          {striveList.sort(sortByName).map(
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
          <p>Эти вопросы помогут тебе лучше понимать своего персонажа:</p>
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
        <p>Теперь выбери предысторию и получи соответствующий ход:</p>
        <DwMoveList idList={backgroundIdList}/>
      </section>
    </section>

    <section
      className='DwPcClass__moves'
      id='start_moves'
    >
      <h2>Стартовые ходы</h2>

      <section className='DwPcClass__startMoves'>
        <h3>Ты начинаешь игру со {startMoveIdList.length > 1 ? 'следующими стартовыми ходами' : 'следующим стартовым ходом'}:</h3>
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
          <p>Сразу выбери дополнительно {advancedMoveToPickOnStart.limit} {declint(advancedMoveToPickOnStart.limit, ['сложный ход', 'сложных хода', 'сложных ходов'])} из списка ниже <em>(<DwMoveLink id='common.level_up'>начиная со 2 уровня</DwMoveLink> ты сможешь выбирать эти ходы как <a href='#advanced_moves'>обычные сложные ходы</a>)</em>.</p>
          <DwMoveList idList={advancedMoveToPickOnStart.list}/>
        </section>
      ) : null}

      <section className='DwPcClass__equipment'>
        <h2>Снаряжение</h2>
        <section
          className='DwPcClass__capacity'
          id='capacity'
        >
          <p>Твоя нагрузка равна <strong>9. </strong>Каждый предмет, исключая <em>Мелкие</em>, добавляет свой вес к общей нагрузке.</p>
          <ul>
            <li><strong>1–3</strong> веса — это лёгкая нагрузка (ты <em>быстр</em> и <em>тих</em>);</li>
            <li><strong>4–6</strong> нормальная нагрузка;</li>
            <li><strong>7–9</strong> тяжёлая (ты <em>медленен</em>, <em>шумен</em>, тебе <em>жарко</em> и ты <em>быстро устаёшь</em>).</li>
          </ul>
        </section>
        <section
          className='DwPcClass__startItems'
          dangerouslySetInnerHTML={{__html: equipmentHtml}}
        />
      </section>

      <section
        className='DwPcClass__advancedMoves'
        id='advanced_moves'
      >
        <h2>Сложные ходы</h2>
        <p>{advancedMoveToPickOnStart ? '' : 'Сразу выбери один сложный ход. '} <DwMoveLink id='common.level_up'>Начиная со 2 уровня</DwMoveLink>, ты каждый уровень можешь выбирать {advancedMoveToPickOnStart ? '' : ' ещё'} один сложный ход из списка ниже, либо увеличить один из параметров на +1 (максимум +2).</p>
        <DwMoveList idList={advancedMoveIdList}/>
      </section>

      <section className='DwPcClass__capstoneMoves'>
        <h2>Высшие ходы</h2>
        <p><DwMoveLink id='common.level_up'>Получая уровни</DwMoveLink> 6–10, ты можешь выбирать и из этих ходов тоже, либо увеличивать один из параметров на +1 (максимум +3, только один раз на персонажа).</p>
        <DwMoveList idList={capstoneMoveIdList}/>
      </section>

      {(
        specialMoves
        && specialMoves.list
        && specialMoves.list.length
      ) ? (
        <section
          className='DwPcClass__specialMoves'
          id='special_moves'
        >
          <h2>{specialMoves.title}</h2>
          {specialMoves.text ? (
            <section
              className='DwPcClass__specialItems'
              dangerouslySetInnerHTML={{__html: specialMoves.text}}
            />
          ) : null}
          <DwMoveList idList={specialMoves.list}/>
        </section>
      ) : null}

      {quoteEnd ? (
        <DwQuote
          className='DwPcClass__quote'
          author={quoteEnd.author}
        >
          {quoteEnd.text}
        </DwQuote>
      ) : null}

      <DwNote noteId={noteId} />
    </section>
  </section>
)

export default DwPcClassComponent
