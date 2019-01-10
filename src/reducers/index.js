import { combineReducers } from 'redux';
import messageReducer from './message.reducer';


const rootReducer = combineReducers({
    messageReducer
});

export default rootReducer;
