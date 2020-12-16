import React, { Component } from 'react';
import NWLOGO from '/Users/mirna/Documents/GitHub/cs2001-2020_21-group15/front/src/Images/NWLOGO.png'
import './style.css'

class Header extends Component {
    render() { 
        return (  
           <header id="header">
               <img src={NWLOGO} alt="" id="image"/>
               <ul id="lista" >
                   <li id="options"><a href=""><b>HOME</b></a></li>
                   <li id="options"><a href="">DISCOVERY</a></li>
                   <li id="options"><a href="">SOCIAL</a></li>
               </ul>
               <button class="btn">SIGN IN</button>
           </header> 
      
        );
    }
    
  
}

 
export default Header;