import React from 'react'

import DndDamageTypeComponent from './DndDamageTypeComponent'

const DndDamageTypeContainer = ({ damageType }) => damageType
  ? <DndDamageTypeComponent damageType={damageType}/>
  : null

export default DndDamageTypeContainer
