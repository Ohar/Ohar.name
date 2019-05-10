import React from 'react'
import PropTypes from "prop-types";

import DndMonet, {copperType, goldType, silverType} from '@/components/DndMonet'

const DndPriceComponent = ({monetList}) => (
    <section className='DndPrice'>
        {
            monetList.map(
                ({type, monet}, i) => monet
                    ? (
                        <DndMonet
                            key={i}
                            count={monet}
                            type={type}
                        />
                    )
                    : null
            )
        }
    </section>
)

DndPriceComponent.propTypes = {
    monetList: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        monet: PropTypes.number,
    })).isRequired,
}

export default DndPriceComponent
