import React from 'react';
import LandingIndex from './Components/LandingPage/LandingIndex'
import SignIn from './Components/SignInPage/SignInPage'
import Signup from './Components/Signuppage/Signuppage'
import Dashboard from './Components/Dashboard/Dashboard'
import Userprofile from './Components/Userprofile/Userprofile'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';

function App() {
    return ( 
        <Router>
            <Switch>
                <Route path="/home" component={LandingIndex}/>
                <Route path="/SignIn" component={SignIn}/>
                <Route path="/Signup" component={Signup}/>
                <Route path="/Dashboard" component={Dashboard}/>
                <Route path="/UpdateProfile" component={UpdateProfile}/>
                <Route path="/Userprofile" component={Userprofile}/>
            </Switch>
        </Router>
    );
}

export default App;