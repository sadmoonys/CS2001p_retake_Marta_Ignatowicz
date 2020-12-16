import React, { Component } from 'react'
import './style.css'
import Screens from "/Users/mirna/Documents/GitHub/cs2001-2020_21-group15/front/src/Images/screens.png"
import Check from"/Users/mirna/Documents/GitHub/cs2001-2020_21-group15/front/src/Images/check.png"

class Body extends Component {
    render() { 
        return (  
            <body className="body">
               <div id="box">    
                   <p id='signUp'><a href="">Sign Up</a></p>
                   <p > <b>JOIN NOTWARE TODAY!</b></p>
                </div> 
                
                <div id="aboutBox" >
                    <p id="what">WHAT IS NOTEWARE?</p>
                    <div id="aboutBox1"> <p> <b>NOTEWARE is a notetaking app that aims to address the UN's goal to provide Quality Education for everyone. <br></br> <br></br> <br></br>
                    We aim to help students connect and learn through our app. You can use our collabroative platform to create, edit and share notes as well as categorise them using hashtags to help improve your search. <br></br> </b>  <b> Thanks to the app being interactive, you can use feedback left by other students to improve your notes and get the most of your time! </b></p> <br></br></div>
                    
                </div>
                
                <div>
                    <img id="screens"  src={Screens} alt=""/>
                   <div id="greenCheckers"> 
                  
                       <img id="greenCheck1" src={Check} alt=""/>   
                       <p id="check1"> Notesfeed- can share your notes with Friends</p>
                       
                        <img id="greenCheck2" src={Check} alt=""/> <p> Comment section- You can recieve feedbacks from your collegues and help them by commenting your thoughts! </p>
                        <img id="greenCheck3" src={Check} alt=""/> <p> Votes and Ranks- You can vote what the best notes and resumes. The more votes your notes gets the higher it goes on the ranking!</p>
                   </div>
                  
                </div>
            
            </body>
        );
    }
}
 
export default Body;
