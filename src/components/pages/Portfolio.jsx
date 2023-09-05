import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

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
           {/* <Card.Img variant="top" src="../src/assets/Pic3.jpg" fluid/> */}
           <Card.Body>
             
             {/* <Button a href="https://mvc-techblog-jstiehl-e87070ff2360.herokuapp.com/" variant="dark">Deployed App</Button> */}
             {/* <Button a href="https://mvc-techblog-jstiehl-e87070ff2360.herokuapp.com/" variant="dark">GitHub Repo</Button> */}
             <Card.Link href="https://mvc-techblog-jstiehl-e87070ff2360.herokuapp.com/">Deployed App</Card.Link>
             <Card.Link href="https://github.com/Jacqueline-Stiehl/mvc-tech-blog-jstiehl">GitHub Repo</Card.Link>
             {/* <Card.Text>
               
             </Card.Text> */}
           </Card.Body>
         </Card>
       </Col>
     ))}
     {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card style={{ height: "60vh", backgroundColor: "#f2e9e4", objectFit: "cover"}}>
           <Card.Title>Work Day Scheduler</Card.Title>
           <Card.Img variant="top" src="../src/assets/Screenshot-Work-Day-Scheduler.png" fluid/>
           {/* <Card.Img variant="top" src="../src/assets/Pic4.jpg" fluid /> */}
           <Card.Body>
             
             {/* <Button a href="https://jacqueline-stiehl.github.io/3p-api-work-day-scheduler-jstiehl/" variant="dark">Work Day Scheduler</Button> */}
             <Card.Link href="https://jacqueline-stiehl.github.io/3p-api-work-day-scheduler-jstiehl/">Deployed App</Card.Link>
             <Card.Link href="https://github.com/Jacqueline-Stiehl/3p-api-work-day-scheduler-jstiehl">GitHub Repo</Card.Link>
             {/* <Card.Text> 
      
             </Card.Text> */}
           </Card.Body>
         </Card>
       </Col>
     ))}
     {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card style={{ height: "60vh", backgroundColor: "#f2e9e4", objectFit: "cover"}}>
           <Card.Title>Employee Tracker</Card.Title>
           <Card.Img variant="top" src="../src/assets/ScreenshotSQL.png" fluid/>
           {/* <Card.Img variant="top" src="../src/assets/Pic8.jpg" fluid/> */}
           <Card.Body>
             
             {/* <Button a href="https://watch.screencastify.com/v/geO9IJsDVBDcvCbN4xRj" variant="info">Employee Tracker</Button> */}
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
           {/* <Card.Img variant="top" src="../src/assets/Pic10.jpg" /> */}
           <Card.Body>
             
             {/* <Button a href="https://watch.screencastify.com/v/CzQ2eKVVoxhSFH8ChD3f" variant="info">Social Network</Button> */}
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
           {/* <Card.Img variant="top" src="../src/assets/Pic1.jpg" /> */}
           <Card.Body>
             {/* <Card.Title>PWA Text Editor</Card.Title> */}
             {/* <Button a href="https://pwa-texteditor-jstiehl-2eb963dc3224.herokuapp.com/" variant="info">PWA Text Editor</Button> */}
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
           {/* <Card.Img variant="top" src="../src/assets/Pic7.jpg" /> */}
           <Card.Body>
             
             {/* <Button a href="https://note-taker-jstiehl-df68c54ee51b.herokuapp.com/" variant="info">Express Note Taker</Button> */}
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