import {combineReducers} from 'redux';
import alertReducer from './alertReducer';
import itemReducer from './itemReducer';
import postReducer from './postReducer';

export default combineReducers({
    users:itemReducer,
    post:postReducer,
    alert:alertReducer
});