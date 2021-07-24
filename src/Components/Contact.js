import React from 'react';
import {FaGithub,FaLinkedinIn,FaTwitter,FaMedium} from 'react-icons/fa';
export default function Contact(){
    return(
        <div>
            <div className="icons">
                <a className="icon" target="_blank" rel="noopener noreferrer" href="https://github.com/afroz23"><FaGithub/></a>
                <a className="icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/afrozquraishi/"><FaLinkedinIn/></a>
                <a className="icon" target="_blank" rel="noopener noreferrer" href="https://twitter.com/AfrozQuraishi_"><FaTwitter/></a>
                <a className="icon" target="_blank" rel="noopener noreferrer"href="https://afroziiitian.medium.com/"><FaMedium/></a>
            </div>
        </div>
    );
}