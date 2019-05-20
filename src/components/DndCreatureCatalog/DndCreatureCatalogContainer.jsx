import React, {Component} from "react"

import SEARCH_PROP_NAME from "@/constants/SEARCH_PROP_NAME";

import DndCreatureCatalogComponent from "./DndCreatureCatalogComponent"

import dndCreatureList from "@/constants/dnd/dndCreatureList"

const MAX_LEN = 20

class DndCreatureCatalogContainer extends Component {
    state = {
        goodsFilteredList: [],
        isTooMuch: false,
    }

    onSearch = ({target: {value}}) => {
        const filteredCreatureList = value
            ? dndCreatureList
                .filter(
                    item => item[SEARCH_PROP_NAME].toLowerCase().includes(value.toLowerCase())
                )
            : []

        const isTooMuch = filteredCreatureList.length > MAX_LEN

        this.setState({
            filteredCreatureList: filteredCreatureList.slice(0, MAX_LEN),
            isTooMuch,
        })
    }

    render() {
        return (
            <DndCreatureCatalogComponent
                onSearch={this.onSearch}
                {...this.state}
            />
        )
    }
}

export default DndCreatureCatalogContainer
