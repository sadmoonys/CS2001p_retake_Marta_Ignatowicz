import React, { Component } from 'react';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./SignupStyle.css"
import { GoogleLogin } from 'react-google-login';
import User from "../../Images/account_circle-black-18dp.svg"
import Email from "../../Images/email-24px.svg"
import Password from "../../Images/done-24px.svg"
import rePassword from "../../Images/done_all-24px.svg"
import axios from 'axios'

class Signuppage extends Component {

  
  constructor (props){
      super(props);

      this.state = {
        username:'',
        email:'',
        password:'',
        confirmPass:''
      }
  }


  changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e =>{
      e.preventDefault();
      axios.post('/api/auth/signup', this.state)
      .then(response => {
         console.log(response)
     })
     .catch(error =>{
         console.log(error)
     })
     console.log(this.state)
  }
  
    render() {
        const responseGoogle = (response) => {
            console.log(response);
          }
        const {username, email, password, confirmPass} = this.state;

        return (  
            <html>
                <Header/>
                <main>
                <div class="yellowBoxUP">
                        <p class="signup">Sign Up </p>
                        <form class="logSection" onSubmit={this.submitHandler}>

                        <div className="userBox">
                            <img src={User} alt=""/>
                            <input 
                            class="Enter Name" 
                            type="text"
                            name="username"
                            placeholder="Name" 
                            value={username}
                            onChange={this.changeHandler}
                            />
                        </div>
                        
                        <div className="email">
                            <img src={Email} alt=""/>
                            <input 
                            class="Enter Email" 
                            type="text" 
                            name="email"
                            placeholder="Email" 
                            value={email}
                            onChange={this.changeHandler}
                            />
                        </div>
                        
                        <div className="password">
                            <img src={Password} alt=""/>
                            <input 
                            class="password" 
                            type="password" 
                            name="password"
                            placeholder="Password" 
                            value={password}
                            onChange={this.changeHandler}
                            />
                        </div>
                        
                        <div className="rePassword">
                            <img src={rePassword} alt=""/>
                            <input 
                            class="Please enter your password agian" 
                            type="password" 
                            name="confirmPass"
                            placeholder="re enter password" 
                            value={confirmPass}
                            onChange={this.changeHandler}
                            />
                        </div>
                        <button class="CREATE AN ACCOUNT" type="submit">Create Account</button>


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
    
                        
                </div>
                </main>
                <Footer/>
            </html>
        );
    }
}
 
export default Signuppage;
