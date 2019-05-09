import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"

import SEARCH_PROP_NAME from "@/components/DndItemCatalog/constants/SEARCH_PROP_NAME";

import DndItemTableComponent from "./DndItemTableComponent"

const DndItemTableContainer = ({itemList, ...rest}) => {
    const columnList = itemList.reduce(
        (list, item) => _.uniq([
            ...list,
            ...Object
                .keys(item)
                .filter(
                    propName => propName !== SEARCH_PROP_NAME && propName !== 'id'
                ),
        ]),
        [],
    )

    return (
        <DndItemTableComponent
            columnList={columnList}
            itemList={itemList}
            {...rest}
        />
    )
}

DndItemTableContainer.propTypes = {
  itemList: PropTypes.array.isRequired,
}

export default DndItemTableContainer
