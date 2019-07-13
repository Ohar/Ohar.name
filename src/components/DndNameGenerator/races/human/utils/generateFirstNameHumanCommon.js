import _ from "lodash";

import generateNameListHumanCommon from "./generateNameListHumanCommon";

export default (NAMES_FEMALE, NAMES_MALE) => gender => _.sample(
    generateNameListHumanCommon(NAMES_FEMALE, NAMES_MALE)(gender)
)
