import React, { Component } from 'react'
import './PageError.css'
import Error  from '../../Images/sadfaceforerror.png'

class PageError extends Component {
    render() { 
        return (  
           <html>
           
            <div class="container-404">
            <p className="Sorry">Something went wrong!</p>
            <img class="image-404" src={Error} alt=""/>
            <p className='Four'> 404</p>
            <p className="Exist">The page you are looking for doesn’t exist or an other error has occurred.
            Go back, or head or head over to noteware.com to choose a new direction.</p>
        </div>
            

        </html> 
        );
    }
}
export default PageError;