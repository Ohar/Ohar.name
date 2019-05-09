import _ from "lodash"
import React, {Component} from "react"

import goodList from "./constants/goodList"
import SEARCH_PROP_NAME from "./constants/SEARCH_PROP_NAME";

import DndItemCatalogComponent from "./DndItemCatalogComponent"

const TIME = 200

class DndItemCatalogContainer extends Component {
    state = {
        goodsFilteredList: [],
    }

    onSearch = _.throttle(
        ({target: {value}}) => {
            const goodsFilteredList = goodList.filter(
                good => good[SEARCH_PROP_NAME].includes(value)
            )

            this.setState({goodsFilteredList})
        },
        TIME
    )

    render() {
        return (
            <DndItemCatalogComponent
                onSearch={this.onSearch}
                {...this.state}
            />
        )
    }
}

export default DndItemCatalogContainer
