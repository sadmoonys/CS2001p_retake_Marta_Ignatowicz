import React from 'react';
import LandingIndex from './LandingPage/LandingIndex'
import {BrowserRouter as Router,Switch} from 'react-router-dom';
export class RoutingClass extends React.Component{
    render(){
        <Router>
            <Switch>
                <Route exact path="/signin" component={signin} />
            </Switch>
        </Router>
    }
}



function App() {
  return (
    <LandingIndex/> 

     
  );
}

export default App;

