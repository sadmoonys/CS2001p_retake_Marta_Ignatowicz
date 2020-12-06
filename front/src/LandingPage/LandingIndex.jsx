import React, { Component } from 'react'
import Header from './Header/Header'
import Body from "./Body/Body"
import Footer from "./Footer/Footer"

class LandingIndex extends Component {
    render() { 
        return (  
           <section>
                <Header/>
                <Body/>
                <Footer/> 
           </section>
        );
    }
}
 
export default LandingIndex;