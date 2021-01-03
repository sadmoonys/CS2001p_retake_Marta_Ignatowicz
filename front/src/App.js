import React from 'react';
import LandingIndex from './LandingPage/LandingIndex'
import SignIn from './SignInPage/SignInPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return ( 
        <Router>
            <Switch>
                <Route path="/home" component={LandingIndex}/>
                <Route path="/SignIn" component={SignIn}/>
            </Switch>
        </Router>
    );
}

export default App;