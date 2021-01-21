import React, { Component } from 'react';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./SignupStyle.css"
import { GoogleLogin } from 'react-google-login';
import User from "../../Images/account_circle-black-18dp.svg"
import Email from "../../Images/email-24px.svg"
import Password from "../../Images/done-24px.svg"
import rePassword from "../../Images/done_all-24px.svg"

class Signuppage extends Component {
    render() {
        const responseGoogle = (response) => {
            console.log(response);
          }

        return (  
            <html>
                <Header/>
                <main>
                <div class="yellowBoxUP">
                        <p class="signup">Sign Up </p>
                        <form class="logSection">

                        <div className="userBox">
                            <img src={User} alt=""/>
                            <input class="Enter Name" type="Name" placeholder="Name"/>
                        </div>
                        
                        <div className="email">
                            <img src={Email} alt=""/>
                            <input class="Enter Email" type="Email" placeholder="Email"/>
                        </div>
                        
                        <div className="password">
                            <img src={Password} alt=""/>
                            <input class="password" type="password" placeholder="Password"/>
                        </div>
                        
                        <div className="rePassword">
                            <img src={rePassword} alt=""/>
                            <input class="Please enter your password agian" type="password" placeholder="re enter password"/>
                        </div>
            


                        <label for="submit"></label>

                        </form>
                        <meta name="google-signin-client_id" content="12345678-gbgin9h7q69rpjehq1cd2441b4nosnid.apps.googleusercontent.com"></meta>
                        
                        <GoogleLogin
                                clientId="887867364491-umfteuv0gbpsbdamnh173rb9j2ljcfqr.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
    
                        <input class="CREATE AN ACCOUNT" type="submit"/>
                </div>
                </main>
                <Footer/>
            </html>
        );
    }
}
 
export default Signuppage;