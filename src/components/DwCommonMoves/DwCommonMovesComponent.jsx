import React from 'react'

import { commonMoveIdList } from '@/constants/dwMoveList'
import DwMoveList from '@/components/DwMoveList'

import './DwCommonMovesStyles.less'

const DwCommonMovesComponent = () => (
  <DwMoveList
    className='DwCommonMoves'
    idList={commonMoveIdList}
  />
)

export default DwCommonMovesComponent
