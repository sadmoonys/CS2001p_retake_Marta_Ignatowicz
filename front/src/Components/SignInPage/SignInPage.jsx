import React, { Component } from 'react';
import "./SignInStyle.css"
import User from '../../Images/user.svg'
import Password from '../../Images/vpn_key-24px.svg'
import axios from 'axios'
import auth from '../../Auth'
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';


class SignInPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();


        axios.post('http://localhost:8080/api/auth/signin', this.state)
            .then(response => {
                auth.authBearer(response.data)
                console.log(response.data)
                if (auth.login(response) === true) {
                    this.props.history.push('/Categories')
                }
            })
            .catch(error => {
                console.log(error)
            })
        console.log(this.state)
    }

    render() {
        const responseGoogle = (response) => {
            console.log(response);
          }

        const { username, password } = this.state;

        return (
            <section>
                <main>
                    <div className="greyBox">
                        <p className="logIn">Login</p>
                        <form className="logSection" onSubmit={this.submitHandler}>
                            <div className="username">
                                <img alt="" src={User} />
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="User name"
                                    value={username}
                                    onChange={this.changeHandler} />
                            </div>

                            <div className='password'>
                                <img src={Password} alt="" />
                                <input
                                    className="password"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={this.changeHandler} />
                            </div>
                            <input className="submit" type="submit" />
                        </form> 

                        <div className="or">or</div>
                        
                        <div classname="googleBtn">
                            <GoogleLogin
                                
                                clientId="887867364491-umfteuv0gbpsbdamnh173rb9j2ljcfqr.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                        <Link to="/" style={{ textDecoration: 'none' }} className="backHome"> Back home</Link>
                    </div>
                   
                </main>
            </section>
        );
    }
}

export default SignInPage;