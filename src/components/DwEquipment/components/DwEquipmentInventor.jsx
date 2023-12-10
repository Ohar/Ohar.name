import React from 'react'

import DwTag from '@/components/DwTag'

export default () => (
  <>
    <p>Ты начинаешь игру с:</p>
    <ul>
      <li><DwTag id='supplies'>Припасами</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Сумкой с инструментами (<DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Своими <em>Гаджетами</em> (оружие весит 1, не-оружие считается <em>Мелким</em>).</li>
    </ul>
    <p>Выбери два:</p>
    <ul>
      <li>Механический костюм (<em>Неуклюжий</em>, броня 2, <DwTag id='weight'>вес 2</DwTag>).</li>
      <li>Защитный комбинезон (<DwTag id='armor'>броня 1</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li><DwTag id='supplies'>Припасы</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Три склянки <em>Алхимического тумана</em> (<em>Мелкие</em>).</li>
      <li><DwTag id='healing_potion'>Зелье лечения</DwTag> (<DwTag id='subtle'>Мелкое</DwTag>).</li>
      <li>Зелье невидимости (<DwTag id='subtle'>Мелкое</DwTag>).</li>
    </ul>
  </>
)
