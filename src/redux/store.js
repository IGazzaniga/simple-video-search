import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(reducer, 
    composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default store