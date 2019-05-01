import _ from 'lodash'

import NAMES_SECOND from "../dict/names_second"

export default gender => _.sample(NAMES_SECOND[gender])
