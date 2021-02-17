import React, { Component } from 'react';
import NWLOGO from '../../Images/NWLOGO.png'
import auth from '../../Auth';
import './style.css'
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (

            <header className='mainHeader'>
                <img src={NWLOGO} alt="" className="image" />

                <Link className="options"style={{ textDecoration: 'none' }} to="/">
                    HOME
                </Link>
                <nav className="options">DISCOVERY</nav>
                <nav className="options" href="">SOCIAL</nav>
                <nav className="options">CONTACT</nav>
                <div className="profLog">
                    <Link className="myProfileBtn" style={{ textDecoration: 'none' }} to="/UserProfile" >
                        My profile
                    </Link>
                    <Link className="logOutBtn" style={{ textDecoration: 'none' }} onClick={() => {
                        auth.logout(() => {
                            this.props.history.push('/')
                        })
                    }}>
                        Log Out
                    </Link>
                </div>
            </header>

        );
    }
}


export default Header;