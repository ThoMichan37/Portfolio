import React from 'react';
import {Tab, Tabs, TabPane, Container, Col, Row} from "react-bootstrap";
import flightbooking from '../files/flightbooking.png';
import issuetracker from '../files/issuetracker.png';
import objectperception from '../files/objectperception.jpg';
import duckiedrone from '../files/duckiedrone.png';
import imageprocess from '../files/imageprocess.jpg';
import lunarlander from '../files/lunarlander.png';
import smartcart from '../files/smartcart.jpeg';
import suntracking from '../files/suntracking.png';
import './../css/Project.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";

function content(name, img, githubLink, extLink, detailList, dir) {
  const details = (detailList) => {
    return (
      (detailList || []).map((detail, index) => {
        return (
          <li key={index}>{detail}</li>
        );
      })
    );
  }
  const linksinpage = (link, faGithub) => {
    if (link) {
      return (
        <a
          className="github"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" className='mr-4'/>
        </a>
      )
    } else {
      return (
        <></>
      )
    }
  }
  // const openLink = (link)
  const direction = (dir) => {
    if (dir === 'left') {
      return (
        <>
          <Col lg={6}><img className='project-img' src={img} /></Col>
          <Col lg={6} className="my-auto">
            <ul className='project-content'>
              {details(detailList)}
            </ul>
            {linksinpage(githubLink, faGithub)}
            {linksinpage(extLink, faExternalLinkAlt)}
          </Col>
        </>
      )
    } else {
      return (
        <>
          <Col lg={6} className='my-auto order-2 order-md-2 order-lg-1 order-xl-1'>
            <ul className='project-content'>
              {details(detailList)}
            </ul>
            {linksinpage(githubLink, faGithub)}
            {linksinpage(extLink, faExternalLinkAlt)}
          </Col>
          <Col lg={6} className='order-1 order-md-1 order-lg-2 order-xl-2 my-auto'><img className='project-img' src={img}/></Col>
        </>
      )
    }
  }
  return (
    <Container className='mt-4'>
      <h2 className='mb-3'>{name}</h2>
      <Row>
        {direction(dir)}
      </Row>
    </Container>
  )
}

class Projects extends React.Component {
  render() {
    return (
      <div className='spacing container' id='projects'>
        <h1>My Projects</h1>
        <Tabs defaultActiveKey="webdevproject" id="uncontrolled-tab-example" className='mt-5'>
          <Tab tabClassName='link-color' eventKey="webdevproject" title="Just Dream Flight Booking">
            {content('Just Dream Flight Booking', flightbooking, 'https://github.com/vinay-sj/Flight-Booking-UI', 'https://avengers-flightbooking-ui.herokuapp.com/',
              ['Created a Single Page Web Application using the MERN stack that provides a platform to book flight tickets and implemented all the CRUD operations on bookings and passenger details',
                'Developed backend Rest APIs and MongoDB to store and manipulate flight and passenger details',
                'Handled authentication of users using Google Sign-In for Websites, managed user sessions'], 'left')}
          </Tab>
          <Tab tabClassName='link-color' eventKey="webdev" title="Issue Tracker">
            {content('Issue Tracker', issuetracker, 'https://github.com/vinay-sj/Issue-Tracker', 'https://tracker-ui-vinay-sj.herokuapp.com/',
              ['Developed a Full-stack web application using the MERN stack that can be used to track issue lifecycle.',
                'Implemented authentication of users using Google Sign-In for Websites, managed different user profiles and developed backend APIs using GraphQL and MongoDB.',
                'Provided the user options to add, update, delete and view issues and track the status and effort of the issues.'], 'right')}
          </Tab>
          <Tab tabClassName='link-color' eventKey="roboticsvision" title="Object Perception">
            {content('Object Perception', objectperception, 'https://github.com/vinay-sj/Object-Perception', '',
              ['Tracked an object in a video using feature matching in real-time using OpenCV and determine its 3D position and orientation using quaternion',
                'Compared calculated pose to ground truth using ROS package AR Track Alvar by tracking an AR tag affixed on object'], 'left')}
          </Tab>
          <Tab tabClassName='link-color' eventKey="robotics" title="DuckieSky Drone">
            {content('DuckieSky Drone', duckiedrone, 'https://github.com/vinay-sj/DuckieSky-Drone', '',
              ['Built an autonomous Raspberry Pi drone using the Duckie Drone kit that can take-off, hover, and fly in various trajectories.',
                'Tuned the Planar, Altitude, and Position controllers using PIDs to control the velocity, altitude, and position, respectively, using ROS.'], 'right')}
          </Tab>
          <Tab tabClassName='link-color' eventKey="pdp" title="Image Processing Application">
            {content('Image Processing Application', imageprocess, 'https://github.com/vinay-sj/Image-Processor', '',
              ['Constructed an Image processing application in Java that performs Image Generation and Color Transformation operations using MVC architecture and design patterns',
                'Designed a UI using Java Swing that displays image and supports all functionalities and a command-line interface that can batch process multiple images'], 'left')}
          </Tab>
          <Tab tabClassName='link-color' eventKey="fai" title="OpenAI Gym LunarLander">
            {content('OpenAI Gym LunarLander using Reinforcement Learning', lunarlander, 'https://github.com/vinay-sj/Lunar-Lander', '',
              ['Devised an agent in Python to solve the OpenAI Gym LunarLander game by implementing Q-Learning and Approximate Q-Learning algorithms', 'Trained a Neural Network with two hidden layers using TensorFlow and solved LunarLander game using Policy Gradient algorithm',
                'Analyzed and documented agent’s performance by varying hyperparameters Alpha and Epsilon'], 'right')}
          </Tab>
          <Tab tabClassName='link-color' eventKey="finalproject" title="Smart Cart">
            {content('Smart Shopping Cart', smartcart, '', '', ['Assembled a shopping cart that follows the customer with an LPC2148 microcontroller integrated with an LCD, ZIGBEE transmitter, RFID reader, and a camera',
              'Computed the position of the customer by the means of MATLAB based image processing.',
              'Created a centralized automated billing system using Java to scan items in the cart and to automatically generate the bill.'], 'left')}
          </Tab>
          <Tab tabClassName='link-color' eventKey="miniproject" title="Sun Tracking Solar Panel">
            {content('Sun Tracking Solar Panel', suntracking, '', '',
              ['Built a solar panel that turns automatically towards the sun depending on the intensity of sunlight using a PIC16f883A.'], 'right')}
          </Tab>
        </Tabs>
      </div>
    );
  }
}


export default Projects;