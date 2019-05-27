import techColumnList from "../constants/techColumnList"

const filterTechColumns = columnName => !techColumnList.includes(columnName)

export default filterTechColumns
