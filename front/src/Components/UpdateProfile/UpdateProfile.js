import React, { Component } from 'react';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./UpdateProfile.css"

class UpdateProfile extends Component{
    render() { return(
        <html>
        <Header/>
        <p class='H'>
        <h1>Edit your Details</h1>
        </p>
            <main>
            
            <p class='Box'>

            <label for="Name">Name: *</label>
                            <input class="Update Name:" type="Name" placeholder="Name"/>
            <br></br>
            <label for="Current University">Current Uni: (Optional)</label>
                            <input class="Enter Name here" type="Current University" placeholder="Current University"/>
            <br></br>
            <label for="Previous Schools">Previous School: (Optional)</label>
                            <input class="Previous School Name" type="Previous School " placeholder="Previous School"/>
            <br></br>
            <label for="Current Course">Current Course: (Optional)</label>
                            <input class="Current Course Name" type="Current Course" placeholder="Current Course"/>  
                            </p>


                                     
            </main>   
           
            
            
           

                                <Footer/>
                                
        </html> 
        );
    }
}

export default UpdateProfile;