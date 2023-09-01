// WHEN I view the footer
// THEN I am presented with text or icon links to the 
//developer’s GitHub and LinkedIn profiles, and their 
//profile on a third platform (Stack Overflow, Twitter)

import React from "react";
import { useEffect, useState } from "react";
import { FaTwitter, FaTwitterSquare, FaLinkedinIn, FaLinkedin, FaGithubSquare, FaGithub } from 'react-icons/fa';
//import "../styles/Header.css"

//how to turn these into links?
function Footer() {
    return (
        <footer className="footer">
            <p> <FaGithub/> <FaLinkedinIn/> <FaTwitter/></p>
            <p><FaTwitterSquare/> <FaGithubSquare/> <FaLinkedin/></p>
        </footer>
    )
}
export default Footer;
