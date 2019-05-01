import _ from "lodash"

import NAMES_FIRST from "../dict/names_first"

export default gender => _.sample(NAMES_FIRST[gender])
