import { combineReducers } from 'redux'
import {videoReducer} from './videos'
import {counterReducer} from './counter'

export default combineReducers({
    videoReducer,
    counterReducer
})