import React from 'react'

import Ability from '@/components/TC/Ability'
import AttackBonus from '@/components/TC/AttackBonus'
import Cost from '@/components/TC/Cost'
import Limit from '@/components/TC/Limit'

import { moveTypeCollection } from '@/constants/TC/move'
import operativeCollection from '@/constants/TC/operativeCollection'

const Operative = ({ id }) => {
  const {
    abilityList,
    armour,
    attackRanged,
    attackMelee,
    baseSize,
    cost,
    equipmentText,
    flavour,
    keyList,
    limit,
    movementType,
    name,
    speed,
  } = operativeCollection[id]

  return (
    <section>
      <header>
        <Limit limit={limit}/>
        {name}
        <Cost cost={cost}/>
      </header>

      {flavour ? (<blockquote>{flavour}</blockquote>) : null}

      <table>
        <thead>
        <tr>
          <th>Движение</th>
          <th>Стрельба</th>
          <th>Рукопашка</th>
          <th>Броня</th>
          <th>Подставка</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{speed}" {moveTypeCollection[movementType]}</td>
          <td><AttackBonus bonus={attackRanged}/></td>
          <td><AttackBonus bonus={attackMelee}/></td>
          <td>{armour}</td>
          <td>{baseSize} мм</td>
        </tr>
        </tbody>
      </table>

      {equipmentText ? (
        <section>
          <header>Снаряжение</header>
          {equipmentText}
        </section>
      ) : null}

      {abilityList ? (
        <section>
          <header>Способности</header>
          <ul>
            {abilityList.map(
              ({ name, text }) => <li><Ability name={name} key={name} text={text}/></li>
            )}
          </ul>
        </section>
      ) : null}

      {keyList.length ? (
        <section>
          <header>Ключи</header>
          <p>{keyList.join(', ')}</p>
        </section>
      ) : null}
    </section>
  )
}

export default Operative
