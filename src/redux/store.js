import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {videoReducer} from './reducers/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(videoReducer, 
    composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default store