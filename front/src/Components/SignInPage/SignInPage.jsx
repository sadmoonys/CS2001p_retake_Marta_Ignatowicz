import React, { Component } from 'react';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./SignInStyle.css"
import User from '../../Images/user.svg'
import Password from '../../Images/vpn_key-24px.svg'
import axios from 'axios'
import auth from '../../Auth'


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

        const { username, password } = this.state;

        return (
            <section>
                <Header />
                <main>
                    <div className="yellowBox">
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
                    </div>
                </main>
                <Footer />
            </section>
        );
    }
}

export default SignInPage;