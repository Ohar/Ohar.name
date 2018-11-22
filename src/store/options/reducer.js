import * as actionTypes from '@/store/options/action-types'
import DEFAULT_STATE from '@/store/options/default_state'

export default function optionsReducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.LOCALE_SET: {
      return {
        ...state,
        locale: action.locale,
      }
    }

    default:
      return state
  }
}
