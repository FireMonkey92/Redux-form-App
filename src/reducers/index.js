import { combineReducers } from 'redux';
import messageReducer from './message.reducer';
import { reducer as formReducer } from 'redux-form';



const rootReducer = combineReducers({
    messageReducer,
    form: formReducer 
});

export default rootReducer;
