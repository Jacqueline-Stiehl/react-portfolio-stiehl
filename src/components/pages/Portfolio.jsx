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
       
     <Row xs={1} md={2} lg={3} className="g-4">
     {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card>
           <Card.Img variant="top" src="../src/assets/Screenshot-MVC-techblog.png" />
           <Card.Body>
             <Card.Title>Tech Blog</Card.Title>
             <Button a href="https://mvc-techblog-jstiehl-e87070ff2360.herokuapp.com/" variant="primary">Tech Blog</Button>
             {/* <Card.Text>
               
             </Card.Text> */}
           </Card.Body>
         </Card>
       </Col>
     ))}
     {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card>
           <Card.Img variant="top" src="../src/assets/Screenshot-Work-Day-Scheduler.png" />
           <Card.Body>
             <Card.Title>Work Day Scheduler</Card.Title>
             <Button a href="https://jacqueline-stiehl.github.io/3p-api-work-day-scheduler-jstiehl/" variant="primary">Work Day Scheduler</Button>
             {/* <Card.Text>
      
             </Card.Text> */}
           </Card.Body>
         </Card>
       </Col>
     ))}
     {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card>
           <Card.Img variant="top" src="../src/assets/ScreenshotSQL.png" />
           <Card.Body>
             <Card.Title>Employee Tracker</Card.Title>
             <Button a href="https://watch.screencastify.com/v/geO9IJsDVBDcvCbN4xRj" variant="primary">Employee Tracker</Button>
             <Card.Text>
               
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
     ))}
     {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card>
           <Card.Img variant="top" src="../src/assets/Screenshot-NoSQL-socialnetwork.png" />
           <Card.Body>
             <Card.Title>Social Network</Card.Title>
             <Button a href="https://watch.screencastify.com/v/CzQ2eKVVoxhSFH8ChD3f" variant="primary">Social Network</Button>
             <Card.Text>
               
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
     ))}
     {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card>
           <Card.Img variant="top" src="../src/assets/Screenshot-pwa-texteditor.png" />
           <Card.Body>
             <Card.Title>PWA Text Editor</Card.Title>
             <Button a href="https://pwa-texteditor-jstiehl-2eb963dc3224.herokuapp.com/" variant="primary">PWA Text Editor</Button>
             <Card.Text> 
               
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
     ))}
     
     {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card>
           <Card.Img variant="top" src="../src/assets/Screenshot-notetaker.png" />
           <Card.Body>
             <Card.Title>Express Note Taker</Card.Title>
             <Button a href="https://note-taker-jstiehl-df68c54ee51b.herokuapp.com/" variant="primary">Express Note Taker</Button>
             <Card.Text>
               
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
     ))}
   </Row>
   <Row xs={1} md={2} lg={3} className="g-4">
     {/* {Array.from({ length: 1 }).map((_, idx) => (
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
     ))} */}
   </Row>
   <Row xs={1} md={2} lg={3} className="g-4">
     {/* {Array.from({ length: 1 }).map((_, idx) => (
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
     ))} */}
   </Row>
   </div>
    
   </>
  );
}