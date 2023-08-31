import { useState } from "react"
import "../src/App.css"
//import { Routes, Route, BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Project from "./components/Project"

function App() {
  // const [ contact, setContact ] = useState({fullname: "", email: "", message: ""})
  
  function handleInputChange(e) {
    const fieldname = e.target.name
    const value = e.target.value
    const newData = {
      fullname: (e.target.name === "fullname") ? e.target.value : contact.fullname,
      email: (e.target.name === "email") ? e.target.value : contact.email,
      message: (e.target.name === "message") ? e.target.value : contact.message
    }
    setContact(newData)
  }

  return (
    <>
      <div>
        <Header/>
        <Navigation/>
        <Project/>
        {/* 1:15 to 1:18 mark on 8-23-23 recording */}
        {/* {onClick={true} (
          <Project/>
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
