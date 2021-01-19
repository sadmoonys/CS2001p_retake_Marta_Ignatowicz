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

            <label for="Name">Name</label>
                            <input class="Update Name:" type="Name" placeholder="Name"/>
            <br></br>
            <label for="Current School/University">Current School/University</label>
                            <input class="School/University Name" type="Current School/University" placeholder="Current School/University"/>
            <br></br>
            <label for="Previous Schools">Previous Schools:</label>
                            <input class="Previous School Name" type="Previous School " placeholder="Previous School"/>
            <br></br>
            <label for="Current Course">Current Course:</label>
                            <input class="Current Course Name" type="Current Course" placeholder="Current Course"/>
                            </p>
            </main>;
            
            
            <div>
                
            <button class="Submit">Submit</button>
                                </div>

                                
            
           





        
                                <Footer/>
        </html> 
        );
    }
}

export default UpdateProfile;