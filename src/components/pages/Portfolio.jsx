import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
         <Card style={{ height: "60vh", backgroundColor: "#f2e9e4", objectFit: "cover"}}>
           <Card.Title>Tech Blog</Card.Title>
           <Card.Img variant="top" src="../src/assets/Screenshot-MVC-techblog.png" fluid />
           <Card.Body>
             <Card.Link href="https://mvc-techblog-jstiehl-e87070ff2360.herokuapp.com/">Deployed App</Card.Link>
             <Card.Link href="https://github.com/Jacqueline-Stiehl/mvc-tech-blog-jstiehl">GitHub Repo</Card.Link>
           </Card.Body>
         </Card>
       </Col>
     ))}
     {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card style={{ height: "60vh", backgroundColor: "#f2e9e4", objectFit: "cover"}}>
           <Card.Title>Work Day Scheduler</Card.Title>
           <Card.Img variant="top" src="../src/assets/Screenshot-Work-Day-Scheduler.png" fluid/>
           <Card.Body>
             <Card.Link href="https://jacqueline-stiehl.github.io/3p-api-work-day-scheduler-jstiehl/">Deployed App</Card.Link>
             <Card.Link href="https://github.com/Jacqueline-Stiehl/3p-api-work-day-scheduler-jstiehl">GitHub Repo</Card.Link>
           </Card.Body>
         </Card>
       </Col>
     ))}
     {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card style={{ height: "60vh", backgroundColor: "#f2e9e4", objectFit: "cover"}}>
           <Card.Title>Employee Tracker</Card.Title>
           <Card.Img variant="top" src="../src/assets/ScreenshotSQL.png" fluid/>
           <Card.Body>
             <Card.Link href="https://watch.screencastify.com/v/geO9IJsDVBDcvCbN4xRj">Deployed App</Card.Link>
             <Card.Link href="https://github.com/Jacqueline-Stiehl/sql-employee-tracker-jstiehl">GitHub Repo</Card.Link>
             <Card.Text>
               
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
     ))}
     {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card style={{ height: "60vh", backgroundColor: "#f2e9e4", objectFit: "cover"}}>
           <Card.Title>Social Network</Card.Title>
           <Card.Img variant="top" src="../src/assets/Screenshot-NoSQL-socialnetwork.png" />
           <Card.Body>
             <Card.Link href="https://watch.screencastify.com/v/CzQ2eKVVoxhSFH8ChD3f">Deployed App</Card.Link>
             <Card.Link href="https://github.com/Jacqueline-Stiehl/nosql-socialnetwork-api-stiehl">GitHub Repo</Card.Link>
             <Card.Text>
               
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
     ))}
     {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card style={{ height: "60vh", backgroundColor: "#f2e9e4", objectFit: "cover"}}>
           <Card.Title>PWA Text Editor</Card.Title>
           <Card.Img variant="top" src="../src/assets/Screenshot-pwa-texteditor.png" />
           <Card.Body>
             <Card.Link href="https://pwa-texteditor-jstiehl-2eb963dc3224.herokuapp.com/">Deployed App</Card.Link>
             <Card.Link href="https://github.com/Jacqueline-Stiehl/pwa-texteditor-jstiehl">GitHub Repo</Card.Link>
             <Card.Text> 
               
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
     ))}
     
     {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card style={{ height: "60vh", backgroundColor: "#f2e9e4", objectFit: "cover"}}>
           <Card.Title>Express Note Taker</Card.Title>
           <Card.Img variant="top" src="../src/assets/Screenshot-notetaker.png" />
           <Card.Body>
             <Card.Link href="https://note-taker-jstiehl-df68c54ee51b.herokuapp.com/">Deployed App</Card.Link>
             <Card.Link href="https://github.com/Jacqueline-Stiehl/express-js-note-taker-jstiehl">GitHub Repo</Card.Link>
             <Card.Text>
               
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
     ))}
   </Row>
   <Row xs={1} md={2} lg={3} className="g-4">
   </Row>
   <Row xs={1} md={2} lg={3} className="g-4">
   </Row>
   </div>
   </>
  );
}