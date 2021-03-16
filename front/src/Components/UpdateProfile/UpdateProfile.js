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

            <label className='UpdateN' for="Name">Name: *</label>
                            <input type="Name" placeholder="Name"/>
            <br></br>
            <label className='EnterN' for="Current University">Current Uni: (Optional)</label>
                            <input type="Current University" placeholder="Current University"/>
            <br></br>
            <label className='PreviousSc' for="Previous Schools">Previous School: (Optional)</label>
                            <input type="Previous School " placeholder="Previous School"/>
            <br></br>
            <label className='CurrentC' for="Current Course">Current Course: (Optional)</label>
                            <input type="Current Course" placeholder="Current Course"/>  
                            </p>

             <button type="button" className="UP">Update Profile</button>

            </main>   
           
            
								
            
           

                                <Footer/>
                                
        </html> 
        );
    }
}

export default UpdateProfile;