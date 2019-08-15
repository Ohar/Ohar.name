import React, {Component} from 'react'

import config from 'root/config'

import SEARCH_PROP_NAME from '@/constants/SEARCH_PROP_NAME'
import dndCreatureList from '@/constants/dnd/dndCreatureList'

import prepareForSearch from "@/utils/prepareForSearch"

import DndCreatureCatalogComponent from './DndCreatureCatalogComponent'

const MAX_LEN = 20

class DndCreatureCatalogContainer extends Component {
    state = {
        goodsFilteredList: [],
        isTooMuch: false,
    }

    // TODO: remove after ready
    componentDidMount() {
        if (config) {
            const {creatureCatalogDefaultSearchString = ''} = config
            this.onSearch({target: {value: creatureCatalogDefaultSearchString}})
        }
    }

    onSearch = ({target: {value}}) => {
        const filteredCreatureList = value
            ? dndCreatureList
                .filter(
                    item => item[SEARCH_PROP_NAME].includes(prepareForSearch(value))
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
