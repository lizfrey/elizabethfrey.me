import React from 'react';
 
import github from '../extras/github.png'
import mail from '../extras/mail.png'
import linkedin from '../extras/linkedin.png'


function Contact (){
 return (
     <div class = "contact">
         <br></br>
        <h1>Contact Me</h1>
        <br></br>
        <a href="https://github.com/lizfrey">
            <img src={github} alt="github" className="contact-icon"/> 
        </a>
        <a href="mailto:ewillowfrey@gmail.com">
            <img src={mail} alt="email" className="contact-icon"/> 
        </a>
        <a href="https://www.linkedin.com/in/elizabethwfrey/">
            <img src={linkedin} alt="LinkedIN" className="contact-icon"/> 
        </a>
     </div>
 );
}
 
export default Contact;