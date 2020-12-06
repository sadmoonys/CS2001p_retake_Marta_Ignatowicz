import React, { Component } from 'react';
import NWLOGO from '/Users/leona/Desktop/GitHub/Front-End/front/src/Images/NWLOGO.png'
import './style.css'

class Header extends Component {
    render() { 
        return (  
           <header id="header">
               <img src={NWLOGO} alt="" id="image"/>
               <ul id="lista" >
                   <li id="options"><a href="">HOME</a></li>
                   <li id="options"><a href="">DISCOVERY</a></li>
                   <li id="options"><a href="">SOCIAL</a></li>
               </ul>
               <p id="sign"><a href="">sign In</a></p>
           </header> 
            
        );
    }
}
 
export default Header;