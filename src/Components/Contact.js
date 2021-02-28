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

        <p className="mt-5 mb-4">I AM CURRENTLY LOOKING FOR FULL-TIME OPPORTUNITIES STARTING MAY 2021. MY INBOX IS ALWAYS OPEN, EVEN FOR JUST A 'HI'.</p>

        <Message message='Message Me' />

        <p className="mt-5 mb-4">you can connect with me on my social media!</p>

        <div className="text-center align-items-lg-center">
         {/* <a
            className="github"
            href="https://github.com/vinay-sj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" className='mr-2'/>
          </a>*/}
          <a
            className="github"
            href="https://www.linkedin.com/in/tom-babu-296702114"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" className='mr-2'/>
          </a>

        </div>
		<p className="mt-5 mb-4">Or, you can connect call me!</p>

        <div className="text-center align-items-lg-center">
       
        <p className="mt-5 mb-4">+33-754066147</p>
           

        </div>
      </div>
    );
  }
}

export default Contact