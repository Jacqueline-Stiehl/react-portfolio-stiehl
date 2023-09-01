import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function Portfolio() {
  return (
    <>
    <div>
      <h1>Portfolio</h1>
    </div>
     <div>
       {/* { props.onClick === true ? (render) : (don't render)  (put everything below in here)} */}
     {/* render info below if user clicks Project tab in navbar */}
     <Row xs={1} md={2} className="g-4">
    
     {Array.from({ length: 2 }).map((_, idx) => (
       <Col key={idx}>
         <Card>
           <Card.Img variant="top" src="holder.js/100px160" />
           <Card.Body>
             <Card.Title>Social Network</Card.Title>
             <Card.Text>
               Text here
             </Card.Text>
           </Card.Body>
         </Card>
         <Card>
           <Card.Img variant="top" src="holder.js/100px160" />
           <Card.Body>
             <Card.Title>Other</Card.Title>
             <Card.Text>
               Text here
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
     ))}
   </Row>
   <Row xs={1} md={2} className="g-4">
     {Array.from({ length: 2 }).map((_, idx) => (
       <Col key={idx}>
         <Card>
           <Card.Img variant="top" src="holder.js/100px160" />
           <Card.Body>
             <Card.Title>Tech Blog</Card.Title>
             <Card.Text>
               Text here
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
     ))}
   </Row>
   <Row xs={1} md={2} className="g-4">
     {Array.from({ length: 2 }).map((_, idx) => (
       <Col key={idx}>
         <Card>
           <Card.Img variant="top" src="holder.js/100px160" />
           <Card.Body>
             <Card.Title>Employee Tracker</Card.Title>
             <Card.Text>
               Text here
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
     ))}
   </Row>
   </div>
    
   </>
  );
}