import { combineReducers } from 'redux'
import {booksReducer as library, userReducer} from './book'
import user from './userReducer';

const rootReducer = combineReducers({
    user
});

export default rootReducer;
