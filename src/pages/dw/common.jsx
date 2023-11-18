import React from 'react'
import { Link } from 'gatsby'

import PageTitle from '@/components/PageTitle'
import Seo from '@/components/Seo'
import DwCommonMoves from '@/components/DwCommonMoves'
import DwLayout from '@/components/DwLayout'

const DwPage = () => (
  <DwLayout>
    <Seo
      title='Dungeon World'
      description='Основные ходы'
      keywords={['Dungeon World', 'Unlimited Dungeons']}
    />
    <PageTitle>
      <Link to='/dw'>DW</Link>:
      Основные ходы
    </PageTitle>

    <p>Список основных ходов Dungeon World на основе хака «Безграничные подземелья» (Unlimited Dungeons) + собственные
      доработки.</p>

    <DwCommonMoves/>
  </DwLayout>
)

export default DwPage
