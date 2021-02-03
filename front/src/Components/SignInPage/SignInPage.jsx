import React, { Component } from 'react';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./SignInStyle.css"
import User from '../../Images/account_circle-black-18dp.svg'
import Password from '../../Images/vpn_key-24px.svg'


class SignInPage extends Component {
    render() { 
        return (  
            <html>
                <Header/>
                <main>
                <div className="yellowBox">
                        <p className="logIn">Log in</p>
                        <form className="logSection">
                           
                           <div className="username">
                               <img src={User}></img>
                               <label for="username"></label> 
                                <input type="text" placeholder="User name"/>
                           </div>

                           <div className='password'>
                               <label for="c"></label>
                               <img src={Password} alt=""/>
                               <input className="password" type="password" placeholder="Password"/>
                           </div>

                            <label for="submit"></label>
                        </form>
                        <input className="submit" type="submit"/>
                </div>
                </main>
                <Footer/>
            </html>
        );
    }
}
 
export default SignInPage;