import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import postReducer from './postReducer';

export default combineReducers({
    users:itemReducer,
    posts:postReducer,
});