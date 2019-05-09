import React, {Component} from "react"

import goodList from "./constants/goodList"
import SEARCH_PROP_NAME from "./constants/SEARCH_PROP_NAME";

import DndItemCatalogComponent from "./DndItemCatalogComponent"

class DndItemCatalogContainer extends Component {
    state = {
        goodsFilteredList: [],
    }

    onSearch = ({target: {value}}) => {
        const goodsFilteredList = value
            ? goodList.filter(
                good => good[SEARCH_PROP_NAME].includes(value.toLowerCase())
            )
            : []

        this.setState({goodsFilteredList})
    }

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
