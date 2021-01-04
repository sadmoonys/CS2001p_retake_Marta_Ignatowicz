import React, { Component } from 'react';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./SignupStyle.css"

class Signuppage extends Component {
    render() { 
        return (  
            <html>
                <Header/>
                <main>
                <div class="yellowBox">
                        <p class="signup">Sign Up </p>
                        <form class="logSection">


                        <label for="Name">Name</label>
                            <input class="Enter Name" type="Name" placeholder="Name"/>

                            <label for="Email">Email</label>
                            <input class="Enter Email" type="Email" placeholder="Email"/>

                            <label for="password">Password</label>
                            <input class="password" type="password" placeholder="Password"/>

                            <label for="re enter password"> re enter Password </label>
                            <input class="Please enter your password agian" type="password" placeholder="re enter password"/>


                            <label for="submit"></label>

                        </form>

            
                        <input class="CREATE AN ACCOUNT" type="submit"/>
                </div>
                </main>
                <Footer/>
            </html>
        );
    }
}
 
export default Signuppage;