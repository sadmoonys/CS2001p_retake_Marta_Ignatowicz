import React, { Component } from 'react';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import red from "../../Images/red.png"
import green from"../../Images/green.png"
import yellow from"../../Images/yellow.png"
import light_blue from '../../Images/light_blue.png'
import "./UserprofileStyle.css"

class Userprofile extends Component {
    render() { 
        return (  
        
            <html>
            <Header/>
            <main >
            <h1> My showcase </h1>
            <br></br>
          <p class='side'> 
          <p>  <b>  My profile  </b> </p>
          <p> Update Profile </p>
          
          </p>
            
                    
                    
                   
                        <p class='profiledetails'>  
                        
    
                            <p>Name : </p>
                            <br></br>
                            <p>  Current school/university :</p>
                            <br></br>
                            <p>Previous Schools:</p>
                            <br></br>
                            <p> Current Course:</p>
                           
                    </p>
                 
                  
                   
               <div>
                    <img class="yellow" src={yellow} alt=""/>  
                    <img class="light_blue" src={light_blue} alt=""/>  
                    <img class="red" src={red} alt=""/>  
                    <img class="green" src={green} alt=""/>  
                </div>
            </main>
            <Footer/> 
        </html> 
        );
    }
}

export default Userprofile;