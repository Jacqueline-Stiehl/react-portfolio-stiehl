import React from "react"
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Navigation"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function Project() {
    const [currentPage, setCurrentPage] = useState("About");

const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
    </div>
  )
}