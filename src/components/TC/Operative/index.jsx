import React from 'react'

import Ability from '@/components/TC/Ability'
import AttackBonus from '@/components/TC/AttackBonus'
import Cost from '@/components/TC/Cost'
import Limit from '@/components/TC/Limit'

import { moveTypeCollection } from '@/constants/TC/move'
import operativeCollection from '@/constants/TC/operativeCollection'

import './styles.less'

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
    <section className='Operative'>
      <header className='Operative_header'>
        <Limit limit={limit}/>
        {name}
        <Cost cost={cost}/>
      </header>

      {flavour ? (<blockquote className='Operative_flavour'>{flavour}</blockquote>) : null}

      <table className='Operative_info'>
        <thead>
        <tr>
          <th className='Operative_infoCell Operative_infoCell-head'>Движение</th>
          <th className='Operative_infoCell Operative_infoCell-head'>Стрельба</th>
          <th className='Operative_infoCell Operative_infoCell-head'>Рукопашка</th>
          <th className='Operative_infoCell Operative_infoCell-head'>Броня</th>
          <th className='Operative_infoCell Operative_infoCell-head'>Подставка</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className='Operative_infoCell'>{speed}" {moveTypeCollection[movementType]}</td>
          <td className='Operative_infoCell'><AttackBonus bonus={attackRanged}/></td>
          <td className='Operative_infoCell'><AttackBonus bonus={attackMelee}/></td>
          <td className='Operative_infoCell'>{armour}</td>
          <td className='Operative_infoCell'>{baseSize} мм</td>
        </tr>
        </tbody>
      </table>

      {equipmentText ? (
        <section className='Operative_equipment'>
          <header>Снаряжение</header>
          {equipmentText}
        </section>
      ) : null}

      <section className='Operative_abilities'>
        <header>Способности</header>
        {abilityList ? (
          <ul>
            {abilityList.map(
              ({ name, text }) => <li><Ability name={name} key={name} text={text}/></li>
            )}
          </ul>
        ) : (
          <p>Нет.</p>
        )}
      </section>

      <section className='Operative_keys'>
        <header>Ключи</header>
        <p>{keyList.length ? keyList.join(', ') : '—'}</p>
      </section>
    </section>
  )
}

export default Operative
