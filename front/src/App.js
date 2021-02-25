import React from 'react';
import LandingIndex from './Components/LandingPage/LandingIndex'
import SignIn from './Components/SignInPage/SignInPage'
import Signup from './Components/Signuppage/Signuppage'
import CreateNote from './Components/CreateNote/CreateNote'
import UserProfile from './Components/Userprofile/Userprofile'
import UpdateProfile from './Components/UpdateProfile/UpdateProfile'
import Categories from './Components/Categories/Categories'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute'
import Search from './Components/Categories/Search'
import PageError from './Components/PageError/PageError'
function App() {
    return ( 
        <Router>
            <Switch>
                <Route exact path="/SignIn" component={SignIn}/>
                <Route exact path="/Signup" component={Signup}/>
                <Route exact path="/CreateNote" component={CreateNote}/>
                <Route exact path="/Categories" component={Categories}/>
                <Route exact path="/UserProfile" component={UserProfile}/>
                <Route exact path="/UpdateProfile" component={UpdateProfile}/>
                <Route exact exact path="/" component={LandingIndex}/>
                <Route exact path="/Search" component={Search}/>
                
             
                <Route path="*" component= {PageError}/>
                
            </Switch>
        </Router>
        
    );
}

export default App;