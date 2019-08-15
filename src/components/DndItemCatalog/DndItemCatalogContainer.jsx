import React, {Component} from "react"

import dndItemList from "@/constants/dnd/dndItemList"
import SEARCH_PROP_NAME from "@/constants/SEARCH_PROP_NAME"

import prepareForSearch from "@/utils/prepareForSearch"

import DndItemCatalogComponent from "./DndItemCatalogComponent"

const MAX_LEN = 20

class DndItemCatalogContainer extends Component {
    state = {
        goodsFilteredList: [],
    }

    onSearch = ({target: {value}}) => {
        const goodsFilteredList = value
            ? dndItemList
                .filter(
                    good => good[SEARCH_PROP_NAME].includes(prepareForSearch(value))
                )
            : []

        this.setState({
            goodsFilteredList: goodsFilteredList.slice(0, MAX_LEN),
        })
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
