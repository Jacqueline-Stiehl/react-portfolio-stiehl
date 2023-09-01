import { useState } from "react"
import "../src/App.css"
//import { Routes, Route, BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Project from "./components/Project"

function App() {
  // const [ contact, setContact ] = useState({fullname: "", email: "", message: ""})
  
  // function handleInputChange(e) {
  //   const fieldname = e.target.name
  //   const value = e.target.value
  //   const newData = {
  //     fullname: (e.target.name === "fullname") ? e.target.value : contact.fullname,
  //     email: (e.target.name === "email") ? e.target.value : contact.email,
  //     message: (e.target.name === "message") ? e.target.value : contact.message
  //   }
  //   setContact(newData)
  // }
  //OR:

//OR:
  //const handleInputChange = e => setContact({...contact, [e.target.name]: e.target.value})

  return (
    <>
      <div>
        <Header/>
        <Navigation/>
        <Project>
          <h1>About Me</h1>
          <p style={{border: "1px solid red"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Project>
        <Project>
          <h2>Portfolio</h2>
        </Project>
        <Project>
          <h3>Contact</h3>
        </Project>
        <Project>
          <h4>Resume</h4>
        </Project>
        {/* 1:15 to 1:18 mark on 8-23-23 recording */}
        {/* {onClick={true} (
          // <Project/>
        )} */}

        {/* <form>
          <input type="text" name="fullname" value={contact.fullname} onChange={handleInputChange}/>
          <input type="email" name="email" value={contact.email} onChange={handleInputChange}/>
          <input type="text" name="message" value={contact.message} onChange={handleInputChange}/>
        </form> */}
        
        <Footer/>

        
      </div>
      
    </>
  )
}

export default App
