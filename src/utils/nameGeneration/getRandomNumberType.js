import _ from "lodash"

import numberTypeList from "@/constants/nameGeneration/numberTypeList"

export default () => _.sample(numberTypeList)
