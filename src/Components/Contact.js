import React from 'react';
import './../css/Contact.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Message from "./Message";

class Contact extends React.Component {
  render() {
    return (
      <div id='contact' className='spacing'>
        <h1>Contact</h1>

        <p className="mt-5 mb-4">I am currently looking for Full-time opportunities starting May 2021. My inbox is always open, even for just a 'Hi'.</p>

        <Message message='Message Me' />

        <p className="mt-5 mb-4">Or, you can connect with me on my social media!</p>

        <div className="text-center align-items-lg-center">
          <a
            className="github"
            href="https://github.com/vinay-sj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" className='mr-2'/>
          </a>
          <a
            className="github"
            href="https://www.linkedin.com/in/vinaysj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" className='mr-2'/>
          </a>

        </div>
      </div>
    );
  }
}

export default Contact