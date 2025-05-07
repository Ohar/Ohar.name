import React from 'react'

import PageTitle from '@/components/PageTitle'
import OperativeList from '@/components/TC/OperativeList'
import Seo from '@/components/Seo'
import DwLayout from '@/components/DwLayout'

import {
  OPERATIVE_ARTILLERY_WITCHES,
  OPERATIVE_HERETIC_CHORISTER,
  OPERATIVE_HERETIC_DEATH_COMMANDO,
  OPERATIVE_HERETIC_PRIEST,
  OPERATIVE_HERETIC_TROOPER,
} from '@/constants/TC/operative_ids'

const TcPage = () => (
  <DwLayout>
    <Seo
      title='Trench Crusade'
      description='Легион еретиков'
      keywords={['Trench Crusade', 'Heretic Legion']}
    />
    <PageTitle>Trench Crusade — Легион еретиков</PageTitle>
    <OperativeList idList={[
      OPERATIVE_HERETIC_PRIEST,
      OPERATIVE_HERETIC_DEATH_COMMANDO,
      OPERATIVE_HERETIC_CHORISTER,
      OPERATIVE_ARTILLERY_WITCHES,
      OPERATIVE_HERETIC_TROOPER,
    ]}/>
  </DwLayout>
)

export default TcPage
