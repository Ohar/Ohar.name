import optionsReducer from '@/store/options/reducer'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  optionsState: optionsReducer,
})

const store = createStore(
  reducers,
  applyMiddleware(thunk),
)

export default store
