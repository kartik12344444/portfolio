import React, { Component } from 'react'
import './Resume.css'
import {BsLinkedin, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import edu from './Images/edu.png'


export class Resume extends Component {
  

  render() {
    return (
      <div>
        <h1 id='resumeid' className='headport1'>Resume <hr/></h1>
         <div className='resume'>
         <h1 className='headedu'>Education <hr/></h1>
            <div className='main'>
           <div className='education'>
           <div className='educate1'>
           <h3>Visvesvaraya Technological University <span><button className='btn'>2017-2021</button></span></h3>
           <h4>ACS College of Engineering</h4>
           <h5>Bachelors of Engineering in Aeronautics </h5>
           </div>
           <div className='educate2'>
           <h3>Mahesh PU College<span><button className='btn1'>2015-2017</button></span></h3>
           <h4>Pre-University</h4>
           </div>
           <div className='educate3'>
           <h3>Shalmala High School Dharwad<span><button className='btn2'>2014-2015</button></span></h3>
           <h4>High School Education</h4>
           </div>
           </div>
           
            <div className='symbol'>
           <div><img src={edu}></img></div>
           <div className='symbolasset'>
             < BsLinkedin /> < BsInstagram/> <AiFillGithub/> <AiFillTwitterCircle/> </div>
           </div>
         </div>
         <h4 className='resumelink'><a href="https://drive.google.com/file/d/1LwpLPrUyQ7tl0V2gYslnGoCCNjzY4qfV/view?usp=drivesdk"><button id='resid'>Click here to view the Resume</button></a></h4>
         </div>
         
         
      </div>
    )
  }
}

export default Resume
