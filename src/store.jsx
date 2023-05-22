
import {createStore} from 'redux'
import matchReducer from './redux/reducers/reducers'

const store = createStore(
  matchReducer
)

export default store
