import React from "react";
import "./../css/Footer.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-spacing foot">
        <p className="footer">Built using React.Js by Tom Babu.</p>
        {/*<a
          className="github"
          href="https://github.com/vinay-sj/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" className='mr-2'/>
        </a>*/}
      </div>
    );
  }
}