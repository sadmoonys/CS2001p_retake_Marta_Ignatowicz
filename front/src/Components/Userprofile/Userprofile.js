import React, { Component } from 'react';
import HeaderAfterLogin from "../Header/HeaderAfterLogin"
import Footer from "../Footer/Footer"
import red from "../../Images/red.png"
import green from "../../Images/green.png"
import yellow from "../../Images/yellow.png"
import light_blue from '../../Images/light_blue.png'
import "./UserprofileStyle.css"
import { Link } from 'react-router-dom';
import axios from 'axios'
import Auth from '../../Auth';

class Userprofile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('/api/notes', {
            headers: {'Authorization': `Bearer ${Auth.token}`
            }})
        .then(response =>{
            console.log(response.data)
            this.setState({posts:response.data})

        })
        .catch(error =>{
            console.log(error)
        })
    }


    render(){ 
    const {posts} = this.state
        return (
            

            <html>
                <HeaderAfterLogin />
                <main >
                    <h1 className="displayInfo"> My showcase </h1>
                    <p>
                        {posts.title}</p>
                    <br/>
                    <div className='side'>
                        <div>
                            <b className="displayInfo">  My profile  </b>
                        </div>
                        <Link to="/UpdateProfile" style={{ textDecoration: 'none' }} Class="updateProfile"> <p> Update Profile </p></Link>
                    </div>
                    <div className='profdet'>
                        <p className="displayInfo">Name : </p>
                        <br/>
                        <p className="displayInfo">  Current school/university :</p>
                        <br/>
                        <p className="displayInfo">Previous Schools:</p>
                        <br/>
                        <p className="displayInfo"> Current Course:</p>
                    </div>
                    <div>
                        <img className="yellow" src={yellow} alt="" />
                        <img className="light_blue" src={light_blue} alt="" />
                        <img className="red" src={red} alt="" />
                        <img className="green" src={green} alt="" />
                    </div>
                </main>
            </html>
        );
    }
}

export default Userprofile;