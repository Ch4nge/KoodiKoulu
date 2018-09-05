import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import postsReducer from './reducers/postsReducer'

const reducer = combineReducers({
  posts: postsReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store
