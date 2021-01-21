import React, { Component } from 'react';
import NWLOGO from '../../Images/NWLOGO.png'
import './style.css'
import {Link} from 'react-router-dom'; 

class Header extends Component {
    render() { 
        return ( 
        
           <header class="header">
                    <img src={NWLOGO} alt="" class="image"/>
                    <ul className="options">
                       <Link to="/home">
                            <li><a class="options" href="">HOME</a></li>
                       </Link>
                       <li><a class="options" href="">DISCOVERY</a></li> 
                       <li><a class="options" href="">SOCIAL</a></li> 
                    </ul>
                    <Link to="/SignIn" class="btn">
                        <button className="SignButton">SIGN IN</button> 
                    </Link>                      
           </header> 
        
        );
    }
}

 
export default Header;