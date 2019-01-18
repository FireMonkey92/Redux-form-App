import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


import messages from './MessageReducer';
const RootReducer = combineReducers({

    form: formReducer,
    messages

})
export default RootReducer;