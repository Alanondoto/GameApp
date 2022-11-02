import {combineReducers,  legacy_createStore} from "redux";
import menuReducer from './menuReducer';
import {reducer as formReducer} from 'redux-form';

let reducers  = combineReducers({
    menuPage: menuReducer,
    form: formReducer
})

let store = legacy_createStore(reducers);

window.store = store;

export default store;