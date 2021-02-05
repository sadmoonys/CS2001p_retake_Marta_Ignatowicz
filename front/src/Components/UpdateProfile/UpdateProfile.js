import React, { Component } from 'react';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./UpdateProfile.css"
import axios from 'axios';

class UpdateProfile extends Component{
    constructor(props){
        super(props);


        this.state = {
            username:'',
            bio:'',
            current_course: '',
        }
    }
    
    handleChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('/api/userupdate/updateprofile', this.state)
        .then(response =>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
    }
    
    render() { 
        const {username, bio, current_course} = this.state
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
                name="current_course" 
                value={current_course}
                onChange={this.handleChange}
                placeholder="Previous School"/>
                
                <br/>
                
            
                <button type="submit"> Submit </button> 
            </form>


                                     
            </main>   
            <Footer/>                     
        </html> 
        );
    }
}

export default UpdateProfile;