import React, { Component } from 'react'
import './style.css'
import Screens from "/Users/leona/Desktop/GitHub/Front-End/front/src/Images/screens.png"
import Check from"/Users/leona/Desktop/GitHub/Front-End/front/src/Images/check.png"

class Body extends Component {
    render() { 
        return (  
            <body className="body">
               <div id="box">    
                   <p id='signUp'><a href="">Sign Up</a></p>
                   <p > Join NoteWare today</p>
                </div> 
                
                <div id="aboutBox" >
                    <p id="what">WHAT IS NOTEWARE</p>
                    <div id="aboutBox1"></div>
                </div>
                <div>
                    <img id="screens"  src={Screens} alt=""/>
                   <div id="greenCheckers">
                       <img id="greenCheck1" src={Check} alt=""/>
                        <img id="greenCheck2" src={Check} alt=""/>
                        <img id="greenCheck3" src={Check} alt=""/>
                   </div>
                    
                </div>
            </body>
        );
    }
}
 
export default Body;
