import React from 'react';
import { useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { validateEmail } from "../../utils/helper";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;

  if (inputType === "fullName") {
    setFullName(inputValue);
  } else if (inputType === "email") {
    setEmail(inputValue);
  } else {
    setMsg(inputValue);
  }
};

const handleInputBlur = (e) => {
  const field = e.target.name
  if (field === "fullName") {
    if (!e.target.value) {
      setErrorMessage("Please enter your full name")
    }
  } else if (field === "email") {
    if (!e.target.value || !validateEmail(e.target.value)) {
      setErrorMessage("Please enter a valid email")
    }
  } else {
    if (!e.target.value) {
      setErrorMessage("Please enter a message")
    }
  }
}

const handleFormSubmit = (e) => {
  e.preventDefault();
  
  if (!fullName) {
    setErrorMessage("Please enter your full name");
    return;
  }
  if (!validateEmail(email)) {
    setErrorMessage("Please enter a valid email");
    return;
  }
  if (!msg) {
    setErrorMessage("Please enter a message");
    return;
  }

  setFullName("");
  setEmail("");
  setMsg("");
};

return (
    <>
    <div>
      <h1>Contact Me</h1>
    </div>
    <div>
    <Form>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Full name</Form.Label>
            <Form.Control 
              fieldType="input"
              type="text" 
              name="fullName" 
              placeholder="Enter your full name" 
              value={fullName} 
              onBlur={handleInputBlur}
              onChange={handleInputChange} 
            />
            <Form.Label>Email</Form.Label>
            <Form.Control 
              fieldType="input"
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              value={email} 
              onBlur={handleInputBlur}
              onChange={handleInputChange} 
            />
            <Form.Label>Message</Form.Label>
            <Form.Control 
              fieldType="input"
              type="text" 
              name="msg" 
              placeholder="Enter a message" 
              value={msg} 
              onBlur={handleInputBlur}
              onChange={handleInputChange}
            />   
        </Form.Group>
      
      <Button variant="primary" onClick={handleFormSubmit}>Submit</Button>

      </Form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
          </div>
      )}
    </div>
    </>
)
} 