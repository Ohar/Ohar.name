import React from 'react'

import DwTag from '@/components/DwTag'

export default () => (
  <>
    <p><strong>Ты начинаешь игру с:</strong></p>
    <ul>
      <li><DwTag id='supplies'>Припасы</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Кинжалом (<em>Рука</em>, <DwTag id='subtle'>Мелкий</DwTag>).</li>
    </ul>
    <p><strong>Выбери одно:</strong></p>
    <ul>
      <li>Праща (<DwTag id='near'>Близко</DwTag>, <em>Перезарядка</em>, <em>Неудобная</em>, <DwTag id='subtle'>Мелкая</DwTag>).</li>
      <li>Короткий (не для тебя) меч (<DwTag id='close'>Взмах меча</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
    </ul>
    <p><strong>Выбери два:</strong></p>
    <ul>
      <li>Безделушка, которую ты недавно достал. Опиши — где достал, как достал и что это вообще? (<DwTag id='subtle'>Мелкая</DwTag>, ~10 серебряных монет).</li>
      <li><DwTag id='supplies'>Припасы</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Лёгкий доспех, как раз твоего размера (1 брони, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li><DwTag id='healing_potion'>Зелье лечения</DwTag> (<DwTag id='subtle'>Мелкое</DwTag>).</li>
    </ul>
  </>
)
