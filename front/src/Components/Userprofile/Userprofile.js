import React, { Component } from 'react';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import red from "../../Images/red.png"
import green from "../../Images/green.png"
import yellow from "../../Images/yellow.png"
import light_blue from '../../Images/light_blue.png'
import "./UserprofileStyle.css"
import { Link } from 'react-router-dom';
import axios from 'axios'

class Userprofile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }


    render() {
        return (

            <html>
                <Header />
                <main >
                    <h1> My showcase </h1>
                    <br/>
                    <div className='side'>
                        <div>
                            <b>  My profile  </b>
                        </div>
                        <Link to="/UpdateProfile" Class="UP"> <p> Update Profile </p></Link>
                    </div>
                    <div className='profiledetails'>
                        <p>Name : </p>
                        <br/>
                        <p>  Current school/university :</p>
                        <br/>
                        <p>Previous Schools:</p>
                        <br/>
                        <p> Current Course:</p>
                    </div>
                    <div>
                        <img className="yellow" src={yellow} alt="" />
                        <img className="light_blue" src={light_blue} alt="" />
                        <img className="red" src={red} alt="" />
                        <img className="green" src={green} alt="" />
                    </div>
                </main>
                <Footer />
            </html>
        );
    }
}

export default Userprofile;