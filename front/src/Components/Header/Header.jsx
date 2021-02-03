import React, { Component } from 'react';
import NWLOGO from '../../Images/NWLOGO.png'
import './style.css'
import {Link} from 'react-router-dom'; 

class Header extends Component {
    render() { 
        return ( 
        
           <header className='mainHeader'>
               <div className="header">
                    <img src={NWLOGO} alt="" className="image"/>
                    <ul className="options">
                       <Link to="/home">
                            <li><a className="options" href="">HOME</a></li>
                       </Link>
                       <li><a className="options" href="">DISCOVERY</a></li> 
                       <li><a className="options" href="">SOCIAL</a></li> 
                    </ul>
                    <Link to="/SignIn" className="btn">
                        <button className="SignButton">SIGN IN</button> 
                    </Link>  
                </div>                    
           </header> 
        
        );
    }
}

 
export default Header;