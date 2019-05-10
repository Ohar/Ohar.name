import React, {PureComponent} from 'react'
import PropTypes from "prop-types";

import convertPriceIntoMonetList from './utils/convertPriceIntoMonetList'

import DndPriceComponent from './DndPriceComponent'

class DndPriceContainer extends PureComponent {
    render() {
        const {price} = this.props
        const monetList = convertPriceIntoMonetList(price)

        return (
            <DndPriceComponent monetList={monetList}/>
        )
    }
}

DndPriceContainer.defaultProps = {
    price: 0,
}

DndPriceContainer.propTypes = {
    price: PropTypes.number,
}

export default DndPriceContainer
