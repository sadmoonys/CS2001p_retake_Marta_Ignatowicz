import React, { Component } from 'react';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./SignupStyle.css"
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

class Signuppage extends Component {
    render() {
        const responseGoogle = (response) => {
            console.log(response);
          }
          
          const responseFacebook = (response) => {
            console.log(response);
          }
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

                            <label for="re enter password"> re-enter Password </label>
                            <input class="Please enter your password agian" type="password" placeholder="re enter password"/>


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