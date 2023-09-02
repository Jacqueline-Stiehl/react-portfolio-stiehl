import { useState } from "react"
import "../src/App.css"
//import { Routes, Route, BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Project from "./components/Project"

function App() {

  return (
    <>
      <div>
        <Header/>
        {/* <Navigation/> */}
        <Project/>
        <Footer/>

        
      </div>
      
    </>
  )
}

export default App
