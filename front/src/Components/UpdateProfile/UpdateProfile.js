import React, { Component } from 'react';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./UpdateProfile.css"
import axios from 'axios';
import Auth from '../../Auth';

class UpdateProfile extends Component{
    constructor(props){
        super(props);


        this.state = {
            bio:'',
            currentCourse: '', 
            username:'',
            
        }
    }
    
    handleChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)        
        const config = {
            headers: { Authorization: `Bearer ${Auth.token}` }
        };
        
        axios.post('http://localhost:8080/api/userupdate/updateprofile',this.state, config)
        .then(response =>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
    }
    
    render() { 
        const {username, bio, currentCourse} = this.state
        return(
        <html>
        <Header/>
        <div className='H'>
        <h1>Edit your Details</h1>
        </div>
            <main>
            
            <form className='Box' onSubmit={this.submitHandler}>
                <label for="Name">Name: *</label>
                <input
                className="EnterNamehere" 
                type="text"
                name="username" 
                value={username}
                onChange={this.handleChange}
                placeholder="User name"/>
                <br/>
                
                <label for="">Bio:</label>
                <input
                className="EnterBiohere" 
                type="text"
                name="bio" 
                value={bio}
                onChange={this.handleChange}
                placeholder="Current University"/>
                
                <br/>
                
                <label for="Previous Schools">Course: (Optional)</label>
                <input 
                className="CourseOptional" 
                type="text"
                name="currentCourse" 
                value={currentCourse}
                onChange={this.handleChange}
                placeholder="Previous School"/>
                
                <br/>
                
            
                <button type="submit"> Submit </button> 
            </form>

                            <button class="Updateprofile" type="submit">Update Profile</button>
                                     
            </main>   

           
            <button type="button" class="Submit">Submit</button>
								
            
           

               <Footer/>
                                

            <Footer/>                     

        </html> 
        );
    }
}

export default UpdateProfile;