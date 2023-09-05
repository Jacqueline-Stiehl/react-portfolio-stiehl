import React from 'react';
import { useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { validateEmail } from "../../utils/helper";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const handleInputBlur = (e) => {
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
  alert("Successful form submission");

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
      {/* { allFields.map( field => ( */}
        {/* <Form.Group key={field.prop} className="mb-3 w-50" controlId={`exampleForm.${field.prop}`}> */}
        <Form.Group className="mb-3 w-50">
          {/* <Form.Label>{field.label}</Form.Label> */}
          <Form.Label>Full name</Form.Label>
            <Form.Control 
              fieldType="input"
              type="text" 
              name="fullName" 
              placeholder="Enter your full name" 
              value={fullName} 
              onBlur={handleInputBlur}
              //onBlur={errorMessage}
              onChange={handleInputChange} 
              // onChange={(e) => setFullName({inputType: inputValue})}
            />
            <Form.Label>Email</Form.Label>
            <Form.Control 
              fieldType="input"
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              value={email} 
              onBlur={handleInputBlur}
              //onBlur={errorMessage}
              onChange={handleInputChange} 
              // onChange={(e) => setEmail({inputType: inputValue})}
            />
            <Form.Label>Message</Form.Label>
            <Form.Control 
              fieldType="input"
              type="text" 
              name="msg" 
              placeholder="Enter a message" 
              value={msg} 
              onBlur={handleInputBlur}
              //onBlur={errorMessage}
              onChange={handleInputChange}
              // onChange={(e) => setMsg({inputType: inputValue})}
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




////////////////////////////////////////////////export default function NameHere(){
//everything below was commented out on 9-3-23
//to try something based on React activity #16
// return (
// <>
// </>
// )
// const defaultUser = {
//     fullname: "",
//     email: "",
//     msg: ""
//   }

// export default function Contact() {

//     const [ userData, setUserData ] = useState(defaultUser)
//     const [ formState, setFormState ] = useState("")
//     const [ alertState, setAlertState ] = useState({type: "", message: ""})
//     const [ currentError, setCurrentError ] = useState({ field: "", msg: ""})
  
    // function handleInputChange (e) {
    //   setUserData({
    //       ...userData,
    //       [e.target.name]: e.target.value
    //   })
    // }

    // function handleInputBlur(e){
    //   if (!userData[e.target.name]){
    //     setCurrentError({field: e.target.name, msg: "Fill out the name field."})
    //   }
    // }

    // function handleInputBlur(e){
    //   if (!userData[defaultUser.fullname]){
    //     setCurrentError({field: defaultUser.fullname, msg: "Fill out the name field."})
    //   } if (!userData[defaultUser.email]) {
    //     setCurrentError({field: defaultUser.email, msg: "Fill out your email."})
    //   } else { 
    //     setCurrentError({field: "msg", msg: "Fill in a message."})
    //   }
    // }
    
  
    // function submitForm(e) {
    //   e.preventDefault()
    //   setAlertState({ type: "", message: ""})
    //   let errorsFound = false
    //   console.log(userData)
  
      // Object.keys(userData).forEach( key => {
      //     if( userData[key].length === 0 ) errorsFound = true
      // }) 
      //     if (errorsFound === false) {
      //       setAlertState({type: "success", message: "You successfully submitted your message."})
      //     } else {
      //       setAlertState({type: "danger", message: "Please fill out all fields."})
      //     }
      //  }

      //  Object.keys(fullname) (key => {
      //   if(fullname[key].length === 0 ) errorsFound = true
      //  })
      //   if (errorsFound === false) {
      //     setAlertState({type: "success", message: "You successfully submitted your message."})
      //   } else {
      //     setAlertState({type: "danger", message: "Please enter your full name."})
      //   }
      // }
    
  //   const allFields = [
  //     { fieldType: "input", type: "text", prop: "fullname", label: "Full Name", placeholder: "Enter your full name", options: [] },
  //     { fieldType: "input", type: "email", prop: "email", label: "Email", placeholder: "Enter your email", options: [] },
  //     { fieldType: "input", type: "text", prop: "msg", label: "Message", placeholder: "Enter your message", options: [] }
  // ]

//   return (
//     <>
//     <div>
//       <h1>Contact </h1>
//     </div>
//     <div>
//     <Form>
//       { allFields.map( field => (
//         <Form.Group key={field.prop} className="mb-3 w-50" controlId={`exampleForm.${field.prop}`}>
//           <Form.Label>{field.label}</Form.Label>
//             <Form.Control 
//               type={field.type} 
//               name={field.prop} 
//               placeholder={field.placeholder} 
//               value={userData[field.prop]} 
//               onBlur={handleInputBlur}
//               onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})}
//               // onChange={handleInputChange} 
//             />
//             {/* this one works-ish */}
//             {/* { currentError.field === field.prop}{
//               <p>{currentError.msg}</p>
//             } */}
//             { currentError.fullname === "text"}{
//               <p>{currentError.msg}</p>
//             }
//         </Form.Group>
//       ))}
//       <Button variant="primary" onClick={submitForm}>Submit</Button>

//       { alertState.type.length > 0 && (
//         <Alert variant={alertState.type} className="mt-2 w-50">
//         {alertState.message}
//       </Alert>
//       )}
//       </Form>
//     </div>
//     </>
//   );
// }