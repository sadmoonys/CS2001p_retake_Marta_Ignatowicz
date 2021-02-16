import React, { Component } from 'react';
import NWLOGO from '../../Images/NWLOGO.png'
import './style.css'
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (

            <header className='mainHeader'>
                <img src={NWLOGO} alt="" className="image" />

                <Link className="optionHome"style={{ textDecoration: 'none' }} to="/">
                    <nav>HOME</nav>
                </Link>
                <nav className="options">DISCOVERY</nav>
                <nav className="options" href="">SOCIAL</nav>
                <nav className="options">CONTACT</nav>

                <Link style={{ textDecoration: 'none' }} to="/SignIn" className="SignButton">
                <img src={NWLOGO} alt="" className="image-singIn" />
                    Sign in
                </Link>
            </header>

        );
    }
}


export default Header;