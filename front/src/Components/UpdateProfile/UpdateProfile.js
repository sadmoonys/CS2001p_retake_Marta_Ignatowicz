import React, { Component } from 'react';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./UpdateProfile.css"

class UpdateProfile extends Component{
    render() { return(
        <html>
        <Header/>
        <p className='H'>
        <h1>Edit your Details</h1>
        </p>
            <main>
            
            <p className='Box'>

            <label for="Name">Name: *</label>
                            <input className="Update Name:" type="Name" placeholder="Name"/>
            <br></br>
            <label for="Current University">Current Uni: (Optional)</label>
                            <input className="Enter Name here" type="Current University" placeholder="Current University"/>
            <br></br>
            <label for="Previous Schools">Previous School: (Optional)</label>
                            <input className="Previous School Name" type="Previous School " placeholder="Previous School"/>
            <br></br>
            <label for="Current Course">Current Course: (Optional)</label>
                            <input className="Current Course Name" type="Current Course" placeholder="Current Course"/>  
                            </p>

                            <button class="Updateprofile" type="submit">Update Profile</button>
                                     
            </main>   
           
            <button type="button" class="Submit">Submit</button>
								
            
           

                                <Footer/>
                                
        </html> 
        );
    }
}

export default UpdateProfile;