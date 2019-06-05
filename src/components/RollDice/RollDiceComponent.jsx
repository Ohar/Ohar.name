import React from "react"

import PageTitle from "@/components/PageTitle"

import "./RollDiceStyles.css"

const diceList = [4, 6, 8, 10, 12, 20, 100, 1000]

const RollDiceComponent = ({ result, onRoll }) => (
  <section className='RollDice'>
    <PageTitle>Броски кубиков</PageTitle>

    <p className='RollDice_result'>{result}</p>

    <ul className='RollDice_list'>
      {
        diceList.map(
          diceType => (
            <li
              key={diceType}
              className='RollDice_item'
            >
              <button
                className='RollDice_btn'
                onClick={onRoll(diceType)}
              >
                {diceType}
              </button>
            </li>
          ),
        )
      }
    </ul>
  </section>
)

export default RollDiceComponent
