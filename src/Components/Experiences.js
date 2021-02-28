import React from "react";
import  './../css/Experience.css'
// import {Row, Col} from 'react-bootstrap'
// class Experiences extends React.Component {
//   render() {
//     return (
//       <div className='spacing' id='work'>
//         <h1>Where I've worked</h1>
//         <div className='container'>
//               <ul className="timeline">
//                 <li>
//                   <Row>
//                     {/*<>*/}
//                     <Col md={8}>
//                       <h4 className='company-name'>St. JOSEPH SYSTEMS AND CONTROL LLP</h4>
//                     </Col>
// 					 <Col md={8}>
//                       <h4 className='text-left'>Co-Founder/Director </h4>
//                     </Col>
//                     <Col md={4}>
//                         {/* <div className="text-left text-md-right text-lg-right text-xl-right">November, 2017 - August, 2019</div>*/}
//                     </Col>
//                   </Row>
//                   <ul className='text-left'>
//                     <li>
//                       Co-Founded the company.
//                     </li>
//                     <li>
//                       Studied the market and planned operations accordingly to create a reasonable and profitable quotation for negotiations.
//                     </li>
// 					<li>
//                       Met with potential clients to pitch and conduct presentations to acquire new projects.
//                     </li>
// 					<li>
//                       Successfully completed the awarded project well within the specified time.
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <Row>
//                       <Col md={8}>
//                   <h4 className='company-name'> ANNTECH OFFSHORE ENGINEERING PVT LTD</h4>
//                       </Col>
// 					     <Col md={8}>
//                   <h4 className='text-left'>ADMINISTRATOR </h4>
//                       </Col>
//                       <Col md={4}>
//                   {/*<div className="text-left text-md-right text-lg-right text-xl-right">May, 2020 - August, 2020</div>*/}
//                     </Col>
//                   </Row>
//                   <ul className='text-left'>
//                     <li>
//                       Oversaw the closure of the project.
//                     </li>
//                     <li>
//                       Supervised the site acceptance tests and reconciliation which are vital for the final bill submission.
//                     </li>
//                     <li>
//                       Represented Vistan Health at the MIT COVID-19 Challenge and the Crisis Challenge Innovation Competition
//                     </li>
//                   </ul>
//
//                   <Row>
//                     <Col md={8}>
//                     <h4 className='text-left'>PROJECT COORDINATOR </h4>
//                     </Col>
//                     <Col md={4}>
//                     {/* <div className="text-left text-md-right text-lg-right text-xl-right">January, 2017 - August, 2019</div>*/}
//                     </Col>
//                   </Row>
//                   <ul className='text-left'>
//                     <li>
//                       Led the project to completion even with a time and budgetary constrain.
//                     </li>
//                     <li>
//                       Coordinated the operations of a project employing more than 60 personnel to the satisfaction of the client and end user.
//                     </li>
//                     <li>
//                      Prepared work schedules and periodically updated the same based of client requirements and other factors.
//                       </li>
//                   </ul>
//
// 					<Row>
//                     <Col md={8}>
//                     <h4 className='text-left'>HR MANAGER </h4>
//                     </Col>
//                     <Col md={4}>
//                     {/*<div className="text-left text-md-right text-lg-right text-xl-right">January, 2017 - August, 2019</div>*/}
//                     </Col>
//                   </Row>
//                   <ul className='text-left'>
//                     <li>
//                       Established and maintained the infrastructure for mobilizing and demobilizing employees as per site requirement.
//                     </li>
//                     <li>
//                      Optimized the onboarding for new employees to reduce time and adapt to the strict no-phones policy at the worksite.
//                     </li>
//                   </ul>
//                 </li>
// =======
import './../css/Experience.css'
import json from "../files/json/experience.json";
import StepperContents from "./StepperContents";


function Experiences(props) {
    const experiences = JSON.parse(JSON.stringify(json));
    return (
        <div className='spacing' id='work'>
            <h1>Where I've worked</h1>
            <div className='container'>
                <div>
                    <StepperContents experiences={experiences}/>
                </div>
            </div>
        </div>

    );

}

export default Experiences;