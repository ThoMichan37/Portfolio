import React from "react";
import {Col, Row} from 'react-bootstrap'
import profile from './../files/Tom.jpg'
import './../css/Common.css'
import './../css/About.css'

class About extends React.Component {
  render() {
    return (
      <div className='spacing container' id='about'>
        <h1>About Me</h1>
        <Row className='mt-5'>
          <Col md={6} className='text-left order-2 order-md-1 order-lg-1 order-xl-1'>
            <p>
              After my Bachelors in Electronics and communication from Kannur University, I joined Anntech Offshore Engineering Pvt. Ltd. as an HR manager, in the Industrial Automation sector. I worked here for more than a year, in different capacities, before starting a company of my own in the same sector. This introduced me to more new experiences like negotiations, account management etc. All these experiences made me want to learn more about business administration and management, which led me to ESCP Business School. 
            </p>
            <p>
                After I joined ESCP Business School, I learned more about the basics of management. Being able to relate what I learn to what I had done made the courses more interesting. Moreover, this helped me understand how I could have done better in the past and how I could apply my experiences to new situations. Currently I am looking cross-functional roles that would help me put this knowledge into action.
            </p>

          </Col>
          <Col md={6} className='order-1 order-md-2 order-lg-2 order-xl-2 my-auto'>
            <img className='photo' src={profile} alt='profile'/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;