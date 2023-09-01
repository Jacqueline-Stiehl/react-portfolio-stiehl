import React from "react";
import { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav'; 
import 'bootstrap/dist/css/bootstrap.min.css';

//see Navbar.js in activity #21 for below:
export default function Navigation(props) {
  const [ hideText, setHideText ] = useState(false)

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

useEffect(() => {
    console.log("Hello")
}, [window.location.href])

//   async function getPortfolio(){
//     const resp = await Portfolio
//     const data = await resp.json()
//     setPortfolio(data)
//   }

  return (
    <>
      <Nav style={style.card} className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link onClick={() => props.handlePageChange('About')} style={style.heading} href="/home">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        {/* { hideText === false && (
            <>{ props.children }</>
          )} */}
        {/* <Nav.Link onBlur={() => setHideText(!hideText)} style={style.heading} href="#" eventKey="link-1">Portfolio</Nav.Link> */}
        <Nav.Link onClick={() => props.handlePageChange('Portfolio')} style={style.heading} href="#" eventKey="link-1">Portfolio</Nav.Link>
          {/* <Nav.Link onClick={getPortfolio} style={{color: "#c9ada7"}} eventKey="link-1">Portfolio</Nav.Link> */}
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => props.handlePageChange('Contact')} style={style.heading} href="#" eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => props.handlePageChange('Resume')} style={style.heading} href="#" eventKey="link-3">Resume</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
    )
}
// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, 
//Contact, and Resume, and the title corresponding to the current 
//section is highlighted