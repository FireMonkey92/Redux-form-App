import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import './App.css';
import App from './App';
import reducers from './reducers'


// Components
import AddMessage  from './addnewMessage';


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)} >
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/addNewMsg' component={AddMessage}/>
                    <Route exact path='/' component={App} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

