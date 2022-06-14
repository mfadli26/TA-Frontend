import { combineReducers } from 'redux';
import user from './users';

const todoApp = combineReducers({
    user
});

export default todoApp;
