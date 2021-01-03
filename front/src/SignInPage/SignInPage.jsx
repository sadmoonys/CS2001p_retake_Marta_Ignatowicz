import React, { Component } from 'react';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./SignInStyle.css"


class SignInPage extends Component {
    render() { 
        return (  
            <html>
                <Header/>
                <main>
                <div class="yellowBox">
                        <p class="logIn">Log in</p>
                        <form class="logSection">
                            <label for="username"> User</label>
                            <input class="username" type="text" placeholder="User name"/>
                            <label for="password">Password</label>
                            <input class="password" type="password" placeholder="Password"/>
                            <label for="submit"></label>
                        </form>
                        <input class="submit" type="submit"/>
                </div>
                </main>
                <Footer/>
            </html>
        );
    }
}
 
export default SignInPage;