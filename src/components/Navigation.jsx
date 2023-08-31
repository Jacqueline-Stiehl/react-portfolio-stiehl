import React from "react";
import Nav from 'react-bootstrap/Nav';

//see Navbar.js in activity #21 for below:
export default function Navigation() {
  const style = {
    card: { 
        background: "22223B", 
        padding: "5px", 
        margin: 20,
  },
    heading: {
        background: "22223B",
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: "1.2rem",
        color: "F2E9E4",
        padding: "20px",
    },
}

  return (
    <>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link style={{color: "#c9ada7"}} href="/home">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color: "#c9ada7"}} eventKey="link-1">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color: "#c9ada7"}} eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color: "#c9ada7"}} eventKey="link-2">Resume</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
    )
}
// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, 
//Contact, and Resume, and the title corresponding to the current 
//section is highlighted