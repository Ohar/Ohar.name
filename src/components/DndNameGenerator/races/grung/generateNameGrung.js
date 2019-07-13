import _ from "lodash";

import generateNameListGrung from "./utils/generateNameListGrung"

export default ({gender}) => _.sample(generateNameListGrung(gender))
