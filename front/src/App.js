import React from 'react';
import LandingIndex from './Components/LandingPage/LandingIndex'
import SignIn from './Components/SignInPage/SignInPage'
import Signup from './Components/Signuppage/Signuppage'
import CreateNote from './Components/CreateNote/CreateNote'
import UserProfile from './Components/Userprofile/Userprofile'
import UpdateProfile from './Components/UpdateProfile/UpdateProfile'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute'

function App() {
    return ( 
        <Router>
            <Switch>
                <Route exact path="/SignIn" component={SignIn}/>
                <Route exact path="/Signup" component={Signup}/>
                <ProtectedRoute exact path="/CreateNote" component={CreateNote}/>
                <ProtectedRoute exact path="/UserProfile" component={UserProfile}/>
                <ProtectedRoute exact path="/UpdateProfile" component={UpdateProfile}/>
                <Route exact exact path="/" component={LandingIndex}/>
                <Route path="*" component={() => "404 NOT FOUND"}/>
            </Switch>
        </Router>
    );
}

export default App;