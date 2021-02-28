import React from 'react';
import './../css/Home.css'
import Message from "./Message";

class Home extends React.Component {
  render() {
    return (
      <div id='home' className='container'>
        <div className='spacing home-text'>
          <h3 className='home-hi'>Hi, my name is</h3>
          <h1 className='home-name mt-4'>Tom Babu.</h1>
          <h2 className='home-role mt-4'>Master in Management Graduate.</h2>
          <h6 className='home-desc col-md-8 mt-4' >I am a Master in Management (MiM) student at ESCP Business School, specializing in International Business Development and Digital Project Management. I am an ambitious and curious person who loves to push limits and explore my potential. I am interested in developing new skills and more importantly gaining diverse experiences.</h6>
          <div className='mt-4'>
          <Message message='Get in Touch' />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;