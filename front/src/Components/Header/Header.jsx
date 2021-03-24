import React, { Component } from 'react';
import NWLOGO from '../../Images/NWLOGO.png'
import './style.css'
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className='mainHeader'>
                <img src={NWLOGO} alt="" className="image" />
                <Link className="options"style={{ textDecoration: 'none' }} to="/">
                    Home
                </Link>
                <nav className="options">Discovery</nav>
                <nav className="options">Contact</nav>

                <Link style={{ textDecoration: 'none' }} to="/SignIn" className="SignButton">
                <img src={NWLOGO} alt="" className="image-singIn" />
                    Sign in
                </Link>
            </div>

        );
    }
}


export default Header;