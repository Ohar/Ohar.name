import {LOCALE_SET} from '@/store/options/action-types'

export default function signalLocaleSet (locale) {
  return dispatch => {

    dispatch({
      locale,
      type: LOCALE_SET,
    })
  }
}
