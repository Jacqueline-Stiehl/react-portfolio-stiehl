import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import techBlog from "../../assets/Screenshot-MVC-techblog.png"
import socialNetwork from "../../assets/Screenshot-NoSQL-socialnetwork.png"
import noteTaker from "../../assets/Screenshot-notetaker.png"
import textEditor from "../../assets/Screenshot-pwa-texteditor.png"
import scheduler from "../../assets/Screenshot-Work-Day-Scheduler.png"
import sql from "../../assets/ScreenshotSQL.png"
import minnegrowta from "../../assets/Screenshot-Minnegrowta.png"
import sudoku from "../../assets/Screenshot-sudoku.png"

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
         <Card style={{ height: "80vh", backgroundColor: "#f2e9e4", objectFit: "cover"}}>
           <Card.Title>MinneGrowta</Card.Title>
           {/* <Card.Img variant="top" src={minnegrowta} fluid /> */}
           <Card.Img className="d-block w-100 block-example border border-dark" src={minnegrowta} fluid />
           <Card.Body>
             <Card.Link href="https://minnegrowta-66ed74e127f3.herokuapp.com/">Deployed App</Card.Link>
             <Card.Link href="https://github.com/laurbaur024/minnegrowta">GitHub Repo</Card.Link>
             <Card.Text>This application is a one-stop shop for information on starting your own vegetable, fruit, or
              flower garden in Minnesota with tips, a community forum, and planting and harvesting
              timelines.</Card.Text>
              <Card.Text>This was a group project and my core individual responsibilities included the sign up and
              log in features/components and the My Favorites page.</Card.Text>
              <Card.Text>This application was created using MERN, Chakra, Knightlab Timeline, React-Uploader,
              and React Modal.</Card.Text>
           </Card.Body>
           
         </Card>
       </Col>
     ))}
     {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card style={{ height: "80vh", backgroundColor: "#f2e9e4", objectFit: "cover"}}>
           <Card.Title>Tech Blog</Card.Title>
           <Card.Img variant="top" src={techBlog} fluid />
           <Card.Body>
             <Card.Link href="https://mvc-techblog-jstiehl-e87070ff2360.herokuapp.com/">Deployed App</Card.Link>
             <Card.Link href="https://github.com/Jacqueline-Stiehl/mvc-tech-blog-jstiehl">GitHub Repo</Card.Link>
             <Card.Text>This application is a tech blog site where users can read others' blog posts, comment on
              them, and sign up/log in to submit their own posts.</Card.Text>
              <Card.Text>This was an individual project created by me.</Card.Text>
              <Card.Text>This application follows the MVC structure and uses Handlebars.js, Sequelize and
              Express-session.</Card.Text>
           </Card.Body>
         </Card>
       </Col>
     ))}
     {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card style={{ height: "80vh", backgroundColor: "#f2e9e4", objectFit: "cover"}}>
           <Card.Title>Work Day Scheduler</Card.Title>
           <Card.Img variant="top" src={scheduler} fluid/>
           <Card.Body>
             <Card.Link href="https://jacqueline-stiehl.github.io/3p-api-work-day-scheduler-jstiehl/">Deployed App</Card.Link>
             <Card.Link href="https://github.com/Jacqueline-Stiehl/3p-api-work-day-scheduler-jstiehl">GitHub Repo</Card.Link>
             <Card.Text>This application is a password calendar with typical work day hours that is color coded according to past, present, and future hour time blocks. The user can enter and save tasks for each time block.</Card.Text>
              <Card.Text>This was an individual project created by me.</Card.Text>
              <Card.Text>This app uses jQuery and dynamically updated HTML.</Card.Text>
           </Card.Body>
         </Card>
       </Col>
     ))}
     {/* {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card style={{ height: "60vh", backgroundColor: "#f2e9e4", objectFit: "cover"}}>
           <Card.Title>Employee Tracker</Card.Title>
           <Card.Img variant="top" src={sql} fluid/>
           <Card.Body>
             <Card.Link href="https://watch.screencastify.com/v/geO9IJsDVBDcvCbN4xRj">Deployed App</Card.Link>
             <Card.Link href="https://github.com/Jacqueline-Stiehl/sql-employee-tracker-jstiehl">GitHub Repo</Card.Link>
             <Card.Text>
               
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
     ))} */}
     {/* {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card style={{ height: "60vh", backgroundColor: "#f2e9e4", objectFit: "cover"}}>
           <Card.Title>Social Network</Card.Title>
           <Card.Img variant="top" src={socialNetwork} />
           <Card.Body>
             <Card.Link href="https://watch.screencastify.com/v/CzQ2eKVVoxhSFH8ChD3f">Deployed App</Card.Link>
             <Card.Link href="https://github.com/Jacqueline-Stiehl/nosql-socialnetwork-api-stiehl">GitHub Repo</Card.Link>
             <Card.Text>
               
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
     ))} */}
     {/* {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card style={{ height: "60vh", backgroundColor: "#f2e9e4", objectFit: "cover"}}>
           <Card.Title>PWA Text Editor</Card.Title>
           <Card.Img variant="top" src={textEditor} />
           <Card.Body>
             <Card.Link href="https://pwa-texteditor-jstiehl-2eb963dc3224.herokuapp.com/">Deployed App</Card.Link>
             <Card.Link href="https://github.com/Jacqueline-Stiehl/pwa-texteditor-jstiehl">GitHub Repo</Card.Link>
             <Card.Text> 
               
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
     ))} */}
     
     {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card style={{ height: "80vh", backgroundColor: "#f2e9e4", objectFit: "cover"}}>
           <Card.Title>Express Note Taker</Card.Title>
           <Card.Img variant="top" src={noteTaker} />
           <Card.Body>
             <Card.Link href="https://note-taker-jstiehl-df68c54ee51b.herokuapp.com/">Deployed App</Card.Link>
             <Card.Link href="https://github.com/Jacqueline-Stiehl/express-js-note-taker-jstiehl">GitHub Repo</Card.Link>
             <Card.Text>This application is a Note Taker application that allows users to enter, save and delete notes. I built this to create a list of notes or reminders.</Card.Text>
              <Card.Text>This was an individual project from the University of Minnesota Bootcamp that I added code to.</Card.Text>
              <Card.Text>This app uses Express.js routes for GET, POST, PUT and DELETE to connect the front end and back end of the application.</Card.Text>
           </Card.Body>
         </Card>
       </Col>
     ))}
     {Array.from({ length: 1 }).map((_, idx) => (
       <Col key={idx}>
         <Card style={{ height: "80vh", backgroundColor: "#f2e9e4", objectFit: "cover"}}>
           <Card.Title>Sudoku</Card.Title>
           <Card.Img variant="top" src={sudoku} />
           <Card.Body>
             <Card.Link href="https://ad31aid.github.io/fantastic-octo-sudoku/">Deployed App</Card.Link>
             <Card.Link href="https://github.com/Ad31aid/fantastic-octo-sudoku">GitHub Repo</Card.Link>
             <Card.Text>This application is a sudoku game with a leaderboard page, timer, scoring system and completion celebration. The user can select from various games and enter their name to appear on the leaderboard.</Card.Text>
              <Card.Text>This was a group project and my core individual responsibilities included the leaderboard page.</Card.Text>
              <Card.Text>This app uses HTML, CSS, JavaScriptBootstrap, jQuery, Confetti library and a sudoku-api.</Card.Text>
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