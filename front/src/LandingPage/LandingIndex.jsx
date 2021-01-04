import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import Screens from "../Images/screens.png"
import Check from"../Images/check.png"
import paper from"../Images/paper.png"
import notes from"../Images/sharenotes.png"
import {Link} from 'react-router-dom'; 
import "./LandingStyle.css"


class LandingIndex extends Component {
    render() { 
        return (  
           <html>
            <Header/>
            <main >
               <div class="firstBox">
                    <div class="box"> 
                        <img class="collaboration" src={notes} alt=""/>
                        <p class='signUp'>  
                        
                            <Link to="/Signup" class="btn">
                        <button>SIGN UP HERE </button> 
                    </Link>
                            <p>JOIN NOTWARE TODAY!</p>
                        </p>
                    </div> 
                        
                    <div class="aboutBox" >
                        <p class="what">WHAT IS NOTEWARE?</p>
                        <div class="aboutBox1"> 
                            <p> 
                                NOTEWARE is a notetaking app that aims to address the UN's goal to provide Quality Education for everyone. 
                                <br></br> 
                                <br></br> 
                                <br></br>
                                We aim to help students connect and learn through our app. You can use our collabroative platform to create, edit and share notes as well as categorise them using hashtags to help improve your search. 
                                <br></br> 
                                Thanks to the app being interactive, you can use feedback left by other students to improve your notes and get the most of your time!
                            </p> 
                            <br></br>
                        </div>
                    </div>
                </div>
               
               
                <div class="secondBox">
                    <div class="benfits"> <b></b>   
                       <p> BENIFITS OF USING NOTEWARE </p> 
                       <br></br> 
                       <br></br>      
                       <p> Notesfeed- You can share your notes with Friends  </p>   
                       <br></br>    
                       <p> Comment section- You can recieve feedbacks from your collegues and help them by commenting your thoughts!</p> 
                        <br></br>      
                        <p> Votes and Ranks- You can vote what the best notes and resumes. </p>     
                    </div>

                    <img class="screens" src={Screens} alt=""/>     
                </div>
            
            </main>
            <Footer/> 
        </html> 
        );
    }
}
 
export default LandingIndex;