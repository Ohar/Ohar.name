import React from 'react'

import {dndDamageTypeCollection} from "@/constants/dnd/dndDamageTypeList"

import './DndDamageTypeStyles.css'

const DndDamageTypeComponent = ({ damageType }) => (
    <section className='DndDamageType'>
        {dndDamageTypeCollection[damageType].name}
    </section>
)

export default DndDamageTypeComponent
