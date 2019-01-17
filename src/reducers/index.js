import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
 

import messages from './MessageReducer';
const RootReducer = combineReducers({
    messages,
    form :  formReducer
    
})
export default RootReducer;