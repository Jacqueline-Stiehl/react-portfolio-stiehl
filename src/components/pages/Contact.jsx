import React from 'react';
import { useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const defaultUser = {
    fullname: "",
    email: "",
    msg: ""
  }

export default function Contact() {

    const [ userData, setUserData ] = useState(defaultUser)
    const [ formState, setFormState ] = useState("")
    const [ alertState, setAlertState ] = useState({type: "", message: ""})
  
    function handleInputChange (e) {
      setUserData({
          ...userData,
          [e.target.name]: e.target.value
      })
    }
  
    function submitForm(e) {
      e.preventDefault()
      setAlertState({ type: "", message: ""})
      let errorsFound = false
      console.log(userData)
  
      Object.keys(userData).forEach( key => {
          if( userData[key].length === 0 ) errorsFound = true
      }) 
          if (errorsFound === false) {
            setAlertState({type: "success", message: "You successfully submitted your message."})
          } else {
            setAlertState({type: "danger", message: "Please fill out all fields."})
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
        <Form.Group key={field.prop} className="mb-3" controlId={`exampleForm.${field.prop}`}>
          <Form.Label>{field.label}</Form.Label>
            <Form.Control 
              type={field.type} 
              name={field.prop} 
              placeholder={field.placeholder} 
              value={userData[field.prop]} 
              onChange={handleInputChange} 
            />
        </Form.Group>
      ))}
      <Button variant="primary" onClick={submitForm}>Submit</Button>

      { alertState.type.length > 0 && (
        <Alert variant={alertState.type} className="mt-2">
        {alertState.message}
      </Alert>
      )}
      </Form>
    </div>
    </>
  );
}