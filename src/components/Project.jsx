import React from "react"
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
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
// const defaultUser = {
//   fullname: "",
//   email: "",
//   msg: ""
// }

{/* sections:
    about me
    portfolio
    contact
    resume
*/} 
////////////////////////////////////////////////////////
//between the lines was moved to Contact.jsx
// export default function Project(){

//   const [ userData, setUserData ] = useState(defaultUser)
//   const [ formState, setFormState ] = useState("")
//   const [ alertState, setAlertState ] = useState({type: "", message: ""})

//   function handleInputChange (e) {
//     setUserData({
//         ...userData,
//         [e.target.name]: e.target.value
//     })
//   }

//   function submitForm(e) {
//     e.preventDefault()
//     setAlertState({ type: "", message: ""})
//     let errorsFound = false
//     console.log(userData)

//     Object.keys(userData).forEach( key => {
//         if( userData[key].length === 0 ) errorsFound = true
//     }) 
//         if (errorsFound === false) {
//           setAlertState({type: "success", message: "You successfully submitted your message."})
//         } else {
//           setAlertState({type: "danger", message: "Please fill out all fields."})
//         }
//      }
  
//   const allFields = [
//     { fieldType: "input", type: "text", prop: "fullname", label: "Full Name", placeholder: "Enter your full name", options: [] },
//     { fieldType: "input", type: "email", prop: "email", label: "Email", placeholder: "Enter your email", options: [] },
//     { fieldType: "input", type: "text", prop: "msg", label: "Message", placeholder: "Enter your message", options: [] }
// ]
///////////////////////////////////////////////////

  //   const [ hideText, setHideText ] = useState(false)
    //from 8-23-23 recording at 3:23
//   const [ contactForm, setContactForm ] = useState([])

//   async function getcontactForm() {
//     const resp = await fetch("")
//     const data = await resp.json()
//     setContactForm(data)
//   }

//   useEffect(() => {
//     console.log("URL changed")
//     getContactForm() take this one off if using with windows
//   }, [window.location.href])


//below was moved to Portfolio.jsx and Contact.jsx
//   return (
//     <>
//       <div>
//         {/* { props.onClick === true ? (render) : (don't render)  (put everything below in here)} */}
//       {/* render info below if user clicks Project tab in navbar */}
//       <Row xs={1} md={2} className="g-4">
     
//       {Array.from({ length: 2 }).map((_, idx) => (
//         <Col key={idx}>
//           <Card>
//             <Card.Img variant="top" src="holder.js/100px160" />
//             <Card.Body>
//               <Card.Title>Social Network</Card.Title>
//               <Card.Text>
//                 Text here
//               </Card.Text>
//             </Card.Body>
//           </Card>
//           <Card>
//             <Card.Img variant="top" src="holder.js/100px160" />
//             <Card.Body>
//               <Card.Title>Other</Card.Title>
//               <Card.Text>
//                 Text here
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//     <Row xs={1} md={2} className="g-4">
//       {Array.from({ length: 2 }).map((_, idx) => (
//         <Col key={idx}>
//           <Card>
//             <Card.Img variant="top" src="holder.js/100px160" />
//             <Card.Body>
//               <Card.Title>Tech Blog</Card.Title>
//               <Card.Text>
//                 Text here
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//     <Row xs={1} md={2} className="g-4">
//       {Array.from({ length: 2 }).map((_, idx) => (
//         <Col key={idx}>
//           <Card>
//             <Card.Img variant="top" src="holder.js/100px160" />
//             <Card.Body>
//               <Card.Title>Employee Tracker</Card.Title>
//               <Card.Text>
//                 Text here
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//     </div>
// <div>
//     <Form>
//       { allFields.map( field => (
//         <Form.Group key={field.prop} className="mb-3" controlId={`exampleForm.${field.prop}`}>
//           <Form.Label>{field.label}</Form.Label>
//           {/* { field.fieldType === "input" ? ( */}
//             <Form.Control 
//               type={field.type} 
//               name={field.prop} 
//               placeholder={field.placeholder} 
//               value={userData[field.prop]} 
//               onChange={handleInputChange} 
//             />
//           {/* ) : (
//             <Form.Select name={field.prop} aria-label={field.label} onChange={handleInputChange}>
//               <option value="">Choose</option>
//               { field.options.map( opt => (
//                 <option key={opt.code} value={opt.code}>{opt.code}</option>
//               ))}
//             </Form.Select> */}
//           {/* )} */}
//         </Form.Group>
//       ))}
//       <Button variant="primary" onClick={submitForm}>Submit</Button>

//       { alertState.type.length > 0 && (
//         <Alert variant={alertState.type} className="mt-2">
//         {alertState.message}
//       </Alert>
//       )}
//       </Form>
//     </div>
//    </>
//   )
// }