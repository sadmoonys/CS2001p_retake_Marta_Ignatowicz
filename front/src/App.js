import React from 'react';
import LandingIndex from './Components/LandingPage/LandingIndex'
import SignIn from './Components/SignInPage/SignInPage'
import Signup from './Components/Signuppage/Signuppage'
import CreateNote from './Components/CreateNote/CreateNote'
import UserProfile from './Components/Userprofile/Userprofile'
import UpdateProfile from './Components/UpdateProfile/UpdateProfile'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return ( 
        <Router>
            <Switch>
                <Route path="/home" component={LandingIndex}/>
                <Route path="/SignIn" component={SignIn}/>
                <Route path="/Signup" component={Signup}/>
                <Route path="/CreateNote" component={CreateNote}/>
                <Route path="/UserProfile" component={UserProfile}/>
                <Route path="/UpdateProfile" component={UpdateProfile}/>
            </Switch>
        </Router>
    );
}

export default App;