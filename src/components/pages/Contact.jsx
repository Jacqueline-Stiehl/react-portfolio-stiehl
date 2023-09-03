import React from 'react';
import { useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { validateEmail } from "../../utils/helper";

const defaultUser = {
    fullname: "",
    email: "",
    msg: ""
  }

export default function Contact() {

    const [ userData, setUserData ] = useState(defaultUser)
    const [ formState, setFormState ] = useState("")
    const [ alertState, setAlertState ] = useState({type: "", message: ""})
    const [ currentError, setCurrentError ] = useState({ field: "", msg: ""})
  
    // function handleInputChange (e) {
    //   setUserData({
    //       ...userData,
    //       [e.target.name]: e.target.value
    //   })
    // }

    function handleInputBlur(e){
      if (!userData[e.target.name]){
        setCurrentError({field: e.target.name, msg: "Fill out the name field."})
      }
    }

    // function handleInputBlur(e){
    //   if (!userData[defaultUser.fullname]){
    //     setCurrentError({field: defaultUser.fullname, msg: "Fill out the name field."})
    //   } if (!userData[defaultUser.email]) {
    //     setCurrentError({field: defaultUser.email, msg: "Fill out your email."})
    //   } else { 
    //     setCurrentError({field: "msg", msg: "Fill in a message."})
    //   }
    // }
    
  
    function submitForm(e) {
      e.preventDefault()
      setAlertState({ type: "", message: ""})
      let errorsFound = false
      console.log(userData)
  
      // Object.keys(userData).forEach( key => {
      //     if( userData[key].length === 0 ) errorsFound = true
      // }) 
      //     if (errorsFound === false) {
      //       setAlertState({type: "success", message: "You successfully submitted your message."})
      //     } else {
      //       setAlertState({type: "danger", message: "Please fill out all fields."})
      //     }
      //  }

       Object.keys(fullname) (key => {
        if(fullname[key].length === 0 ) errorsFound = true
       })
        if (errorsFound === false) {
          setAlertState({type: "success", message: "You successfully submitted your message."})
        } else {
          setAlertState({type: "danger", message: "Please enter your full name."})
        }
      }
    
    const allFields = [
      { fieldType: "input", type: "text", prop: "fullname", label: "Full Name", placeholder: "Enter your full name", options: [] },
      { fieldType: "input", type: "email", prop: "email", label: "Email", placeholder: "Enter your email", options: [] },
      { fieldType: "input", type: "text", prop: "msg", label: "Message", placeholder: "Enter your message", options: [] }
  ]

  return (
    <>
    <div>
      <h1>Contact </h1>
    </div>
    <div>
    <Form>
      { allFields.map( field => (
        <Form.Group key={field.prop} className="mb-3 w-50" controlId={`exampleForm.${field.prop}`}>
          <Form.Label>{field.label}</Form.Label>
            <Form.Control 
              type={field.type} 
              name={field.prop} 
              placeholder={field.placeholder} 
              value={userData[field.prop]} 
              onBlur={handleInputBlur}
              onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})}
              // onChange={handleInputChange} 
            />
            {/* this one works-ish */}
            {/* { currentError.field === field.prop}{
              <p>{currentError.msg}</p>
            } */}
            { currentError.fullname === "text"}{
              <p>{currentError.msg}</p>
            }
        </Form.Group>
      ))}
      <Button variant="primary" onClick={submitForm}>Submit</Button>

      { alertState.type.length > 0 && (
        <Alert variant={alertState.type} className="mt-2 w-50">
        {alertState.message}
      </Alert>
      )}
      </Form>
    </div>
    </>
  );
}