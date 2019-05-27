import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"

import filterTechColumns from "./utils/filterTechColumns";

import DndItemTableComponent from "./DndItemTableComponent"

const DndItemTableContainer = ({itemList, ...rest}) => {
    const columnList = itemList.reduce(
        (list, item) => _.uniq([
            ...list,
            ...Object
                .keys(item)
                .filter(filterTechColumns),
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
