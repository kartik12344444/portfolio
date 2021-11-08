import React, { Component } from 'react'
import './About.css';
import aboutme from './Images/aboume.png'
import {AiFillHtml5,AiFillGithub,AiFillCodepenCircle } from "react-icons/ai";
import {IoLogoJavascript} from "react-icons/io"
import {DiCss3, DiReact} from "react-icons/di"
import {SiNetlify} from "react-icons/si"

export class About extends Component {
  render() {
    return (
      <div>
        <div className='About1'>
          <div id='aboutid' className='aboutinfo'>
            <h1>About Me</h1>
            <hr/>
            <p>
              I am a Web Designer and Front-end Developer.I am interested in all kinds of visual communication,but my major focus is on designing web,mobile and tablet interfaces. I also have skills in other fields like logo design ,Web Development
            </p>
            <p>I enjoy turning complex problems to simple,beautiful and intuitive designs.When i am not pushing pixels you will find me reading books,gardening ,working out !!.</p>
            <div className='about5'>
          <AiFillHtml5/>
          <DiCss3/>
          <IoLogoJavascript/>
          < DiReact/>
          < AiFillGithub/>
          < SiNetlify/>
          <AiFillCodepenCircle/>
        </div>
          </div>
          <div ><img className='aboutme' src={aboutme} alt='image'></img></div>
        </div>
      </div>
    )
  }
}

export default About
