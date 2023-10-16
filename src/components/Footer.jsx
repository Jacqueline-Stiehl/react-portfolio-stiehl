import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer className="footer">
        <a href="https://github.com/Jacqueline-Stiehl" style={{color: "#c9ada7"}}>
        <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/jacqueline-stiehl-b6a810289/" style={{color: "#c9ada7"}}> <FaLinkedinIn/>
        </a>
        {/* <a href="https://twitter.com/salsajackiemom?lang=ar-x-fm" style={{color: "#c9ada7"}}> <FaTwitter/></a> */}
        <a href="mailto:salsajackie@yahoo.com" style={{color: "#c9ada7"}}> <FaEnvelope/></a>
        </footer>
        </>
    )
}
export default Footer;
