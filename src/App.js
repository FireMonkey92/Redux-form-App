import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from './Form';
import home from './home';

class App extends Component {
    render() {
        return (

            <Router>
                <div>
                    <Switch>
                        <Route path='/form' component={Form}></Route>
                        <Route path='/' component={home}></Route>
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;